"use strict";

const $app = document.getElementById("app");
const $tabs = document.getElementById("tabs");
const $updated = document.getElementById("updated");
let STATE = { children: [] };
let current = localGet("tab") || "all";
const dayChoice = {};

function localGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function localSet(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } }

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const todayISO = () => new Date().toLocaleDateString("sv-SE");
const parseD = (s) => (s ? new Date(s.length <= 10 ? s + "T00:00:00" : s) : null);
const fmtDay = (s) => parseD(s)?.toLocaleDateString("sk-SK", { weekday: "long", day: "numeric", month: "numeric" }) ?? "";
const fmtShort = (s) => parseD(s)?.toLocaleDateString("sk-SK", { day: "numeric", month: "numeric" }) ?? "";
const fmtTime = (s) => parseD(s)?.toLocaleString("sk-SK", { day: "numeric", month: "numeric", hour: "2-digit", minute: "2-digit" }) ?? "";
const daysUntil = (s) => Math.round((parseD(s) - parseD(todayISO())) / 864e5);

function relDay(s) {
  const n = daysUntil(s);
  if (n === 0) return "dnes";
  if (n === 1) return "zajtra";
  if (n === -1) return "včera";
  return fmtDay(s);
}

function gradeClass(g) {
  const n = parseFloat(String(g.grade).replace(",", "."));
  if (!g.max_points && n >= 1 && n <= 5) return "g" + Math.round(n);
  return "gx";
}
function gradeText(g) {
  if (g.max_points) return `${g.grade}/${g.max_points}`;
  return g.grade ?? "–";
}
function avgColor(a) {
  if (a == null) return "var(--muted)";
  if (a < 1.6) return "var(--good)";
  if (a < 2.5) return "#5fb236";
  if (a < 3.5) return "var(--warn)";
  return "var(--bad)";
}

function overallAvg(d) {
  const v = (d.averages || []).filter((a) => a.average != null);
  if (!v.length) return null;
  return (v.reduce((s, a) => s + a.average, 0) / v.length).toFixed(2);
}
function recentGrades(d, days = 7) {
  const lim = Date.now() - days * 864e5;
  return (d.grades || []).filter((g) => parseD(g.date) >= lim);
}

// ---------------------------------------------------------------- tabs
function renderTabs() {
  const items = [{ id: "all", name: "Obe deti", color: "var(--muted)" }, ...STATE.children];
  if (STATE.children.length < 2) items.shift();
  if (!items.find((i) => i.id === current)) current = items[0]?.id;
  $tabs.innerHTML = items.map((c) => `
    <button class="tab" role="tab" aria-selected="${c.id === current}" data-id="${c.id}">
      <span class="dot" style="background:${esc(c.color)}"></span>${esc(c.name)}
    </button>`).join("");
}
$tabs.addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (!b) return;
  current = b.dataset.id;
  localSet("tab", current);
  render();
});

// ---------------------------------------------------------------- views
function heroHTML(c, compact) {
  const d = c.data || {};
  const st = d.student || {};
  const name = st.name || c.name;
  return `<div class="hero" style="--c:${esc(c.color)}">
    <div class="avatar">${esc(c.name[0] || "?")}</div>
    <div><h2>${esc(compact ? c.name : name)}</h2>
      <p>${st.class ? "Trieda " + esc(st.class) + " · " : ""}${esc(st.school || "")}</p></div>
    ${compact ? "" : `<div class="meta">${c.loading ? "Aktualizujem…" : c.updated ? "Aktualizované " + fmtTime(c.updated) : ""}</div>`}
  </div>`;
}

