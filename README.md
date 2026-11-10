# The West – remeselná kalkulačka v hre

Používateľský skript pre Tampermonkey na českých a slovenských svetoch The West. Ikona **TW** vľavo od posilňovačov a prémia otvorí remeselnú kalkulačku priamo v hre. Kalkulačka beží lokálne v prehliadači. Google tabuľku potrebuje iba voliteľná časť **Tím** (spoločné batohy a ciele), a to len po kliknutí na jej tlačidlá.

## Čo kalkulačka vie

- Všetkých 23 výrobkov z remeselnej kalkulačky (kováč, poľný kuchár, mastičkár, sedlár) s kategóriami, receptami a medziproduktmi. Recepty sú pribalené v skripte, nič sa nesťahuje.
- Plán z jedného aj viacerých výrobkov s počtom kusov. Pri spoločnom pláne sa potreby surovín najprv sčítajú a obsah batohu sa odpočíta raz od súčtu, takže sa jedna zásoba nezapočíta dvakrát.
- Pri každej surovine: potrebné, v batohu, chýba, vhodná práca, isté kusy za hodinu, hodiny a energia (1 hodina = 12 energie).
- Počíta rovnako ako tabuľka: iba obyčajné 1-hodinové práce, iba isté kusy (pri šanci aspoň 100 %), pod 100 % priemer. Strieborné práce sa nepočítajú a mapa sa neprehľadáva.
- Prepínanie SK / CZ.
- **Tím:** hráči z tímu si pošlú obsah batohu, každý si zaškrtne, s kým chce batohy sčítať, a môžu mať spoločné ciele (napríklad 100 píl) s prehľadom, koľko kto má, koľko spolu a koľko chýba.

## Inštalácia

1. S nainštalovaným Tampermonkey otvor [inštalačný súbor](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js) a potvrď inštaláciu (alebo aktualizáciu na verziu 2.1.0). Pri aktualizácii môže Tampermonkey požiadať o povolenie pripojenia na script.google.com, to je pre časť Tím.
2. Obnov stránku herného sveta. Ak sa ikona neobjaví, skontroluj [povolenie používateľských skriptov v Tampermonkey](https://www.tampermonkey.net/faq.php?locale=en&q=Q209).

## Používanie

1. Klikni na ikonu **TW** vľavo od posilňovačov a prémia. Kalkulačka sa otvorí vo voľnom mieste hry: pod horným panelom, nad dolným panelom a medzi postavou s chatom vľavo a minimapou, menu a prácami vpravo. Veľkosť sa prispôsobí oknu (desktop aj notebook) a pri zmene veľkosti okna sa prepočíta. Ak je obsah dlhší, posúva sa vnútri kalkulačky.
2. Pri prvom použití si oblečieš výbavu, v ktorej budeš robiť práce, a klikneš **Obnoviť nálezku**. Kalkulačka si uloží nálezku a dostupnosť prác pre túto postavu a svet.
3. Vyber kategóriu a výrobok (zoradené podľa hodín na 1 kus), zadaj počet a klikni **Pridať**. Takto pridáš aj ďalšie výrobky. Počty v pláne môžeš meniť priamo v tabuľke.
4. Ak kalkulačka hlási nenačítaný batoh, otvor v hre batoh (inventár). Kalkulačka ho potom prečíta sama.

## Tím: spoločné batohy a ciele

1. Jeden hráč (správca tímu) nastaví tímový skript v Google Apps Script a dostane **tímový kód** (začína `TWTIM:`). Ten pošle hráčom z tímu, napríklad v hernej správe. Kód nezverejňuj: kto ho má, vidí batohy tímu a môže meniť ciele.
2. V kalkulačke otvor časť **Tím**, klikni **Pripojiť tím** a vlož tímový kód.
3. **Poslať môj batoh a načítať tím** pošle počty položiek z tvojho batoha a načíta batohy ostatných a spoločné ciele.
4. Zaškrtni hráčov, s ktorými chceš batohy sčítať. Stĺpec „V batohu (tím)“ v pláne potom ráta aj ich zásoby (podrž myš nad číslom a uvidíš rozpis).
5. **Spoločné ciele:** vyber položku a počet, klikni **Pridať cieľ**. Tabuľka ukáže cieľ, tvoj počet, počty zaškrtnutých hráčov, spolu a koľko chýba, pri surovinách aj odhad hodín pre teba.

Batohy spoluhráčov sú také, aké boli pri ich poslednom odoslaní (pri mene je dátum). Tímové údaje idú iba do Google tabuľky a iba po kliknutí na tlačidlo. Na herný server tím neposiela nič.

## Zaťaženie herného servera

- Otvorenie kalkulačky, výber výrobku, zmena počtu a prepočet neposielajú na herný server **žiadnu** požiadavku. Batoh sa číta z údajov, ktoré už hra má načítané.
- Nálezka a dostupnosť prác sa ukladajú lokálne v Tampermonkey pre každú postavu a svet. Pri nálezke sa zobrazuje dátum posledného obnovenia. Po 7 dňoch je označená ako staršia, ale ďalej sa používa.
- Obnovenie spustí iba tlačidlo **Obnoviť nálezku** a pošle najviac **jednu** požiadavku (okno Práce). Opakované kliknutie počas načítavania ani 5 sekúnd po ňom ďalšiu požiadavku nepošle.
- Ak obnovenie zlyhá, ostávajú posledné úspešne uložené údaje.

## Nálezka a dostupnosť prác

- Dostupnosť sa preberá z hry vrátane pracovných bodov z výbavy. Práca odomknutá pracovnými bodmi pod požadovaným levelom (napríklad Plánovanie rezervácie pre Obradnú palicu) sa počíta a v tabuľke je označená „odomknutá pracovnými bodmi“.
- Slabšia sada neprepíše lepšiu uloženú nálezku: pri dostupnej práci ostane vyššia uložená šanca. Dostupnosť sa vždy berie z posledného obnovenia.
- Kým postava nálezku ešte neobnovila, kalkulačka použije základnú šancu z tabuľky a level postavy a upozorní na to.
- Uloženú nálezku postavy vymažeš v menu Tampermonkey cez **Vymazať uloženú nálezku tejto postavy**.

## Rozdiely oproti tabuľke

Výsledky sú rovnaké ako v hárku Kalkulačka pre ten istý výrobok, nálezku a inventár. Navyše kalkulačka v hre vie spoločný plán viacerých výrobkov s jedným odpočtom batohu. Medziprodukty v batohu sa (rovnako ako v tabuľke) neodpočítavajú, kalkulačka ich iba ukáže.

Starší import do Google tabuľky (záložka z bunky A14 v hárku Import z hry) ostáva v tabuľke, tento skript ho už nepoužíva. Časť Tím zapisuje do vlastných hárkov „Tím – batohy“ a „Tím – ciele“.
