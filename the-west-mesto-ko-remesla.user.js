// ==UserScript==
// @name         The West - mesto, KO a remeslá
// @namespace    urn:jurajgallus:the-west:bundled:the-west-mesto-ko-remesla
// @version      1.0.0
// @description  Mestské menu, časovač po KO a rozšírené remeselné okno.
// @grant        none
// @run-at       document-idle
// @include      https://*.the-west.*/game.php*
// @exclude      https://classic.the-west.net*
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-mesto-ko-remesla.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-mesto-ko-remesla.user.js
// ==/UserScript==

(() => {
  const url = location.origin + location.pathname + location.search + location.hash;
  function start(name, includes, excludes, init) {
    if (!includes.some(pattern => new RegExp(pattern).test(url))) return;
    if (excludes.some(pattern => new RegExp(pattern).test(url))) return;
    try {
      init();
    } catch (error) {
      console.error('[The West] ' + name, error);
    }
  }

  // The-West Sweets | 1.3.4 | Tom Robert (Shelimov/Slygoxx)
  start("The-West Sweets", ["^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$"], ["^https://classic\\.the\\-west\\.net[^/:@]*(?::\\d+)?/.*$"], function () {
// translation:Shelimov(Russian),Tom Robert(German),pepe100(Spanish),jccwest(Portuguese),Lutte Finale(French),anto81(Italian),0ndra(Polish),JackJeruk(Hungarian),Jamza(Czech&Slovak),Timemod Herkumo(Greek)
(function (fn) {
  var script = document.createElement('script');
  script.setAttribute('type', 'application/javascript');
  script.textContent = '(' + fn + ')();';
  document.body.appendChild(script);
  document.body.removeChild(script);
})(function () {
  TWS = {
    version: '1.3.4',
    name: 'TW Sweets',
    author: 'Tom Robert (Shelimov/Slygoxx)',
    minGame: '2.06',
    maxGame: Game.version.toString(),
    url: '//tomrobert.safe-ws.de/',
    website: 'https://the-west-scripts.github.io/The-West-Sweets/',
    Images: function (img, file) {
      return this.url + img + (file ? '.jpg' : '.png');
    },
    langs: {
      en: {
        language: 'English',
        ApiGui: 'This script contains some cool features which improve your gaming experience on The West.',
        contact: 'Contact',
        opentab: 'Open %1 tab',
        general: 'General',
        main: 'Main',
        chooseLang: 'Choose language',
        saved: 'Successfully saved',
        need_reload: 'The page will be reloaded, ok?',
        patches_title: 'Modifications/Patches',
        enable_select: 'Enable selectable text',
        enable_lastpage: 'Enable last page mod',
        enable_timelefters: 'Enable regeneration timers',
        enable_beeper: 'Enable Beeper',
        enable_beeper_title: '<b>Beeper</b> - Sound alert at new private chat message',
        enable_town_button: 'Enable ExTB',
        enable_town_title: '<b>ExtTB</b><i>(Extension for Town Button)</i>:<br>Extend town button in bottom bar.',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Go to last page of the topic',
        wir: 'WIR',
        wir_enabler: 'Enable WIR',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Resizes inventory items and adds a scroll bar.',
        wir_on_line: 'on a row',
        wir_on_one_line: 'Number of items per line',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Bank',
        saloon: 'Saloon',
        sleep: 'Sleep',
        sleep_in_hotel: 'Sleep in your hotel',
        forum: 'Town forum',
        market: 'Market',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Sheriff',
        cityhall: 'Town hall',
        dont_have_hotel: 'You don\'t have a hotel!',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'Do you want to attack a friend?',
        DuelSafer_from_town: 'Town',
        DuelSafer_from_alliance: 'Alliance',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Friend attack',
        DuelSafer_input_town: 'Add new town',
        DuelSafer_input_alliance: 'Add new alliance',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Can\'t find the town',
        DuelSafer_not_found_ally: 'Can\'t find the alliance',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Already on the list',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Add',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Default sound',
        beeper_sound: 'Choose file',
        listen: 'Listen',
        HealthTL_to: 'Time left for full health',
        EnergyTL_to: 'Time left for full energy',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Regeneration per hour',
        Reg_missing: 'Missing',
      },
      ru: {
        language: 'Russian (русский)',
        ApiGui: 'This script contains some cool features which improve your gaming experience on The West.',
        contact: 'Контакты',
        opentab: 'Открыть вкладку "%1"',
        general: 'Общее',
        main: 'Главные',
        chooseLang: 'Сменить язык (Language)',
        saved: 'Successfully saved',
        need_reload: 'Требуется перезагрузка страницы. Выполнить?',
        patches_title: 'Модфикации/Патчи',
        enable_select: 'Сделать текст выделяемым',
        enable_lastpage: 'Переход к последней странице',
        enable_timelefters: 'Включить счетчики',
        enable_beeper: 'Включить бипер',
        enable_beeper_title: '<b>Beeper</b> - звуковое уведомление о новом сообщении в приват',
        enable_town_button: 'Включить кнопку "Город"',
        enable_town_title: 'Добавляет справа кнопку <b>"город"</b>, которая содержит функции для быстрого управления "городскими" задачами. (Открыть сплетни, лечь спать в ближ. форт, рынок, церковь и т.п)',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'К последней странице',
        wir: 'WIR',
        wir_enabler: 'Уменьшитель инвентаря',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Resizes inventory items and adds a scroll bar.',
        wir_on_line: 'на строку',
        wir_on_one_line: 'Кол-во элементов на строку в инвентаре',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Банк',
        saloon: 'Cалун',
        sleep: 'Sleep',
        sleep_in_hotel: 'Спать в своем отеле',
        forum: 'Сплетни',
        market: 'Рынок',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Шериф',
        cityhall: 'Town hall',
        dont_have_hotel: 'У тебя не построен отель!',
        craft: 'Craft',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'О нет! Это союзник! Вы действительно хотите напасть?',
        DuelSafer_from_town: 'Город',
        DuelSafer_from_alliance: 'Альянс',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Нападение на союзника',
        DuelSafer_input_town: 'Введите название города',
        DuelSafer_input_alliance: 'Введите название альянса',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Не найден такой город',
        DuelSafer_not_found_ally: 'Не найден такой альянс',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Уже есть в списке городов/альянсов',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Добавить',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Стандартный звук',
        beeper_sound: 'Свой аудиофайл',
        listen: 'Прослушать',
        HealthTL_to: 'Полное восстановление хп через',
        EnergyTL_to: 'Полное восстановление энергии через',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Регенерация в час единиц',
        Reg_missing: 'Missing',
      },
      de: {
        language: 'German (Deutsch)',
        ApiGui: 'Das Script beinhaltet ein paar coole Funktionen für ein besseres Spielerlebnis bei The West.',
        contact: 'Kontakt',
        opentab: 'Öffne den Tab %1',
        general: 'Einstellungen',
        main: 'Allgemein',
        chooseLang: 'Sprache ändern (Language)',
        saved: 'Änderung gespeichert',
        need_reload: 'Die Seite wird neu geladen, ok?',
        patches_title: 'Modifikationen/Patches',
        enable_select: 'Text markieren aktivieren',
        enable_lastpage: 'Letzte Seite Mod aktivieren',
        enable_timelefters: 'Regeneration Timer aktivieren',
        enable_beeper: 'Beeper aktivieren',
        enable_beeper_title: '<b>Beeper</b> - Ein Ton erklingt, wenn man angeflüstert wird',
        enable_town_button: 'ExtTB aktivieren',
        enable_town_title: '<b>ExtTB</b><i>(Extension for Town Button)</i>:<br>Der Stadtbutton wird mit verschiedenen Links erweitert.',
        enable_menutop: 'Halte die Menü- und Scriptsleiste immer im Vordergrund',
        to_last_page: 'Gehe zur letzten Seite',
        wir: 'WIR',
        wir_enabler: 'WIR aktivieren',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Verkleinert die Gegenstände im Inventar und fügt einen Scroll-Balken hinzu.',
        wir_on_line: 'pro Zeile',
        wir_on_one_line: 'Anzahl Gegenstände in einer Reihe',
        ext: 'Inventar- und Ausrüstungs-Fenster schließen',
        ext_enabler: 'Extra Schließ-Button',
        ext_enabler_title: 'Zusätzlicher Button, welcher nur das Inventar und das angeheftete Fenster schließt.',
        open: 'Öffne ',
        bank: 'Bank',
        saloon: 'Saloon',
        sleep: 'Schlafen',
        sleep_in_hotel: 'Im eigenen Hotel schlafen',
        forum: 'Stadtforum',
        market: 'Markt',
        pray: 'Beten',
        pray_in_church: 'Bete in der Kirche',
        sheriff: 'Sheriff',
        cityhall: 'Stadthalle',
        dont_have_hotel: 'Deine Stadt hat kein Hotel!',
        craft: 'Herstellen',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'Dieser Spieler ist stadtlos!',
        DuelSafer_friend_text: 'Freund wirklich duellieren?',
        DuelSafer_from_town: 'Stadt',
        DuelSafer_from_alliance: 'Bündnis',
        DuelSafer_from_player: 'Spieler',
        DuelSafer_friend: 'Duell gegen Freund',
        DuelSafer_input_town: 'Füge eine neue Stadt hinzu',
        DuelSafer_input_alliance: 'Füge ein neues Bündnis hinzu',
        DuelSafer_input_player: 'Füge einen neuen Spieler hinzu',
        DuelSafer_not_found_town: 'Diese Stadt existiert nicht.',
        DuelSafer_not_found_ally: 'Dieses Bündnis existiert nicht.',
        DuelSafer_not_found_player: 'Dieser Spieler existiert nicht.',
        DuelSafer_already_have: 'Ist bereits auf der Liste',
        open_town: 'Öffne Stadfenster',
        open_ally: 'Öffne Bündnisübersicht',
        open_player: 'Öffne Spielerprofil',
        help_icon: 'Füge Spieler, Städte oder Bündnisse zur DuelSafer-Liste hinzu, damit vor einem Duell ein Bestätigungs-Popup auftaucht.',
        add: 'Hinzufügen',
        addfriends: 'All deine Freunde hinzufügen',
        friendlist: 'Freundesliste',
        delete_town: 'Stadt entfernen',
        delete_ally: 'Bündnis entfernen',
        delete_player: 'Spieler entfernen',
        default_sound: 'Standard',
        beeper_sound: 'Datei auswählen',
        listen: 'Anhören',
        HealthTL_to: 'Zeit bis zu 100% Lebenspunkte',
        EnergyTL_to: 'Zeit bis zu 100% Erholung',
        HealthNext: 'Nächster Lebenspunkt in',
        EnergyNext: 'Nächster Erholungspunkt in',
        Reg_perH: 'Regeneration pro Stunde',
        Reg_missing: 'Fehlend',
      },
      es: {
        language: 'Spanish (español)',
        ApiGui: 'Este script contiene algunas funciones interesantes que mejoran su experiencia de juego en The West.',
        contact: 'Contacto',
        opentab: 'Abrir pestaña %1',
        general: 'General',
        main: 'Principal',
        chooseLang: 'Elegir idioma (Language)',
        saved: 'Los ajustes han sido guardados!',
        need_reload: 'La página será recargada, ¿de acuerdo?',
        patches_title: 'Modificaciones/Parches',
        enable_select: 'Habilitar texto seleccionable',
        enable_lastpage: 'Habilitar última página foro',
        enable_timelefters: 'Habilitar temporizadores de regeneración',
        enable_beeper: 'Habilitar Beeper',
        enable_beeper_title: '<b>Beeper</b> - Sonido de alerta sobre nuevo mensaje',
        enable_town_button: 'Enable ExTB',
        enable_town_title: '<b>ExtTB</b><i>(Extensión para el botón ciudad)</i>:<br>Extiende el botón ciudad en la barra inferior.',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Ir a la última página del hilo',
        wir: 'WIR',
        wir_enabler: 'Habilitar WIR',
        wir_enabler_title: '(West Inventario Reductor)</i>:<br>Redimensiona los artículos del inventario y añade una barra desplazamiento.',
        wir_on_line: 'en una fila',
        wir_on_one_line: 'Número de artículos por línea',
        ext: 'Cierra el inventario y las ventanas fijas',
        ext_enabler: 'Botón extra cierre',
        ext_enabler_title: 'Botón adicional que cierra el Inventario y las ventanas fijas',
        open: 'Abrir ',
        bank: 'Banco',
        saloon: 'Salón',
        sleep: 'Dormir',
        sleep_in_hotel: 'Dormir en tu hotel',
        forum: 'Foro ciudad',
        market: 'Mercado',
        pray: 'Rezar',
        pray_in_church: 'Comenzar a rezar',
        sheriff: 'Sheriff',
        cityhall: 'Ayuntamiento',
        dont_have_hotel: '¡No dispones de hotel!',
        craft: 'Elaborar',
        DuelSafer_found: 'Duelo-Seguro',
        DuelSafer_no_town: '¡Este jugador no tiene ciudad!',
        DuelSafer_friend_text: '¿Quieres atacar un amigo?',
        DuelSafer_from_town: 'Ciudad',
        DuelSafer_from_alliance: 'Alianza',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Atacar amigo',
        DuelSafer_input_town: 'Agregar nueva Ciudad',
        DuelSafer_input_alliance: 'Agregar nueva Alianza',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'No puedo encontrar la Ciudad',
        DuelSafer_not_found_ally: 'No puedo encontrar la Alianza',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Ya está en la lista',
        open_town: 'Abrir ventana Ciudad',
        open_ally: 'Abrir ventana Alianza',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Agregar',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Eliminar Ciudad',
        delete_ally: 'Eliminar Alianza',
        delete_player: 'Remove player',
        default_sound: 'Sonido por defecto',
        beeper_sound: 'Elegir archivo',
        listen: 'Escuchar',
        HealthTL_to: 'Tiempo restante salud completa',
        EnergyTL_to: 'Tiempo restante energía completa',
        HealthNext: 'Próximo punto de salud en',
        EnergyNext: 'Próximo punto de energía en',
        Reg_perH: 'Regeneración por hora',
        Reg_missing: 'Falta para completar',
      },
      pt: {
        language: 'Portuguese (português)',
        ApiGui: 'Esse script contém alguns recursos interessantes que melhoram a sua experiência no jogo The West.',
        contact: 'Contato com Autor',
        opentab: 'Abrir %1 separador',
        general: 'Geral',
        main: 'Principal',
        chooseLang: 'Escolhe idioma (Language)',
        saved: 'Successfully saved',
        need_reload: 'A página será recarregada, ok?',
        patches_title: 'Modificações/Patches',
        enable_select: 'Ativar texto selecionado',
        enable_lastpage: 'Ativar última página mod',
        enable_timelefters: 'Ativar temporizadores',
        enable_beeper: 'Ativar Beeper',
        enable_beeper_title: '<b>Beeper</b> - Som de alerta sobre novo sussurro',
        enable_town_button: 'Habilitar botao "Cidade"',
        enable_town_title: 'Voce pode gerenciar instantaneamente a maioria das tarefas em sua cidade com este script, que e a adicao de um botao com o mesmo nome no lado direito. (Ex: Ir dormir no forte mais proximo, mercado, igreja etc)',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Ir para a ultima pagina',
        wir: 'WIR',
        wir_enabler: 'Redutor de Inventario',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Resizes inventory items and adds a scroll bar.',
        wir_on_line: 'em uma linha',
        wir_on_one_line: 'Numero de itens em uma linha',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Banco',
        saloon: 'Salao da cidade',
        sleep: 'Sleep',
        sleep_in_hotel: 'Dormir no hotel',
        forum: 'Forum',
        market: 'Mercado',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Xerife',
        cityhall: 'Town hall',
        dont_have_hotel: 'Voce nao tem um hotel!',
        craft: 'Produção',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'Esse jogador e uma alianca. Ataca-lo mesmo assim?',
        DuelSafer_from_town: 'Cidade',
        DuelSafer_from_alliance: 'Alianca',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Aliado atacando',
        DuelSafer_input_town: 'Insira o nome de uma cidade',
        DuelSafer_input_alliance: 'Insira o nome de uma alianca',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Cidade nao encontrada',
        DuelSafer_not_found_ally: 'Alianca nao encontrada',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Ja existe na lista das cidades/aliancas',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Adicionar',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Som padrão',
        beeper_sound: 'Escolher arquivo',
        listen: 'Ouvir',
        HealthTL_to: 'Tempo restante para saúde total',
        EnergyTL_to: 'Tempo restante para a energia total',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Regeneração por hora',
        Reg_missing: 'Missing',
      },
      fr: {
        language: 'French (français)',
        ApiGui: 'Ce script contient des fonctionnalités géniales qui améliorent votre expérience de The West.',
        contact: 'Contact',
        opentab: 'Ouvrez l\'onglet %1',
        general: 'Parametres',
        main: 'Options',
        chooseLang: 'Changer la langue (Language)',
        saved: 'Successfully saved',
        need_reload: 'La page doit etre rafraichie, proceder?',
        patches_title: 'Modifications/Patches',
        enable_select: 'Activer texte selectionnable',
        enable_lastpage: 'Activer dernière page mod',
        enable_timelefters: 'Activer régénération compteur',
        enable_beeper: 'Activer TW Beeper',
        enable_beeper_title: '<b>Beeper</b> - Alerte sonore pour les chuchos',
        enable_town_button: 'Active le bouton "Ville"',
        enable_town_title: 'Permet de prevoir/activer des taches automatiques (dormir a l\'hotel, au fort, ouvrir le sheriff...',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Derniere page',
        wir: 'WIR',
        wir_enabler: 'Reducteur d\'inventaire',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Resizes inventory items and adds a scroll bar.',
        wir_on_line: 'sur une ligne',
        wir_on_one_line: 'Nombre d\'item sur une ligne',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Banque',
        saloon: 'Propre saloon',
        sleep: 'Sleep',
        sleep_in_hotel: 'Sleep in your hotel',
        forum: 'Forum',
        market: 'Marche',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Sheriff',
        cityhall: 'Town hall',
        dont_have_hotel: 'Tu n\'as pas d\'hotel!',
        craft: 'Fabriquer',
        DuelSafer_found: 'Duels Securises',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'Ce joueur est allie, l\'attaquer quand meme?',
        DuelSafer_from_town: 'Ville',
        DuelSafer_from_alliance: 'Alliance',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Attaque Alliee',
        DuelSafer_input_town: 'Entrer nom de la ville',
        DuelSafer_input_alliance: 'Entrer nom de l\'alliance',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Ville non trouvee',
        DuelSafer_not_found_ally: 'Alliance non trouvee',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Deja present dans les listes Alliances/Villes',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Ajouter',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Defaut',
        beeper_sound: 'Son personnalisé',
        listen: 'Ecouter',
        HealthTL_to: 'Temps à pleine PV',
        EnergyTL_to: 'Temps à pleine énergie',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Régénération par heure',
        Reg_missing: 'Missing',
      },
      it: {
        language: 'Italian (italiano)',
        ApiGui: 'Questo script contiene alcune funzioni interessanti che migliorano l\'esperienza di gioco su The West.',
        contact: 'Contatto',
        opentab: 'Aprire la scheda %1',
        general: 'Generale',
        main: 'Impostazioni principali',
        chooseLang: 'Cambia lingua (Language)',
        saved: 'Successfully saved',
        need_reload: 'La pagina ha bisogno di essere ricaricata. Procedere?',
        patches_title: 'Modifiche/Patch',
        enable_select: 'Abilita testo selezionabile',
        enable_lastpage: 'Abilita ultima pagina mod',
        enable_timelefters: 'Attivare timer rigenerazione',
        enable_beeper: 'Abilita segnale acustico',
        enable_beeper_title: 'Segnale acustico – Suono di avviso se si ottiene un messaggio privato',
        enable_town_button: 'Attiva pulsante  "Citta"',
        enable_town_title: 'Con questo script si puo immediatamente gestire la maggior parte dei compiti della tua citta, grazie all\'aggiunta del pulsante citta sul lato destro. (Es.: voci aperte, andare a dormire al piu vicino forte, mercato, chiesa ecc.)',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Vai all\'ultima pagina',
        wir: 'WIR',
        wir_enabler: 'Riduttore di inventario.',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Resizes inventory items and adds a scroll bar.',
        wir_on_line: 'su una linea',
        wir_on_one_line: 'Numero di articoli su una linea',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Banca',
        saloon: 'Proprio saloon',
        sleep: 'Sleep',
        sleep_in_hotel: 'Sleep in your hotel',
        forum: 'Forum',
        market: 'Mercato',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Sceriffo',
        cityhall: 'Town hall',
        dont_have_hotel: 'Non si dispone di un albergo!',
        craft: 'Produci',
        DuelSafer_found: 'Duello sicuro',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'Questo giocatore e un alleato. Attaccare lui in ogni caso?',
        DuelSafer_from_town: 'Citta',
        DuelSafer_from_alliance: 'Alleanza',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Alleato attaccato',
        DuelSafer_input_town: 'Inserisci il nome della citta',
        DuelSafer_input_alliance: 'Inserisci il nome del alleanza',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Citta non trovata',
        DuelSafer_not_found_ally: 'Alleanza non trovata',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'E ‘gia presente nella lista citta / alleanze',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Aggiungere',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Predefinito',
        beeper_sound: 'File audio',
        listen: 'Ascoltare',
        HealthTL_to: 'Recupero totale della vita in',
        EnergyTL_to: 'Recupero totale della riposo in',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Rigenerazione per ora',
        Reg_missing: 'Missing',
      },
      pl: {
        language: 'Polish (polski)',
        ApiGui: 'Skrypt ten zawiera kilka ciekawych funkcji, które poprawiają swoją rozgrywkę na zachodzie.',
        contact: 'Kontakt',
        opentab: 'Otwórz zakładkę %1',
        general: 'Ogólne',
        main: 'Ustawienia główne',
        chooseLang: 'Zmień język (Language)',
        saved: 'Ustawienia zostały zapisane.',
        need_reload: 'Strona musi zostać ponownie załadowana. Kontynuować?',
        patches_title: 'Modyfikacje/Poprawki',
        enable_select: 'Możliwość zaznacznia teksty',
        enable_lastpage: 'Włącz ostatnia strona mod',
        enable_timelefters: 'Włącz licznik regeneracji',
        enable_beeper: 'Włączenie dźwieku',
        enable_beeper_title: '<b>Brzęczek</b> - Dźwięk jeżeli gracz otrzyma wiadomość szeptem',
        enable_town_button: 'Włącz przycisk "Miasto"',
        enable_town_title: 'Za pomocą tego przycisku, otrzymujemy dostęp do wiekszości budynków w mieście.<br>Po prawej stronie zostanie dodany przycisk.<br>(Np.: Forum, spanie w koszarach, targ, kościól e t.c.)',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Idź do ostatniej strony',
        wir: 'WIR',
        wir_enabler: 'Redukcja ekwipunku',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Resizes inventory items and adds a scroll bar.',
        wir_on_line: 'pozycji w linii',
        wir_on_one_line: 'Ilość przedmiotów w jednej linii',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Bank',
        saloon: 'Własny saloon',
        sleep: 'Sleep',
        sleep_in_hotel: 'Sleep in your hotel',
        forum: 'Forum',
        market: 'Targ',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Szeryf',
        cityhall: 'Town hall',
        dont_have_hotel: 'Nie posiadasz hotelu!',
        craft: 'Wytwórz',
        DuelSafer_found: 'Bezpieczne pojedynki',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'Ten przeciwnik jest sojusznikiem. Chcesz go zaatakować?',
        DuelSafer_from_town: 'Miasto',
        DuelSafer_from_alliance: 'Sojusz',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Atak na sojusznika',
        DuelSafer_input_town: 'Wprowadź nazwę miasta',
        DuelSafer_input_alliance: 'Wprowadź nazwę sojuszu',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Nie znaleziono miast',
        DuelSafer_not_found_ally: 'Nie znaleziono sjuszu',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Te miasto/sojusz jest już dopisane do listy',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Dodaj',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Domyślny',
        beeper_sound: 'Rodzaj dźwięku',
        listen: 'Słuchaj',
        HealthTL_to: 'Czas do uzyskania pełnego punkty życia',
        EnergyTL_to: 'Czas pozostały do pełnego energia',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Regeneracja na godzinę',
        Reg_missing: 'Missing',
      },
      hu: {
        language: 'Hungarian (Magyar)',
        ApiGui: 'Ez a szkript tartalmaz néhány nagyszerű tulajdonsága, amely javítja a játékélményt, a nyugati.',
        contact: 'Érintkezés',
        opentab: 'Nyissa meg a %1 fülre',
        general: 'Általános',
        main: 'Keretprogram beállítások',
        chooseLang: 'Megváltoztathatja a nyelvet (Language)',
        saved: 'Beállítások mentve.',
        need_reload: 'A változtatáshoz újra kell tölteni az oldalt! Mehet most?',
        patches_title: 'Kényelmi funkciók beállításai',
        enable_select: 'Szöveg kijelölés/másolás engedélyezése',
        enable_lastpage: 'Engedélyezze utolsó oldal mod',
        enable_timelefters: 'Engedélyezze a regenerációs időzítő',
        enable_beeper: 'Figyelmeztető hangjelzés engedélyezése',
        enable_beeper_title: 'Bekapcsolásával fgyelmeztető hangjelzést kapsz, ha neved <i>elhangzik</i> a fő chat-ablakban vagy privát üzeneted ( <i>suttogás</i> ) érkezik, továbbá egy hangerőszabályzó / némító gomb is megjelenik a képernyőn a Chat közelében.<br><br><b>ICQ</b>: az eredetileg izraeli fejlesztésű csevegőprogramból kinyert hang. ( az ICQ 2010 óta a <i>Mail.ru</i> tulajdona ),<br><b>QIP</b>: a <i>Quiet Internet Pager</i> nevű, főleg orosz nyelvterületen ismert és használt csevegőprogramból ( készítette: Ilgam Zyulkorneev ) kinyert hang,<br><b>VK</b>: a <i>VKontakt</i> elnevezésű, főleg orosz nyelvterületen és izraelben ismert és kedvelt facebook-klónból kinyert hang.',
        enable_town_button: '"Városom" gomb mutatása',
        enable_town_title: 'Engedélyezésével egy új gomb jelenik meg a jobb oldali Menüsoron, mellyel gyorsan hozzáférhetsz városod épületeihez, egy kattintással a legközelebbi Szövetséges Erődbe mehetsz aludni, stb.',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Ugrás az utolsó oldalra',
        wir: 'WIR',
        wir_enabler: 'Enable WIR',
        wir_enabler_title: '(West Inventory Reducer)</i>: Ezzel a funkcióval beállíthatod, hogy hány elem jelenjen meg soronként a Felszerelések ablakban.<br><br><b>TIPP:</b> A funkció bekapcsolásával nem csak a soronkénti darabszámot állíthatod be, hanem kényelmesebb gördítősávra cserélheted a Felszerelések ablak alján látható számozott, oldal-lapozó funkciót is.',
        wir_on_line: 'darab soronként',
        wir_on_one_line: 'Megjelenített darabszám',
        ext: 'Close inventory and docked window',
        ext_enabler: 'Extra close button',
        ext_enabler_title: 'Additional button that closes inventory and docked window',
        open: 'Open ',
        bank: 'Bank',
        saloon: 'Saját Kocsma',
        sleep: 'Sleep',
        sleep_in_hotel: 'Sleep in your hotel',
        forum: 'Fórum',
        market: 'Piac',
        pray: 'Pray',
        pray_in_church: 'Start to pray',
        sheriff: 'Sheriff',
        cityhall: 'Town hall',
        dont_have_hotel: 'Nincs Hoteled!',
        craft: 'Gyártás',
        DuelSafer_found: 'Párbaj-segéd',
        DuelSafer_no_town: 'This player is without a town!',
        DuelSafer_friend_text: 'Ez a Játékos a Szövetségesed! Mindenképpen megtámadod?',
        DuelSafer_from_town: 'Város',
        DuelSafer_from_alliance: 'Szövetség',
        DuelSafer_from_player: 'Player',
        DuelSafer_friend: 'Szövetséges megtámadása',
        DuelSafer_input_town: 'Írd be a Város nevét',
        DuelSafer_input_alliance: 'Írd be a Szövetség nevét',
        DuelSafer_input_player: 'Add a new player',
        DuelSafer_not_found_town: 'Ez a Város nem található',
        DuelSafer_not_found_ally: 'Ez a Szövetség nem található',
        DuelSafer_not_found_player: 'Can\'t find the player',
        DuelSafer_already_have: 'Ez a Város/Szövetség már szerepel a listán',
        open_town: 'Open town window',
        open_ally: 'Open alliance window',
        open_player: 'Open player profile',
        help_icon: 'Add players, towns or alliances to the Duelsafer list to get a confirmation pop-up before duelling them.',
        add: 'Hozzáadás',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Remove town',
        delete_ally: 'Remove alliance',
        delete_player: 'Remove player',
        default_sound: 'Alapbeállítás',
        beeper_sound: 'Figyelmeztető hang',
        listen: 'Lejátszás',
        HealthTL_to: 'Ennyi idő kell még mire felépülsz',
        EnergyTL_to: 'Hátralévő idő az összes energia',
        HealthNext: 'Next health point in',
        EnergyNext: 'Next energy point in',
        Reg_perH: 'Regeneráció óránként',
        Reg_missing: 'Missing',
      },
      cs: {
        language: 'Czech (čeština)',
        ApiGui: 'Tento script obsahuje pár skvělých funkcí, které zlepší tvůj herní zážitek na The West.',
        contact: 'Kontakt',
        opentab: 'Otevři %1',
        general: 'Všeobecní',
        main: 'Hlavní',
        chooseLang: 'Vyber jazyk (Language)',
        saved: 'Nastavení byla uložena.',
        need_reload: 'Stránka bude znovu načtena, ok?',
        patches_title: 'Modifikace/Patche',
        enable_select: 'Povolit volitelný text',
        enable_lastpage: 'Povolit režim poslední stránky',
        enable_timelefters: 'Povolit ukazovatele času regenerace',
        enable_beeper: 'Povolit Beeper',
        enable_beeper_title: '<b>Beeper</b> - Zvukové upozornení na novou privátní zprávu v chatu (šepot)',
        enable_town_button: 'Povolit ExTB',
        enable_town_title: '<b>ExtTB</b><i>(Rozšíření pro Tlačidlo města)</i>:<br>Rozšířené tlačítko města ve spodní liště.',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Přejít na poslední stránku tématu',
        wir: 'WIR',
        wir_enabler: 'Povolit WIR',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Změní velikost položek inventáře a přidá posouvání.',
        wir_on_line: 'v jedné řadě',
        wir_on_one_line: 'Počet itemů v jedné řadě',
        ext: 'Zavři inventář a ukotvené okno',
        ext_enabler: 'Extra tlačidlo na zavíraní',
        ext_enabler_title: 'Další tlačidlo, které zavírá inventář a ukotvěné okná',
        open: 'Otevři ',
        bank: 'Banka',
        saloon: 'Saloon',
        sleep: 'Spánek',
        sleep_in_hotel: 'Spánek ve svím hotelu',
        forum: 'Městské fórum',
        market: 'Trh',
        pray: 'Modlení',
        pray_in_church: 'Začni se modlit',
        sheriff: 'Šerif',
        cityhall: 'Radnica',
        dont_have_hotel: 'Nemáš hotel!',
        craft: 'Vyrábět',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'Tenhle hráč je bez města!',
        DuelSafer_friend_text: 'Opravdu chceš zaútočit na svého přítele?',
        DuelSafer_from_town: 'Města',
        DuelSafer_from_alliance: 'Aliance',
        DuelSafer_from_player: 'Hráč',
        DuelSafer_friend: 'Útok na přítele',
        DuelSafer_input_town: 'Přidat nové město',
        DuelSafer_input_alliance: 'Přidat novou alianci',
        DuelSafer_input_player: 'Přidat nového hráče',
        DuelSafer_not_found_town: 'Nemůžu najít tohle město',
        DuelSafer_not_found_ally: 'Nemůžu najít tuhle alianci',
        DuelSafer_not_found_player: 'Nemůžu najít tohohle hráče',
        DuelSafer_already_have: 'Již v seznamu',
        open_town: 'Otevři okno města',
        open_ally: 'Otevři okno aliance',
        open_player: 'Otevři profil hráče',
        help_icon: 'Přidej hráče, města nebo aliance do Duelsafer seznamu, aby si před soubojem dostal potvrdzovací pop-up okno.',
        add: 'Přidat',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Odstranit město',
        delete_ally: 'Odstranit alianci',
        delete_player: 'Odstranit hráče',
        default_sound: 'Základní zvuk',
        beeper_sound: 'Vyber soubor',
        listen: 'Poslechnout si',
        HealthTL_to: 'Čas do úplného doplnení zdraví',
        EnergyTL_to: 'Čas do úplného doplnení energie',
        HealthNext: 'Další bod zdraví za',
        EnergyNext: 'Ďalší bod energie za',
        Reg_perH: 'Regenerace za hodinu',
        Reg_missing: 'Chybí',
      },
      sk: {
        language: 'Slovak (slovenčina)',
        ApiGui: 'Tento script obsahuje pár skvelých funkcií, ktoré ti spríjemnia hranie The West.',
        contact: 'Koktakt',
        opentab: 'Otvor %1',
        general: 'Všeobecné',
        main: 'Hlavné',
        chooseLang: 'Vyber jazyk (Language)',
        saved: 'Nastavenia boli uložené.',
        need_reload: 'Stránka bude znovu načítaná, ok?',
        patches_title: 'Modifikácie/Patche',
        enable_select: 'Povoliť voliteľný text',
        enable_lastpage: 'Povoliť režim poslednej stránky',
        enable_timelefters: 'Povoliť ukazovatele času regenerácie',
        enable_beeper: 'Povoliť Beeper',
        enable_beeper_title: '<b>Beeper</b> - Zvukové upozornenie na novú privátnu správu (šepot)',
        enable_town_button: 'Povoliť ExTB',
        enable_town_title: '<b>ExtTB</b><i>(Rozšírenie pre Tlačidlo mesta)</i>:<br>Rozšírené tlačidlo mesta v spodnej lište.',
        enable_menutop: 'Keep the menu and scripts bar always on top',
        to_last_page: 'Prejsť na poslednú stránku témy',
        wir: 'WIR',
        wir_enabler: 'Povoliť WIR',
        wir_enabler_title: '(West Inventory Reducer)</i>:<br>Upraví veľkosť položiek v inventári a pridá posúvanie.',
        wir_on_line: 'v jednej rade',
        wir_on_one_line: 'Počet itemov v jednej rade',
        ext: 'Zatvor inventor a ukotvené okno',
        ext_enabler: 'Extra tlačidlo na zatváranie',
        ext_enabler_title: 'Ďalšie tlačidlo, ktoré zatvára inventár a ukotvené okná',
        open: 'Otvor ',
        bank: 'Banka',
        saloon: 'Saloon',
        sleep: 'Spánok',
        sleep_in_hotel: 'Spánok vo svojom hotely',
        forum: 'Mestské fórum',
        market: 'Trh',
        pray: 'Modlenie',
        pray_in_church: 'Začni sa modliť',
        sheriff: 'Šerif',
        cityhall: 'Radnica',
        dont_have_hotel: 'Nemáš hotel!',
        craft: 'Výroba',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'Tento hráč je bez mesta!',
        DuelSafer_friend_text: 'Naozaj chceš zaútočiť na svojho priateľa?',
        DuelSafer_from_town: 'Mesto',
        DuelSafer_from_alliance: 'Aliancia',
        DuelSafer_from_player: 'Hráč',
        DuelSafer_friend: 'Útok na priateľa',
        DuelSafer_input_town: 'Pridať nové mesto',
        DuelSafer_input_alliance: 'Pridať novú alianciu',
        DuelSafer_input_player: 'Pridať nového hráča',
        DuelSafer_not_found_town: 'Nemôžem nájsť toto mesto',
        DuelSafer_not_found_ally: 'Nemôžem nájsť túto alianciu',
        DuelSafer_not_found_player: 'Nemôžem nájsť tohto hráča',
        DuelSafer_already_have: 'Už je v zozname',
        open_town: 'Otvor okno mesta',
        open_ally: 'Otvor okno aliancie',
        open_player: 'Otvor profil hráča',
        help_icon: 'Pridaj hráčov, mestá alebo aliancie do Duelsafer zoznamu, aby si pred súbojom dostal pozvrdzovacie pop-up okno.',
        add: 'Pridať',
        addfriends: 'Add all your friends',
        friendlist: 'Friend list',
        delete_town: 'Odstrániť mesto',
        delete_ally: 'Odstrániť alianciu',
        delete_player: 'Odstrániť hráča',
        default_sound: 'Základný zvuk',
        beeper_sound: 'vyber súbor',
        listen: 'Vypočuť si',
        HealthTL_to: 'Čas do úplného doplnenia zdravia',
        EnergyTL_to: 'Čas do úplného doplnenia energie',
        HealthNext: 'Ďalší bod zdravia za',
        EnergyNext: 'Ďalší bod energie za',
        Reg_perH: 'Regenerácia za hodinu',
        Reg_missing: 'Chýba',
      },
      el: {
        language: 'Greek (ελληνικά)',
        ApiGui: 'Αυτό το script περιέχει μερικά χρήσιμα χαρακτηριστικά γνωρίσματα<br>που βελτιώνουν την εμπειρία του παιχνιδιού σας στο The West.',
        contact: 'Επικοινωνία',
        opentab: 'Ανοίξτε την καρτέλα: %1',
        general: 'Ρυθμίσεις',
        main: 'Αρχικές επιλογές',
        chooseLang: 'Επιλογή Γλώσσας',
        saved: 'Αποθηκεύτηκε με επιτυχία',
        need_reload: 'Η σελίδα θα φορτωθεί εκ νέου, εντάξει;',
        patches_title: 'Τροποποιήσεις / Επεκτάσεις',
        enable_select: 'Ενεργοποίηση: Μαρκάρισμα κειμένου',
        enable_lastpage: 'Enable last page mod',
        enable_timelefters: 'Ενεργοποίηση: Χρόνων Αναγέννησης',
        enable_beeper: 'Ενεργοποίηση: Beeper',
        enable_beeper_title: '<b> Beeper </b> -<u><i> Ειδοποίηση ήχου σε νέο ιδιωτικό μήνυμα συνομιλίας</i></u><br><br>Με την ενεργοποίηση, κάθε φορά που λαμβάνετε ένα νέο ιδιωτικό μήνυμα<br><b>(Ψίθυρος)</b> θα λαμβάνετε ένα ειδικό ηχητικό σήμα. Μπορείτε να επιλέξετε<br>τον ήχο που σας αρέσει στην λίστα που σας έχουμε ετοιμάσει παρακάτω<br>ή να προσθέσε τον δικό σας μοναδικό ήχο.',
        enable_town_button: 'Ενεργοποίηση: ΕγΚΠ',
        enable_town_title: '<b>ΕγΚΠ</b><i> - <u>Επέκταση για Κουμπί Πόλης</u></i>:<br><br>Αυτό το χαρακτηριστικό σας εμφανίζει μια λίστα<br>από διάφορες χρήσιμες λειτουργείες, στο κουμπί<br>"Πόλη" της γραμμής μενού, τις οποίες θα μπορείτε<br>να χρησιμοποιήσετε με το πάτημα ενός κουμπιού.',
        enable_menutop: 'Κρατήστε τη γραμμή scripts και τη γραμμή μενού πάντα στην κορυφή',
        to_last_page: 'Go to last page of the topic',
        wir: 'WIR ',
        wir_enabler: 'Ενεργοποίηση: WIR',
        wir_enabler_title: '- <u>(West Inventory Reducer)</u></i><br><br>Αυτό το χαρακτηριστικό σας επιτρέπει να ορίσετε τον αριθμό<br>των στοιχείων ανά γραμμή στο παράθυρο "Αποθέματα".<br><br><b>ΣΥΜΒΟΥΛΗ:</b> Ενεργοποιώντας αυτή τη λειτουργία, μπορείτε<br>όχι μόνο να ορίσετε τον αριθμό στοιχείων ανά γραμμή<br>αλλά και να μεταβείτε σε μια πιο βολική γραμμή κύλισης,<br>αντί να έχετε την μπάρα με τις σελίδες στο κάτω μέρος<br>του παραθύρου των Αποθεμάτων σας.',
        wir_on_line: 'σε μια σειρά',
        wir_on_one_line: 'Αριθμός στοιχείων ανά γραμμή',
        ext: 'Κλείσιμο μόνο των παραθύρων αποθεμάτων σας',
        ext_enabler: 'Επιπλέον κουμπί κλεισίματος',
        ext_enabler_title: 'Πρόσθετο κουμπί που κλείνει μόνο τα παράθυρα αποθεμάτων σας',
        open: 'Ανοίξτε: ',
        bank: 'Τράπεζα',
        saloon: 'Σαλούν',
        sleep: 'Ύπνος',
        sleep_in_hotel: 'Ύπνος σε δωμάτιο ξενοδοχείου',
        forum: 'Φόρουμ Πόλης',
        market: 'Αγορά',
        pray: 'Προσευχή',
        pray_in_church: 'Ξεκινήστε να προσεύχεστε',
        sheriff: 'Σερίφης',
        cityhall: 'Δημαρχείο Πόλης',
        dont_have_hotel: 'Δεν έχετε ξενοδοχείο',
        craft: 'Σύνθεση',
        DuelSafer_found: 'DuelSafer',
        DuelSafer_no_town: 'Αυτός ο παίκτης είναι εκτός πόλης',
        DuelSafer_friend_text: 'Θέλετε να μονομαχήσετε τον φίλο σας;',
        DuelSafer_from_town: 'Πόλη',
        DuelSafer_from_alliance: 'Συμμαχία',
        DuelSafer_from_player: 'Παίκτης',
        DuelSafer_friend: 'Επίθεση σε φίλο',
        DuelSafer_input_town: 'Προσθέστε Πόλη',
        DuelSafer_input_alliance: 'Προσθέστε Συμμαχία',
        DuelSafer_input_player: 'Προσθέστε Παίκτη',
        DuelSafer_not_found_town: 'Η πόλη δεν βρέθηκε',
        DuelSafer_not_found_ally: 'Η συμμαχία δεν βρέθηκε',
        DuelSafer_not_found_player: 'Ο παίκτης δεν βρέθηκε',
        DuelSafer_already_have: 'Ήδη στην λίστα',
        open_town: 'Ανοίξτε την Πόλη σε νέο παράθυρο',
        open_ally: 'Ανοίξτε την Συμμαχία σε νέο παράθυρο',
        open_player: 'Ανοίξτε το προφίλ του παίχτη',
        help_icon: 'Προσθέστε παίκτες, πόλεις ή συμμαχίες στην λίστα της Ασφαλούς Μονομαχίας,<br>για να εμφανιστεί ένα μήνυμα επιβεβαίωσης όταν τύχει να τους μονομαχήσετε.',
        add: 'Προσθήκη',
        addfriends: 'Προσθήκη όλων των φίλων σας',
        friendlist: 'Λίστα Φίλων',
        delete_town: 'Αφαιρέστε την Πόλη',
        delete_ally: 'Αφαιρέστε την Συμμαχία',
        delete_player: 'Αφαιρέστε τον Παίκτη',
        default_sound: 'Προεπιλεγμένος ήχος',
        beeper_sound: 'Επιλέξτε αρχείο',
        listen: 'Ακούστε',
        HealthTL_to: 'Χρόνος για την πλήρη υγεία',
        EnergyTL_to: 'Χρόνος για την πλήρη ενέργεια',
        HealthNext: 'Επόμενος πόντος υγείας σε',
        EnergyNext: 'Επόμενος πόντος ενέργειας σε',
        Reg_perH: 'Αναγέννηση ανά ώρα',
        Reg_missing: 'Σας λείπει συνολικά το',
      },
    },
    updateLang: function () {
      var lgs = TWS.langs,
      lg = [localStorage.getItem('scriptsLang'), Game.locale.substr(0, 2)];
      TWS.lang = lgs[lg[0]] ? lg[0] : lgs[lg[1]] ? lg[1] : 'en';
      TWSlang = lgs[TWS.lang];
    },
    Settings: function () {
      var n = 'tw_merged_sweets_settings',
      t = JSON.parse(localStorage.getItem(n)) || {};
      t = $.extend({
        enableKOTime: true,
        enableCraftWin: true,
        enableTownButton: true,
      }, t);
      return {
        get: function (e) {
          return t[e] === undefined ? null : t[e];
        },
        set: function (e, r) {
          if (t[e] === undefined)
            return false;
          t[e] = r;
          localStorage.setItem(n, JSON.stringify(t));
          new UserMessage(TWSlang.saved, 'success').show();
          return true;
        },
        reg: function (e, r) {
          if (t[e])
            return;
          t[e] = r;
          localStorage.setItem(n, JSON.stringify(t));
        }
      };
    }
    (),
  };
  TWS.updateLang();
  var fmfb = function () {
    var fms = [['de', 'deutsches Forum'], ['net', 'English forum'], ['pl', 'forum polski'], ['es', 'foro español'], ['ru', 'Русский форум'], ['fr', 'forum français'], ['it', 'forum italiano'], ['net', 'beta forum', 'beta.']],
    add = '<h1>' + TWSlang.contact + '</h1><ul style="margin-left:15px;line-height:18px;"><li>Send a message to <a target=\'_blank\' href="//www.the-west.de/?ref=west_invite_linkrl&player_id=647936&world_id=13&hash=7dda">Tom Robert on German world Arizona</a></li><li>Message me on one of these The West Forum:<br>';
    for (var l of fms)
      add += '/ <a target=\'_blank\' href="https://forum.' + (l[2] || '') + 'the-west.' + l[0] + '/index.php?conversations/add&to=Tom Robert">' + l[1] + '</a> ' + (l[0] == 'es' ? '<br>' : '');
    return add + '/<br>I will get an e-mail when you sent me the message <img src="images/chat/emoticons/smile.png"></li></ul>';
  };
  TheWestApi.register('TWS', TWS.name, TWS.minGame, TWS.maxGame, TWS.author, TWS.website).setGui('<br><i>Language: </i>' + TWSlang.language + '<br><br>' + TWSlang.ApiGui + '<br><br><i>' + TWS.name + ' v' + TWS.version + '</i><br><br>' + fmfb());
  TWS.GUIControl = new function () {
    var t = {},
    n = [],
    r,
    s,
    i = false;
    function o() {
      r.getContentPane().innerHTML = '';
      r.fireEvent(TWE('WINDOW_DESTROY'), window);
      $(r.divMain).remove();
      i = false;
      s = null;
    }
    function iWin(tid) {
      if (!t[tid])
        tid = 'general';
      if (tid == s && i) {
        return;
      }
      if (s)
        t[s].onLeave(r);
      s = tid;
      $.each(t, function (e, g) {
        var cont = g.content;
        if (e == tid) {
          r.setSize.apply(r, g.size);
          r.setTitle((g.tabName || g.name) + g.version);
          g.onOpen(r);
          cont.fadeIn('fast');
          return;
        }
        cont.hide();
      });
      r.activateTab(tid);
    }
    function a() {
      r = wman.open('tws', TWS.name, 'noreload').setMiniTitle('TWS');
      r.destroy = o;
      i = true;
      $.each(t, function (e, h) {
        r.addTab(h.name, e, function () {
          iWin(e);
        });
        r.appendToContentPane(h.content);
      });
      for (var num = 0, b = n.length; num < b; num++) {
        var f = n[num];
        if (f[2])
          $(f[2], t[f[0]].content).append(f[1]);
        else
          t[f[0]].content.append(f[1]);
      }
    }
    this.open = function (t) {
      var win = $('.tws');
      if (win.length) {
        if (win.is(':hidden'))
          wman.reopen('tws');
        iWin(t);
        return;
      }
      a();
      iWin(t);
    };
    this.addTab = function (tab) {
      var r = tab.tid || tab.name.toLowerCase().replace(/ /g, ''),
      tb = t[r] = {};
      tb.content = $('<div>').append(tab.content);
      tb.onOpen = typeof tab.onOpen === "function" ? tab.onOpen : function () {};
      tb.onLeave = typeof tab.onLeave === "function" ? tab.onLeave : function () {};
      tb.size = tab.size || [748, 471];
      tb.name = tab.name;
      tb.tabName = tab.tabName || tab.name;
      tb.version = tab.version && ' v' + tab.version || '';
      if (tab.menu_shortcut !== false)
        this.Rightside.regTab(tb.name, r);
    };
    this.addTo = function (id, txt, j) {
      if (arguments.length < 2 || !t[id])
        return;
      n.push([id, typeof txt == 'string' ? $(txt) : txt, j]);
    };
  }
  ();
  TWS.GUIControl.Rightside = new function () {
    function r() {
      t.append(n);
      i();
      o();
    }
    function i() {
      selectBox.show();
      $selectBox.css({
        right: 30,
        top: 3
      });
      $el.append($selectBox);
      $selectBox.hide();
    }
    function o() {
      $el.on('mouseover', function () {
        $el.css('background-position', '-25px 0');
        $selectBox.show();
      });
      $el.on('mouseleave', function () {
        $el.css('background-position', '0 0');
        $selectBox.hide();
      });
    }
    var t = $('#ui_menubar'),
    n = $('<div class="ui_menucontainer"><div id="tws_menu_icon" class="menulink"></div><div class="menucontainer_bottom"></div></div>'),
    $el = $('#tws_menu_icon', n),
    selectBox = new west.gui.Selectbox().addListener(function (e) {
      TWS.GUIControl.open(e);
    }),
    $selectBox = selectBox.getMainDiv();
    r();
    this.regTab = function (e, t) {
      selectBox.addItem(t, e, s(TWSlang.opentab, e));
      i();
    };
    this.addIcon = function (n, r) {
      if (n === undefined || r === undefined)
        return;
      var i = $('<div id="tws_' + n + '">').click(r),
      s = $('<div class="ui_menucontainer"><div class="menucontainer_bottom"></div></div>');
      t.append(s.append(i));
    };
  }
  ();
  TWS.GUIControl.Style = new function () {
    var e = document.getElementsByTagName('head')[0],
    t = document.createElement('style'),
    n = '#tws_menu_icon { width: 25px; height: 25px; background: url(' + TWS.Images('sweetsMenu') + '); background-position: 0 0;  }\n' + '#tws_menu_icon .tw2gui_selectbox .arrow { width: 12px; height: 22px; background-position: -12px 0px; background-image: url(images/tw2gui/selectbox_arrows.png); right: -10px; left: auto; top: auto; }\n';
    t.innerHTML = n;
    e.appendChild(t);
    this.append = function (r) {
      n += '\n' + r.replace(/  /g, '');
      e.removeChild(t);
      t = document.createElement('style');
      t.innerHTML = n;
      e.appendChild(t);
    };
  }
  ();
  TWS.Module = function () {
    function t(e, u, n, i) {
      if (arguments.length < 2)
        return;
      if (u)
        for (var s in u)
          this[s] = u[s];
      if (this.init)
        this.init();
      if (arguments[2] || e.type) {
        n = n || {};
        r.call(this, e, n);
      }
      if (e.version)
        this.version = e.version;
      if (i)
        TWS.GUIControl.Style.append(i);
      var o = arguments;
      this._getConstructorArgs = function (e) {
        return o[e];
      };
    }
    function n(e, u, r, i) {
      return new t(e, u, r, i);
    }
    function r(t, v) {
      function i() {
        var control = v.control ? 'control' : v.init ? 'init' : ''; //old deluxejobs
        if (control) {
          var e = v[control](this);
          if (typeof e == 'object')
            v.DOM = e;
        }
      }
      switch (t.type) {
      case n.TAB:
        v.DOM = $('<div id="tws_' + (t.tid ? t.tid : t.name.toLowerCase().replace(/ /g, '')) + '">');
        i.call(this);
        t.content = v.DOM;
        TWS.GUIControl.addTab(t);
        break;
      case n.MOD:
        i.call(this);
        TWS.GUIControl.General.createBlock(t.name, v.DOM, t.version);
        break;
      case n.PATCH:
        i.call(this);
        TWS.GUIControl.General.appendToPatches(v.DOM);
        break;
      }
    }
    t.prototype = {
      getGUI: function () {
        if (this._getConstructorArgs(2))
          return this._getConstructorArgs(2);
      },
      getCSS: function () {
        if (this._getConstructorArgs(3))
          return this._getConstructorArgs(3);
      },
      open: function (e) {
        var t = this._getConstructorArgs(0);
        if (t.type == TWS.Module.TAB)
          TWS.GUIControl.open(t.tid ? t.tid : t.name.toLowerCase().replace(/ /g, ''));
        if (this.parseOpenData)
          this.parseOpenData(e);
      }
    };
    t.prototype.constructor = t;
    n.TAB = 'tab';
    n.PATCH = 'patch';
    n.MOD = 'modification';
    return n;
  }
  ();
  var mod = TWS.Module;
  TWS.GUIControl.General = mod({
    name: TWSlang.general,
    tabName: TWS.name,
    version: TWS.version,
    type: mod.TAB,
    tid: 'general'
  }, {
    append: function (e) {
      this.getGUI().scrollpane.appendContent(e);
    },
    createBlock: function (t, n, r) {
      r = r && ' v' + r || '';
      if (arguments.length < 2)
        return;
      var i = $('<div class="tws_block"><b>' + t + r + '</b><hr></div>').append(n);
      this.append(i);
    },
    appendToPatches: function (e) {
      this.getGUI().modifications.append(e);
    }
  }, {
    main_block: $('<div class="tws_block"><b>' + TWSlang.main + '</b><hr></div>'),
    modifications: $('<div class="tws_block"><b>' + TWSlang.patches_title + '</b><hr></div>'),
    scrollpane: null,
    control: function () {
      this.scrollpane = new west.gui.Scrollpane(null, true);
      this.main_block.append('<p>' + TWSlang.chooseLang + ':</p>').append(this.getLangBar());
      this.scrollpane.appendContent(this.main_block).appendContent(this.modifications);
      return $(this.scrollpane.getMainDiv()).attr('id', 'tws_general');
    },
    getLangBar: function () {
      var langBox = new west.gui.Combobox();
      $.each(TWS.langs, function (a, b) {
        langBox.addItem(a, b.language);
      });
      langBox.select(TWS.lang).addListener(function (e) {
        if (e != TWS.lang) {
          localStorage.setItem('scriptsLang', e);
          TWS.updateLang();
          if (confirm(TWSlang.need_reload))
            location.reload(true);
        }
      });
      return langBox.getMainDiv();
    }
  }, '#tws_general { width: 100%; height: 355px; margin-top: 10px;}\n' + '#tws_general .tw2gui_scrollpane_clipper_contentpane { height: 390px; }\n' + '#tws_general .tws_block { width: 45%; float: left; }\n' + '#tws_general .tw2gui_checkbox { float: left; clear: left; margin-bottom: 5px; }\n' + '#tws_general .tws_block:nth-child(even) { float: right; }\n' + '#tws_copyright { position:absolute; bottom: 0px; right:5px; font-size:10px; }\n' + '.tws_block { margin: 5px; border: 1px solid #000000; -moz-border-radius: 10px; -webkit-border-radius: 10px; -khtml-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; background: rgba(175, 146, 94, 0.5); padding: 10px; }\n' + '.tws_block hr { color: #000; background-color: #000; border: 0px none; height: 1px; box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.6); margin: 5px 0px 5px 0px; }\n' + '.tws_help_icon { background: url(images/tw2gui/iconset.png); width: 16px; height: 16px; position: absolute; background-position: -67px -64px; cursor: help; }\n' + '#tws_all .tw2gui_checkbox { float: left; clear: left; margin-top: 5px; }');
  TWS.ExtTB = mod({
    type: mod.PATCH,
    version: 1.3,
    name: 'ExtTB'
  }, {
    selectBox: null,
    button: null,
    items: null,
    enabled: null,
    init: function () {
      var that = this;
      this.addItems();
      this.selectBox = new west.gui.Selectbox().setWidth(100).addListener(this.listener);
      for (var t in this.items)
        this.selectBox.addItem(t, this.items[t][0], this.items[t][1]);
      this.selectBox.divWrap.remove();
      this.selectBox.getMainDiv().hide();
      var val = setInterval(function () {
        if ($('.button.city').length > 0) {
          clearInterval(val);
          that.selectBox.show();
          $('div.tw2gui_modal_fixed').remove();
          that.button = $('.button.city').append(that.selectBox.getMainDiv());
          if (TWS.Settings.get('enableTownButton'))
            that.on();
        }
      }, 2000);
    },
    editCityButton: function (t, n, r) {
      if (r === undefined)
        r = TWS.ExtTB;
      if (!n.town_id) {
        r.off();
        $('.city.dock-image').off('click').on('click', function () {
          west.window.Blackboard.toggleOpen();
        });
      } else {
        $('.city.dock-image').off('click').on('click', function () {
          TownWindow.toggleOpen(n.x, n.y);
          r.selectBox.getMainDiv().hide();
        });
      }
      r.button.off('click');
    },
    addItems: function () {
      var e = Character.homeTown,
      n = {};
      n.bank = [
        TWSlang.bank,
        TWSlang.open + TWSlang.bank,
        function () {
          BankWindow.open(e.town_id);
        }
      ];
      n.saloon = [
        TWSlang.saloon,
        TWSlang.open + TWSlang.saloon,
        function () {
          SaloonWindow.open(e.town_id);
        }
      ];
      n.sleep = [
        TWSlang.sleep,
        TWSlang.sleep_in_hotel,
        function () {
          TWS.ExtTB.sleep(e.town_id);
        }
      ];
      n.forum = [
        TWSlang.forum,
        TWSlang.open + TWSlang.forum,
        function () {
          ForumWindow.open();
        }
      ];
      n.market = [
        TWSlang.market,
        TWSlang.open + TWSlang.market,
        function () {
          Ajax.remoteCallMode('town', 'get_town', {
            x: e.x,
            y: e.y
          }, function (t) {
            if (t.error)
              return new UserMessage(t.error).show();
            MarketWindow.open(e.town_id, t.allBuildings.market.stage);
          });
        }
      ];
      n.pray = [
        TWSlang.pray,
        TWSlang.pray_in_church,
        function () {
          ChurchWindow.start(e.town_id);
        }
      ];
      n.sheriff = [
        TWSlang.sheriff,
        TWSlang.open + TWSlang.sheriff,
        function () {
          SheriffWindow.open(e.town_id);
        }
      ];
      n.hall = [
        TWSlang.cityhall,
        TWSlang.open + TWSlang.cityhall,
        function () {
          CityhallWindow.open(e.town_id);
        }
      ];
      this.items = n;
    },
    listener: function (e) {
      TWS.ExtTB.items[e][2]();
    },
    sleep: function (e) {
      var t;
      Ajax.remoteCallMode('building_hotel', 'get_data', {
        town_id: e
      }, function (n) {
        if (n.hotel_level > 0 && !n.error) {
          switch (n.hotel_level) {
          case 5:
            t = 'luxurious_apartment';
            break;
          case 4:
            t = 'apartment';
            break;
          case 3:
            t = 'hotel_room';
            break;
          case 2:
            t = 'bedroom';
            break;
          case 1:
            t = 'cubby';
            break;
          }
        } else {
          new UserMessage(TWSlang.dont_have_hotel, 'error').show();
          return;
        }
        TaskQueue.add(new TaskSleep(e, t));
      });
    },
    show: function () {
      TWS.ExtTB.selectBox.getMainDiv().show();
      var e = TWS.ExtTB.button.offset();
      TWS.ExtTB.selectBox.setPosition(e.left + 26, e.top + 5);
    },
    hide: function () {
      TWS.ExtTB.selectBox.getMainDiv().hide({
        duration: 100,
        always: true
      });
    },
    on: function () {
      var e = this;
      EventHandler.listen('char_home_town_changed', this.editCityButton, 'TWSExt');
      EventHandler.listen('character_level_up', function () {
        e.editCityButton(null, Character.homeTown, e);
      }, 'TWSExt');
      this.button.on('mouseenter', this.show);
      this.button.on('mouseleave', this.hide);
      this.editCityButton(null, Character.homeTown, this);
    },
    off: function () {
      EventHandler.unlistenByContext('char_home_town_changed', 'TWSExt');
      EventHandler.unlistenByContext('character_level_up', 'TWSExt');
      this.button.off('mouseenter', this.show);
      this.button.off('mouseleave', this.hide);
    },
  }, {
    control: function (t) {
      var div = $('<div>').append(new west.gui.Checkbox(TWSlang.enable_town_button, '', function (e) {
            TWS.Settings.set('enableTownButton', e);
            if (e)
              t.on();
            else
              t.off();
          }).setSelected(TWS.Settings.get('enableTownButton'), 1).setTitle(TWSlang.enable_town_title).getMainDiv());
      return div;
    }
  },
      '.city.button .tw2gui_selectbox { position: fixed; }\n' + '.city.button .arrow.bottom { width: 24px !important; height: 10px !important; background-position: -23px 14px !important; top: auto !important; background-image: url(images/tw2gui/selectbox_arrows.png) !important; }');
  TWS.SlySuite = mod({
    name: 'Script Suite',
    version: '1.8.1',
    type: mod.MOD
  }, {
    init: function () {
      this.KOTimer = {
        timeleft: 0,
        aliveAgain: 0,
        protectedUntil: 0,
        lastDied: Character.lastDied,
        firstrun: function () {
          this.started = 1;
          if ($('.game_notification_area').length > 0)
            $('.game_notification_area').append('<div style="position:relative;display:block;width:59px;height:59px;cursor:pointer;" class="brown" id="knockouttimer"><div id="timer"></div></div>');
          else {
            setTimeout(this.firstrun.bind(this), 3000);
            return console.log('KOTimer: Couldn\'t find the notification area, trying again soon...');
          }
          $('#knockouttimer').attr({
            'title': "Ready to duel<br>Protected until: 12/2/2015 23:50:12"
          });
          $('#knockouttimer #timer').css({
            'position': 'absolute',
            'bottom': '0px',
            'left': '0px',
            'right': '0px',
            'color': 'white',
            'text-align': 'center',
            'font-size': '11px',
            'height': '30px',
            'line-height': '30px'
          });
          this.getTimes();
          this.update(this);
        },
        getTimes: function () {
          var unix = Math.round(new Date().getTime() / 1000),
          duelString = '',
          protectionString = '';
          this.aliveAgain = Character.getMandatoryDuelProtection();
          this.protectedUntil = Character.getDuelProtection();
          var serverDateAlive = get_server_date_string(false, this.aliveAgain * 1000, true).split(' '),
          serverDateProtection = get_server_date_string(false, this.protectedUntil * 1000, true).split(' ');
          serverDateAlive = serverDateAlive[1] + ' ' + serverDateAlive[0];
          serverDateProtection = serverDateProtection[1] + ' ' + serverDateProtection[0];
          if (this.aliveAgain < unix) {
            duelString = "Ready to duel";
            if ($('#knockouttimer').hasClass('brown'))
              $('#knockouttimer').removeClass('brown hasMousePopup').addClass('green');
          } else {
            duelString = "Can duel again at: " + serverDateAlive;
            if ($('#knockouttimer').hasClass('green'))
              $('#knockouttimer').removeClass('green hasMousePopup').addClass('brown');
          }
          protectionString = "Protected until: " + serverDateProtection;
          $('#knockouttimer').attr({
            'title': duelString + "<br>" + protectionString
          });
        },
        doUpdate: function () {
          setTimeout(this.update.bind(this), 1000);
        },
        update: function () {
          if (!this.aliveAgain) {
            $('#knockouttimer').hide();
            return this.doUpdate();
          }
          var unix = Math.round(new Date().getTime() / 1000);
          if (this.protectedUntil != Character.getDuelProtection())
            this.getTimes();
          if (this.protectedUntil < unix) {
            $('#knockouttimer').hide();
            return this.doUpdate();
          } else
            $('#knockouttimer').show();
          var time;
          if (this.aliveAgain < unix) {
            time = this.protectedUntil;
            $('#knockouttimer').removeClass('brown').addClass('green');
          } else {
            time = this.aliveAgain;
            $('#knockouttimer').removeClass('green').addClass('brown');
          }
          var difference = time - unix,
          hours = Math.floor(difference / 60 / 60);
          difference -= hours * 60 * 60;
          var minutes = Math.floor(difference / 60);
          difference -= minutes * 60;
          var seconds = difference;
          if (seconds < 0)
            seconds = 0;
          $('#knockouttimer #timer').html(("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2));
          this.doUpdate();
        },
      };
      if (TWS.Settings.get('enableKOTime'))
        this.on('KO');
      this.CraftingWindow = {
        currentlySelected: false,
        knownRecipes: [],
        start: function () {
          this.started = 1;
          Crafting.addRecipe = this.addRecipe;
          Crafting.updateResources = this.updateResources;
          var cW = '.character-crafting';
          $('body').append('<style>#crafting_recipe_list { height:250px; top:43px;position:relative}' +
            cW + ' .recipe_title { background:none; cursor:pointer}' +
            cW + ' .recipe_title_inner { width:auto;margin-top:2px;}' +
            '#TWS_craft .easy { background:none; color:rgb(40,40,40);}' +
            '.easy .recipe_title:hover { background:rgba(55, 55, 55, 0.75); color:white;}' +
            '.easy.selected .recipe_title { background:rgba(55, 55, 55, 0.75); color:white;}' +
            '#TWS_craft .middle { background:none; color:rgb(0, 179, 3);}' +
            '.middle .recipe_title:hover { background:rgba(0, 118, 6, 0.75); color:white;}' +
            '.middle.selected .recipe_title { background:rgba(0, 118, 6, 0.75); color:white;}' +
            '#TWS_craft .hard { background:none; color:rgb(255, 88, 0);}' +
            '.hard .recipe_title:hover { background:rgba(221, 92, 0, 0.75); color:white;}' +
            '.hard.selected .recipe_title { background:rgba(221, 92, 0, 0.75); color:white;}' +
            cW + ' .recipe_name {width:auto;color:inherit;margin-top:0px;}' +
            cW + ' .recipe_collapse {color:inherit;font-size:inherit;}' +
            '.not_available .recipe_collapse {visibility:hidden;}' +
            cW + ' .recipe_craft {color:rgb(236, 25, 25);}' +
            '#crafting_requirements_display { position: relative; top: 43px; left: 61px;}' +
            '#crafting_requirements_display #craftbuttons {position:absolute; left:2px; bottom:-19px;}' +
            '#crafting_requirements_display #craftbuttons #minbutton {cursor:pointer;margin-left:5px;display:inline-block;background: url("/images/tw2gui/plusminus/minus_button.png");width: 12px;height: 12px;}' +
            '#crafting_requirements_display #craftbuttons #plusbutton {cursor:pointer;display:inline-block;background: url("/images/tw2gui/plusminus/plus_button.png");width: 12px;height: 12px;}' +
            '#crafting_requirements_display #craftbuttons > span {vertical-align:middle;}</style>');
        },
        selectRecipe: function (id) {
          $('#recipe' + this.currentlySelected + '.selected').removeClass('selected');
          $('.recipe_content').hide();
          $('#recipe' + id).addClass('selected');
          $('#recipe_content_' + id).show();
          this.currentlySelected = id;
          if (this.craftCount(id) > 0)
            $('#crafting_requirements_display #craftbuttons').show();
          else
            $('#crafting_requirements_display #craftbuttons').hide();
          $('#crafting_requirements_display #craftbuttons #craft_amount').val(1);
          $('#crafting_requirements_display #craftbuttons #craft_amount').trigger('change');
        },
        craftCount: function (id) {
          if (!id)
            return 0;
          var canCraft = 10000;
          for (var i in Crafting.recipes[id].resources) {
            if (!Crafting.recipes[id].resources.hasOwnProperty((i)))
              continue;
            var resourceItem = ItemManager.get(Crafting.recipes[id].resources[i].item),
            amountRequired = Crafting.recipes[id].resources[i].count,
            bag_count = Bag.getItemCount(resourceItem.item_id);
            canCraft = Math.min(Math.floor(bag_count / amountRequired), canCraft);
          }
          return canCraft;
        },
        updateResources: function () {
          for (var k in Crafting.recipes) {
            var mats_available = true,
            resourceItem,
            amountRequired;
            for (var i in Crafting.recipes[k].resources) {
              if (!Crafting.recipes[k].resources.hasOwnProperty((i)))
                continue;
              resourceItem = ItemManager.get(Crafting.recipes[k].resources[i].item);
              amountRequired = Crafting.recipes[k].resources[i].count;
              var bag_count = Bag.getItemCount(resourceItem.item_id);
              TWS.SlySuite.CraftingWindow.updateCount(k);
              if (bag_count < amountRequired)
                mats_available = false;
              window.CharacterWindow.window.$('#resources_' + k + '_' + resourceItem.item_id).html(
                new tw2widget.CraftingItem(resourceItem)
                .setRequired(bag_count, amountRequired)
                .getMainDiv());
            }
            window.CharacterWindow.window.$('#recipe_craft_' + Crafting.recipes[k].item_id).empty();
            if (Crafting.recipes[k].last_craft) {
              $('#recipe_craft_' + Crafting.recipes[k].item_id).append("<span cursor:default;'>" + Crafting.recipes[k].last_craft.formatDurationBuffWay() + "</span>");
            }
            if (mats_available)
              CharacterWindow.window.$('#recipe' + Crafting.recipes[k].item_id).removeClass("not_available");
            else
              CharacterWindow.window.$('#recipe' + Crafting.recipes[k].item_id).addClass("not_available");
          }
          if (TWS.SlySuite.CraftingWindow.craftCount(TWS.SlySuite.CraftingWindow.currentlySelected) > 0)
            $('#crafting_requirements_display #craftbuttons').show();
          else
            $('#crafting_requirements_display #craftbuttons').hide();
        },
        updateCount: function (id) {
          $('#recipe_count_' + id).html('[' + this.craftCount(id) + ']');
          $('#crafting_requirements_display #craftbuttons #craft_amount').trigger('change');
        },
        updateCraftAmount(action) {
          $('#crafting_requirements_display #craftbuttons #minbutton').css('opacity', '1');
          $('#crafting_requirements_display #craftbuttons #plusbutton').css('opacity', '1');
          if (action == 'plus') {
            $('#crafting_requirements_display #craftbuttons #craft_amount').val(parseInt($('#crafting_requirements_display #craftbuttons #craft_amount').val()) + 1);
            $('#crafting_requirements_display #craftbuttons #craft_amount').trigger('change');
          } else if (action == 'min') {
            $('#crafting_requirements_display #craftbuttons #craft_amount').val(parseInt($('#crafting_requirements_display #craftbuttons #craft_amount').val()) - 1);
            $('#crafting_requirements_display #craftbuttons #craft_amount').trigger('change');
          } else if (action == 'textbox') {
            if ($('#crafting_requirements_display #craftbuttons #craft_amount').val() >= this.craftCount(this.currentlySelected)) {
              $('#crafting_requirements_display #craftbuttons #plusbutton').css('opacity', '0.3');
              $('#crafting_requirements_display #craftbuttons #craft_amount').val(this.craftCount(this.currentlySelected));
            }
            if ($('#crafting_requirements_display #craftbuttons #craft_amount').val() <= 1) {
              $('#crafting_requirements_display #craftbuttons #minbutton').css('opacity', '0.3');
              $('#crafting_requirements_display #craftbuttons #craft_amount').val(1);
            }
          }
        },
        addRecipe: function (recipe) {
          if ($('#crafting_requirements_display').length < 1) {
            $('.character-crafting.crafting').append($("<div id='crafting_requirements_display' ><div id='craftbuttons'></div>"));
            $('#crafting_requirements_display #craftbuttons').append(new west.gui.Button(TWSlang.craft, function () {
                TWS.SlySuite.CraftingWindow.craftItem(TWS.SlySuite.CraftingWindow.currentlySelected);
              }).setMinWidth(150).getMainDiv());
            var textbox = new west.gui.Textfield('craft_amount').setSize(4).setValue(1).getMainDiv();
            $('#crafting_requirements_display #craftbuttons').append("<span id='minbutton'>", textbox, "<span id='plusbutton'>");
            //EventHandler.listen('inventory_changed',function(){});
            $('#crafting_requirements_display #craftbuttons #craft_amount').on('change', function () {
              TWS.SlySuite.CraftingWindow.updateCraftAmount('textbox');
            });
            $('#crafting_requirements_display #craftbuttons #minbutton').click(function () {
              TWS.SlySuite.CraftingWindow.updateCraftAmount('min');
            });
            $('#crafting_requirements_display #craftbuttons #plusbutton').click(function () {
              TWS.SlySuite.CraftingWindow.updateCraftAmount('plus');
            });
          }
          var time_last_craft = recipe.last_craft;
          recipe = ItemManager.get(recipe.item_id);
          Crafting.recipes[recipe.item_id] = recipe;
          Crafting.recipes[recipe.item_id].last_craft = time_last_craft;
          if (CharacterWindow.window && CharacterWindow.window.$('#crafting_recipe_list').length) {
            var recipe_div = $("<div class='" + Crafting.getRecipeColor(recipe) + "' id='recipe" + recipe.item_id + "' onclick='TWS.SlySuite.CraftingWindow.selectRecipe(" + recipe.item_id + ");'></div>"),
            recipe_title_inner_div = $("<div class='recipe_title_inner'>"),
            recipe_title_div = $("<div id='recipe_title_" + recipe.item_id + "' class='recipe_title'></div>"),
            recipe_collapse_div = $("<div id='recipe_count_" + recipe.item_id + "' class='recipe_collapse'></div>"),
            recipe_difficult_div = $("<div id='recipe_difficult_" + recipe.item_id + "' class='recipe_difficult " + Crafting.getRecipeColor(recipe) + "' title='" + Crafting.description.escapeHTML() + "'></div>"),
            recipe_name_div = $("<div id='recipe_name" + recipe.item_id + "' class='recipe_name shorten'>" + recipe.name + "</div>"),
            recipe_craft_div = $("<div id='recipe_craft_" + recipe.item_id + "' class='recipe_craft'></div>"),
            recipe_content_div = $("<div id='recipe_content_" + recipe.item_id + "' class='recipe_content'></div>").hide(),
            recipe_craftitem_div = $("<div id='recipe_craftitem_" + recipe.item_id + "' class='recipe_craftitem'></div>"),
            recipe_resources_content_div = $("<div id='recipe_resources_content_" + recipe.item_id + "' class='recipe_resources'></div>");
            TWS.SlySuite.CraftingWindow.knownRecipes[recipe.item_id] = recipe;
            recipe_title_inner_div.append(recipe_collapse_div, recipe_name_div);
            recipe_title_div.append(recipe_title_inner_div, recipe_craft_div).appendTo(recipe_div);
            var craftitem = $("<div id='craftitem_" + recipe.item_id + "' style='float:none;'>").append((new tw2widget.CraftingItem(ItemManager.get(recipe.craftitem))).getMainDiv());
            craftitem.appendTo(recipe_craftitem_div);
            var available = true,
            resourceItem,
            canCraft = 1000000;
            for (var i in recipe.resources) {
              if (!recipe.resources.hasOwnProperty(i))
                continue;
              resourceItem = ItemManager.get(recipe.resources[i].item);
              var resource = $("<div id='resources_" + recipe.item_id + "_" + resourceItem.item_id + "'></div>");
              var bag_count = Bag.getItemCount(resourceItem.item_id);
              canCraft = Math.min(Math.floor(bag_count / recipe.resources[i].count), canCraft);
              recipe_resources_content_div.append(resource.append(
                  new tw2widget.CraftingItem(resourceItem)
                  .setRequired(bag_count, recipe.resources[i].count)
                  .getMainDiv()));
              var hasItem = Bag.getItemByItemId(resourceItem.item_id);
              if (!hasItem || hasItem.getCount() < recipe.resources[i].count)
                available = false;
            }
            recipe_collapse_div.html('[' + canCraft + ']');
            if (!available)
              recipe_div.addClass("not_available");
            else if (time_last_craft)
              recipe_craft_div.append("<span style='cursor:default;'>" + time_last_craft.formatDurationBuffWay() + "</span>");
            recipe_content_div.append(recipe_craftitem_div, recipe_resources_content_div, $("<br>")).appendTo($('#crafting_requirements_display'));
            $('#crafting_recipe_list .tw2gui_scrollpane_clipper_contentpane').attr('id', 'TWS_craft').prepend(recipe_div);
            TWS.SlySuite.CraftingWindow.selectRecipe(recipe.item_id);
          }
        },
        craftItem: function (recipe_id) {
          Ajax.remoteCall('crafting', 'start_craft', {
            recipe_id: recipe_id,
            amount: $('#crafting_requirements_display #craftbuttons #craft_amount').val()
          }, function (resp) {
            if (resp.error)
              return new MessageError(resp.msg).show();
            var data = resp.msg;
            CharacterWindow.progressCrafting.setValue(data.profession_skill);
            Character.setProfessionSkill(data.profession_skill);
            CharacterWindow.window.$('#recipe' + recipe_id)
            .removeClass('middle hard easy')
            .addClass(Crafting.getRecipeColor(ItemManager.get(recipe_id)));
            EventHandler.signal("inventory_changed");
            Character.updateDailyTask('crafts', data.count);
            return new MessageSuccess(data.msg).show();
          });
        },
      };
      if (TWS.Settings.get('enableCraftWin'))
        this.on('Craft');
    },
    on: function (o) {
      switch (o) {
      case 'KO':
        if (!this.KOTimer.started)
          this.KOTimer.firstrun();
        break;
      case 'Craft':
        if (!this.CraftingWindow.started)
          this.CraftingWindow.start();
        break;
      }
    },
    off: function (o) {
      switch (o) {
      case 'KO':
        break;
      case 'Craft':
        break;
      }
    },
  }, {
    control: function (t) {
      var div = $('<div>').append(new west.gui.Checkbox('Knockout Timer', '', function (f) {
            TWS.Settings.set('enableKOTime', f);
            if (f)
              t.on('KO');
            else
              t.off('KO');
          }).setSelected(TWS.Settings.get('enableKOTime'), 1).getMainDiv()).append(new west.gui.Checkbox('Improved crafting window', '', function (h) {
            TWS.Settings.set('enableCraftWin', h);
            if (h)
              t.on('Craft');
            else
              t.off('Craft');
          }).setSelected(TWS.Settings.get('enableCraftWin'), 1).getMainDiv());
      return div;
    }
  }, '#knockouttimer.green {background-image: url(' + TWS.Images('knockout_green') + ');} #knockouttimer.brown {background-image: url(' + TWS.Images('knockout') + ');}');
});

  });
})();
