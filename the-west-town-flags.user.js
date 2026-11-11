// ==UserScript==
// @name         The West – vlajky v mestách
// @namespace    the-west-town-flags
// @version      1.0.0
// @description  Pridá červené vlajky s kosákom a kladivom do náhľadov miest.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/refs/heads/main/the-west-town-flags.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/refs/heads/main/the-west-town-flags.user.js
// ==/UserScript==

(() => {
  'use strict';

  const sceneSelector = '[id^="townwindow-overview_"] .tow_town_background';
  const buildingSelector = 'img.tow_building_image';
  const roofAnchors = {
    cityhall: [0.49, 0.20],
    tailor: [0.43, 0.25],
    gunsmith: [0.43, 0.29],
    bank: [0.38, 0.21],
    hotel: [0.54, 0.23],
  };
  // Positions in the town artwork, relative to its 645 × 375 backdrop.
  const streetAnchors = [[251, 220], [497, 173], [309, 330]];
  const pending = new Set();
  let frame = 0;

  GM_addStyle(`
    .tw-town-flags {
      position: absolute;
      inset: 0;
      overflow: hidden;
      z-index: 4;
      pointer-events: none;
    }
    .tw-town-flag {
      position: absolute;
      width: 2px;
      height: var(--pole-height, 23px);
      background: linear-gradient(90deg, #b18e62, #473124);
      transform: translateY(-100%);
      box-shadow: 1px 1px 1px #21130966;
    }
    .tw-town-flag--street { --pole-height: 33px; }
    .tw-town-flag-cloth {
      position: absolute;
      top: 2px;
      left: 1px;
      width: 25px;
      height: 15px;
      box-sizing: border-box;
      padding-left: 3px;
      color: #ffe07d;
      background: linear-gradient(105deg, #8e1515, #bf2423 47%, #8d1119 80%, #a72121);
      clip-path: polygon(0 0, 45% 11%, 100% 3%, 100% 92%, 49% 100%, 0 89%);
      font: 12px/15px "Segoe UI Symbol", "Apple Symbols", "DejaVu Sans", sans-serif;
      text-shadow: 0 1px #681414;
    }
    .tw-town-flag--street .tw-town-flag-cloth { width: 30px; }
  `);

  function makeFlag(x, y, street = false) {
    const pole = document.createElement('span');
    pole.className = street ? 'tw-town-flag tw-town-flag--street' : 'tw-town-flag';
    pole.style.left = `${x * 100}%`;
    pole.style.top = `${y * 100}%`;
    const cloth = document.createElement('span');
    cloth.className = 'tw-town-flag-cloth';
    cloth.textContent = '\u262D\uFE0E';
    pole.append(cloth);
    return pole;
  }

  function render(scene) {
    if (!scene.isConnected) return;
    const bounds = scene.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    let layer = scene.querySelector(':scope > .tw-town-flags');
    if (!layer) {
      layer = document.createElement('div');
      layer.className = 'tw-town-flags';
      layer.setAttribute('aria-hidden', 'true');
      scene.append(layer);
    }

    const flags = streetAnchors.map(([x, y]) => makeFlag(x / 645, y / 375, true));
    for (const image of scene.querySelectorAll(buildingSelector)) {
      const name = image.getAttribute('src')?.match(/(?:^|\/)([a-z]+)\d+\.png(?:[?#]|$)/i)?.[1]?.toLowerCase();
      const anchor = roofAnchors[name];
      if (!anchor) continue;
      const building = image.getBoundingClientRect();
      if (!building.width || !building.height) continue;
      const x = (building.left - bounds.left + building.width * anchor[0]) / bounds.width;
      const y = (building.top - bounds.top + building.height * anchor[1]) / bounds.height;
      flags.push(makeFlag(x, y));
    }
    layer.replaceChildren(...flags);
  }

  function schedule(scene) {
    if (!scene) return;
    pending.add(scene);
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      for (const item of pending) render(item);
      pending.clear();
    });
  }

  const resize = new ResizeObserver(entries => {
    for (const { target } of entries) {
      if (target.isConnected) schedule(target);
      else resize.unobserve(target);
    }
  });

  function findScenes(node, callback) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches(sceneSelector)) callback(node);
    node.querySelectorAll(sceneSelector).forEach(callback);
  }

  function observeScene(scene) {
    resize.observe(scene);
    schedule(scene);
  }

  document.querySelectorAll(sceneSelector).forEach(observeScene);
  document.addEventListener('load', event => {
    if (event.target.matches?.(buildingSelector)) schedule(event.target.closest(sceneSelector));
  }, true);

  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') {
        if (record.target.matches(buildingSelector)) schedule(record.target.closest(sceneSelector));
        continue;
      }

      const scene = record.target.closest?.(sceneSelector);
      if (scene) {
        const changed = [...record.addedNodes, ...record.removedNodes];
        if (changed.some(node => node.matches?.(buildingSelector) || node.querySelector?.(buildingSelector))) {
          schedule(scene);
        }
        continue;
      }
      for (const node of record.removedNodes) findScenes(node, scene => resize.unobserve(scene));
      for (const node of record.addedNodes) findScenes(node, observeScene);
    }
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
})();
