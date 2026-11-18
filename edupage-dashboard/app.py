"""EduPage dashboard pre viac detí.

Spustenie:  python app.py      (potom otvor http://127.0.0.1:8080)
"""

from __future__ import annotations

import logging
import sys
import threading
import time
from datetime import datetime
from pathlib import Path

import yaml
from flask import Flask, jsonify, render_template

BASE = Path(__file__).resolve().parent
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("dashboard")


def load_config() -> dict:
    path = BASE / "config.yaml"
    if not path.exists():
        log.warning("config.yaml neexistuje – spúšťam DEMO režim. "
                    "Skopíruj config.example.yaml na config.yaml a vyplň údaje.")
        return {"demo": True, "refresh_minutes": 10, "host": "127.0.0.1", "port": 8080,
                "children": [{"name": "Ema", "color": "#7c5cff"},
                             {"name": "Jakub", "color": "#ff8a3d"}]}
    with path.open(encoding="utf-8") as fh:
        return yaml.safe_load(fh) or {}


CONFIG = load_config()
if "--demo" in sys.argv:
    CONFIG["demo"] = True
CHILDREN = CONFIG.get("children") or []
REFRESH = max(1, int(CONFIG.get("refresh_minutes", 10)))

STATE: dict[str, dict] = {
    str(i): {"name": c.get("name", f"Dieťa {i + 1}"), "color": c.get("color", "#7c5cff"),
             "data": None, "updated": None, "error": None, "loading": True}
    for i, c in enumerate(CHILDREN)
}
LOCK = threading.Lock()
WAKE = threading.Event()


def refresh_all():
    if CONFIG.get("demo"):
        from demo_data import demo_child
        for key, st in STATE.items():
            with LOCK:
                st.update(data=demo_child(int(key), st["name"]),
                          updated=datetime.now().isoformat(timespec="seconds"),
                          error=None, loading=False)
        return

    from edupage_client import ChildClient
    clients = refresh_all.__dict__.setdefault(
        "clients", {str(i): ChildClient(c) for i, c in enumerate(CHILDREN)})
    for key, client in clients.items():
        with LOCK:
            STATE[key]["loading"] = True
        try:
            data = client.fetch()
            with LOCK:
                STATE[key].update(data=data, error=None,
                                  updated=datetime.now().isoformat(timespec="seconds"))
            log.info("Načítané údaje: %s", STATE[key]["name"])
        except Exception as exc:  # noqa: BLE001
            log.exception("Chyba pri %s", STATE[key]["name"])
            with LOCK:
                STATE[key]["error"] = str(exc)
        finally:
            with LOCK:
                STATE[key]["loading"] = False


def worker():
    while True:
        refresh_all()
        WAKE.wait(REFRESH * 60)
        WAKE.clear()


app = Flask(__name__)


@app.get("/")
def index():
    return render_template("index.html", refresh=REFRESH, demo=bool(CONFIG.get("demo")))


@app.get("/api/children")
def api_children():
    with LOCK:
        return jsonify({"refresh_minutes": REFRESH, "demo": bool(CONFIG.get("demo")),
                        "children": [{"id": k, **v} for k, v in STATE.items()]})


@app.post("/api/refresh")
def api_refresh():
    WAKE.set()
    return jsonify({"ok": True})


if __name__ == "__main__":
    if not CHILDREN:
        sys.exit("V config.yaml nie sú žiadne deti (children).")
    threading.Thread(target=worker, daemon=True).start()
    host, port = CONFIG.get("host", "127.0.0.1"), int(CONFIG.get("port", 8080))
    log.info("Dashboard beží na http://%s:%s", host, port)
    app.run(host=host, port=port, debug=False)
