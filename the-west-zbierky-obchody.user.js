// ==UserScript==
// @name         The West – kde kúpiť do zbierky
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.2.0
// @description  Ukáže, v ktorom meste a obchode sa dá kúpiť predmet, zoradené podľa vzdialenosti: pri chýbajúcich predmetoch zbierok v Úspechoch a cez hľadanie ľubovoľného predmetu s filtrami (ikona lupy). Nič nekupuje, obchody prehľadáva pomaly (1 požiadavka za 2 s).
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
  const COLL_TTL = 30 * 6e4;     // stav zbierok z Úspechov sa pri hľadaní obnoví najskôr po 30 minútach
  const MAX_TL = 30;             // vyššiu úroveň predaja nemá žiadny obchod v meste (vyššie = Obchodník)
  const KEY = 'twzo:' + location.host;

  // Ktorý obchod v meste predáva ktorý typ predmetu (overené na sortimente obchodov v hre).
  const SHOP_OF = { head: 'tailor', body: 'tailor', pants: 'tailor', foot: 'tailor', neck: 'general', belt: 'general', animal: 'general', yield: 'general', right_arm: 'gunsmith', left_arm: 'gunsmith' };
  const SHOP_NAME = { tailor: 'Krajčír', general: 'Obchod', gunsmith: 'Puškár' };
  const SLOT_NAME = { head: 'Pokrývka hlavy', neck: 'Krk', body: 'Telo', belt: 'Opasok', pants: 'Nohavice', foot: 'Topánky', right_arm: 'Zbraň na súboj', left_arm: 'Zbraň do pevnosti', animal: 'Zviera', yield: 'Produkt' };
  // Bonusy, podľa ktorých sa dá hľadať okrem schopností a vlastností (percentá).
  const SPECIAL = [['speed', 'Rýchlosť pohybu (%)'], ['animal', 'Rýchlosť zvieraťa (%)'], ['experience', 'Skúsenosti (%)'], ['luck', 'Šťastie (%)'], ['dollar', 'Peniaze (%)'], ['drop', 'Zber produktov (%)'], ['regen', 'Regenerácia (%)'], ['job', 'Pracovné body (všetky práce)']];
  const PERCENT = ['speed', 'experience', 'luck', 'dollar', 'drop', 'regen'];

  const norm = s => String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
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

  // Hodnota bonusu predmetu pre tvoju postavu (bonusy rastúce s úrovňou sa prepočítajú na tvoj level).
  // Pri schopnosti sa pripočíta aj vlastnosť, ku ktorej patrí (ako v hre).
  const SKILLS = () => (window.CharacterSkills && CharacterSkills.allSkillKeys) || [];
  const ATTRS = () => (window.CharacterSkills && CharacterSkills.allAttrKeys) || [];
  const skillName = k => (window.CharacterSkills && CharacterSkills.keyNames && CharacterSkills.keyNames[k]) || k;
  const roundB = (v, m) => m === 'ceil' ? Math.ceil(v) : m === 'floor' ? Math.floor(v) : m === 'round' ? Math.round(v) : v;
  const bonusOf = (it, key) => {
    if (!it || !key) return 0;
    if (key === 'animal') return it.speed ? Math.round((1 / it.speed - 1) * 1000) / 10 : 0;
    const b = it.bonus || {}, isSk = SKILLS().includes(key), isAt = ATTRS().includes(key);
    let attrOf = null;
    if (isSk) { try { attrOf = CharacterSkills.getAttributeKey4Skill(key); } catch (e) { } }
    const lvl = (window.Character && Character.level) || 1;
    let v = 0;
    const add = (type, name, val) => {
      if (!val) return;
      if (type === 'skill' && name === key) v += val;
      else if (type === 'attribute' && (name === key || (attrOf && name === attrOf))) v += val;
      else if (!isSk && !isAt && type === key) v += val;
    };
    if (b.skills) for (const k in b.skills) add('skill', k, +b.skills[k]);
    if (b.attributes) for (const k in b.attributes) add('attribute', k, +b.attributes[k]);
    for (const x of b.item || []) {
      if (!x) continue;
      if (x.type === 'character' && x.bonus) {
        const bb = x.bonus;
        if (bb.type === 'job' && bb.job !== 'all') continue;
        add(bb.type, bb.name, roundB((+bb.value || 0) * lvl, x.roundingMethod));
      } else {
        if (x.type === 'job' && x.job !== 'all') continue;
        add(x.type, x.name, +x.value || 0);
      }
    }
    if (PERCENT.includes(key)) v *= 100;
    return Math.round(v * 10) / 10;
  };
  const usable = it => (!it.level || it.level <= Character.level) && (!it.characterClass || it.characterClass === Character.charClass) && (!it.characterSex || it.characterSex === Character.charSex);
  const owned = it => {
    const base = baseOf(it);
    try { if (window.Bag && Bag.getItemsIdsByBaseItemId && Bag.getItemsIdsByBaseItemId(base).length) return true; } catch (e) { }
    try { const w = window.Wear && Wear.wear && Wear.wear[it.type]; const o = w && (w.obj || w); if (o && (o.item_base_id === base || Math.floor(o.item_id / 1000) === base)) return true; } catch (e) { }
    return false;
  };
  const setName = it => { if (!it.set) return ''; try { const s = west.storage.ItemSetManager.get(it.set); return (s && s.name) || ''; } catch (e) { return ''; } };

  // ---- otlačené predmety v zbierkach (Úspechy → Predmety → Zbierky) --------------------------
  // DB.coll = { t: čas, got: [otlačené predmety], miss: [chýbajúce predmety] }
  const decodeHtml = s => { const ta = document.createElement('textarea'); ta.innerHTML = s; return ta.value; };
  const parseColl = data => {
    const got = new Set(), miss = new Set();
    const groups = (data && data.achievements) || {};
    for (const g in groups) {
      if (g === 'inslot' || !Array.isArray(groups[g])) continue;
      for (const a of groups[g]) for (const m of (a && a.meta) || []) {
        const re = /<span class="([^"]*)"[^>]*?title="([^"]*)"[^>]*>\s*<img[^>]*?src="[^"]*?images\/items\/(.+?)\.(?:png|jpg|gif)/g;
        let x;
        while ((x = re.exec(m))) {
          const list = imgIndex().get(x[3]);
          if (!list) continue;
          const name = decodeHtml(x[2]).trim();
          const it = list.find(i => String(i.name).trim() === name) || list[0];
          (/\blocked\b/.test(x[1]) ? miss : got).add(baseOf(it));
        }
      }
    }
    for (const b of got) miss.delete(b);
    return { got, miss };
  };
  let collSets = null;
  const saveColl = c => { if (!c.got.size && !c.miss.size) return; DB.coll = { t: Date.now(), got: [...c.got], miss: [...c.miss] }; collSets = null; save(); };
  const coll = () => {
    if (!DB.coll) return null;
    if (!collSets || collSets.t !== DB.coll.t) collSets = { t: DB.coll.t, got: new Set(DB.coll.got), miss: new Set(DB.coll.miss) };
    return collSets;
  };
  let collLoading = null;
  // Jedna požiadavka, rovnaká ako pri otvorení Úspechy → Zbierky v hre.
  const loadColl = force => {
    if (!force && DB.coll && Date.now() - DB.coll.t < COLL_TTL) return Promise.resolve();
    if (collLoading) return collLoading;
    collLoading = new Promise(resolve => {
      const done = () => { collLoading = null; resolve(); };
      try {
        Ajax.remoteCall('achievement', 'get_list', { folder: 'collections', playerid: Character.playerId }, json => {
          try { if (json && !json.error) saveColl(parseColl(json)); } catch (e) { console.warn('[twzo]', e); }
          done();
        });
      } catch (e) { done(); }
    });
    return collLoading;
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
#twzo .foot{margin-top:10px;font-size:11px;color:#7a6a50}
#twzo .sf{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px 10px;align-items:end;margin-bottom:6px;padding:8px;background:rgba(255,245,220,.55);border:1px solid #b89a68;border-radius:4px}
#twzo .sf label{display:flex;flex-direction:column;gap:2px;font-size:11px;font-weight:bold;color:#5b3a12;min-width:0}
#twzo .sf label.ck{flex-direction:row;align-items:center;gap:5px;font-weight:normal;color:#3b2a14;cursor:pointer}
#twzo .sf .wide{grid-column:span 2}
#twzo .sf .cks{grid-column:1/-1;display:flex;flex-wrap:wrap;gap:4px 16px}
#twzo .sf input[type=text],#twzo .sf input[type=number],#twzo .sf select{height:24px;box-sizing:border-box;padding:0 6px;border:1px solid #8b6b3f;border-radius:3px;background:#f7efd9;color:#3b2a14;font:12px Arial,sans-serif;box-shadow:inset 0 1px 2px rgba(0,0,0,.18);width:100%;min-width:0}
#twzo .sf input[type=checkbox]{margin:0;accent-color:#7a5226}
#twzo table.res td{padding:3px 5px}
#twzo table.res img.ic{width:34px;height:34px;vertical-align:middle;border:1px solid rgba(120,90,50,.35);border-radius:3px;background:rgba(90,60,20,.1)}
#twzo table.res .nm{font-weight:bold}
#twzo table.res .bv{font-weight:bold;color:#2f5a12}
#twzo .ownd{color:#2f5a12;font-size:10px;font-weight:bold}
#twzo .miss{color:#8a2a10;font-size:10px;font-weight:bold}
#twzo-launch{cursor:pointer}
#twzo-launch.fixed{position:fixed;z-index:99999;right:8px;bottom:180px;background:#5c3a1a;border:2px solid #e2c48c;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.5)}`;
    document.head.appendChild(st);
  };
  const btn = (label, act, data, disabled) => `<button class="tw2gui_button" data-act="${act}"${data ? ` data-v="${esc(data)}"` : ''}${disabled ? ' disabled' : ''}><div class="tw2gui_button_right_cap"></div><div class="tw2gui_button_left_cap"></div><div class="tw2gui_button_middle_bg"></div><div class="textart_title">${esc(label)}</div></button>`;

  // ---- okno s výsledkami ---------------------------------------------------------------------
  let view = null;      // { mode: 'item', base } / { mode: 'all', bases: [...] } / { mode: 'search' }
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
    w.addEventListener('input', onInput);
    w.addEventListener('change', onInput);
    // Písanie do polí nesmie spúšťať klávesové skratky hry.
    for (const ev of ['keydown', 'keyup', 'keypress']) w.addEventListener(ev, e => e.stopPropagation());
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
      const miss = jobsFor(types, false).length;
      h += `<span class="grow">Poznám ${known} z ${all} obchodov. <span class="dim">Po 3 dňoch sa obchody prehľadajú znova.</span></span>${miss ? btn(`Prehľadať ${miss} ${pl(miss, 'obchod', 'obchody', 'obchodov')} (~${dur(miss * DELAY / 1000)})`, 'scan') : ''}${btn('Prehľadať znova', 'rescan')}`;
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
    let h = (view && view.back ? `<p style="margin:0 0 6px"><a class="lnk" data-act="back">← späť na ${view.back.mode === 'search' ? 'hľadanie' : 'súhrn'}</a></p>` : '') + `<div class="hd"><img src="${esc(it.image)}" alt=""><div><h3>${esc(it.name)}</h3><div class="sub">`;
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
    h += `<div class="foot">Cena je podľa hry: cudzinec platí v obchode ×4, člen mesta základnú cenu. Kupuje sa iba na mieste, okno mesta má tlačidlo na cestu tam. <a class="lnk" data-act="search">Hľadať ľubovoľný predmet</a> · <a class="lnk" data-act="clear">Vymazať uložené obchody</a></div>`;
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
    h += `<div class="foot">Klik na predmet ukáže všetky mestá, kde sa predáva. Cena: cudzinec platí ×4, člen mesta základnú cenu. <a class="lnk" data-act="search">Hľadať ľubovoľný predmet</a> · <a class="lnk" data-act="clear">Vymazať uložené obchody</a></div>`;
    w.innerHTML = h;
  };

  // ---- hľadanie ľubovoľného predmetu ----------------------------------------------------------
  const F0 = { q: '', type: '', bonus: '', town: '', maxPrice: '', sort: 'near', usable: true, townOnly: true, coll: '' };
  const filters = () => { const f = Object.assign({}, F0, DB.f || {}); delete f.hideOwned; return f; };
  const opt = (v, label, cur) => `<option value="${esc(v)}"${String(v) === String(cur) ? ' selected' : ''}>${esc(label)}</option>`;
  const searchForm = f => {
    const types = Object.keys(SLOT_NAME).map(k => opt(k, SLOT_NAME[k], f.type)).join('');
    const bon = `<optgroup label="Vlastnosti">${ATTRS().map(k => opt(k, skillName(k), f.bonus)).join('')}</optgroup>`
      + `<optgroup label="Schopnosti">${SKILLS().map(k => opt(k, skillName(k), f.bonus)).sort((a, b) => a.replace(/<[^>]+>/g, '').localeCompare(b.replace(/<[^>]+>/g, ''), 'sk')).join('')}</optgroup>`
      + `<optgroup label="Ostatné">${SPECIAL.map(([k, n]) => opt(k, n, f.bonus)).join('')}</optgroup>`;
    const sorts = [['near', 'Najbližšie mesto'], ['bonus', 'Najvyšší bonus'], ['price', 'Najnižšia cena'], ['level', 'Najvyššia úroveň'], ['name', 'Názov']].map(([k, n]) => opt(k, n, f.sort)).join('');
    return `<div class="sf" id="twzo-sf">
<label class="wide">Názov predmetu<input type="text" name="q" value="${esc(f.q)}" placeholder="napr. sombrero, kolt, kôň…" autocomplete="off"></label>
<label>Typ<select name="type">${opt('', 'Všetky typy', f.type)}${types}</select></label>
<label>Bonus<select name="bonus">${opt('', 'Bez bonusu', f.bonus)}${bon}</select></label>
<label class="wide">Mesto<select name="town"><option value="">Všetky mestá</option></select></label>
<label>Max. cena ($)<input type="number" name="maxPrice" min="0" step="100" value="${esc(f.maxPrice)}"></label>
<label>Zoradiť<select name="sort">${sorts}</select></label>
<label class="wide">Zbierky (Úspechy)<select name="coll">${opt('', 'Všetky predmety', f.coll)}${opt('hide', 'Skryť, čo už mám otlačené', f.coll)}${opt('missing', 'Len to, čo mi chýba do zbierok', f.coll)}</select></label>
<div class="cks"><label class="ck"><input type="checkbox" name="usable"${f.usable ? ' checked' : ''}> len pre moju postavu (úroveň, trieda, pohlavie)</label>
<label class="ck"><input type="checkbox" name="townOnly"${f.townOnly ? ' checked' : ''}> len predmety z obchodov v mestách</label></div>
</div><div id="twzo-res"></div>`;
  };
  const fillTowns = (w, f) => {
    const sel = w.querySelector('select[name=town]');
    if (!sel || sel.options.length > 1 || !towns().length) return;
    sel.innerHTML = opt('', 'Všetky mestá', f.town) + byDistance().map(({ t, way }) => opt(t[0], `${t[3]} (${dur(way)})`, f.town)).join('');
  };
  const searchTypes = f => {
    if (f.type) return [SHOP_OF[f.type]];
    return ['tailor', 'general', 'gunsmith'];
  };
  const renderSearch = w => {
    const f = filters();
    if (!w.querySelector('#twzo-sf')) w.innerHTML = searchForm(f);
    fillTowns(w, f);
    const res = w.querySelector('#twzo-res');
    const types = searchTypes(f);
    const dist = byDistance();
    const townId = f.town ? +f.town : 0;
    const q = norm(f.q), maxP = +f.maxPrice || 0;
    if (f.coll && (!DB.coll || Date.now() - DB.coll.t >= COLL_TTL) && !collLoading) loadColl().then(render);
    const C = coll();
    const all = ItemManager.getAll();
    const rows = [];
    for (const k in all) {
      const it = all[k];
      if (!it || it.item_level || !SHOP_OF[it.type]) continue;
      if (it.price === 123456 || (it.speed && it.speed < 0.1)) continue; // testovacie predmety
      if (f.type && it.type !== f.type) continue;
      const kind = kindOf(it);
      if ((f.townOnly || townId) && kind !== 'town') continue;
      if (q && !norm(it.name).includes(q) && !norm(setName(it)).includes(q)) continue;
      if (maxP && it.price > maxP) continue;
      if (f.usable && !usable(it)) continue;
      const bv = f.bonus ? bonusOf(it, f.bonus) : 0;
      if (f.bonus && bv <= 0) continue;
      const base = baseOf(it), type = SHOP_OF[it.type];
      if (townId) { const s = shopSet(townId + ':' + type); if (!s || !s.has(base)) continue; }
      if (f.coll && C) {
        if (f.coll === 'hide' && C.got.has(base)) continue;
        if (f.coll === 'missing' && !C.miss.has(base)) continue;
      }
      let near = null, cnt = 0;
      if (kind === 'town') for (const d of dist) { const s = shopSet(d.t[0] + ':' + type); if (s && s.has(base)) { cnt++; if (!near) near = d; } }
      rows.push({ it, bv, near, cnt, kind });
    }
    const cmpName = (a, b) => String(a.it.name).localeCompare(String(b.it.name), 'sk');
    const sorters = {
      near: (a, b) => (a.near ? a.near.way : Infinity) - (b.near ? b.near.way : Infinity) || b.bv - a.bv || cmpName(a, b),
      bonus: (a, b) => b.bv - a.bv || (a.near ? a.near.way : Infinity) - (b.near ? b.near.way : Infinity) || cmpName(a, b),
      price: (a, b) => a.it.price - b.it.price || cmpName(a, b),
      level: (a, b) => (b.it.level || 0) - (a.it.level || 0) || cmpName(a, b),
      name: cmpName
    };
    rows.sort(sorters[f.sort] || sorters.near);
    const limit = view.limit || 100;
    let h = status(types);
    if (f.coll) h += !C ? `<div class="note">Načítavam stav zbierok z Úspechov…</div>`
      : `<p class="dim" style="margin:2px 0">Zbierky: ${C.got.size} ${pl(C.got.size, 'otlačený predmet', 'otlačené predmety', 'otlačených predmetov')}, ${C.miss.size} ${pl(C.miss.size, 'chýba', 'chýbajú', 'chýba')} (stav ${age(DB.coll.t)}). <a class="lnk" data-act="reloadcoll">Obnoviť</a></p>`;
    if (townId) {
      const t = towns().find(x => x[0] === townId);
      const unknown = types.filter(ty => !DB.shops[townId + ':' + ty]);
      if (unknown.length) h += `<div class="note">Obchody mesta ${esc(t ? t[3] : '')} (${unknown.map(ty => SHOP_NAME[ty]).join(', ')}) ešte nepoznám. ${btn('Prehľadať toto mesto', 'scantown', townId)}</div>`;
    }
    h += `<p class="dim" style="margin:4px 0">${rows.length} ${pl(rows.length, 'predmet', 'predmety', 'predmetov')}${rows.length > limit ? `, zobrazených ${limit}` : ''}. Klik na predmet ukáže všetky mestá, kde sa predáva.</p>`;
    if (rows.length) {
      h += `<table class="res"><tr><th></th><th>Predmet</th>${f.bonus ? `<th class="num">${esc(f.bonus === 'animal' || PERCENT.includes(f.bonus) || f.bonus === 'job' ? (SPECIAL.find(x => x[0] === f.bonus) || [, f.bonus])[1].replace(/ \(%\)$/, ' %') : skillName(f.bonus))}</th>` : ''}<th class="num">Cena</th><th>Najbližšie mesto</th><th></th></tr>`;
      for (const r of rows.slice(0, limit)) {
        const it = r.it, sn = setName(it), e = r.near && DB.shops[r.near.t[0] + ':' + SHOP_OF[it.type]];
        const charge = e ? (e[2] || 1) : 1;
        const where = r.kind !== 'town' ? `<span class="dim">${r.kind === 'trader' ? 'iba Obchodník / trh' : 'nepredáva sa v obchode'}</span>`
          : r.near ? `${townCell(r.near.t)} <span class="dim">${dur(r.near.way)}${r.cnt > 1 ? ` · +${r.cnt - 1} ${pl(r.cnt - 1, 'ďalšie mesto', 'ďalšie mestá', 'ďalších miest')}` : ''}</span>`
            : `<span class="dim">zatiaľ nenájdené</span>`;
        h += `<tr><td><img class="ic" src="${esc(it.image)}" alt="" data-act="item" data-v="${baseOf(it)}" style="cursor:pointer"></td>`
          + `<td><a class="lnk nm" data-act="item" data-v="${baseOf(it)}">${esc(it.name)}</a>${C && C.got.has(baseOf(it)) ? ' <span class="ownd" title="Otlačené v zbierke v Úspechoch">✓ v zbierke</span>' : C && C.miss.has(baseOf(it)) ? ' <span class="miss" title="Chýba ti do zbierky v Úspechoch">chýba do zbierky</span>' : ''}${owned(it) ? ' <span class="dim">· v batohu</span>' : ''}<br><span class="dim">${esc(SLOT_NAME[it.type] || it.type)} · úroveň ${it.level || 1}${sn ? ' · ' + esc(sn) : ''}</span></td>`
          + (f.bonus ? `<td class="num bv">+${r.bv}</td>` : '')
          + `<td class="num">${money(it.price * charge)}${charge > 1 ? ` <span class="dim">(×${charge})</span>` : ''}</td><td>${where}</td>`
          + `<td class="acts">${r.near ? btn('Mesto', 'town', r.near.t[0]) : ''}</td></tr>`;
      }
      h += '</table>';
      if (rows.length > limit) h += `<p>${btn('Zobraziť ďalších 100', 'morerows')}</p>`;
    } else h += `<div class="note">Nič nevyhovuje filtrom.${f.townOnly ? ' Skús vypnúť „len predmety z obchodov v mestách“.' : ''}</div>`;
    h += `<div class="foot">Cena: v cudzom meste ×4, vo vlastnom základná. „Zatiaľ nenájdené“ znamená, že ho nepredáva žiadny z doteraz prehľadaných obchodov. <a class="lnk" data-act="clear">Vymazať uložené obchody</a></div>`;
    res.innerHTML = h;
  };
  let inTimer = null;
  function onInput(ev) {
    if (!view || view.mode !== 'search') return;
    const el = ev.target;
    if (!el || !el.name || !el.closest('#twzo-sf')) return;
    const f = filters();
    f[el.name] = el.type === 'checkbox' ? el.checked : el.value;
    if (el.name === 'bonus') { f.sort = el.value ? 'bonus' : (f.sort === 'bonus' ? 'near' : f.sort); const s = root().querySelector('select[name=sort]'); if (s) s.value = f.sort; }
    DB.f = f; save();
    view.limit = 100;
    clearTimeout(inTimer);
    inTimer = setTimeout(render, el.type === 'text' || el.type === 'number' ? 250 : 0);
  }

  const render = () => {
    const w = root();
    if (!w || !view) return;
    const sc = w.scrollTop;
    if (view.mode === 'search') { if (!w.querySelector('#twzo-sf')) w.innerHTML = ''; renderSearch(w); }
    else if (view.mode === 'item') renderItem(w, view.base); else renderAll(w, view.bases);
    w.scrollTop = sc;
  };

  const typesOfView = () => {
    if (!view) return [];
    if (view.mode === 'item') { const it = getItem(view.base); return it && SHOP_OF[it.type] ? [SHOP_OF[it.type]] : []; }
    if (view.mode === 'search') return searchTypes(filters());
    return [...new Set(view.bases.map(getItem).filter(i => i && kindOf(i) === 'town').map(i => SHOP_OF[i.type]))];
  };

  const start = async (v, force) => {
    view = v;
    const w = openWin();
    if (w) w.innerHTML = '';
    render();
    try { await loadTowns(); } catch (e) { root() && (root().innerHTML = `<p class="warn">${esc(e.message)}</p>`); return; }
    const types = typesOfView();
    const it = v.mode === 'item' ? getItem(v.base) : null;
    // Predmety, ktoré obchody v mestách nepredávajú, sa automaticky nehľadajú (iba cez „Prehľadať znova“).
    // Hľadanie neprehľadáva samo (bolo by to až 246 obchodov): na to je tlačidlo „Prehľadať … obchodov“.
    if (v.mode !== 'search' && types.length && (force || !it || kindOf(it) === 'town')) Scan.add(jobsFor(types, force));
    render();
  };

  function onClick(ev) {
    const el = ev.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const act = el.dataset.act, v = el.dataset.v;
    const t = v && towns().find(x => String(x[0]) === v);
    if (act === 'stop') Scan.stop();
    else if (act === 'rescan') { const types = typesOfView(); if (types.length) Scan.add(jobsFor(types, true)); }
    else if (act === 'item') start({ mode: 'item', base: +v, back: view && (view.mode === 'all' || view.mode === 'search') ? view : (view && view.back) || null });
    else if (act === 'search') start({ mode: 'search' });
    else if (act === 'scan') { const types = typesOfView(); if (types.length) Scan.add(jobsFor(types, false)); }
    else if (act === 'scantown') { const tw = towns().find(x => String(x[0]) === v); if (tw) Scan.add(typesOfView().map(type => ({ k: tw[0] + ':' + type, id: tw[0], type, name: tw[3] }))); }
    else if (act === 'reloadcoll') { loadColl(true).then(render); }
    else if (act === 'morerows') { view.limit = (view.limit || 100) + 100; render(); }
    else if (act === 'back' && view && view.back) start(view.back);
    else if (act === 'more') { const id = +v; if (expanded.has(id)) expanded.delete(id); else expanded.add(id); render(); }
    else if (act === 'town' && t) TownWindow.open(t[1], t[2], t[5] ? 'npc' : undefined);
    else if (act === 'map' && t) { try { GameMap.center(t[1], t[2]); } catch (e) { } }
    else if (act === 'clear') { if (!confirm('Vymazať uložený sortiment všetkých obchodov? Pri ďalšom hľadaní sa obchody prehľadajú znova.')) return; DB = { shops: {}, f: DB.f }; sets.clear(); save(); loadTowns().then(render, render); }
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
    P.updateContent = function (data) {
      const r = orig.apply(this, arguments);
      try { if (String(this.playerid) === String(Character.playerId) && data && data.folder && data.folder.id === 'collections') { saveColl(parseColl(data)); if (view && view.mode === 'search') scheduleRender(); } } catch (e) { console.warn('[twzo]', e); }
      // Iba vlastné úspechy: pri cudzom profile „chýba“ znamená chýba jemu.
      try { if (String(this.playerid) === String(Character.playerId)) decorate(listOf(this)); } catch (e) { console.warn('[twzo]', e); }
      return r;
    };
  };

  // ---- ikona v rade posilňovačov: hľadanie ľubovoľného predmetu ------------------------------
  const ICON = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6dc96"/><stop offset=".55" stop-color="#c29143"/><stop offset="1" stop-color="#6e4b1d"/></linearGradient></defs><path d="M26.5 26.5 L36 36" stroke="#3b250c" stroke-width="7" stroke-linecap="round"/><path d="M26.5 26.5 L36 36" stroke="url(#g)" stroke-width="4.6" stroke-linecap="round"/><circle cx="18" cy="18" r="11.5" fill="#f3e6c4" stroke="#3b250c" stroke-width="5.4"/><circle cx="18" cy="18" r="11.5" fill="none" stroke="url(#g)" stroke-width="3.6"/><text x="18" y="23.2" font-family="Georgia,serif" font-weight="bold" font-size="15" text-anchor="middle" fill="#3b250c">$</text></svg>`);
  const closeWin = () => { try { const wnd = wman.getById('twzo'); if (wnd) wnd.destroy(); } catch (e) { } const w = root(); if (w) { const win = w.closest('.tw2gui_window'); if (win) win.remove(); } };
  const toggleSearch = () => { if (root() && view && view.mode === 'search') closeWin(); else start({ mode: 'search' }); };
  const mountLauncher = () => {
    if (document.getElementById('twzo-launch')) return;
    installCss();
    const host = document.createElement('div');
    host.className = 'twzo-launchhost';
    host.setAttribute('data-hud', '');
    host.innerHTML = `<div id="twzo-launch" class="bag_item_mini" role="button" tabindex="0" title="Kde kúpiť: hľadať ľubovoľný predmet"><img src="${ICON}" alt="" width="43" height="43"></div>`;
    host.firstChild.addEventListener('click', toggleSearch);
    const put = () => {
      const row = document.getElementById('buffbars');
      if (!row) return false;
      const after = row.querySelector('.twps-launch') || row.querySelector('.twcalc-buff');
      if (after) after.after(host); else row.prepend(host);
      host.firstChild.classList.remove('fixed');
      return true;
    };
    if (put()) return;
    host.firstChild.classList.add('fixed');
    document.body.appendChild(host);
    let n = 0;
    const iv = setInterval(() => { if (put() || ++n > 60) clearInterval(iv); }, 2000);
  };

  const init = () => {
    mountLauncher();
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
