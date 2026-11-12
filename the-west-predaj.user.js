// ==UserScript==
// @name         The West – predaj nepotrebných vecí
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      2.0.1
// @description  Klik na ikonu $ zvýrazní v batohu na svetločerveno oblečenie a zbrane, ktoré môžeš predať. Predávaš ručne obchodníkovi. Sady, veci na úlohy, pomenované, vylepšené a najlepšie kusy sa nezvýrazňujú.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-predaj.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-predaj.user.js
// ==/UserScript==

(() => {
  'use strict';

  // Skript nič nepredáva a neposiela žiadnu požiadavku. Iba zvýrazní v batohu veci, ktoré môžeš predať obchodníkovi.
  const game = unsafeWindow;
  const world = location.hostname;
  const P = 'sell:'; // predpona kľúčov v úložisku Tampermonkey

  const T = {
    sk: {
      off: 'Zvýrazniť v batohu veci na predaj',
      on: (n, sum) => `Zvýraznené na predaj: ${n} ks za ${sum}. Klik vypne zvýraznenie.`,
      bagMissing: 'Otvor v hre batoh (inventár), potom sa veci na predaj zvýraznia.',
      help: 'Alt + klik na predmet v batohu: nepredávať (prepína). Šatník: otvor ho raz, skript si zapamätá tvoje sady.',
      kept: 'Nezvýraznené'
    },
    cz: {
      off: 'Zvýraznit v batohu věci na prodej',
      on: (n, sum) => `Zvýrazněno k prodeji: ${n} ks za ${sum}. Klik vypne zvýraznění.`,
      bagMissing: 'Otevři ve hře batoh (inventář), pak se věci na prodej zvýrazní.',
      help: 'Alt + klik na předmět v batohu: neprodávat (přepíná). Šatník: otevři ho jednou, skript si zapamatuje tvé sady.',
      kept: 'Nezvýrazněné'
    }
  };
  const lang = /\.the-west\.sk$/.test(world) ? 'sk' : GM_getValue(P + 'lang', 'sk');
  const t = key => T[lang][key];
  const fmt = n => Number(n).toLocaleString(lang === 'sk' ? 'sk-SK' : 'cs-CZ', { maximumFractionDigits: 0 });
  const money = n => `$${fmt(n)}`;

  function character() {
    const c = game.Character;
    if (!c?.name) return null;
    return { key: `${world}:${c.playerId ?? c.name}`, playerId: c.playerId };
  }
  const keepKey = ch => `${P}keep:${ch.key}`;

  // ---------- Čo predať (všetko z údajov, ktoré hra už má načítané: 0 požiadaviek) ----------
  const SLOTS = ['head', 'neck', 'body', 'belt', 'pants', 'foot', 'right_arm', 'left_arm'];
  const GEAR = new Set(SLOTS);

  // Hodnota bonusu predmetu pre postavu: priamy bonus + bonus za level postavy (+ vylepšenie predmetu).
  const STATS = {
    hp: { skill: 'health', attr: 'strength' },      // HP: zdravie, sila zvyšuje aj zdravie
    ride: { skill: 'ride', attr: 'flexibility' },   // jazda na koni, obratnosť zvyšuje aj jazdu
    speed: 'speed'                                  // rýchlosť v % (napríklad +100 % Rýchlosť)
  };
  function statValue(o, stat, level) {
    const b = o?.bonus || {};
    let v = 0;
    if (stat === 'speed') {
      for (const e of b.item || []) if (e?.type === 'speed') v += Number(e.value) || 0;
      return v;
    }
    v += Number(b.skills?.[stat.skill]) || 0;
    v += Number(b.attributes?.[stat.attr]) || 0;
    for (const e of b.item || []) {
      const inner = e?.type === 'character' ? e.bonus : e;
      if (!inner) continue;
      const hit = (inner.type === 'skill' && inner.name === stat.skill) || (inner.type === 'attribute' && inner.name === stat.attr);
      if (!hit) continue;
      let val = Number(inner.value) || 0;
      if (e.type === 'character' && e.key === 'level') {
        const round = Math[e.roundingMethod] || Math.ceil;
        val = round(val * level);
      }
      v += val;
    }
    const lvl = Number(o.item_level) || 0;
    if (lvl && v && typeof game.ItemManager?.calculateItemLevelBonus === 'function') {
      try { v += Number(game.ItemManager.calculateItemLevelBonus(lvl, v)) || 0; } catch { /* bez vylepšenia */ }
    }
    return v;
  }

  // Najlepšie kusy v každej časti oblečenia (z batoha aj z toho, čo máš na sebe).
  function bestItems(bagItems) {
    const level = Number(game.Character?.level) || 1;
    const pool = bagItems.map(it => it.obj);
    try {
      for (const w of Object.values(game.Wear?.wear || {})) if (w?.obj) pool.push(w.obj);
    } catch { /* bez oblečenia na sebe */ }
    const best = new Map(); // item_id -> 'hp' | 'ride' | 'speed'
    for (const slot of SLOTS) {
      const items = pool.filter(o => o?.type === slot);
      for (const [key, stat] of Object.entries(STATS)) {
        const values = items.map(o => [o.item_id, statValue(o, stat, level)]);
        const max = Math.max(0, ...values.map(([, v]) => v));
        if (max <= 0) continue;
        for (const [id, v] of values) if (v === max && !best.has(id)) best.set(id, key);
      }
    }
    return best;
  }
  // Tempo predaja: hra nezvláda veľa predajov rýchlo za sebou, preto pomaly, po dávkach a s opakovaním.

  const WHY = {
    sk: { keep: 'nepredávať', named: 'pomenované', set: 'sady', upgraded: 'vylepšené', unique: 'jedinečné', quest: 'na úlohy', nosell: 'nepredajné',
      goods: 'produkty a ostatné', craft: 'remeslo', equip: 'v sadách zo Šatníka', hp: 'najviac HP', ride: 'najlepšia jazda', speed: 'najvyššia rýchlosť' },
    cz: { keep: 'neprodávat', named: 'pojmenované', set: 'sady', upgraded: 'vylepšené', unique: 'jedinečné', quest: 'na úkoly', nosell: 'neprodejné',
      goods: 'produkty a ostatní', craft: 'řemeslo', equip: 'v sadách ze Šatníku', hp: 'nejvíce HP', ride: 'nejlepší jízda', speed: 'nejvyšší rychlost' }
  };
  // Všetko, čo súvisí s remeslami: výrobky receptov a ich suroviny (z receptov v ItemManageri).
  let craftCache = null;
  function craftItems() {
    if (craftCache) return craftCache;
    const ids = new Set();
    try {
      for (const r of Object.values(game.ItemManager?.getAll?.() || {})) {
        if (r?.type !== 'recipe') continue;
        if (r.craftitem) ids.add(Number(r.craftitem));
        for (const x of r.resources || []) ids.add(Number(x.item));
      }
    } catch { /* bez receptov chráni aspoň ostatné pravidlá */ }
    if (ids.size) craftCache = ids;
    return ids;
  }

  // Všetky predmety, ktoré patria do nejakej sady v hre (podľa základného predmetu, teda aj vylepšené kusy).
  let setCache = null;
  function setBases() {
    if (setCache) return setCache;
    const bases = new Set();
    try {
      for (const o of Object.values(game.ItemManager?.getAll?.() || {})) {
        if (o?.set) bases.add(Number(o.item_base_id) || Math.floor(Number(o.item_id) / 1000));
      }
      const M = game.west?.storage?.ItemSetManager;
      const sets = M?.getAll?.() || M?._setList || M?.sets;
      if (sets && typeof sets === 'object') {
        for (const set of Object.values(sets)) {
          const items = set?.items || set?.itemIds || set?.item_ids || (typeof set?.getItems === 'function' ? set.getItems() : null);
          for (const i of Array.isArray(items) ? items : []) {
            const id = Number(i?.item_id ?? i);
            if (id) bases.add(id >= 1000 ? Math.floor(id / 1000) : id);
          }
        }
      }
    } catch { /* aspoň pole set pri predmete */ }
    if (bases.size) setCache = bases;
    return bases;
  }
  // Predmety potrebné na úlohy (podľa TW-DB, 117 predmetov, stav 11. 11. 2026): základné ID predmetu (item_id / 1000).
  const QUEST_BASES = new Set([1,3,4,5,6,9,17,30,57,63,124,201,202,203,205,219,221,224,226,227,228,229,235,244,253,254,256,257,259,265,295,302,312,325,326,327,341,342,351,352,353,354,362,363,364,368,369,404,417,429,440,470,482,503,508,509,510,512,537,539,548,566,600,601,602,604,606,643,800,802,805,807,808,821,836,867,10003,10041,10042,10043,10075,10094,10145,10149,10180,10193,10217,11003,11011,11012,11013,11077,11115,11137,11138,11140,11170,11182,11206,40003,40019,40036,40049,40074,40098,40108,40109,40110,41008,41020,41044,42057,42058,42059,42060,42084,43006]);

  const baseOf = o => Number(o.item_base_id) || Math.floor(Number(o.item_id) / 1000);

  // Uložené sady oblečenia (Šatník). Keď ich hra načíta (otvorením Šatníka), skript si ich zapamätá – bez vlastnej požiadavky.
  const OUTFIT_KEYS = new Set([...['head', 'neck', 'body', 'belt', 'pants', 'foot', 'right_arm', 'left_arm', 'animal', 'yield']]);
  const outfitKey = ch => `${P}outfits:${ch.key}`;
  function outfitIds(data) {
    const ids = new Set();
    const walk = (v, key) => {
      if (Array.isArray(v)) { for (const x of v) walk(x, key); return; }
      if (v && typeof v === 'object') {
        if (OUTFIT_KEYS.has(key) && Number(v.item_id)) ids.add(Number(v.item_id));
        for (const [k, x] of Object.entries(v)) walk(x, k);
        return;
      }
      const n = Number(v);
      if (OUTFIT_KEYS.has(key) && Number.isInteger(n) && n >= 1000) ids.add(n);
    };
    walk(data, '');
    return ids;
  }
  function rememberOutfits(data) {
    const ch = character();
    if (!ch) return;
    const ids = outfitIds(data);
    if (!ids.size) return;
    const saved = GM_getValue(outfitKey(ch), { ids: [] });
    const all = new Set([...(saved.ids || []), ...ids]);
    GM_setValue(outfitKey(ch), { ids: [...all], ts: Date.now() });
  }
  // Odpovede hry na Šatník si len prečítame (žiadna požiadavka navyše).
  function hookOutfits() {
    const Ajax = game.Ajax;
    if (!Ajax || Ajax.__twsellHooked) return;
    for (const fn of ['remoteCall', 'remoteCallMode']) {
      const orig = Ajax[fn];
      if (typeof orig !== 'function') continue;
      Ajax[fn] = function (win, action, params, cb, ...rest) {
        if (win === 'inventory' && /equip/.test(String(action)) && typeof cb === 'function') {
          const done = cb;
          cb = function (resp) {
            try { rememberOutfits(resp); } catch { /* ignorovať */ }
            return done.apply(this, arguments);
          };
        }
        return orig.call(this, win, action, params, cb, ...rest);
      };
    }
    Ajax.__twsellHooked = true;
  }
  function equipItems() {
    const ch = character();
    const ids = new Set(ch ? GM_getValue(outfitKey(ch), { ids: [] }).ids || [] : []);
    const list = game.EquipManager?.list;
    const sets = Array.isArray(list) ? list : (list && typeof list === 'object' ? Object.values(list) : []);
    for (const id of outfitIds(sets)) ids.add(id);
    return { ids, count: ids.size };
  }

  function reason(o, ctx) {
    if (!GEAR.has(o.type)) return 'goods';
    if (ctx.keep.has(o.item_id)) return 'keep';
    if (o.named) return 'named';
    if (o.set || ctx.sets.has(baseOf(o))) return 'set';
    if (Number(o.item_level) > 0) return 'upgraded';
    if (o.unique) return 'unique';
    if (o.quest || QUEST_BASES.has(baseOf(o))) return 'quest';
    if (!o.sellable || !(Number(o.sell_price) > 0)) return 'nosell';
    if (ctx.craft.has(o.item_id)) return 'craft';
    if (ctx.equip.has(o.item_id) || ctx.equipBase.has(baseOf(o))) return 'equip';
    if (ctx.best.has(o.item_id)) return ctx.best.get(o.item_id);
    return null;
  }

  function sellData() {
    const ch = character();
    const bag = game.Bag;
    if (!ch) return { error: 'wait' };
    if (!bag?.loaded || !bag.items_by_id) return { error: 'bagMissing' };
    const equip = equipItems();
    const bagItems = Object.values(bag.items_by_id).filter(it => it?.obj && Number(it.count) > 0);
    const best = bestItems(bagItems.filter(it => GEAR.has(it.obj.type)));
    const ctx = { keep: new Set(GM_getValue(keepKey(ch), [])), craft: craftItems(), equip: equip.ids,
      equipBase: new Set([...equip.ids].map(id => Math.floor(id / 1000))), sets: setBases(), best };
    const items = [];
    const kept = {};
    const bestKept = [];
    for (const it of bagItems) {
      const o = it?.obj;
      if (!o || !(Number(it.count) > 0)) continue;
      const why = reason(o, ctx);
      if (why) {
        kept[why] = (kept[why] || 0) + 1;
        if (STATS[why]) bestKept.push({ type: o.type, name: String(o.name).trim(), why });
        continue;
      }
      items.push({ id: o.item_id, name: String(o.name).trim(), level: Number(o.level) || 0, type: o.type,
        count: Number(it.count), price: Number(o.sell_price), sum: Number(o.sell_price) * Number(it.count) });
    }
    items.sort((a, b) => b.sum - a.sum || a.name.localeCompare(b.name));
    return { ch, items, kept, bestKept, keep: ctx.keep, equipSets: equip.count };
  }

  // ---------- Zvýraznenie v batohu ----------
  const MARK = 'twsell-mark';
  let active = !!GM_getValue(P + 'active', false);
  let current = { ids: new Set(), count: 0, sum: 0, error: null, kept: {} };
  const elToItem = new WeakMap();
  const rendered = new Set(); // predmety, ktoré hra vykreslila v batohu (aj mimo Bag.items_by_id)

  // Hlavný prvok predmetu v batohu (tw2widget.InventoryItem: divMain, inak getImgEl()).
  function itemElement(it) {
    try {
      const div = it?.divMain;
      const el = div && (div.jquery ? div[0] : div);
      if (el) return el;
      const img = typeof it?.getImgEl === 'function' ? it.getImgEl() : null;
      const imgEl = img && (img.jquery ? img[0] : img);
      return imgEl?.closest?.('.item') || imgEl?.parentElement || null;
    } catch { return null; }
  }
  function paint(it) {
    const el = itemElement(it);
    if (!el) return;
    elToItem.set(el, it.obj?.item_id);
    const on = active && current.ids.has(it.obj?.item_id);
    if (on) {
      el.classList.add(MARK);
      el.style.setProperty('background-color', 'rgba(255, 110, 110, 0.55)', 'important');
      el.style.setProperty('border-radius', '4px', 'important');
      el.style.setProperty('box-shadow', '0 0 0 2px rgba(210, 40, 40, 0.65)', 'important');
    } else if (el.classList.contains(MARK)) {
      el.classList.remove(MARK);
      el.style.removeProperty('background-color');
      el.style.removeProperty('border-radius');
      el.style.removeProperty('box-shadow');
    }
  }

  function refresh() {
    const data = sellData();
    if (data.error) current = { ids: new Set(), count: 0, sum: 0, error: data.error, kept: {} };
    else {
      current = { ids: new Set(data.items.map(x => x.id)), count: data.items.reduce((a, x) => a + x.count, 0),
        sum: data.items.reduce((a, x) => a + x.sum, 0), error: null, kept: data.kept };
    }
    for (const it of Object.values(game.Bag?.items_by_id || {})) paint(it);
    for (const it of [...rendered]) {
      const el = itemElement(it);
      if (!el || !el.isConnected) rendered.delete(it); else paint(it);
    }
    for (const el of document.querySelectorAll('.' + MARK)) {
      if (!active || !current.ids.has(elToItem.get(el))) {
        el.classList.remove(MARK);
        el.style.removeProperty('background-color');
        el.style.removeProperty('border-radius');
        el.style.removeProperty('box-shadow');
      }
    }
    renderIcon();
  }

  // Keď hra vykreslí predmet v batohu (napríklad pri listovaní alebo filtri), hneď ho zafarbíme.
  function hookInventory() {
    // TraderItem also inherits from Item. Keep the hook on InventoryItem so
    // shop scripts that recompile TraderItem methods never copy this closure.
    const proto = game.tw2widget?.InventoryItem?.prototype;
    if (!proto || typeof proto.getMainDiv !== 'function' || proto.__twsellHooked) return;
    const originalGetMainDiv = proto.getMainDiv;
    proto.getMainDiv = function (...args) {
      const result = originalGetMainDiv.apply(this, args);
      try {
        if (this?.obj && game.Bag?.items_by_id?.[this.obj.item_id]) {
          rendered.add(this);
          setTimeout(() => paint(this), 0);
        }
      } catch { /* ignorovať */ }
      return result;
    };
    proto.__twsellHooked = true;
  }

  // Alt + klik na predmet v batohu: prepne „nepredávať“.
  document.addEventListener('click', event => {
    if (!event.altKey || !active) return;
    let el = event.target;
    while (el && el !== document.body && !elToItem.has(el)) el = el.parentElement;
    const id = el && elToItem.get(el);
    const ch = character();
    if (!id || !ch) return;
    event.preventDefault();
    event.stopPropagation();
    const keep = new Set(GM_getValue(keepKey(ch), []));
    if (keep.has(id)) keep.delete(id); else keep.add(id);
    GM_setValue(keepKey(ch), [...keep]);
    refresh();
  }, true);

  // ---------- Ikona $ ----------
  const host = document.createElement('div');
  const ui = host.attachShadow({ mode: 'open' });
  ui.innerHTML = `<style>
      :host { all: initial; font: 13px Arial, sans-serif; }
      :host([data-hud]) { position: relative; float: left; margin-right: 5px; }
      #open { position: relative; display: block; width: 43px; height: 43px; padding: 0; cursor: pointer; border: 2px solid #87643c;
        border-radius: 3px; background: linear-gradient(#5e4427, #2f2015); color: #f9e2a8; font: bold 20px Georgia, serif; }
      #open:hover { border-color: #d2a76a; }
      #open[aria-pressed="true"] { background: linear-gradient(#b84a3a, #6e1f16); border-color: #ffb3a8; }
      #badge { position: absolute; right: -6px; bottom: -6px; min-width: 16px; padding: 0 4px; border-radius: 9px;
        background: #ff6e6e; color: #fff; font: bold 10px/16px Arial, sans-serif; text-align: center; }
      [hidden] { display: none !important; }
    </style><button id="open" type="button" aria-pressed="false">$<span id="badge" hidden></span></button>`;
  const button = ui.getElementById('open');
  const badge = ui.getElementById('badge');

  function renderIcon() {
    button.setAttribute('aria-pressed', String(active));
    const keptText = Object.entries(current.kept).map(([k, n]) => `${WHY[lang][k] || k} ${fmt(n)}`).join(', ');
    let title;
    if (!active) title = t('off');
    else if (current.error) title = t('bagMissing');
    else title = `${t('on')(fmt(current.count), money(current.sum))}\n${t('kept')}: ${keptText || '–'}\n${t('help')}`;
    button.title = title;
    badge.hidden = !active || !!current.error || !current.ids.size;
    badge.textContent = fmt(current.ids.size);
  }

  button.addEventListener('click', () => {
    active = !active;
    GM_setValue(P + 'active', active);
    hookInventory();
    refresh();
  });

  // Batoh sa mení (predaj obchodníkovi, nákup, práca): prepočet bez požiadavky.
  let bagSig = '';
  setInterval(() => {
    if (!active) return;
    hookInventory();
    const items = game.Bag?.items_by_id;
    const sig = items ? Object.values(items).map(i => `${i?.obj?.item_id}:${i?.count}:${i?.divMain ? 1 : 0}`).join(',') : '';
    if (sig !== bagSig) { bagSig = sig; refresh(); }
  }, 1500);

  function mount() {
    const row = document.getElementById('buffbars');
    if (!row) return false;
    host.setAttribute('data-hud', '');
    row.prepend(host);
    return true;
  }
  hookOutfits();
  hookInventory();
  setTimeout(() => { hookOutfits(); hookInventory(); if (active) refresh(); else renderIcon(); }, 3000);
  renderIcon();
  if (!mount()) {
    document.body.appendChild(host);
    const wait = new MutationObserver(() => { if (mount()) wait.disconnect(); });
    wait.observe(document.body, { childList: true, subtree: true });
  }
})();
