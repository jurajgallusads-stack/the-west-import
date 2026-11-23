// ==UserScript==
// @name         lenk
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.0.0
// @description  Keď otvoríš obchodníka, nad hlavou mu vyskočí komiksová bublina pre Lenka.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        none
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-lenk.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-lenk.user.js
// ==/UserScript==

(() => {
  'use strict';
  // Skript iba kreslí bublinu v prehliadači. Neposiela žiadnu požiadavku na herný server.

  const TEXT = ['KOKOT LENK.', 'DNES SI SI ZAPOMNEL DATLEKY'];

  // Okná obchodníkov: podľa triedy/id okna alebo podľa titulku (SK aj CZ).
  const SHOP_CLASS = /trader|shop|itemtrader|building_(general|tailor|gunsmith)/i;
  const SHOP_TITLE = /obchod|krej[čc]|kraj[čc]|pu[šs]k|zbroj/i;

  const style = document.createElement('style');
  style.textContent = `
    .lenk-bubble {
      position: absolute; z-index: 100000; pointer-events: none;
      max-width: 230px; padding: 10px 14px; box-sizing: border-box;
      background: #fff; color: #111; border: 3px solid #111; border-radius: 22px;
      font: 900 15px/1.25 "Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive;
      text-align: center; text-transform: uppercase; letter-spacing: .5px;
      box-shadow: 4px 4px 0 rgba(0,0,0,.35);
      transform-origin: 30% 100%; animation: lenk-pop .35s cubic-bezier(.2,1.6,.4,1) both;
    }
    .lenk-bubble::after, .lenk-bubble::before {
      content: ""; position: absolute; left: 34px; border-style: solid;
    }
    .lenk-bubble::before { bottom: -22px; border-width: 22px 14px 0 0; border-color: #111 transparent transparent transparent; }
    .lenk-bubble::after { bottom: -15px; left: 37px; border-width: 16px 9px 0 0; border-color: #fff transparent transparent transparent; }
    @keyframes lenk-pop { from { transform: scale(.2); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `;
  document.head.appendChild(style);

  const isShopWindow = win => {
    const tag = `${win.className} ${win.id}`;
    if (SHOP_CLASS.test(tag)) return true;
    const title = win.querySelector('.tw2gui_window_title, .window_title, .tw2gui_inner_window_title')?.textContent || '';
    return SHOP_TITLE.test(title);
  };

  // Portrét obchodníka: najväčší obrázok (img alebo pozadie) v ľavej časti okna.
  function findKeeper(win) {
    const w = win.getBoundingClientRect();
    let best = null;
    let bestArea = 0;
    for (const el of win.querySelectorAll('img, div, span')) {
      const isImg = el.tagName === 'IMG';
      const bg = isImg ? '' : getComputedStyle(el).backgroundImage;
      if (!isImg && (!bg || bg === 'none')) continue;
      const src = isImg ? el.src : bg;
      if (/window|tw2gui|button|scroll|frame|border|item|icon|bg_/i.test(src) && !/trader|shop|keeper|npc|person|char/i.test(src)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 70 || r.height < 90) continue;
      if (r.left + r.width / 2 > w.left + w.width * 0.55) continue;
      const area = r.width * r.height;
      if (area > bestArea) { best = r; bestArea = area; }
    }
    return best;
  }

  function placeBubble(win) {
    let bubble = win.querySelector(':scope > .lenk-bubble');
    if (!bubble) {
      bubble = document.createElement('div');
      bubble.className = 'lenk-bubble';
      bubble.innerHTML = TEXT.map(line => `<div>${line}</div>`).join('');
      win.appendChild(bubble);
    }
    const w = win.getBoundingClientRect();
    const keeper = findKeeper(win);
    const height = bubble.offsetHeight;
    // Hlava je zhruba v hornej pätine portrétu; chvost bubliny mieri na ňu.
    const headX = keeper ? keeper.left + keeper.width * 0.5 : w.left + 90;
    const headY = keeper ? keeper.top + keeper.height * 0.12 : w.top + 70;
    bubble.style.left = `${Math.round(headX - w.left - 20)}px`;
    bubble.style.top = `${Math.round(headY - w.top - height - 24)}px`;
  }

  let queued = false;
  function scan() {
    queued = false;
    for (const win of document.querySelectorAll('.tw2gui_window')) {
      if (!win.offsetParent) continue;
      if (win.querySelector(':scope > .lenk-bubble') || !isShopWindow(win)) continue;
      placeBubble(win);
      // Portrét sa môže načítať o chvíľu neskôr; bublinu potom ešte doladí.
      setTimeout(() => win.isConnected && placeBubble(win), 400);
      setTimeout(() => win.isConnected && placeBubble(win), 1200);
    }
  }
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(scan);
  };

  new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.target.closest?.('.lenk-bubble')) continue;
      if ([...m.addedNodes].some(n => n.nodeType === 1 && !n.classList.contains('lenk-bubble'))) { queue(); return; }
    }
  }).observe(document.body, { childList: true, subtree: true });
  window.addEventListener('resize', queue);
  queue();
})();
