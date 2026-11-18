"""Sťahovanie a úprava údajov z EduPage pre jedno dieťa."""

from __future__ import annotations

import logging
import os
import unicodedata
from datetime import date, datetime, timedelta

from edupage_api import Edupage

log = logging.getLogger("edupage")

EXAM_TYPES = {
    "bexam": "Písomka",
    "sexam": "Krátka písomka",
    "oexam": "Skúšanie",
    "rexam": "Referát",
    "pexam": "Projekt",
    "testing": "Testovanie",
    "testme": "Test",
    "etesthw": "Domáca úloha (test)",
}
HOMEWORK_TYPES = {"homework", "testpridelenie"}
MESSAGE_TYPES = {
    "sprava": "Správa",
    "news": "Novinka",
    "genotif": "Oznámenie",
    "anketa": "Anketa",
    "event": "Udalosť",
    "ospravedlnenka": "Ospravedlnenka",
    "znamka": "Známka",
}


def _norm(text: str) -> str:
    text = unicodedata.normalize("NFKD", str(text or ""))
    return "".join(c for c in text if not unicodedata.combining(c)).lower().strip()


def _name(obj) -> str | None:
    if obj is None:
        return None
    if isinstance(obj, str):
        return obj
    return getattr(obj, "name", None) or str(obj)


def _iso(value) -> str | None:
    if value is None:
        return None
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    return str(value)


def _next_school_days(start: date, count: int) -> list[date]:
    days, d = [], start
    while len(days) < count:
        if d.weekday() < 5:
            days.append(d)
        d += timedelta(days=1)
    return days