function overview() {
  return `<div class="overview">${STATE.children.map((c) => {
    const d = c.data;
    if (!d) return `<div class="card ov" data-go="${c.id}">${heroHTML(c, true)}${c.error ? `<p class="empty">⚠️ ${esc(c.error)}</p>` : '<div class="skeleton" style="margin-top:12px"></div>'}</div>`;
    const today = (d.timetable || [])[0];
    const lessons = (today?.lessons || []).filter((l) => !l.cancelled);
    const lastG = (d.grades || [])[0];
    const nextHw = (d.homework || []).find((h) => !h.due || daysUntil(h.due) >= 0);
    const nextEx = (d.exams || [])[0];
    return `<div class="card ov" data-go="${c.id}">
      ${heroHTML(c, true)}
      <ul>
        <li><span>${today ? esc(relDay(today.date)[0].toUpperCase() + relDay(today.date).slice(1)) : "Rozvrh"}</span><b>${lessons.length ? `${lessons.length} hodín · ${esc(lessons[0].start)}–${esc(lessons.at(-1).end)}` : "bez vyučovania"}</b></li>
        <li><span>Posledná známka</span><b>${lastG ? `${esc(gradeText(lastG))} · ${esc(lastG.subject)}` : "–"}</b></li>
        <li><span>Celkový priemer</span><b>${overallAvg(d) ?? "–"}</b></li>
        <li><span>Najbližšia úloha</span><b>${nextHw ? esc(trim(nextHw.text, 48)) + (nextHw.due ? ` (${relDay(nextHw.due)})` : "") : "žiadna 🎉"}</b></li>
        <li><span>Najbližšia písomka</span><b>${nextEx ? esc(trim(nextEx.text, 48)) + (nextEx.due ? ` (${relDay(nextEx.due)})` : "") : "žiadna"}</b></li>
        <li><span>Obed</span><b>${esc(orderedMeal(d.lunch) || "–")}</b></li>
      </ul></div>`;
  }).join("")}</div>`;
}

const trim = (s, n) => (s && s.length > n ? s.slice(0, n - 1) + "…" : s || "");

function orderedMeal(l) {
  if (!l || !l.menus?.length) return null;
  const m = l.menus.find((x) => x.number && x.number === l.ordered) || l.menus.find((x) => x.number) || l.menus[0];
  return m.name;
}

function timetableCard(c) {
  const days = c.data.timetable || [];
  const idx = Math.min(dayChoice[c.id] ?? 0, Math.max(days.length - 1, 0));
  const day = days[idx];
  const now = new Date().toTimeString().slice(0, 5);
  const isToday = day && day.date === todayISO();
  const changes = (c.data.changes || []).filter((x) => day && x.date === day.date);
  const rows = (day?.lessons || []).map((l) => {
    const isNow = isToday && l.start <= now && now <= l.end;
    const tags = [l.cancelled ? '<span class="tag bad">odpadá</span>' : "", l.event ? '<span class="tag ok">akcia</span>' : ""].join("");
    return `<div class="lesson ${isNow ? "now" : ""} ${l.cancelled ? "cancel" : ""}">
      <div class="no">${esc(l.period ?? "•")}</div>
      <div class="time">${esc(l.start)}–${esc(l.end)}</div>
      <div><div class="subj">${esc(l.subject)}</div><div class="who">${esc((l.teachers || []).join(", "))}${l.topic ? " · " + esc(l.topic) : ""}</div></div>
      <div class="room">${tags || esc((l.rooms || []).join(", "))}</div>
    </div>`;
  }).join("");
  return `<section class="card span-7">
    <h3>📅 Rozvrh <span class="seg">${days.map((d, i) => `<button data-day="${i}" data-child="${c.id}" class="${i === idx ? "on" : ""}">${esc(relDay(d.date))}</button>`).join("")}</span></h3>
    ${changes.map((x) => `<div class="item"><span class="tag warn">Suplovanie</span><div class="body"><p>${esc(x.lesson)}. hod – ${esc(x.title)}</p></div></div>`).join("")}
    ${rows || '<p class="empty">V tento deň nie je vyučovanie.</p>'}
  </section>`;
}

