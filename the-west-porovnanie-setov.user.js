// ==UserScript==
// @name         The West – porovnanie setov
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.3.0
// @description  Porovná tvoje oblečenie z hry s ľubovoľnými predmetmi pre zvolený level, vrátane vylepšení ★1–★5 a set bonusov (rýchlosť, XP, zber produktov, šťastie, peniaze).
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @match        https://*.the-west.net/game.php*
// @run-at       document-idle
// @noframes
// @grant        none
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-porovnanie-setov.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-porovnanie-setov.user.js
// ==/UserScript==

(function () {
  'use strict';

  const SL = ['head', 'neck', 'body', 'belt', 'pants', 'foot', 'right_arm', 'left_arm', 'animal', 'yield'];
  const SN = { head: 'Hlava', neck: 'Krk', body: 'Telo', belt: 'Opasok', pants: 'Nohavice', foot: 'Topánky', right_arm: 'Zbraň (súboj)', left_arm: 'Zbraň (pevnosť)', animal: 'Zviera', yield: 'Produkt' };
  const ROWS = [
    ['animal', 'Rýchlosť zvieraťa', '%'], ['speed', 'Rýchlosť z predmetov', '%'], ['experience', 'Skúsenosti (XP)', '%'],
    ['drop', 'Zber produktov', '%'], ['luck', 'Šťastie', '%'], ['dollar', 'Peniaze', '%'], ['regen', 'Regenerácia', '%'], ['job', 'Pracovné body', '']
  ];
  const SORTS = [['cat', 'Kategórie (podľa eventu)'], ['experience', 'Najviac XP'], ['speed', 'Najviac rýchlosti'], ['animal', 'Najrýchlejšie zviera'], ['drop', 'Najviac zberu produktov'], ['luck', 'Najviac šťastia'], ['dollar', 'Najviac peňazí'], ['job', 'Najviac pracovných bodov'], ['az', 'Abecedne']];
  const EVENTS = [
    [/dod|dead/i, 'Day of the Dead'], [/oktoberfest/i, 'Oktoberfest'], [/easter/i, 'Veľká noc'], [/independence/i, 'Deň nezávislosti'],
    [/valentine/i, 'Valentín'], [/holiday|christmas|xmas|dedmoroz|santa/i, 'Vianoce'], [/birthday|b_day|bday/i, 'Narodeniny'],
    [/western_friday|black_friday|sale/i, 'Výpredaje'], [/soccer|football/i, 'Futbal'], [/ifbc|fortbattle|fort/i, 'Bitky o pevnosť'],
    [/okt_setwof|wof/i, 'Koleso šťastia'], [/carnival|fair/i, 'Jarmok / karneval'], [/halloween/i, 'Halloween']
  ];

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };

  // ---------- výpočet (používa vlastnú kalkulačku hry) ----------
  function compute(sel, L) {
    const ch = { level: L };
    const t = { animal: 0, speed: 0, experience: 0, drop: 0, luck: 0, dollar: 0, regen: 0, job: 0 };
    const add = (x, e) => {
      if (!x || !(x.key in t) || x.key === 'animal') return;
      if (x.key === 'job' && e && e.type === 'job' && e.job !== 'all') return;
      t[x.key] += Number(x.value) || 0;
    };
    const cnt = {};
    for (const s of SL) {
      const p = sel[s]; if (!p || !p.base) continue;
      const it = ItemManager.get(p.base * 1000 + (p.lvl || 0)) || ItemManager.get(p.base * 1000); if (!it) continue;
      const bx = new west.item.BonusExtractor(ch, it.item_level || 0);
      for (const e of ((it.bonus && it.bonus.item) || [])) add(bx.getExportValue(e), e);
      if (it.speed) t.animal = Math.max(t.animal, 1 / it.speed - 1);
      if (it.set) cnt[it.set] = (cnt[it.set] || 0) + 1;
    }
    const sets = [];
    const bx0 = new west.item.BonusExtractor(ch, 0);
    for (const k in cnt) {
      const s = west.storage.ItemSetManager.get(k); if (!s) continue;
      if (cnt[k] >= 2) sets.push(s.name.trim() + ' ' + cnt[k] + '/' + s.items.length);
      for (const e of (s.getMergedStages(cnt[k]) || [])) add(bx0.getExportValue(e), e);
    }
    const o = {};
    for (const k in t) o[k] = k === 'job' ? Math.round(t[k]) : Math.round(t[k] * 1000) / 10;
    o.sets = sets;
    return o;
  }

  // hodnota jedného predmetu (na zoradenie zoznamov)
  const single = {};
  function itemValue(base, key, L) {
    const ck = base + '|' + L; let v = single[ck];
    if (!v) { const sel = {}; const it = ItemManager.get(base * 1000); sel[it.type] = { base, lvl: 0 }; v = single[ck] = compute(sel, L); }
    return v[key] || 0;
  }

  // hodnota celého setu (všetky kusy, ktoré sa zmestia do slotov), na zoradenie setov
  const setCache = {};
  function setValue(setKey, key, L) {
    const ck = setKey + '|' + L; let v = setCache[ck];
    if (!v) {
      const si = CAT.setInfo[setKey]; const sel = {};
      for (const id of (si ? si.items : [])) { const it = ItemManager.get(id * 1000) || ItemManager.get(id); if (it && SL.includes(it.type) && !sel[it.type]) sel[it.type] = { base: it.item_base_id || Math.floor(it.item_id / 1000), lvl: 0 }; }
      v = setCache[ck] = compute(sel, L);
    }
    return v[key] || 0;
  }
  const SORTNAME = { experience: 'XP', speed: 'rýchlosť', animal: 'rýchlosť zvieraťa', drop: 'zber produktov', luck: 'šťastie', dollar: 'peniaze', job: 'pracovné body' };
  function setOptions(sort, L) {
    let h = '<option value="">Načítať celý set…</option>';
    const sets = Object.values(CAT.setInfo);
    if (SORTNAME[sort]) {
      const unit = sort === 'job' ? '' : ' %';
      const sc = sets.map(s => [s, setValue(s.key, sort, L)]);
      const pos = sc.filter(p => p[1] > 0).sort((a, b) => b[1] - a[1]);
      h += `<optgroup label="Najlepšie sety – ${SORTNAME[sort]}">` + pos.map(([s, v]) => `<option value="${esc(s.key)}">[+${v}${unit}] ${esc(s.name)} (${s.items.length} ks)</option>`).join('') + '</optgroup>';
      const zero = sc.filter(p => p[1] <= 0).map(p => p[0]).sort((a, b) => a.name.localeCompare(b.name));
      h += `<optgroup label="Bez bonusu – ${SORTNAME[sort]}">` + zero.map(s => `<option value="${esc(s.key)}">${esc(s.name)} (${s.items.length} ks)</option>`).join('') + '</optgroup>';
    } else {
      for (const g of CAT.groups) h += `<optgroup label="${esc(g)}">` + sets.filter(s => s.group === g).sort((a, b) => a.name.localeCompare(b.name)).map(s => `<option value="${esc(s.key)}">${esc(s.name)} (${s.items.length} ks)</option>`).join('') + '</optgroup>';
    }
    return h;
  }

  // ---------- katalóg predmetov ----------
  let CAT = null;
  function buildCatalog() {
    const all = ItemManager.getAll();
    const setInfo = {};
    const setsAll = west.storage.ItemSetManager.getAll ? west.storage.ItemSetManager.getAll() : {};
    for (const idx in setsAll) {
      const s = setsAll[idx]; if (!s || !s.key) continue;
      const k = s.key; const y = (k.match(/20\d\d/) || [])[0] || '';
      let ev = 'Ostatné'; for (const [re, n] of EVENTS) if (re.test(k)) { ev = n; break; }
      setInfo[k] = { key: k, name: (s.name || k).trim(), items: s.items || [], year: y, ev, group: (y ? y + ' · ' : '') + ev };
    }
    const bySlot = {}; SL.forEach(s => bySlot[s] = []);
    for (const id in all) {
      const it = all[id];
      if (!it || !it.name || !bySlot[it.type]) continue;
      if (it.item_id !== (it.item_base_id || Math.floor(it.item_id / 1000)) * 1000) continue;
      const si = it.set && setInfo[it.set];
      bySlot[it.type].push({ base: it.item_base_id || Math.floor(it.item_id / 1000), name: it.name.trim(), lvl: it.level || 0, set: it.set || null, group: si ? si.group : 'Bez setu', year: si ? si.year : '', up: !!it.upgradeable, cls: it.characterClass || null, sex: it.characterSex || null });
    }
    const groups = [...new Set(Object.values(setInfo).map(s => s.group))].sort((a, b) => {
      const ya = a.slice(0, 4), yb = b.slice(0, 4); const na = /^\d{4}/.test(a), nb = /^\d{4}/.test(b);
      if (na && nb && ya !== yb) return yb.localeCompare(ya); if (na !== nb) return na ? -1 : 1; return a.localeCompare(b);
    });
    CAT = { bySlot, setInfo, groups };
  }

  // ---------- UI ----------
  let wardrobe = null;
  async function loadWardrobe() {
    const out = { '(práve oblečené)': {} };
    for (const s of SL) { const w = Wear.wear[s]; if (w && w.obj) out['(práve oblečené)'][s] = { base: w.obj.item_base_id || Math.floor(w.obj.item_id / 1000), lvl: w.obj.item_level || 0 }; }
    try {
      const eq = await new Promise(r => Ajax.remoteCallMode('inventory', 'show_equip', {}, r));
      for (const set of ((eq && eq.data) || [])) {
        const o = {};
        for (const s of SL) { const id = set[s]; if (id) { const it = ItemManager.get(id); o[s] = { base: it ? (it.item_base_id || Math.floor(id / 1000)) : Math.floor(id / 1000), lvl: it ? (it.item_level || 0) : id % 1000 }; } }
        out['Šatník: ' + set.name] = o;
      }
    } catch (e) { }
    wardrobe = out;
  }

  const CSS = `
#twps{position:fixed;z-index:100000;top:30px;left:50%;transform:translateX(-50%);width:1000px;max-width:98vw;max-height:94vh;overflow:auto;background:#f3e6c8;color:#2b1d0e;border:3px solid #5c3a1a;border-radius:10px;font:12px Arial,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.6)}
#twps .hd{display:flex;align-items:center;gap:10px;background:#5c3a1a;color:#fff;padding:8px 12px;cursor:move;position:sticky;top:0;z-index:2}
#twps .hd b{font-size:15px;flex:1}
#twps .hd input,#twps .hd select{font-size:12px}
#twps .x{background:#a33;color:#fff;border:0;border-radius:4px;padding:3px 9px;cursor:pointer;font-weight:bold}
#twps .cols{display:flex;gap:10px;padding:10px}
#twps .col{flex:1;background:#fbf3df;border:1px solid #cbb48a;border-radius:8px;padding:8px;min-width:0}
#twps .col h3{margin:0 0 6px;font-size:13px;color:#5c3a1a}
#twps .row{display:grid;grid-template-columns:92px 1fr 46px;gap:4px;align-items:center;margin:3px 0}
#twps .row span{color:#6b4a24;font-weight:bold}
#twps select,#twps input[type=text]{width:100%;box-sizing:border-box;padding:2px}
#twps .tools{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px}
#twps .btn{background:#7a5226;color:#fff;border:0;border-radius:4px;padding:4px 8px;cursor:pointer}
#twps table.res{width:calc(100% - 20px);margin:0 10px 6px;border-collapse:collapse;background:#fffaf0}
#twps table.res th{background:#5c3a1a;color:#fff;padding:5px}
#twps table.res td{padding:4px 6px;border-bottom:1px solid #e0cfa8;text-align:center}
#twps table.res td:first-child{text-align:left;font-weight:bold}
#twps .plus{color:#17801a;font-weight:bold}#twps .minus{color:#b01818;font-weight:bold}#twps .zero{color:#888}
#twps .sets{padding:0 10px 10px;display:flex;gap:10px;color:#5a4630}
#twps .sets div{flex:1}
#twps .list{margin:0 10px 10px;background:#fbf3df;border:1px solid #cbb48a;border-radius:8px;padding:8px}
#twps .list .lc{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px}
#twps .list .lc select{width:auto}
#twps .list table{width:100%;border-collapse:collapse;background:#fffaf0}
#twps .list th{background:#7a5226;color:#fff;padding:4px;font-weight:normal}
#twps .list td{padding:3px 6px;border-bottom:1px solid #e0cfa8}
#twps .list td.n{text-align:center;white-space:nowrap}
#twps .list .put{background:#2f6b2f;color:#fff;border:0;border-radius:4px;padding:2px 8px;cursor:pointer}
#twps .note{padding:0 10px 10px;color:#7a6a50;font-size:11px}
#twps-btn{position:fixed;z-index:99999;right:8px;bottom:130px;background:#5c3a1a;color:#fff;border:2px solid #e2c48c;border-radius:8px;padding:6px 9px;cursor:pointer;font:bold 12px Arial;box-shadow:0 2px 8px rgba(0,0,0,.5)}`;

  function lvlSelect(id, val, enabled) {
    let h = `<select id="${id}" ${enabled ? '' : 'disabled'} title="Úroveň vylepšenia">`;
    for (let i = 0; i <= 5; i++) h += `<option value="${i}" ${i === val ? 'selected' : ''}>${i === 0 ? '–' : '★' + i}</option>`;
    return h + '</select>';
  }

  function itemOptions(slot, sort, filter, selBase, L) {
    let list = CAT.bySlot[slot];
    const f = norm(filter || '');
    if (f) list = list.filter(i => norm(i.name).includes(f) || (i.set && norm(CAT.setInfo[i.set] ? CAT.setInfo[i.set].name : '').includes(f)));
    let h = '<option value="">– nič –</option>';
    const label = (i, extra) => {
      const warn = (i.cls && i.cls !== Character.charClass ? ' ⚠trieda' : '') + (i.sex && i.sex !== Character.charSex ? ' ⚠pohlavie' : '');
      return `<option value="${i.base}" ${i.base === selBase ? 'selected' : ''}>${esc(i.name)}${extra || ''}${i.lvl > L ? ' (lvl ' + i.lvl + ')' : ''}${warn}</option>`;
    };
    if (sort === 'cat' || sort === 'az') {
      if (sort === 'az') { list.slice().sort((a, b) => a.name.localeCompare(b.name)).forEach(i => h += label(i)); }
      else {
        const by = {}; list.forEach(i => (by[i.group] = by[i.group] || []).push(i));
        for (const g of CAT.groups.concat(['Bez setu'])) if (by[g]) {
          h += `<optgroup label="${esc(g)}">`;
          by[g].sort((a, b) => (a.set || '').localeCompare(b.set || '') || a.name.localeCompare(b.name)).forEach(i => h += label(i, i.set && CAT.setInfo[i.set] ? ' — ' + CAT.setInfo[i.set].name : ''));
          h += '</optgroup>'; delete by[g];
        }
      }
    } else {
      const unit = sort === 'job' ? '' : ' %';
      const scored = list.map(i => [i, itemValue(i.base, sort, L)]);
      const pos = scored.filter(p => p[1] > 0).sort((a, b) => b[1] - a[1] || a[0].name.localeCompare(b[0].name));
      const zero = scored.filter(p => p[1] <= 0).sort((a, b) => a[0].name.localeCompare(b[0].name));
      h += `<optgroup label="Najlepšie – ${SORTNAME[sort]} (samotný kus)">`;
      pos.forEach(([i, v]) => h += label(i, '  [+' + v + unit + ']'));
      h += `</optgroup><optgroup label="Bez bonusu ${SORTNAME[sort]} (môže pridať set bonus)">`;
      zero.forEach(([i]) => h += label(i, i.set && CAT.setInfo[i.set] ? ' — ' + CAT.setInfo[i.set].name : ''));
      h += '</optgroup>';
    }
    return h;
  }

  function open() {
    if (!CAT) buildCatalog();
    const old = document.getElementById('twps'); if (old) old.remove();
    if (!document.getElementById('twps-css')) { const st = document.createElement('style'); st.id = 'twps-css'; st.textContent = CSS; document.head.appendChild(st); }
    const saved = lsGet('twps_state', {});
    const st = { L: Character.level, A: saved.A || '(práve oblečené)', selA: {}, selB: saved.selB || {}, sort: saved.sort || 'cat', filter: '', mode: saved.mode || 'sets', slotF: 'all', candLvl: 0, limit: 40 };

    const w = document.createElement('div'); w.id = 'twps';
    const wn = Object.keys(wardrobe);
    w.innerHTML = `
<div class="hd"><b>⚖ Porovnanie setov</b>
  Level <input type="number" id="twps-L" min="1" max="250" value="${st.L}" style="width:52px">
  <button class="x" id="twps-x">✕</button></div>
<div class="cols">
  <div class="col"><h3>A – moje oblečenie z hry</h3>
    <div class="tools" style="grid-template-columns:1fr"><select id="twps-A">${wn.map(n => `<option ${n === st.A ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select></div>
    ${SL.map(s => `<div class="row"><span>${SN[s]}</span><input type="text" id="twps-An-${s}" readonly><span id="twps-Al-${s}"></span></div>`).join('')}
  </div>
  <div class="col"><h3>B – na výber</h3>
    <div class="tools">
      <select id="twps-mode" style="grid-column:1/3;font-weight:bold"><option value="sets" ${st.mode === 'sets' ? 'selected' : ''}>Ponuka: celé sety</option><option value="items" ${st.mode === 'items' ? 'selected' : ''}>Ponuka: jednotlivé kusy</option><option value="mix" ${st.mode === 'mix' ? 'selected' : ''}>Ponuka: najlepšie výmeny (kusy aj celé sety)</option></select>
      <select id="twps-set">${setOptions(st.sort, st.L)}</select>
      <select id="twps-sort">${SORTS.map(([k, n]) => `<option value="${k}" ${k === st.sort ? 'selected' : ''}>Zoradiť: ${n}</option>`).join('')}</select>
      <input type="text" id="twps-f" placeholder="Hľadať predmet alebo set…">
      <div style="display:flex;gap:4px"><button class="btn" id="twps-copy" title="Skopíruje oblečenie A do B">A → B</button><button class="btn" id="twps-clear">Vyprázdniť</button>
        <select id="twps-all" title="Nastaví vylepšenie všetkým kusom v B"><option value="">★ všetko…</option>${[0, 1, 2, 3, 4, 5].map(i => `<option value="${i}">${i === 0 ? 'bez vylepšenia' : '★' + i}</option>`).join('')}</select></div>
    </div>
    ${SL.map(s => `<div class="row"><span>${SN[s]}</span><select id="twps-B-${s}"></select><span id="twps-Bl-${s}"></span></div>`).join('')}
  </div>
</div>
<div class="list" id="twps-list" style="display:none">
  <div class="lc"><b id="twps-lt">Rebríček jednotlivých kusov</b>
    Slot <select id="twps-ls"><option value="all">všetky</option>${SL.map(s => `<option value="${s}">${SN[s]}</option>`).join('')}</select>
    Kandidáti <select id="twps-lv">${[0, 1, 2, 3, 4, 5].map(i => `<option value="${i}">${i === 0 ? 'bez vylepšenia' : '★' + i}</option>`).join('')}</select>
    <span style="color:#7a6a50">Len to, čo B zlepší. „Zmena v B“ = o koľko sa B zlepší, keď kus alebo celý set vložíš na jeho miesto (vrátane rozbitia alebo doplnenia setov).</span></div>
  <div id="twps-lb"></div>
</div>
<table class="res" id="twps-res"></table>
<div class="sets"><div id="twps-sA"></div><div id="twps-sB"></div></div>
<div class="note">Počíta sa kalkulačkou hry (bonusy na level, vylepšenia ★1–★5, sety podľa počtu kusov). Rýchlosť zvieraťa a rýchlosť z predmetov sú zvlášť, lebo hra ich kombinuje inak. ⚠ = predmet je pre inú triedu alebo pohlavie. (lvl X) = vyšší level, než je zadaný.</div>`;
    document.body.appendChild(w);
    const $ = id => document.getElementById('twps-' + id);

    // posúvanie okna
    (() => { const hd = w.querySelector('.hd'); let sx, sy, ox, oy, drag = false;
      hd.addEventListener('mousedown', e => { if (e.target.tagName !== 'DIV' && e.target.tagName !== 'B') return; drag = true; const r = w.getBoundingClientRect(); sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top; w.style.transform = 'none'; w.style.left = ox + 'px'; w.style.top = oy + 'px'; e.preventDefault(); });
      document.addEventListener('mousemove', e => { if (drag) { w.style.left = ox + e.clientX - sx + 'px'; w.style.top = oy + e.clientY - sy + 'px'; } });
      document.addEventListener('mouseup', () => drag = false); })();

    const save = () => lsSet('twps_state', { A: st.A, selB: st.selB, sort: st.sort, mode: st.mode });

    const renderA = () => {
      st.selA = JSON.parse(JSON.stringify(wardrobe[st.A] || {}));
      for (const s of SL) {
        const p = st.selA[s]; const it = p && ItemManager.get(p.base * 1000);
        $('An-' + s).value = it ? it.name : '';
        $('Al-' + s).innerHTML = lvlSelect('twps-Alv-' + s, p ? p.lvl : 0, !!(it && it.upgradeable));
        $('Alv-' + s).onchange = e => { if (st.selA[s]) st.selA[s].lvl = +e.target.value; calc(); };
      }
    };
    const renderB = () => {
      for (const s of SL) {
        const p = st.selB[s];
        $('B-' + s).innerHTML = itemOptions(s, st.sort, st.filter, p ? p.base : null, st.L);
        const it = p && ItemManager.get(p.base * 1000);
        $('Bl-' + s).innerHTML = lvlSelect('twps-Blv-' + s, p ? p.lvl : 0, !!(it && it.upgradeable));
        $('B-' + s).onchange = e => { const b = +e.target.value; if (b) st.selB[s] = { base: b, lvl: 0 }; else delete st.selB[s]; renderSlotB(s); calc(); save(); };
        $('Blv-' + s).onchange = e => { if (st.selB[s]) st.selB[s].lvl = +e.target.value; calc(); save(); };
      }
    };
    const renderSlotB = s => {
      const p = st.selB[s]; const it = p && ItemManager.get(p.base * 1000);
      $('Bl-' + s).innerHTML = lvlSelect('twps-Blv-' + s, p ? p.lvl : 0, !!(it && it.upgradeable));
      $('Blv-' + s).onchange = e => { if (st.selB[s]) st.selB[s].lvl = +e.target.value; calc(); save(); };
    };
    const calc = () => {
      const a = compute(st.selA, st.L), b = compute(st.selB, st.L);
      let h = `<tr><th style="text-align:left">Bonus (level ${st.L})</th><th>A – moje</th><th>B – na výber</th><th>Rozdiel B − A</th></tr>`;
      for (const [k, n, u] of ROWS) {
        const d = Math.round((b[k] - a[k]) * 10) / 10;
        const f = v => v ? (k === 'job' ? v : '+' + v + ' ' + u) : '–';
        h += `<tr><td>${n}</td><td>${f(a[k])}</td><td>${f(b[k])}</td><td class="${d > 0 ? 'plus' : d < 0 ? 'minus' : 'zero'}">${d > 0 ? '+' : ''}${d}${u ? ' ' + u : ''}</td></tr>`;
      }
      $('res').innerHTML = h;
      $('sA').innerHTML = '<b>Sety A:</b> ' + (a.sets.join(', ') || '–');
      $('sB').innerHTML = '<b>Sety B:</b> ' + (b.sets.join(', ') || '–');
      scheduleList();
    };

    let lt; const scheduleList = () => { clearTimeout(lt); lt = setTimeout(renderList, 60); };
    const renderList = () => {
      const box = $('list'); box.style.display = 'block';
      const key = st.sort, body = $('lb');
      const what = st.mode === 'sets' ? 'celých setov' : st.mode === 'items' ? 'jednotlivých kusov' : 'kusov aj setov';
      if (!SORTNAME[key]) { $('lt').textContent = 'Rebríček ' + what; body.innerHTML = '<i>V „Zoradiť“ vyber bonus (napr. Najviac zberu produktov, Najviac rýchlosti, Najviac XP), podľa ktorého sa má rebríček zostaviť.</i>'; return; }
      $('lt').textContent = 'Rebríček ' + what + ' – ' + SORTNAME[key];
      const L = st.L, unit = key === 'job' ? '' : ' %', f = norm(st.filter);
      const base = compute(st.selB, L)[key] || 0;
      const delta = sel => Math.round(((compute(sel, L)[key] || 0) - base) * 10) / 10;
      const lvlFor = b => { const it = ItemManager.get(b * 1000); return it && it.upgradeable ? st.candLvl : 0; };
      const cands = [];
      // jednotlivé kusy
      if (st.mode !== 'sets') for (const slot of (st.slotF === 'all' ? SL : [st.slotF])) for (const i of CAT.bySlot[slot]) {
        if (f && !(norm(i.name).includes(f) || (i.set && CAT.setInfo[i.set] && norm(CAT.setInfo[i.set].name).includes(f)))) continue;
        const own = itemValue(i.base, key, L); const sv = i.set ? setValue(i.set, key, L) : 0;
        if (own <= 0 && sv <= 0) continue;
        const cur = st.selB[slot]; if (cur && cur.base === i.base) continue;
        const sel = Object.assign({}, st.selB); sel[slot] = { base: i.base, lvl: lvlFor(i.base) };
        const d = delta(sel);
        if (d > 0) cands.push({ kind: 'item', i, slot, own, d });
      }
      // celé sety (všetky kusy setu naraz, pri viacerých zbraniach do jedného slotu sa vyberie najlepšia)
      if (st.mode !== 'items') for (const si of Object.values(CAT.setInfo)) {
        const opts = {};
        for (const id of si.items) { const it = ItemManager.get(id * 1000) || ItemManager.get(id); if (!it || !SL.includes(it.type)) continue; (opts[it.type] = opts[it.type] || []).push(it.item_base_id || Math.floor(it.item_id / 1000)); }
        const slots = Object.keys(opts); if (slots.length < 2) continue;
        if (st.slotF !== 'all' && !opts[st.slotF]) continue;
        if (f && !(norm(si.name).includes(f) || slots.some(sl => opts[sl].some(b => norm((ItemManager.get(b * 1000) || {}).name || '').includes(f))))) continue;
        if (setValue(si.key, key, L) <= 0 && !slots.some(sl => opts[sl].some(b => itemValue(b, key, L) > 0))) continue;
        let combos = [{}];
        for (const sl of slots) { const nx = []; for (const c of combos) for (const b of opts[sl]) nx.push(Object.assign({}, c, { [sl]: b })); combos = nx.slice(0, 16); }
        let best = null;
        for (const c of combos) {
          if (slots.every(sl => st.selB[sl] && st.selB[sl].base === c[sl])) continue;
          const sel = Object.assign({}, st.selB); for (const sl of slots) sel[sl] = { base: c[sl], lvl: lvlFor(c[sl]) };
          const d = delta(sel); if (!best || d > best.d) best = { c, d };
        }
        if (best && best.d > 0) cands.push({ kind: 'set', si, combo: best.c, own: setValue(si.key, key, L), d: best.d });
      }
      cands.sort((a, b) => b.d - a.d || b.own - a.own);
      const show = cands.slice(0, st.limit);
      let h = `<table><tr><th>#</th><th>Slot</th><th style="text-align:left">Predmet / set</th><th>Samotný kus / set</th><th>Zmena v B</th><th></th></tr>`;
      show.forEach((c, n) => {
        if (c.kind === 'set') {
          const parts = Object.entries(c.combo).map(([sl, b]) => SN[sl] + ': ' + esc(((ItemManager.get(b * 1000) || {}).name || '').trim())).join(', ');
          h += `<tr><td class="n">${n + 1}</td><td class="n"><b>Set</b> (${Object.keys(c.combo).length} ks)</td><td><b>${esc(c.si.name)}</b><br><small style="color:#7a6a50">${parts}</small></td>` +
            `<td class="n">${c.own > 0 ? '+' + c.own + unit : '–'}</td><td class="n plus">+${c.d}${unit}</td>` +
            `<td class="n"><button class="put" data-combo="${esc(JSON.stringify(c.combo))}">➜ do B</button></td></tr>`;
          return;
        }
        const si = c.i.set && CAT.setInfo[c.i.set];
        const warn = (c.i.cls && c.i.cls !== Character.charClass ? ' ⚠trieda' : '') + (c.i.sex && c.i.sex !== Character.charSex ? ' ⚠pohlavie' : '') + (c.i.lvl > L ? ' (lvl ' + c.i.lvl + ')' : '');
        h += `<tr><td class="n">${n + 1}</td><td class="n">${SN[c.slot]}</td><td>${esc(c.i.name)}${warn}${si ? '<br><small style="color:#7a6a50">' + esc(si.name) + '</small>' : ''}</td>` +
          `<td class="n">${c.own > 0 ? '+' + c.own + unit : '–'}</td><td class="n plus">+${c.d}${unit}</td>` +
          `<td class="n"><button class="put" data-slot="${c.slot}" data-base="${c.i.base}">➜ do B</button></td></tr>`;
      });
      h += '</table>';
      if (!cands.length) h = '<i>Nič by B v tomto bonuse nezlepšilo.</i>';
      else if (cands.length > st.limit) h += `<div style="margin-top:6px"><button class="btn" id="twps-more">Zobraziť ďalších 40 (spolu ${cands.length})</button></div>`;
      body.innerHTML = h;
      const more = $('more'); if (more) more.onclick = () => { st.limit += 40; renderList(); };
    };

    $('A').onchange = e => { st.A = e.target.value; renderA(); calc(); save(); };
    $('sort').onchange = e => { st.sort = e.target.value; st.limit = 40; $('set').innerHTML = setOptions(st.sort, st.L); renderB(); renderList(); save(); };
    let ft; $('f').oninput = e => { clearTimeout(ft); ft = setTimeout(() => { st.filter = e.target.value; st.limit = 40; renderB(); renderList(); }, 250); };
    $('set').onchange = e => {
      const si = CAT.setInfo[e.target.value]; if (!si) return;
      for (const id of si.items) { const it = ItemManager.get(id * 1000) || ItemManager.get(id); if (!it || !SL.includes(it.type)) continue;
        if (!st.selB[it.type] || !si.items.includes(st.selB[it.type].base) || st.selB[it.type]._fromSet !== si.key) st.selB[it.type] = { base: it.item_base_id || Math.floor(it.item_id / 1000), lvl: 0, _fromSet: si.key }; }
      e.target.value = ''; renderB(); calc(); save();
    };
    $('copy').onclick = () => { st.selB = JSON.parse(JSON.stringify(st.selA)); renderB(); calc(); save(); };
    $('clear').onclick = () => { st.selB = {}; renderB(); calc(); save(); };
    $('all').onchange = e => { if (e.target.value === '') return; const v = +e.target.value;
      for (const s in st.selB) { const it = ItemManager.get(st.selB[s].base * 1000); if (it && it.upgradeable) st.selB[s].lvl = v; }
      e.target.value = ''; renderB(); calc(); save(); };
    $('L').onchange = e => { st.L = Math.max(1, +e.target.value || Character.level); $('set').innerHTML = setOptions(st.sort, st.L); renderB(); calc(); };
    $('x').onclick = () => w.remove();
    $('mode').onchange = e => { st.mode = e.target.value; st.limit = 40; renderList(); save(); };
    $('ls').onchange = e => { st.slotF = e.target.value; st.limit = 40; renderList(); };
    $('lv').onchange = e => { st.candLvl = +e.target.value; renderList(); };
    $('lb').onclick = e => {
      const b = e.target.closest && e.target.closest('.put'); if (!b) return;
      const put = (slot, base) => { const it = ItemManager.get(base * 1000); st.selB[slot] = { base, lvl: it && it.upgradeable ? st.candLvl : 0 }; };
      if (b.dataset.combo) { const c = JSON.parse(b.dataset.combo); for (const sl in c) put(sl, +c[sl]); } else put(b.dataset.slot, +b.dataset.base);
      renderB(); calc(); save();
    };

    renderA(); renderB(); calc();
  }

  async function start() {
    const b = document.createElement('div'); b.id = 'twps-btn'; b.textContent = '⚖ Sety'; b.title = 'Porovnanie setov';
    b.onclick = async () => { b.textContent = '⏳'; try { await loadWardrobe(); open(); } catch (e) { alert('Porovnanie setov: ' + e.message); } b.textContent = '⚖ Sety'; };
    document.body.appendChild(b);
    if (!document.getElementById('twps-css')) { const st = document.createElement('style'); st.id = 'twps-css'; st.textContent = CSS; document.head.appendChild(st); }
  }

  const wait = setInterval(() => {
    if (window.Character && Character.level && window.ItemManager && ItemManager.getAll && window.west && west.item && west.item.BonusExtractor && west.storage && west.storage.ItemSetManager && window.Wear && Wear.wear) {
      clearInterval(wait); start();
    }
  }, 1000);
})();
