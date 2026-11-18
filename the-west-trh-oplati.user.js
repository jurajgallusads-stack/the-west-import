// ==UserScript==
// @name         The West – oplatí sa kúpiť? (energia a motivácia na trhu)
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.1.0
// @description  Na trhu pri predmetoch s energiou alebo pracovnou motiváciou ukáže, koľko za ne zarobíš na 15-sekundových prácach a či sa oplatí cena. Neposiela žiadne požiadavky na herný server.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-trh-oplati.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-trh-oplati.user.js
// ==/UserScript==

(() => {
  'use strict';

  const game = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  const world = location.hostname.split('.')[0];
  const MARK = '__twOplati';
  const STALE_MS = 3 * 3600000;
  // Vzorové predmety: z ich prvého bonusu sa zistí presný text bonusu v jazyku sveta (rovnako to robí TWIR).
  const REF = { energy: 1890000, motivation: 13701000 };

  // ---------- Pomocné ----------
  const fmt = n => Math.round(n).toLocaleString('sk-SK').replace(/\s/g, ' ');
  const money = n => `${fmt(n)} $`;
  const signed = n => (n >= 0 ? '+' : '−') + money(Math.abs(n));
  const toPercent = m => Math.max(0, Math.min(100, Math.round(Number(m) * 100)));
  // Odmena podľa motivácie ide po 25 % schodoch: 76–100 % platí plnú odmenu, 51–75 % tri štvrtiny atď.
  const factor = p => (p <= 0 ? 0 : Math.min(1, Math.ceil(p / 25) / 4));
  const warn = (...args) => console.warn('[TW oplatí sa]', ...args);
  // Firefox: funkcie zo sandboxu treba hre sprístupniť cez exportFunction.
  const expose = fn => (typeof exportFunction === 'function' ? exportFunction(fn, game) : fn);

  function charKey() {
    const c = game.Character;
    const id = c?.playerId ?? c?.name;
    return id == null ? null : `${world}:${id}`;
  }
  const storeKey = () => `jobs:${charKey()}`;

  function jobName(id) {
    try { return game.JobList?.getJobById?.(id)?.name || `práca ${id}`; } catch { return `práca ${id}`; }
  }

  // ---------- Zárobky z prác (iba z údajov, ktoré si hra načíta sama) ----------
  function shortDuration(durations) {
    if (!Array.isArray(durations) || !durations.length) return null;
    return durations.find(d => Number(d?.duration) === 15)
      || durations.find(d => Number(d?.cost) === 1)
      || durations[0];
  }

  function doable(points, malus) {
    const p = Number(points);
    const m = Number(malus);
    return !(Number.isFinite(p) && Number.isFinite(m) && p < m + 1);
  }

  // Odpoveď work/index: { jobs: { id: { motivation, jobSkillPoints, durations: [{ duration, cost, money, featured_money }] } } }
  function fromRaw(rawJobs) {
    const out = [];
    for (const [key, job] of Object.entries(rawJobs || {})) {
      const id = Number(key);
      const d = shortDuration(job?.durations);
      if (!d) continue;
      const pay = (Number(d.money) || 0) + (Number(d.featured_money) || 0);
      const p = toPercent(job.motivation);
      let malus;
      try { malus = game.JobList?.getJobById?.(id)?.malus; } catch { /* bez malusu */ }
      if (!doable(job.jobSkillPoints, malus) || !(pay > 0) || !factor(p)) continue;
      out.push({ id, full: pay / factor(p), p });
    }
    return out;
  }

  // Modely prác v hre (JobsModel.Jobs), ak už boli načítané.
  function fromModels(models) {
    const out = [];
    for (const m of Array.isArray(models) ? models : []) {
      const id = Number(m?.id ?? m?.jobObj?.id);
      const pay = Number(m?.basis?.short?.money);
      const p = toPercent(m?.jobmotivation);
      if (!id || !(pay > 0) || !factor(p) || !doable(m?.jobpoints, m?.jobObj?.malus)) continue;
      out.push({ id, full: pay / factor(p), p });
    }
    return out;
  }

  function capture(rawJobs) {
    if (!charKey()) return;
    const jobs = fromRaw(rawJobs);
    if (jobs.length) {
      GM_setValue(storeKey(), { ts: Date.now(), jobs });
      cache.clear();
      if (typeof refreshMarket === 'function') refreshMarket();
    }
  }

  function getJobs() {
    const stored = charKey() ? GM_getValue(storeKey(), null) : null;
    if (stored?.jobs?.length) return stored;
    const live = fromModels(game.JobsModel?.Jobs);
    return live.length ? { ts: null, jobs: live } : null;
  }

  // Zachytenie: keď hra (alebo iný skript) načíta zoznam prác, uložíme si zárobky. Žiadna vlastná požiadavka.
  function wrapAjax(name) {
    const A = game.Ajax;
    const original = A?.[name];
    if (typeof original !== 'function' || original[MARK]) return;
    const wrapped = function (win, mode, params, callback, ...rest) {
      if (win === 'work' && mode === 'index' && typeof callback === 'function') {
        const inner = callback;
        callback = expose(function (json, ...args) {
          try { if (json && !json.error && json.jobs) capture(json.jobs); } catch (e) { warn(e); }
          return inner.call(this, json, ...args);
        });
      }
      return original.call(this, win, mode, params, callback, ...rest);
    };
    const exposed = expose(wrapped);
    exposed[MARK] = true;
    A[name] = exposed;
  }

  function hookJobs() {
    const JM = game.JobsModel;
    if (typeof JM?.initJobs === 'function' && !JM.initJobs[MARK]) {
      const original = JM.initJobs;
      const wrapped = function (jobs, ...rest) {
        const result = original.call(this, jobs, ...rest);
        try { capture(jobs); } catch (e) { warn(e); }
        return result;
      };
      const exposed = expose(wrapped);
      exposed[MARK] = true;
      JM.initJobs = exposed;
    }
    ['remoteCallMode', 'remoteCall', 'get'].forEach(wrapAjax);
    return !!(game.Ajax?.remoteCallMode || JM?.initJobs);
  }

  // ---------- Bonusy predmetu ----------
  const strip = s => String(s || '').toLowerCase().replace(/<[^>]*>/g, '').replace(/[\d\s%+\-.,:()]/g, '');
  let refKeys = null;
  function keys() {
    if (refKeys) return refKeys;
    const found = {};
    for (const [type, id] of Object.entries(REF)) {
      try {
        const bonus = game.ItemManager?.get?.(id)?.usebonus?.[0];
        if (bonus) found[type] = strip(bonus);
      } catch { /* vzor nie je k dispozícii */ }
    }
    if (found.energy && found.motivation) refKeys = found;
    return found;
  }

  function bonuses(item) {
    const out = { energy: 0, motivation: 0 };
    const k = keys();
    for (const bonus of Array.isArray(item?.usebonus) ? item.usebonus : []) {
      const s = strip(bonus);
      const m = String(bonus).match(/(\d+(?:[.,]\d+)?)\s*%/);
      const value = m ? Number(m[1].replace(',', '.')) : 0;
      let type = null;
      if (k.energy ? s === k.energy : (/energi/.test(s) && !/regener/.test(s))) type = 'energy';
      else if (k.motivation ? s === k.motivation : /pracovn.*motiv|workmotiv|arbeitsmotiv/.test(s)) type = 'motivation';
      if (type && value > 0) out[type] = Math.max(out[type], value);
    }
    return out;
  }

  // ---------- Výpočet ----------
  // Simulácia: každá 15 s práca stojí 1 energiu a zníži motiváciu tej práce o 1 %. Vždy sa vyberie práca,
  // ktorá práve platí najviac. Vráti súčet peňazí za n prác.
  function simulate(jobs, n, boost) {
    const state = jobs.map(j => ({ j, p: Math.min(100, j.p + boost) }));
    let total = 0;
    let first = null;
    for (let i = 0; i < n; i++) {
      let best = -1;
      let pay = 0;
      for (let k = 0; k < state.length; k++) {
        const v = state[k].j.full * factor(state[k].p);
        if (v > pay) { pay = v; best = k; }
      }
      if (best < 0) break;
      if (!first) first = { id: state[best].j.id, pay: Math.ceil(pay) };
      total += Math.ceil(pay);
      state[best].p -= 1;
    }
    return { total, first };
  }

  const cache = new Map();
  function worth(item, data) {
    const b = bonuses(item);
    if (!b.energy && !b.motivation) return null;
    const maxEnergy = Number(game.Character?.maxEnergy) || 100;
    const energy = b.energy ? Math.min(maxEnergy, Math.floor(b.energy / 100 * maxEnergy)) : 0;
    // Motivácia sa prejaví až na prácach, ktoré urobíš: počítame s jednou plnou energiou navyše.
    const horizon = b.motivation ? maxEnergy : 0;
    const key = `${data.ts}|${data.jobs.length}|${energy}|${horizon}|${b.motivation}`;
    if (!cache.has(key)) {
      const withItem = simulate(data.jobs, energy + horizon, b.motivation);
      const without = horizon ? simulate(data.jobs, horizon, 0) : { total: 0 };
      cache.set(key, { value: withItem.total - without.total, best: withItem.first });
    }
    return { ...cache.get(key), b, energy, horizon, maxEnergy };
  }

  function unitPrice(offer) {
    const count = Math.max(1, Number(offer?.item_count) || 1);
    const buyNow = Number(offer?.max_price);
    if (offer?.max_price != null && buyNow > 0) return { price: buyNow / count, kind: 'buy', count };
    const bid = Number(offer?.current_bid ?? offer?.curr_bid ?? offer?.auction_price);
    if (bid > 0) return { price: bid / count, kind: 'bid', count };
    return null;
  }

  function stamp(ts) {
    if (!ts) return 'z okna Práce v tejto relácii';
    const d = new Date(ts);
    const pad = n => String(n).padStart(2, '0');
    return `${d.getDate()}. ${d.getMonth() + 1}. ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function explain(item, w, price, data) {
    const lines = [item.name || 'Predmet'];
    if (w.b.energy) lines.push(`Energia +${w.b.energy} % = ${w.energy} energie (max. ${w.maxEnergy}) → ${w.energy} prác po 15 s`);
    if (w.b.motivation) {
      lines.push(`Pracovná motivácia +${w.b.motivation} % (všetky práce), počítané na jednu plnú energiu (${w.horizon}) navyše`);
    }
    if (w.best) lines.push(`Najlepšia práca teraz: ${jobName(w.best.id)} – ${money(w.best.pay)} za 15 s`);
    lines.push(`Zarobíš asi: ${money(w.value)}`);
    if (price) {
      lines.push(`Cena za kus: ${money(price.price)}${price.kind === 'bid' ? ' (aktuálna ponuka v aukcii)' : ''}${price.count > 1 ? ` (${price.count} ks v ponuke)` : ''}`);
      lines.push(`Rozdiel: ${signed(w.value - price.price)} → ${w.value >= price.price ? 'oplatí sa' : 'neoplatí sa'}`);
      lines.push(`Kúpiť sa oplatí najviac za ${money(w.value)} za kus.`);
    }
    if (w.b.motivation && !w.b.energy && w.value === 0) {
      lines.push('Motivácia ti teraz nič nepridá: tvoje najlepšie práce majú nad 75 %, a tam je odmena už plná.');
    }
    lines.push(`Údaje o prácach: ${stamp(data.ts)}${data.ts && Date.now() - data.ts > STALE_MS ? ' – staré, otvor okno Práce' : ''}`);
    lines.push('Ráta iba peniaze za 15 s práce (bez skúseností, produktov a strieborných prác).');
    return lines.join('\n');
  }

  // ---------- Trh ----------
  function installStyle() {
    if (document.getElementById('twop-style')) return;
    const style = document.createElement('style');
    style.id = 'twop-style';
    style.textContent = `
      .twop-badge { display:inline-block; margin:0 4px 0 0; padding:0 4px; border-radius:3px; font:bold 11px/16px Arial,sans-serif;
        color:#fff; cursor:help; white-space:nowrap; vertical-align:middle; }
      .twop-yes { background:#3a7d2c; } .twop-no { background:#a33b26; } .twop-unknown { background:#8a7a5a; }
    `;
    (document.head || document.documentElement).append(style);
  }

  function badge(cls, text, title) {
    const el = document.createElement('span');
    el.className = `twop-badge ${cls}`;
    el.textContent = text;
    el.title = title;
    return el;
  }

  // Riadky tabuľky „Kúpiť“: ikona | názov (title = meno predmetu) | počet | cena kúp hneď | aukcia | ...
  const norm = s => String(s || '').trim().toLowerCase();
  const digits = t => { const d = String(t || '').replace(/[^\d]/g, ''); return d ? Number(d) : 0; };
  const short = n => {
    const a = Math.abs(n);
    if (a < 1000) return fmt(a);
    return (a < 1e6 ? `${(a / 1000).toFixed(a < 10000 ? 1 : 0)}k` : `${(a / 1e6).toFixed(1)}M`).replace('.', ',');
  };

  let nameIndex = null;
  function itemByName(name) {
    if (!nameIndex) {
      let all = {};
      try { all = game.ItemManager?.getAll?.() || {}; } catch { all = {}; }
      const index = new Map();
      for (const item of Object.values(all)) {
        if (!item?.name || item.type === 'recipe' || !Array.isArray(item.usebonus)) continue;
        const b = bonuses(item);
        if ((b.energy || b.motivation) && !index.has(norm(item.name))) index.set(norm(item.name), item);
      }
      if (!index.size) return null;
      nameIndex = index;
    }
    return nameIndex.get(norm(name)) || null;
  }

  const stats = { panes: 0, rows: 0, matched: 0, lastError: '' };

  function rowInfo(row) {
    const cells = row.children;
    if (!cells || cells.length < 5) return null;
    const nameCell = cells[1];
    const first = nameCell.firstElementChild && !nameCell.firstElementChild.classList.contains('twop-badge')
      ? nameCell.firstElementChild : null;
    const name = (first?.getAttribute('title') || first?.textContent || nameCell.textContent || '').replace(/\s+/g, ' ').trim();
    const count = digits(cells[2].textContent) || 1;
    const buyNow = digits(cells[3].textContent);
    const bid = digits(cells[4].textContent);
    return { cells, nameCell, name, count, buyNow, bid };
  }

  function annotatePane(pane) {
    stats.panes++;
    installStyle();
    const data = getJobs();
    for (const row of pane.children) {
      const info = rowInfo(row);
      if (!info?.name) continue;
      stats.rows++;
      const item = itemByName(info.name);
      const old = row.querySelector('.twop-badge');
      if (!item) { old?.remove(); continue; }
      stats.matched++;
      const sig = `${info.name}|${info.count}|${info.buyNow}|${info.bid}|${data?.ts ?? 'x'}|${data?.jobs.length ?? 0}`;
      if (old && row.dataset.twop === sig) continue;
      old?.remove();
      row.dataset.twop = sig;

      let el;
      if (!data) {
        el = badge('twop-unknown', '?', `${item.name}\nNepoznám tvoje zárobky z prác. Otvor v hre okno Práce, skript si ho prečíta (nič neposiela).`);
      } else {
        const w = worth(item, data);
        const total = info.buyNow || info.bid;
        const price = total ? { price: total / info.count, kind: info.buyNow ? 'buy' : 'bid', count: info.count } : null;
        if (!price) {
          el = badge('twop-unknown', `≈${short(w.value)}`, explain(item, w, null, data));
        } else {
          const diff = w.value - price.price;
          el = badge(diff >= 0 ? 'twop-yes' : 'twop-no', `${diff >= 0 ? '✓ +' : '✗ −'}${short(diff)}`, explain(item, w, price, data));
        }
      }
      // Do prázdnej bunky aukcie, inak za názov.
      const target = !info.bid && info.cells[4] ? info.cells[4] : info.nameCell;
      target.appendChild(el);
    }
  }

  // ---------- Sledovanie trhu: MutationObserver, žiadne požiadavky ----------
  const PANE = 'tw2gui_scrollpane_clipper_contentpane';
  const queued = new Set();
  let frame = 0;
  function queue(pane) {
    queued.add(pane);
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      for (const p of queued) {
        if (!p.isConnected) continue;
        try { annotatePane(p); } catch (e) { stats.lastError = String(e?.message || e); warn(e); }
      }
      queued.clear();
    });
  }
  const buyPanes = () => document.querySelectorAll(`#market_buytable .${PANE}, .market-buy .${PANE}`);
  function refreshMarket() { buyPanes().forEach(queue); }

  function watchMarket() {
    new MutationObserver(mutations => {
      for (const m of mutations) {
        const t = m.target;
        if (t.nodeType !== 1) continue;
        if (t.classList.contains(PANE)) {
          if (t.closest('#market_buytable, .market-buy')) queue(t);
        } else if (m.addedNodes.length && t.closest?.('.marketplace, #market_buytable, .market-buy')) {
          t.querySelectorAll(`.${PANE}`).forEach(p => { if (p.closest('#market_buytable, .market-buy')) queue(p); });
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
    refreshMarket();
  }

  // ---------- Štart ----------
  let tries = 0;
  (function start() {
    if (hookJobs() || ++tries >= 60) return;
    setTimeout(start, 1000);
  })();
  watchMarket();

  // ---------- Menu Tampermonkey ----------
  GM_registerMenuCommand('Oplatí sa: ukázať zárobky z prác', () => {
    const data = getJobs();
    if (!data) {
      window.alert('Zárobky z prác ešte nepoznám. Otvor v hre okno Práce.');
      return;
    }
    const best = simulate(data.jobs, 1, 0).first;
    const maxEnergy = Number(game.Character?.maxEnergy) || 100;
    const full = simulate(data.jobs, maxEnergy, 0).total;
    window.alert([
      `Údaje o prácach: ${stamp(data.ts)} (${data.jobs.length} prác)`,
      best ? `Najlepšia 15 s práca: ${jobName(best.id)} – ${money(best.pay)}` : '',
      `Plná energia (${maxEnergy}) na 15 s prácach: asi ${money(full)}`,
      `1 energia v priemere: ${money(full / maxEnergy)}`
    ].filter(Boolean).join('\n'));
  });
  GM_registerMenuCommand('Oplatí sa: diagnostika', () => {
    const data = getJobs();
    window.alert([
      `Verzia: ${GM_info?.script?.version || '?'}`,
      `Zárobky z prác: ${data ? `${data.jobs.length} prác (${stamp(data.ts)})` : 'zatiaľ nič, otvor okno Práce'}`,
      `Zachytenie prác napojené: ${game.JobsModel?.initJobs?.[MARK] || game.Ajax?.remoteCallMode?.[MARK] ? 'áno' : 'nie'}`,
      `Predmety s energiou/motiváciou: ${(itemByName('\u0000'), nameIndex?.size ?? 0)}`,
      `Tabuľky trhu teraz: ${buyPanes().length}, spracované: ${stats.panes}, riadky: ${stats.rows}, rozpoznané: ${stats.matched}`,
      stats.lastError ? `Posledná chyba: ${stats.lastError}` : 'Bez chyby'
    ].join('\n'));
  });
  GM_registerMenuCommand('Oplatí sa: vymazať uložené zárobky', () => {
    if (charKey()) GM_deleteValue(storeKey());
    cache.clear();
  });

  // Na testy mimo hry.
  if (game.__twOplatiTest) game.__twOplatiTest({ simulate, factor, fromRaw, fromModels, bonuses, worth, unitPrice, annotatePane, refreshMarket, capture, getJobs, stats });
})();