function gradesCard(c) {
  const g = (c.data.grades || []).slice(0, 10);
  return `<section class="card span-5">
    <h3>⭐ Posledné známky <span class="count">${(c.data.grades || []).length} spolu</span></h3>
    ${g.map((x) => `<div class="grade-row">
        <div class="badge ${gradeClass(x)}">${esc(gradeText(x))}</div>
        <div class="t"><b>${esc(x.subject)}</b><span>${esc(x.title || "")}${x.importance && x.importance !== 1 ? ` · váha ${esc(x.importance)}` : ""}${x.class_avg ? ` · trieda ⌀ ${esc(x.class_avg)}` : ""}</span></div>
        <div class="d">${esc(fmtShort(x.date))}</div>
      </div>`).join("") || '<p class="empty">Zatiaľ žiadne známky.</p>'}
  </section>`;
}

function averagesCard(c) {
  const a = c.data.averages || [];
  return `<section class="card span-5">
    <h3>📊 Priemery podľa predmetov</h3>
    ${a.map((x) => {
      const v = x.average ?? null;
      const pct = v != null ? Math.max(6, ((5 - v) / 4) * 100) : x.percent ?? 0;
      const label = v != null ? v.toFixed(2) : x.percent != null ? x.percent + " %" : "–";
      const col = v != null ? avgColor(v) : "var(--ok)";
      return `<div class="avg-row"><span>${esc(x.subject)}</span><div class="bar"><i style="width:${pct}%;background:${col}"></i></div><span class="v" style="color:${col}">${esc(label)}</span></div>`;
    }).join("") || '<p class="empty">Žiadne údaje.</p>'}
  </section>`;
}

function dueBox(s) {
  if (!s) return `<div class="due"><b>–</b><span>termín</span></div>`;
  const d = parseD(s);
  const n = daysUntil(s);
  return `<div class="due ${n <= 1 ? "soon" : ""}"><b>${d.getDate()}.${d.getMonth() + 1}.</b><span>${n === 0 ? "dnes" : n === 1 ? "zajtra" : d.toLocaleDateString("sk-SK", { weekday: "short" })}</span></div>`;
}

function tasksCard(c) {
  const ex = c.data.exams || [];
  const hw = c.data.homework || [];
  const row = (x, tag) => `<div class="item">${dueBox(x.due)}<div class="body">${tag}<p>${esc(x.text)}</p><small>${esc(x.author || "")}</small></div></div>`;
  return `<section class="card span-7">
    <h3>📝 Úlohy a písomky <span class="count">${hw.length + ex.length}</span></h3>
    ${ex.map((x) => row(x, `<span class="tag bad">${esc(x.label || "Písomka")}</span> `)).join("")}
    ${hw.map((x) => row(x, `<span class="tag ok">Domáca úloha</span>${x.done ? ' <span class="tag">hotovo</span>' : ""} `)).join("")}
    ${hw.length + ex.length ? "" : '<p class="empty">Nič nie je zadané 🎉</p>'}
  </section>`;
}

function messagesCard(c) {
  const m = c.data.messages || [];
  return `<section class="card span-7">
    <h3>💬 Správy a oznámenia <span class="count">${m.length}</span></h3>
    ${m.slice(0, 12).map((x) => `<div class="item clamp"><div class="body">
        <small><span class="tag">${esc(x.label || x.type)}</span> ${esc(x.author || "")} · ${esc(fmtTime(x.created))}</small>
        <p>${esc(x.text)}</p></div></div>`).join("") || '<p class="empty">Žiadne nové správy.</p>'}
  </section>`;
}

function lunchCard(c) {
  const l = c.data.lunch;
  return `<section class="card span-5">
    <h3>🍽️ Obed dnes ${l?.served_from ? `<span class="count">${esc(l.served_from)}–${esc(l.served_to || "")}</span>` : ""}</h3>
    ${l && l.menus?.length ? l.menus.map((m) => `<div class="menu ${m.number && m.number === l.ordered ? "ordered" : ""}">
        ${m.number ? `<span class="tag ${m.number === l.ordered ? "ok" : ""}">${esc(m.number)}</span>` : ""}<span>${esc(m.name)}</span>${m.allergens ? `<small>alergény ${esc(m.allergens)}</small>` : ""}</div>`).join("")
      : '<p class="empty">Dnes nie je obed alebo jedáleň nie je v EduPage.</p>'}
  </section>`;
}

