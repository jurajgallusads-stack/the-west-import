// ==UserScript==
// @name         The West – porovnanie setov
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.9.3
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
    ['travel', 'Celková rýchlosť pohybu', '%'], ['animal', 'Rýchlosť zvieraťa', '%'], ['speed', 'Rýchlosť z predmetov', '%'], ['ride', 'Jazda na koni (body z predmetov)', ''], ['experience', 'Skúsenosti (XP)', '%'],
    ['drop', 'Zber produktov', '%'], ['luck', 'Šťastie', '%'], ['dollar', 'Peniaze', '%'], ['regen', 'Regenerácia', '%'], ['job', 'Pracovné body', '']
  ];
  const SORTS = [['cat', 'Kategórie (podľa eventu)'], ['experience', 'Najviac XP'], ['travel', 'Najrýchlejší pohyb po mape (zviera × predmety)'], ['speed', 'Najviac rýchlosti z predmetov'], ['animal', 'Najrýchlejšie zviera'], ['drop', 'Najviac zberu produktov'], ['luck', 'Najviac šťastia'], ['dollar', 'Najviac peňazí'], ['job', 'Najviac pracovných bodov'], ['az', 'Abecedne']];
  const EVENTS = [
    [/dod|dead/i, 'Day of the Dead'], [/oktoberfest/i, 'Oktoberfest'], [/easter/i, 'Veľká noc'], [/independence/i, 'Deň nezávislosti'],
    [/valentine/i, 'Valentín'], [/holiday|christmas|xmas|dedmoroz|santa/i, 'Vianoce'], [/birthday|b_day|bday/i, 'Narodeniny'],
    [/western_friday|black_friday|sale/i, 'Výpredaje'], [/soccer|football/i, 'Futbal'], [/ifbc|fortbattle|fort/i, 'Bitky o pevnosť'],
    [/okt_setwof|wof/i, 'Koleso šťastia'], [/carnival|fair/i, 'Jarmok / karneval'], [/halloween/i, 'Halloween']
  ];

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  // obrázok predmetu (s úrovňou vylepšenia) + herná bublina s bonusmi po prejdení myšou
  const icon = (base, lvl, cls) => {
    if (!base) return `<span class="ic ${cls || ''} empty"></span>`;
    const it = ItemManager.get(base * 1000 + (lvl || 0)) || ItemManager.get(base * 1000);
    if (!it || !it.image) return `<span class="ic ${cls || ''} empty"></span>`;
    return `<img class="ic ${cls || ''}" src="${esc(it.image)}" data-iid="${it.item_id}" alt="">`;
  };
  const dollHtml = side => `<div class="doll${side === 'B' ? ' dollB' : ''}" id="twps-${side}d">` + SL.map(sl => `<div class="cell" style="grid-area:${sl}" id="twps-${side}c-${sl}" data-slot="${sl}"></div>`).join('') + '</div>';
  const renderDoll = (side, sel) => {
    for (const sl of SL) {
      const c = document.getElementById('twps-' + side + 'c-' + sl); if (!c) continue;
      const p = sel[sl]; const it = p && (ItemManager.get(p.base * 1000 + (p.lvl || 0)) || ItemManager.get(p.base * 1000));
      c.innerHTML = it ? `<img src="${esc(it.wear_image || it.image)}" data-iid="${it.item_id}" alt="">${p.lvl ? `<span class="bd">▲${p.lvl}</span>` : ''}` : `<span class="emp">${SN[sl]}</span>`;
    }
    bindPops(document.getElementById('twps-' + side + 'd'));
  };
  const bindPops = root => {
    if (!root) return;
    root.querySelectorAll('img[data-iid]').forEach(img => {
      if (img._twps) return; img._twps = 1;
      const it = ItemManager.get(+img.dataset.iid); if (!it) return;
      try { new ItemPopup(it, {}).bindTo($(img)); } catch (e) { img.title = it.name; }
    });
  };
  const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };

  // ---------- výpočet (používa vlastnú kalkulačku hry) ----------
  const NOUNIT = { job: 1, ride: 1, flexibility: 1 };
  let _baseRide = null;
  function baseRide() {
    if (_baseRide === null) { try { _baseRide = (CharacterSkills.skills.ride.points || 0) + (CharacterSkills.attributes.flexibility.points || 0); } catch (e) { _baseRide = 0; } }
    return _baseRide;
  }
  function compute(sel, L) {
    const ch = { level: L };
    const t = { animal: 0, speed: 0, experience: 0, drop: 0, luck: 0, dollar: 0, regen: 0, job: 0, ride: 0, flexibility: 0 };
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
    for (const k in t) o[k] = NOUNIT[k] ? Math.round(t[k]) : Math.round(t[k] * 1000) / 10;
    o.ride = Math.round(t.ride + t.flexibility); delete o.flexibility;
    // Pohyb po mape (wiki The West): (100 % + zviera + 1 % za bod jazdy) × (100 % + rýchlosť z predmetov)
    o.travel = Math.round(((1 + t.animal + (baseRide() + t.ride + t.flexibility) / 100) * (1 + t.speed) - 1) * 1000) / 10;
    o.sets = sets;
    return o;
  }

  // hodnota jedného predmetu (na zoradenie zoznamov)
  const single = {};
  function itemValue(base, key, L) {
    const ck = base + '|' + L; let v = single[ck];
    if (!v) { const sel = {}; const it = ItemManager.get(base * 1000); sel[it.type] = { base, lvl: 0 }; v = single[ck] = compute(sel, L); }
    return key === 'travel' ? Math.round((v.travel - baseRide()) * 10) / 10 : (v[key] || 0);
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
    return key === 'travel' ? Math.round((v.travel - baseRide()) * 10) / 10 : (v[key] || 0);
  }
  const SORTNAME = { experience: 'XP', travel: 'celková rýchlosť pohybu', ride: 'jazda na koni', speed: 'rýchlosť z predmetov', animal: 'rýchlosť zvieraťa', drop: 'zber produktov', luck: 'šťastie', dollar: 'peniaze', job: 'pracovné body' };
  function setOptions(sort, L) {
    let h = '<option value="">Načítať celý set…</option>';
    const sets = Object.values(CAT.setInfo);
    if (SORTNAME[sort]) {
      const unit = NOUNIT[sort] ? '' : ' %';
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
      if (it.price === 123456 || (it.speed && it.speed < 0.1)) continue; // testovacie predmety (napr. Raketová želva)
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

  // Vzhľad ako remeselná kalkulačka: okno hry, skupinové rámy, herné tlačidlá a tabuľky z obrázkov hry.
  const CDN = () => String((window.Game && Game.cdnURL) || 'https://westcz.innogamescdn.com').replace(/\/$/, '');
  const CSS = () => { const img = p => `url("${CDN()}/images/tw2gui/${p}")`; return `
#twps{font:12px Arial,Verdana,sans-serif;color:#2b1d0e;line-height:1.3;text-align:left}
#twps.in-win{height:100%;overflow-y:auto;overflow-x:hidden;box-sizing:border-box;padding:12px 12px 8px}
#twps.floating{position:fixed;z-index:100000;top:20px;left:50%;transform:translateX(-50%);width:1480px;max-width:98vw;max-height:94vh;overflow:auto;box-sizing:border-box;padding:12px;background:#ecdcb4 ${img('groupframe/groupframe_bg.jpg?12')};border:3px solid #5c3a1a;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,.6)}
.twps-win .tw2gui_window_inset{background-size:100% 100% !important;background-repeat:no-repeat !important;background-position:0 0 !important}
/* Jedno súvislé pozadie: pravý tieň okna hry (bg2) robí pri širokom okne v strede pruh, preto sa skryje a obsah má jeden roztiahnutý pergamen. */
.twps-win .tw2gui_inner_window_bg2{display:none !important}
#twps.in-win{background:#e6d2a4 ${img('window/window2_bg.jpg?6')} 0 0/100% 100% no-repeat}
#twps::-webkit-scrollbar{width:11px}#twps::-webkit-scrollbar-track{background:rgba(90,60,20,.15);border-radius:6px}
#twps::-webkit-scrollbar-thumb{background:#8b6b3f;border-radius:6px;border:2px solid #e8d6aa}
#twps .gf{margin:0 0 10px;height:auto !important;position:relative}
#twps .gf .tw2gui_groupframe_content_pane{position:relative;height:auto !important;padding:12px 14px 12px}
#twps .chead{display:flex;flex-direction:column}
#twps table.list small.parts{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:10px;line-height:12px}
#twps .pnl.top{padding:8px 14px}
#twps .tb{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap}
#twps .tb label{display:inline-flex;align-items:center;gap:6px;font-weight:bold;color:#5b3a12}
#twps .tb .grow{flex:1}
#twps .tb .hint{font-weight:normal;color:#6b5a40;font-size:11px}
#twps .cols{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;align-items:start}
#twps .pnl{position:relative;margin:0 0 10px;padding:12px 14px;background:#ead9b0 ${img('groupframe/groupframe_bg.jpg?12')};border:1px solid #a8885a;border-radius:5px;box-shadow:inset 0 0 8px rgba(90,60,20,.3),0 1px 0 rgba(255,255,255,.4),0 0 0 1px rgba(60,35,10,.25)}
#twps .cols .pnl{margin:0}
#twps .cols{margin-bottom:10px}
#twps.stack .cols{grid-template-columns:minmax(0,1fr)}
#twps.stack .cols .pnl+.pnl{margin-top:0}
#twps h3,#twps h4{margin:0 0 8px;padding:0 0 5px;font:bold 15px Georgia,'Times New Roman',serif;color:#3b2a14;border-bottom:1px solid rgba(110,80,40,.35);display:flex;align-items:baseline;gap:8px}
#twps h3 small,#twps h4 small{font:normal 11px Arial,sans-serif;color:#6b5a40}
#twps .tools{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:6px 8px;align-items:center;margin-bottom:8px}
#twps .tools .full{grid-column:1/-1}
#twps .tools .pair{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px;align-items:center}
#twps .tools .btns{display:flex;gap:4px;align-items:center;justify-content:flex-end}
#twps .tools select,#twps .tools input[type=text]{width:100%}
#twps .optbtn{grid-column:1/-1;display:flex;justify-content:center;margin:2px 0}
#twps select,#twps input[type=text],#twps input[type=number]{height:24px;box-sizing:border-box;padding:0 6px;border:1px solid #8b6b3f;border-radius:3px;background:#f7efd9;color:#3b2a14;font:12px Arial,sans-serif;box-shadow:inset 0 1px 2px rgba(0,0,0,.18);min-width:0;vertical-align:middle}
#twps input[type=number]{width:58px;text-align:right}
#twps select:focus,#twps input:focus{outline:none;border-color:#5b3a12;box-shadow:0 0 0 2px rgba(210,155,76,.45)}
#twps select:disabled{opacity:.45}
#twps optgroup{font-style:normal;font-weight:bold;color:#5b3a12;background:#ead9ae}
#twps option{font-weight:normal;color:#2b1d0e;background:#f7efd9}
#twps button.tw2gui_button{border:0;background:none;padding:0;font:inherit;display:inline-block;vertical-align:middle;cursor:pointer}
#twps button.tw2gui_button:disabled{opacity:.55;filter:grayscale(.5);cursor:default}
#twps button.tw2gui_button .textart_title{white-space:nowrap}
#twps button.btn:not(.tw2gui_button){background:#7a5226;color:#fff;border:1px solid #4a2f12;border-radius:3px;height:24px;padding:0 10px;cursor:pointer;font:bold 12px Arial,sans-serif}
#twps .optlog{font-size:11px;line-height:1.45;color:#2b4a1a;margin:10px 0 0;padding:6px 8px;background:rgba(120,160,80,.13);border:1px solid rgba(80,120,50,.35);border-radius:3px}
#twps .optlog:empty{display:none}
#twps .colin{display:flex;flex-wrap:nowrap;gap:12px;align-items:flex-start}
#twps .slots{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:3px}
#twps .row{display:grid;grid-template-columns:78px minmax(0,1fr) 54px;gap:6px;align-items:center;padding:1px 3px;border-radius:3px;margin:0}
#twps .row>span:first-child{color:#5b3a12;font-weight:bold;font-size:11px;line-height:12px}
#twps .row select{width:100%}
#twps .row.hl{background:rgba(255,206,90,.4)}
#twps .doll{flex:0 0 auto;display:grid;grid-template-columns:62px 74px 62px;grid-template-rows:58px 104px 62px 58px;gap:5px;grid-template-areas:"neck head ." "right_arm body left_arm" "animal pants belt" "yield pants foot";padding:7px;border-radius:5px;background:linear-gradient(#4a3420,#33230f);border:1px solid #2a1a08;box-shadow:inset 0 0 10px rgba(0,0,0,.7),0 1px 0 rgba(255,255,255,.35)}
#twps .cell{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:4px;background:radial-gradient(#e6d6b0,#b99d6b);border:2px solid #6e5129;box-shadow:inset 0 0 6px rgba(70,45,15,.55)}
#twps .cell img{max-width:100%;max-height:100%;object-fit:contain}
#twps .cell .emp{color:#6e5634;font-size:10px;text-align:center;padding:2px;line-height:11px}
#twps .cell .bd{position:absolute;top:2px;left:2px;background:#2b1d0e;color:#ffd24a;font:bold 10px Arial;padding:1px 4px;border-radius:3px;pointer-events:none}
#twps .dollB .cell{cursor:pointer}
#twps .dollB .cell:hover{border-color:#ffd24a}
#twps table.tw{width:100%;border-collapse:collapse;table-layout:fixed;font-size:12px}
#twps table.tw th{background:${img('table/table_thead.jpg?3')} 50% 100%/100% 100% no-repeat;height:28px;padding:0 10px;font-weight:bold;color:#000;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#twps table.tw tbody tr{background:${img('table/table_row.png')} 50% 100%/100% 100% no-repeat}
#twps table.tw tbody tr:hover td{background:rgba(255,226,150,.28)}
#twps table.tw td{height:30px;padding:2px 10px;box-sizing:border-box;text-align:center;vertical-align:middle;font-variant-numeric:tabular-nums}
#twps table.tw th.l,#twps table.tw td.l{text-align:left}
#twps table.res td:first-child{font-weight:bold;color:#3b2a14}
#twps table.res tr.main td{font-size:13px;background:rgba(210,155,76,.16)}
#twps .plus{color:#2f6b1f;font-weight:bold}#twps .minus{color:#8b0000;font-weight:bold}#twps .zero{color:#8a7a60}
#twps .sets{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 2px 0;color:#4a3820}
#twps .sets b{color:#5b3a12}
#twps .note{margin:8px 2px 0;color:#6b5a40;font-size:11px;line-height:1.4}
#twps .lc{display:flex;gap:6px 14px;align-items:center;flex-wrap:wrap;margin-bottom:8px}
#twps .lc label{display:inline-flex;align-items:center;gap:6px;font-weight:bold;color:#5b3a12}
#twps .lc .hint{flex-basis:100%;font-size:11px;color:#6b5a40}
#twps table.list td.l small{color:#6b5a40}
#twps .ic{width:34px;height:34px;display:inline-block;vertical-align:middle;background:#f7efd9;border:1px solid #a8885a;border-radius:4px;box-sizing:border-box;padding:1px}
#twps .ic.sm{width:28px;height:28px}
#twps .ic.empty{opacity:.35}
#twps .icrow{display:flex;gap:3px;flex-wrap:wrap;margin:2px 0}
#twps .nm{display:flex;align-items:center;gap:8px}
#twps .more{display:flex;justify-content:center;margin-top:8px}
#twps .muted{color:#6b5a40}
.twps-launch{float:left;width:50px}
.twps-launch #twps-btn img{display:block}
.twps-launch #twps-btn:hover img{filter:brightness(1.15) drop-shadow(0 0 3px rgba(255,220,140,.8))}
#twps-btn.fixed{position:fixed;z-index:99999;right:8px;bottom:130px;background:#5c3a1a;color:#fff;border:2px solid #e2c48c;border-radius:8px;padding:6px 9px;cursor:pointer;font:bold 12px Arial;box-shadow:0 2px 8px rgba(0,0,0,.5)}`; };
  const installCss = () => { if (!document.getElementById('twps-css')) { const st = document.createElement('style'); st.id = 'twps-css'; st.textContent = CSS(); document.head.appendChild(st); } };
  const groupframe = inner => `<div class="tw2gui_groupframe gf"><div class="tw2gui_groupframe_background bg0"></div><div class="tw2gui_groupframe_background bg1"></div><div class="tw2gui_groupframe_background bg2"></div><div class="tw2gui_groupframe_background bg3"></div><div class="tw2gui_groupframe_background bg4"></div><div class="tw2gui_groupframe_frame tw2gui_bg_tl"></div><div class="tw2gui_groupframe_frame tw2gui_bg_tr"></div><div class="tw2gui_groupframe_frame tw2gui_bg_bl"></div><div class="tw2gui_groupframe_frame tw2gui_bg_br"></div><div class="tw2gui_groupframe_content_pane">${inner}</div></div>`;
  const panel = inner => `<div class="pnl">${inner}</div>`;
  // Tlačidlá v grafike hry (ako v remeselnej kalkulačke); logika ostáva na pôvodnom <button>.
  const skinButtons = root => {
    if (!root) return;
    root.querySelectorAll('button.btn:not(.tw2gui_button)').forEach(b => {
      const label = b.textContent;
      b.classList.add('tw2gui_button');
      b.innerHTML = '<div class="tw2gui_button_right_cap"></div><div class="tw2gui_button_left_cap"></div><div class="tw2gui_button_middle_bg"></div><div class="textart_title"></div>';
      b.querySelector('.textart_title').textContent = label;
    });
  };

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
      const unit = NOUNIT[sort] ? '' : ' %';
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

  let gwin = null;
  const isOpen = () => !!document.getElementById('twps');
  function closeWin() {
    if (gwin) { const g = gwin; gwin = null; try { (wman.getById && wman.getById('twps') || g).destroy(); } catch (e) { } }
    const old = document.getElementById('twps'); if (old) old.remove();
  }
  function open() {
    if (!CAT) buildCatalog();
    closeWin();
    installCss();
    const saved = lsGet('twps_state', {});
    const st = { L: Character.level, A: saved.A || '(práve oblečené)', selA: {}, selB: saved.selB || {}, sort: saved.sort || 'cat', filter: '', mode: saved.mode || 'sets', slotF: 'all', candLvl: 0, limit: 40 };

    const w = document.createElement('div'); w.id = 'twps';
    const wn = Object.keys(wardrobe);
    const slotRows = side => SL.map(s => side === 'A'
      ? `<div class="row" id="twps-Ar-${s}"><span>${SN[s]}</span><select id="twps-An-${s}"></select><span id="twps-Al-${s}"></span></div>`
      : `<div class="row" id="twps-Br-${s}"><span>${SN[s]}</span><select id="twps-B-${s}"></select><span id="twps-Bl-${s}"></span></div>`).join('');
    w.innerHTML = `<div class="pnl top">` + `<div class="tb">
    <label>Level <input type="number" id="twps-L" min="1" max="250" value="${st.L}"></label>
    <label>Zoradiť podľa <select id="twps-sort">${SORTS.map(([k, n]) => `<option value="${k}" ${k === st.sort ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
    <span class="hint grow">Bonus platí pre zoradenie výberov, rebríček aj ⚡ hľadanie najlepšej kombinácie v A aj B.</span>
    <button class="x" id="twps-x" hidden></button></div></div>` + `
<div class="cols">
  ${panel(`<div class="chead"><h3>A <small>moje oblečenie (dá sa upraviť)</small></h3>
    <div class="tools">
      <div class="pair full"><select id="twps-A" title="Východiskové oblečenie">${wn.map(n => `<option ${n === st.A ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select><div class="btns"><button class="btn" id="twps-Areset" title="Vrátiť A na vybrané oblečenie zo šatníka">↺ Obnoviť</button></div></div>
      <select id="twps-Aset" class="full" title="Prepíše sloty v A kusmi zvoleného setu (aj keď ho nemáš)">${setOptions(st.sort, st.L)}</select>
      <div class="optbtn"><button class="btn" id="twps-Aopt" title="Poskladá najlepšiu zostavu LEN z vecí, ktoré máš v inventári alebo na sebe (s ich vylepšením), pre zvolený bonus">⚡ Najlepšia kombinácia z môjho inventára</button></div>
    </div>
    </div>
    <div class="colin">${dollHtml('A')}<div class="slots">${slotRows('A')}</div></div>
    <div id="twps-Aoptlog" class="optlog"></div>`)}
  ${panel(`<div class="chead"><h3>B <small>na výber (všetky predmety v hre)</small></h3>
    <div class="tools">
      <select id="twps-mode" class="full"><option value="sets" ${st.mode === 'sets' ? 'selected' : ''}>Rebríček: celé sety</option><option value="items" ${st.mode === 'items' ? 'selected' : ''}>Rebríček: jednotlivé kusy a páry (kôň + sedlo, zbrane)</option><option value="mix" ${st.mode === 'mix' ? 'selected' : ''}>Rebríček: najlepšie výmeny (kusy aj celé sety)</option></select>
      <select id="twps-set" class="full">${setOptions(st.sort, st.L)}</select>
      <input type="text" id="twps-f" placeholder="Hľadať predmet alebo set…">
      <select id="twps-all" title="Nastaví vylepšenie všetkým kusom v B"><option value="">★ Vylepšenie všetkého v B…</option>${[0, 1, 2, 3, 4, 5].map(i => `<option value="${i}">${i === 0 ? 'bez vylepšenia' : '★' + i}</option>`).join('')}</select>
      <div class="btns full" style="justify-content:space-between"><span class="btns"><button class="btn" id="twps-copy" title="Skopíruje oblečenie A do B">A → B</button><button class="btn" id="twps-clear">Vyprázdniť B</button></span><button class="btn" id="twps-opt" title="Od súčasného B opakovane spraví najlepšiu výmenu (kus alebo celý set), kým sa zvolený bonus zlepšuje">⚡ Nájdi najlepšiu kombináciu</button></div>
    </div>
    </div>
    <div class="colin">${dollHtml('B')}<div class="slots">${slotRows('B')}</div></div>
    <div id="twps-optlog" class="optlog"></div>`)}
</div>
${panel(`<h4>Porovnanie A a B</h4>
<table class="tw res" id="twps-res"></table>
<div class="sets"><div id="twps-sA"></div><div id="twps-sB"></div></div>
<div class="note">Počíta sa kalkulačkou hry (bonusy na level, vylepšenia ★1–★5, sety podľa počtu kusov). Celková rýchlosť pohybu = (100 % + zviera + 1 % za bod jazdy) × (100 % + rýchlosť z predmetov), bez prémie a dočasných bonusov. ⚠ = predmet je pre inú triedu alebo pohlavie. (lvl X) = vyšší level, než je zadaný.</div>`)}
<div id="twps-list" style="display:none">${panel(`<h4 id="twps-lt">Rebríček</h4>
  <div class="lc">
    <label>Slot <select id="twps-ls"><option value="all">všetky</option>${SL.map(s => `<option value="${s}">${SN[s]}</option>`).join('')}</select></label>
    <label>Kandidáti <select id="twps-lv">${[0, 1, 2, 3, 4, 5].map(i => `<option value="${i}">${i === 0 ? 'bez vylepšenia' : '★' + i}</option>`).join('')}</select></label>
    <span class="hint">Len to, čo B zlepší. „Zmena v B“ = o koľko sa B zlepší, keď kus alebo celý set vložíš na jeho miesto (vrátane rozbitia alebo doplnenia setov).</span></div>
  <div id="twps-lb"></div>`)}</div>`;
    // Okno hry (rám, titulok, presúvanie, zatvorenie robí hra); bez neho obyčajný plávajúci panel.
    const canWin = !!(window.wman && wman.open && window.west && west.gui && west.gui.Window);
    if (canWin) {
      const vw = document.documentElement.clientWidth || innerWidth, vh = document.documentElement.clientHeight || innerHeight;
      gwin = wman.open('twps', 'Porovnanie setov', 'noreload twps-win');
      try { gwin.setMiniTitle('Porovnanie setov'); } catch (e) { }
      // Rám okna hry skladá hra zo 4 obrázkov po 748 × 473 px; širšie alebo vyššie okno má v strede rámu medzeru (pruh).
      gwin.setSize(Math.max(980, Math.min(1490, vw - 16)), Math.max(560, Math.min(940, vh - 70)));
      try { gwin.center(); } catch (e) { }
      w.classList.add('in-win');
      gwin.appendToContentPane(w);
      try { gwin.addEventListener(window.TWE ? TWE('WINDOW_DESTROY') : 'WINDOW_DESTROY', () => { gwin = null; }); } catch (e) { }
    } else { w.classList.add('floating'); document.body.appendChild(w); }
    // Písanie do polí nesmie spúšťať klávesové skratky hry.
    for (const ev of ['keydown', 'keyup', 'keypress']) w.addEventListener(ev, e => e.stopPropagation());
    skinButtons(w);
    const $ = id => document.getElementById('twps-' + id);
    // Ak je okno úzke na dva panely (postava + názvy vedľa seba), A a B sú pod sebou.
    const layout = () => w.classList.toggle('stack', w.clientWidth < 1060);
    layout(); addEventListener('resize', () => { if (document.getElementById('twps')) layout(); });
    // Hlavičky A a B rovnako vysoké, aby panely s postavou a sloty stáli vedľa seba na rovnakej výške.
    const equalize = () => requestAnimationFrame(() => {
      const hs = [...w.querySelectorAll('.chead')]; hs.forEach(h => h.style.minHeight = '');
      if (w.classList.contains('stack')) return;
      const m = Math.max(...hs.map(h => h.offsetHeight)); hs.forEach(h => h.style.minHeight = m + 'px');
    });

    const save = () => lsSet('twps_state', { A: st.A, selB: st.selB, sort: st.sort, mode: st.mode });

    const paintSlotA = s => {
      const p = st.selA[s]; const it = p && ItemManager.get(p.base * 1000);
      $('Al-' + s).innerHTML = lvlSelect('twps-Alv-' + s, p ? p.lvl : 0, !!(it && it.upgradeable));
      $('Alv-' + s).onchange = e => { if (st.selA[s]) st.selA[s].lvl = +e.target.value; calc(); };
    };
    const paintA = () => {
      for (const s of SL) {
        const p = st.selA[s];
        $('An-' + s).innerHTML = itemOptions(s, 'cat', '', p ? p.base : null, st.L);
        $('An-' + s).onchange = e => { const b = +e.target.value; if (b) st.selA[s] = { base: b, lvl: 0 }; else delete st.selA[s]; paintSlotA(s); calc(); };
        paintSlotA(s);
      }
    };
    const renderA = () => { st.selA = JSON.parse(JSON.stringify(wardrobe[st.A] || {})); paintA(); };
    // zoznam do výberu v B: pri zoradení podľa bonusu sa ráta, o koľko kus zlepší SÚČASNÉ B
    const optionsB = slot => {
      const key = st.sort, p = st.selB[slot], selBase = p ? p.base : null;
      if (!SORTNAME[key]) return itemOptions(slot, key, st.filter, selBase, st.L);
      const L = st.L, unit = NOUNIT[key] ? '' : ' %', f = norm(st.filter);
      const base = compute(st.selB, L)[key] || 0;
      const lab = (i, extra) => {
        const warn = (i.cls && i.cls !== Character.charClass ? ' ⚠trieda' : '') + (i.sex && i.sex !== Character.charSex ? ' ⚠pohlavie' : '') + (i.lvl > L ? ' (lvl ' + i.lvl + ')' : '');
        return `<option value="${i.base}" ${i.base === selBase ? 'selected' : ''}>${esc(i.name)}${extra}${warn}</option>`;
      };
      const up = [], worse = [], rest = [];
      for (const i of CAT.bySlot[slot]) {
        if (f && i.base !== selBase && !(norm(i.name).includes(f) || (i.set && CAT.setInfo[i.set] && norm(CAT.setInfo[i.set].name).includes(f)))) continue;
        if (i.base === selBase) { up.push([i, 0, true]); continue; }
        const own = itemValue(i.base, key, L), sv = i.set ? setValue(i.set, key, L) : 0;
        if (own <= 0 && sv <= 0) { rest.push(i); continue; }
        const sel = Object.assign({}, st.selB); sel[slot] = { base: i.base, lvl: i.up ? st.candLvl : 0 };
        const d = Math.round(((compute(sel, L)[key] || 0) - base) * 10) / 10;
        if (d > 0) up.push([i, d]); else worse.push([i, d, own > 0 ? own : sv]);
      }
      up.sort((a, b) => (b[2] ? 1e9 : b[1]) - (a[2] ? 1e9 : a[1]));
      let h = '<option value="">– nič –</option>';
      h += `<optgroup label="Zlepší B – ${SORTNAME[key]}">` + up.map(([i, d, cur]) => lab(i, cur ? '  (teraz)' : `  [+${d}${unit}]`)).join('') + '</optgroup>';
      h += `<optgroup label="Má bonus, ale B nezlepší – ${SORTNAME[key]}">` + worse.sort((a, b) => b[1] - a[1] || b[2] - a[2]).map(([i, d, own]) => lab(i, `  [${d > 0 ? '+' : ''}${d}${unit}]  (sám/set +${own}${unit})`)).join('') + '</optgroup>';
      h += `<optgroup label="Bez bonusu – ${SORTNAME[key]}">` + rest.sort((a, b) => a.name.localeCompare(b.name)).map(i => lab(i, '')).join('') + '</optgroup>';
      return h;
    };
    // ---------- optimalizácia: opakovane najlepšia výmena (kus alebo celý set), kým sa bonus zlepšuje ----------
    let optRunning = false;
    const optimize = async (side = 'B') => {
      if (optRunning) return;
      const key = st.sort, log = $(side === 'A' ? 'Aoptlog' : 'optlog'), btn = $(side === 'A' ? 'Aopt' : 'opt'), S = side === 'A' ? st.selA : st.selB;
      if (!SORTNAME[key]) { log.innerHTML = '<b style="color:#b00">Hore v „Zoradiť podľa“ najprv vyber bonus (napr. Najrýchlejší pohyb po mape, Najviac XP).</b>'; return; }
      optRunning = true; btn.disabled = true;
      const L = st.L, unit = NOUNIT[key] ? '' : ' %';
      // A: len veci z inventára a z toho, čo má postava na sebe (s ich skutočným vylepšením)
      let own = null;
      if (side === 'A') {
        own = {};
        const put = id => { const b = Math.floor(id / 1000), l = id % 1000; if (!(b in own) || l > own[b]) own[b] = l; };
        for (const sl of SL) {
          try { for (const i of (Bag.getItemsByType(sl) || [])) if (i && i.obj) put(i.obj.item_id); } catch (e) {}
          try { const w = Wear.wear[sl]; if (w && w.obj) put(w.obj.item_id); } catch (e) {}
        }
        if (!Object.keys(own).length) { log.innerHTML = '<b style="color:#b00">Inventár sa nenačítal – otvor raz v hre inventár a skús znova.</b>'; optRunning = false; btn.disabled = false; return; }
        for (const sl of SL) { const p = S[sl]; if (p && p.base in own) p.lvl = own[p.base]; }
      }
      const okIt = it => it && (!own || (it.item_base_id || Math.floor(it.item_id / 1000)) in own) && !(it.level > L) && !(it.characterClass && it.characterClass !== Character.charClass) && !(it.characterSex && it.characterSex !== Character.charSex);
      const lvlOf = b => { if (own) return own[b] || 0; const it = ItemManager.get(b * 1000); return it && it.upgradeable ? st.candLvl : 0; };
      const nameOf = b => ((ItemManager.get(b * 1000) || {}).name || '').trim();
      // kandidáti: kusy s bonusom (samé alebo cez set) + celé sety (pri viacerých zbraniach všetky kombinácie)
      const singles = [];
      for (const sl of SL) for (const i of CAT.bySlot[sl]) {
        if (!okIt(ItemManager.get(i.base * 1000))) continue;
        if (itemValue(i.base, key, L) > 0 || (i.set && setValue(i.set, key, L) > 0)) singles.push([sl, i.base]);
      }
      const setCombos = [];
      for (const si of Object.values(CAT.setInfo)) {
        const opts = {};
        for (const id of si.items) { const it = ItemManager.get(id * 1000) || ItemManager.get(id); if (!okIt(it) || !SL.includes(it.type)) continue; (opts[it.type] = opts[it.type] || []).push(it.item_base_id || Math.floor(it.item_id / 1000)); }
        const slots = Object.keys(opts); if (slots.length < 2) continue;
        if (setValue(si.key, key, L) <= 0 && !slots.some(sl => opts[sl].some(b => itemValue(b, key, L) > 0))) continue;
        let combos = [{}];
        for (const sl of slots) { const nx = []; for (const c of combos) for (const b of opts[sl]) nx.push(Object.assign({}, c, { [sl]: b })); combos = nx.slice(0, 16); }
        for (const c of combos) setCombos.push([si.name, c]);
      }
      const start = compute(S, L)[key] || 0, steps = [];
      for (let n = 0; n < 40; n++) {
        const base = compute(S, L)[key] || 0; let best = null;
        for (const [sl, b] of singles) {
          if (S[sl] && S[sl].base === b) continue;
          const sel = Object.assign({}, S); sel[sl] = { base: b, lvl: lvlOf(b) };
          const d = (compute(sel, L)[key] || 0) - base;
          if (d > 0.05 && (!best || d > best.d + 1e-9)) best = { d, ch: { [sl]: b }, label: SN[sl] + ': ' + nameOf(b) };
        }
        for (const [nm, c] of setCombos) {
          const sls = Object.keys(c); if (sls.every(sl => S[sl] && S[sl].base === c[sl])) continue;
          const sel = Object.assign({}, S); for (const sl of sls) sel[sl] = { base: c[sl], lvl: lvlOf(c[sl]) };
          const d = (compute(sel, L)[key] || 0) - base;
          if (d > 0.05 && (!best || d > best.d + 1e-9)) best = { d, ch: c, label: 'Set ' + nm + ' (' + sls.length + ' ks)' };
        }
        if (!best) break;
        for (const sl in best.ch) S[sl] = { base: best.ch[sl], lvl: lvlOf(best.ch[sl]) };
        steps.push(best.label + ' <b>+' + Math.round(best.d * 10) / 10 + unit + '</b>');
        log.innerHTML = 'Hľadám… krok ' + (n + 1) + ': ' + esc(best.label);
        await new Promise(r => setTimeout(r, 0));
      }
      const end = compute(S, L)[key] || 0;
      if (side === 'A') paintA(); else renderB();
      calc(); save();
      log.innerHTML = steps.length
        ? `<b>Hotovo – ${SORTNAME[key]}: z +${start}${unit} na +${end}${unit}.</b> Kroky: ` + steps.map((t, i) => (i + 1) + ') ' + t).join(', ') + '. <i>Hľadá sa postupnými výmenami, takže to nemusí byť úplne najlepšia možná zostava, ale mala by byť blízko. Vynecháva kusy pre iný level, triedu či pohlavie.</i>' + (own ? ' <i>Použité len veci z inventára a z toho, čo máš na sebe, s ich vylepšením.</i>' : '')
        : `<b>${side} sa už pre ${SORTNAME[key]} nedá zlepšiť jednou výmenou kusu ani setu.</b>`;
      optRunning = false; btn.disabled = false;
    };
    const fillB = () => { for (const s of SL) $('B-' + s).innerHTML = optionsB(s); };
    let bt; const scheduleB = () => { clearTimeout(bt); bt = setTimeout(fillB, 80); };
    const renderB = () => {
      for (const s of SL) {
        const p = st.selB[s];
        $('B-' + s).innerHTML = optionsB(s);
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
      let h = `<colgroup><col style="width:34%"><col style="width:22%"><col style="width:22%"><col style="width:22%"></colgroup><thead><tr><th class="l">Bonus (level ${st.L})</th><th>A – moje</th><th>B – na výber</th><th>Rozdiel B − A</th></tr></thead><tbody>`;
      for (const [k, n, u] of ROWS) {
        const d = Math.round((b[k] - a[k]) * 10) / 10;
        const f = v => v ? (k === 'job' ? v : '+' + v + (u ? ' ' + u : '')) : '–';
        h += `<tr${k === 'travel' ? ' class="main"' : ''}><td class="l">${n}</td><td>${f(a[k])}</td><td>${f(b[k])}</td><td class="${d > 0 ? 'plus' : d < 0 ? 'minus' : 'zero'}">${d > 0 ? '+' : ''}${d}${u ? ' ' + u : ''}</td></tr>`;
      }
      $('res').innerHTML = h + '</tbody>';
      $('sA').innerHTML = '<b>Sety A:</b> ' + (a.sets.join(', ') || '–');
      $('sB').innerHTML = '<b>Sety B:</b> ' + (b.sets.join(', ') || '–');
      renderDoll('A', st.selA); renderDoll('B', st.selB);
      scheduleList(); scheduleB(); equalize();
    };

    let lt; const scheduleList = () => { clearTimeout(lt); lt = setTimeout(renderList, 60); };
    const renderList = () => {
      const box = $('list'); box.style.display = 'block';
      const key = st.sort, body = $('lb');
      const what = st.mode === 'sets' ? 'celých setov' : st.mode === 'items' ? 'kusov a párov' : 'kusov aj setov';
      if (!SORTNAME[key]) { $('lt').textContent = 'Rebríček ' + what; body.innerHTML = '<i class="muted">Hore v „Zoradiť podľa“ vyber bonus (napr. Najviac zberu produktov, Najrýchlejší pohyb po mape, Najviac XP), podľa ktorého sa má rebríček zostaviť.</i>'; return; }
      $('lt').textContent = 'Rebríček ' + what + ' – ' + SORTNAME[key];
      const L = st.L, unit = NOUNIT[key] ? '' : ' %', f = norm(st.filter);
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
      for (const si of Object.values(CAT.setInfo)) {
        const opts = {};
        for (const id of si.items) { const it = ItemManager.get(id * 1000) || ItemManager.get(id); if (!it || !SL.includes(it.type)) continue; (opts[it.type] = opts[it.type] || []).push(it.item_base_id || Math.floor(it.item_id / 1000)); }
        const slots = Object.keys(opts); if (slots.length < 2) continue;
        if (st.mode === 'items' && slots.length > 3) continue; // v režime kusov len páry a malé sety (kôň + sedlo, zbrane)
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
      let h = `<table class="tw list"><colgroup><col style="width:38px"><col style="width:110px"><col><col style="width:120px"><col style="width:110px"><col style="width:96px"></colgroup><thead><tr><th>#</th><th>Slot</th><th class="l">Predmet / set</th><th title="Bonus samotného kusu alebo celého setu">Sám / set</th><th>Zmena v B</th><th></th></tr></thead><tbody>`;
      show.forEach((c, n) => {
        if (c.kind === 'set') {
          const parts = Object.entries(c.combo).map(([sl, b]) => SN[sl] + ': ' + esc(((ItemManager.get(b * 1000) || {}).name || '').trim())).join(', ');
          h += `<tr><td class="n">${n + 1}</td><td class="n"><b>Set</b> (${Object.keys(c.combo).length} ks)</td><td class="l"><div class="icrow">${Object.entries(c.combo).map(([sl, b]) => icon(b, lvlFor(b), 'sm')).join('')}</div><b>${esc(c.si.name)}</b><small class="parts">${parts}</small></td>` +
            `<td class="n">${c.own > 0 ? '+' + c.own + unit : '–'}</td><td class="n plus">+${c.d}${unit}</td>` +
            `<td class="n"><button class="btn put" data-combo="${esc(JSON.stringify(c.combo))}">➜ do B</button></td></tr>`;
          return;
        }
        const si = c.i.set && CAT.setInfo[c.i.set];
        const warn = (c.i.cls && c.i.cls !== Character.charClass ? ' ⚠trieda' : '') + (c.i.sex && c.i.sex !== Character.charSex ? ' ⚠pohlavie' : '') + (c.i.lvl > L ? ' (lvl ' + c.i.lvl + ')' : '');
        h += `<tr><td class="n">${n + 1}</td><td class="n">${SN[c.slot]}</td><td class="l"><div class="nm">${icon(c.i.base, lvlFor(c.i.base))}<div>${esc(c.i.name)}${warn}${si ? '<br><small style="color:#7a6a50">' + esc(si.name) + '</small>' : ''}</div></div></td>` +
          `<td class="n">${c.own > 0 ? '+' + c.own + unit : '–'}</td><td class="n plus">+${c.d}${unit}</td>` +
          `<td class="n"><button class="btn put" data-slot="${c.slot}" data-base="${c.i.base}">➜ do B</button></td></tr>`;
      });
      h += '</tbody></table>';
      if (!cands.length) h = '<i>Nič by B v tomto bonuse nezlepšilo.</i>';
      else if (cands.length > st.limit) h += `<div class="more"><button class="btn" id="twps-more">Zobraziť ďalších 40 (spolu ${cands.length})</button></div>`;
      body.innerHTML = h;
      skinButtons(body);
      bindPops(body);
      const more = $('more'); if (more) more.onclick = () => { st.limit += 40; renderList(); };
    };

    $('A').onchange = e => { st.A = e.target.value; renderA(); calc(); save(); };
    $('sort').onchange = e => { st.sort = e.target.value; st.limit = 40; $('set').innerHTML = setOptions(st.sort, st.L); $('Aset').innerHTML = setOptions(st.sort, st.L); renderB(); renderList(); save(); };
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
    $('L').onchange = e => { st.L = Math.max(1, +e.target.value || Character.level); $('set').innerHTML = setOptions(st.sort, st.L); $('Aset').innerHTML = setOptions(st.sort, st.L); paintA(); renderB(); calc(); };
    $('x').onclick = () => closeWin();
    $('Areset').onclick = () => { renderA(); calc(); };
    $('opt').onclick = () => { optimize('B'); };
    $('Aopt').onclick = () => { optimize('A'); };
    $('Aset').onchange = e => {
      const si = CAT.setInfo[e.target.value]; if (!si) return;
      const done = {};
      for (const id of si.items) { const it = ItemManager.get(id * 1000) || ItemManager.get(id); if (!it || !SL.includes(it.type) || done[it.type]) continue;
        done[it.type] = 1; st.selA[it.type] = { base: it.item_base_id || Math.floor(it.item_id / 1000), lvl: 0 }; }
      e.target.value = ''; paintA(); calc();
    };
    $('Bd').onclick = e => {
      const c = e.target.closest && e.target.closest('.cell'); if (!c) return;
      const sl = c.dataset.slot; const row = $('Br-' + sl); const sel = $('B-' + sl);
      w.querySelectorAll('.row.hl').forEach(r => r.classList.remove('hl')); row.classList.add('hl');
      sel.focus(); try { sel.showPicker(); } catch (er) { }
    };
    $('mode').onchange = e => { st.mode = e.target.value; st.limit = 40; renderList(); save(); };
    $('ls').onchange = e => { st.slotF = e.target.value; st.limit = 40; renderList(); };
    $('lv').onchange = e => { st.candLvl = +e.target.value; renderList(); fillB(); };
    $('lb').onclick = e => {
      const b = e.target.closest && e.target.closest('.put'); if (!b) return;
      const put = (slot, base) => { const it = ItemManager.get(base * 1000); st.selB[slot] = { base, lvl: it && it.upgradeable ? st.candLvl : 0 }; };
      if (b.dataset.combo) { const c = JSON.parse(b.dataset.combo); for (const sl in c) put(sl, +c[sl]); } else put(b.dataset.slot, +b.dataset.base);
      renderB(); calc(); save();
    };

    renderA(); renderB(); calc();
  }

  // Ikona v rade posilňovačov (vedľa remeselnej kalkulačky, triedy a prémia), rovnaký rámik ako v hre.
  const ICON = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6dc96"/><stop offset=".55" stop-color="#c29143"/><stop offset="1" stop-color="#6e4b1d"/></linearGradient></defs>
    <rect x="20" y="8" width="3" height="25" rx="1" fill="url(#g)" stroke="#3b250c" stroke-width=".8"/>
    <rect x="8" y="11" width="27" height="3" rx="1.4" fill="url(#g)" stroke="#3b250c" stroke-width=".8"/>
    <circle cx="21.5" cy="8.5" r="2.6" fill="url(#g)" stroke="#3b250c" stroke-width=".8"/>
    <path d="M10 14 L5.5 24 M10 14 L14.5 24 M33 14 L28.5 24 M33 14 L37.5 24" stroke="#3b250c" stroke-width=".9" fill="none"/>
    <path d="M4.5 24 h11 a5.5 3.6 0 0 1 -11 0z M27.5 24 h11 a5.5 3.6 0 0 1 -11 0z" fill="url(#g)" stroke="#3b250c" stroke-width=".9"/>
    <rect x="14" y="32.5" width="15" height="3.5" rx="1.5" fill="url(#g)" stroke="#3b250c" stroke-width=".9"/>
    <text x="10" y="21.6" font-family="Georgia,serif" font-weight="bold" font-size="6" text-anchor="middle" fill="#3b250c">A</text>
    <text x="33" y="21.6" font-family="Georgia,serif" font-weight="bold" font-size="6" text-anchor="middle" fill="#3b250c">B</text></svg>`);
  async function start() {
    installCss();
    const host = document.createElement('div'); host.className = 'twps-launch'; host.setAttribute('data-hud', '');
    host.innerHTML = `<div id="twps-btn" class="bag_item_mini" role="button" tabindex="0" title="Porovnanie setov" style="cursor:pointer"><img src="${ICON}" alt="" width="43" height="43"></div>`;
    const b = host.querySelector('#twps-btn');
    let busy = false;
    b.onclick = async () => {
      if (busy) return;
      if (isOpen()) { closeWin(); return; }
      busy = true; b.style.opacity = '.5';
      try { await loadWardrobe(); open(); } catch (e) { alert('Porovnanie setov: ' + e.message); }
      busy = false; b.style.opacity = '';
    };
    const mount = () => { const row = document.getElementById('buffbars'); if (!row) return false; const calc = row.querySelector('.twcalc-buff'); if (calc) calc.after(host); else row.prepend(host); return true; };
    if (!mount()) {
      b.classList.add('fixed'); b.innerHTML = '⚖ Sety'; document.body.appendChild(host);
      const mo = new MutationObserver(() => { if (document.getElementById('buffbars')) { b.classList.remove('fixed'); b.innerHTML = `<img src="${ICON}" alt="" width="43" height="43">`; if (mount()) mo.disconnect(); } });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  }

  const wait = setInterval(() => {
    if (window.Character && Character.level && window.ItemManager && ItemManager.getAll && window.west && west.item && west.item.BonusExtractor && west.storage && west.storage.ItemSetManager && window.Wear && Wear.wear) {
      clearInterval(wait); start();
    }
  }, 1000);
})();
