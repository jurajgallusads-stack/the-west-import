// ==UserScript==
// @name         The West – remeselná kalkulačka
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      2.0.1
// @description  Remeselná kalkulačka priamo v hre: suroviny, batoh, vhodné práce, hodiny a energia. Funguje lokálne, bez Google tabuľky.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js
// ==/UserScript==

(() => {
  'use strict';

  // Recepty, výrobky, kategórie a práce z remeselnej kalkulačky (svet cz27, 10. 11. 2026).
  // Počty surovín sú rozpísané až po suroviny z prác (vrátane medziproduktov).
  const DATA = {"profs":{"1":["Poľný kuchár","Polní kuchař"],"2":["Mastičkár","Mastičkář"],"3":["Kováč","Kovář"],"4":["Sedlár","Sedlový mistr"]},"cats":[["Zdravie (HP)","Zdraví (HP)"],["Energia","Energie"],["Motivácia","Motivace"],["Rýchlosť","Rychlost"],["Šťastie / nález","Štěstí / nález"],["Práca (body, skúsenosti)","Práce (body, zkušenosti)"],["Duel","Duel"],["Pevnosť","Pevnost"],["Ostatné","Ostatní"]],"items":{"741000":["Džbán","Džbán"],"52971000":["Antilopie parohy","Antilopí parohy"],"52933000":["Mrkva","Mrkve"],"1859000":["Panvica","Pánvička",3],"747000":["Kladivo","Kladivo"],"54475000":["Zásoby potravín na zimu","Zásoby potravin na zimu",1],"1889000":["Ohnivá voda","Ohnivá voda",2],"1930000":["Ozdoba (sedlár)","Ornament",4],"1943000":["Varené fazule","Pečené fazole",1],"2731000":["Liečivá bábka","Léčivá loutka",2],"1896000":["Papier","Papír",2],"1950000":["Spracovaná koža","Vydělaná kůže",4],"795000":["Drevený kolík","Dřevěný kolík"],"1820000":["Hadia koža","Hadí kůže"],"2525000":["Miznúci atrament","Mizící inkoust",2],"52869000":["Ovocný džús","Ovocný džus",2],"1922000":["Kožený poťah","Kožený potah",4],"2736000":["Kaktusový džús","Kaktusový džus",1],"711000":["Drevené dosky","Dřevo"],"744000":["Noviny","Noviny"],"746000":["Struky fazule","Fazole"],"1885000":["Atrament","Inkoust",2],"737000":["Dynamit","Dynamit"],"793000":["Paradajka","Rajče"],"1882000":["Kefka na čistenie","Štětka na čištění hlavně",2],"2436000":["Notový papier","Hudební list"],"1891000":["Žuvací tabak","Žvýkací tabák",2],"742000":["Píla","Pila"],"1814000":["Lotosový kvet","Lotosový květ"],"1947000":["Grafit","Grafit",3],"52934000":["Reportérov denník","Reportérův diář"],"2444000":["Obradná palica","Ceremoniální hůl"],"52967000":["Oheň","Oheň"],"1890000":["Čaj","Čaj",2],"2456000":["Vodka","Vodka"],"1899000":["Roztavené železo","Roztavené železo",3],"2734000":["Lucerna","Lucerna",3],"1942000":["Paradajková omáčka","Rajčatová omáčka",1],"1791000":["Zlatý prach","Zlatý prach"],"1816000":["Krieda","Křída"],"1827000":["Olovo","Olovo"],"1813000":["Orlie pierko","Orlí pero"],"1861000":["Kresadlo","Pomůcky na podpal",2],"1873000":["Zeleninová taštička","Zeleninová taštička",1],"1929000":["Konská prikrývka","Sedlová deka",4],"1915000":["Geóda","Neotevřená drúza",3],"715000":["Balenie súkna","Role sukna"],"1857000":["Poľná fľaša","Polní láhev",4],"1897000":["Súprava na rysovanie","Souprava na rýsování",2],"52965000":["Ľad","Led"],"1906000":["Ešte nedokončená guľka","Ještě měkká kulička",3],"1880000":["Živica","Pryskyřice",2],"749000":["Laso","Laso"],"765000":["Kosák","Srp"],"2739000":["Zápisník","Zápisník",4],"706000":["Bobule","Bobule"],"1860000":["Doska na krájanie","Prkénko na krájení",4],"2735000":["Lis na med","Lis na med",3],"51580000":["Vedro s hnojivom","Vědro s hnojivem",1],"51592000":["Objektív","Objektiv",3],"767000":["Zvitok drôtu","Role drátu"],"724000":["Bizónia koža","Bizoní kožešina"],"1903000":["Roztavené olovo","Roztavené olovo",3],"766000":["Pohár vody","Sklenice vody"],"1883000":["Žalúdočné kvapky","Žaludeční kapky",2],"51588000":["Výbušná pasca","Výbušná past",3],"1895000":["Bylinkový nápoj","Odvar z bylin",2],"1835000":["Ruža","Růže"],"704000":["Bavlna","Bavlna"],"1825000":["Indigo","Indigo"],"703000":["Cukor","Cukr"],"1904000":["Nákova","Kovadlina",3],"54472000":["Atlas zvierat","Atlas zvířat",3],"757000":["Havranie pierko","Havraní pero"],"2162000":["Porcia mletej kávy","Porce mleté kávy"],"1858000":["Nôž","Nůž",3],"2732000":["Strašidelná hudba","Strašidelná hudba",2],"745000":["Múka","Mouka"],"1916000":["Brúsny kameň","Brusný kámen",3],"1832000":["Kovový žetón","Žeton"],"2450000":["Nádoba na surové vajcia","Vaječný energetický nápoj"],"54379000":["Šnaps","Šnaps",1],"797000":["Vidly","Vidle"],"2437000":["Pinkertonov emblém","Pinkertonův odznak"],"1898000":["Ružová voda","Růžová voda",2],"1917000":["Kožený remeň","Kožený pás",4],"1914000":["Ozdoba (kováč)","Ornament",3],"1811000":["Čučoriedky","Borůvka"],"708000":["Mačacie zlato","Kočičí zlato"],"701000":["Zväzok obilia","Obilí"],"51576000":["Koktejl","Koktejl",1],"778000":["Hrniec","Hrnec"],"1862000":["Kukuričná múka","Kukuřičná mouka",1],"1991000":["Moderné brnenie","Moderní brnění",3],"2737000":["Med","Med",1],"702000":["Tabak","Tabákové listy"],"720000":["Polodrahokamy","Polodrahokamy"],"2451000":["Odpaľovacie zariadenie","Odpalovací zařízení"],"1866000":["Cesto","Těsto",1],"740000":["Kravský roh","Kraví roh"],"2730000":["Ľanové vlákna","Lněná vlákna",2],"2458000":["Záznam","Cestopis"],"1856000":["Džbán s vodou","Džbán s vodou",1],"1927000":["Uzda","Uzda",4],"1902000":["Oceľ","Ocel",3],"752000":["Ropa","Ropa"],"1941000":["Paradajková kaša","Rajčatová kaše",1],"1987000":["Pevná uzda","Pevná uzda",4],"52975000":["Líščí chvost","Liščí ocas"],"716000":["Kamene","Kamení"],"1810000":["Tekvica","Dýně"],"1911000":["Rukoväť","Rukojeť",3],"790000":["Železné tyče","Železné tyče"],"721000":["Uhlie","Uhlí"],"2738000":["Medovina","Medovina",1],"725000":["Striebro","Stříbro"],"784000":["Klince","Hřebík"],"2733000":["Sklo","Sklo",3],"1855000":["Drevené uhlie","Dřevěné uhlí",1],"1809000":["Seno","Seno"],"2447000":["Zelené papričky","Paprička"],"712000":["Koža","Kůže"],"714000":["Bobria koža","Bobří kožešina"],"791000":["Pomaranče","Pomeranče"],"1834000":["Kvet mieru","Mírová květina"],"761000":["Veľké kladivo","Velké kladivo"],"1907000":["Nity","Nýty",3],"1900000":["Bajonet","Bajonet",3],"1808000":["Zemiak","Brambora"],"1833000":["Trest smrti","Rozsudek smrti"],"1888000":["Destilát","Destilát",2],"2453000":["Biele rukavice","Bílé rukavice"],"2432000":["Fľaša mlieka","Láhev mléka"],"1708000":["Whiskey","Whiskey"],"51586000":["Brnenie pre koňa","Brnění pro koně",4],"51594000":["Zázračná tinktúra","Zázračná tinktura",2],"1934000":["Sedlová hruška zdobená drahokamami","Sedlová hruška zdobená drahokamy",4],"748000":["Kukurica","Kukuřice"]},"products":[{"id":1900000,"prof":3,"lvl":50,"cats":[7],"eff":"+25-75  poškození v bitvě o pevnost; Počet použití: 1","raw":[[704000,3],[712000,1],[747000,1],[790000,1],[711000,1],[716000,1]],"inter":[[1858000,1],[1899000,1]]},{"id":1916000,"prof":3,"lvl":450,"cats":[6],"eff":"+30-50  poškození v duelu; Počet použití: 2","raw":[[716000,1],[752000,2],[724000,1]],"inter":[]},{"id":2735000,"prof":3,"lvl":550,"cats":[8],"eff":"","raw":[[711000,5],[790000,1],[742000,4],[784000,2],[741000,2],[747000,1]],"inter":[[1911000,2],[1880000,2]]},{"id":54472000,"prof":3,"lvl":875,"cats":[1,4],"eff":"+1000% Vylepšené šance nálezu produktu; Doba: 5 minut ; Zvýšení energie: 65%","raw":[[52934000,2],[52971000,2],[52975000,15],[1825000,2],[1708000,2],[1813000,2]],"inter":[[1885000,2]]},{"id":2734000,"prof":3,"lvl":600,"cats":[0,2,3],"eff":"+300% Rychlost ; Počet použití: 5 ; Zvýšení duelové motivace: 20%; Bonus zdraví: 20%","raw":[[1827000,3],[711000,8],[716000,6],[720000,6],[742000,3],[741000,3],[1791000,2],[784000,1],[790000,2]],"inter":[[2733000,3],[1903000,3],[1855000,6],[1906000,3],[1880000,3],[1914000,2],[1899000,2]]},{"id":51588000,"prof":3,"lvl":700,"cats":[7],"eff":"+40-60  poškození v bitvě o pevnost; +7 Multiplayerová obrana; +7 Multiplayerový útok; Počet použití: 5","raw":[[1832000,5],[2437000,2],[2451000,5],[737000,10],[1820000,1],[742000,2],[741000,2],[744000,5],[766000,1],[716000,1],[761000,1]],"inter":[[2739000,1],[1922000,1],[1880000,1],[1896000,1],[1856000,1],[1915000,1]]},{"id":51592000,"prof":3,"lvl":700,"cats":[7],"eff":"+50-70  poškození v bitvě o pevnost; +7 Multiplayerový útok; Počet použití: 5","raw":[[1827000,1],[711000,5],[716000,2],[720000,2],[742000,2],[741000,2],[784000,6],[747000,2],[721000,1],[790000,1],[2453000,1]],"inter":[[2733000,1],[1903000,1],[1855000,2],[1906000,1],[1880000,2],[1907000,2],[1902000,1],[1899000,1]]},{"id":54379000,"prof":1,"lvl":300,"cats":[0,1,3],"eff":"+75% Rychlost ; Počet použití: 15 ; Zvýšení energie: 35%; Bonus zdraví: 35%","raw":[[701000,6],[1811000,6],[1808000,3],[778000,1],[766000,2],[741000,2]],"inter":[[1856000,2]]},{"id":2738000,"prof":1,"lvl":600,"cats":[4],"eff":"+5 Charisma; +20 Obchodovat; +20% Vyšší šance na štěstí; Doba:  8 hodin","raw":[[711000,10],[790000,2],[742000,8],[784000,4],[741000,5],[747000,2],[1835000,2],[766000,1],[2432000,2],[748000,1],[716000,1]],"inter":[[2737000,2],[2735000,2],[1911000,4],[1880000,4],[1856000,1],[1862000,1]]},{"id":51576000,"prof":1,"lvl":700,"cats":[5],"eff":"+200 Pracovních bodů; +20% zkušeností z prací, duelů a bitev o pevnost; Doba: 4 hodiny","raw":[[2456000,10],[2447000,5],[1834000,4],[2458000,1],[747000,1],[790000,1],[711000,4],[716000,1],[703000,2],[791000,2],[766000,1],[741000,1],[752000,1],[740000,1],[714000,1]],"inter":[[2736000,1],[1858000,1],[1899000,1],[1856000,1],[1888000,1],[1857000,1]]},{"id":51580000,"prof":1,"lvl":700,"cats":[4,5],"eff":"+100 Pracovních bodů; +30% Vylepšené šance nálezu produktu; Doba:  8 hodin","raw":[[711000,10],[1809000,5],[1810000,1],[1808000,1],[745000,2],[766000,2],[741000,2],[716000,3],[793000,2],[746000,2],[748000,1],[797000,1]],"inter":[[1860000,10],[1873000,1],[1866000,2],[1856000,2],[1943000,2],[1942000,2],[1941000,2],[1862000,1]]},{"id":54475000,"prof":1,"lvl":875,"cats":[1,5],"eff":"+1000% zkušeností z prací, duelů a bitev o pevnost; Doba: 5 minut ; Zvýšení energie: 65%","raw":[[52933000,2],[2447000,2],[1810000,2],[52967000,2],[52965000,4],[790000,2],[747000,2]],"inter":[[1859000,2]]},{"id":1883000,"prof":2,"lvl":50,"cats":[0],"eff":"Bonus zdraví: 10%","raw":[[1816000,1],[708000,2],[716000,2],[704000,2]],"inter":[[1861000,2]]},{"id":52869000,"prof":2,"lvl":100,"cats":[1,2],"eff":"Zvýšení energie: 20%; Zvýšení pracovní motivace: 10%","raw":[[766000,3],[1811000,4],[706000,2]],"inter":[]},{"id":1890000,"prof":2,"lvl":250,"cats":[1],"eff":"Zvýšení energie: 20%","raw":[[706000,3],[766000,1],[741000,1]],"inter":[[1856000,1]]},{"id":1891000,"prof":2,"lvl":250,"cats":[2],"eff":"Zvýšení pracovní motivace: 25%","raw":[[702000,1],[711000,2],[742000,1],[741000,1]],"inter":[[1880000,1]]},{"id":1898000,"prof":2,"lvl":450,"cats":[0,1],"eff":"Zvýšení energie: 15%; Bonus zdraví: 25%","raw":[[1835000,2],[1708000,2]],"inter":[]},{"id":2732000,"prof":2,"lvl":600,"cats":[5],"eff":"+20% zkušeností z prací, duelů a bitev o pevnost; +100 Pracovních bodů; Počet použití: 8","raw":[[2436000,4],[1833000,1],[1825000,2],[1708000,2],[744000,10],[766000,4],[741000,2],[2444000,2],[752000,2],[711000,3],[740000,1],[714000,1],[757000,1],[715000,1],[1809000,2],[784000,3]],"inter":[[2525000,2],[1885000,2],[1896000,2],[1856000,2],[1888000,1],[1857000,1],[2730000,1],[1882000,1]]},{"id":51594000,"prof":2,"lvl":700,"cats":[0,1,2],"eff":"Zvýšení energie: 100%; Zvýšení pracovní motivace: 20%; Bonus zdraví: 100%","raw":[[2162000,10],[2450000,2],[2432000,2],[742000,1],[741000,1],[795000,3],[749000,2],[712000,2],[765000,2],[752000,1],[757000,1],[715000,1],[766000,3],[1809000,2],[784000,3],[1814000,1],[1808000,3],[703000,2],[708000,1],[716000,1],[704000,1],[701000,4]],"inter":[[2731000,1],[1880000,1],[1897000,1],[1917000,2],[1950000,2],[2730000,1],[1882000,1],[1895000,1],[1889000,1],[1861000,1]]},{"id":1927000,"prof":4,"lvl":250,"cats":[3],"eff":"+50% Rychlost ; Počet použití: 10","raw":[[749000,2],[767000,1],[711000,1]],"inter":[[1860000,1]]},{"id":1934000,"prof":4,"lvl":450,"cats":[2,3],"eff":"+100% Rychlost ; Počet použití: 25 ; Zvýšení duelové motivace: 30%; Zvýšení pracovní motivace: 30%","raw":[[720000,2],[742000,1],[741000,1]],"inter":[[1880000,1]]},{"id":1987000,"prof":4,"lvl":525,"cats":[3],"eff":"+125% Rychlost ; Počet použití: 10","raw":[[712000,1],[765000,1],[720000,1],[1827000,1],[725000,1]],"inter":[[1917000,1],[1950000,1],[1930000,1]]},{"id":51586000,"prof":4,"lvl":700,"cats":[3],"eff":"+200% Rychlost ; Počet použití: 5","raw":[[790000,6],[711000,6],[784000,3],[747000,4],[721000,4],[708000,2],[716000,5],[704000,2],[724000,3],[714000,3]],"inter":[[1991000,1],[1899000,6],[1907000,1],[1904000,2],[1947000,2],[1902000,2],[1861000,2],[1929000,3],[1858000,3]]}],"jobs":{"8":["Zber obilia","Sklízet obilí",5],"4":["Zber tabaku","Sklízet tabák",3],"6":["Zber cukrovej trstiny","Tlouct cukrovou třtinu",4],"5":["Zber bavlny","Sklízet bavlnu",3],"9":["Zber bobúľ","Sbírat bobule",6],"18":["Hľadanie zlata","Hledat zlato",8],"27":["Rúbať stromy","Kácet stromy",12],"46":["Splavovanie dreva","Plavit dřevo",33],"55":["Klčovanie lesa","Mýtit les",41],"17":["Spracovávanie kože","Vydělávat kůže",9],"31":["Zbúrať priehradu","Strhnout přehradu",13],"39":["Lovenie bobrov","Lovit bobry",30],"36":["Obchodovanie","Obchodovat",21],"25":["Pracovať v kameňolome","Pracovat v kamenolomu",13],"32":["Hľadanie polodrahokamov","Hledání polodrahokamů",17],"40":["Ťažba uhlia","Těžit uhlí",22],"52":["Lov bizónov","Lovit bizony",41],"56":["Dobývanie striebra","Těžit stříbro",42],"50":["Preprava munície","Přepravovat munici",35],"29":["Značkovať dobytok","Značkovat dobytek",12],"38":["Kopať studne","Kopat studnu",25],"24":["Píliť drevo","Řezat dříví",15],"11":["Predaj novín","Prodávat noviny",5],"41":["Tlačiť noviny","Tisknout noviny",20],"13":["Mlieť obilie","Mlít obilí",7],"15":["Zber fazule","Sklízet fazole",7],"23":["Opravovanie plotov","Opravovat ploty",8],"14":["Zber kukurice","Sklízet kukuřici",7],"48":["Odchyt koní","Chytat koně",32],"67":["Hľadanie ropy","Těžit ropu",59],"2":["Plašiť vtáky z poľa","Plašit ptáky z pole",3],"47":["Stavať most","Stavět most",26],"12":["Kosiť pastviny","Kosit pastviny",6],"21":["Pokladanie koľajníc","Pokládat koleje",11],"37":["Stavať telegrafné stĺpy","Stavět telegrafní sloupy",18],"59":["Ochrana osadníckych výprav","Chránit osadníky",45],"84":["Stavať ranč","Stavět ranč",46],"85":["Ťažba železnej rudy","Těžit železnou rudu",40],"91":["Zber pomarančov","Sbírat pomeranče",15],"87":["Zber paradajok","Sbírat rajčata",10],"26":["Upravovať breh","Přímit řeku",21],"92":["Čistenie stajní","Vyčistit stáje",6],"71":["Pracovať ako žoldnier","Pracovat jako žoldák",63],"95":["Zber zemiakov","Vyorávání brambor",28],"96":["Kŕmenie dobytka","Krmení dobytka",36],"97":["Zber tekvíc","Sklízet dýně",39],"98":["Zber čučoriedok","Sbírat borůvky",43],"100":["Zber orlích pier","Sbírat orlí pera",56],"101":["Zber lotosových kvetov","Sbírat lotosové květy",65],"103":["Učenie","Vyučovat",70],"108":["Lov štrkáčov","Lov chřestýšů",80],"115":["Zber indiga","Sbírat indigo",91],"117":["Ťažba olova","Těžba olova",93],"120":["Stavať kasíno","Stavba kasina",95],"121":["Pracovať ako maršál","Pracovat jako maršál",96],"124":["Oslobodzovať otrokov","Osvobození otroků",99],"125":["Vystupovať v šou Buffalo Billa","Vystupovat v show Buffalo Billa",100],"129":["Mlieť kávu","Mlít kávu",2],"133":["Sprevádzať zelenáčov","Provázet Greenhorny",103],"132":["Pracovať ako pianista","Pracovat jako pianista",102],"159":["Pracovať ako Pinkertonov agent","Pracovat jako Pinkertonův agent",129],"143":["Plánovanie rezervácie","Plánovat rezervaci",113],"137":["Zber papriky","Sklízet papričky",107],"136":["Súťažiť v pretláčaní","Soutěžit v páce",106],"156":["Výroba dynamitu","Vyrábět dynamit",126],"148":["Pracovať ako mierový dôstojník","Pracovat jako mírový důstojník",118],"154":["Destilovať alkohol","Destilace alkoholu",124],"157":["Viesť expedíciu","Vést výpravu",127],"163":["Trhanie mrkvy","Trhání mrkve",155],"164":["Pracovať ako novinár","Pracovat jako novinář",157],"195":["Sekanie ľadu","Sekání ledu",219],"197":["Zakladať táborák","Rozdělat táborák",225],"201":["Lov antilop","Lov antilop",233],"205":["Lov líšok","Lov lišek",241]},"raws":{"701000":[[8,300]],"702000":[[4,241]],"703000":[[6,210]],"704000":[[5,330]],"706000":[[9,144]],"708000":[[18,169]],"711000":[[27,121],[46,330],[55,450]],"712000":[[17,210]],"714000":[[31,210],[39,204]],"715000":[[36,156]],"716000":[[25,270]],"720000":[[32,72]],"721000":[[40,162]],"724000":[[52,66]],"725000":[[56,102]],"737000":[[50,150]],"740000":[[29,78]],"741000":[[38,96]],"742000":[[24,61]],"744000":[[11,337],[41,391]],"745000":[[13,210]],"746000":[[15,156]],"747000":[[23,132]],"748000":[[14,150]],"749000":[[48,108]],"752000":[[67,90]],"757000":[[2,360]],"761000":[[47,85]],"765000":[[12,61]],"766000":[[21,391]],"767000":[[37,85]],"778000":[[59,72]],"784000":[[84,210]],"790000":[[85,169]],"791000":[[91,150]],"793000":[[87,252]],"795000":[[26,241]],"797000":[[92,90]],"1708000":[[71,282]],"1791000":[[18,12]],"1808000":[[95,330]],"1809000":[[96,222]],"1810000":[[97,276]],"1811000":[[98,270]],"1813000":[[100,72]],"1814000":[[101,31]],"1816000":[[103,270]],"1820000":[[108,121]],"1825000":[[115,121]],"1827000":[[117,330]],"1832000":[[120,241]],"1833000":[[121,24]],"1834000":[[124,102]],"1835000":[[125,72]],"2162000":[[129,600]],"2432000":[[133,121]],"2436000":[[132,192]],"2437000":[[159,54]],"2444000":[[143,54]],"2447000":[[137,138]],"2450000":[[136,132]],"2451000":[[156,108]],"2453000":[[148,66]],"2456000":[[154,108]],"2458000":[[157,198]],"52933000":[[163,26]],"52934000":[[164,90]],"52965000":[[195,204]],"52967000":[[197,81]],"52971000":[[201,58]],"52975000":[[205,162]]}};

  const ENERGY_PER_HOUR = 12;
  const STALE_DAYS = 7;

  // ---------- Výpočet (rovnaké pravidlá ako hárok Kalkulačka) ----------
  const Calc = (() => {
    const jobLevel = jobId => DATA.jobs[jobId][2];

    // Šanca hráča na produkt pri obyčajnej 1-hodinovej práci (v %).
    // Uložená nálezka: prístup L = nedostupná. Bez uloženej nálezky: základná šanca a level.
    function rateFor(jobId, itemId, store, level) {
      const saved = store?.rates?.[`${jobId}|${itemId}`];
      if (saved) {
        const [rate, access] = saved;
        return { rate: access === 'L' ? 0 : rate, access, saved: true };
      }
      const base = DATA.raws[itemId].find(([job]) => job === jobId)[1];
      const access = level >= jobLevel(jobId) ? 'V' : 'L';
      return { rate: access === 'L' ? 0 : base, access, saved: false };
    }

    // Najlepšia práca pre surovinu: najvyššia šanca, pri zhode prvá v poradí.
    function bestJob(itemId, store, level) {
      let best = null;
      for (const [jobId] of DATA.raws[itemId]) {
        const r = { jobId, ...rateFor(jobId, itemId, store, level) };
        if (!best || r.rate > best.rate) best = r;
      }
      if (best.rate > 0) return best;
      // Nedostupná: ukáž prácu s najnižším levelom.
      const jobId = DATA.raws[itemId].map(([job]) => job)
        .sort((a, b) => jobLevel(a) - jobLevel(b))[0];
      return { jobId, ...rateFor(jobId, itemId, store, level) };
    }

    // Hodiny = počet 1-hodinových prác. Pri šanci aspoň 100 % sa rátajú iba isté kusy.
    function hoursFor(missing, rate) {
      if (!(rate > 0)) return null;
      if (missing <= 0) return 0;
      const sure = Math.floor(rate / 100);
      return sure >= 1 ? Math.ceil(missing / sure) : missing / (rate / 100);
    }

    function product(id) {
      return DATA.products.find(p => p.id === id);
    }

    // Spoločný plán: potreby sa najprv sčítajú, inventár sa odpočíta raz od súčtu.
    function plan(entries, store, level, bag) {
      const rawNeed = new Map();
      const interNeed = new Map();
      for (const { id, qty } of entries) {
        const p = product(id);
        const n = Math.max(0, Math.floor(Number(qty) || 0));
        if (!p || !n) continue;
        for (const [item, q] of p.raw) rawNeed.set(item, (rawNeed.get(item) || 0) + q * n);
        for (const [item, q] of p.inter) interNeed.set(item, (interNeed.get(item) || 0) + q * n);
      }
      let hours = 0;
      let unavailable = 0;
      const raws = [...rawNeed].map(([id, need]) => {
        const have = bag ? Math.max(0, Number(bag(id)) || 0) : 0;
        const missing = Math.max(0, need - have);
        const job = bestJob(id, store, level);
        const h = hoursFor(missing, job.rate);
        if (h === null) {
          if (missing > 0) unavailable++;
        } else {
          hours += h;
        }
        return {
          id, need, have, missing, job,
          chance: Math.floor(job.rate / 100),
          hours: h,
          energy: h === null ? null : h * ENERGY_PER_HOUR
        };
      });
      const inter = [...interNeed].map(([id, need]) => ({
        id, need, have: bag ? Math.max(0, Number(bag(id)) || 0) : 0
      }));
      return { raws, inter, hours, energy: hours * ENERGY_PER_HOUR, unavailable };
    }

    // Hodiny na 1 kus bez inventára (na zoradenie výrobkov, ako hárok Výrobky).
    function perPiece(id, store, level) {
      const result = plan([{ id, qty: 1 }], store, level, null);
      return { hours: result.hours, unavailable: result.unavailable };
    }

    return { rateFor, bestJob, hoursFor, plan, perPiece, product };
  })();

  if (typeof unsafeWindow === 'undefined') {
    globalThis.TWCalcTest = { DATA, Calc };
    return;
  }

  // ---------- Herný klient ----------
  const game = unsafeWindow;
  const world = location.hostname;

  const T = {
    sk: {
      title: 'Remeselná kalkulačka', icon: 'Remeselná kalkulačka', close: 'Zavrieť',
      refresh: 'Obnoviť nálezku', refreshing: 'Načítavam nálezku…',
      rates: 'Nálezka', never: 'zatiaľ neobnovená – používa sa základná šanca a level',
      stale: 'staršia ako 7 dní', kept: n => `pri ${n} prácach ostala nálezka z lepšej sady`,
      refreshed: 'Nálezka a dostupnosť prác sú obnovené.', refreshFail: 'Obnovenie zlyhalo, ostávajú posledné uložené údaje.',
      wait: 'Počkaj, kým sa načíta herný svet.',
      bagMissing: 'Batoh ešte nie je načítaný. Otvor v hre batoh (inventár) a kalkulačka si ho prečíta.',
      category: 'Kategória', all: 'Všetky', product: 'Výrobok', qty: 'Počet', add: 'Pridať',
      plan: 'Plán', remove: 'Odstrániť', emptyPlan: 'Pridaj výrobok a počet kusov.',
      hours: 'Hodiny', energy: 'Energia', unavailable: 'Nedostupné suroviny',
      total: 'Spolu', missingLv: n => `chýba ${n}`,
      raw: 'Surovina', need: 'Potrebné', have: 'V batohu', miss: 'Chýba', job: 'Vhodná práca', chance: 'Isté ks / h',
      noJob: 'nedostupná', viaPoints: 'odomknutá pracovnými bodmi', level: 'level',
      inter: 'Medziprodukty', interNote: 'Medziprodukty v batohu sa neodpočítavajú (rovnako ako v tabuľke).',
      prof: 'Remeslo',
      foot: `1 hodina práce = ${ENERGY_PER_HOUR} energie. Rátajú sa iba obyčajné 1-hodinové práce a isté kusy (pod 100 % priemer).`,
      baseNote: 'odhad zo základnej šance'
    },
    cz: {
      title: 'Řemeslná kalkulačka', icon: 'Řemeslná kalkulačka', close: 'Zavřít',
      refresh: 'Obnovit šanci', refreshing: 'Načítám šanci na produkt…',
      rates: 'Šance na produkt', never: 'zatím neobnovená – používá se základní šance a level',
      stale: 'starší než 7 dní', kept: n => `u ${n} prací zůstala šance z lepší sady`,
      refreshed: 'Šance a dostupnost prací jsou obnovené.', refreshFail: 'Obnovení selhalo, zůstávají poslední uložené údaje.',
      wait: 'Počkej, než se načte herní svět.',
      bagMissing: 'Batoh ještě není načtený. Otevři ve hře batoh (inventář) a kalkulačka si ho přečte.',
      category: 'Kategorie', all: 'Všechny', product: 'Výrobek', qty: 'Počet', add: 'Přidat',
      plan: 'Plán', remove: 'Odebrat', emptyPlan: 'Přidej výrobek a počet kusů.',
      hours: 'Hodiny', energy: 'Energie', unavailable: 'Nedostupné suroviny',
      total: 'Celkem', missingLv: n => `chybí ${n}`,
      raw: 'Surovina', need: 'Potřebné', have: 'V batohu', miss: 'Chybí', job: 'Vhodná práce', chance: 'Jisté ks / h',
      noJob: 'nedostupná', viaPoints: 'odemčená pracovními body', level: 'level',
      inter: 'Meziprodukty', interNote: 'Meziprodukty v batohu se neodečítají (stejně jako v tabulce).',
      prof: 'Řemeslo',
      foot: `1 hodina práce = ${ENERGY_PER_HOUR} energie. Počítají se jen běžné 1hodinové práce a jisté kusy (pod 100 % průměr).`,
      baseNote: 'odhad ze základní šance'
    }
  };

  let lang = GM_getValue('lang', world.endsWith('.sk') ? 'sk' : 'cz');
  const t = key => T[lang][key];
  const nameOf = id => DATA.items[id][lang === 'sk' ? 0 : 1];
  const jobName = id => DATA.jobs[id][lang === 'sk' ? 0 : 1];
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
  const fmt = (n, digits = 0) => Number(n).toLocaleString(lang === 'sk' ? 'sk-SK' : 'cs-CZ', {
    minimumFractionDigits: digits, maximumFractionDigits: digits
  });
  const fmtHours = h => (Number.isInteger(h) ? fmt(h) : fmt(h, 1));

  function character() {
    const c = game.Character;
    if (!c?.name) return null;
    return { key: `${world}:${c.playerId ?? c.name}`, name: c.name, level: Number(c.level) || 0 };
  }

  const storeKey = ch => `rates:${ch.key}`;
  const planKey = ch => `plan:${ch.key}`;
  const loadStore = ch => GM_getValue(storeKey(ch), null);
  const loadPlan = ch => GM_getValue(planKey(ch), []);
  const savePlan = (ch, entries) => GM_setValue(planKey(ch), entries);

  // Batoh čítame iba z údajov, ktoré už hra má načítané (žiadna požiadavka).
  function bagReader() {
    const bag = game.Bag;
    if (!bag?.loaded || typeof bag.getItemCount !== 'function') return null;
    return id => Number(bag.getItemCount(id)) || 0;
  }

  // ---------- Obnovenie nálezky: jedna požiadavka na herný server ----------
  let refreshing = false;
  let cooldownUntil = 0;

  function readGame(request) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('timeout')), 15000);
      const fail = () => { clearTimeout(timer); reject(new Error('no data')); };
      try {
        const call = request(result => {
          clearTimeout(timer);
          if (!result || result.error) fail();
          else resolve(result);
        });
        call?.fail?.(fail);
      } catch (error) {
        clearTimeout(timer);
        reject(error);
      }
    });
  }

  async function refreshRates() {
    if (refreshing || Date.now() < cooldownUntil) return;
    const ch = character();
    const { Ajax, JobList, JobsWindow, west } = game;
    if (!ch || !Ajax?.remoteCallMode || !JobList?.getJobById || !west?.job?.Model) {
      setMessage(t('wait'), true);
      return;
    }
    refreshing = true;
    renderStatus();
    setMessage(t('refreshing'));
    try {
      const work = await readGame(done => Ajax.remoteCallMode('work', 'index', {}, done, JobsWindow));
      const live = work.jobs;
      if (!live || !Object.keys(live).length) throw new Error('no jobs');

      const models = new Map();
      const fresh = {};
      for (const [itemKey, jobs] of Object.entries(DATA.raws)) {
        const itemId = Number(itemKey);
        for (const [jobId] of jobs) {
          if (!models.has(jobId)) {
            let model = null;
            const job = live[jobId] && JobList.getJobById(jobId);
            if (job) {
              model = new west.job.Model(job);
              model.mergeJobObject(live[jobId]);
            }
            models.set(jobId, model);
          }
          const model = models.get(jobId);
          const duration = model?.basis?.long;
          const found = duration?.yields?.find(y => Number(y.itemid) === itemId);
          if (!found) continue;
          const rate = Number(found.prop) + Number(found.probBonus);
          if (!Number.isFinite(rate)) continue;
          let access = 'L';
          if (model.isVisible && duration.energy) access = ch.level >= model.jobObj.level ? 'V' : 'A';
          fresh[`${jobId}|${itemId}`] = [rate, access];
        }
      }
      if (!Object.keys(fresh).length) throw new Error('no rates');

      // Ochrana lepšej sady: slabšia sada neprepíše vyššiu uloženú nálezku pri dostupnej práci.
      const old = loadStore(ch)?.rates || {};
      let kept = 0;
      for (const [key, [rate, access]] of Object.entries(fresh)) {
        const previous = old[key];
        if (access !== 'L' && previous && previous[0] > rate) {
          fresh[key] = [previous[0], access];
          kept++;
        }
      }
      for (const [key, value] of Object.entries(old)) if (!(key in fresh)) fresh[key] = value;
      GM_setValue(storeKey(ch), { ts: Date.now(), level: ch.level, rates: fresh, kept });
      setMessage(t('refreshed'));
    } catch (error) {
      console.warn('TW kalkulačka: obnovenie nálezky', error);
      setMessage(t('refreshFail'), true);
    } finally {
      refreshing = false;
      cooldownUntil = Date.now() + 5000;
      setTimeout(renderStatus, 5100);
      renderAll();
    }
  }

  // ---------- Rozhranie ----------
  const host = document.createElement('div');
  const ui = host.attachShadow({ mode: 'open' });
  ui.innerHTML = `
    <style>
      :host { position: fixed; left: 50%; bottom: 10px; transform: translateX(-50%);
        z-index: 2147483000; font: 13px Arial, sans-serif; }
      :host([data-hud]) { position: relative; float: left; left: auto; bottom: auto;
        transform: none; margin-right: 5px; }
      button, select, input { font: inherit; }
      #open { display: block; width: 43px; height: 43px; padding: 0; cursor: pointer;
        border: 2px solid #87643c; border-radius: 3px;
        background: linear-gradient(#5e4427, #2f2015); color: #f9e2a8; font-weight: bold; }
      #open:hover, #open[aria-expanded="true"] { border-color: #d2a76a; }
      /* Poloha a veľkosť sa počítajú podľa voľného miesta medzi panelmi hry (placePanel). */
      #panel { position: fixed; top: 110px; left: 8px; width: 860px; max-height: 70vh; overflow: auto;
        box-sizing: border-box; background: #f4e8cc; color: #4a2f17; container-type: inline-size;
        border: 3px solid #4a2f17; border-radius: 6px; box-shadow: 0 6px 24px rgba(0,0,0,.55);
        text-align: left; line-height: 1.35; overscroll-behavior: contain; }
      header { position: sticky; top: 0; z-index: 1; display: flex; align-items: center; gap: 8px;
        padding: 8px 12px; background: #4a2f17; color: #f2dfa7; border-bottom: 3px double #d9b45a; }
      h2 { flex: 1; margin: 0; font: bold 20px Georgia, 'Times New Roman', serif; letter-spacing: .5px; }
      header button { border: 1px solid #d9b45a; background: transparent; color: #f2dfa7;
        border-radius: 3px; padding: 2px 8px; cursor: pointer; }
      header button[aria-pressed="true"] { background: #d9b45a; color: #4a2f17; }
      #close { font-size: 18px; line-height: 1; padding: 2px 8px; }
      .body { padding: 10px 12px 12px; }
      .card { background: #fbf4e4; border: 1px solid #d6c298; border-radius: 4px; padding: 8px 10px; margin-bottom: 10px; }
      .row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
      .grow { flex: 1; }
      .btn { border: 1px solid #7a4e2d; background: #f2dfa7; color: #4a2f17; border-radius: 4px;
        padding: 4px 10px; cursor: pointer; font-weight: bold; }
      .btn:disabled { opacity: .6; cursor: default; }
      .badge { display: inline-block; padding: 1px 6px; border-radius: 9px; font-size: 11px;
        background: #9c3d1e; color: #fff; margin-left: 4px; }
      .muted { color: #7a4e2d; font-size: 12px; }
      .warn { background: #f8d6da; border-color: #c97b84; }
      .error { color: #9c3d1e; font-weight: bold; }
      select, input[type=number] { border: 1px solid #b89a63; border-radius: 3px; background: #fffaf0; color: #4a2f17; padding: 3px 4px; }
      #product { min-width: 280px; }
      input[type=number] { width: 72px; }
      table { width: 100%; border-collapse: collapse; }
      th { background: #4a2f17; color: #f2dfa7; font-weight: bold; padding: 5px 6px; text-align: left; white-space: nowrap; }
      td { padding: 4px 6px; border-bottom: 1px solid #e8dcc0; vertical-align: middle; }
      td.n, th.n { text-align: right; white-space: nowrap; }
      tr.na td { background: #f8d6da; }
      td.miss { color: #9c3d1e; font-weight: bold; }
      tr.ok td.miss { color: #276b27; }
      tfoot td { background: #d9b45a; font-weight: bold; border-top: 2px solid #4a2f17; }
      .sum { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; }
      .sum div { flex: 1; min-width: 140px; background: #fbf4e4; border: 2px solid #4a2f17; border-radius: 4px; padding: 6px 10px; }
      .sum b { display: block; font: bold 22px Georgia, serif; color: #7a4e2d; }
      .sum .bad b { color: #9c3d1e; }
      .x { border: 0; background: transparent; color: #9c3d1e; font-size: 16px; cursor: pointer; }
      details { margin-top: 10px; }
      summary { cursor: pointer; font-weight: bold; }
      .job small { display: block; color: #7a4e2d; }
      footer { padding: 0 12px 10px; }
      /* Užší panel (notebook, menšie okno): menšie písmo a riadky, nič sa nestratí. */
      @container (max-width: 760px) {
        .body { padding: 8px; }
        h2 { font-size: 17px; }
        table { font-size: 12px; }
        th, td { padding: 3px 4px; }
        .job small { font-size: 10px; }
        .sum div { min-width: 110px; padding: 4px 8px; }
        .sum b { font-size: 18px; }
        #product { min-width: 200px; }
      }
      @container (max-width: 560px) {
        table { font-size: 11px; }
        th { white-space: normal; }
        .job small { display: none; }
        #product { min-width: 0; width: 100%; }
        .sum b { font-size: 16px; }
      }
      [hidden] { display: none !important; }
    </style>
    <button id="open" type="button" aria-expanded="false">TW</button>
    <section id="panel" role="dialog" hidden>
      <header>
        <h2 id="title"></h2>
        <button type="button" data-lang="sk">SK</button>
        <button type="button" data-lang="cz">CZ</button>
        <button id="close" type="button">×</button>
      </header>
      <div class="body">
        <div class="card row">
          <span id="who" class="grow"></span>
          <button id="refresh" class="btn" type="button"></button>
        </div>
        <div id="message" class="muted" aria-live="polite"></div>
        <div id="bagwarn" class="card warn" hidden></div>
        <div class="card row">
          <label><span id="lcat"></span><br><select id="category"></select></label>
          <label class="grow"><span id="lprod"></span><br><select id="product"></select></label>
          <label><span id="lqty"></span><br><input id="qty" type="number" min="1" step="1" value="1"></label>
          <button id="add" class="btn" type="button" style="align-self:flex-end"></button>
        </div>
        <div id="plan" class="card"></div>
        <div id="summary" class="sum"></div>
        <div id="results"></div>
      </div>
      <footer id="foot" class="muted"></footer>
    </section>
  `;

  const $ = id => ui.getElementById(id);
  const panel = $('panel');
  const openButton = $('open');
  let message = { text: '', error: false };

  function setMessage(text, error = false) {
    message = { text, error };
    const el = $('message');
    el.textContent = text;
    el.className = error ? 'error' : 'muted';
  }

  function categoryIndex() {
    const v = $('category').value;
    return v === '' ? -1 : Number(v);
  }

  function renderStatus() {
    const ch = character();
    const store = ch ? loadStore(ch) : null;
    const who = $('who');
    if (!ch) {
      who.textContent = t('wait');
    } else {
      let text = `<b>${escapeHtml(ch.name)}</b> (${t('level')} ${ch.level}) · ${t('rates')}: `;
      if (store?.ts) {
        const date = new Date(store.ts).toLocaleString(lang === 'sk' ? 'sk-SK' : 'cs-CZ', {
          day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        text += `<b>${escapeHtml(date)}</b>`;
        if (Date.now() - store.ts > STALE_DAYS * 86400000) text += `<span class="badge">${t('stale')}</span>`;
        if (store.kept) text += ` <span class="muted">(${escapeHtml(T[lang].kept(store.kept))})</span>`;
      } else {
        text += `<span class="error">${t('never')}</span>`;
      }
      who.innerHTML = text;
    }
    const btn = $('refresh');
    btn.textContent = refreshing ? t('refreshing') : t('refresh');
    btn.disabled = refreshing || Date.now() < cooldownUntil;
  }

  function renderSelects() {
    const ch = character();
    const store = ch ? loadStore(ch) : null;
    const level = ch?.level ?? 0;
    const cat = $('category');
    const keep = cat.value;
    cat.innerHTML = `<option value="">${t('all')}</option>` +
      DATA.cats.map((c, i) => `<option value="${i}">${escapeHtml(c[L()])}</option>`).join('');
    cat.value = keep;
    const ci = categoryIndex();
    const prod = $('product');
    const keepProduct = prod.value;
    const list = DATA.products
      .filter(p => ci < 0 || p.cats.includes(ci))
      .map(p => ({ p, ...Calc.perPiece(p.id, store, level) }))
      .sort((a, b) => (a.unavailable > 0) - (b.unavailable > 0) || a.hours - b.hours ||
        nameOf(a.p.id).localeCompare(nameOf(b.p.id)));
    prod.innerHTML = list.map(({ p, hours, unavailable }) => {
      const extra = unavailable ? ` (${T[lang].missingLv(unavailable)})` : '';
      const label = `${nameOf(p.id)} – ${fmtHours(hours)} h${extra}`;
      return `<option value="${p.id}" title="${escapeHtml(p.eff || '')}">${escapeHtml(label)}</option>`;
    }).join('');
    if ([...prod.options].some(o => o.value === keepProduct)) prod.value = keepProduct;
  }

  function renderPlan() {
    const ch = character();
    const entries = ch ? loadPlan(ch) : [];
    const box = $('plan');
    if (!entries.length) {
      box.innerHTML = `<b>${t('plan')}</b><div class="muted">${t('emptyPlan')}</div>`;
      return;
    }
    box.innerHTML = `<b>${t('plan')}</b>
      <table><thead><tr><th>${t('product')}</th><th>${t('prof')}</th><th class="n">${t('qty')}</th><th></th></tr></thead><tbody>
      ${entries.map(([id, qty], i) => {
        const p = Calc.product(id);
        if (!p) return '';
        return `<tr><td title="${escapeHtml(p.eff || '')}">${escapeHtml(nameOf(id))}</td>
          <td>${escapeHtml(DATA.profs[p.prof][L()])} (${p.lvl})</td>
          <td class="n"><input type="number" min="1" step="1" value="${qty}" data-qty="${i}" aria-label="${t('qty')}"></td>
          <td class="n"><button class="x" type="button" data-remove="${i}" title="${t('remove')}" aria-label="${t('remove')}">×</button></td></tr>`;
      }).join('')}</tbody></table>`;
  }

  function renderResults() {
    const ch = character();
    const entries = ch ? loadPlan(ch) : [];
    const store = ch ? loadStore(ch) : null;
    const level = ch?.level ?? 0;
    const bag = bagReader();
    const warn = $('bagwarn');
    warn.hidden = !!bag;
    warn.textContent = t('bagMissing');

    const result = Calc.plan(entries.map(([id, qty]) => ({ id, qty })), store, level, bag);
    const sum = $('summary');
    const res = $('results');
    if (!result.raws.length) {
      sum.innerHTML = '';
      res.innerHTML = '';
      return;
    }
    sum.innerHTML = `
      <div>${t('hours')}<b>${fmtHours(result.hours)}</b></div>
      <div>${t('energy')}<b>${fmt(Math.round(result.energy))}</b></div>
      <div class="${result.unavailable ? 'bad' : ''}">${t('unavailable')}<b>${result.unavailable}</b></div>`;

    const rows = result.raws
      .sort((a, b) => nameOf(a.id).localeCompare(nameOf(b.id)))
      .map(r => {
        const level = DATA.jobs[r.job.jobId][2];
        let jobInfo = `${escapeHtml(jobName(r.job.jobId))}<small>${t('level')} ${level}`;
        if (r.job.rate <= 0) jobInfo += ` · ${t('noJob')}`;
        else if (r.job.access === 'A') jobInfo += ` · ${t('viaPoints')}`;
        if (!r.job.saved && r.job.rate > 0) jobInfo += ` · ${t('baseNote')}`;
        jobInfo += '</small>';
        const na = r.hours === null && r.missing > 0;
        const cls = na ? 'na' : r.missing === 0 ? 'ok' : '';
        return `<tr class="${cls}">
          <td>${escapeHtml(nameOf(r.id))}</td>
          <td class="n">${fmt(r.need)}</td>
          <td class="n">${bag ? fmt(r.have) : '?'}</td>
          <td class="n miss">${fmt(r.missing)}</td>
          <td class="job">${jobInfo}</td>
          <td class="n" title="${fmt(r.job.rate)} %">${r.job.rate > 0 ? fmt(r.chance) : '–'}</td>
          <td class="n">${r.hours === null ? '–' : fmtHours(r.hours)}</td>
          <td class="n">${r.energy === null ? '–' : fmt(Math.round(r.energy))}</td></tr>`;
      }).join('');

    const inter = result.inter
      .sort((a, b) => nameOf(a.id).localeCompare(nameOf(b.id)))
      .map(r => `<tr><td>${escapeHtml(nameOf(r.id))}</td><td class="n">${fmt(r.need)}</td>
        <td class="n">${bag ? fmt(r.have) : '?'}</td>
        <td>${escapeHtml(DATA.profs[DATA.items[r.id][2]]?.[L()] ?? '')}</td></tr>`).join('');

    res.innerHTML = `
      <table>
        <thead><tr><th>${t('raw')}</th><th class="n">${t('need')}</th><th class="n">${t('have')}</th>
          <th class="n">${t('miss')}</th><th>${t('job')}</th><th class="n">${t('chance')}</th>
          <th class="n">${t('hours')}</th><th class="n">${t('energy')}</th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot><tr><td colspan="6">${t('total')}</td><td class="n">${fmtHours(result.hours)}</td>
          <td class="n">${fmt(Math.round(result.energy))}</td></tr></tfoot>
      </table>
      ${inter ? `<details><summary>${t('inter')} (${result.inter.length})</summary>
        <p class="muted">${t('interNote')}</p>
        <table><thead><tr><th>${t('inter')}</th><th class="n">${t('need')}</th><th class="n">${t('have')}</th><th>${t('prof')}</th></tr></thead>
        <tbody>${inter}</tbody></table></details>` : ''}`;
  }

  function renderLabels() {
    $('title').textContent = t('title');
    $('close').title = t('close');
    $('close').setAttribute('aria-label', t('close'));
    $('lcat').textContent = t('category');
    $('lprod').textContent = t('product');
    $('lqty').textContent = t('qty');
    $('add').textContent = t('add');
    $('foot').textContent = t('foot');
    openButton.title = t('icon');
    openButton.setAttribute('aria-label', t('icon'));
    panel.setAttribute('aria-label', t('title'));
    for (const b of ui.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }

  function renderAll() {
    if (panel.hidden) return;
    renderLabels();
    renderStatus();
    renderSelects();
    renderPlan();
    renderResults();
  }

  function L() { return lang === 'sk' ? 0 : 1; }

  // Panel sa vojde do voľného miesta hry a neprekrýva horný a dolný panel, postavu, chat,
  // minimapu ani menu. Prepočíta sa pri otvorení a pri zmene veľkosti okna.
  const GAP = 8;
  const MAX_WIDTH = 900;
  const MIN_WIDTH = 520;
  const MIN_HEIGHT = 300;

  function hudRect(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 ? r : null;
  }
  const edge = (ids, pick, fallback, better) => ids.map(hudRect).filter(Boolean)
    .reduce((acc, r) => better(acc, pick(r)), fallback);
  const lowest = (ids, fallback) => edge(ids, r => r.bottom, fallback, Math.max);
  const highest = (ids, fallback) => edge(ids, r => r.top, fallback, Math.min);
  const rightmost = (ids, fallback) => edge(ids, r => r.right, fallback, Math.max);
  const leftmost = (ids, fallback) => edge(ids, r => r.left, fallback, Math.min);

  function freeArea() {
    const vw = document.documentElement.clientWidth || window.innerWidth;
    const vh = document.documentElement.clientHeight || window.innerHeight;
    const topBars = ['ui_topbar', 'buffbars'];
    const area = (left, top, right, bottom) => ({
      left: Math.max(GAP, left), top: Math.max(GAP, top),
      right: Math.min(vw - GAP, right), bottom: Math.min(vh - GAP, bottom)
    });
    const candidates = [
      // 1. Stredný stĺpec: medzi postavou/chatom vľavo a minimapou/menu/prácami vpravo.
      area(rightmost(['ui_character_container', 'ui_bottomleft'], 0) + GAP,
        lowest(topBars, 0) + GAP,
        leftmost(['ui_right', 'ui_menubar', 'ui_bottomright'], vw) - GAP,
        highest(['ui_bottombar'], vh) - GAP),
      // 2. Celá šírka pod postavou a minimapou, nad chatom a prácami.
      area(GAP,
        lowest([...topBars, 'ui_character_container', 'ui_right'], 0) + GAP,
        leftmost(['ui_menubar'], vw) - GAP,
        highest(['ui_bottombar', 'ui_bottomleft', 'ui_bottomright'], vh) - GAP),
      // 3. Malé okno: aspoň pod horným a nad dolným panelom.
      area(GAP, lowest(topBars, 0) + GAP, vw - GAP, highest(['ui_bottombar'], vh) - GAP)
    ];
    const fits = a => a.right - a.left >= MIN_WIDTH && a.bottom - a.top >= MIN_HEIGHT;
    return candidates.find(fits) || candidates[candidates.length - 1];
  }

  function placePanel() {
    if (panel.hidden) return;
    const a = freeArea();
    const width = Math.max(260, Math.min(MAX_WIDTH, a.right - a.left));
    const height = Math.max(200, a.bottom - a.top);
    panel.style.width = `${width}px`;
    panel.style.maxHeight = `${height}px`;
    panel.style.top = `${a.top}px`;
    panel.style.left = `${Math.round(a.left + Math.max(0, (a.right - a.left - width) / 2))}px`;
  }
  // Hra po zmene veľkosti okna presúva svoje panely s oneskorením, preto prepočet zopakujeme.
  let placeTimers = [];
  window.addEventListener('resize', () => {
    placePanel();
    placeTimers.forEach(clearTimeout);
    placeTimers = [250, 1000].map(ms => setTimeout(placePanel, ms));
  });

  function toggle(show = panel.hidden) {
    panel.hidden = !show;
    openButton.setAttribute('aria-expanded', String(show));
    if (show) {
      setMessage(message.text, message.error);
      renderAll();
      placePanel();
    }
  }

  function updatePlan(change) {
    const ch = character();
    if (!ch) return;
    const entries = loadPlan(ch);
    change(entries);
    savePlan(ch, entries.filter(([, qty]) => qty > 0));
  }

  openButton.addEventListener('click', () => toggle());
  $('close').addEventListener('click', () => toggle(false));
  $('refresh').addEventListener('click', refreshRates);
  $('category').addEventListener('change', renderSelects);
  $('add').addEventListener('click', () => {
    const id = Number($('product').value);
    const qty = Math.max(1, Math.floor(Number($('qty').value) || 1));
    if (!id) return;
    updatePlan(entries => {
      const found = entries.find(([pid]) => pid === id);
      if (found) found[1] += qty;
      else entries.push([id, qty]);
    });
    renderPlan();
    renderResults();
  });
  $('plan').addEventListener('input', event => {
    const i = event.target.dataset?.qty;
    if (i === undefined) return;
    const qty = Math.floor(Number(event.target.value));
    if (!(qty >= 1)) return;
    updatePlan(entries => { if (entries[i]) entries[i][1] = qty; });
    renderResults();
  });
  $('plan').addEventListener('click', event => {
    const i = event.target.dataset?.remove;
    if (i === undefined) return;
    updatePlan(entries => { entries.splice(Number(i), 1); });
    renderPlan();
    renderResults();
  });
  for (const b of ui.querySelectorAll('[data-lang]')) {
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      GM_setValue('lang', lang);
      renderAll();
    });
  }
  ui.addEventListener('keydown', event => {
    if (event.key === 'Escape') toggle(false);
    event.stopPropagation();
  });
  ui.addEventListener('keyup', event => event.stopPropagation());
  ui.addEventListener('keypress', event => event.stopPropagation());

  // Ikona ostáva vľavo od posilňovačov a prémia a posúva sa spolu s ich radom.
  function mountInBuffRow() {
    const buffRow = document.getElementById('buffbars');
    if (!buffRow) return false;
    host.setAttribute('data-hud', '');
    buffRow.prepend(host);
    return true;
  }
  if (!mountInBuffRow()) {
    document.body.appendChild(host);
    const waitForBuffRow = new MutationObserver(() => {
      if (mountInBuffRow()) waitForBuffRow.disconnect();
    });
    waitForBuffRow.observe(document.body, { childList: true, subtree: true });
  }

  GM_registerMenuCommand('Otvoriť remeselnú kalkulačku', () => toggle(true));
  GM_registerMenuCommand('Vymazať uloženú nálezku tejto postavy', () => {
    const ch = character();
    if (!ch) return;
    if (!window.confirm(`Vymazať uloženú nálezku postavy ${ch.name}? Ďalšie obnovenie uloží novú.`)) return;
    GM_deleteValue(storeKey(ch));
    renderAll();
  });
})();
