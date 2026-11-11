// ==UserScript==
// @name         The West – remeselná kalkulačka
// @namespace    https://github.com/jurajgallusads-stack/the-west-import
// @version      3.0.0
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
      foot: `1 hodina práce = ${ENERGY_PER_HOUR} energie. Rátajú sa iba obyčajné 1-hodinové práce a isté kusy (pod 100 % priemer).`,
      baseNote: 'odhad zo základnej šance',
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
      foot: `1 hodina práce = ${ENERGY_PER_HOUR} energie. Počítají se jen běžné 1hodinové práce a jisté kusy (pod 100 % průměr).`,
      baseNote: 'odhad ze základní šance',
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
  // Ikona TW ostáva v rade posilňovačov. Kalkulačka sa otvára ako bežné okno hry (wman, west.gui),
  // takže má rovnaký rám, titulok, záložky, tlačidlá a posúvanie ako ostatné okná The West.
  const host = document.createElement('div');
  const ui = host.attachShadow({ mode: 'open' });
  ui.innerHTML = `
    <style>
      :host { position: fixed; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 2147483000; font: 13px Arial, sans-serif; }
      :host([data-hud]) { position: relative; float: left; left: auto; bottom: auto; transform: none; margin-right: 5px; }
      #open { display: block; width: 43px; height: 43px; padding: 0; cursor: pointer; border: 2px solid #87643c; border-radius: 3px;
        background: linear-gradient(#5e4427, #2f2015); color: #f9e2a8; font: bold 13px Arial, sans-serif; }
      #open:hover, #open[aria-expanded="true"] { border-color: #d2a76a; }
    </style>
    <button id="open" type="button" aria-expanded="false">TW</button>`;
  const openButton = ui.getElementById('open');

  // Obsah okna. ID majú predponu twc-, aby sa nebili s prvkami hry.
  const groupframe = inner => `<div class="tw2gui_groupframe twc-gf"><div class="tw2gui_groupframe_background bg0"></div>
    <div class="tw2gui_groupframe_background bg1"></div><div class="tw2gui_groupframe_background bg2"></div>
    <div class="tw2gui_groupframe_background bg3"></div><div class="tw2gui_groupframe_background bg4"></div>
    <div class="tw2gui_groupframe_frame tw2gui_bg_tl"></div><div class="tw2gui_groupframe_frame tw2gui_bg_tr"></div>
    <div class="tw2gui_groupframe_frame tw2gui_bg_bl"></div><div class="tw2gui_groupframe_frame tw2gui_bg_br"></div>
    <div class="tw2gui_groupframe_content_pane">${inner}</div></div>`;
  const root = document.createElement('div');
  root.className = 'twc';
  root.innerHTML = `
    <nav class="tabs" role="tablist">
      <button id="twc-tabplan" type="button" role="tab" data-tab="plan"></button>
      <button id="twc-tabteam" type="button" role="tab" data-tab="team"></button>
    </nav>
    <div id="twc-bagwarn" class="twc-warn" hidden></div>
    <div id="twc-pane-team" hidden><div id="twc-team"></div></div>
    <div id="twc-pane-plan">
      ${groupframe(`<div class="row twc-status"><span id="twc-who" class="grow"></span><span class="twc-langs"><button type="button" data-lang="sk">SK</button><button type="button" data-lang="cz">CZ</button></span><button id="twc-refresh" class="btn" type="button"></button></div>`)}
      <div id="twc-message" class="muted" aria-live="polite"></div>
      <div class="row twc-add">
        <label><span id="twc-lprof"></span> <select id="twc-profession"></select></label>
        <label><span id="twc-lcat"></span> <select id="twc-category"></select></label>
      </div>
      <div class="row twc-add">
        <label class="grow"><span id="twc-lprod" class="twc-hidden-label"></span><select id="twc-product"></select></label>
        <label><span id="twc-lqty" class="twc-hidden-label"></span><input id="twc-qty" type="number" min="1" step="1" value="1"></label>
        <button id="twc-add" class="btn" type="button"></button>
      </div>
      <div id="twc-plan"></div>
      <div id="twc-summary" class="sum"></div>
      <div id="twc-results"></div>
    </div>
    <div id="twc-foot" class="muted twc-foot"></div>`;
  const $ = id => root.querySelector('#twc-' + id) || ui.getElementById(id);
  const panelSel = sel => root.querySelectorAll(sel);

  // Vzhľad hry: obrázky z CDN hry, písmo a farby ako v herných oknách. Platí iba vnútri .twc.
  function installStyle() {
    if (document.getElementById('twc-style')) return;
    const cdn = String(game.Game?.cdnURL || 'https://westcz.innogamescdn.com').replace(/\/$/, '');
    const img = path => `url("${cdn}/images/tw2gui/${path}")`;
    const style = document.createElement('style');
    style.id = 'twc-style';
    style.textContent = `
      .twc { font: 13px Arial, Verdana, sans-serif; color: #000; padding: 2px 6px 10px; text-align: left; line-height: 1.35; }
      .twc [hidden] { display: none !important; }
      .twc .row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; }
      .twc .grow { flex: 1; }
      .twc .muted { color: #5b4a35; font-size: 12px; }
      .twc .error { color: #8b0000; font-weight: bold; }
      .twc .twc-warn { background: rgba(160, 30, 20, .12); border: 1px solid #a0522d; color: #6b1a0a; padding: 6px 10px; margin: 4px 0 8px; border-radius: 3px; }
      .twc .twc-gf { margin: 2px 0 8px; height: auto !important; position: relative; }
      .twc .twc-gf .tw2gui_groupframe_content_pane { position: relative; height: auto !important; padding: 6px 10px; }
      /* Pozadie okna hry je obrázok s pevnou výškou; pri väčšom okne ho opakujeme, aby nevznikla medzera. */
      .twcalc-win .tw2gui_window_inset { background-repeat: repeat !important; }
      .twc .twc-status { min-height: 36px; }
      .twc .twc-add { margin: 6px 2px; }
      .twc .twc-add label { display: inline-flex; align-items: center; gap: 6px; }
      .twc .twc-hidden-label { display: none; }
      .twc #twc-message { margin: 0 4px 4px; }
      .twc .twc-foot { margin: 10px 4px 0; }
      .twc .twc-langs { display: inline-flex; gap: 2px; }
      .twc .twc-langs button { border: 1px solid #8b6b3f; background: rgba(255,255,255,.35); color: #3b2a14; border-radius: 3px; padding: 0 6px; cursor: pointer; font: bold 11px Arial, sans-serif; }
      .twc .twc-langs button[aria-pressed="true"] { background: #5b3a12; color: #f2dfa7; }
      .twc.twc-in-window nav.tabs { display: none; }
      .twc nav.tabs { display: flex; gap: 4px; margin-bottom: 6px; }
      .twc nav.tabs button[aria-selected="true"] { font-weight: bold; }
      /* Tlačidlá ako v hre (tw2gui_button), aj keď sú to <button>. */
      .twc button.tw2gui_button { border: 0; background: none; padding: 0; font: inherit; display: inline-block; vertical-align: middle; }
      .twc button.tw2gui_button:disabled { opacity: .55; filter: grayscale(.5); cursor: default; }
      .twc button.link { border: 0; background: none; padding: 0; color: #5b3a12; text-decoration: underline; cursor: pointer; font: inherit; font-size: 12px; }
      .twc button.link:disabled { opacity: .5; cursor: default; }
      .twc button.x { border: 0; background: none; color: #8b0000; font: bold 16px Arial, sans-serif; cursor: pointer; padding: 0 4px; }
      /* Výber ako herný combobox; pôvodný <select> ostáva skrytý ako model. */
      .twc select.twc-skinned { display: none; }
      .twc input.twc-skinned-num { width: 52px; border: 0; background: transparent; text-align: right; -moz-appearance: textfield; }
      .twc input.twc-skinned-num::-webkit-inner-spin-button, .twc input.twc-skinned-num::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
      .twc input.twc-skinned-check { display: none; }
      .twc .tw2gui_checkbox { display: inline-block; vertical-align: middle; cursor: pointer; }
      .twc .tw2gui_checkbox.twc-disabled { opacity: .5; cursor: default; }
      /* Tabuľky ako herná fancytable. */
      .twc .twc-ft { position: relative; height: auto !important; margin: 4px 0 10px; }
      .twc .twc-ft > .trows, .twc .twc-ft > .trows > .tbody { position: relative; height: auto !important; top: auto !important; bottom: auto !important; }
      .twc .twc-ft > .trows > .tbody { padding: 0 7px 7px; }
      .twc table { width: 100%; border-collapse: collapse; font-size: 12px; }
      .twc table thead th { background: ${img('table/table_thead.jpg?3')} 50% 100%; height: 30px; padding: 0 6px; text-align: left;
        font-weight: 700; white-space: nowrap; color: #000; }
      .twc table tbody tr { background: ${img('table/table_row.png')} 50% 0 repeat-x; }
      .twc table td { padding: 3px 5px; height: 24px; vertical-align: middle; }
      .twc td.job { white-space: nowrap; max-width: 190px; overflow: hidden; text-overflow: ellipsis; }
      .twc td.n, .twc th.n { text-align: right; white-space: nowrap; }
      .twc tr.na td { background: rgba(160, 30, 20, .14); }
      .twc td.miss { color: #8b0000; font-weight: bold; }
      .twc tr.ok td.miss, .twc td.ok { color: #2f6b1f; font-weight: bold; }
      .twc tfoot td { font-weight: bold; border-top: 1px solid #8b6b3f; height: 26px; }
      .twc .job small { display: block; color: #5b4a35; font-size: 10px; line-height: 11px; overflow: hidden; text-overflow: ellipsis; }
      .twc .tag { font-size: 11px; color: #6b5a40; font-style: italic; }
      .twc .badge { display: inline-block; padding: 0 6px; border-radius: 8px; font-size: 11px; background: #8b0000; color: #fff; margin-left: 4px; }
      .twc .twc-ico { display: inline-block; width: 24px; height: 24px; margin-right: 6px; vertical-align: middle; background: center / contain no-repeat; }
      .twc .sum { display: flex; flex-wrap: wrap; gap: 6px 24px; margin: 4px 6px 2px; }
      .twc .sum div { font-size: 13px; }
      .twc .sum b { font: bold 18px Georgia, 'Times New Roman', serif; color: #5b3a12; margin-left: 6px; }
      .twc .sum .bad b { color: #8b0000; }
      .twc details { margin-top: 6px; }
      .twc summary { cursor: pointer; font-weight: bold; }
      .twc h4 { margin: 10px 0 4px; font: bold 14px Georgia, 'Times New Roman', serif; color: #3b2a14; }
      .twc #twc-team .players { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 10px; }
      .twc #twc-team .players label, .twc #twc-team .share { display: inline-flex; align-items: center; gap: 4px; cursor: pointer; }
      .twc #twc-team .share { margin-bottom: 8px; }
      .twc #twc-team .goaladd { margin-top: 8px; }
      .twc .goal { background: ${img('groupframe/groupframe_bg.jpg?12')}; border: 1px solid #a8885a; border-radius: 4px;
        padding: 8px 10px; margin: 8px 0; box-shadow: inset 0 0 6px rgba(90, 60, 20, .25); }
      .twc details.goal > summary { list-style: none; cursor: pointer; font-weight: normal; }
      .twc details.goal > summary::-webkit-details-marker { display: none; }
      .twc details.goal > summary .goalhead b:first-child::before { content: '▸ '; color: #5b3a12; }
      .twc details.goal[open] > summary .goalhead b:first-child::before { content: '▾ '; }
      .twc .goalhead { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px; }
      .twc .goalhead .pct { font: bold 15px Georgia, serif; color: #5b3a12; }
      .twc .bar { display: block; height: 8px; background: rgba(90, 60, 20, .2); border: 1px solid #8b6b3f; border-radius: 4px; overflow: hidden; margin: 5px 0 2px; }
      .twc .bar i { display: block; height: 100%; background: linear-gradient(#d29b4c, #9b6424); }
      .twc .bar.done i { background: linear-gradient(#7fb35a, #3f7a24); }
      .twc td.prog { min-width: 90px; }
      .twc td.prog .bar { margin: 2px 0 0; }
      .twc td.prog small { color: #5b4a35; font-size: 10px; }
      .twc .claim small { color: #3b2a14; font-size: 11px; }
      .twc .claimline { font-size: 11px; color: #5b4a35; margin-top: 2px; }
      .twc small.who { display: block; color: #6e6152; font-size: 10px; font-weight: normal; line-height: 1.2; }
      .twc table.comp { margin-top: 6px; }
      .twc table.comp td { padding: 2px 6px; }
    `;
    document.head.appendChild(style);
  }

  // Herné ovládacie prvky: po každom vykreslení sa <button>, <select>, čísla, zaškrtávacie políčka a tabuľky
  // oblečú do vzhľadu hry. Logika ostáva na pôvodných prvkoch (value, checked, udalosti).
  const gui = () => game.west?.gui;
  let skinning = false;
  function skinButton(btn) {
    if (!btn.classList.contains('btn')) return;
    const label = btn.querySelector(':scope > .textart_title')?.textContent ?? btn.textContent;
    if (btn.classList.contains('tw2gui_button') && btn.querySelector(':scope > .textart_title') && btn.dataset.twcLabel === label) return;
    btn.classList.add('tw2gui_button');
    btn.innerHTML = '<div class="tw2gui_button_right_cap"></div><div class="tw2gui_button_left_cap"></div>' +
      '<div class="tw2gui_button_middle_bg"></div><div class="textart_title"></div>';
    btn.querySelector('.textart_title').textContent = label;
    btn.dataset.twcLabel = label;
  }
  function skinSelect(sel) {
    const G = gui();
    if (!G?.Combobox) return;
    const opts = [...sel.querySelectorAll('optgroup, option')];
    const sig = opts.map(o => (o.tagName === 'OPTGROUP' ? `#${o.label}` : `${o.value}=${o.textContent}`)).join('|') + '@' + sel.value + (sel.disabled ? '!' : '');
    const face = sel.nextElementSibling?.classList?.contains('tw2gui_combobox') ? sel.nextElementSibling : null;
    if (face && face.dataset.twcSig === sig) return;
    const combo = new G.Combobox();
    let building = true;
    for (const o of opts) {
      if (o.tagName === 'OPTGROUP') combo.addItem('', `<b>${escapeHtml(o.label)}</b>`);
      else combo.addItem(o.value, escapeHtml(o.textContent));
    }
    if (opts.some(o => o.tagName === 'OPTION' && o.value === sel.value)) combo.select(sel.value);
    combo.addListener(value => {
      if (building || value === '' && sel.querySelector('optgroup')) return;
      if (String(value) === sel.value) return;
      sel.value = String(value);
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    building = false;
    const el = combo.getMainDiv();
    const node = el.jquery ? el[0] : el;
    node.dataset.twcSig = sig;
    if (sel.title) node.title = sel.title;
    const width = sel.id === 'twc-product' ? 330 : sel.id === 'twc-goalitem' ? 250 : 150;
    try { combo.setWidth(width); } catch { /* staršia hra */ }
    sel.classList.add('twc-skinned');
    if (face) face.replaceWith(node); else sel.after(node);
  }
  function skinNumber(input) {
    if (input.classList.contains('twc-skinned-num')) return;
    const wrap = document.createElement('span');
    wrap.className = 'tw2gui_textfield_wrapper';
    wrap.innerHTML = '<span class="tw2gui_textfield"><span></span></span>';
    input.before(wrap);
    wrap.querySelector('.tw2gui_textfield > span').appendChild(input);
    input.classList.add('twc-skinned-num');
  }
  function skinCheckbox(input) {
    let face = input.previousElementSibling?.classList?.contains('tw2gui_checkbox') ? input.previousElementSibling : null;
    if (!face) {
      face = document.createElement('span');
      face.className = 'tw2gui_checkbox';
      face.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        if (!input.disabled) input.click();
      });
      input.before(face);
      input.classList.add('twc-skinned-check');
    }
    face.classList.toggle('tw2gui_checkbox_checked', input.checked);
    face.classList.toggle('twc-disabled', input.disabled);
  }
  function skinTable(table) {
    if (table.parentElement?.classList.contains('tbody')) return;
    const shell = document.createElement('div');
    shell.className = 'fancytable twc-ft';
    shell.innerHTML = '<div class="_bg tw2gui_bg_tl"></div><div class="_bg tw2gui_bg_tr"></div><div class="_bg tw2gui_bg_bl"></div>' +
      '<div class="_bg tw2gui_bg_br"></div><div class="trows"><div class="tbody"><div class="_bg tw2gui_bg_l"></div><div class="_bg tw2gui_bg_r"></div></div></div>';
    table.before(shell);
    shell.querySelector('.tbody').appendChild(table);
  }
  function skin() {
    if (skinning || !gui()?.Button) return;
    skinning = true;
    try {
      root.querySelectorAll('button.btn').forEach(skinButton);
      root.querySelectorAll('select').forEach(skinSelect);
      root.querySelectorAll('input[type=number]').forEach(skinNumber);
      root.querySelectorAll('input[type=checkbox]').forEach(skinCheckbox);
      root.querySelectorAll('table').forEach(skinTable);
      scrollpane?.onResized?.();
    } catch (e) {
      console.warn('TW kalkulačka: vzhľad', e);
    } finally {
      skinning = false;
    }
  }
  new MutationObserver(() => { if (!skinning) queueMicrotask(skin); })
    .observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled', 'checked'] });
  root.addEventListener('change', event => {
    if (event.target.matches?.('input[type=checkbox]')) skinCheckbox(event.target);
  });

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
        <select id="twc-goalitem" aria-label="${t('item')}">${itemOptions()}</select>
        <input id="twc-goaltarget" type="number" min="1" step="1" value="100" aria-label="${t('goalTarget')}">
        <button class="btn" type="button" data-team="goal" ${teamBusy ? 'disabled' : ''}>${t('addGoal')}</button>
      </div>`;
  }

  let tab = GM_getValue('tab', 'plan');
  function renderTabs() {
    $('tabplan').textContent = t('myPlan');
    for (const b of panelSel('[data-tab]')) b.setAttribute('aria-selected', String(b.dataset.tab === tab));
    $('pane-plan').hidden = tab !== 'plan';
    $('pane-team').hidden = tab !== 'team';
    if (win) {
      try {
        win.renameTab?.('plan', $('tabplan').textContent);
        win.renameTab?.('team', $('tabteam').textContent);
        if (win.currentActiveTabId !== tab) win.activateTab(tab);
      } catch { /* starší klient bez premenovania záložiek */ }
    }
  }

  function renderLabels() {
    $('lcat').textContent = t('category');
    $('lprof').textContent = t('lprof');
    $('lprod').textContent = t('product');
    $('lqty').textContent = t('qty');
    $('add').textContent = t('add');
    $('foot').textContent = t('foot');
    openButton.title = t('icon');
    openButton.setAttribute('aria-label', t('icon'));
    root.setAttribute('aria-label', t('title'));
    if (win) { try { win.setTitle(t('title')); win.setMiniTitle(t('title')); } catch { /* ignorovať */ } }
    for (const b of panelSel('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }

  function renderAll() {
    if (!isOpen()) return;
    renderLabels();
    renderStatus();
    renderSelects();
    renderPlan();
    renderTeam();
    renderResults();
    renderTabs();
    skin();
  }

  function L() { return lang === 'sk' ? 0 : 1; }

  // ---------- Okno hry ----------
  // V hre: okno cez wman (rám, titulok, záložky, zbalenie, zatvorenie a presúvanie robí hra).
  // Bez herného okna (napríklad v testoch): obyčajný kontajner v stránke.
  const WIN_ID = 'twcalc';
  let win = null;
  let scrollpane = null;
  let fallback = null;
  const canUseGameWindow = () => !!(game.wman?.open && gui()?.Window && gui()?.Scrollpane);
  const isOpen = () => (win ? !!game.wman?.getById?.(WIN_ID) : !!fallback && !fallback.hidden);

  function openWindow() {
    if (canUseGameWindow()) {
      installStyle();
      const vw = document.documentElement.clientWidth || window.innerWidth;
      const vh = document.documentElement.clientHeight || window.innerHeight;
      win = game.wman.open(WIN_ID, t('title'), 'noreload twcalc-win');
      win.setMiniTitle(t('title'));
      win.setSize(Math.max(560, Math.min(820, vw - 40)), Math.max(420, Math.min(600, vh - 140)));
      scrollpane = new (gui().Scrollpane)();
      const spEl = scrollpane.getMainDiv();
      (spEl.jquery ? spEl[0] : spEl).style.height = '100%';
      root.classList.add('twc-in-window');
      // Po zatvorení okna hra (jQuery) zmaže obsluhu udalostí herných prvkov; výbery sa preto postavia nanovo.
      root.querySelectorAll('.tw2gui_combobox').forEach(face => face.remove());
      scrollpane.appendContent(root);
      win.appendToContentPane(spEl);
      win.addTab(t('myPlan'), 'plan', () => { tab = 'plan'; GM_setValue('tab', tab); renderTabs(); skin(); scrollpane?.scrollToTop?.(); });
      win.addTab(t('team'), 'team', () => { tab = 'team'; GM_setValue('tab', tab); renderTabs(); skin(); scrollpane?.scrollToTop?.(); });
      try {
        win.addEventListener(game.TWE ? game.TWE('WINDOW_DESTROY') : 'WINDOW_DESTROY', () => {
          win = null;
          scrollpane = null;
          openButton.setAttribute('aria-expanded', 'false');
        });
      } catch { /* bez udalosti zatvorenia */ }
      win.activateTab(tab);
      return;
    }
    if (!fallback) {
      fallback = document.createElement('div');
      fallback.id = 'twcalc-panel';
      fallback.appendChild(root);
      document.body.appendChild(fallback);
    }
    fallback.hidden = false;
  }

  function closeWindow() {
    if (win) {
      const w = win;
      win = null;
      scrollpane = null;
      root.remove();
      try { (game.wman.getById?.(WIN_ID) || w).destroy(); } catch { /* už zatvorené */ }
    }
    if (fallback) fallback.hidden = true;
  }

  let gameRecipes = 0;
  function toggle(show = !isOpen()) {
    if (show && !gameRecipes) gameRecipes = mergeGameRecipes(game);
    if (show) {
      if (!isOpen()) openWindow();
      else if (win) { try { game.wman.getById(WIN_ID)?.bringToTop?.(); } catch { /* ignorovať */ } }
    } else {
      closeWindow();
    }
    openButton.setAttribute('aria-expanded', String(show));
    if (show) {
      setMessage(message.text, message.error);
      renderAll();
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
  for (const b of panelSel('[data-tab]')) {
    b.addEventListener('click', () => {
      tab = b.dataset.tab;
      GM_setValue('tab', tab);
      renderTabs();
      skin();
    });
  }
  for (const b of panelSel('[data-lang]')) {
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      GM_setValue('lang', lang);
      renderAll();
    });
  }
  // Písanie do polí kalkulačky nesmie spúšťať klávesové skratky hry.
  for (const el of [ui, root]) {
    el.addEventListener('keydown', event => {
      if (event.key === 'Escape') toggle(false);
      event.stopPropagation();
    });
    el.addEventListener('keyup', event => event.stopPropagation());
    el.addEventListener('keypress', event => event.stopPropagation());
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
