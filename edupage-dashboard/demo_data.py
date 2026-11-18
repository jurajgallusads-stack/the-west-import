"""Ukážkové údaje na vyskúšanie vzhľadu dashboardu bez prihlásenia."""

from datetime import date, timedelta

from edupage_client import _averages, _next_school_days

SUBJECTS = [
    ["Slovenský jazyk", "Matematika", "Anglický jazyk", "Prírodoveda", "Telesná výchova", "Hudobná výchova"],
    ["Matematika", "Fyzika", "Dejepis", "Slovenský jazyk", "Informatika", "Nemecký jazyk", "Biológia"],
]
TIMES = [("08:00", "08:45"), ("08:55", "09:40"), ("10:00", "10:45"), ("10:55", "11:40"),
         ("11:50", "12:35"), ("12:45", "13:30"), ("13:40", "14:25")]


def demo_child(idx: int, name: str) -> dict:
    subj = SUBJECTS[idx % 2]
    today = date.today()
    days = _next_school_days(today, 2)
    timetable = []
    for di, d in enumerate(days):
        lessons = []
        for p in range(5 + idx + di % 2):
            s = subj[(p + di * 2) % len(subj)]
            lessons.append({"period": p + 1, "start": TIMES[p][0], "end": TIMES[p][1],
                            "subject": s, "teachers": ["Mgr. Nováková" if p % 2 else "Mgr. Horváth"],
                            "rooms": [f"{1 + idx}.{chr(65 + p % 3)}"], "topic": None,
                            "cancelled": di == 0 and p == 3 and idx == 1, "event": False})
        timetable.append({"date": d.isoformat(), "lessons": lessons})

    vals = [[1, 2, 1, 1, 3, 2, 1, 1, 2], [2, 1, 3, 2, 1, 4, 2, 1, 2, 3]][idx % 2]
    grades = []
    for i, v in enumerate(vals):
        grades.append({"subject": subj[i % len(subj)],
                       "title": ["Diktát", "Písomka", "Ústne skúšanie", "Projekt", "Test"][i % 5],
                       "grade": v, "max_points": None, "percent": None,
                       "importance": 1 if i % 3 else 2, "comment": None,
                       "date": (today - timedelta(days=i * 3 + 1)).isoformat() + "T10:00:00",
                       "teacher": "Mgr. Nováková", "class_avg": 1.8, "verbal": False})
    grades.append({"subject": subj[1], "title": "Test – zlomky", "grade": 17, "max_points": 20,
                   "percent": 85.0, "importance": 1, "comment": None,
                   "date": (today - timedelta(days=2)).isoformat() + "T09:00:00",
                   "teacher": "Mgr. Horváth", "class_avg": None, "verbal": False})
    grades.sort(key=lambda g: g["date"], reverse=True)

    def ev(i, t, text, due, label=None):
        return {"id": idx * 100 + i, "type": t, "text": text, "author": "Mgr. Nováková",
                "created": (today - timedelta(days=i)).isoformat() + "T14:00:00",
                "due": _next_school_days(today, due + 1)[due].isoformat() if due is not None else None,
                "done": False, "label": label}

    return {
        "student": {"name": f"{name} Nováková" if idx == 0 else f"{name} Novák",
                    "class": ["3.A", "7.B"][idx % 2], "school": "demo"},
        "timetable": timetable,
        "grades": grades,
        "averages": _averages(grades),
        "homework": [ev(1, "homework", f"{subj[0]}: pracovný zošit str. 24, cv. 3 a 4", 1),
                     ev(2, "homework", f"{subj[1]}: učebnica str. 51 / 1–6", 2),
                     ev(3, "homework", f"{subj[2]}: naučiť sa slovíčka Unit 4", 4)],
        "exams": [ev(4, "bexam", f"{subj[1]} – písomka z kapitoly 3", 3, "Písomka"),
                  ev(5, "sexam", f"{subj[3]} – krátky test", 6, "Krátka písomka")],
        "messages": [ev(0, "sprava", "Milí rodičia, v piatok 22. 11. bude výlet do Bojníc. "
                        "Odchod o 7:30 spred školy, návrat okolo 16:00.", None, "Správa"),
                     ev(2, "news", "Rodičovské združenie sa uskutoční 26. 11. o 17:00.", None, "Novinka"),
                     ev(5, "genotif", "Zmena v rozvrhu – odpadá 4. hodina.", None, "Oznámenie")],
        "lunch": {"date": today.isoformat(), "ordered": "A", "served_from": "11:30",
                  "served_to": "13:30",
                  "menus": [{"name": "Polievka: Paradajková s cestovinou", "allergens": "1, 9", "number": ""},
                            {"name": "Kurací rezeň, zemiaková kaša, uhorkový šalát", "allergens": "1, 3, 7", "number": "A"},
                            {"name": "Šošovicový prívarok, vajce, chlieb", "allergens": "1, 3", "number": "B"}]},
        "changes": ([{"date": today.isoformat(), "lesson": 4, "title": "Fyzika – odpadá", "action": "remove"}]
                    if idx == 1 else []),
        "errors": [],
    }
