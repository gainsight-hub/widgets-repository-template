const h = ".vanilla-widget-section{padding:16px;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:#ecf7e1;box-shadow:inset 5px 0 #a0d568,0 1px 3px #0000001a,0 1px 2px #0000000f;color:#1e1e2e;box-sizing:border-box;max-width:480px;margin:24px 0 24px 24px}.country-list{list-style:none;margin:0;padding:0}.country-item{display:flex;align-items:center;gap:10px;padding:7px 0;list-style:none}.country-item+.country-item{border-top:1px solid rgba(0,0,0,.07)}.country-flag{width:36px;height:24px;object-fit:cover;object-position:center;flex-shrink:0;border-radius:3px;border:1px solid rgba(0,0,0,.08)}.country-details{display:flex;flex-direction:column;gap:2px;min-width:0}.country-name{font-size:.8125rem;font-weight:600;color:#1e1e2e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:1.3}.country-meta{font-size:.6875rem;color:#5a5a72;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.country-flag--skeleton{width:36px;height:24px;flex-shrink:0;border-radius:3px;background-color:#e5e7eb;animation:skeleton-pulse 1.4s ease-in-out infinite}.country-skeleton-line{height:10px;border-radius:3px;background:linear-gradient(90deg,#e5e7eb 25%,#f3f4f6,#e5e7eb 75%);background-size:200% 100%;animation:shimmer 1.4s infinite}.country-skeleton-line--name{width:55%;height:12px}.country-skeleton-line--meta{width:80%}.country-item--skeleton:nth-child(2) .country-flag--skeleton,.country-item--skeleton:nth-child(2) .country-skeleton-line{animation-delay:.1s}.country-item--skeleton:nth-child(3) .country-flag--skeleton,.country-item--skeleton:nth-child(3) .country-skeleton-line{animation-delay:.2s}.country-item--skeleton:nth-child(4) .country-flag--skeleton,.country-item--skeleton:nth-child(4) .country-skeleton-line{animation-delay:.3s}.country-item--skeleton:nth-child(5) .country-flag--skeleton,.country-item--skeleton:nth-child(5) .country-skeleton-line{animation-delay:.4s}@keyframes shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes skeleton-pulse{0%,to{background-color:#e5e7eb}50%{background-color:#d1d5db}}@media(prefers-reduced-motion:reduce){.country-flag--skeleton,.country-skeleton-line{animation:none;background:#e5e7eb}}.country-error{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:6px;background:#b91c1c14;border:1px solid rgba(185,28,28,.2);font-size:.8125rem;color:#b91c1c;line-height:1.4}.country-error p{margin:0}.widget-framework-header{margin:0 0 10px;font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#444458;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";
let y = h;
const m = /* @__PURE__ */ new Set(), u = 5, g = () => {
  const e = document.createElement("div");
  e.setAttribute("role", "status"), e.setAttribute("aria-label", "Loading country data");
  const t = document.createElement("ul");
  return t.className = "country-list", t.innerHTML = Array(u).fill(
    `<li aria-hidden="true" class="country-item country-item--skeleton">
        <div class="country-flag country-flag--skeleton"></div>
        <div class="country-details">
          <div class="country-skeleton-line country-skeleton-line--name"></div>
          <div class="country-skeleton-line country-skeleton-line--meta"></div>
        </div>
      </li>`
  ).join(""), e.appendChild(t), e;
}, f = (e) => {
  const t = document.createElement("li");
  t.className = "country-item";
  const o = document.createElement("img");
  o.className = "country-flag", o.src = e.flag, o.alt = `Flag of ${e.name}`, o.onerror = () => {
    o.style.opacity = "0";
  };
  const i = document.createElement("div");
  i.className = "country-details";
  const r = document.createElement("span");
  r.className = "country-name", r.textContent = e.name;
  const n = document.createElement("span");
  return n.className = "country-meta", n.textContent = `${e.capital} · ${e.population.toLocaleString("en-US")} · ${e.region}`, i.appendChild(r), i.appendChild(n), t.appendChild(o), t.appendChild(i), t;
};
async function x(e) {
  await e.whenReady();
  const t = document.createElement("style");
  t.textContent = y, m.add(t), e.shadowRoot.insertBefore(t, e.shadowRoot.firstChild);
  const o = e.shadowRoot.querySelector("#root"), i = document.createElement("section");
  i.className = "vanilla-widget-section";
  const r = document.createElement("p");
  r.className = "widget-framework-header", r.textContent = e.getProps().title ?? "";
  const n = document.createElement("div");
  i.appendChild(r), i.appendChild(n), o.appendChild(i), e.on("propsChanged", (l) => {
    r.textContent = l.title ?? "";
  }), n.appendChild(g());
  let p = !1;
  new window.WidgetServiceSDK().connectors.execute({ permalink: "rest-countries", method: "GET" }).then((l) => {
    if (p) return;
    const s = [...l].sort((a, d) => d.population - a.population).slice(0, u);
    n.innerHTML = "";
    const c = document.createElement("ul");
    c.className = "country-list", s.forEach(
      (a) => {
        var d;
        return c.appendChild(
          f({
            name: a.name.common,
            capital: ((d = a.capital) == null ? void 0 : d[0]) ?? "N/A",
            population: a.population,
            flag: a.flags.png,
            region: a.region
          })
        );
      }
    ), n.appendChild(c);
  }).catch((l) => {
    if (p) return;
    n.innerHTML = "";
    const s = document.createElement("div");
    s.className = "country-error", s.setAttribute("role", "alert");
    const c = document.createElement("p");
    c.textContent = l instanceof Error ? l.message : "Failed to load country data.", s.appendChild(c), n.appendChild(s);
  }), e.on("destroy", () => {
    p = !0, m.delete(t), t.remove(), o.innerHTML = "";
  });
}
export {
  x as init
};
