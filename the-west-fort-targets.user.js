// ==UserScript==
// @name         The West – ciele v bitke o pevnosť
// @namespace    the-west-fort-targets
// @version      0.1.0
// @description  Zvýrazní 12 odhadom výhodných súperov z údajov načítaných hrou.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-start
// @noframes
// @grant        unsafeWindow
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-fort-targets.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-fort-targets.user.js
// ==/UserScript==

(() => {
  'use strict';

  const game = unsafeWindow;
  const targetCount = 12;
  const priorityCount = 4;
  const marker = 'data-tw-fort-target';
  const battles = new WeakMap();
  const pending = new WeakSet();
  let reportedError = false;

  function number(value) {
    if (value == null || value === '' || typeof value === 'boolean') return null;
    const result = Number(value);
    return Number.isFinite(result) ? result : null;
  }

  function active(player) {
    return ![true, 1, '1'].includes(player.dead) && (number(player.health) ?? 1) > 0;
  }

  function sectorDefense(player, map) {
    const sector = map?.sectors?.[map.cells?.[player.position]];
    if (!sector) return 1;
    const defense = Math.max(0, number(sector.defendbonus) ?? 0);
    const towerClass = number(sector.classbonus);
    const towerBonus = towerClass !== null && towerClass >= 0 && towerClass === number(player.characterclass)
      ? Math.max(0, number(sector.attributebonus) ?? 0)
      : 0;
    return 1 + defense + towerBonus;
  }

  // Relative ranking, with unknown skills assumed equal. No hit percentages are inferred.
  function score(player, self, map) {
    const width = number(map?.width);
    const position = number(player.position);
    const origin = number(self.position);
    let distancePenalty = 1;
    if (width > 0 && position >= 0 && origin >= 0 && position !== null && origin !== null) {
      const dx = (position % width) - (origin % width);
      const dy = Math.floor(position / width) - Math.floor(origin / width);
      distancePenalty += (dx * dx + dy * dy) ** 0.6 / 100;
    }

    const defenseBonus = Math.max(0, number(player.bonusinfo?.defense) ?? 0);
    const resistance = Math.max(0, number(player.bonusinfo?.resistance) ?? 0);
    return 1 / (distancePenalty * sectorDefense(player, map) * (1 + defenseBonus / 100) * (1 + resistance / 100));
  }

  function selectTargets(players, self, map) {
    return new Map(players
      .filter(player => player.characterid != null && player.team != null
        && String(player.team) !== String(self.team) && active(player))
      .map(player => ({ player, score: score(player, self, map) }))
      .sort((a, b) => b.score - a.score
        || (number(a.player.health) ?? Infinity) - (number(b.player.health) ?? Infinity))
      .slice(0, targetCount)
      .map(({ player }, index) => [String(player.characterid), index < priorityCount ? 'priority' : 'tracked']));
  }

  function element(value) {
    const node = value?.nodeType === 1 ? value : value?.[0];
    return node?.nodeType === 1 ? node : null;
  }

  function clear(state) {
    for (const node of state.marked) node.removeAttribute(marker);
    state.marked.clear();
  }

  function update(battle) {
    const root = element(battle.window?.divMain);
    if (!root?.isConnected) return;

    let state = battles.get(root);
    const round = number(battle.roundnumber);
    if (!state || state.fort !== battle.fortId || (round === 0 && state.round > 0)) {
      if (state) clear(state);
      state = { fort: battle.fortId, round, targets: null, marked: new Set() };
      battles.set(root, state);
    }
    state.round = round;

    const playerId = game.Character?.playerId;
    const players = Object.values(battle.characters || {}).filter(Boolean);
    const self = playerId == null ? null : players.find(player => player.westPlayerId != null
      && String(player.westPlayerId) === String(playerId));
    if (battle.isSpectator || self?.team == null || !battle.charIcons) {
      clear(state);
      return;
    }

    if (!state.targets) {
      const targets = selectTargets(players, self, battle.mapInfo);
      if (targets.size === 0) return;
      state.targets = targets;
    }

    const marked = new Set();
    for (const player of players) {
      const id = String(player.characterid);
      const color = state.targets.get(id);
      if (!color || !active(player)) continue;
      const icon = element(battle.charIcons[id]);
      if (!icon || !root.contains(icon)) continue;
      if (icon.getAttribute(marker) !== color) icon.setAttribute(marker, color);
      marked.add(icon);
    }
    for (const node of state.marked) {
      if (!marked.has(node)) node.removeAttribute(marker);
    }
    state.marked = marked;
  }

  function afterRender(battle) {
    if (pending.has(battle)) return;
    pending.add(battle);
    requestAnimationFrame(() => {
      pending.delete(battle);
      try {
        update(battle);
      } catch (error) {
        if (!reportedError) console.warn('[The West – ciele v bitke]', error);
        reportedError = true;
      }
    });
  }

  function install() {
    const battleWindow = game.FortBattleWindow;
    const hooks = ['handlePlayerInfoSignal', 'handleRoundInfoSignal', 'renderChars'];
    if (!document.documentElement || !hooks.every(name => typeof battleWindow?.[name] === 'function')) {
      return false;
    }

    const style = document.createElement('style');
    style.textContent = `
      [${marker}] { outline: 2px solid var(--tw-fort-target-color) !important; outline-offset: 1px; }
      [${marker}="priority"] { --tw-fort-target-color: #62ff7b; }
      [${marker}="tracked"] { --tw-fort-target-color: #ffcf46; }
    `;
    (document.head || document.documentElement).append(style);

    for (const name of hooks) {
      const original = battleWindow[name];
      battleWindow[name] = function (...args) {
        const result = original.apply(this, args);
        afterRender(this);
        return result;
      };
    }
    return true;
  }

  if (!install()) {
    const timer = setInterval(() => {
      if (install()) clearInterval(timer);
    }, 500);
  }
})();