class ChildClient:
    """Jedna prihlásená session pre jedno dieťa."""

    def __init__(self, cfg: dict):
        self.cfg = cfg
        self.edupage: Edupage | None = None
        self.student = None

    # ------------------------------------------------------------ login
    def _password(self) -> str:
        if self.cfg.get("password_env"):
            return os.environ.get(self.cfg["password_env"], "")
        return str(self.cfg.get("password", ""))

    def login(self):
        ep = Edupage(request_timeout=20)
        result = ep.login(self.cfg["username"], self._password(), self.cfg["subdomain"])
        if result is not None:
            raise RuntimeError(
                "Účet vyžaduje dvojfaktorové overenie (2FA) – vypni ho v EduPage "
                "alebo použi žiacky účet dieťaťa."
            )
        self.edupage = ep
        self.student = None

        if "Rodic" in (ep.get_user_id() or ""):
            self.student = self._find_child()
            ep.switch_to_child(self.student)
        else:
            sid = str(ep.get_user_id() or "").replace("Student", "")
            try:
                self.student = next(
                    (s for s in ep.get_students() or [] if str(s.person_id) == sid), None
                )
            except Exception:  # noqa: BLE001
                self.student = None

    def _find_child(self):
        wanted = str(self.cfg.get("child") or "").strip()
        students = self.edupage.get_students() or []
        if not wanted:
            if len(students) == 1:
                return students[0]
            raise RuntimeError(
                "Rodičovský účet – doplň v config.yaml pole 'child'. Dostupné deti: "
                + ", ".join(s.name for s in students)
            )
        if wanted.isdigit():
            for s in students:
                if s.person_id == int(wanted):
                    return s
        w = _norm(wanted)
        for s in students:
            if _norm(s.name) == w:
                return s
        for s in students:
            parts = _norm(s.name).split()
            if w in parts or all(p in parts for p in w.split()):
                return s
        raise RuntimeError(
            f"Dieťa '{wanted}' sa nenašlo. Dostupné: " + ", ".join(s.name for s in students)
        )

    def ensure_login(self):
        if self.edupage is None or not self.edupage.is_logged_in:
            self.login()

    # ------------------------------------------------------------ fetch
    def fetch(self) -> dict:
        try:
            self.ensure_login()
            return self._collect()
        except Exception:  # noqa: BLE001
            # session mohla expirovať – skús sa raz prihlásiť nanovo
            log.info("Opätovné prihlásenie pre %s", self.cfg.get("name"))
            self.edupage = None
            self.ensure_login()
            return self._collect()

    def _safe(self, label: str, fn, errors: list, default=None):
        try:
            return fn()
        except Exception as exc:  # noqa: BLE001
            log.warning("%s / %s: %s", self.cfg.get("name"), label, exc)
            errors.append(f"{label}: {exc}")
            return default

    def _collect(self) -> dict:
        ep = self.edupage
        errors: list[str] = []
        today = date.today()

        class_name = None
        if self.student is not None and getattr(self.student, "class_id", None):
            classes = self._safe("triedy", ep.get_classes, errors, []) or []
            cls = next((c for c in classes if c.class_id == self.student.class_id), None)
            class_name = getattr(cls, "name", None)

        days = _next_school_days(today, 2)
        timetable = [
            {"date": d.isoformat(), "lessons": self._safe(
                f"rozvrh {d}", lambda d=d: self._timetable(d), errors, [])}
            for d in days
        ]

        grades = self._safe("známky", self._grades, errors, []) or []
        events = self._safe("udalosti", lambda: self._events(today), errors, {}) or {}
        lunch = self._safe("obed", lambda: self._lunch(today), errors, None)
        changes = self._safe(
            "suplovanie", lambda: self._changes(days, class_name), errors, []
        ) or []

        return {
            "student": {
                "name": _name(self.student) or self.cfg.get("name"),
                "class": class_name,
                "school": self.cfg.get("subdomain"),
            },
            "timetable": timetable,
            "grades": grades,
            "averages": _averages(grades),
            "homework": events.get("homework", []),
            "exams": events.get("exams", []),
            "messages": events.get("messages", []),
            "lunch": lunch,
            "changes": changes,
            "errors": errors,
        }

    def _timetable(self, d: date) -> list[dict]:
        tt = self.edupage.get_my_timetable(d)
        out = []
        for l in (tt.lessons if tt else []):
            out.append({
                "period": l.period,
                "start": l.start_time.strftime("%H:%M") if l.start_time else None,
                "end": l.end_time.strftime("%H:%M") if l.end_time else None,
                "subject": _name(l.subject) or ("Akcia" if l.is_event else "—"),
                "teachers": [_name(t) for t in (l.teachers or [])],
                "rooms": [_name(r) for r in (l.classrooms or [])],
                "topic": l.curriculum,
                "cancelled": bool(l.is_cancelled),
                "event": bool(l.is_event),
            })
        return out

    def _grades(self) -> list[dict]:
        out = []
        for g in self.edupage.get_grades() or []:
            out.append({
                "subject": g.subject_name or "?",
                "title": g.title,
                "grade": g.grade_n if not isinstance(g.grade_n, float) or not g.grade_n.is_integer() else int(g.grade_n),
                "max_points": g.max_points,
                "percent": g.percent,
                "importance": g.importance,
                "comment": g.comment,
                "date": _iso(g.date),
                "teacher": _name(g.teacher),
                "class_avg": g.class_grade_avg,
                "verbal": g.verbal,
            })
        out.sort(key=lambda x: x["date"] or "", reverse=True)
        return out

    def _events(self, today: date) -> dict:
        ep = self.edupage
        since = today - timedelta(days=30)
        try:
            items = ep.get_notification_history(since)
        except Exception:  # noqa: BLE001
            items = ep.get_notifications()

        homework, exams, messages = [], [], []
        seen = set()
        for e in sorted(items, key=lambda x: x.timestamp, reverse=True):
            if e.is_removed or e.event_id in seen:
                continue
            seen.add(e.event_id)
            etype = getattr(e.event_type, "value", str(e.event_type))
            due = e.event_time.date() if e.event_time else None
            item = {
                "id": e.event_id,
                "type": etype,
                "text": (e.text or "").strip(),
                "author": _name(e.author),
                "created": _iso(e.timestamp),
                "due": _iso(due),
                "done": bool(e.is_done),
            }
            if etype in HOMEWORK_TYPES:
                if due is None or due >= today - timedelta(days=2):
                    homework.append(item)
            elif etype in EXAM_TYPES:
                item["label"] = EXAM_TYPES[etype]
                if due is None or due >= today:
                    exams.append(item)
            elif etype in MESSAGE_TYPES:
                item["label"] = MESSAGE_TYPES[etype]
                messages.append(item)

        homework.sort(key=lambda x: x["due"] or "9999")
        exams.sort(key=lambda x: x["due"] or "9999")
        return {"homework": homework[:20], "exams": exams[:20], "messages": messages[:25]}

    def _lunch(self, d: date) -> dict | None:
        meals = self.edupage.get_meals(d)
        meal = getattr(meals, "lunch", None) if meals else None
        if meal is None:
            return None
        return {
            "date": d.isoformat(),
            "menus": [{"name": m.name, "allergens": m.allergens, "number": m.number}
                      for m in (meal.menus or [])],
            "ordered": meal.ordered_meal,
            "served_from": meal.served_from.strftime("%H:%M") if meal.served_from else None,
            "served_to": meal.served_to.strftime("%H:%M") if meal.served_to else None,
        }

    def _changes(self, days: list[date], class_name: str | None) -> list[dict]:
        if not class_name:
            return []
        out = []
        for d in days:
            for ch in self.edupage.get_timetable_changes(d) or []:
                if _norm(ch.change_class) != _norm(class_name):
                    continue
                action = getattr(ch.action, "value", None) or str(ch.action)
                out.append({"date": d.isoformat(), "lesson": ch.lesson_n,
                            "title": ch.title, "action": action})
        return out


def _averages(grades: list[dict]) -> list[dict]:
    """Vážený priemer klasických známok 1–5 a priemer percent za predmet."""
    subjects: dict[str, dict] = {}
    for g in grades:
        s = subjects.setdefault(g["subject"], {"subject": g["subject"], "sum": 0.0,
                                               "w": 0.0, "pct": [], "count": 0})
        s["count"] += 1
        val = g["grade"]
        try:
            num = float(str(val).replace(",", ".").rstrip("-+"))
        except (TypeError, ValueError):
            num = None
        if num is not None and g.get("max_points") in (None, 0) and 1 <= num <= 5:
            w = float(g.get("importance") or 1)
            s["sum"] += num * w
            s["w"] += w
        elif g.get("percent") is not None and g.get("max_points"):
            s["pct"].append(float(g["percent"]))
    out = []
    for s in subjects.values():
        out.append({
            "subject": s["subject"],
            "average": round(s["sum"] / s["w"], 2) if s["w"] else None,
            "percent": round(sum(s["pct"]) / len(s["pct"]), 1) if s["pct"] else None,
            "count": s["count"],
        })
    out.sort(key=lambda x: (x["average"] is None, x["average"] or 0))
    return out
