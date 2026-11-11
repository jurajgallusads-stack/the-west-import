# The West – remeselná kalkulačka v hre

Používateľský skript pre Tampermonkey na českých a slovenských svetoch The West. Ikona kalkulačky v rade posilňovačov (vedľa ikony triedy a prémia) otvorí remeselnú kalkulačku priamo v hre. Kalkulačka beží lokálne v prehliadači. Google tabuľku potrebuje iba voliteľná časť **Tím** (spoločné batohy a ciele), a to len po kliknutí na jej tlačidlá.

## Čo kalkulačka vie

- Všetky remeselné recepty z hry (222 výrobkov pre kováča, poľného kuchára, mastičkára a sedlára) s kategóriami a medziproduktmi. Recepty sa pri prvom otvorení prečítajú z údajov, ktoré má hra už načítané, nič sa nesťahuje. Pôvodných 23 výrobkov z tabuľky má kategórie a efekty z tabuľky.
- Výber remesla: predvolene tvoje remeslo, alebo všetky remeslá. Pri výrobku je jeho úroveň receptu.
- Suroviny, ktoré sa nedajú nájsť prácou (napríklad Prázdná nádoba alebo Habanero Chili), sú v tabuľke označené „nedá sa nájsť prácou“ a nerátajú sa do hodín.
- Plán z jedného aj viacerých výrobkov s počtom kusov. Pri spoločnom pláne sa potreby surovín najprv sčítajú a obsah batohu sa odpočíta raz od súčtu, takže sa jedna zásoba nezapočíta dvakrát.
- Pri každej surovine: potrebné, v batohu, chýba, isté kusy za hodinu, hodiny a energia (1 hodina = 12 energie). Vhodná práca s levelom je v bublinke, keď podržíš myš nad názvom suroviny.
- Hotové medziprodukty z batoha sa použijú prednostne (napríklad roztavené olovo): suroviny sa rátajú iba na medziprodukty, ktoré ešte treba vyrobiť. Tabuľka medziproduktov ukazuje potrebné, v batohu a koľko vyrobiť.
- Počíta rovnako ako tabuľka: iba obyčajné 1-hodinové práce, iba isté kusy (pri šanci aspoň 100 %), pod 100 % priemer. Strieborné práce sa nepočítajú a mapa sa neprehľadáva.
- Prepínanie SK / CZ.
- **Tím:** kto chce, zdieľa svoj batoh s tímom. Každý si zo zoznamu vyberie, s kým chce batohy sčítať, a tím môže mať spoločné ciele (napríklad 100 tinktúr) s prehľadom, koľko kto má, koľko spolu a koľko chýba.

## Inštalácia

