// ============================================================
// FUTBOL FIT — App logic (no build step, no framework)
// ============================================================

const view = document.getElementById("view");
const backBtn = document.getElementById("backBtn");
const tabBtns = document.querySelectorAll(".tab-btn");

let route = { name: "programs" }; // {name:'programs'} | {name:'program', id, blockId} | {name:'today'} | {name:'install'}

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str ?? "";
  return d.innerHTML;
}

function exLink(text, link) {
  const t = esc(text || "");
  if (!link) return t;
  return `<a class="ex-link" href="${esc(link)}" target="_blank" rel="noopener noreferrer">${t}<svg class="play-ic" viewBox="0 0 24 24" width="11" height="11"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></a>`;
}

function setRoute(next) {
  route = next;
  backBtn.hidden = next.name === "programs" || next.name === "today" || next.name === "install";
  tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.tab === (next.name === "program" ? "programs" : next.name)));
  render();
  view.scrollTo({ top: 0 });
  window.scrollTo(0, 0);
}

backBtn.addEventListener("click", () => {
  if (route.name === "program") setRoute({ name: "programs" });
});

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    if (tab === "programs") setRoute({ name: "programs" });
    if (tab === "today") setRoute({ name: "today" });
    if (tab === "install") setRoute({ name: "install" });
  });
});

// ---------------- Renderers ----------------

function render() {
  if (route.name === "programs") return renderProgramList();
  if (route.name === "program") return renderProgram(route.id, route.blockId);
  if (route.name === "today") return renderToday();
  if (route.name === "install") return renderInstall();
}

function renderProgramList() {
  const totalWeeks = (p) =>
    p.blocks.reduce((sum, b) => {
      if (!b.days.length) return sum;
      const m = b.label.match(/(\d+)\D+(\d+)/);
      if (m) return sum + (parseInt(m[2]) - parseInt(m[1]) + 1);
      return sum + 1;
    }, 0);

  const totalPhases = (p) => {
    const groups = new Set(p.blocks.filter((b) => b.days.length).map((b) => b.phase || b.label));
    return groups.size;
  };

  view.innerHTML = `
    <div class="hero">
      <p class="hero-eyebrow">Futbol Fit</p>
      <h1 class="hero-title">Your Programs</h1>
      <p class="hero-sub">Tap a program to see the full week-by-week breakdown — warmups, sets, reps, and progressions.</p>
    </div>
    <div id="programListWrap"></div>
  `;

  const wrap = document.getElementById("programListWrap");

  if (!PROGRAMS.length) {
    wrap.innerHTML = `<p class="empty-note">No programs yet — check back soon.</p>`;
    return;
  }

  PROGRAMS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "program-card";
    card.innerHTML = `
      <div class="program-card-top">
        <div>
          <h3>${esc(p.name)}</h3>
          ${p.subtitle ? `<p class="subtitle">${esc(p.subtitle)}</p>` : ""}
        </div>
        <div class="chip-arrow">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <p class="desc">${esc(p.description || "")}</p>
      <div class="meta-row">
        <span class="chip">${totalWeeks(p)} weeks</span>
        <span class="chip">${totalPhases(p)} phase${totalPhases(p) === 1 ? "" : "s"}</span>
      </div>
    `;
    card.addEventListener("click", () => setRoute({ name: "program", id: p.id, blockId: p.blocks[0].id }));
    wrap.appendChild(card);
  });
}

