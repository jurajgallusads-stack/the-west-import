// ==UserScript==
// @name         The West – import do remeselnej kalkulačky
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.0.0
// @description  Import nálezky, dostupných prác, strieborných pracovísk a inventára do remeselnej kalkulačky.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js
// ==/UserScript==

(() => {
  'use strict';

  const game = unsafeWindow;
  const configKey = 'calculator-import';

  // Poradie zodpovedá hárku Hráči (75 prác a 71 surovín).
  const jobProducts = [
    '129|2162000,2|757000,5|704000,4|702000,6|703000,11|744000,8|701000,12|765000,9|706000',
    '92|797000,13|745000,15|746000,14|748000,18|708000,18|1791000,23|747000,17|712000',
    '87|793000,21|766000,27|711000,29|740000,25|716000,31|714000,24|742000,91|791000',
    '32|720000,37|767000,41|744000,36|715000,26|795000,40|721000,38|741000,47|761000',
    '95|1808000,39|714000,48|749000,46|711000,50|737000,96|1809000,97|1810000,85|790000',
    '55|711000,52|724000,56|725000,98|1811000,59|778000,84|784000,100|1813000,67|752000',
    '71|1708000,101|1814000,103|1816000,108|1820000,115|1825000,117|1827000,120|1832000',
    '121|1833000,124|1834000,125|1835000,132|2436000,133|2432000,136|2450000,137|2447000',
    '143|2444000,148|2453000,154|2456000,156|2451000,157|2458000,159|2437000,163|52933000',
    '164|52934000,195|52965000,197|52967000,201|52971000,205|52975000'
  ].join(',').split(',').map(pair => pair.split('|').map(Number));

  const inventoryIds = [
    52971000, 715000, 704000, 2453000, 724000, 714000, 706000, 703000, 711000, 795000,
    737000, 741000, 2432000, 1820000, 757000, 778000, 1825000, 716000, 747000, 784000,
    765000, 1832000, 712000, 740000, 1816000, 748000, 1834000, 749000, 1814000, 52975000,
    708000, 52933000, 745000, 2436000, 744000, 2450000, 2444000, 2451000, 52967000, 1827000,
    1813000, 793000, 2437000, 766000, 720000, 791000, 2162000, 742000, 52934000, 752000,
    1835000, 1809000, 725000, 746000, 702000, 1810000, 1833000, 721000, 761000, 797000,
    2456000, 1708000, 2447000, 1808000, 1791000, 767000, 701000, 2458000, 1811000, 52965000,
    790000
  ];

  const host = document.createElement('div');
  const ui = host.attachShadow({ mode: 'open' });
  ui.innerHTML = `
    <style>
      :host { position: fixed; top: 72px; right: 16px; z-index: 2147483647; }
      section { display: grid; justify-items: end; gap: 6px; font: 13px Arial, sans-serif; }
      button { padding: 6px 10px; border: 1px solid #78512e; border-radius: 4px;
        background: #f6e9ce; color: #352416; cursor: pointer; }
      button:disabled { cursor: wait; opacity: .75; }
      output { max-width: 300px; padding: 8px; background: #fff8e9; color: #352416;
        border: 1px solid #78512e; border-radius: 4px; line-height: 1.4; }
      [hidden] { display: none; }
    </style>
    <section>
      <button id="import" type="button">TW import</button>
      <output id="status" aria-live="polite" hidden></output>
      <button id="copy" type="button" hidden>Kopírovať inventár</button>
    </section>
  `;
  document.body.appendChild(host);

  const importButton = ui.getElementById('import');
  const copyButton = ui.getElementById('copy');
  const status = ui.getElementById('status');
  let lastInventory;

  function show(message) {
    status.textContent = message;
    status.hidden = false;
  }

  function configure() {
    const input = window.prompt('Z hárka „Import z hry“ skopíruj celý obsah bunky A14 a vlož ho sem.');
    if (input === null) return null;

    const endpoint = input.match(/https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?=["'\s]|$)/)?.[0];
    const token = input.match(/\btoken\s*:\s*["']([A-Za-z0-9._~-]{8,128})["']/)?.[1];
    if (!endpoint || !token) {
      show('Chýba platná adresa alebo kľúč. Skopíruj hodnotu celej bunky A14.');
      return null;
    }

    const config = { endpoint, token };
    GM_setValue(configKey, config);
    show('Pripojenie uložené.');
    return config;
  }

  function readGame(request) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Hra neodpovedala včas.')), 12000);
      const fail = () => {
        clearTimeout(timer);
        reject(new Error('Hra nevrátila požadované údaje.'));
      };
      try {
        request(result => {
          clearTimeout(timer);
          if (!result || result.error) fail();
          else resolve(result);
        }).fail(fail);
      } catch (error) {
        clearTimeout(timer);
        reject(error);
      }
    });
  }

  async function dailySilverJobs() {
    const map = (action, params) => readGame(done => game.Ajax.get('map', action, params, done));
    const minimap = await map('get_minimap', {});
    const tileSize = Number(game.GameMap.tileSize);
    if (!(tileSize > 0) || !minimap.job_groups) throw new Error('Chýba mapa pracovísk.');

    const tiles = new Map();
    for (const group of Object.values(minimap.job_groups)) {
      for (const [x, y] of Object.values(group)) {
        if (x == null || y == null || !Number.isFinite(+x) || !Number.isFinite(+y)) {
          throw new Error('Neznámy formát súradníc pracovísk.');
        }
        const tile = [Math.floor(x / tileSize), Math.floor(y / tileSize)];
        tiles.set(tile.join(','), tile);
      }
    }

    const points = [...tiles.values()];
    const silver = new Set();
    let featured = 0;
    const batchSize = 120;

    async function scan(start) {
      const result = await map('get_complete_data', {
        tiles: JSON.stringify(points.slice(start, start + batchSize))
      });
      if (!result.dynamic || typeof result.dynamic !== 'object') {
        throw new Error('Mapa nevrátila denné pracoviská.');
      }
      for (const chunk of Object.values(result.dynamic)) {
        for (const column of Object.values(chunk)) {
          for (const stack of Object.values(column)) {
            for (const entry of Object.values(stack)) {
              const job = entry?.[1];
              if (!job?.job_id) continue;
              featured++;
              if (!job.gold || job.gold === '0') silver.add(Number(job.job_id));
            }
          }
        }
      }
    }

    for (let start = 0; start < points.length; start += 2 * batchSize) {
      const scans = [scan(start)];
      if (start + batchSize < points.length) scans.push(scan(start + batchSize));
      await Promise.all(scans);
    }
    if (!featured) throw new Error('Mapa nevrátila označené pracoviská.');
    return silver;
  }

  function jobRates(liveJobs, silverJobs, level) {
    const models = new Map();
    const silverMatches = new Set();
    const jobs = jobProducts.map(([jobId, itemId]) => {
      if (!models.has(jobId) && liveJobs[jobId]) {
        const job = game.JobList.getJobById(jobId);
        if (job) {
          const model = new game.west.job.Model(job);
          model.mergeJobObject(liveJobs[jobId]);
          models.set(jobId, model);
        }
      }
      const model = models.get(jobId);
      const duration = model?.basis?.long;
      const item = duration?.yields?.find(yieldItem => Number(yieldItem.itemid) === itemId);
      if (!item) return '';

      const base = Number(item.prop);
      const normal = base + Number(item.probBonus);
      if (!Number.isFinite(normal)) return '';
      const bonus = model.stage === 'gold' && model.stars === 5 ? 0.75 : 0.5;
      const silver = Math.round(normal + bonus * base);
      const featured = silverJobs?.has(jobId);
      if (featured) silverMatches.add(jobId);
      const daily = silverJobs === null ? 'U' : featured ? 'S' : 'N';
      let access = 'L';
      if (model.isVisible && duration.energy) access = level >= model.jobObj.level ? 'V' : 'A';
      return [normal, silver, daily, access].join(';');
    });
    return { jobs, silverCount: silverMatches.size };
  }

  function save(config, data) {
    return new Promise((resolve, reject) => {
      const failed = () => reject(new Error('Import sa nepodarilo potvrdiť. Skontroluj čas v tabuľke.'));
      GM_xmlhttpRequest({
        method: 'POST',
        url: config.endpoint,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        anonymous: true,
        data: JSON.stringify({ ...data, token: config.token }),
        timeout: 30000,
        onload: response => {
          if (response.status < 200 || response.status >= 300) return failed();
          try {
            const result = JSON.parse(response.responseText);
            if (!result.ok) return reject(new Error(result.err || 'Tabuľka odmietla import.'));
            resolve(result);
          } catch {
            failed();
          }
        },
        onerror: failed,
        ontimeout: failed,
        onabort: failed
      });
    });
  }

  function localTimestamp(date) {
    const pad = value => String(value).padStart(2, '0');
    return [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join('-') +
      ' ' + [pad(date.getHours()), pad(date.getMinutes())].join(':');
  }

  async function importData() {
    if (importButton.disabled) return;
    const config = GM_getValue(configKey, null) ?? configure();
    if (!config) return;

    importButton.disabled = true;
    copyButton.hidden = true;
    lastInventory = undefined;
    try {
      const { Character, Bag, Ajax, JobsWindow } = game;
      if (!Character?.name || !Ajax?.remoteCallMode || !game.west?.job?.Model) {
        throw new Error('Počkaj, kým sa načíta herný svet, a spusti import znova.');
      }
      if (!Bag?.loaded || !Bag.getItemCount) {
        throw new Error('Otvor v hre batoh a spusti import znova.');
      }

      const { name, level } = Character;
      const ts = localTimestamp(new Date());
      const inv = inventoryIds.map(id => Number(Bag.getItemCount(id)) || 0);
      lastInventory = inv;
      show('Načítavam nálezku a strieborné práce…');

      const work = await readGame(done => Ajax.remoteCallMode('work', 'index', {}, done, JobsWindow));
      if (!work.jobs || !Object.keys(work.jobs).length) throw new Error('Hra nevrátila aktuálne práce.');

      const silverJobs = await dailySilverJobs().catch(() => null);
      const { jobs, silverCount } = jobRates(work.jobs, silverJobs, level);
      if (!jobs.some(Boolean)) throw new Error('Hra nevrátila nálezku pre hodinové práce.');

      const result = await save(config, { name, level, ts, jobs, inv });
      const rates = result.keptRates ? 'Nálezka z lepšej sady je uložená.' : 'Nálezka z aktuálnej sady je uložená.';
      const daily = silverJobs === null ? ' Mapa sa nenačítala.' : ` Strieborné práce: ${silverCount}.`;
      show(`Hotovo (${name}, stĺpec ${result.col}). ${rates}${daily}`);
    } catch (error) {
      show(error.message || 'Import zlyhal.');
      copyButton.hidden = !lastInventory;
    } finally {
      importButton.disabled = false;
    }
  }

  importButton.addEventListener('click', importData);
  copyButton.addEventListener('click', () => {
    if (!lastInventory) return;
    GM_setClipboard(lastInventory.join('\n'), 'text');
    show('Inventár vlož do svojho stĺpca v hárku Hráči od riadka 86.');
  });
  GM_registerMenuCommand('Nastaviť pripojenie ku kalkulačke', configure);
  GM_registerMenuCommand('Importovať do kalkulačky', importData);
})();