1. S nainštalovaným Tampermonkey otvor [inštalačný súbor](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js) a potvrď inštaláciu (alebo aktualizáciu na verziu 3.4.0). Pri aktualizácii môže Tampermonkey požiadať o povolenie pripojenia na script.google.com, to je pre časť Tím.
2. Obnov stránku herného sveta. Ak sa ikona neobjaví, skontroluj [povolenie používateľských skriptov v Tampermonkey](https://www.tampermonkey.net/faq.php?locale=en&q=Q209).

## Používanie

1. Klikni na ikonu kalkulačky v rade posilňovačov. Má rovnaký rám a rozostupy ako ikona triedy a prémia. Kalkulačka sa otvorí ako **bežné okno hry**: s rovnakým rámom, titulkom, záložkami **Môj plán** a **Tím**, tlačidlami na zbalenie a zatvorenie, posúvaním a posuvníkom ako ostatné okná The West. Tlačidlá, rozbaľovacie zoznamy, polia, zaškrtávacie políčka a tabuľky majú vzhľad hry. Hore stojí postava s nálezkou a výber výrobku (v záložke Tím zdieľanie a zoznam hráčov). Tabuľky majú pevnú hlavičku a rolujú sa vo vlastnom posuvníku. Suroviny a medziprodukty majú ikonu v kruhu ako práce na mape. Ďalší klik na ikonu okno zatvorí.
2. Pri prvom použití
3. Vyber remeslo, kategóriu a výrobok (zoradené podľa hodín na 1 kus), zadaj počet a klikni **Pridať**. Takto pridáš aj ďalšie výrobky. Počty v pláne môžeš meniť priamo v tabuľke.
4. Ak kalkulačka hlási nenačítaný batoh, otvor v hre batoh (inventár). Kalkulačka ho potom prečíta sama.

## Tím: zdieľané batohy a spoločné ciele

Tím má v kalkulačke vlastnú kartu **Tím**, oddelenú od karty **Môj plán**. Môj plán ráta iba tvoj batoh.

1. Jeden hráč (správca tímu) raz nastaví tímový skript v Google Apps Script a dostane **tímový kód** (začína `TWTIM:`). Ten pošle hráčom z tímu, napríklad v hernej správe. Kód nezverejňuj: kto ho má, vidí zdieľané batohy tímu a môže meniť ciele.
2. V kalkulačke otvor časť **Tím**, klikni **Pripojiť tím** a vlož tímový kód (iba raz).
3. Zdieľanie je dobrovoľné. Kto zaškrtne **Zdieľať môj batoh s tímom**, toho batoh sa pošle tímu. Potom sa posiela sám pri otvorení kalkulačky, keď sa zmenil, inak najviac raz za 10 minút. Po odškrtnutí sa batoh z tímu odstráni.
4. V zozname hráčov, ktorí zdieľajú batoh, zaškrtni tých, ktorých chceš rátať do spoločných cieľov.
5. **Spoločné ciele:** vyber položku (surovinu, medziprodukt alebo výrobok) a počet a klikni **Pridať cieľ**.
   - Pri výrobku (napríklad Zázračná tinktúra – 100 ks) je hore hlavný cieľ s celkovým percentom a hotovými kusmi. Pod ním sú medziprodukty a suroviny potrebné na zvyšné kusy: potrebné, máme, chýba a progres v percentách. Hotové medziprodukty celého tímu sa použijú prednostne (napríklad 101 ornamentov pri 50 lucernách), suroviny sa rátajú iba na tie, ktoré treba ešte vyrobiť.
   - Kto koľko prispel, je malým sivým písmom pod číslom. Mená hráčov sú skrátené: dlhšie meno na prvé slovo, najviac 5 znakov (celé meno je v bublinke pri myši).
   - **Kto hľadá:** pri surovine v cieli klikni **beriem** a ostatní uvidia tvoje meno, aby ju nehľadali dvaja. Opätovným kliknutím (**nechám**) ju uvoľníš. Vyžaduje tímový skript verzie 3.
   - Pri cieli je aj odhad hodín pre teba a pri výrobku tlačidlo **do plánu**, ktoré pridá chýbajúce kusy do tvojho plánu. Cieľ sa dá zbaliť kliknutím na jeho názov.

Tímové údaje idú iba do Google tabuľky (hárky „Tím – batohy“ a „Tím – ciele“): pri otvorení kalkulačky najviac jedna požiadavka a ďalšie len po kliknutí. Na herný server tím neposiela nič.

## Zvýraznenie vecí na predaj (samostatný skript)

Samostatný skript, nezávislý od kalkulačky: [the-west-predaj.user.js](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-predaj.user.js). Inštaluje sa rovnako cez Tampermonkey. Skript **nič nepredáva a neposiela žiadnu požiadavku**. Iba ukáže, čo môžeš predať, a predávaš ručne obchodníkovi ako vždy.

- Ikona **$** v rade posilňovačov zapína a vypína zvýraznenie. Keď je zapnuté, v batohu majú veci na predaj **svetločervené pozadie**. Na ikone je počet takých predmetov a v bublinke pri myši počet kusov, suma a čo ostalo nezvýraznené.
- Zvýrazňuje sa iba oblečenie a zbrane. **Produkty sa nezvýrazňujú nikdy.**
- Nezvýrazní sa ani:
  - oblečenie na sebe;
  - predmety zo sád, aj vylepšené kusy;
  - **veci potrebné na úlohy** (117 predmetov podľa TW-DB, stav 11. 11. 2026);
  - pomenované a vylepšené predmety;
  - remeselné a nepredajné predmety.
- **Najlepšie kusy:** v každej časti oblečenia ostane bez zvýraznenia kus, ktorý dáva najviac **HP** (zdravie + sila), najlepšiu **jazdu na koni** (jazda + obratnosť) a najvyššiu **rýchlosť**. Porovnáva sa batoh aj to, čo máš na sebe.
- **Šatník:** keď ho v hre raz otvoríš, skript si z odpovede hry zapamätá kusy z tvojich uložených sád a nebude ich zvýrazňovať.
- **Alt + klik** na predmet v batohu prepína „nepredávať“, takže ho skript prestane zvýrazňovať (alebo znova začne).
- Po predaji, nákupe alebo práci sa zvýraznenie samo prepočíta.

## Zaťaženie herného servera

- Otvorenie kalkulačky, výber výrobku, zmena počtu a prepočet neposielajú na herný server **žiadnu** požiadavku. Batoh aj recepty sa čítajú z údajov, ktoré už hra má načítané.
- Nálezka a dostupnosť prác sa ukladajú lokálne v Tampermonkey pre každú postavu a svet. Pri nálezke sa zobrazuje dátum posledného obnovenia. Po 7 dňoch je označená ako staršia, ale ďalej sa používa.
- Obnovenie spustí iba tlačidlo **Obnoviť nálezku** a pošle najviac **jednu** požiadavku (okno Práce). Opakované kliknutie počas načítavania ani 5 sekúnd po ňom ďalšiu požiadavku nepošle.
- Ak obnovenie zlyhá, ostávajú posledné úspešne uložené údaje.

## Nálezka a dostupnosť prác

- Dostupnosť sa preberá z hry vrátane pracovných bodov z výbavy. Práca odomknutá pracovnými bodmi pod požadovaným levelom (napríklad Plánovanie rezervácie pre Obradnú palicu) sa počíta a v tabuľke je označená „odomknutá pracovnými bodmi“.
- Slabšia sada neprepíše lepšiu uloženú nálezku: pri dostupnej práci ostane vyššia uložená šanca. Dostupnosť sa vždy berie z posledného obnovenia.
- Kým postava nálezku ešte neobnovila, kalkulačka použije základnú šancu z tabuľky a level postavy a upozorní na to.
- Uloženú nálezku postavy vymažeš v menu Tampermonkey cez **Vymazať uloženú nálezku tejto postavy**.

## Rozdiely oproti tabuľke

Výsledky sú rovnaké ako v hárku Kalkulačka pre tých istých 23 výrobkov, nálezku a inventár, kým v batohu nie sú hotové medziprodukty. Navyše kalkulačka v hre vie spoločný plán viacerých výrobkov s jedným odpočtom batohu a odpočíta aj hotové medziprodukty, čo tabuľka nerobí.

Starší import do Google tabuľky (záložka z bunky A14 v hárku Import z hry) ostáva v tabuľke, tento skript ho už nepoužíva. Časť Tím zapisuje do vlastných hárkov „Tím – batohy“ a „Tím – ciele“.
