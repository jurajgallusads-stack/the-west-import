// ==UserScript==
// @name         The West – predaj nepotrebných vecí
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.1.0
// @description  Zoznam oblečenia a zbraní z batoha, ktoré nepotrebuješ, po záložkách a s cenou. Sady, pomenované, vylepšené a najlepšie kusy na HP a rýchlosť sa neponúkajú. Produkty sa nepredávajú. Predaj obchodníkovi po potvrdení.
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

  const game = unsafeWindow;
  const world = location.hostname;
  const P = 'sell:'; // predpona kľúčov v úložisku Tampermonkey

  const T = {
    sk: {
      title: 'Predaj nepotrebných vecí', icon: 'Predaj nepotrebných vecí', close: 'Zavrieť', minimize: 'Minimalizovať', restore: 'Obnoviť okno',
      intro: 'Oblečenie a zbrane z batoha, ktoré nepotrebuješ. Produkty sa nepredávajú vôbec. Neponúkajú sa sady, pomenované a vylepšené predmety ani v každej časti oblečenia kus s najviac HP, s najlepšou jazdou na koni (jazda + obratnosť) a s najvyššou rýchlosťou. Oblečenie na sebe sa nepredáva. Odškrtnutá vec sa tentoraz nepredá, tlačidlom „nepredávať“ ju vylúčiš natrvalo.',
      all: 'Všetko', slots: { head: 'Klobúky', neck: 'Šatky', body: 'Oblečenie', belt: 'Opasky', pants: 'Nohavice', foot: 'Topánky', right_arm: 'Duelové zbrane', left_arm: 'Zbrane do pevnosti' },
      best: 'Ponechané ako najlepšie', bestHp: 'najviac HP', bestRide: 'najlepšia jazda', bestSpeed: 'najvyššia rýchlosť',
      bagMissing: 'Batoh ešte nie je načítaný. Otvor v hre batoh (inventár) a zoznam sa zobrazí.',
      wait: 'Počkaj, kým sa načíta herný svet.',
      total: 'Na predaj', selected: 'Označené', sellAll: 'Predať označené v záložke', sellOne: 'Predať', stop: 'Zastaviť',
      confirmAll: (n, sum) => `Predať obchodníkovi označené položky (${n}) za ${sum}? Predaj sa nedá vrátiť. Každá položka je jedna požiadavka na server, posielajú sa postupne.`,
      confirmOne: (name, n, sum) => `Predať ${name} (${n} ks) obchodníkovi za ${sum}? Predaj sa nedá vrátiť.`,
      selling: (i, n) => `Predávam ${i} / ${n}…`, sold: (n, sum) => `Predané položky: ${n}, spolu ${sum}.`, fail: 'Predaj sa nepodaril:',
      kept: 'Ponechané', keep: 'nepredávať', resetKeep: 'Vymazať zoznam „nepredávať“',
      gear: 'Oblečenie a zbrane', goods: 'Produkty', item: 'Predmet', qty: 'Počet', piece: 'za kus', sum: 'Spolu', level: 'level',
      none: 'Nič na predaj.',
      equipHint: 'Tip: otvor v hre Šatník (uložené sady oblečenia). Potom sa nebude ponúkať oblečenie z tvojich sád, napríklad sada na nálezku.',
      equipKnown: n => `Oblečenie z ${n} uložených sád sa nepredáva.`,
      why: { keep: 'nepredávať', named: 'pomenované', set: 'sady', upgraded: 'vylepšené', unique: 'jedinečné', quest: 'úlohy', nosell: 'nepredajné',
        goods: 'produkty a ostatné', craft: 'remeslo', equip: 'v sadách', hp: 'najviac HP', ride: 'najlepšia jazda', speed: 'najvyššia rýchlosť' }
    },
    cz: {
      title: 'Prodej nepotřebných věcí', icon: 'Prodej nepotřebných věcí', close: 'Zavřít', minimize: 'Minimalizovat', restore: 'Obnovit okno',
      intro: 'Oblečení a zbraně z batohu, které nepotřebuješ. Produkty se neprodávají vůbec. Nenabízejí se sady, pojmenované a vylepšené předměty ani v každé části oblečení kus s nejvíce HP, s nejlepší jízdou na koni (jízda + obratnost) a s nejvyšší rychlostí. Oblečení na sobě se neprodává. Odškrtnutá věc se tentokrát neprodá, tlačítkem „neprodávat“ ji vyloučíš natrvalo.',
      all: 'Vše', slots: { head: 'Klobouky', neck: 'Šátky', body: 'Oblečení', belt: 'Opasky', pants: 'Kalhoty', foot: 'Boty', right_arm: 'Duelové zbraně', left_arm: 'Zbraně do pevnosti' },
      best: 'Ponechané jako nejlepší', bestHp: 'nejvíce HP', bestRide: 'nejlepší jízda', bestSpeed: 'nejvyšší rychlost',
      bagMissing: 'Batoh ještě není načtený. Otevři ve hře batoh (inventář) a seznam se zobrazí.',
      wait: 'Počkej, než se načte herní svět.',
      total: 'Na prodej', selected: 'Označené', sellAll: 'Prodat označené v záložce', sellOne: 'Prodat', stop: 'Zastavit',
      confirmAll: (n, sum) => `Prodat obchodníkovi označené položky (${n}) za ${sum}? Prodej nejde vrátit. Každá položka je jeden požadavek na server, posílají se postupně.`,
      confirmOne: (name, n, sum) => `Prodat ${name} (${n} ks) obchodníkovi za ${sum}? Prodej nejde vrátit.`,
      selling: (i, n) => `Prodávám ${i} / ${n}…`, sold: (n, sum) => `Prodané položky: ${n}, celkem ${sum}.`, fail: 'Prodej se nepovedl:',
      kept: 'Ponechané', keep: 'neprodávat', resetKeep: 'Vymazat seznam „neprodávat“',
      gear: 'Oblečení a zbraně', goods: 'Produkty', item: 'Předmět', qty: 'Počet', piece: 'za kus', sum: 'Celkem', level: 'level',
      none: 'Nic na prodej.',
      equipHint: 'Tip: otevři ve hře Šatník (uložené sady oblečení). Pak se nebude nabízet oblečení z tvých sad, například sada na nález.',
      equipKnown: n => `Oblečení z ${n} uložených sad se neprodává.`,
      why: { keep: 'neprodávat', named: 'pojmenované', set: 'sady', upgraded: 'vylepšené', unique: 'jedinečné', quest: 'úkoly', nosell: 'neprodejné',
        goods: 'produkty a ostatní', craft: 'řemeslo', equip: 'v sadách', hp: 'nejvíce HP', ride: 'nejlepší jízda', speed: 'nejvyšší rychlost' }
    }
  };
  let lang = GM_getValue(P + 'lang', 'sk');
  const t = key => T[lang][key];
  const fmt = n => Number(n).toLocaleString(lang === 'sk' ? 'sk-SK' : 'cs-CZ', { maximumFractionDigits: 0 });
  const money = n => `$${fmt(n)}`;
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

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
  const SELL_GAP_MS = 1200;

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

  // Oblečenie z uložených sád (Šatník), ak ich hra už načítala.
  function equipItems() {
    const list = game.EquipManager?.list;
    const sets = Array.isArray(list) ? list : (list && typeof list === 'object' ? Object.values(list) : []);
    const ids = new Set();
    const collect = v => {
      if (v && typeof v === 'object') { for (const x of Object.values(v)) collect(x); return; }
      const n = Number(v);
      if (Number.isInteger(n) && n >= 1000) ids.add(n);
    };
    for (const set of sets) collect(set);
    return { ids, count: sets.length };
  }

  function reason(o, ctx) {
    if (!GEAR.has(o.type)) return 'goods';
    if (ctx.keep.has(o.item_id)) return 'keep';
    if (o.named) return 'named';
    if (o.set) return 'set';
    if (Number(o.item_level) > 0) return 'upgraded';
    if (o.unique) return 'unique';
    if (o.quest) return 'quest';
    if (!o.sellable || !(Number(o.sell_price) > 0)) return 'nosell';
    if (ctx.craft.has(o.item_id)) return 'craft';
    if (ctx.equip.has(o.item_id)) return 'equip';
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
    const ctx = { keep: new Set(GM_getValue(keepKey(ch), [])), craft: craftItems(), equip: equip.ids, best };
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

  // ---------- Rozhranie ----------
  const STYLE = `
    :host { all: initial; font: 13px Arial, sans-serif; }
    :host([data-hud]) { position: relative; float: left; margin-right: 5px; }
    :host([data-panel]) { position: absolute; left: 0; top: 0; width: 0; height: 0; z-index: 1; }
    button, input { font: inherit; }
    #open { display: block; width: 43px; height: 43px; padding: 0; cursor: pointer; border: 2px solid #87643c; border-radius: 3px;
      background: linear-gradient(#5e4427, #2f2015); color: #f9e2a8; font: bold 20px Georgia, serif; }
    #open:hover, #open[aria-expanded="true"] { border-color: #d2a76a; }
    #panel { position: fixed; top: 110px; left: 8px; width: 760px; height: 70vh; overflow: auto; box-sizing: border-box;
      background: #f4e8cc; color: #4a2f17; border: 3px solid #4a2f17; border-radius: 6px; box-shadow: 0 6px 24px rgba(0,0,0,.55);
      text-align: left; line-height: 1.35; overscroll-behavior: contain; }
    #panel.min { height: auto !important; overflow: hidden; }
    #panel.min > :not(header) { display: none; }
    #panel.dragging { opacity: .92; }
    header { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
      background: #4a2f17; color: #f2dfa7; border-bottom: 3px double #d9b45a; cursor: move; user-select: none; touch-action: none; }
    h2 { flex: 1; margin: 0; font: bold 20px Georgia, 'Times New Roman', serif; letter-spacing: .5px; }
    header button { border: 1px solid #d9b45a; background: transparent; color: #f2dfa7; border-radius: 3px; padding: 2px 8px; cursor: pointer; }
    header button[aria-pressed="true"] { background: #d9b45a; color: #4a2f17; }
    #close, #min { font-size: 18px; line-height: 1; }
    .body { padding: 10px 12px 12px; }
    .card { background: #fbf4e4; border: 1px solid #d6c298; border-radius: 4px; padding: 8px 10px; margin-bottom: 10px; }
    .row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
    .grow { flex: 1; }
    .bar { position: sticky; top: 46px; z-index: 1; }
    .btn { border: 1px solid #7a4e2d; background: #f2dfa7; color: #4a2f17; border-radius: 4px; padding: 4px 10px; cursor: pointer; font-weight: bold; }
    .btn:disabled { opacity: .6; cursor: default; }
    .link { border: 0; background: transparent; color: #7a4e2d; text-decoration: underline; cursor: pointer; padding: 0; }
    .link:disabled { opacity: .5; cursor: default; }
    .muted { color: #7a4e2d; font-size: 12px; }
    .warn { background: #f8d6da; border-color: #c97b84; }
    .error { color: #9c3d1e; font-weight: bold; }
    h4 { margin: 12px 0 4px; font-size: 13px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; }
    th { background: #4a2f17; color: #f2dfa7; padding: 5px 6px; text-align: left; white-space: nowrap; }
    th:nth-child(1) { width: 26px; } th:nth-child(3) { width: 60px; } th:nth-child(4) { width: 80px; }
    th:nth-child(5) { width: 90px; } th:nth-child(6) { width: 160px; }
    td { padding: 4px 6px; border-bottom: 1px solid #e8dcc0; vertical-align: middle; }
    td:nth-child(2) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    td.n, th.n { text-align: right; white-space: nowrap; }
    tr.off td { color: #a08a6a; }
    .lvl { font-size: 11px; color: #8a7558; }
    .slots { display: flex; flex-wrap: wrap; gap: 4px; margin: 6px 0 8px; }
    .slots button { border: 1px solid #7a4e2d; border-radius: 12px; padding: 3px 10px; cursor: pointer; background: #e8dcc0; color: #4a2f17; font-weight: bold; }
    .slots button[aria-selected="true"] { background: #4a2f17; color: #f2dfa7; }
    .slots .cnt { font-weight: normal; opacity: .8; }
    [hidden] { display: none !important; }
  `;

  // Ikona v rade posilňovačov.
  const host = document.createElement('div');
  const ui = host.attachShadow({ mode: 'open' });
  ui.innerHTML = `<style>${STYLE}</style><button id="open" type="button" aria-expanded="false">$</button>`;
  const openButton = ui.getElementById('open');

  // Okno medzi hernými oknami.
  const panelHost = document.createElement('div');
  panelHost.id = 'twsell-panel';
  panelHost.setAttribute('data-panel', '');
  const pui = panelHost.attachShadow({ mode: 'open' });
  pui.innerHTML = `<style>${STYLE}</style>
    <section id="panel" role="dialog" hidden>
      <header><h2 id="title"></h2>
        <button type="button" data-lang="sk">SK</button><button type="button" data-lang="cz">CZ</button>
        <button id="min" type="button">–</button><button id="close" type="button">×</button></header>
      <div class="body" id="sell"></div>
    </section>`;
  const $ = id => pui.getElementById(id);
  const panel = $('panel');

  let selling = null;
  let message = { text: '', error: false };
  const unchecked = new Set();

  let slotTab = GM_getValue(P + 'slot', 'all');
  const inTab = x => slotTab === 'all' || x.type === slotTab;

  function render() {
    if (panel.hidden) return;
    $('title').textContent = t('title');
    $('close').title = t('close');
    $('min').title = t(panel.classList.contains('min') ? 'restore' : 'minimize');
    for (const b of pui.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    openButton.title = t('icon');
    const box = $('sell');
    const data = sellData();
    if (data.error) { box.innerHTML = `<div class="card warn">${t(data.error)}</div>`; return; }
    if (slotTab !== 'all' && !SLOTS.includes(slotTab)) slotTab = 'all';
    const shown = data.items.filter(inTab);
    const chosen = shown.filter(x => !unchecked.has(x.id));
    const chosenSum = chosen.reduce((a, x) => a + x.sum, 0);
    const allSum = data.items.reduce((a, x) => a + x.sum, 0);
    const busy = !!selling;
    const msg = selling ? t('selling')(selling.done + 1, selling.total) : message.text;
    const count = slot => data.items.filter(x => slot === 'all' || x.type === slot).length;
    const tabs = ['all', ...SLOTS].filter(slot => slot === 'all' || slot === slotTab || count(slot) > 0).map(slot => `<button type="button" role="tab" data-slot="${slot}" aria-selected="${slot === slotTab}">
        ${slot === 'all' ? t('all') : t('slots')[slot]} <span class="cnt">${fmt(count(slot))}</span></button>`).join('');
    const rows = list => list.map(x => `<tr class="${unchecked.has(x.id) ? 'off' : ''}">
          <td><input type="checkbox" data-pick="${x.id}" ${unchecked.has(x.id) ? '' : 'checked'} ${busy ? 'disabled' : ''}></td>
          <td title="${escapeHtml(x.name)}">${escapeHtml(x.name)}${x.level ? ` <span class="lvl">(${t('level')} ${x.level})</span>` : ''}</td>
          <td class="n">${fmt(x.count)}</td><td class="n">${money(x.price)}</td><td class="n"><b>${money(x.sum)}</b></td>
          <td><button class="link" type="button" data-sellone="${x.id}" ${busy ? 'disabled' : ''}>${t('sellOne')}</button>
            <button class="link" type="button" data-keep="${x.id}" ${busy ? 'disabled' : ''}>${t('keep')}</button></td></tr>`).join('');
    const head = `<thead><tr><th></th><th>${t('item')}</th><th class="n">${t('qty')}</th><th class="n">${t('piece')}</th><th class="n">${t('sum')}</th><th></th></tr></thead>`;
    const body = slotTab === 'all'
      ? SLOTS.map(slot => { const l = shown.filter(x => x.type === slot); return l.length ? `<h4>${t('slots')[slot]}</h4><table>${head}<tbody>${rows(l)}</tbody></table>` : ''; }).join('')
      : (shown.length ? `<table>${head}<tbody>${rows(shown)}</tbody></table>` : '');
    const bestLabel = { hp: t('bestHp'), ride: t('bestRide'), speed: t('bestSpeed') };
    const bestHere = data.bestKept.filter(inTab);
    const keptText = Object.entries(data.kept).map(([k, n]) => `${t('why')[k] || k} ${fmt(n)}`).join(' · ');
    box.innerHTML = `
      <p class="muted">${t('intro')}</p>
      <nav class="slots" role="tablist">${tabs}</nav>
      <div class="card row bar">
        <span class="grow">${t('total')}: <b>${fmt(shown.length)}</b> · ${t('selected')}: <b>${fmt(chosen.length)}</b> = <b>${money(chosenSum)}</b>
          ${slotTab === 'all' ? '' : `<span class="muted">(${t('all').toLowerCase()}: ${fmt(data.items.length)} = ${money(allSum)})</span>`}</span>
        ${busy ? `<button class="btn" type="button" data-stop>${t('stop')}</button>`
          : `<button class="btn" type="button" data-sellall ${chosen.length ? '' : 'disabled'}>${t('sellAll')}</button>`}
      </div>
      ${msg ? `<div class="${message.error && !selling ? 'error' : 'muted'}" aria-live="polite">${escapeHtml(msg)}</div>` : ''}
      ${shown.length ? body : `<p class="muted">${t('none')}</p>`}
      ${bestHere.length ? `<p class="muted">${t('best')}: ${bestHere.map(b => `${escapeHtml(b.name)} <i>(${bestLabel[b.why]})</i>`).join(' · ')}</p>` : ''}
      <p class="muted">${t('kept')}: ${keptText || '–'}</p>
      <p class="muted">${data.equipSets ? t('equipKnown')(data.equipSets) : t('equipHint')}</p>
      ${data.keep.size ? `<button class="link" type="button" data-keepreset ${busy ? 'disabled' : ''}>${t('resetKeep')} (${fmt(data.keep.size)})</button>` : ''}`;
  }

  // ---------- Predaj: jedna položka = jedna požiadavka, rovnaká ako u obchodníka v hre ----------
  function sellItem(x) {
    return new Promise((resolve, reject) => {
      const Ajax = game.Ajax;
      const bag = game.Bag;
      if (!Ajax?.remoteCall || !bag) { reject(new Error('no game')); return; }
      const cur = bag.items_by_id?.[x.id];
      if (!cur || !(Number(cur.count) > 0)) { resolve(0); return; }
      const count = Number(cur.count);
      const timer = setTimeout(() => reject(new Error('timeout')), 15000);
      Ajax.remoteCall('item_trader', 'sell', {
        inv_id: cur.inv_id, town_id: game.Character.playerId, item_id: x.id, count,
        last_inv_id: typeof bag.getLastInvId === 'function' ? bag.getLastInvId() : undefined
      }, json => {
        clearTimeout(timer);
        if (!json || json.error) { reject(new Error(typeof json?.error === 'string' ? json.error : (json?.msg || 'error'))); return; }
        try {
          if (json.money !== undefined) game.Character.setMoney?.(json.money);
          if (json.changes) bag.updateChanges?.(json.changes);
        } catch { /* hra si batoh obnoví sama */ }
        resolve(Number(cur.obj?.sell_price || 0) * count);
      });
    });
  }

  async function sellList(list) {
    if (selling || !list.length) return;
    selling = { total: list.length, done: 0, sum: 0, stop: false };
    message = { text: '', error: false };
    render();
    try {
      for (const x of list) {
        if (selling.stop) break;
        selling.sum += await sellItem(x);
        selling.done++;
        render();
        if (selling.done < selling.total && !selling.stop) await new Promise(r => setTimeout(r, SELL_GAP_MS));
      }
      message = { text: t('sold')(selling.done, money(selling.sum)), error: false };
    } catch (e) {
      message = { text: `${t('sold')(selling.done, money(selling.sum))} ${t('fail')} ${e.message}`, error: true };
    } finally {
      selling = null;
      render();
    }
  }

  $('sell').addEventListener('click', event => {
    const el = event.target.closest('button');
    if (!el || el.disabled) return;
    const data = sellData();
    if (data.error) return;
    if (el.dataset.slot) { slotTab = el.dataset.slot; GM_setValue(P + 'slot', slotTab); render(); return; }
    if (el.dataset.stop !== undefined) { if (selling) selling.stop = true; return; }
    if (el.dataset.keepreset !== undefined) { GM_setValue(keepKey(data.ch), []); render(); return; }
    if (el.dataset.keep) {
      const keep = new Set(GM_getValue(keepKey(data.ch), []));
      keep.add(Number(el.dataset.keep));
      GM_setValue(keepKey(data.ch), [...keep]);
      render();
      return;
    }
    if (el.dataset.sellone) {
      const x = data.items.find(i => i.id === Number(el.dataset.sellone));
      if (x && window.confirm(t('confirmOne')(x.name, fmt(x.count), money(x.sum)))) sellList([x]);
      return;
    }
    if (el.dataset.sellall !== undefined) {
      const list = data.items.filter(x => inTab(x) && !unchecked.has(x.id));
      const sum = list.reduce((a, x) => a + x.sum, 0);
      if (list.length && window.confirm(t('confirmAll')(fmt(list.length), money(sum)))) sellList(list);
    }
  });
  $('sell').addEventListener('change', event => {
    const box = event.target.closest('[data-pick]');
    if (!box) return;
    const id = Number(box.dataset.pick);
    if (box.checked) unchecked.delete(id); else unchecked.add(id);
    render();
  });
  for (const b of pui.querySelectorAll('[data-lang]')) {
    b.addEventListener('click', () => { lang = b.dataset.lang; GM_setValue(P + 'lang', lang); render(); });
  }

  // ---------- Okno: stála veľkosť, presun, zbalenie, medzi horným a dolným panelom, navrch po kliknutí ----------
  const GAP = 8;
  const MAX_W = 780;
  const MAX_H = 640;
  const viewport = () => ({ w: document.documentElement.clientWidth || window.innerWidth, h: document.documentElement.clientHeight || window.innerHeight });
  function hudRect(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 ? r : null;
  }
  const lowest = (ids, fb) => ids.map(hudRect).filter(Boolean).reduce((a, r) => Math.max(a, r.bottom), fb);
  const highest = (ids, fb) => ids.map(hudRect).filter(Boolean).reduce((a, r) => Math.min(a, r.top), fb);
  function band() {
    const { w, h } = viewport();
    return { left: GAP, right: w - GAP, top: Math.min(h - 60, lowest(['ui_topbar', 'buffbars'], 0) + GAP),
      bottom: Math.max(60, highest(['ui_bottombar'], h) - GAP) };
  }
  let size = { w: MAX_W, h: 500 };
  const minimized = () => panel.classList.contains('min');
  const clamp = (left, top) => {
    const b = band();
    const ph = minimized() ? panel.offsetHeight : size.h;
    return { left: Math.round(Math.min(Math.max(b.left, left), Math.max(b.left, b.right - size.w))),
      top: Math.round(Math.min(Math.max(b.top, top), Math.max(b.top, b.bottom - ph))) };
  };
  function place() {
    if (panel.hidden) return;
    const b = band();
    size = { w: Math.round(Math.max(300, Math.min(MAX_W, b.right - b.left))), h: Math.round(Math.max(120, Math.min(MAX_H, b.bottom - b.top))) };
    panel.style.width = `${size.w}px`;
    panel.style.height = minimized() ? '' : `${size.h}px`;
    panel.style.maxHeight = `${Math.max(120, b.bottom - b.top)}px`;
    const saved = GM_getValue(P + 'pos', null);
    const want = saved || { left: (b.left + b.right - size.w) / 2, top: b.top };
    const { left, top } = clamp(want.left, want.top);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  }
  function setMinimized(on) {
    panel.classList.toggle('min', on);
    GM_setValue(P + 'min', on);
    $('min').textContent = on ? '□' : '–';
    $('min').setAttribute('aria-pressed', String(on));
    place();
    render();
  }
  function mountPanel() {
    const target = document.getElementById('windows') || document.body;
    if (panelHost.parentElement !== target) target.appendChild(panelHost);
  }
  function raise() {
    const parent = panelHost.parentElement;
    if (!parent) return;
    if (parent === document.body) { panelHost.style.zIndex = '2147483000'; return; }
    const others = [...parent.children].filter(c => c !== panelHost).map(c => parseInt(getComputedStyle(c).zIndex, 10) || 0);
    const top = Math.max(0, ...others);
    if ((parseInt(panelHost.style.zIndex, 10) || 0) > top) return;
    const wm = game.wman;
    const z = Math.max(top, Number(wm?.lastIndex) || 0) + 1;
    panelHost.style.zIndex = String(z);
    if (wm && typeof wm.lastIndex === 'number') wm.lastIndex = z;
  }
  panel.addEventListener('pointerdown', raise, true);
  document.addEventListener('mousedown', event => {
    const win = event.target?.closest?.('.tw2gui_window');
    if (!win || panel.hidden || win.parentElement !== panelHost.parentElement) return;
    setTimeout(() => {
      const zw = parseInt(getComputedStyle(win).zIndex, 10) || 0;
      if ((parseInt(panelHost.style.zIndex, 10) || 0) >= zw) panelHost.style.zIndex = String(Math.max(1, zw - 1));
    }, 0);
  }, true);

  let drag = null;
  const header = pui.querySelector('header');
  header.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button')) return;
    const r = panel.getBoundingClientRect();
    drag = { dx: event.clientX - r.left, dy: event.clientY - r.top, id: event.pointerId };
    header.setPointerCapture(event.pointerId);
    panel.classList.add('dragging');
    event.preventDefault();
  });
  header.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const { left, top } = clamp(event.clientX - drag.dx, event.clientY - drag.dy);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  });
  const endDrag = event => {
    if (!drag || event.pointerId !== drag.id) return;
    drag = null;
    panel.classList.remove('dragging');
    GM_setValue(P + 'pos', { left: parseFloat(panel.style.left), top: parseFloat(panel.style.top) });
  };
  header.addEventListener('pointerup', endDrag);
  header.addEventListener('pointercancel', endDrag);
  header.addEventListener('dblclick', event => {
    if (event.target.closest('button')) return;
    GM_deleteValue(P + 'pos');
    place();
  });
  let timers = [];
  window.addEventListener('resize', () => {
    place();
    timers.forEach(clearTimeout);
    timers = [250, 1000].map(ms => setTimeout(place, ms));
  });

  function toggle(show = panel.hidden) {
    if (show) mountPanel();
    panel.hidden = !show;
    openButton.setAttribute('aria-expanded', String(show));
    if (show) {
      raise();
      setMinimized(!!GM_getValue(P + 'min', false));
    }
  }
  openButton.addEventListener('click', () => toggle());
  $('close').addEventListener('click', () => toggle(false));
  $('min').addEventListener('click', () => setMinimized(!minimized()));
  for (const root of [ui, pui]) {
    root.addEventListener('keydown', event => { if (event.key === 'Escape') toggle(false); event.stopPropagation(); });
    root.addEventListener('keyup', event => event.stopPropagation());
    root.addEventListener('keypress', event => event.stopPropagation());
  }
  // Keď sa batoh zmení v hre (predaj, nákup, práca), zoznam sa prepočíta – bez požiadavky.
  let bagSig = '';
  setInterval(() => {
    if (panel.hidden || selling || drag) return;
    const items = game.Bag?.items_by_id;
    const sig = items ? Object.values(items).map(i => `${i?.obj?.item_id}:${i?.count}`).join(',') : '';
    if (sig !== bagSig) { bagSig = sig; render(); }
  }, 3000);

  // Ikona ostáva v rade posilňovačov a prémia.
  function mount() {
    const row = document.getElementById('buffbars');
    if (!row) return false;
    host.setAttribute('data-hud', '');
    row.prepend(host);
    return true;
  }
  mountPanel();
  if (!mount()) {
    document.body.appendChild(host);
    const wait = new MutationObserver(() => { if (mount()) wait.disconnect(); });
    wait.observe(document.body, { childList: true, subtree: true });
  }
})();
