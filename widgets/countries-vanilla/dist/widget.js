const g = ".vanilla-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:#afa2eb;box-shadow:inset 5px 0 #4629d6,0 1px 3px #0000001a,0 1px 2px #0000000f;color:#1e1e2e;box-sizing:border-box}.vanilla-widget-title{margin:0 0 .75rem;font-size:1.25rem;font-weight:700;letter-spacing:-.015em}.country-status{margin:0;font-size:.875rem;opacity:.7}.country-error{color:#c0392b;opacity:1}.country-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem}.country-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem}.country-flag{width:1.5rem;height:1rem;object-fit:cover;border-radius:2px;flex-shrink:0}.country-name{font-weight:600;flex:1}.country-capital{opacity:.7}", f = (e) => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
let x = g;
const y = /* @__PURE__ */ new Set();
async function h(e) {
  await e.whenReady();
  const r = document.createElement("style");
  r.textContent = x, y.add(r), e.shadowRoot.insertBefore(r, e.shadowRoot.firstChild);
  const s = e.shadowRoot.querySelector("#root");
  s.innerHTML = `
    <section class="vanilla-widget-section">
      <h3 class="vanilla-widget-title">${f(e.getProps().title ?? "")}</h3>
      <p class="country-status">Loading…</p>
    </section>
  `, e.on("propsChanged", (n) => {
    const t = s.querySelector(".vanilla-widget-title");
    t && (t.textContent = n.title ?? "");
  });
  let l = !1;
  new window.WidgetServiceSDK().connectors.execute({ permalink: "rest-countries", method: "GET" }).then((n) => {
    var u;
    if (l) return;
    const t = s.querySelector("section");
    (u = t.querySelector(".country-status")) == null || u.remove();
    const o = document.createElement("ul");
    o.className = "country-list", [...n].sort((c, i) => i.population - c.population).slice(0, 5).forEach((c) => {
      var d;
      const i = document.createElement("li");
      i.className = "country-item";
      const a = document.createElement("img");
      a.src = c.flags.png, a.alt = "", a.className = "country-flag", a.onerror = () => {
        a.style.display = "none";
      };
      const m = document.createElement("span");
      m.className = "country-name", m.textContent = c.name.common;
      const p = document.createElement("span");
      p.className = "country-capital", p.textContent = ((d = c.capital) == null ? void 0 : d[0]) ?? "N/A", i.append(a, m, p), o.appendChild(i);
    }), t.appendChild(o);
  }).catch((n) => {
    if (l) return;
    const t = n instanceof Error ? n.message : "Failed to load", o = s.querySelector(".country-status");
    o && (o.textContent = t);
  }), e.on("destroy", () => {
    l = !0, y.delete(r), r.remove(), s.innerHTML = "";
  });
}
export {
  h as init
};
