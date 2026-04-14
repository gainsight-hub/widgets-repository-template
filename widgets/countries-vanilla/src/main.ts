import widgetCss from "./widget.css?inline";
import type { WidgetSDK, WidgetProps } from "./types";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let currentCss = widgetCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") currentCss = mod.default;
    styles.forEach((s) => (s.textContent = currentCss));
  });
}

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);
  const root = sdk.shadowRoot.querySelector("#root")!;

  root.innerHTML = `
    <section class="vanilla-widget-section">
      <h3 class="vanilla-widget-title">${esc(sdk.getProps().title ?? "")}</h3>
      <p class="country-status">Loading…</p>
    </section>
  `;

  sdk.on("propsChanged", (props: WidgetProps) => {
    const el = root.querySelector(".vanilla-widget-title");
    if (el) el.textContent = props.title ?? "";
  });

  let cancelled = false;
  new window.WidgetServiceSDK().connectors
    .execute({ permalink: "rest-countries", method: "GET" })
    .then((raw) => {
      if (cancelled) return;
      const section = root.querySelector("section")!;
      section.querySelector(".country-status")?.remove();
      const list = document.createElement("ul");
      list.className = "country-list";
      [...raw]
        .sort((a, b) => b.population - a.population)
        .slice(0, 5)
        .forEach((c) => {
          const li = document.createElement("li");
          li.className = "country-item";
          const img = document.createElement("img");
          img.src = c.flags.png;
          img.alt = "";
          img.className = "country-flag";
          img.onerror = () => { img.style.display = "none"; };
          const name = document.createElement("span");
          name.className = "country-name";
          name.textContent = c.name.common;
          const capital = document.createElement("span");
          capital.className = "country-capital";
          capital.textContent = c.capital?.[0] ?? "N/A";
          li.append(img, name, capital);
          list.appendChild(li);
        });
      section.appendChild(list);
    })
    .catch((err: unknown) => {
      if (cancelled) return;
      const msg = err instanceof Error ? err.message : "Failed to load";
      const status = root.querySelector(".country-status");
      if (status) status.textContent = msg;
    });

  sdk.on("destroy", () => {
    cancelled = true;
    styles.delete(style);
    style.remove();
    root.innerHTML = "";
  });
}
