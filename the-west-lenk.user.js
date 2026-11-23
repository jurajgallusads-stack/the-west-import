// ==UserScript==
// @name         lenk
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      1.3.0
// @description  Keď otvoríš obchodníka, nad hlavou mu vyskočí komiksová bublina so zakaždým inou hláškou z Divokého západu.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-lenk.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-lenk.user.js
// ==/UserScript==

(() => {
  'use strict';
  // Skript iba kreslí v prehliadači. Neposiela žiadnu požiadavku na herný server.
  // Vlastný obrázok obchodníka si vyberieš cez menu Tampermonkey (lenk → Obrázok obchodníka…);
  // uloží sa iba v tvojom prehliadači, v skripte ani na GitHube nie je.

  // Pri každom otvorení obchodníka iná hláška z Divokého západu (nikdy nie dvakrát po sebe).
  const LINES = [
    'Kto skoro vstáva, tomu kôň neutečie.',
    'Najrýchlejšia pištoľ na západe je tá, ktorú netreba vytiahnuť.',
    'Kaktus ti nepomôže, ale aspoň ťa neoklame.',
    'Šerif hovorí, že zákon je zákon. Ja hovorím, že cena je cena.',
    'Prach na čižmách je len dôkaz, že si niekam došiel.',
    'Zlato sa leskne. Fazuľa ťa zasýti.',
    'Nikdy nehraj poker s chlapom, ktorý má viac rukávov ako ty.',
    'Ak ti kôň nerozumie, skús hovoriť pomalšie.',
    'Na prérii je ticho. Až kým nepríde tvoja svokra.',
    'Dobrý klobúk ťa ochráni pred slnkom, dažďom aj zlými rozhodnutiami. Teda… pred dvomi z troch.',
    'Kto má plnú čutoru, ten sa púšťa aj cez púšť.',
    'Peniaze nekúpia šťastie. Ale kúpia nové sedlo, a to je skoro to isté.',
    'Najnebezpečnejšie zviera na západe? Hladný kovboj.',
    'Bandita sa vždy vráti na miesto činu. Hlavne keď tam zabudol klobúk.',
    'Ostroha nie je ozdoba, synku. Ale aj tak vyzerá dobre.',
    'Pri ohni sa rozprávajú najlepšie príbehy. A najväčšie lži.',
    'Kôň vie cestu domov. Ty len dúfaš.',
    'Zlatokop sa nikdy nevzdá. Iba si občas oddýchne na dva roky.',
    'V salóne sú dve pravidlá: neplať vopred a nesadaj si chrbtom k dverám.',
    'Každý chce byť hrdina, kým sa nezačne strieľať.',
    'Vlak mešká? Na západe ide všetko podľa slnka, nie podľa hodiniek.',
    'Rešpekt sa nedá kúpiť. Ale dá sa vymeniť za dobrú whisky.',
    'Ak počuješ štrkáča, nepýtaj sa, kde je. Bež.',
    'Lacný tovar je ako lacný kôň: obaja ťa niekde nechajú.',
    'Préria je veľká, ale klebety ju prejdú za jeden deň.',
    'Najlepšia zbraň kovboja je trpezlivosť. Hneď po kolte.',
    'Kto sa smeje naposledy, ten mal lepšieho koňa.',
    'Mapa k pokladu je zadarmo. Lopata stojí päť dolárov.',
    'Slnko zapadá na západe. Preto sme sem všetci prišli.',
    'Nevieš, čo chceš kúpiť? Nevadí, ja viem, čo ti chcem predať.',
    'Dnes zľavy nerobím. Zajtra tiež nie. Ale môžeš sa opýtať.',
    'Kovboj bez koňa je len chlap v zvláštnom klobúku.',
    'Strieľaj prvý, pýtaj sa potom. Alebo radšej najprv zaplať.',
    'Dobrá rada zadarmo: nekupuj nič od chlapa, ktorý sa usmieva viac ako ja.',
    'Mladý zlatokop hľadá zlato. Starý zlatokop hľadá okuliare.',
    'Na západe máme tri ročné obdobia: horúco, prašno a horúco s prachom.',
    'Aj ten najtvrdší bandita plače, keď mu skončí káva.',
    'Kto nemá koňa, má nohy. Kto nemá nohy, má smolu.',
    'KOKOT LENK. DNES SI SI ZAPOMNEL DATLEKY.'
  ];
  const pickLine = () => {
    let last = -1;
    try { last = Number(localStorage.getItem('lenk-last') ?? -1); } catch { /* bez úložiska */ }
    let i = Math.floor(Math.random() * LINES.length);
    if (LINES.length > 1 && i === last) i = (i + 1 + Math.floor(Math.random() * (LINES.length - 1))) % LINES.length;
    try { localStorage.setItem('lenk-last', String(i)); } catch { /* bez úložiska */ }
    return LINES[i];
  };
  const escapeHtml = text => text.replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);

  // Okná obchodníkov: podľa triedy/id okna alebo podľa titulku (SK aj CZ).
  const SHOP_CLASS = /trader|shop|itemtrader|building_(general|tailor|gunsmith)/i;
  const SHOP_TITLE = /obchod|krej[čc]|kraj[čc]|pu[šs]k|zbroj/i;

  const style = document.createElement('style');
  style.textContent = `
    .lenk-bubble {
      position: absolute; z-index: 100000; pointer-events: none;
      max-width: 250px; padding: 10px 14px; box-sizing: border-box;
      background: #fff; color: #111; border: 3px solid #111; border-radius: 22px;
      font: 900 13px/1.25 "Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive;
      text-align: center; text-transform: uppercase; letter-spacing: .5px; width: max-content;
      box-shadow: 4px 4px 0 rgba(0,0,0,.35);
      transform-origin: 85% 100%; animation: lenk-pop .35s cubic-bezier(.2,1.6,.4,1) both;
    }
    /* Chvost vpravo dole, mieri šikmo na hlavu obchodníka. */
    .lenk-bubble::after, .lenk-bubble::before { content: ""; position: absolute; border-style: solid; }
    .lenk-bubble::before { bottom: -22px; right: 30px; border-width: 22px 0 0 14px; border-color: #111 transparent transparent transparent; }
    .lenk-bubble::after { bottom: -15px; right: 33px; border-width: 16px 0 0 9px; border-color: #fff transparent transparent transparent; }
    .lenk-keeper { position: absolute; z-index: 99999; pointer-events: none; }
    /* Rozmazaný pôvodný dedko pod novou postavičkou. Hore vynecháva roh so 4. tovarom v ponuke. */
    .lenk-keeper .lenk-blur { position: absolute; inset: 0; backdrop-filter: blur(14px) saturate(.85); -webkit-backdrop-filter: blur(14px) saturate(.85);
      clip-path: polygon(48% 0, 100% 0, 100% 100%, 0 100%, 0 43%, 48% 43%);
      -webkit-mask-image: linear-gradient(to bottom, transparent, #000 8%); mask-image: linear-gradient(to bottom, transparent, #000 8%); }
    .lenk-keeper img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; object-position: right bottom;
      animation: lenk-pop .35s ease-out both; }
    .lenk-dialog { position: fixed; z-index: 100001; left: 50%; top: 30%; transform: translate(-50%, 0); width: 320px;
      padding: 14px 16px; background: #f3e6c4; color: #3b2a14; border: 3px solid #5b3a12; border-radius: 8px;
      box-shadow: 0 6px 20px rgba(0,0,0,.5); font: 13px Arial, sans-serif; }
    .lenk-dialog h3 { margin: 0 0 8px; font-size: 15px; }
    .lenk-dialog .row { display: flex; gap: 8px; margin-top: 10px; justify-content: flex-end; }
    .lenk-dialog button { padding: 4px 10px; cursor: pointer; }
    .lenk-dialog img { display: block; max-width: 100%; max-height: 140px; margin: 8px auto 0; }
    @keyframes lenk-pop { from { transform: scale(.2); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `;
  document.head.appendChild(style);

  const isShopWindow = win => {
    const tag = `${win.className} ${win.id}`;
    if (SHOP_CLASS.test(tag)) return true;
    const title = win.querySelector('.tw2gui_window_title, .window_title, .tw2gui_inner_window_title')?.textContent || '';
    return SHOP_TITLE.test(title);
  };

  // Hlava dedka v okne obchodníka (stojí vpravo): pomer k šírke a výške okna.
  const HEAD_X = 0.89;
  const HEAD_Y = 0.31;
  // Oblasť dedka v okne (pomer k oknu) a hlava na vlastnom obrázku (pomer k obrázku).
  const KEEPER = { left: 0.62, top: 0.27, right: 0.99, bottom: 0.877 };
  const IMG_HEAD = { x: 0.66, y: 0.05 };
  const IMAGE_KEY = 'keeperImage';
  let keeperImage = GM_getValue(IMAGE_KEY, '');

  // Vlastný obrázok cez dedka; vráti hlavu postavičky (px voči oknu), keď je obrázok načítaný.
  function placeKeeper(win) {
    let box = win.querySelector(':scope > .lenk-keeper');
    if (!keeperImage) {
      box?.remove();
      return null;
    }
    if (!box) {
      box = document.createElement('div');
      box.className = 'lenk-keeper';
      box.innerHTML = '<div class="lenk-blur"></div><img alt="">';
      const img = box.querySelector('img');
      img.addEventListener('load', () => win.isConnected && placeBubble(win));
      img.src = keeperImage;
      win.appendChild(box);
    }
    const w = win.getBoundingClientRect();
    const bx = w.width * KEEPER.left;
    const by = w.height * KEEPER.top;
    const bw = w.width * (KEEPER.right - KEEPER.left);
    const bh = w.height * (KEEPER.bottom - KEEPER.top);
    Object.assign(box.style, { left: `${bx}px`, top: `${by}px`, width: `${bw}px`, height: `${bh}px` });
    const img = box.querySelector('img');
    if (!img.naturalWidth) return null;
    const scale = Math.min(bw / img.naturalWidth, bh / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    return { x: bx + bw - dw + dw * IMG_HEAD.x, y: by + bh - dh + dh * IMG_HEAD.y };
  }

  function placeBubble(win) {
    let bubble = win.querySelector(':scope > .lenk-bubble');
    if (!bubble) {
      bubble = document.createElement('div');
      bubble.className = 'lenk-bubble';
      bubble.innerHTML = `<div>${escapeHtml(pickLine())}</div>`;
      win.appendChild(bubble);
    }
    const w = win.getBoundingClientRect();
    const width = bubble.offsetWidth;
    const height = bubble.offsetHeight;
    // Špička chvosta je 33 px od pravého a 19 px pod spodným okrajom bubliny.
    const head = placeKeeper(win);
    const headX = head ? head.x : w.width * HEAD_X;
    const headY = head ? head.y : w.height * HEAD_Y;
    bubble.style.left = `${Math.round(headX + 33 - width)}px`;
    bubble.style.top = `${Math.round(headY - 19 - height)}px`;
  }

  // Zmenší obrázok, aby sa pohodlne zmestil do úložiska Tampermonkey.
  const shrink = dataUrl => new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 700 / img.naturalHeight);
      if (scale === 1) return resolve(dataUrl);
      const c = document.createElement('canvas');
      c.width = Math.round(img.naturalWidth * scale);
      c.height = Math.round(img.naturalHeight * scale);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      resolve(c.toDataURL('image/png'));
    };
    img.onerror = () => resolve('');
    img.src = dataUrl;
  });
  function refreshAll() {
    for (const el of document.querySelectorAll('.lenk-keeper, .lenk-bubble')) el.remove();
    queue();
  }
  function openDialog() {
    document.querySelector('.lenk-dialog')?.remove();
    const dlg = document.createElement('div');
    dlg.className = 'lenk-dialog';
    dlg.innerHTML = `<h3>Obrázok obchodníka</h3>
      <div>Vyber obrázok (najlepšie PNG s priehľadným pozadím). Prekryje dedka v okne obchodníka a uloží sa iba v tomto prehliadači.</div>
      <input type="file" accept="image/*" style="margin-top:8px">
      ${keeperImage ? `<img src="${keeperImage}" alt="">` : ''}
      <div class="row">${keeperImage ? '<button type="button" data-act="del">Vrátiť dedka</button>' : ''}<button type="button" data-act="close">Zavrieť</button></div>`;
    dlg.querySelector('input').addEventListener('change', event => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        const data = await shrink(String(reader.result));
        if (!data) return;
        keeperImage = data;
        GM_setValue(IMAGE_KEY, data);
        dlg.remove();
        refreshAll();
      };
      reader.readAsDataURL(file);
    });
    dlg.addEventListener('click', event => {
      const act = event.target.dataset?.act;
      if (act === 'del') {
        keeperImage = '';
        GM_deleteValue(IMAGE_KEY);
        refreshAll();
      }
      if (act) dlg.remove();
    });
    document.body.appendChild(dlg);
  }
  GM_registerMenuCommand('Obrázok obchodníka…', openDialog);

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
      if (m.target.closest?.('.lenk-bubble, .lenk-keeper, .lenk-dialog')) continue;
      if ([...m.addedNodes].some(n => n.nodeType === 1 && !n.matches('.lenk-bubble, .lenk-keeper, .lenk-dialog'))) { queue(); return; }
    }
  }).observe(document.body, { childList: true, subtree: true });
  window.addEventListener('resize', queue);
  queue();
})();
