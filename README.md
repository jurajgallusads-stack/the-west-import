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

1. S nainštalovaným Tampermonkey otvor [inštalačný súbor](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js) a potvrď inštaláciu (alebo aktualizáciu na verziu 3.7.2). Pri aktualizácii môže Tampermonkey požiadať o povolenie pripojenia na script.google.com, to je pre časť Tím.
2. Obnov stránku herného sveta. Ak sa ikona neobjaví, skontroluj [povolenie používateľských skriptov v Tampermonkey](https://www.tampermonkey.net/faq.php?locale=en&q=Q209).

## Používanie

1. Klikni na ikonu kalkulačky v rade posilňovačov. Má rovnaký rám a rozostupy ako ikona triedy a prémia. Kalkulačka sa otvorí ako **bežné okno hry**: s rovnakým rámom, titulkom, záložkami **Môj plán** a **Tím**, tlačidlami na zbalenie a zatvorenie, posúvaním a posuvníkom ako ostatné okná The West. Tlačidlá, rozbaľovacie zoznamy, polia, zaškrtávacie políčka a tabuľky majú vzhľad hry. Hore stojí postava s nálezkou a výber výrobku (v záložke Tím zdieľanie a zoznam hráčov). Dlhé rozbaľovacie zoznamy majú vlastný posuvník a nevyjdú mimo herné okno. Tabuľky majú pevnú hlavičku a rolujú sa vo vlastnom posuvníku. Suroviny a medziprodukty majú ikonu v kruhu ako práce na mape. Ďalší klik na ikonu okno zatvorí.
2. Pri prvom použití
3. Vyber remeslo, kategóriu a výrobok (zoradené podľa hodín na 1 kus), zadaj počet a klikni **Pridať**. Takto pridáš aj ďalšie výrobky. Počty v pláne môžeš meniť priamo v tabuľke.
4. Ak kalkulačka hlási nenačítaný batoh, otvor v hre batoh (inventár). Kalkulačka ho potom prečíta sama.

## Tím: zdieľané batohy a spoločné ciele

Tím má v kalkulačke vlastnú kartu **Tím**, oddelenú od karty **Môj plán**. Môj plán ráta iba tvoj batoh.

1. Jeden hráč (správca tímu) raz nastaví tímový skript v Google Apps Script a dostane **tímový kód** (začína `TWTIM:`). Ten pošle hráčom z tímu, napríklad v hernej správe. Kód nezverejňuj: kto ho má, vidí zdieľané batohy tímu a môže meniť ciele.
2. V kalkulačke otvor časť **Tím**, klikni **Pripojiť tím** a vlož tímový kód (iba raz).
3. Zdieľanie je dobrovoľné. Kto zaškrtne **Zdieľať môj batoh s tímom**, toho batoh sa pošle tímu. Potom sa posiela sám pri otvorení kalkulačky, keď sa zmenil, inak najviac raz za 10 minút. Po odškrtnutí sa batoh z tímu odstráni.
4. V zozname hráčov, ktorí zdieľajú batoh, zaškrtni tých, ktorých chceš rátať do spoločných cieľov.
5. **Spoločné ciele:** vyber výrobok (zoznam ukáže naraz 10 výrobkov, ďalšie dorolúješ) a počet a klikni **Pridať cieľ**.
   - Pri výrobku (napríklad Zázračná tinktúra – 100 ks) je hore hlavný cieľ s celkovým percentom. Hotové kusy výrobku, ktoré už máte v batohoch, sa nerátajú (pri nich je len poznámka, koľko ich je), cieľ sa vyrába celý. Pod ním sú medziprodukty a suroviny potrebné na všetky kusy cieľa: potrebné, máme, chýba a progres v percentách. Hotové medziprodukty celého tímu sa použijú prednostne (napríklad 101 ornamentov pri 50 lucernách), suroviny sa rátajú iba na tie, ktoré treba ešte vyrobiť.
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

## Oplatí sa kúpiť? Energia a motivácia na trhu (samostatný skript)

Samostatný skript: [the-west-trh-oplati.user.js](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-trh-oplati.user.js). Inštaluje sa rovnako cez Tampermonkey. Skript **neposiela žiadnu požiadavku** na herný server.

- Na trhu (Kúpiť) pridá pri predmetoch so **zvýšením energie** alebo **pracovnej motivácie** štítok: zelený **✓ +suma**, keď na 15-sekundových prácach zarobíš viac, než stojí kus, inak červený **✗ −suma**.
- Bublinka pri myši ukáže výpočet: koľko energie predmet dá (percento z tvojej max. energie), najlepšiu prácu, odhad zárobku, cenu za kus a najvyššiu cenu, pri ktorej sa ešte oplatí.
- **Energia:** percento z tvojej max. energie, každá energia je jedna 15 s práca. Počíta sa simuláciou: každá práca zníži motiváciu o 1 % a vždy sa vyberie práca, ktorá práve platí najviac.
- **Pracovná motivácia:** každé 1 % je jedna práca za plnú odmenu namiesto 75 %. Zisk = body motivácie × 0,25 × odmena najlepšej práce. Príklad: tabak +25 % pri práci za 100 $ dá 25 × 25 $ = 625 $, takže sa oplatí kúpiť pod 625 $.
- Ráta iba peniaze, nie skúsenosti, produkty ani strieborné práce. Cena za kus je cena „kúp hneď“ / počet kusov, pri aukcii aktuálna ponuka.
- Zárobky si skript prečíta, keď v hre otvoríš okno **Práce** (alebo keď kalkulačka obnoví nálezku). Dovtedy ukazuje **?**. Pri údajoch starších ako 3 hodiny upozorní, že je dobré okno Práce otvoriť znova.

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

## lenk (samostatný skript)

[the-west-lenk.user.js](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-lenk.user.js): keď otvoríš obchodníka, nad hlavou mu vyskočí komiksová bublina so zakaždým inou hláškou, múdrosťou alebo vtipom z Divokého západu. Cez menu Tampermonkey (**lenk → Obrázok obchodníka…**) si môžeš vybrať vlastný obrázok, ktorý prekryje dedka; uloží sa iba v tvojom prehliadači. Iba kreslí v prehliadači, na herný server nič neposiela.

## Porovnanie setov (samostatný skript)

[the-west-porovnanie-setov.user.js](https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-porovnanie-setov.user.js): v hre pridá do radu posilňovačov (vedľa remeselnej kalkulačky) ikonu váh, ktorá otvorí porovnanie dvoch oblečení pre zvolený level. Otvára sa ako bežné okno hry (rám, presúvanie, zbalenie, zatvorenie) a má rovnaký vzhľad ako remeselná kalkulačka: herné tlačidlá, tabuľky a zarovnané polia. Bonus na zoradenie sa volí hore v „Zoradiť podľa“ a platí pre A aj B. Inštaluje sa rovnako cez Tampermonkey.

- A aj B sú zobrazené ako panel výbavy v hre: obrázky predmetov v slotoch a žltá značka ▲ s úrovňou vylepšenia. Po prejdení myšou nad predmetom (v paneli aj v rebríčku) sa ukáže herná bublina so všetkými bonusmi. Kliknutím na slot v B skočíš na jeho výber.
- **A sa dá upraviť:** okrem šatníka v ňom môžeš zvoliť ľubovoľný set (**Načítať celý set…**, aj taký, ktorý nemáš) alebo zmeniť ktorýkoľvek kus; **↺** vráti A na zvolené oblečenie zo šatníka.
- **A – moje oblečenie:** práve oblečené veci alebo ktorýkoľvek set zo šatníka, so skutočnou úrovňou vylepšenia každého kusu (dá sa zmeniť a vyskúšať, čo prinesie ďalšie vylepšenie).
- **B – na výber:** všetky predmety hry podľa slotov. **Načítať celý set…** vyplní všetky kusy naraz (sety sú zoradené podľa eventov a rokov), **Zoradiť** ich zoskupí podľa eventov alebo zoradí od najlepšieho podľa XP, rýchlosti, zvieraťa, zberu produktov, šťastia, peňazí či pracovných bodov. **Hľadať** filtruje podľa názvu predmetu alebo setu, **A → B** skopíruje tvoje oblečenie na úpravy a **★ všetko…** nastaví vylepšenie všetkým kusom v B.
- Pri zoradení podľa bonusu (napr. **Najviac zberu produktov**, **Najviac rýchlosti**, **Najviac XP**) sa od najlepšieho zoradia aj **celé sety** v zozname „Načítať celý set…“, s hodnotou bonusu za celý set vrátane set bonusu. V každom slote sú najprv predmety s týmto bonusom od najlepšieho, pod nimi ostatné kusy (tie môžu bonus pridať až cez set). Sety oblečenia, zbraní a zvieraťa z jedného eventu sú v hre samostatné, takže celý outfit načítaš postupne: nové načítanie prepíše iba sloty daného setu.
- **Ponuka: najlepšie výmeny (kusy aj celé sety)** dá do jedného rebríčka jednotlivé kusy aj celé sety (napr. kôň + sedlo, puška + revolver). Set sa skúša vymeniť naraz, takže sa ukáže aj dvojica, ktorá by po jednom kuse vyšla horšie, lebo by rozbila tvoj súčasný set. **Ponuka: celé sety** ukáže v rebríčku len sety.
- **Ponuka: jednotlivé kusy a páry** zobrazí pod B rebríček konkrétnych predmetov a k nim aj páry a malé sety do 3 slotov (kôň + sedlo, puška + nôž) zo všetkých slotov (alebo len z jedného) zoradený podľa bonusu zvoleného v „Zoradiť“. Zobrazujú sa len kusy, ktoré B zlepšia. Pri každom kuse je jeho vlastný bonus a **Zmena v B**: o koľko sa zmení B, keď kus vložíš na jeho miesto, vrátane rozbitia alebo doplnenia setu. Tak hneď vidíš, či sa oplatí napríklad „5 kusov setu + jeden silný doplnok“. Tlačidlo **➜ do B** kus vloží, voľba **Kandidáti** určí, s akým vylepšením sa kusy porovnávajú.
- Pri zoradení podľa bonusu ukazujú aj výbery v B pri každom predmete, o koľko by zlepšil **súčasné** B (`(teraz)` = práve zvolený kus). Kusy, ktoré bonus majú, ale B by zhoršili (napr. rozbijú set), sú v skupine **Má bonus, ale B nezlepší** so zmenou aj vlastným bonusom. Po každej zmene v B sa to prepočíta.
- **⚡ Najlepšia kombinácia z môjho inventára** (v A): to isté, ale len z vecí, ktoré máš v inventári alebo na sebe, s ich skutočným vylepšením ★.
- **Odkiaľ B berie predmety** (zaškrtávacie políčka hore): 🎒 môj inventár (aj to, čo máš na sebe, s tvojím vylepšením), 🏪 obchod v meste (predáva obchodník, úroveň obchodu 1–40), 🎉 eventy (Black/Western Friday, Oktoberfest, Veľká noc, Vianoce, Day of the Dead, žatva…), 🏆 špeciálne (úlohy, súťaže na fórach, sady priateľov, staré akcie ako El Gringo). Platí pre výbery v B, zoznam setov, rebríček aj ⚡ hľadanie. Pri každom predmete je značka, odkiaľ je.
- **⚡ Nájdi najlepšiu kombináciu** (v B, bonus sa volí v „Zoradiť podľa“): prepočíta naraz všetky predmety aj všetky sety vrátane čiastočných setov (2, 3, … kusov) a rozdelí 10 slotov medzi sety a samostatné kusy tak, aby bol zvolený bonus čo najvyšší. Nejde po krokoch, ale hľadá najlepšie rozdelenie zo všetkých možností (pri celkovej rýchlosti pohybu, ktorá je súčinom, sa to dopočíta opakovaným prepočtom). Vynecháva kusy pre iný level, triedu alebo pohlavie.
- **Celková rýchlosť pohybu** (riadok aj zoradenie „Najrýchlejší pohyb po mape“): počíta sa ako vo hre, (100 % + zviera + 1 % za každý bod jazdy na koni) × (100 % + rýchlosť z predmetov). Body jazdy aj obratnosti z oblečenia sa započítajú. Prémia a dočasné bonusy nie sú zahrnuté (násobia obe strany rovnako).
- Výsledná tabuľka ukáže A, B a rozdiel pre rýchlosť zvieraťa, rýchlosť z predmetov, XP, zber produktov, šťastie, peniaze, regeneráciu a pracovné body, pod ňou aktívne sety s počtom kusov.
- Počíta sa vlastnou kalkulačkou hry: bonusy na level, vylepšenia ★1–★5 (rýchlosť zvieraťa sa pri vylepšení mení inak ako ostatné bonusy) a set bonusy podľa počtu kusov.
- Na herný server pošle najviac **jednu** požiadavku pri otvorení okna (zoznam setov v šatníku). Nič neoblieka ani nekupuje.