function renderProgram(programId, blockId) {
  const program = PROGRAMS.find((p) => p.id === programId);
  if (!program) return setRoute({ name: "programs" });
  const block = program.blocks.find((b) => b.id === blockId) || program.blocks[0];

  view.innerHTML = `
    <div class="hero" style="padding-bottom:8px;">
      <p class="hero-eyebrow">${esc(program.subtitle || "")}</p>
      <h1 class="hero-title" style="font-size:22px;">${esc(program.name)}</h1>
    </div>
    <div class="pill-row" id="pillRow"></div>
    <div id="dayList"></div>
  `;

  const pillRow = document.getElementById("pillRow");
  program.blocks.forEach((b) => {
    const pill = document.createElement("button");
    pill.className = "pill" + (b.id === block.id ? " active" : "");
    pill.textContent = b.label;
    pill.addEventListener("click", () => setRoute({ name: "program", id: program.id, blockId: b.id }));
    pillRow.appendChild(pill);
  });

  const dayList = document.getElementById("dayList");
  if (!block.days.length) {
    dayList.innerHTML = block.intro
      ? renderIntro(block.intro)
      : `<p class="empty-note">No days added for this block yet.</p>`;
    return;
  }

  block.days.forEach((day, idx) => {
    const isRest = /recovery|rest|interval run/i.test(day.title) && !day.sections.some((s) => s.items && s.items.length > 2);
    const card = document.createElement("div");
    card.className = "day-card" + (isRest ? " is-rest" : "");
    const dayAbbrev = (day.day || "").replace(/\s*\(.*\)/, "").slice(0, 3).toUpperCase();

    card.innerHTML = `
      <div class="day-card-head">
        <div class="day-badge">${esc(dayAbbrev)}</div>
        <div class="day-head-text">
          <p class="day-name">${esc(day.day || "")}</p>
          <p class="day-title">${esc(day.title || "")}</p>
        </div>
        ${day.duration ? `<span class="day-duration">${esc(day.duration)}</span>` : ""}
        <span class="chevron"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </div>
      <div class="day-body">${renderDayBody(day)}</div>
    `;

    card.querySelector(".day-card-head").addEventListener("click", () => {
      card.classList.toggle("open");
    });

    if (idx === 0) card.classList.add("open");
    dayList.appendChild(card);
  });
}

function renderIntro(intro) {
  let html = `<div class="intro-card">`;
  if (intro.title) html += `<h3 class="intro-title">${esc(intro.title)}</h3>`;
  if (intro.lead) html += `<p class="intro-lead">${esc(intro.lead)}</p>`;
  if (intro.bullets && intro.bullets.length) {
    html += `<ul class="intro-bullets">${intro.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;
  }
  if (intro.footer) html += `<p class="intro-footer">${esc(intro.footer)}</p>`;
  html += `</div>`;
  return html;
}

function renderDayBody(day) {
  let html = "";

  if (day.warmup && day.warmup.length) {
    html += `<div class="warmup-box"><span class="label">Warmup</span><ul>${day.warmup
      .map((w) => `<li>${esc(w)}</li>`)
      .join("")}</ul></div>`;
  }

  const sections = day.sections || [];
  if (!sections.length && !(day.warmup && day.warmup.length)) {
    html += `<p class="empty-note">Recovery day — take it easy and let your body absorb the work.</p>`;
  }

  sections.forEach((section) => {
    if (!section.items || !section.items.length) {
      if (section.title) {
        html += `<div class="section-block"><div class="section-head"><span class="section-title">${esc(
          section.title
        )}</span>${section.note ? `<span class="section-note">${esc(section.note)}</span>` : ""}</div></div>`;
      }
      return;
    }
    html += `<div class="section-block">`;
    if (section.title) {
      html += `<div class="section-head"><span class="section-title">${esc(section.title)}</span>${
        section.note ? `<span class="section-note">${esc(section.note)}</span>` : ""
      }</div>`;
    }
    section.items.forEach((item) => {
      if (item.main) {
        html += `<div class="lift-pair">`;
        html += `<div class="lift-row"><span class="lift-name">${exLink(item.main.text, item.main.link)}</span></div>`;
        if (item.corrective) {
          html += `<div class="corrective-row">`;
          html += `<span class="corrective-badge">Optional · during rest</span>`;
          html += `<span class="corrective-scheme">${esc(item.corrective.scheme || "")}</span>`;
          html += `<span class="corrective-name">${exLink(item.corrective.text, item.corrective.link)}</span>`;
          html += `</div>`;
        }
        html += `</div>`;
        return;
      }
      html += `<div class="ex-item">`;
      html += `<div class="ex-scheme">${esc(item.scheme || "")}</div>`;
      html += `<div class="ex-text">`;
      if (item.variants && item.variants.length) {
        html += `<ul class="variant-list">`;
        item.variants.forEach((v, i) => {
          html += `<li class="variant-row"><span class="variant-week">Wk ${i + 1}</span><span class="variant-text">${esc(
            v
          )}</span></li>`;
        });
        html += `</ul>`;
        if (item.text) html += `<span class="ex-note">${esc(item.text)}</span>`;
      } else {
        html += exLink(item.text, item.link);
      }
      if (item.note) html += `<span class="ex-note">${esc(item.note)}</span>`;
      html += `</div></div>`;
    });
    html += `</div>`;
  });

  if (day.cooldown) {
    html += `<div class="cooldown-tag">${typeof day.cooldown === "string" ? esc(day.cooldown) : "Cooldown"}</div>`;
  }

  return html;
}

function renderToday() {
  view.innerHTML = `
    <div class="hero">
      <p class="hero-eyebrow">Futbol Fit</p>
      <h1 class="hero-title">Today</h1>
      <p class="hero-sub">A quick jump to whatever you're training right now.</p>
    </div>
    <div id="todayWrap"></div>
  `;
  const wrap = document.getElementById("todayWrap");
  const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });

  if (!PROGRAMS.length) {
    wrap.innerHTML = `<div class="today-empty"><h3>No active program</h3><p>Your coach hasn't added a program yet.</p></div>`;
    return;
  }

  const program = PROGRAMS[0];
  const block = program.blocks[0];
  const match = block.days.find((d) => (d.day || "").toLowerCase().startsWith(weekday.toLowerCase()));

  if (!match) {
    wrap.innerHTML = `<div class="today-empty"><h3>Rest up, it's ${esc(weekday)}</h3><p>No session scheduled today. Browse your programs from the tab below.</p></div>`;
    return;
  }

  const card = document.createElement("div");
  card.className = "program-card";
  card.innerHTML = `
    <div class="program-card-top">
      <div>
        <p class="subtitle">${esc(weekday)} · ${esc(program.name)}</p>
        <h3>${esc(match.title)}</h3>
      </div>
      <div class="chip-arrow"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    </div>
    <div class="meta-row">${match.duration ? `<span class="chip">${esc(match.duration)}</span>` : ""}<span class="chip">${esc(block.label)}</span></div>
  `;
  card.addEventListener("click", () => setRoute({ name: "program", id: program.id, blockId: block.id }));
  wrap.appendChild(card);
}