function childView(c) {
  if (!c.data) {
    return heroHTML(c) + (c.error ? `<div class="alert"><b>Nepodarilo sa načítať údaje.</b><br>${esc(c.error)}</div>` : '<div class="skeleton"></div>');
  }
  const d = c.data;
  const recent = recentGrades(d);
  const hwSoon = (d.homework || []).filter((h) => h.due && daysUntil(h.due) >= 0 && daysUntil(h.due) <= 2).length;
  const exams = (d.exams || []).filter((e) => !e.due || daysUntil(e.due) <= 7).length;
  const avg = overallAvg(d);
  return `${heroHTML(c)}
    ${c.error ? `<div class="alert">Posledná aktualizácia zlyhala, zobrazujem staršie údaje: ${esc(c.error)}</div>` : ""}
    <div class="kpis">
      <div class="kpi"><div class="label">Celkový priemer</div><div class="value" style="color:${avgColor(avg && +avg)}">${avg ?? "–"}</div><div class="hint">z ${(d.averages || []).length} predmetov</div></div>
      <div class="kpi"><div class="label">Nové známky (7 dní)</div><div class="value">${recent.length}</div><div class="hint">${recent.slice(0, 5).map((g) => esc(gradeText(g))).join(", ") || "žiadne"}</div></div>
      <div class="kpi"><div class="label">Úlohy do 2 dní</div><div class="value">${hwSoon}</div><div class="hint">${(d.homework || []).length} zadaných spolu</div></div>
      <div class="kpi"><div class="label">Písomky do 7 dní</div><div class="value">${exams}</div><div class="hint">${(d.exams || [])[0] ? esc(trim(d.exams[0].text, 30)) : "pokoj 😌"}</div></div>
    </div>
    <div class="grid" style="--c:${esc(c.color)}">
      ${timetableCard(c)}
      ${gradesCard(c)}
      ${tasksCard(c)}
      ${averagesCard(c)}
      ${messagesCard(c)}
      ${lunchCard(c)}
    </div>
    ${(d.errors || []).length ? `<details class="errors"><summary>Niektoré časti sa nenačítali (${d.errors.length})</summary><ul>${d.errors.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></details>` : ""}`;
}

function render() {
  renderTabs();
  if (current === "all") $app.innerHTML = overview();
  else {
    const c = STATE.children.find((x) => x.id === current);
    $app.innerHTML = c ? childView(c) : "";
  }
  const times = STATE.children.map((c) => c.updated).filter(Boolean).sort();
  const loading = STATE.children.some((c) => c.loading);
  $updated.textContent = loading ? "Sťahujem údaje z EduPage…"
    : times.length ? `Aktualizované ${fmtTime(times[0])} · ďalšia o ${window.REFRESH_MINUTES} min` : "Čakám na údaje…";
}

$app.addEventListener("click", (e) => {
  const day = e.target.closest("[data-day]");
  if (day) { dayChoice[day.dataset.child] = +day.dataset.day; render(); return; }
  const go = e.target.closest("[data-go]");
  if (go) { current = go.dataset.go; localSet("tab", current); render(); window.scrollTo(0, 0); return; }
  const it = e.target.closest(".item.clamp");
  if (it) it.classList.toggle("open");
});

async function load() {
  try {
    const r = await fetch("api/children");
    STATE = await r.json();
    render();
  } catch (err) {
    $updated.textContent = "Server nedostupný – skúšam znova…";
  }
}

document.getElementById("refresh").addEventListener("click", async () => {
  await fetch("api/refresh", { method: "POST" });
  STATE.children.forEach((c) => (c.loading = true));
  render();
  setTimeout(load, 1500);
});

load();
setInterval(load, 20000);
