// ==UserScript==
// @name         The West – remeselná kalkulačka
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      2.8.0
// @description  Remeselná kalkulačka priamo v hre: suroviny, batoh, vhodné práce, hodiny a energia. Tím: dobrovoľne zdieľané batohy a spoločné ciele.
// @match        https://*.the-west.cz/game.php*
// @match        https://*.the-west.sk/game.php*
// @run-at       document-idle
// @noframes
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-import.user.js
// ==/UserScript==

(() => {
  'use strict';

  // Recepty, výrobky, kategórie a práce z remeselnej kalkulačky (svet cz27, 10. 11. 2026).
  // Počty surovín sú rozpísané až po suroviny z prác (vrátane medziproduktov).
  const DATA = {"profs":{"1":["Poľný kuchár","Polní kuchař"],"2":["Mastičkár","Mastičkář"],"3":["Kováč","Kovář"],"4":["Sedlár","Sedlový mistr"]},"cats":[["Zdravie (HP)","Zdraví (HP)"],["Energia","Energie"],["Motivácia","Motivace"],["Rýchlosť","Rychlost"],["Šťastie / nález","Štěstí / nález"],["Práca (body, skúsenosti)","Práce (body, zkušenosti)"],["Duel","Duel"],["Pevnosť","Pevnost"],["Ostatné","Ostatní"]],"items":{"1906000":["Ešte nedokončená guľka","Ještě měkká kulička",3],"706000":["Bobule","Bobule"],"711000":["Drevené dosky","Dřevo"],"1900000":["Bajonet","Bajonet",3],"2444000":["Obradná palica","Ceremoniální hůl"],"1833000":["Trest smrti","Rozsudek smrti"],"1873000":["Zeleninová taštička","Zeleninová taštička",1],"2730000":["Ľanové vlákna","Lněná vlákna",2],"1934000":["Sedlová hruška zdobená drahokamami","Sedlová hruška zdobená drahokamy",4],"761000":["Veľké kladivo","Velké kladivo"],"51586000":["Brnenie pre koňa","Brnění pro koně",4],"747000":["Kladivo","Kladivo"],"2739000":["Zápisník","Zápisník",4],"1858000":["Nôž","Nůž",3],"748000":["Kukurica","Kukuřice"],"1860000":["Doska na krájanie","Prkénko na krájení",4],"767000":["Zvitok drôtu","Role drátu"],"2736000":["Kaktusový džús","Kaktusový džus",1],"54475000":["Zásoby potravín na zimu","Zásoby potravin na zimu",1],"1811000":["Čučoriedky","Borůvka"],"1911000":["Rukoväť","Rukojeť",3],"741000":["Džbán","Džbán"],"1907000":["Nity","Nýty",3],"1888000":["Destilát","Destilát",2],"52869000":["Ovocný džús","Ovocný džus",2],"744000":["Noviny","Noviny"],"1899000":["Roztavené železo","Roztavené železo",3],"1930000":["Ozdoba (sedlár)","Ornament",4],"52965000":["Ľad","Led"],"1810000":["Tekvica","Dýně"],"790000":["Železné tyče","Železné tyče"],"1835000":["Ruža","Růže"],"54379000":["Šnaps","Šnaps",1],"701000":["Zväzok obilia","Obilí"],"51576000":["Koktejl","Koktejl",1],"716000":["Kamene","Kamení"],"742000":["Píla","Pila"],"720000":["Polodrahokamy","Polodrahokamy"],"1896000":["Papier","Papír",2],"746000":["Struky fazule","Fazole"],"1917000":["Kožený remeň","Kožený pás",4],"1862000":["Kukuričná múka","Kukuřičná mouka",1],"712000":["Koža","Kůže"],"708000":["Mačacie zlato","Kočičí zlato"],"1943000":["Varené fazule","Pečené fazole",1],"1915000":["Geóda","Neotevřená drúza",3],"2456000":["Vodka","Vodka"],"2437000":["Pinkertonov emblém","Pinkertonův odznak"],"795000":["Drevený kolík","Dřevěný kolík"],"797000":["Vidly","Vidle"],"1808000":["Zemiak","Brambora"],"1825000":["Indigo","Indigo"],"721000":["Uhlie","Uhlí"],"757000":["Havranie pierko","Havraní pero"],"1708000":["Whiskey","Whiskey"],"1827000":["Olovo","Olovo"],"766000":["Pohár vody","Sklenice vody"],"1947000":["Grafit","Grafit",3],"52934000":["Reportérov denník","Reportérův diář"],"749000":["Laso","Laso"],"765000":["Kosák","Srp"],"1890000":["Čaj","Čaj",2],"1929000":["Konská prikrývka","Sedlová deka",4],"791000":["Pomaranče","Pomeranče"],"1902000":["Oceľ","Ocel",3],"702000":["Tabak","Tabákové listy"],"2732000":["Strašidelná hudba","Strašidelná hudba",2],"724000":["Bizónia koža","Bizoní kožešina"],"1855000":["Drevené uhlie","Dřevěné uhlí",1],"1903000":["Roztavené olovo","Roztavené olovo",3],"2447000":["Zelené papričky","Paprička"],"1809000":["Seno","Seno"],"1891000":["Žuvací tabak","Žvýkací tabák",2],"1950000":["Spracovaná koža","Vydělaná kůže",4],"1832000":["Kovový žetón","Žeton"],"715000":["Balenie súkna","Role sukna"],"1816000":["Krieda","Křída"],"714000":["Bobria koža","Bobří kožešina"],"1889000":["Ohnivá voda","Ohnivá voda",2],"1898000":["Ružová voda","Růžová voda",2],"1859000":["Panvica","Pánvička",3],"1904000":["Nákova","Kovadlina",3],"1861000":["Kresadlo","Pomůcky na podpal",2],"2738000":["Medovina","Medovina",1],"2735000":["Lis na med","Lis na med",3],"1820000":["Hadia koža","Hadí kůže"],"1883000":["Žalúdočné kvapky","Žaludeční kapky",2],"2525000":["Miznúci atrament","Mizící inkoust",2],"1813000":["Orlie pierko","Orlí pero"],"1987000":["Pevná uzda","Pevná uzda",4],"1856000":["Džbán s vodou","Džbán s vodou",1],"1814000":["Lotosový kvet","Lotosový květ"],"2731000":["Liečivá bábka","Léčivá loutka",2],"2733000":["Sklo","Sklo",3],"703000":["Cukor","Cukr"],"1882000":["Kefka na čistenie","Štětka na čištění hlavně",2],"1885000":["Atrament","Inkoust",2],"793000":["Paradajka","Rajče"],"51594000":["Zázračná tinktúra","Zázračná tinktura",2],"1834000":["Kvet mieru","Mírová květina"],"1914000":["Ozdoba (kováč)","Ornament",3],"1927000":["Uzda","Uzda",4],"2436000":["Notový papier","Hudební list"],"2450000":["Nádoba na surové vajcia","Vaječný energetický nápoj"],"51592000":["Objektív","Objektiv",3],"784000":["Klince","Hřebík"],"1941000":["Paradajková kaša","Rajčatová kaše",1],"1857000":["Poľná fľaša","Polní láhev",4],"1895000":["Bylinkový nápoj","Odvar z bylin",2],"745000":["Múka","Mouka"],"2734000":["Lucerna","Lucerna",3],"1942000":["Paradajková omáčka","Rajčatová omáčka",1],"2432000":["Fľaša mlieka","Láhev mléka"],"51588000":["Výbušná pasca","Výbušná past",3],"752000":["Ropa","Ropa"],"54472000":["Atlas zvierat","Atlas zvířat",3],"52971000":["Antilopie parohy","Antilopí parohy"],"704000":["Bavlna","Bavlna"],"1897000":["Súprava na rysovanie","Souprava na rýsování",2],"778000":["Hrniec","Hrnec"],"52975000":["Líščí chvost","Liščí ocas"],"740000":["Kravský roh","Kraví roh"],"737000":["Dynamit","Dynamit"],"1991000":["Moderné brnenie","Moderní brnění",3],"1922000":["Kožený poťah","Kožený potah",4],"725000":["Striebro","Stříbro"],"1880000":["Živica","Pryskyřice",2],"2737000":["Med","Med",1],"2451000":["Odpaľovacie zariadenie","Odpalovací zařízení"],"1791000":["Zlatý prach","Zlatý prach"],"52933000":["Mrkva","Mrkve"],"52967000":["Oheň","Oheň"],"2162000":["Porcia mletej kávy","Porce mleté kávy"],"1916000":["Brúsny kameň","Brusný kámen",3],"1866000":["Cesto","Těsto",1],"2458000":["Záznam","Cestopis"],"2453000":["Biele rukavice","Bílé rukavice"],"51580000":["Vedro s hnojivom","Vědro s hnojivem",1]},"products":[{"id":1900000,"prof":3,"lvl":50,"cats":[7],"eff":"+25-75  poškození v bitvě o pevnost; Počet použití: 1","raw":[[704000,3],[712000,1],[747000,1],[790000,1],[711000,1],[716000,1]],"inter":[[1858000,1],[1899000,1]]},{"id":1916000,"prof":3,"lvl":450,"cats":[6],"eff":"+30-50  poškození v duelu; Počet použití: 2","raw":[[716000,1],[752000,2],[724000,1]],"inter":[]},{"id":2735000,"prof":3,"lvl":550,"cats":[8],"eff":"","raw":[[711000,5],[790000,1],[742000,4],[784000,2],[741000,2],[747000,1]],"inter":[[1911000,2],[1880000,2]]},{"id":54472000,"prof":3,"lvl":875,"cats":[1,4],"eff":"+1000% Vylepšené šance nálezu produktu; Doba: 5 minut ; Zvýšení energie: 65%","raw":[[52934000,2],[52971000,2],[52975000,15],[1825000,2],[1708000,2],[1813000,2]],"inter":[[1885000,2]]},{"id":2734000,"prof":3,"lvl":600,"cats":[0,2,3],"eff":"+300% Rychlost ; Počet použití: 5 ; Zvýšení duelové motivace: 20%; Bonus zdraví: 20%","raw":[[1827000,3],[711000,8],[716000,6],[720000,6],[742000,3],[741000,3],[1791000,2],[784000,1],[790000,2]],"inter":[[2733000,3],[1903000,3],[1855000,6],[1906000,3],[1880000,3],[1914000,2],[1899000,2]]},{"id":51588000,"prof":3,"lvl":700,"cats":[7],"eff":"+40-60  poškození v bitvě o pevnost; +7 Multiplayerová obrana; +7 Multiplayerový útok; Počet použití: 5","raw":[[1832000,5],[2437000,2],[2451000,5],[737000,10],[1820000,1],[742000,2],[741000,2],[744000,5],[766000,1],[716000,1],[761000,1]],"inter":[[2739000,1],[1922000,1],[1880000,1],[1896000,1],[1856000,1],[1915000,1]]},{"id":51592000,"prof":3,"lvl":700,"cats":[7],"eff":"+50-70  poškození v bitvě o pevnost; +7 Multiplayerový útok; Počet použití: 5","raw":[[1827000,1],[711000,5],[716000,2],[720000,2],[742000,2],[741000,2],[784000,6],[747000,2],[721000,1],[790000,1],[2453000,1]],"inter":[[2733000,1],[1903000,1],[1855000,2],[1906000,1],[1880000,2],[1907000,2],[1902000,1],[1899000,1]]},{"id":54379000,"prof":1,"lvl":300,"cats":[0,1,3],"eff":"+75% Rychlost ; Počet použití: 15 ; Zvýšení energie: 35%; Bonus zdraví: 35%","raw":[[701000,6],[1811000,6],[1808000,3],[778000,1],[766000,2],[741000,2]],"inter":[[1856000,2]]},{"id":2738000,"prof":1,"lvl":600,"cats":[4],"eff":"+5 Charisma; +20 Obchodovat; +20% Vyšší šance na štěstí; Doba:  8 hodin","raw":[[711000,10],[790000,2],[742000,8],[784000,4],[741000,5],[747000,2],[1835000,2],[766000,1],[2432000,2],[748000,1],[716000,1]],"inter":[[2737000,2],[2735000,2],[1911000,4],[1880000,4],[1856000,1],[1862000,1]]},{"id":51576000,"prof":1,"lvl":700,"cats":[5],"eff":"+200 Pracovních bodů; +20% zkušeností z prací, duelů a bitev o pevnost; Doba: 4 hodiny","raw":[[2456000,10],[2447000,5],[1834000,4],[2458000,1],[747000,1],[790000,1],[711000,4],[716000,1],[703000,2],[791000,2],[766000,1],[741000,1],[752000,1],[740000,1],[714000,1]],"inter":[[2736000,1],[1858000,1],[1899000,1],[1856000,1],[1888000,1],[1857000,1]]},{"id":51580000,"prof":1,"lvl":700,"cats":[4,5],"eff":"+100 Pracovních bodů; +30% Vylepšené šance nálezu produktu; Doba:  8 hodin","raw":[[711000,10],[1809000,5],[1810000,1],[1808000,1],[745000,2],[766000,2],[741000,2],[716000,3],[793000,2],[746000,2],[748000,1],[797000,1]],"inter":[[1860000,10],[1873000,1],[1866000,2],[1856000,2],[1943000,2],[1942000,2],[1941000,2],[1862000,1]]},{"id":54475000,"prof":1,"lvl":875,"cats":[1,5],"eff":"+1000% zkušeností z prací, duelů a bitev o pevnost; Doba: 5 minut ; Zvýšení energie: 65%","raw":[[52933000,2],[2447000,2],[1810000,2],[52967000,2],[52965000,4],[790000,2],[747000,2]],"inter":[[1859000,2]]},{"id":1883000,"prof":2,"lvl":50,"cats":[0],"eff":"Bonus zdraví: 10%","raw":[[1816000,1],[708000,2],[716000,2],[704000,2]],"inter":[[1861000,2]]},{"id":52869000,"prof":2,"lvl":100,"cats":[1,2],"eff":"Zvýšení energie: 20%; Zvýšení pracovní motivace: 10%","raw":[[766000,3],[1811000,4],[706000,2]],"inter":[]},{"id":1890000,"prof":2,"lvl":250,"cats":[1],"eff":"Zvýšení energie: 20%","raw":[[706000,3],[766000,1],[741000,1]],"inter":[[1856000,1]]},{"id":1891000,"prof":2,"lvl":250,"cats":[2],"eff":"Zvýšení pracovní motivace: 25%","raw":[[702000,1],[711000,2],[742000,1],[741000,1]],"inter":[[1880000,1]]},{"id":1898000,"prof":2,"lvl":450,"cats":[0,1],"eff":"Zvýšení energie: 15%; Bonus zdraví: 25%","raw":[[1835000,2],[1708000,2]],"inter":[]},{"id":2732000,"prof":2,"lvl":600,"cats":[5],"eff":"+20% zkušeností z prací, duelů a bitev o pevnost; +100 Pracovních bodů; Počet použití: 8","raw":[[2436000,4],[1833000,1],[1825000,2],[1708000,2],[744000,10],[766000,4],[741000,2],[2444000,2],[752000,2],[711000,3],[740000,1],[714000,1],[757000,1],[715000,1],[1809000,2],[784000,3]],"inter":[[2525000,2],[1885000,2],[1896000,2],[1856000,2],[1888000,1],[1857000,1],[2730000,1],[1882000,1]]},{"id":51594000,"prof":2,"lvl":700,"cats":[0,1,2],"eff":"Zvýšení energie: 100%; Zvýšení pracovní motivace: 20%; Bonus zdraví: 100%","raw":[[2162000,10],[2450000,2],[2432000,2],[742000,1],[741000,1],[795000,3],[749000,2],[712000,2],[765000,2],[752000,1],[757000,1],[715000,1],[766000,3],[1809000,2],[784000,3],[1814000,1],[1808000,3],[703000,2],[708000,1],[716000,1],[704000,1],[701000,4]],"inter":[[2731000,1],[1880000,1],[1897000,1],[1917000,2],[1950000,2],[2730000,1],[1882000,1],[1895000,1],[1889000,1],[1861000,1]]},{"id":1927000,"prof":4,"lvl":250,"cats":[3],"eff":"+50% Rychlost ; Počet použití: 10","raw":[[749000,2],[767000,1],[711000,1]],"inter":[[1860000,1]]},{"id":1934000,"prof":4,"lvl":450,"cats":[2,3],"eff":"+100% Rychlost ; Počet použití: 25 ; Zvýšení duelové motivace: 30%; Zvýšení pracovní motivace: 30%","raw":[[720000,2],[742000,1],[741000,1]],"inter":[[1880000,1]]},{"id":1987000,"prof":4,"lvl":525,"cats":[3],"eff":"+125% Rychlost ; Počet použití: 10","raw":[[712000,1],[765000,1],[720000,1],[1827000,1],[725000,1]],"inter":[[1917000,1],[1950000,1],[1930000,1]]},{"id":51586000,"prof":4,"lvl":700,"cats":[3],"eff":"+200% Rychlost ; Počet použití: 5","raw":[[790000,6],[711000,6],[784000,3],[747000,4],[721000,4],[708000,2],[716000,5],[704000,2],[724000,3],[714000,3]],"inter":[[1991000,1],[1899000,6],[1907000,1],[1904000,2],[1947000,2],[1902000,2],[1861000,2],[1929000,3],[1858000,3]]}],"jobs":{"8":["Zber obilia","Sklízet obilí",5],"4":["Zber tabaku","Sklízet tabák",3],"6":["Zber cukrovej trstiny","Tlouct cukrovou třtinu",4],"5":["Zber bavlny","Sklízet bavlnu",3],"9":["Zber bobúľ","Sbírat bobule",6],"18":["Hľadanie zlata","Hledat zlato",8],"27":["Rúbať stromy","Kácet stromy",12],"46":["Splavovanie dreva","Plavit dřevo",33],"55":["Klčovanie lesa","Mýtit les",41],"17":["Spracovávanie kože","Vydělávat kůže",9],"31":["Zbúrať priehradu","Strhnout přehradu",13],"39":["Lovenie bobrov","Lovit bobry",30],"36":["Obchodovanie","Obchodovat",21],"25":["Pracovať v kameňolome","Pracovat v kamenolomu",13],"32":["Hľadanie polodrahokamov","Hledání polodrahokamů",17],"40":["Ťažba uhlia","Těžit uhlí",22],"52":["Lov bizónov","Lovit bizony",41],"56":["Dobývanie striebra","Těžit stříbro",42],"50":["Preprava munície","Přepravovat munici",35],"29":["Značkovať dobytok","Značkovat dobytek",12],"38":["Kopať studne","Kopat studnu",25],"24":["Píliť drevo","Řezat dříví",15],"11":["Predaj novín","Prodávat noviny",5],"41":["Tlačiť noviny","Tisknout noviny",20],"13":["Mlieť obilie","Mlít obilí",7],"15":["Zber fazule","Sklízet fazole",7],"23":["Opravovanie plotov","Opravovat ploty",8],"14":["Zber kukurice","Sklízet kukuřici",7],"48":["Odchyt koní","Chytat koně",32],"67":["Hľadanie ropy","Těžit ropu",59],"2":["Plašiť vtáky z poľa","Plašit ptáky z pole",3],"47":["Stavať most","Stavět most",26],"12":["Kosiť pastviny","Kosit pastviny",6],"21":["Pokladanie koľajníc","Pokládat koleje",11],"37":["Stavať telegrafné stĺpy","Stavět telegrafní sloupy",18],"59":["Ochrana osadníckych výprav","Chránit osadníky",45],"84":["Stavať ranč","Stavět ranč",46],"85":["Ťažba železnej rudy","Těžit železnou rudu",40],"91":["Zber pomarančov","Sbírat pomeranče",15],"87":["Zber paradajok","Sbírat rajčata",10],"26":["Upravovať breh","Přímit řeku",21],"92":["Čistenie stajní","Vyčistit stáje",6],"71":["Pracovať ako žoldnier","Pracovat jako žoldák",63],"95":["Zber zemiakov","Vyorávání brambor",28],"96":["Kŕmenie dobytka","Krmení dobytka",36],"97":["Zber tekvíc","Sklízet dýně",39],"98":["Zber čučoriedok","Sbírat borůvky",43],"100":["Zber orlích pier","Sbírat orlí pera",56],"101":["Zber lotosových kvetov","Sbírat lotosové květy",65],"103":["Učenie","Vyučovat",70],"108":["Lov štrkáčov","Lov chřestýšů",80],"115":["Zber indiga","Sbírat indigo",91],"117":["Ťažba olova","Těžba olova",93],"120":["Stavať kasíno","Stavba kasina",95],"121":["Pracovať ako maršál","Pracovat jako maršál",96],"124":["Oslobodzovať otrokov","Osvobození otroků",99],"125":["Vystupovať v šou Buffalo Billa","Vystupovat v show Buffalo Billa",100],"129":["Mlieť kávu","Mlít kávu",2],"133":["Sprevádzať zelenáčov","Provázet Greenhorny",103],"132":["Pracovať ako pianista","Pracovat jako pianista",102],"159":["Pracovať ako Pinkertonov agent","Pracovat jako Pinkertonův agent",129],"143":["Plánovanie rezervácie","Plánovat rezervaci",113],"137":["Zber papriky","Sklízet papričky",107],"136":["Súťažiť v pretláčaní","Soutěžit v páce",106],"156":["Výroba dynamitu","Vyrábět dynamit",126],"148":["Pracovať ako mierový dôstojník","Pracovat jako mírový důstojník",118],"154":["Destilovať alkohol","Destilace alkoholu",124],"157":["Viesť expedíciu","Vést výpravu",127],"163":["Trhanie mrkvy","Trhání mrkve",155],"164":["Pracovať ako novinár","Pracovat jako novinář",157],"195":["Sekanie ľadu","Sekání ledu",219],"197":["Zakladať táborák","Rozdělat táborák",225],"201":["Lov antilop","Lov antilop",233],"205":["Lov líšok","Lov lišek",241]},"raws":{"701000":[[8,300]],"702000":[[4,241]],"703000":[[6,210]],"704000":[[5,330]],"706000":[[9,144]],"708000":[[18,169]],"711000":[[27,121],[46,330],[55,450]],"712000":[[17,210]],"714000":[[31,210],[39,204]],"715000":[[36,156]],"716000":[[25,270]],"720000":[[32,72]],"721000":[[40,162]],"724000":[[52,66]],"725000":[[56,102]],"737000":[[50,150]],"740000":[[29,78]],"741000":[[38,96]],"742000":[[24,61]],"744000":[[11,337],[41,391]],"745000":[[13,210]],"746000":[[15,156]],"747000":[[23,132]],"748000":[[14,150]],"749000":[[48,108]],"752000":[[67,90]],"757000":[[2,360]],"761000":[[47,85]],"765000":[[12,61]],"766000":[[21,391]],"767000":[[37,85]],"778000":[[59,72]],"784000":[[84,210]],"790000":[[85,169]],"791000":[[91,150]],"793000":[[87,252]],"795000":[[26,241]],"797000":[[92,90]],"1708000":[[71,282]],"1791000":[[18,12]],"1808000":[[95,330]],"1809000":[[96,222]],"1810000":[[97,276]],"1811000":[[98,270]],"1813000":[[100,72]],"1814000":[[101,31]],"1816000":[[103,270]],"1820000":[[108,121]],"1825000":[[115,121]],"1827000":[[117,330]],"1832000":[[120,241]],"1833000":[[121,24]],"1834000":[[124,102]],"1835000":[[125,72]],"2162000":[[129,600]],"2432000":[[133,121]],"2436000":[[132,192]],"2437000":[[159,54]],"2444000":[[143,54]],"2447000":[[137,138]],"2450000":[[136,132]],"2451000":[[156,108]],"2453000":[[148,66]],"2456000":[[154,108]],"2458000":[[157,198]],"52933000":[[163,26]],"52934000":[[164,90]],"52965000":[[195,204]],"52967000":[[197,81]],"52971000":[[201,58]],"52975000":[[205,162]]},"recipes":{"1855000":[[711000,1],[716000,1]],"1856000":[[766000,1],[741000,1]],"1857000":[[740000,1],[714000,1]],"1858000":[[747000,1],[1899000,1],[716000,1]],"1859000":[[790000,1],[747000,1]],"1860000":[[711000,1]],"1861000":[[708000,1],[716000,1],[704000,1]],"1862000":[[748000,1],[716000,1]],"1866000":[[745000,1],[1856000,1]],"1873000":[[1810000,1],[1808000,1],[1866000,1]],"1880000":[[742000,1],[741000,1]],"1882000":[[752000,1],[757000,1],[715000,1]],"1883000":[[1816000,1],[1861000,2]],"1885000":[[1825000,1],[1708000,1]],"1888000":[[752000,1],[711000,3],[1857000,1]],"1889000":[[1808000,3],[703000,2],[1861000,1],[701000,4]],"1890000":[[706000,3],[1856000,1]],"1891000":[[702000,1],[711000,2],[1880000,1]],"1895000":[[1814000,1],[766000,1]],"1896000":[[744000,5],[1856000,1]],"1897000":[[795000,3],[749000,2]],"1898000":[[1835000,2],[1708000,2]],"1899000":[[790000,1],[711000,1]],"1900000":[[704000,3],[712000,1],[1858000,1]],"1902000":[[721000,1],[1899000,1]],"1903000":[[1827000,1],[1855000,1]],"1904000":[[1947000,1],[1902000,1],[1861000,1]],"1906000":[[720000,1],[1880000,1]],"1907000":[[784000,3],[747000,1]],"1911000":[[711000,1],[742000,1],[784000,1],[1880000,1]],"1914000":[[1791000,1]],"1915000":[[716000,1],[742000,1],[761000,1]],"1916000":[[716000,1],[752000,2],[724000,1]],"1917000":[[1950000,1],[765000,1]],"1922000":[[1820000,1],[1880000,1]],"1927000":[[749000,2],[767000,1],[1860000,1]],"1929000":[[724000,1],[714000,1],[1858000,1]],"1930000":[[720000,1],[1827000,1],[725000,1]],"1934000":[[720000,2],[1880000,1]],"1941000":[[716000,1],[793000,1]],"1942000":[[1941000,1]],"1943000":[[1942000,1],[746000,1]],"1947000":[[721000,1]],"1950000":[[712000,1]],"1987000":[[1917000,1],[1930000,1]],"1991000":[[1899000,1],[1907000,1],[1904000,2]],"2525000":[[1885000,1],[1896000,1],[2444000,1]],"2730000":[[1882000,1],[766000,2],[1809000,2],[784000,3]],"2731000":[[1880000,1],[1897000,1],[1917000,2],[2730000,1]],"2732000":[[2436000,4],[1833000,1],[2525000,2],[1888000,1],[2730000,1]],"2733000":[[1903000,1],[1906000,1],[720000,1],[1855000,1]],"2734000":[[2733000,3],[1914000,2],[784000,1],[1899000,2]],"2735000":[[711000,3],[790000,1],[1911000,2],[747000,1]],"2736000":[[1858000,1],[703000,2],[791000,2],[1856000,1]],"2737000":[[2735000,1],[1835000,1]],"2738000":[[2737000,2],[1856000,1],[2432000,2],[1862000,1]],"2739000":[[1922000,1],[1896000,1]],"51576000":[[2456000,10],[2447000,5],[1834000,4],[2458000,1],[2736000,1],[1888000,1]],"51580000":[[1860000,10],[1809000,5],[1873000,1],[1943000,2],[1862000,1],[1866000,1],[797000,1]],"51586000":[[1991000,1],[1929000,3]],"51588000":[[1832000,5],[2437000,2],[2451000,5],[737000,10],[2739000,1],[1915000,1]],"51592000":[[2733000,1],[711000,2],[1880000,1],[1907000,2],[1902000,1],[2453000,1]],"51594000":[[2162000,10],[2450000,2],[2432000,2],[2731000,1],[1895000,1],[1889000,1]],"52869000":[[766000,3],[1811000,4],[706000,2]],"54379000":[[701000,6],[1811000,6],[1808000,3],[778000,1],[1856000,2]],"54472000":[[52934000,2],[52971000,2],[52975000,15],[1885000,2],[1813000,2]],"54475000":[[52933000,2],[2447000,2],[1810000,2],[52967000,2],[52965000,4],[1859000,2]]}};

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
      // Položka, ktorá sa nedá nájsť prácou (kupuje sa alebo padá inak).
      if (!DATA.raws[itemId]?.length) return { jobId: null, rate: 0, access: 'X', saved: false };
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
    // Hotové medziprodukty z batoha sa použijú prednostne; rozpíšu sa iba tie, ktoré treba vyrobiť.
    function explode(entries, bag) {
      const demand = new Map();
      const add = (id, n) => demand.set(id, (demand.get(id) || 0) + n);
      const roots = [];
      for (const { id, qty } of entries) {
        const n = Math.max(0, Math.floor(Number(qty) || 0));
        if (product(id) && DATA.recipes[id] && n) roots.push([id, n]);
      }
      // Hĺbka položky = najdlhšia cesta od výrobku; rodič sa spracuje vždy pred dieťaťom.
      const depth = new Map();
      const visit = (id, d) => {
        if ((depth.get(id) ?? -1) >= d) return;
        depth.set(id, d);
        for (const [child] of DATA.recipes[id] || []) visit(child, d + 1);
      };
      for (const [id] of roots) visit(id, 0);
      for (const [id, n] of roots) for (const [child, q] of DATA.recipes[id]) add(child, q * n);
      const inter = [];
      const order = [...depth.keys()].filter(id => depth.get(id) > 0 && DATA.recipes[id])
        .sort((a, b) => depth.get(a) - depth.get(b));
      for (const id of order) {
        const need = demand.get(id) || 0;
        if (!need) continue;
        const have = bag ? Math.max(0, Number(bag(id)) || 0) : 0;
        const craft = need - Math.min(have, need);
        inter.push({ id, need, have, craft });
        for (const [child, q] of DATA.recipes[id]) add(child, q * craft);
      }
      const rawNeed = new Map([...demand].filter(([id, n]) => !DATA.recipes[id] && n > 0));
      return { rawNeed, inter };
    }

    function plan(entries, store, level, bag) {
      const { rawNeed, inter } = explode(entries, bag);
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
      return { raws, inter, hours, energy: hours * ENERGY_PER_HOUR, unavailable };
    }

    // Hodiny na 1 kus bez inventára (na zoradenie výrobkov, ako hárok Výrobky).
    function perPiece(id, store, level) {
      const result = plan([{ id, qty: 1 }], store, level, null);
      return { hours: result.hours, unavailable: result.unavailable };
    }

    return { rateFor, bestJob, hoursFor, plan, perPiece, product, explode };
  })();

  // ---------- Všetky recepty z hry (z už načítaných údajov klienta, žiadna požiadavka) ----------
  const CAT_RULES = [/zdrav|regener/i, /energi/i, /motiva/i, /rychlost|rýchlos/i, /štěstí|šťast|nález|nálezu/i,
    /pracovních bod|pracovných bod|zkušeností|skúsenost/i, /v duelu|v dueli/i, /pevnost|multiplayer/i];

  function mergeGameRecipes(game) {
    const IM = game?.ItemManager;
    const JL = game?.JobList;
    if (!IM?.getAll || !JL?.getJobsByItemId || !JL?.getJobById) return 0;
    let all;
    try { all = Object.values(IM.getAll() || {}); } catch { return 0; }
    const recipes = all.filter(i => i && i.type === 'recipe' && i.craftitem && Array.isArray(i.resources) && i.resources.length);
    if (!recipes.length) return 0;
    const prof = Number(game.Character?.professionId) || 0;
    const chosen = new Map();
    for (const r of recipes) {
      const id = Number(r.craftitem);
      const cur = chosen.get(id);
      // Ten istý výrobok vie viac remesiel: prednosť má moje remeslo, potom nižšia úroveň receptu.
      const rank = x => (x.profession_id === prof ? 0 : 1e6) + (Number(x.min_level) || 0);
      if (!cur || rank(r) < rank(cur)) chosen.set(id, r);
    }
    const itemName = id => IM.get(id)?.name || String(id);
    const ensureItem = (id, profId) => {
      if (!DATA.items[id]) DATA.items[id] = profId ? [itemName(id), itemName(id), profId] : [itemName(id), itemName(id)];
      else if (profId && DATA.items[id].length < 3) DATA.items[id][2] = profId;
    };
    for (const [id, r] of chosen) {
      DATA.recipes[id] = r.resources.map(x => [Number(x.item), Number(x.count) || 1]);
      ensureItem(id, Number(r.profession_id));
    }
    // Suroviny: listy stromu receptov. Práce a základná šanca z JobList (šanca 1 h = prop × 600 %).
    for (const resources of Object.values(DATA.recipes)) {
      for (const [id] of resources) {
        ensureItem(id);
        if (DATA.recipes[id] || DATA.raws[id]) continue;
        const jobs = (JL.getJobsByItemId(id) || []).filter(j => j?.yields?.[id]);
        if (!jobs.length) continue;
        DATA.raws[id] = jobs.map(j => [Number(j.id), Math.round(Number(j.yields[id].prop) * 600) || 0]);
        for (const j of jobs) if (!DATA.jobs[j.id]) DATA.jobs[j.id] = [j.name, j.name, Number(j.level) || 0];
      }
    }
    // Výrobky: všetko, čo sa dá vyrobiť. Pôvodných 23 si ponechá kategórie z tabuľky.
    const known = new Map(DATA.products.map(p => [p.id, p]));
    const flat = (id, n, raw, inter) => {
      for (const [child, q] of DATA.recipes[id] || []) {
        if (DATA.recipes[child]) {
          inter.set(child, (inter.get(child) || 0) + q * n);
          flat(child, q * n, raw, inter);
        } else {
          raw.set(child, (raw.get(child) || 0) + q * n);
        }
      }
    };
    DATA.products = [...chosen].map(([id, r]) => {
      const raw = new Map();
      const inter = new Map();
      flat(id, 1, raw, inter);
      const eff = (IM.get(id)?.usebonus || []).map(x => String(x).trim()).join('; ');
      let cats = known.get(id)?.cats;
      if (!cats) {
        cats = CAT_RULES.map((rx, i) => (rx.test(eff) ? i : -1)).filter(i => i >= 0);
        if (!cats.length) cats = [8];
      }
      return { id, prof: Number(r.profession_id), lvl: Number(r.min_level) || 0, cats, eff: known.get(id)?.eff ?? eff, raw: [...raw], inter: [...inter] };
    });
    return DATA.products.length;
  }

  if (typeof unsafeWindow === 'undefined') {
    globalThis.TWCalcTest = { DATA, Calc, mergeGameRecipes };
    return;
  }

  // ---------- Herný klient ----------
  const game = unsafeWindow;
  const world = location.hostname;

  const T = {
    sk: {
      title: 'Remeselná kalkulačka', icon: 'Remeselná kalkulačka', close: 'Zavrieť', minimize: 'Minimalizovať', restore: 'Obnoviť okno',
      refresh: 'Obnoviť nálezku', refreshing: 'Načítavam nálezku…',
      rates: 'Nálezka', never: 'zatiaľ neobnovená – používa sa základná šanca a level',
      stale: 'staršia ako 7 dní', kept: n => `pri ${n} prácach ostala nálezka z lepšej sady`,
      refreshed: 'Nálezka a dostupnosť prác sú obnovené.', refreshFail: 'Obnovenie zlyhalo, ostávajú posledné uložené údaje.',
      wait: 'Počkaj, kým sa načíta herný svet.',
      bagMissing: 'Batoh ešte nie je načítaný. Otvor v hre batoh (inventár) a kalkulačka si ho prečíta.',
      category: 'Kategória', all: 'Všetky', lprof: 'Remeslo', allProf: 'Všetky remeslá', noSource: 'nedá sa nájsť prácou (kúpiš alebo získaš inak)', product: 'Výrobok', qty: 'Počet', add: 'Pridať',
      plan: 'Plán', remove: 'Odstrániť', emptyPlan: 'Pridaj výrobok a počet kusov.',
      hours: 'Hodiny', energy: 'Energia', unavailable: 'Nedostupné suroviny',
      total: 'Spolu', missingLv: n => `chýba ${n}`,
      raw: 'Surovina', need: 'Potrebné', have: 'V batohu', miss: 'Chýba', job: 'Vhodná práca', chance: 'Isté ks / h',
      noJob: 'nedostupná', viaPoints: 'odomknutá pracovnými bodmi', level: 'level',
      inter: 'Medziprodukty', interOne: 'medziprodukt', craft: 'Vyrobiť', interNote: 'Hotové medziprodukty z batoha sa použijú a suroviny sa rátajú iba na tie, ktoré treba vyrobiť.',
      prof: 'Remeslo',
      foot: `1 hodina práce = ${ENERGY_PER_HOUR} energie. Rátajú sa iba obyčajné 1-hodinové práce a isté kusy (pod 100 % priemer). Okno presunieš myšou za hornú lištu, tlačidlo – ho zbalí, dvojklik na lištu ho vráti na pôvodné miesto.`,
      baseNote: 'odhad zo základnej šance',
      sell: 'Predaj', sellIntro: 'Veci z batoha, ktoré nepotrebuješ. Ponechajú sa sady, pomenované a vylepšené predmety, suroviny a výrobky z receptov, ciele tímu, použiteľné predmety, recepty, zvieratá a úlohové predmety. Oblečenie na sebe sa nepredáva. Odškrtnutá vec sa tentoraz nepredá, tlačidlom „nepredávať“ ju vylúčiš natrvalo.', itemCol: 'Predmet',
      sellTotal: 'Na predaj', sellSelected: 'Označené', sellBtn: 'Predať označené', sellOne: 'Predať', sellStop: 'Zastaviť',
      sellConfirm: (n, sum) => `Predať obchodníkovi označené položky (${n}) za ${sum}? Predaj sa nedá vrátiť. Každá položka je jedna požiadavka na server, posielajú sa postupne.`,
      sellOneConfirm: (name, n, sum) => `Predať ${name} (${n} ks) obchodníkovi za ${sum}? Predaj sa nedá vrátiť.`,
      selling: (i, n) => `Predávam ${i} / ${n}…`, sold: (n, sum) => `Predané položky: ${n}, spolu ${sum}.`, sellFail: 'Predaj sa nepodaril:',
      keptLabel: 'Ponechané', keepList: 'nepredávať', resetKeep: 'Vymazať zoznam „nepredávať“',
      gear: 'Oblečenie a zbrane', goods: 'Produkty', piece: 'za kus', total: 'Spolu', none: 'Nič na predaj.',
      equipHint: 'Tip: otvor v hre Šatník (uložené sady oblečenia). Kalkulačka potom nebude ponúkať na predaj oblečenie z tvojich sád.',
      equipKnown: n => `Oblečenie z ${n} uložených sád sa nepredáva.`,
      why: { set: 'sady', named: 'pomenované', upgraded: 'vylepšené', craft: 'remeslo', goal: 'ciele tímu', usable: 'použiteľné', recipe: 'recepty',
        animal: 'zvieratá', collection: 'zbierky', quest: 'úlohy', unique: 'jedinečné', nosell: 'nepredajné', equip: 'v sadách', keep: 'nepredávať' },
      team: 'Tím', teamIntro: 'Prepoj sa s hráčmi z tímu: kto zaškrtne zdieľanie, toho batoh uvidia ostatní, a môžete mať spoločné ciele. Na herný server sa nič neposiela.',
      connect: 'Pripojiť tím', teamPrompt: 'Vlož tímový kód (začína TWTIM:). Dostaneš ho od hráča, ktorý tím nastavil.',
      teamBadCode: 'Neplatný tímový kód.', teamConnected: 'Tím je pripojený. Ak chceš, zaškrtni zdieľanie svojho batoha.',
      sync: 'Obnoviť tím', teamWorking: 'Spájam sa s tímom…',
      share: 'Zdieľať môj batoh s tímom', shareHint: 'pri otvorení kalkulačky sa pošle sám, najviac raz za 10 minút',
      sharedAt: 'môj batoh zdieľaný', notShared: 'svoj batoh nezdieľaš', unshared: 'Tvoj batoh už tím nevidí.',
      toPlan: 'do plánu', toPlanTitle: 'Pridať chýbajúce kusy do plánu', addedToPlan: 'Chýbajúce kusy sú v pláne.',
      teamSynced: 'Tvoj batoh je zdieľaný a tím je načítaný.', teamLoaded: 'Tím je načítaný.', teamLoadedNoBag: 'Tím je načítaný. Tvoj batoh sa neposlal, lebo nie je načítaný – otvor v hre batoh.',
      teamFail: 'Spojenie s tímom zlyhalo. Skús to znova.', changeCode: 'Zmeniť tímový kód', loaded: 'Načítané',
      players: 'Hráči, ktorí zdieľajú batoh – zaškrtni, koho rátať do cieľov', nobody: 'Zatiaľ nikto ďalší nezdieľa svoj batoh.', updated: 'aktualizované',
      goals: 'Spoločné ciele', noGoals: 'Zatiaľ žiadny spoločný cieľ.', item: 'Položka', goalTarget: 'Cieľ', me: 'Ja', sum: 'Spolu',
      addGoal: 'Pridať cieľ', delGoal: 'Zmazať cieľ', goalAdded: 'Cieľ je pridaný.', goalDeleted: 'Cieľ je zmazaný.', myHours: h => `≈ ${h} h pre mňa`,
      haveTeam: 'V batohu (tím)', claimCol: 'Kto hľadá', claim: 'beriem', unclaim: 'nechám', claimSaved: 'Uložené.', claimsUpdate: 'Pre tlačidlo „beriem“ treba aktualizovať tímový skript na verziu 3.', myPlan: 'Môj plán', pcs: 'ks', doneItems: 'hotové', teamHas: 'Máme', progress: 'Progres', nobodyHas: 'zatiaľ nikto', raws: 'Suroviny', inters: 'Medziprodukty', products: 'Výrobky',
      goalsNote: 'Počíta sa tvoj batoh a zaškrtnutí hráči. Ciele vidí celý tím.', by: 'zadal'
    },
    cz: {
      title: 'Řemeslná kalkulačka', icon: 'Řemeslná kalkulačka', close: 'Zavřít', minimize: 'Minimalizovat', restore: 'Obnovit okno',
      refresh: 'Obnovit šanci', refreshing: 'Načítám šanci na produkt…',
      rates: 'Šance na produkt', never: 'zatím neobnovená – používá se základní šance a level',
      stale: 'starší než 7 dní', kept: n => `u ${n} prací zůstala šance z lepší sady`,
      refreshed: 'Šance a dostupnost prací jsou obnovené.', refreshFail: 'Obnovení selhalo, zůstávají poslední uložené údaje.',
      wait: 'Počkej, než se načte herní svět.',
      bagMissing: 'Batoh ještě není načtený. Otevři ve hře batoh (inventář) a kalkulačka si ho přečte.',
      category: 'Kategorie', all: 'Všechny', lprof: 'Řemeslo', allProf: 'Všechna řemesla', noSource: 'nedá se najít prací (koupíš nebo získáš jinak)', product: 'Výrobek', qty: 'Počet', add: 'Přidat',
      plan: 'Plán', remove: 'Odebrat', emptyPlan: 'Přidej výrobek a počet kusů.',
      hours: 'Hodiny', energy: 'Energie', unavailable: 'Nedostupné suroviny',
      total: 'Celkem', missingLv: n => `chybí ${n}`,
      raw: 'Surovina', need: 'Potřebné', have: 'V batohu', miss: 'Chybí', job: 'Vhodná práce', chance: 'Jisté ks / h',
      noJob: 'nedostupná', viaPoints: 'odemčená pracovními body', level: 'level',
      inter: 'Meziprodukty', interOne: 'meziprodukt', craft: 'Vyrobit', interNote: 'Hotové meziprodukty z batohu se použijí a suroviny se počítají jen na ty, které je třeba vyrobit.',
      prof: 'Řemeslo',
      foot: `1 hodina práce = ${ENERGY_PER_HOUR} energie. Počítají se jen běžné 1hodinové práce a jisté kusy (pod 100 % průměr). Okno přesuneš myší za horní lištu, tlačítko – ho sbalí, dvojklik na lištu ho vrátí na původní místo.`,
      baseNote: 'odhad ze základní šance',
      sell: 'Prodej', sellIntro: 'Věci z batohu, které nepotřebuješ. Ponechají se sady, pojmenované a vylepšené předměty, suroviny a výrobky z receptů, cíle týmu, použitelné předměty, recepty, zvířata a úkolové předměty. Oblečení na sobě se neprodává. Odškrtnutá věc se tentokrát neprodá, tlačítkem „neprodávat“ ji vyloučíš natrvalo.', itemCol: 'Předmět',
      sellTotal: 'Na prodej', sellSelected: 'Označené', sellBtn: 'Prodat označené', sellOne: 'Prodat', sellStop: 'Zastavit',
      sellConfirm: (n, sum) => `Prodat obchodníkovi označené položky (${n}) za ${sum}? Prodej nejde vrátit. Každá položka je jeden požadavek na server, posílají se postupně.`,
      sellOneConfirm: (name, n, sum) => `Prodat ${name} (${n} ks) obchodníkovi za ${sum}? Prodej nejde vrátit.`,
      selling: (i, n) => `Prodávám ${i} / ${n}…`, sold: (n, sum) => `Prodané položky: ${n}, celkem ${sum}.`, sellFail: 'Prodej se nepovedl:',
      keptLabel: 'Ponechané', keepList: 'neprodávat', resetKeep: 'Vymazat seznam „neprodávat“',
      gear: 'Oblečení a zbraně', goods: 'Produkty', piece: 'za kus', total: 'Celkem', none: 'Nic na prodej.',
      equipHint: 'Tip: otevři ve hře Šatník (uložené sady oblečení). Kalkulačka pak nebude nabízet k prodeji oblečení z tvých sad.',
      equipKnown: n => `Oblečení z ${n} uložených sad se neprodává.`,
      why: { set: 'sady', named: 'pojmenované', upgraded: 'vylepšené', craft: 'řemeslo', goal: 'cíle týmu', usable: 'použitelné', recipe: 'recepty',
        animal: 'zvířata', collection: 'sbírky', quest: 'úkoly', unique: 'jedinečné', nosell: 'neprodejné', equip: 'v sadách', keep: 'neprodávat' },
      team: 'Tým', teamIntro: 'Propoj se s hráči z týmu: kdo zaškrtne sdílení, toho batoh uvidí ostatní, a můžete mít společné cíle. Na herní server se nic neposílá.',
      connect: 'Připojit tým', teamPrompt: 'Vlož týmový kód (začíná TWTIM:). Dostaneš ho od hráče, který tým nastavil.',
      teamBadCode: 'Neplatný týmový kód.', teamConnected: 'Tým je připojený. Pokud chceš, zaškrtni sdílení svého batohu.',
      sync: 'Obnovit tým', teamWorking: 'Spojuji se s týmem…',
      share: 'Sdílet můj batoh s týmem', shareHint: 'při otevření kalkulačky se pošle sám, nejvýš jednou za 10 minut',
      sharedAt: 'můj batoh sdílený', notShared: 'svůj batoh nesdílíš', unshared: 'Tvůj batoh už tým nevidí.',
      toPlan: 'do plánu', toPlanTitle: 'Přidat chybějící kusy do plánu', addedToPlan: 'Chybějící kusy jsou v plánu.',
      teamSynced: 'Tvůj batoh je sdílený a tým je načtený.', teamLoaded: 'Tým je načtený.', teamLoadedNoBag: 'Tým je načtený. Tvůj batoh se neposlal, protože není načtený – otevři ve hře batoh.',
      teamFail: 'Spojení s týmem selhalo. Zkus to znovu.', changeCode: 'Změnit týmový kód', loaded: 'Načteno',
      players: 'Hráči, kteří sdílejí batoh – zaškrtni, koho počítat do cílů', nobody: 'Zatím nikdo další nesdílí svůj batoh.', updated: 'aktualizováno',
      goals: 'Společné cíle', noGoals: 'Zatím žádný společný cíl.', item: 'Položka', goalTarget: 'Cíl', me: 'Já', sum: 'Celkem',
      addGoal: 'Přidat cíl', delGoal: 'Smazat cíl', goalAdded: 'Cíl je přidaný.', goalDeleted: 'Cíl je smazaný.', myHours: h => `≈ ${h} h pro mě`,
      haveTeam: 'V batohu (tým)', claimCol: 'Kdo hledá', claim: 'beru', unclaim: 'nechám', claimSaved: 'Uloženo.', claimsUpdate: 'Pro tlačítko „beru“ je třeba aktualizovat týmový skript na verzi 3.', myPlan: 'Můj plán', pcs: 'ks', doneItems: 'hotovo', teamHas: 'Máme', progress: 'Postup', nobodyHas: 'zatím nikdo', raws: 'Suroviny', inters: 'Meziprodukty', products: 'Výrobky',
      goalsNote: 'Počítá se tvůj batoh a zaškrtnutí hráči. Cíle vidí celý tým.', by: 'zadal'
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
    const id = String(c.playerId ?? c.name);
    return { key: `${world}:${id}`, id, name: c.name, level: Number(c.level) || 0 };
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

  // ---------- Tím: batohy a spoločné ciele cez Google tabuľku (iba po kliknutí, nie herný server) ----------
  const teamConfig = () => GM_getValue('team', null);
  const teamCacheKey = `teamdata:${world}`;
  const loadTeam = () => GM_getValue(teamCacheKey, null);
  const selKey = ch => `teamsel:${ch.key}`;
  const loadSel = ch => GM_getValue(selKey(ch), []);
  let teamBusy = false;
  let teamMessage = { text: '', error: false };

  function parseTeamCode(input) {
    const m = String(input || '').match(/TWTIM:([A-Za-z0-9_\-=+/]+)/);
    if (!m) return null;
    let decoded;
    try { decoded = atob(m[1].replace(/-/g, '+').replace(/_/g, '/')); } catch { return null; }
    const [url, token] = decoded.split('|');
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url || '')) return null;
    if (!/^[A-Za-z0-9]{8,64}$/.test(token || '')) return null;
    return { url, token };
  }

  function setTeamMessage(text, error = false) {
    teamMessage = { text, error };
  }

  function connectTeam() {
    const input = window.prompt(t('teamPrompt'));
    if (input === null) return;
    const config = parseTeamCode(input);
    if (!config) {
      setTeamMessage(t('teamBadCode'), true);
    } else {
      GM_setValue('team', config);
      setTeamMessage(t('teamConnected'));
    }
    renderTeam();
  }

  function teamRequest(body) {
    const config = teamConfig();
    return new Promise((resolve, reject) => {
      const failed = () => reject(new Error(t('teamFail')));
      GM_xmlhttpRequest({
        method: 'POST',
        url: config.url,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        anonymous: true,
        data: JSON.stringify({ ...body, token: config.token, world }),
        timeout: 30000,
        onload: response => {
          try {
            const result = JSON.parse(response.responseText);
            if (result.ok) resolve(result);
            else reject(new Error(result.err || t('teamFail')));
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

  async function teamCall(body, okText) {
    if (teamBusy || !teamConfig()) return;
    teamBusy = true;
    setTeamMessage(t('teamWorking'));
    renderTeam();
    try {
      const data = await teamRequest(body);
      GM_setValue(teamCacheKey, { ts: Date.now(), players: data.players || [], goals: data.goals || [], claims: data.claims ?? null });
      setTeamMessage(okText);
    } catch (error) {
      setTeamMessage(error.message || t('teamFail'), true);
    } finally {
      teamBusy = false;
      renderTeam();
      renderResults();
    }
  }

  function myInventory() {
    const bag = bagReader();
    if (!bag) return null;
    const inv = {};
    for (const id of Object.keys(DATA.items)) {
      const n = bag(Number(id));
      if (n > 0) inv[id] = n;
    }
    return inv;
  }

  // Zdieľanie je dobrovoľné: batoh sa posiela iba so zaškrtnutým „Zdieľať môj batoh s tímom“.
  const shareKey = ch => `share:${ch.key}`;
  const sharedKey = ch => `shared:${ch.key}`;
  const sharing = ch => !!GM_getValue(shareKey(ch), false);
  const SHARE_EVERY = 10 * 60000;
  const LOAD_EVERY = 2 * 60000;
  const invHash = inv => JSON.stringify(inv);

  async function syncTeam() {
    const ch = character();
    if (!ch) return;
    const player = { id: ch.id, name: ch.name, level: ch.level };
    if (!sharing(ch)) {
      const wasShared = GM_getValue(sharedKey(ch), null);
      await teamCall(wasShared ? { action: 'unshare', player } : { action: 'team' }, t('teamLoaded'));
      if (wasShared && !teamMessage.error) GM_setValue(sharedKey(ch), null);
      renderTeam();
      return;
    }
    const inv = myInventory();
    if (!inv) {
      await teamCall({ action: 'team' }, t('teamLoadedNoBag'));
      return;
    }
    await teamCall({ action: 'sync', player, inv }, t('teamSynced'));
    if (!teamMessage.error) GM_setValue(sharedKey(ch), { ts: Date.now(), hash: invHash(inv) });
    renderTeam();
  }

  // Pri otvorení kalkulačky: so zdieľaním pošle batoh, ak sa zmenil alebo prešlo 10 minút,
  // inak načíta tím, ak je starší ako 2 minúty. Najviac jedna požiadavka do Google, herný server nič.
  function autoTeam() {
    const ch = character();
    if (!ch || !teamConfig() || teamBusy) return;
    if (sharing(ch)) {
      const inv = myInventory();
      const last = GM_getValue(sharedKey(ch), null);
      if (inv && (!last || last.hash !== invHash(inv) || Date.now() - last.ts > SHARE_EVERY)) {
        syncTeam();
        return;
      }
    }
    const data = loadTeam();
    if (!data || Date.now() - data.ts > LOAD_EVERY) teamCall({ action: 'team' }, t('teamLoaded'));
  }

  // Vybraní spoluhráči (bez mňa) z posledného načítania tímu.
  function teammates(ch) {
    const data = loadTeam();
    if (!data || !ch) return [];
    const selected = new Set(loadSel(ch));
    return data.players.filter(p => p.id !== ch.id && selected.has(p.id));
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
      /* Okno kalkulačky je medzi hernými oknami a prekrýva sa s nimi podľa toho, na ktoré sa klikne naposledy. */
      :host([data-panel]) { position: absolute; left: 0; top: 0; bottom: auto; width: 0; height: 0;
        transform: none; z-index: 1; }
      button, select, input { font: inherit; }
      #open { display: block; width: 43px; height: 43px; padding: 0; cursor: pointer;
        border: 2px solid #87643c; border-radius: 3px;
        background: linear-gradient(#5e4427, #2f2015); color: #f9e2a8; font-weight: bold; }
      #open:hover, #open[aria-expanded="true"] { border-color: #d2a76a; }
      /* Poloha a veľkosť sa počítajú podľa voľného miesta medzi panelmi hry (placePanel). */
      #panel { position: fixed; top: 110px; left: 8px; width: 860px; height: 70vh; overflow: auto;
        box-sizing: border-box; background: #f4e8cc; color: #4a2f17; container-type: inline-size;
        border: 3px solid #4a2f17; border-radius: 6px; box-shadow: 0 6px 24px rgba(0,0,0,.55);
        text-align: left; line-height: 1.35; overscroll-behavior: contain; }
      header { position: sticky; top: 0; z-index: 1; display: flex; align-items: center; gap: 8px;
        padding: 8px 12px; background: #4a2f17; color: #f2dfa7; border-bottom: 3px double #d9b45a;
        cursor: move; user-select: none; touch-action: none; }
      header button { cursor: pointer; }
      #panel.dragging { opacity: .92; box-shadow: 0 10px 32px rgba(0,0,0,.6); }
      h2 { flex: 1; margin: 0; font: bold 20px Georgia, 'Times New Roman', serif; letter-spacing: .5px; }
      header button { border: 1px solid #d9b45a; background: transparent; color: #f2dfa7;
        border-radius: 3px; padding: 2px 8px; cursor: pointer; }
      header button[aria-pressed="true"] { background: #d9b45a; color: #4a2f17; }
      #close, #min { font-size: 18px; line-height: 1; padding: 2px 8px; }
      #panel.min { height: auto !important; overflow: hidden; }
      #panel.min > :not(header) { display: none; }
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
      .tag { font-size: 11px; color: #8a7558; font-style: italic; }
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
      #team { margin-top: 8px; }
      #sell h4 { margin: 12px 0 4px; font-size: 13px; }
      #sell table { table-layout: fixed; }
      #sell th:nth-child(1) { width: 26px; } #sell th:nth-child(3) { width: 60px; }
      #sell th:nth-child(4) { width: 80px; } #sell th:nth-child(5) { width: 90px; } #sell th:nth-child(6) { width: 160px; }
      #sell td:nth-child(2) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      #sell tr.off td { color: #a08a6a; }
      #sell .lvl { font-size: 11px; color: #8a7558; }
      #sell .sellbar { position: sticky; top: 0; z-index: 1; }
      #team .players { display: flex; flex-wrap: wrap; gap: 4px 14px; margin: 6px 0 10px; }
      #team .players label { display: inline-flex; align-items: center; gap: 4px; cursor: pointer; }
      #team h4 { margin: 10px 0 4px; font-size: 13px; }
      #team .goaladd { margin-top: 8px; }
      #team .share { margin-bottom: 8px; cursor: pointer; }
      .tabs { display: flex; gap: 4px; padding: 6px 12px 0; background: #f4e8cc; border-bottom: 2px solid #4a2f17; }
      .tabs button { border: 2px solid #4a2f17; border-bottom: 0; border-radius: 5px 5px 0 0; padding: 5px 14px; cursor: pointer;
        background: #e8dcc0; color: #4a2f17; font-weight: bold; }
      .tabs button[aria-selected="true"] { background: #4a2f17; color: #f2dfa7; }
      details.goal > summary { list-style: none; cursor: pointer; font-weight: normal; }
      details.goal > summary::-webkit-details-marker { display: none; }
      details.goal > summary .goalhead b:first-child::before { content: '▸ '; color: #7a4e2d; }
      details.goal[open] > summary .goalhead b:first-child::before { content: '▾ '; }
      table.comp td { padding: 2px 6px; }
      .goal { background: #fbf4e4; border: 1px solid #d6c298; border-radius: 4px; padding: 8px 10px; margin: 8px 0; }
      .goalhead { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px; }
      .goalhead .pct { font: bold 15px Georgia, serif; color: #7a4e2d; }
      .bar { display: block; height: 7px; background: #e8dcc0; border-radius: 4px; overflow: hidden; margin: 5px 0 2px; }
      .bar i { display: block; height: 100%; background: #b0793f; }
      .bar.done i { background: #3f8a3f; }
      td.prog { min-width: 90px; }
      td.prog .bar { margin: 2px 0 0; }
      td.prog small { color: #7a4e2d; font-size: 10px; }
      .claim small { color: #4a2f17; font-size: 11px; }
      .claimline { font-size: 11px; color: #7a4e2d; margin-top: 2px; }
      small.who { display: block; color: #8a7a62; font-size: 10px; font-weight: normal; line-height: 1.2; }
      table.comp { margin-top: 6px; }
      table.comp th { background: #7a4e2d; }
      table.comp tr.ok td.miss { color: #276b27; }
      #goalitem { min-width: 220px; }
      .link { border: 0; background: transparent; color: #7a4e2d; text-decoration: underline; cursor: pointer; padding: 0; }
      td.ok { color: #276b27; font-weight: bold; }
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
        <button id="min" type="button">–</button>
        <button id="close" type="button">×</button>
      </header>
      <nav class="tabs" role="tablist">
        <button id="tabplan" type="button" role="tab" data-tab="plan"></button>
        <button id="tabteam" type="button" role="tab" data-tab="team"></button>
        <button id="tabsell" type="button" role="tab" data-tab="sell"></button>
      </nav>
      <div class="body">
        <div id="bagwarn" class="card warn" hidden></div>
        <div id="pane-team" hidden><div id="team"></div></div>
        <div id="pane-sell" hidden><div id="sell"></div></div>
        <div id="pane-plan">
        <div class="card row">
          <span id="who" class="grow"></span>
          <button id="refresh" class="btn" type="button"></button>
        </div>
        <div id="message" class="muted" aria-live="polite"></div>
        <div class="card row">
          <label><span id="lprof"></span><br><select id="profession"></select></label>
          <label><span id="lcat"></span><br><select id="category"></select></label>
          <label class="grow"><span id="lprod"></span><br><select id="product"></select></label>
          <label><span id="lqty"></span><br><input id="qty" type="number" min="1" step="1" value="1"></label>
          <button id="add" class="btn" type="button" style="align-self:flex-end"></button>
        </div>
        <div id="plan" class="card"></div>
        <div id="summary" class="sum"></div>
        <div id="results"></div>
        </div>
      </div>
      <footer id="foot" class="muted"></footer>
    </section>
  `;

  // Okno žije v kontajneri herných okien (#windows), ikona ostáva v rade posilňovačov.
  const panelHost = document.createElement('div');
  panelHost.id = 'twcalc-panel';
  panelHost.setAttribute('data-panel', '');
  const pui = panelHost.attachShadow({ mode: 'open' });
  pui.appendChild(ui.querySelector('style').cloneNode(true));
  pui.appendChild(ui.getElementById('panel'));
  const $ = id => ui.getElementById(id) || pui.getElementById(id);
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
    const profSel = $('profession');
    const myProf = Number(game.Character?.professionId) || 0;
    const prof = GM_getValue('prof', myProf ? String(myProf) : '');
    profSel.innerHTML = `<option value="">${t('allProf')}</option>` +
      Object.entries(DATA.profs).map(([id, names]) => `<option value="${id}">${escapeHtml(names[L()])}</option>`).join('');
    profSel.value = prof;
    const prod = $('product');
    const keepProduct = prod.value;
    const list = DATA.products
      .filter(p => (ci < 0 || p.cats.includes(ci)) && (!profSel.value || p.prof === Number(profSel.value)))
      .map(p => ({ p, ...Calc.perPiece(p.id, store, level) }))
      .sort((a, b) => (a.unavailable > 0) - (b.unavailable > 0) || a.hours - b.hours ||
        nameOf(a.p.id).localeCompare(nameOf(b.p.id)));
    prod.innerHTML = list.map(({ p, hours, unavailable }) => {
      const extra = unavailable ? ` (${T[lang].missingLv(unavailable)})` : '';
      const label = `${nameOf(p.id)} (${p.lvl}) – ${fmtHours(hours)} h${extra}`;
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
    const own = bagReader();
    const warn = $('bagwarn');
    warn.hidden = !!own;
    warn.textContent = t('bagMissing');
    // Môj plán ráta iba môj batoh; tímové batohy sú na karte Tím.
    const bag = own;
    const haveTitle = () => '';
    const haveLabel = t('have');

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
        if (r.job.jobId === null) {
          return `<tr class="${r.missing > 0 ? 'na' : 'ok'}"><td>${escapeHtml(nameOf(r.id))}</td>
            <td class="n">${fmt(r.need)}</td><td class="n">${bag ? fmt(r.have) : '?'}</td>
            <td class="n miss">${fmt(r.missing)}</td><td class="job"><small>${t('noSource')}</small></td>
            <td class="n">–</td><td class="n">–</td><td class="n">–</td></tr>`;
        }
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
          <td class="n"${haveTitle(r.id)}>${bag ? fmt(r.have) : '?'}</td>
          <td class="n miss">${fmt(r.missing)}</td>
          <td class="job">${jobInfo}</td>
          <td class="n" title="${fmt(r.job.rate)} %">${r.job.rate > 0 ? fmt(r.chance) : '–'}</td>
          <td class="n">${r.hours === null ? '–' : fmtHours(r.hours)}</td>
          <td class="n">${r.energy === null ? '–' : fmt(Math.round(r.energy))}</td></tr>`;
      }).join('');

    const inter = result.inter
      .sort((a, b) => nameOf(a.id).localeCompare(nameOf(b.id)))
      .map(r => `<tr class="${r.craft ? '' : 'ok'}"><td>${escapeHtml(nameOf(r.id))}</td><td class="n">${fmt(r.need)}</td>
        <td class="n"${haveTitle(r.id)}>${bag ? fmt(r.have) : '?'}</td>
        <td class="n miss">${r.craft ? fmt(r.craft) : '✓'}</td>
        <td>${escapeHtml(DATA.profs[DATA.items[r.id][2]]?.[L()] ?? '')}</td></tr>`).join('');

    res.innerHTML = `
      <table>
        <thead><tr><th>${t('raw')}</th><th class="n">${t('need')}</th><th class="n">${haveLabel}</th>
          <th class="n">${t('miss')}</th><th>${t('job')}</th><th class="n">${t('chance')}</th>
          <th class="n">${t('hours')}</th><th class="n">${t('energy')}</th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot><tr><td colspan="6">${t('total')}</td><td class="n">${fmtHours(result.hours)}</td>
          <td class="n">${fmt(Math.round(result.energy))}</td></tr></tfoot>
      </table>
      ${inter ? `<details><summary>${t('inter')} (${result.inter.length})</summary>
        <p class="muted">${t('interNote')}</p>
        <table><thead><tr><th>${t('inter')}</th><th class="n">${t('need')}</th><th class="n">${haveLabel}</th><th class="n">${t('craft')}</th><th>${t('prof')}</th></tr></thead>
        <tbody>${inter}</tbody></table></details>` : ''}`;
  }

  function itemOptions() {
    const raws = new Set(Object.keys(DATA.raws));
    const products = new Set(DATA.products.map(p => String(p.id)));
    const group = (label, ids) => `<optgroup label="${escapeHtml(label)}">${ids
      .sort((a, b) => nameOf(a).localeCompare(nameOf(b)))
      .map(id => `<option value="${id}">${escapeHtml(nameOf(id))}</option>`).join('')}</optgroup>`;
    const all = Object.keys(DATA.items);
    return group(t('raws'), all.filter(id => raws.has(id))) +
      group(t('inters'), all.filter(id => !raws.has(id) && !products.has(id))) +
      group(t('products'), all.filter(id => products.has(id)));
  }

  const shortDate = ts => new Date(ts).toLocaleString(lang === 'sk' ? 'sk-SK' : 'cs-CZ', {
    day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  const closedGoals = new Set();
  function renderTeam() {
    const ch = character();
    const config = teamConfig();
    const data = loadTeam();
    const box = $('team');
    const others = (data?.players || []).filter(p => !ch || p.id !== ch.id);
    const selected = new Set(ch ? loadSel(ch) : []);
    const chosen = others.filter(p => selected.has(p.id));
    $('tabteam').textContent = t('team') + (chosen.length ? ` (${chosen.length + 1})` : '');
    const msg = teamMessage.text
      ? `<div class="${teamMessage.error ? 'error' : 'muted'}" aria-live="polite">${escapeHtml(teamMessage.text)}</div>` : '';
    if (!config) {
      box.innerHTML = `<p class="muted">${t('teamIntro')}</p>
        <button class="btn" type="button" data-team="connect">${t('connect')}</button>${msg}`;
      return;
    }
    const players = others.length
      ? `<div class="players">${others.map(p => `<label title="${t('updated')} ${escapeHtml(shortDate(p.ts))}">
          <input type="checkbox" data-player="${escapeHtml(p.id)}" ${selected.has(p.id) ? 'checked' : ''}>
          ${escapeHtml(p.name)} <span class="muted">(${t('level')} ${p.level}, ${escapeHtml(shortDate(p.ts))})</span></label>`).join('')}</div>`
      : `<div class="muted">${t('nobody')}</div>`;

    const own = bagReader();
    const store = ch ? loadStore(ch) : null;
    const people = [{ name: t('me'), count: id => (own ? own(id) : 0) },
      ...chosen.map(p => ({ name: p.name, count: id => Number(p.inv?.[id]) || 0 }))];
    const pct = (have, need) => (need > 0 ? Math.min(1, have / need) : 1);
    const bar = f => `<span class="bar ${f >= 1 ? 'done' : ''}"><i style="width:${Math.round(f * 100)}%"></i></span>`;
    const pctText = f => `${Math.floor(f * 100)} %`;
    // Kto koľko prispel: malým sivým písmom, iba nenulové počty.
    const who = id => {
      const parts = people.map(p => [p.name, p.count(id)]).filter(([, n]) => n > 0);
      return parts.length ? `<small class="who">${parts.map(([n, c]) => `${escapeHtml(n)} ${fmt(c)}`).join(' · ')}</small>` : '';
    };
    const teamHave = id => people.reduce((sum, p) => sum + p.count(id), 0);
    const claims = data?.claims;
    // „Beriem“: kto si položku v cieli zobral; moje meno je zvýraznené, tlačidlo prepína.
    const claimCell = (goalId, id) => {
      if (!Array.isArray(claims) || !ch) return '';
      const list = claims.filter(c => c.goal === goalId && c.item === id);
      const mine = list.some(c => c.player === ch.id);
      const names = list.map(c => (c.player === ch.id ? `<b>${escapeHtml(t('me'))}</b>` : escapeHtml(c.name))).join(', ');
      return `<span class="claim">${names ? `<small>${names}</small> ` : ''}<button class="link" type="button"
        data-claim="${escapeHtml(goalId)}" data-item="${id}" data-on="${mine ? 0 : 1}" ${teamBusy ? 'disabled' : ''}>${mine ? t('unclaim') : t('claim')}</button></span>`;
    };
    const myHoursFor = (id, missing) => {
      if (!ch || missing <= 0 || !DATA.raws[id]) return 0;
      return Calc.hoursFor(missing, Calc.bestJob(id, store, ch.level).rate) ?? 0;
    };

    const goals = (data?.goals || []).filter(g => DATA.items[g.item]);
    const goalCards = goals.map(g => {
      const product = Calc.product(g.item);
      const done = teamHave(g.item);
      const del = `<button class="x" type="button" data-goaldel="${escapeHtml(g.id)}" title="${t('delGoal')}" aria-label="${t('delGoal')}">×</button>`;
      if (!product) {
        const missing = Math.max(0, g.target - done);
        const f = pct(done, g.target);
        const h = myHoursFor(g.item, missing);
        return `<div class="goal">
          <div class="goalhead"><b>${escapeHtml(nameOf(g.item))}</b>
            <span class="muted">${fmt(done)} / ${fmt(g.target)} ${t('pcs')}${missing ? ` · ${t('miss').toLowerCase()} ${fmt(missing)}` : ''}${h ? ` · ${escapeHtml(T[lang].myHours(fmtHours(h)))}` : ''}</span>
            <span class="grow"></span><b class="pct">${pctText(f)}</b>${del}</div>
          ${bar(f)}${who(g.item)}${claimCell(g.id, g.item) ? `<div class="claimline">${t('claimCol')}: ${claimCell(g.id, g.item)}</div>` : ''}</div>`;
      }
      // Výrobok: hlavný cieľ a pod ním medziprodukty a suroviny na zvyšné kusy (ako v pláne).
      // Hotové medziprodukty tímu sa použijú prednostne, suroviny sa rátajú iba na tie, ktoré treba vyrobiť.
      const remaining = Math.max(0, g.target - done);
      const entries = [{ id: g.item, qty: remaining }];
      const full = Calc.explode(entries, null).rawNeed;
      const { rawNeed, inter } = Calc.explode(entries, teamHave);
      const byName = (a, b) => nameOf(a.id).localeCompare(nameOf(b.id));
      const interRows = inter.map(x => ({ id: x.id, inter: true, need: x.need, have: x.have, missing: x.craft, f: pct(x.have, x.need) }))
        .sort(byName);
      const rawRows = [...rawNeed].map(([id, need]) => {
        const have = teamHave(id);
        return { id, need, have, missing: Math.max(0, need - have), f: pct(have, need) };
      }).sort(byName);
      const comps = [...interRows, ...rawRows];
      // Progres: aká časť surovín na zvyšné kusy je pokrytá (zásobou surovín alebo hotovými medziproduktmi).
      const fullSum = [...full.values()].reduce((a, n) => a + n, 0);
      const missSum = rawRows.reduce((a, c) => a + c.missing, 0);
      const rawFrac = fullSum ? Math.max(0, 1 - missSum / fullSum) : 1;
      const f = g.target ? Math.min(1, (Math.min(done, g.target) + remaining * rawFrac) / g.target) : 1;
      const hours = rawRows.reduce((a, c) => a + myHoursFor(c.id, c.missing), 0);
      const rows = comps.map(c => `<tr class="${c.missing ? '' : 'ok'}">
          <td>${escapeHtml(nameOf(c.id))}${c.inter ? ` <span class="tag">${t('interOne')}</span>` : ''}</td>
          <td class="n">${fmt(c.need)}</td>
          <td class="n"><b>${fmt(c.have)}</b>${who(c.id)}</td>
          <td class="n miss">${c.missing ? fmt(c.missing) : '✓'}</td>
          <td class="prog">${bar(c.f)}<small>${pctText(c.f)}</small></td>
          ${Array.isArray(claims) ? `<td>${c.missing && !c.inter ? claimCell(g.id, c.id) : ''}</td>` : ''}</tr>`).join('');
      const open = !closedGoals.has(g.id);
      return `<details class="goal" data-goal="${escapeHtml(g.id)}" ${open ? 'open' : ''}><summary>
        <div class="goalhead"><b>${escapeHtml(nameOf(g.item))} – ${fmt(g.target)} ${t('pcs')}</b>
          <span class="muted">${t('doneItems')} ${fmt(done)}${hours ? ` · ${escapeHtml(T[lang].myHours(fmtHours(hours)))}` : ''}</span>
          <span class="grow"></span><b class="pct">${pctText(f)}</b>
          ${remaining ? `<button class="link" type="button" data-toplan="${g.item}" data-missing="${remaining}" title="${t('toPlanTitle')}">${t('toPlan')} (${fmt(remaining)})</button>` : ''}${del}</div>
        ${bar(f)}${who(g.item)}</summary>
        ${remaining ? `<table class="comp"><thead><tr><th>${t('raw')}</th><th class="n">${t('need')}</th>
          <th class="n">${t('teamHas')}</th><th class="n">${t('miss')}</th><th>${t('progress')}</th>${Array.isArray(claims) ? `<th>${t('claimCol')}</th>` : ''}</tr></thead>
          <tbody>${rows}</tbody></table>` : ''}
      </details>`;
    }).join('');
    const goalTable = goals.length
      ? goalCards + (claims === null && data?.ts ? `<div class="muted">${t('claimsUpdate')}</div>` : '')
      : `<div class="muted">${t('noGoals')}</div>`;

    const shared = ch ? GM_getValue(sharedKey(ch), null) : null;
    const shareOn = ch ? sharing(ch) : false;
    box.innerHTML = `
      <label class="row share"><input type="checkbox" data-share ${shareOn ? 'checked' : ''} ${teamBusy ? 'disabled' : ''}>
        <b>${t('share')}</b> <span class="muted">(${t('shareHint')})</span></label>
      <div class="row">
        <button class="btn" type="button" data-team="sync" ${teamBusy ? 'disabled' : ''}>${t('sync')}</button>
        <span class="muted grow">${[
          shareOn && shared ? `${t('sharedAt')}: ${escapeHtml(shortDate(shared.ts))}` : (shareOn ? '' : t('notShared')),
          data?.ts ? `${t('loaded')}: ${escapeHtml(shortDate(data.ts))}` : ''
        ].filter(Boolean).join(' · ')}</span>
        <button class="link" type="button" data-team="connect">${t('changeCode')}</button>
      </div>
      ${msg}
      <h4>${t('players')}</h4>${players}
      <h4>${t('goals')}</h4>
      <div class="muted">${t('goalsNote')}</div>
      ${goalTable}
      <div class="row goaladd">
        <select id="goalitem" aria-label="${t('item')}">${itemOptions()}</select>
        <input id="goaltarget" type="number" min="1" step="1" value="100" aria-label="${t('goalTarget')}">
        <button class="btn" type="button" data-team="goal" ${teamBusy ? 'disabled' : ''}>${t('addGoal')}</button>
      </div>`;
  }

  let tab = GM_getValue('tab', 'plan');
  function renderTabs() {
    $('tabplan').textContent = t('myPlan');
    for (const b of pui.querySelectorAll('[data-tab]')) b.setAttribute('aria-selected', String(b.dataset.tab === tab));
    $('pane-plan').hidden = tab !== 'plan';
    $('pane-team').hidden = tab !== 'team';
    $('pane-sell').hidden = tab !== 'sell';
    $('tabsell').textContent = t('sell');
    if (tab === 'sell') renderSell();
  }

  function renderLabels() {
    $('title').textContent = t('title');
    $('close').title = t('close');
    $('close').setAttribute('aria-label', t('close'));
    $('min').title = t(panel.classList.contains('min') ? 'restore' : 'minimize');
    $('min').setAttribute('aria-label', $('min').title);
    $('lcat').textContent = t('category');
    $('lprof').textContent = t('lprof');
    $('lprod').textContent = t('product');
    $('lqty').textContent = t('qty');
    $('add').textContent = t('add');
    $('foot').textContent = t('foot');
    openButton.title = t('icon');
    openButton.setAttribute('aria-label', t('icon'));
    panel.setAttribute('aria-label', t('title'));
    for (const b of pui.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }

  function renderAll() {
    if (panel.hidden) return;
    renderLabels();
    renderStatus();
    renderSelects();
    renderPlan();
    renderTeam();
    renderResults();
    renderTabs();
  }


  // ---------- Predaj nepotrebných vecí ----------
  // Zoznam sa zostaví z už načítaného batoha (0 požiadaviek). Predáva sa až po kliknutí a potvrdení,
  // každá položka jednou požiadavkou ako pri predaji v hre (obchodník), postupne s odstupom.
  const keepKey = ch => `keep:${ch.key}`;
  const GEAR = new Set(['head', 'neck', 'body', 'belt', 'pants', 'foot', 'right_arm', 'left_arm']);
  const SELL_GAP_MS = 1200;
  let selling = null;
  let sellMessage = { text: '', error: false };
  const unchecked = new Set();

  // Oblečenie z uložených sád (Šatník), ak ich hra už načítala.
  function equipItems() {
    const list = game.EquipManager?.list;
    const sets = Array.isArray(list) ? list : (list && typeof list === 'object' ? Object.values(list) : []);
    const ids = new Set();
    const collect = v => {
      if (v && typeof v === 'object') { for (const x of Object.values(v)) collect(x); return; }
      const n = Number(v);
      if (Number.isInteger(n) && n >= 1000) ids.add(n);
    };
    for (const set of sets) collect(set);
    return { ids, count: sets.length };
  }

  function sellReason(o, ctx) {
    if (ctx.keep.has(o.item_id)) return 'keep';
    if (o.named) return 'named';
    if (o.set) return 'set';
    if (Number(o.item_level) > 0) return 'upgraded';
    if (o.unique) return 'unique';
    if (o.quest) return 'quest';
    if (!o.sellable || !(Number(o.sell_price) > 0)) return 'nosell';
    if (o.type === 'recipe') return 'recipe';
    if (o.type === 'animal') return 'animal';
    if (o.type === 'collection') return 'collection';
    if (DATA.items[o.item_id]) return 'craft';
    if (ctx.goals.has(o.item_id)) return 'goal';
    if (ctx.equip.has(o.item_id)) return 'equip';
    if (o.type === 'yield' && Array.isArray(o.usebonus) && o.usebonus.length) return 'usable';
    if (!GEAR.has(o.type) && o.type !== 'yield') return 'nosell';
    return null;
  }

  function sellData() {
    const ch = character();
    const bag = game.Bag;
    if (!ch || !bag?.loaded || !bag.items_by_id) return null;
    const goals = new Set((loadTeam()?.goals || []).map(g => Number(g.item)));
    const equip = equipItems();
    const ctx = { keep: new Set(GM_getValue(keepKey(ch), [])), goals, equip: equip.ids };
    const items = [];
    const kept = {};
    for (const it of Object.values(bag.items_by_id)) {
      const o = it?.obj;
      if (!o || !(Number(it.count) > 0)) continue;
      const why = sellReason(o, ctx);
      if (why) { kept[why] = (kept[why] || 0) + 1; continue; }
      items.push({ it, id: o.item_id, name: String(o.name).trim(), level: Number(o.level) || 0, type: o.type,
        count: Number(it.count), price: Number(o.sell_price), sum: Number(o.sell_price) * Number(it.count) });
    }
    items.sort((a, b) => b.sum - a.sum || a.name.localeCompare(b.name));
    return { ch, items, kept, keep: ctx.keep, equipSets: equip.count };
  }

  const money = n => `$${fmt(n)}`;

  function renderSell() {
    const box = $('sell');
    if (!box || tab !== 'sell') return;
    const data = sellData();
    if (!data) { box.innerHTML = `<div class="card warn">${t('bagMissing')}</div>`; return; }
    const chosen = data.items.filter(x => !unchecked.has(x.id));
    const chosenSum = chosen.reduce((a, x) => a + x.sum, 0);
    const busy = !!selling;
    const msg = selling ? t('selling')(selling.done + 1, selling.total) : sellMessage.text;
    const table = (title, rows) => rows.length ? `<h4>${title}</h4><table><thead><tr><th class="c"></th><th>${t('itemCol')}</th>
        <th class="n">${t('qty')}</th><th class="n">${t('piece')}</th><th class="n">${t('total')}</th><th></th></tr></thead><tbody>
        ${rows.map(x => `<tr class="${unchecked.has(x.id) ? 'off' : ''}">
          <td class="c"><input type="checkbox" data-pick="${x.id}" ${unchecked.has(x.id) ? '' : 'checked'} ${busy ? 'disabled' : ''}></td>
          <td>${escapeHtml(x.name)}${x.level ? ` <span class="lvl">(${t('level')} ${x.level})</span>` : ''}</td>
          <td class="n">${fmt(x.count)}</td><td class="n">${money(x.price)}</td><td class="n"><b>${money(x.sum)}</b></td>
          <td><button class="link" type="button" data-sellone="${x.id}" ${busy ? 'disabled' : ''}>${t('sellOne')}</button>
            <button class="link" type="button" data-keep="${x.id}" ${busy ? 'disabled' : ''}>${t('keepList')}</button></td></tr>`).join('')}
        </tbody></table>` : '';
    const keptText = Object.entries(data.kept).map(([k, n]) => `${t('why')[k] || k} ${fmt(n)}`).join(' · ');
    box.innerHTML = `
      <p class="muted">${t('sellIntro')}</p>
      <div class="card row sellbar">
        <span class="grow">${t('sellTotal')}: <b>${fmt(data.items.length)}</b> · ${t('sellSelected')}: <b>${fmt(chosen.length)}</b> = <b>${money(chosenSum)}</b></span>
        ${busy ? `<button class="btn" type="button" data-sellstop>${t('sellStop')}</button>`
          : `<button class="btn" type="button" data-sellall ${chosen.length ? '' : 'disabled'}>${t('sellBtn')}</button>`}
      </div>
      ${msg ? `<div class="${sellMessage.error && !selling ? 'error' : 'muted'}" aria-live="polite">${escapeHtml(msg)}</div>` : ''}
      ${data.items.length ? '' : `<p class="muted">${t('none')}</p>`}
      ${table(t('gear'), data.items.filter(x => GEAR.has(x.type)))}
      ${table(t('goods'), data.items.filter(x => !GEAR.has(x.type)))}
      <p class="muted">${t('keptLabel')}: ${keptText || '–'}</p>
      <p class="muted">${data.equipSets ? t('equipKnown')(data.equipSets) : t('equipHint')}</p>
      ${data.keep.size ? `<button class="link" type="button" data-keepreset ${busy ? 'disabled' : ''}>${t('resetKeep')} (${fmt(data.keep.size)})</button>` : ''}`;
  }

  // Jeden predaj = jedna požiadavka, rovnaká ako pri predaji obchodníkovi v hre.
  function sellItem(x) {
    return new Promise((resolve, reject) => {
      const Ajax = game.Ajax;
      const bag = game.Bag;
      if (!Ajax?.remoteCall || !bag) { reject(new Error('no game')); return; }
      const cur = bag.items_by_id?.[x.id];
      if (!cur || !(Number(cur.count) > 0)) { resolve(0); return; }
      const count = Number(cur.count);
      const timer = setTimeout(() => reject(new Error('timeout')), 15000);
      Ajax.remoteCall('item_trader', 'sell', {
        inv_id: cur.inv_id, town_id: game.Character.playerId, item_id: x.id, count,
        last_inv_id: typeof bag.getLastInvId === 'function' ? bag.getLastInvId() : undefined
      }, json => {
        clearTimeout(timer);
        if (!json || json.error) { reject(new Error(typeof json?.error === 'string' ? json.error : (json?.msg || 'error'))); return; }
        try {
          if (json.money !== undefined) game.Character.setMoney?.(json.money);
          if (json.changes) bag.updateChanges?.(json.changes);
        } catch { /* hra si batoh obnoví sama */ }
        resolve(Number(cur.obj?.sell_price || 0) * count);
      });
    });
  }

  async function sellList(list) {
    if (selling || !list.length) return;
    selling = { total: list.length, done: 0, sum: 0, stop: false };
    sellMessage = { text: '', error: false };
    renderSell();
    try {
      for (const x of list) {
        if (selling.stop) break;
        selling.sum += await sellItem(x);
        selling.done++;
        renderSell();
        if (selling.done < selling.total && !selling.stop) await new Promise(r => setTimeout(r, SELL_GAP_MS));
      }
      sellMessage = { text: t('sold')(selling.done, money(selling.sum)), error: false };
    } catch (e) {
      sellMessage = { text: `${t('sold')(selling.done, money(selling.sum))} ${t('sellFail')} ${e.message}`, error: true };
    } finally {
      selling = null;
      renderSell();
      renderResults();
    }
  }

  function L() { return lang === 'sk' ? 0 : 1; }

  // Panel sa vojde do voľného miesta hry a neprekrýva horný a dolný panel, postavu, chat,
  // minimapu ani menu. Prepočíta sa pri otvorení a pri zmene veľkosti okna.
  const GAP = 8;
  const MAX_WIDTH = 900;
  const MIN_WIDTH = 520;
  const MIN_HEIGHT = 300;
  const MAX_HEIGHT = 680;

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

  // Okno sa dá presunúť myšou za hornú lištu; poloha sa zapamätá. Dvojklik na lištu ho vráti na automatické miesto.
  const viewport = () => ({
    w: document.documentElement.clientWidth || window.innerWidth,
    h: document.documentElement.clientHeight || window.innerHeight
  });

  // Pás, v ktorom sa okno smie pohybovať: pod horným panelom hry a nad dolným panelom.
  function band() {
    const { w, h } = viewport();
    return {
      left: GAP, right: w - GAP,
      top: Math.min(h - 60, lowest(['ui_topbar', 'buffbars'], 0) + GAP),
      bottom: Math.max(60, highest(['ui_bottombar'], h) - GAP)
    };
  }

  // Okno má stálu veľkosť podľa obrazovky; pri presúvaní sa mení iba poloha.
  let size = { w: 860, h: 500 };
  const minimized = () => panel.classList.contains('min');
  const panelHeight = () => (minimized() ? panel.offsetHeight : size.h);

  function clampToBand(left, top) {
    const b = band();
    return {
      left: Math.round(Math.min(Math.max(b.left, left), Math.max(b.left, b.right - size.w))),
      top: Math.round(Math.min(Math.max(b.top, top), Math.max(b.top, b.bottom - panelHeight())))
    };
  }

  function placePanel() {
    if (panel.hidden) return;
    const a = freeArea();
    const b = band();
    size = {
      w: Math.round(Math.max(260, Math.min(MAX_WIDTH, a.right - a.left, b.right - b.left))),
      h: Math.round(Math.max(120, Math.min(MAX_HEIGHT, b.bottom - b.top, Math.max(MIN_HEIGHT, a.bottom - a.top))))
    };
    panel.style.width = `${size.w}px`;
    panel.style.height = minimized() ? '' : `${size.h}px`;
    panel.style.maxHeight = `${Math.max(120, b.bottom - b.top)}px`;
    const saved = GM_getValue('pos', null);
    const want = saved || { left: a.left + Math.max(0, (a.right - a.left - size.w) / 2), top: a.top };
    const { left, top } = clampToBand(want.left, want.top);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  }

  function setMinimized(on) {
    panel.classList.toggle('min', on);
    GM_setValue('min', on);
    const btn = $('min');
    btn.textContent = on ? '□' : '–';
    btn.title = on ? t('restore') : t('minimize');
    btn.setAttribute('aria-pressed', String(on));
    placePanel();
  }

  let drag = null;
  const header = pui.querySelector('header');
  header.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button')) return;
    const r = panel.getBoundingClientRect();
    drag = { dx: event.clientX - r.left, dy: event.clientY - r.top, width: r.width, id: event.pointerId };
    header.setPointerCapture(event.pointerId);
    panel.classList.add('dragging');
    event.preventDefault();
  });
  header.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const { left, top } = clampToBand(event.clientX - drag.dx, event.clientY - drag.dy);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  });
  const endDrag = event => {
    if (!drag || event.pointerId !== drag.id) return;
    drag = null;
    panel.classList.remove('dragging');
    GM_setValue('pos', { left: parseFloat(panel.style.left), top: parseFloat(panel.style.top) });
  };
  header.addEventListener('pointerup', endDrag);
  header.addEventListener('pointercancel', endDrag);
  header.addEventListener('dblclick', event => {
    if (event.target.closest('button')) return;
    GM_deleteValue('pos');
    placePanel();
  });
  // Hra po zmene veľkosti okna presúva svoje panely s oneskorením, preto prepočet zopakujeme.
  let placeTimers = [];
  window.addEventListener('resize', () => {
    placePanel();
    placeTimers.forEach(clearTimeout);
    placeTimers = [250, 1000].map(ms => setTimeout(placePanel, ms));
  });

  // Ako herné okná: kliknutie alebo presun dá okno navrch, kliknutie na herné okno ho dá zase pod neho.
  function mountPanel() {
    const target = document.getElementById('windows') || document.body;
    if (panelHost.parentElement !== target) target.appendChild(panelHost);
  }
  function raise() {
    const parent = panelHost.parentElement;
    if (!parent) return;
    if (parent === document.body) { panelHost.style.zIndex = '2147483000'; return; }
    const others = [...parent.children].filter(c => c !== panelHost)
      .map(c => parseInt(getComputedStyle(c).zIndex, 10) || 0);
    const highestOther = Math.max(0, ...others);
    if ((parseInt(panelHost.style.zIndex, 10) || 0) > highestOther) return;
    const wm = game.wman;
    const z = Math.max(highestOther, Number(wm?.lastIndex) || 0) + 1;
    panelHost.style.zIndex = String(z);
    if (wm && typeof wm.lastIndex === 'number') wm.lastIndex = z;
  }
  panel.addEventListener('pointerdown', raise, true);
  mountPanel();
  // Poistka: keď hra dá kliknuté okno navrch po svojom, kalkulačka ustúpi pod neho.
  document.addEventListener('mousedown', event => {
    const win = event.target?.closest?.('.tw2gui_window');
    if (!win || panel.hidden || win.parentElement !== panelHost.parentElement) return;
    setTimeout(() => {
      const zw = parseInt(getComputedStyle(win).zIndex, 10) || 0;
      if ((parseInt(panelHost.style.zIndex, 10) || 0) >= zw) panelHost.style.zIndex = String(Math.max(1, zw - 1));
    }, 0);
  }, true);

  let gameRecipes = 0;
  function toggle(show = panel.hidden) {
    if (show && !gameRecipes) gameRecipes = mergeGameRecipes(game);
    if (show) mountPanel();
    panel.hidden = !show;
    openButton.setAttribute('aria-expanded', String(show));
    if (show) {
      raise();
      setMessage(message.text, message.error);
      renderAll();
      setMinimized(!!GM_getValue('min', false));
      autoTeam();
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
  $('min').addEventListener('click', () => setMinimized(!minimized()));
  $('refresh').addEventListener('click', refreshRates);
  $('category').addEventListener('change', renderSelects);
  $('profession').addEventListener('change', () => {
    GM_setValue('prof', $('profession').value);
    renderSelects();
  });
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
  $('sell').addEventListener('click', event => {
    const el = event.target.closest('button');
    if (!el || el.disabled) return;
    const data = sellData();
    if (!data) return;
    if (el.dataset.sellstop !== undefined) { if (selling) selling.stop = true; return; }
    if (el.dataset.keepreset !== undefined) { GM_setValue(keepKey(data.ch), []); renderSell(); return; }
    if (el.dataset.keep) {
      const keep = new Set(GM_getValue(keepKey(data.ch), []));
      keep.add(Number(el.dataset.keep));
      GM_setValue(keepKey(data.ch), [...keep]);
      renderSell();
      return;
    }
    if (el.dataset.sellone) {
      const x = data.items.find(i => i.id === Number(el.dataset.sellone));
      if (x && window.confirm(t('sellOneConfirm')(x.name, fmt(x.count), money(x.sum)))) sellList([x]);
      return;
    }
    if (el.dataset.sellall !== undefined) {
      const list = data.items.filter(x => !unchecked.has(x.id));
      const sum = list.reduce((a, x) => a + x.sum, 0);
      if (list.length && window.confirm(t('sellConfirm')(fmt(list.length), money(sum)))) sellList(list);
    }
  });
  $('sell').addEventListener('change', event => {
    const box = event.target.closest('[data-pick]');
    if (!box) return;
    const id = Number(box.dataset.pick);
    if (box.checked) unchecked.delete(id); else unchecked.add(id);
    renderSell();
  });
  $('team').addEventListener('click', event => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = target.dataset.team;
    const ch = character();
    if (action === 'connect') connectTeam();
    else if (action === 'sync') syncTeam();
    else if (action === 'goal' && ch) {
      const item = Number($('goalitem').value);
      const target_ = Math.floor(Number($('goaltarget').value));
      if (item && target_ >= 1) teamCall({ action: 'goal-add', goal: { item, target: target_, by: ch.name } }, t('goalAdded'));
    } else if (target.dataset.goaldel) {
      teamCall({ action: 'goal-del', id: target.dataset.goaldel }, t('goalDeleted'));
    } else if (target.dataset.claim && ch) {
      teamCall({ action: target.dataset.on === '1' ? 'claim' : 'unclaim', goal: target.dataset.claim,
        item: Number(target.dataset.item), player: { id: ch.id, name: ch.name, level: ch.level } }, t('claimSaved'));
    } else if (target.dataset.toplan && ch) {
      const id = Number(target.dataset.toplan);
      const qty = Number(target.dataset.missing);
      updatePlan(entries => {
        const found = entries.find(([pid]) => pid === id);
        if (found) found[1] = Math.max(found[1], qty);
        else entries.push([id, qty]);
      });
      setTeamMessage(t('addedToPlan'));
      renderTeam();
      renderPlan();
      renderResults();
    }
  });
  $('team').addEventListener('toggle', event => {
    const id = event.target.dataset?.goal;
    if (id === undefined) return;
    if (event.target.open) closedGoals.delete(id);
    else closedGoals.add(id);
  }, true);
  $('team').addEventListener('change', event => {
    if (event.target.dataset?.share !== undefined) {
      const ch = character();
      if (!ch) return;
      GM_setValue(shareKey(ch), event.target.checked);
      if (!event.target.checked) setTeamMessage(t('unshared'));
      syncTeam();
      return;
    }
    const id = event.target.dataset?.player;
    const ch = character();
    if (id === undefined || !ch) return;
    const selected = new Set(loadSel(ch));
    if (event.target.checked) selected.add(id);
    else selected.delete(id);
    GM_setValue(selKey(ch), [...selected]);
    renderTeam();
    renderResults();
  });
  for (const b of pui.querySelectorAll('[data-tab]')) {
    b.addEventListener('click', () => {
      tab = b.dataset.tab;
      GM_setValue('tab', tab);
      renderTabs();
    });
  }
  for (const b of pui.querySelectorAll('[data-lang]')) {
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      GM_setValue('lang', lang);
      renderAll();
    });
  }
  for (const root of [ui, pui]) {
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape') toggle(false);
      event.stopPropagation();
    });
    root.addEventListener('keyup', event => event.stopPropagation());
    root.addEventListener('keypress', event => event.stopPropagation());
  }

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
  GM_registerMenuCommand('Nastaviť tím (tímový kód)', () => { toggle(true); connectTeam(); });
  GM_registerMenuCommand('Vymazať uloženú nálezku tejto postavy', () => {
    const ch = character();
    if (!ch) return;
    if (!window.confirm(`Vymazať uloženú nálezku postavy ${ch.name}? Ďalšie obnovenie uloží novú.`)) return;
    GM_deleteValue(storeKey(ch));
    renderAll();
  });
})();