function renderInstall() {
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  view.innerHTML = `
    <div class="install-hero">
      <div class="icon-preview"><img src="icons/logo.png" alt="" /></div>
      <h1 class="hero-title" style="font-size:22px;">Get Futbol Fit on your phone</h1>
      <p class="hero-sub">Install it once — no App Store needed. It lands on your home screen like any other app and works offline.</p>
    </div>

    <div class="steps-card">
      <h4>${isIOS ? "On iPhone (Safari)" : "On Android (Chrome)"}</h4>
      ${
        isIOS
          ? `
        <div class="step-row"><div class="step-num">1</div><p>Tap the <b>Share</b> icon <span class="share-icon"><svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 3v13m0-13l-4 4m4-4l4 4M5 15v4a2 2 0 002 2h10a2 2 0 002-2v-4" fill="none" stroke="currentColor" stroke-width="2"/></svg></span> in the Safari toolbar.</p></div>
        <div class="step-row"><div class="step-num">2</div><p>Scroll down and tap <b>Add to Home Screen</b>.</p></div>
        <div class="step-row"><div class="step-num">3</div><p>Tap <b>Add</b> — the Futbol Fit icon now opens like any app.</p></div>
      `
          : `
        <div class="step-row"><div class="step-num">1</div><p>Tap the <b>⋮</b> menu in the top-right of Chrome.</p></div>
        <div class="step-row"><div class="step-num">2</div><p>Tap <b>Add to Home screen</b> (or use the install banner below, if shown).</p></div>
        <div class="step-row"><div class="step-num">3</div><p>Tap <b>Install</b> — the Futbol Fit icon now opens like any app.</p></div>
      `
      }
    </div>

    <div class="steps-card">
      <h4>Share this app with clients</h4>
      <div class="step-row"><div class="step-num">→</div><p>Send them this page's link. They open it once, follow the same steps, and it's on their phone for good.</p></div>
    </div>
  `;
}

// ---------------- PWA install prompt (Android/Chrome) ----------------
let deferredPrompt = null;
const toast = document.getElementById("installToast");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem("ff_install_dismissed")) toast.hidden = false;
});

document.getElementById("installToastBtn").addEventListener("click", async () => {
  toast.hidden = true;
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
});

document.getElementById("installToastClose").addEventListener("click", () => {
  toast.hidden = true;
  localStorage.setItem("ff_install_dismissed", "1");
});

// ---------------- Service worker ----------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// ---------------- Init ----------------
setRoute({ name: "programs" });
