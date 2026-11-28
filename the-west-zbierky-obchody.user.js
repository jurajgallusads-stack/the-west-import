// ==UserScript==
// @name         The West – kde kúpiť do zbierky
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.0.0
// @description  V Úspechoch pri chýbajúcich predmetoch zbierok ukáže, v ktorom meste a obchode sa dajú kúpiť, zoradené podľa vzdialenosti. Nič nekupuje, obchody prehľadáva pomaly (1 požiadavka za 2 s).
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        none
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-zbierky-obchody.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-zbierky-obchody.user.js
// ==/UserScript==

(function () {
  'use strict';
  if (window.__twzoLoaded) return;
  window.__twzoLoaded = true;

  // ---- nastavenia -------------------------------------------------------------------------
  const DELAY = 2000;            // odstup medzi požiadavkami na obchody (ms)
  const SHOP_TTL = 3 * 864e5;    // sortiment obchodu sa znova načíta po 3 dňoch
  const TOWNS_TTL = 864e5;       // zoznam miest sa obnoví raz za deň
  const MAX_TL = 30;             // vyššiu úroveň predaja nemá žiadny obchod v meste (vyššie = Obchodník)
  const KEY = 'twzo:' + location.host;

  // Ktorý obchod v meste predáva ktorý typ predmetu (overené na sortimente obchodov v hre).
  const SHOP_OF = { head: 'tailor', body: 'tailor', pants: 'tailor', foot: 'tailor', neck: 'general', belt: 'general', animal: 'general', yield: 'general', right_arm: 'gunsmith', left_arm: 'gunsmith' };
  const SHOP_NAME = { tailor: 'Krajčír', general: 'Obchod', gunsmith: 'Puškár' };

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // 1 predmet, 2–4 predmety, 5+ predmetov
  const pl = (n, one, few, many) => n === 1 ? one : n >= 2 && n <= 4 ? few : many;
  const money = n => '$' + Math.round(n).toLocaleString('sk-SK');
  const dur = sec => {
    if (!isFinite(sec)) return '?';
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
    return h ? `${h}:${String(m).padStart(2, '0')} h` : m ? `${m}:${String(s).padStart(2, '0')} min` : `${s} s`;
  };
  const age = t => {
    const h = (Date.now() - t) / 36e5;
    if (h < 1) return 'teraz';
    if (h < 24) return `pred ${Math.floor(h)} h`;
    const d = Math.floor(h / 24);
    return d === 1 ? 'včera' : `pred ${d} dňami`;
  };

  // ---- úložisko (localStorage, zvlášť pre každý svet) ---------------------------------------
  // shops["<town_id>:<typ>"] = [čas, úroveň, prirážka, [základné id predmetov], názov mesta]
  let DB = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } })();
  if (!DB.shops) DB.shops = {};
  const sets = new Map();
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(DB)); }
    catch (e) {
      // Plné úložisko: zahodí staršiu polovicu obchodov a skúsi znova.
      const ks = Object.keys(DB.shops).sort((a, b) => DB.shops[a][0] - DB.shops[b][0]);
      ks.slice(0, Math.ceil(ks.length / 2)).forEach(k => { delete DB.shops[k]; sets.delete(k); });
      try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e2) { }
    }
  };
  const shopSet = k => {
    const e = DB.shops[k];
    if (!e) return null;
    let s = sets.get(k);
    if (!s || s.t !== e[0]) { s = new Set(e[3]); s.t = e[0]; sets.set(k, s); }
    return s;
  };

  // ---- predmety ----------------------------------------------------------------------------
  const baseOf = it => it.item_base_id || Math.floor(it.item_id / 1000);
  const getItem = base => ItemManager.get(base * 1000);
  const kindOf = it => {
    const tl = it && it.traderlevel;
    if (!it || !SHOP_OF[it.type]) return 'none';
    if (tl >= 1 && tl <= MAX_TL) return 'town';
    if (tl > MAX_TL && tl < 99) return 'trader';
    return 'none';
  };
  let IMG = null;
  const imgIndex = () => {
    if (IMG) return IMG;
    IMG = new Map();
    const all = ItemManager.getAll();
    for (const k in all) {
      const it = all[k];
      if (!it || it.item_level) continue;
      const m = String(it.image || '').match(/images\/items\/(.+?)\.(?:png|jpg|gif)/);
      if (!m) continue;
      const a = IMG.get(m[1]);
      if (a) a.push(it); else IMG.set(m[1], [it]);
    }
    return IMG;
  };
  // Zbierky v Úspechoch ukazujú predmet obrázkom a názvom; podľa nich sa nájde predmet v hre.
  const itemOfSpan = sp => {
    const img = sp.querySelector('img');
    if (!img) return null;
    const m = (img.getAttribute('src') || '').match(/images\/items\/(.+?)\.(?:png|jpg|gif)/);
    if (!m) return null;
    const list = imgIndex().get(m[1]);
    if (!list) return null;
    const name = (sp.getAttribute('title') || img.getAttribute('alt') || '').trim();
    return list.find(i => String(i.name).trim() === name) || list[0];
  };

  // ---- mestá -------------------------------------------------------------------------------
  // town = [town_id, x, y, názov, počet obyvateľov, npc]
  const loadTowns = force => new Promise((resolve, reject) => {
    if (!force && DB.towns && Date.now() - DB.towns.t < TOWNS_TTL && DB.towns.list.length) return resolve(DB.towns.list);
    Ajax.get('map', 'get_minimap', {}, j => {
      if (!j || j.error || !j.towns) return DB.towns ? resolve(DB.towns.list) : reject(new Error((j && j.msg) || 'Zoznam miest sa nepodarilo načítať.'));
      const list = [];
      for (const k in j.towns) {
        const t = j.towns[k];
        if (t && t.name) list.push([t.town_id, t.x, t.y, t.name, t.member_count || 0, t.npctown ? 1 : 0]);
      }
      DB.towns = { t: Date.now(), list };
      save();
      resolve(list);
    });
  });
  const towns = () => (DB.towns && DB.towns.list) || [];
  const wayTo = t => { try { return Character.calcWayTo(t[1], t[2]); } catch (e) { return Infinity; } };
  const byDistance = () => towns().map(t => ({ t, way: wayTo(t) })).sort((a, b) => a.way - b.way);

  // ---- prehľadávanie obchodov: jedna požiadavka naraz, najviac 1 za 2 sekundy -----------------
  const Scan = {
    q: [], busy: false, done: 0, total: 0, last: 0, timer: null, subs: new Set(),
    get running() { return this.busy || this.q.length > 0; },
    get left() { return this.q.length + (this.busy ? 1 : 0); },
    emit() { this.subs.forEach(f => { try { f(); } catch (e) { console.warn('[twzo]', e); } }); },
    // jobs: úlohy {k, id, type, name} v poradí od najbližšieho mesta
    add(jobs) {
      if (!this.running) { this.done = 0; this.total = 0; }
      const have = new Set(this.q.map(j => j.k));
      for (const j of jobs) if (!have.has(j.k)) { this.q.push(j); have.add(j.k); this.total++; }
      this.emit();
      this.pump();
    },
    stop() {
      this.total -= this.q.length;
      this.q = [];
      clearTimeout(this.timer);
      this.emit();
    },
    pump() {
      if (this.busy || !this.q.length) return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.next(), Math.max(0, this.last + DELAY - Date.now()));
    },
    next() {
      if (this.busy || !this.q.length) return;
      const j = this.q.shift();
      this.busy = true;
      this.last = Date.now();
      let fin = false;
      const finish = entry => {
        if (fin) return;
        fin = true;
        clearTimeout(guard);
        if (entry) { DB.shops[j.k] = entry; save(); }
        this.busy = false;
        this.done++;
        this.emit();
        this.pump();
      };
      const guard = setTimeout(() => finish(null), 20000);
      try {
        Ajax.remoteCallMode('building_' + j.type + '&town_id=' + j.id, '', {}, r => {
          if (!r || r.error || !Array.isArray(r.trader_inv)) return finish([Date.now(), 0, 0, [], j.name]);
          finish([Date.now(), r.level || 0, r.charge || 1, r.trader_inv.map(e => Math.floor(e.item_id / 1000)), r.town_name || j.name]);
        });
      } catch (e) { finish(null); }
    }
  };
  // Úlohy pre dané typy obchodov: všetky mestá od najbližšieho, okrem obchodov načítaných nedávno.
  const jobsFor = (types, force) => {
    const out = [];
    for (const { t } of byDistance()) for (const type of types) {
      const k = t[0] + ':' + type, e = DB.shops[k];
      if (force || !e || Date.now() - e[0] > SHOP_TTL) out.push({ k, id: t[0], type, name: t[3] });
    }
    return out;
  };
  const coverage = type => {
    const all = towns();
    let n = 0;
    for (const t of all) if (DB.shops[t[0] + ':' + type]) n++;
    return { n, of: all.length };
  };
  const sellersOf = (base, type) => {
    const out = [];
    for (const { t, way } of byDistance()) {
      const k = t[0] + ':' + type, s = shopSet(k);
      if (s && s.has(base)) out.push({ t, way, e: DB.shops[k] });
    }
    return out;
  };

  // ---- vzhľad ------------------------------------------------------------------------------
  const CDN = () => String((window.Game && Game.cdnURL) || 'https://westcz.innogamescdn.com').replace(/\/$/, '');
  const installCss = () => {
    if (document.getElementById('twzo-css')) return;
    const st = document.createElement('style');
    st.id = 'twzo-css';
    st.textContent = `
.twzo-sp{position:relative;display:inline-block}
.twzo-b{position:absolute;right:-4px;top:-5px;width:16px;height:16px;line-height:15px;font-size:10px;text-align:center;font-style:normal;border-radius:50%;background:#f3e2b8;border:1px solid #7a5226;cursor:pointer;z-index:3;box-shadow:0 1px 2px rgba(0,0,0,.55);color:#4a2f12;font-weight:bold;user-select:none}
.twzo-b:hover{background:#ffd36b}
.twzo-b.twzo-found{background:#cfe8a6;border-color:#4d6b1f}
.twzo-b.twzo-none{opacity:.6;font-size:9px}
.twzo-bar{display:flex;justify-content:flex-end;align-items:center;gap:8px;padding:4px 10px 2px;font:11px Arial,sans-serif;color:#5b3a12}
#twzo{font:12px Arial,Verdana,sans-serif;color:#2b1d0e;line-height:1.35;height:100%;overflow-y:auto;overflow-x:hidden;box-sizing:border-box;padding:10px 12px;background:#e6d2a4 url("${CDN()}/images/tw2gui/window/window2_bg.jpg?6") 0 0/100% 100% no-repeat}
#twzo .hd{display:flex;gap:10px;align-items:center;margin-bottom:8px}
#twzo .hd img{width:54px;height:54px;background:rgba(90,60,20,.15);border:1px solid #a8885a;border-radius:4px}
#twzo h3{margin:0 0 2px;font:bold 15px Georgia,'Times New Roman',serif;color:#3b2a14}
#twzo .sub{color:#5b4a30;font-size:11px}
#twzo .st{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0 8px;padding:6px 8px;background:rgba(255,245,220,.55);border:1px solid #b89a68;border-radius:4px}
#twzo .st .grow{flex:1}
#twzo .bar{height:7px;background:rgba(90,60,20,.2);border-radius:4px;overflow:hidden;min-width:120px;flex:1}
#twzo .bar i{display:block;height:100%;background:#7a9a3a}
#twzo table{width:100%;border-collapse:collapse;background:rgba(255,248,230,.5)}
#twzo th{text-align:left;font-size:11px;color:#5b3a12;border-bottom:2px solid #a8885a;padding:3px 5px;white-space:nowrap}
#twzo td{padding:4px 5px;border-bottom:1px solid rgba(120,90,50,.25);vertical-align:middle}
#twzo tr:hover td{background:rgba(255,220,140,.25)}
#twzo td.num{text-align:right;white-space:nowrap}
#twzo .own{font-weight:bold;color:#2f5a12}
#twzo .dim{color:#7a6a50;font-size:11px}
#twzo .warn{color:#8a2a10}
#twzo .ics img{width:26px;height:26px;margin:0 2px 0 0;vertical-align:middle;border:1px solid rgba(120,90,50,.35);border-radius:3px;background:rgba(90,60,20,.1)}
#twzo .note{margin:8px 0 0;padding:6px 8px;border-left:3px solid #a8885a;background:rgba(255,245,220,.5)}
#twzo a.lnk{color:#5b2f0a;cursor:pointer;text-decoration:underline}
#twzo button.tw2gui_button{border:0;background:none;padding:0;font:inherit;display:inline-block;vertical-align:middle;cursor:pointer}
#twzo button.tw2gui_button:disabled{opacity:.55;filter:grayscale(.5);cursor:default}
#twzo button.tw2gui_button .textart_title{white-space:nowrap}
#twzo .acts{white-space:nowrap}
#twzo .acts button{margin-right:2px}
#twzo table.sum td{vertical-align:top}
#twzo table.sum td.num,#twzo table.sum td.acts{padding-top:6px}
#twzo .foot{margin-top:10px;font-size:11px;color:#7a6a50}`;
    document.head.appendChild(st);
  };
  const btn = (label, act, data, disabled) => `<button class="tw2gui_button" data-act="${act}"${data ? ` data-v="${esc(data)}"` : ''}${disabled ? ' disabled' : ''}><div class="tw2gui_button_right_cap"></div><div class="tw2gui_button_left_cap"></div><div class="tw2gui_button_middle_bg"></div><div class="textart_title">${esc(label)}</div></button>`;

  // ---- okno s výsledkami ---------------------------------------------------------------------
  let view = null;      // { mode: 'item', base } alebo { mode: 'all', bases: [...] }
  const MAX_ICONS = 30;  // v súhrne najviac 30 ikon v riadku mesta, zvyšok po kliknutí
  const expanded = new Set();
  let gwin = null, rTimer = null;
  const root = () => document.getElementById('twzo');
  const scheduleRender = () => { if (!rTimer) rTimer = setTimeout(() => { rTimer = null; render(); }, 500); };
  const onScan = () => {
    if (!root()) { Scan.subs.delete(onScan); Scan.stop(); return; } // okno zavreté: hľadanie sa zastaví
    scheduleRender();
  };

  const openWin = () => {
    installCss();
    if (root()) return root();
    const w = document.createElement('div');
    w.id = 'twzo';
    gwin = wman.open('twzo', 'Kde kúpiť do zbierky', 'noreload twzo-win');
    try { gwin.setMiniTitle('Kde kúpiť'); } catch (e) { }
    try { gwin.setSize(760, 540); } catch (e) { }
    gwin.appendToContentPane(w);
    w.addEventListener('click', onClick);
    Scan.subs.add(onScan);
    return w;
  };

  const status = types => {
    const cov = types.map(coverage);
    const known = cov.reduce((a, c) => a + c.n, 0), all = cov.reduce((a, c) => a + c.of, 0);
    let h = '<div class="st">';
    if (Scan.running) {
      const pct = Scan.total ? Math.round(Scan.done / Scan.total * 100) : 0;
      h += `<b>Prehľadávam obchody…</b> <span>${Scan.done} / ${Scan.total}</span><span class="bar"><i style="width:${pct}%"></i></span><span class="dim">zostáva asi ${dur(Scan.left * DELAY / 1000)}</span>${btn('Zastaviť', 'stop')}`;
    } else {
      h += `<span class="grow">Poznám ${known} z ${all} obchodov. <span class="dim">Po 3 dňoch sa obchody prehľadajú znova.</span></span>${btn('Prehľadať znova', 'rescan')}`;
    }
    return h + '</div>';
  };

  const townCell = (t, e) => {
    const own = window.Character && Character.homeTown && Character.homeTown.town_id === t[0];
    return `<a class="lnk${own ? ' own' : ''}" data-act="town" data-v="${t[0]}">${esc(t[3])}</a>${own ? ' <span class="dim">(tvoje mesto)</span>' : t[5] ? ' <span class="dim">(NPC mesto)</span>' : ''}`;
  };
  const actCell = t => `<td class="acts">${btn('Mesto', 'town', t[0])}${btn('Na mape', 'map', t[0])}</td>`;

  const renderItem = (w, base) => {
    const it = getItem(base);
    if (!it) { w.innerHTML = '<p>Predmet sa nenašiel.</p>'; return; }
    const kind = kindOf(it), type = SHOP_OF[it.type];
    let h = (view && view.back ? '<p style="margin:0 0 6px"><a class="lnk" data-act="back">← späť na súhrn</a></p>' : '') + `<div class="hd"><img src="${esc(it.image)}" alt=""><div><h3>${esc(it.name)}</h3><div class="sub">`;
    if (kind === 'town') h += `Predáva ${esc(SHOP_NAME[type])} v meste, od úrovne obchodu ${it.traderlevel}. Každé mesto má iný sortiment.`;
    else if (kind === 'trader') h += `<span class="warn">Obchody v mestách tento predmet nepredávajú</span> (úroveň predaja ${it.traderlevel}). Skús putovného Obchodníka alebo trh.`;
    else h += '<span class="warn">Nedá sa kúpiť v obchode.</span> Je z eventu, úlohy, nálezu alebo inej odmeny. Skús trh alebo TW-DB.';
    h += `</div></div></div>`;
    if (!type) { w.innerHTML = h; return; }
    h += status([type]);
    const list = sellersOf(base, type);
    if (list.length) {
      h += `<table><tr><th>#</th><th>Mesto</th><th>Obchod</th><th class="num">Cena</th><th class="num">Cesta</th><th>Údaje</th><th></th></tr>`;
      list.forEach(({ t, way, e }, i) => {
        const charge = e[2] || 1;
        h += `<tr><td class="dim">${i + 1}</td><td>${townCell(t, e)}</td><td>${esc(SHOP_NAME[type])} ${e[1]}</td><td class="num">${money(it.price * charge)}${charge > 1 ? ` <span class="dim">(×${charge})</span>` : ''}</td><td class="num">${dur(way)}</td><td class="dim">${age(e[0])}</td>${actCell(t)}</tr>`;
      });
      h += '</table>';
    } else {
      const c = coverage(type);
      h += `<div class="note">${Scan.running ? 'Zatiaľ som ho nenašiel. Hľadám ďalej od najbližších miest…' : c.n >= c.of ? `Žiadne z ${c.of} miest tento predmet teraz nepredáva.` : `Zatiaľ som ho nenašiel v ${c.n} známych obchodoch. Klikni na „Prehľadať znova“.`}</div>`;
    }
    h += `<div class="foot">Cena je podľa hry: cudzinec platí v obchode ×4, člen mesta základnú cenu. Kupuje sa iba na mieste, okno mesta má tlačidlo na cestu tam. <a class="lnk" data-act="clear">Vymazať uložené obchody</a></div>`;
    w.innerHTML = h;
  };

  const renderAll = (w, bases) => {
    const items = bases.map(getItem).filter(Boolean);
    const town = items.filter(i => kindOf(i) === 'town');
    const other = items.length - town.length;
    const types = [...new Set(town.map(i => SHOP_OF[i.type]))];
    let h = `<div class="hd"><div><h3>Kde kúpiť chýbajúce predmety</h3><div class="sub">${town.length} ${pl(town.length, 'chýbajúci predmet sa dá', 'chýbajúce predmety sa dajú', 'chýbajúcich predmetov sa dá')} kúpiť v obchodoch miest${other ? `, ${other} ${pl(other, 'ďalší sa', 'ďalšie sa', 'ďalších sa')} v mestách ${pl(other, 'nepredáva', 'nepredávajú', 'nepredáva')} (event, úloha, Obchodník)` : ''}.</div></div></div>`;
    h += status(types);
    // mesto -> predmety, ktoré tam predávajú
    const rows = [];
    const found = new Set();
    for (const { t, way } of byDistance()) {
      const here = [];
      for (const it of town) {
        const k = t[0] + ':' + SHOP_OF[it.type], s = shopSet(k);
        if (s && s.has(baseOf(it))) { here.push({ it, e: DB.shops[k] }); found.add(baseOf(it)); }
      }
      if (here.length) rows.push({ t, way, here });
    }
    if (rows.length) {
      h += `<table class="sum"><tr><th>Mesto</th><th class="num">Kusy</th><th>Predmety (podrž myš pre názov a cenu)</th><th class="num">Cesta</th><th></th></tr>`;
      for (const { t, way, here } of rows) {
        const open = expanded.has(t[0]), shown = open ? here : here.slice(0, MAX_ICONS);
        const more = here.length > MAX_ICONS ? ` <a class="lnk" data-act="more" data-v="${t[0]}">${open ? 'menej' : '+' + (here.length - MAX_ICONS) + ' ďalších'}</a>` : '';
        const ics = shown.map(({ it, e }) => `<img src="${esc(it.image)}" alt="" title="${esc(it.name)} · ${esc(SHOP_NAME[SHOP_OF[it.type]])} ${e[1]} · ${money(it.price * (e[2] || 1))}" data-act="item" data-v="${baseOf(it)}" style="cursor:pointer">`).join('') + more;
        h += `<tr><td>${townCell(t)}</td><td class="num"><b>${here.length}</b></td><td class="ics">${ics}</td><td class="num">${dur(way)}</td>${actCell(t)}</tr>`;
      }
      h += '</table>';
    }
    const missing = town.filter(i => !found.has(baseOf(i)));
    if (missing.length) {
      h += `<div class="note"><b>${Scan.running ? 'Zatiaľ nenájdené' : 'Nenájdené v žiadnom známom obchode'} (${missing.length}):</b><div class="ics" style="margin-top:4px">${missing.map(i => `<img src="${esc(i.image)}" alt="" title="${esc(i.name)} · úroveň predaja ${i.traderlevel}" data-act="item" data-v="${baseOf(i)}" style="cursor:pointer">`).join('')}</div></div>`;
    }
    h += `<div class="foot">Klik na predmet ukáže všetky mestá, kde sa predáva. Cena: cudzinec platí ×4, člen mesta základnú cenu. <a class="lnk" data-act="clear">Vymazať uložené obchody</a></div>`;
    w.innerHTML = h;
  };

  const render = () => {
    const w = root();
    if (!w || !view) return;
    const sc = w.scrollTop;
    if (view.mode === 'item') renderItem(w, view.base); else renderAll(w, view.bases);
    w.scrollTop = sc;
  };

  const typesOfView = () => {
    if (!view) return [];
    if (view.mode === 'item') { const it = getItem(view.base); return it && SHOP_OF[it.type] ? [SHOP_OF[it.type]] : []; }
    return [...new Set(view.bases.map(getItem).filter(i => i && kindOf(i) === 'town').map(i => SHOP_OF[i.type]))];
  };

  const start = async (v, force) => {
    view = v;
    openWin();
    render();
    try { await loadTowns(); } catch (e) { root() && (root().innerHTML = `<p class="warn">${esc(e.message)}</p>`); return; }
    const types = typesOfView();
    const it = v.mode === 'item' ? getItem(v.base) : null;
    // Predmety, ktoré obchody v mestách nepredávajú, sa automaticky nehľadajú (iba cez „Prehľadať znova“).
    if (types.length && (force || !it || kindOf(it) === 'town')) Scan.add(jobsFor(types, force));
    render();
  };

  function onClick(ev) {
    const el = ev.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const act = el.dataset.act, v = el.dataset.v;
    const t = v && towns().find(x => String(x[0]) === v);
    if (act === 'stop') Scan.stop();
    else if (act === 'rescan') { const types = typesOfView(); if (types.length) Scan.add(jobsFor(types, true)); }
    else if (act === 'item') start({ mode: 'item', base: +v, back: view && view.mode === 'all' ? view : null });
    else if (act === 'back' && view && view.back) start(view.back);
    else if (act === 'more') { const id = +v; if (expanded.has(id)) expanded.delete(id); else expanded.add(id); render(); }
    else if (act === 'town' && t) TownWindow.open(t[1], t[2], t[5] ? 'npc' : undefined);
    else if (act === 'map' && t) { try { GameMap.center(t[1], t[2]); } catch (e) { } }
    else if (act === 'clear') { DB = { shops: {} }; sets.clear(); save(); render(); }
  }

  // ---- tlačidlá v Úspechoch -------------------------------------------------------------------
  // Zelené tlačidlo = predmet už predáva niektoré známe mesto; bublina ukáže najbližšie.
  const refreshBadges = () => {
    const badges = document.querySelectorAll('.twzo-b.twzo-town');
    if (!badges.length) return;
    const dist = byDistance();
    for (const b of badges) {
      const base = +b.parentElement.dataset.twzo, it = getItem(base);
      if (!it) continue;
      const type = SHOP_OF[it.type];
      let near = null;
      for (const d of dist) { const s = shopSet(d.t[0] + ':' + type); if (s && s.has(base)) { near = d; break; } }
      b.classList.toggle('twzo-found', !!near);
      b.title = 'Kde kúpiť? (' + SHOP_NAME[type] + ')' + (near ? ' · najbližšie: ' + near.t[3] + ' (' + dur(near.way) + ')' : '');
    }
  };
  Scan.subs.add(() => { if (!Scan.running) refreshBadges(); });
  const decorate = (listEl) => {
    if (!listEl) return;
    installCss();
    const bases = [];
    for (const sp of listEl.querySelectorAll('.achieve_list span.locked')) {
      if (!sp.dataset.twzo) {
        const it = itemOfSpan(sp);
        sp.dataset.twzo = it ? baseOf(it) : '0';
        if (!it) continue;
        const kind = kindOf(it), type = SHOP_OF[it.type];
        const b = document.createElement('i');
        b.className = 'twzo-b twzo-' + kind;
        b.textContent = kind === 'none' ? '?' : '$';
        b.title = kind === 'town' ? 'Kde kúpiť? (' + SHOP_NAME[type] + ')' : kind === 'trader' ? 'Obchody v mestách ho nepredávajú (Obchodník, trh)' : 'Nedá sa kúpiť v obchode';
        b.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); start({ mode: 'item', base: baseOf(it) }); });
        sp.classList.add('twzo-sp');
        sp.appendChild(b);
      }
      const base = +sp.dataset.twzo;
      if (base) bases.push(base);
    }
    refreshBadges();
    const uniq = [...new Set(bases)];
    const pane = listEl.querySelector('.tw2gui_scrollpane_clipper_contentpane');
    const old = listEl.querySelector('.twzo-bar');
    if (old) old.remove();
    const sellable = uniq.filter(b => kindOf(getItem(b)) === 'town').length;
    if (pane && sellable) {
      const bar = document.createElement('div');
      bar.className = 'twzo-bar';
      bar.innerHTML = `<span>${sellable} ${pl(sellable, 'chýbajúci predmet sa dá', 'chýbajúce predmety sa dajú', 'chýbajúcich predmetov sa dá')} kúpiť v mestách</span>`;
      const b = document.createElement('div');
      b.innerHTML = btn('Kde kúpiť všetko', 'all');
      const button = b.firstChild;
      button.style.cssText = 'border:0;background:none;padding:0;cursor:pointer';
      button.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); start({ mode: 'all', bases: uniq }); });
      bar.appendChild(button);
      pane.prepend(bar);
    }
  };

  const listOf = ex => {
    try { const d = ex.window && (ex.window.divMain || (ex.window.getMainDiv && ex.window.getMainDiv())); const el = d && (d[0] || d); if (el && el.querySelector) return el.querySelector('.achievement-explorer .achievement-list'); } catch (e) { }
    return document.querySelector('.achievement-explorer .achievement-list');
  };
  const patchExplorer = ex => {
    const P = ex && Object.getPrototypeOf(ex);
    if (!P || P.__twzo || typeof P.updateContent !== 'function') return;
    P.__twzo = true;
    const orig = P.updateContent;
    P.updateContent = function () {
      const r = orig.apply(this, arguments);
      // Iba vlastné úspechy: pri cudzom profile „chýba“ znamená chýba jemu.
      try { if (String(this.playerid) === String(Character.playerId)) decorate(listOf(this)); } catch (e) { console.warn('[twzo]', e); }
      return r;
    };
  };

  const init = () => {
    const origOpen = AchievementWindow.open;
    AchievementWindow.open = function () {
      const inst = origOpen.apply(this, arguments);
      try { if (inst && inst.Explorer) patchExplorer(inst.Explorer); } catch (e) { }
      return inst;
    };
    try { const inst = AchievementWindow.getInstance(Character.playerId); if (inst && inst.Explorer) { patchExplorer(inst.Explorer); decorate(listOf(inst.Explorer)); } } catch (e) { }
  };

  const wait = setInterval(() => {
    if (window.Character && Character.playerId && window.ItemManager && ItemManager.getAll && window.AchievementWindow && AchievementWindow.open && window.Ajax && Ajax.remoteCallMode && window.wman && window.TownWindow) {
      clearInterval(wait);
      init();
    }
  }, 1000);
})();
