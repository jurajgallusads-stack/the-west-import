# 🎒 Školský prehľad – EduPage dashboard pre dve deti

Samostatná aplikácia, ktorá sa pravidelne (predvolene každých 10 minút) prihlási do EduPage
a stiahne údaje pre každé dieťa zvlášť. Výsledok uvidíš v prehľadnom dashboarde v prehliadači.

**Čo uvidíš pre každé dieťa**
- rozvrh na dnes a zajtra (aktuálna hodina zvýraznená, odpadnuté hodiny, suplovanie)
- posledné známky + vážené priemery podľa predmetov a celkový priemer
- domáce úlohy a plánované písomky s termínmi
- správy a oznámenia od učiteľov
- dnešný obed (ak škola používa jedáleň v EduPage)
- záložka **Obe deti** – rýchle porovnanie oboch na jednej obrazovke

## Spustenie

Potrebuješ **Python 3.10+** (https://www.python.org/downloads/ – pri inštalácii na Windows zaškrtni „Add to PATH“).

1. Skopíruj `config.example.yaml` ako `config.yaml` a vyplň:
   - `subdomain` – časť adresy školy, napr. `zsmojaskola` z `https://zsmojaskola.edupage.org`
   - `username` / `password` – rodičovský účet **alebo** žiacky účet dieťaťa
   - `child` – pri rodičovskom účte meno dieťaťa (stačí krstné meno, napr. `Ema`)
2. Spusti:
   - Windows: dvojklik na `start.bat`
   - macOS / Linux: `./start.sh`
3. Otvor **http://127.0.0.1:8080**

Bez `config.yaml` (alebo s `./start.sh --demo`) sa aplikácia spustí v ukážkovom režime s vymyslenými údajmi.

## Tipy
- **Na mobile v domácej sieti:** v `config.yaml` nastav `host: 0.0.0.0` a na mobile otvor `http://IP-POČÍTAČA:8080`.
  Dashboard nemá vlastné heslo, preto ho nevystavuj do internetu.
- **Každé dieťa na inej škole:** stačí iný `subdomain` pri každom dieťati.
- **Heslo mimo súboru:** namiesto `password` použi `password_env: NAZOV_PREMENNEJ`.
- Tlačidlo **↻ Obnoviť** stiahne údaje hneď, inak sa obnovujú podľa `refresh_minutes`.

## Obmedzenia
- Údaje sa čítajú cez neoficiálnu knižnicu [`edupage-api`](https://github.com/EdupageAPI/edupage-api).
  Ak EduPage zmení web, niektorá časť sa môže dočasne nenačítať – dashboard zobrazí, ktorá.
- Účty s dvojfaktorovým overením (2FA) nie sú podporované.
- Pri rodičovskom účte môžu všeobecné oznámenia školy prísť pri oboch deťoch.
