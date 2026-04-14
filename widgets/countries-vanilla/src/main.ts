import widgetCss from "./widget.css?inline";
import type { WidgetSDK, WidgetProps, Country } from "./types";

let currentCss = widgetCss;
const styles = new Set<HTMLStyleElement>();

if (import.meta.hot) {
  import.meta.hot.accept("./widget.css?inline", (mod) => {
    if (typeof mod?.default === "string") currentCss = mod.default;
    styles.forEach((s) => (s.textContent = currentCss));
  });
}

const TOP_COUNTRIES = 5;

const createSkeleton = (): HTMLElement => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("role", "status");
  wrapper.setAttribute("aria-label", "Loading country data");
  const list = document.createElement("ul");
  list.className = "country-list";
  list.innerHTML = Array(TOP_COUNTRIES)
    .fill(
      `<li aria-hidden="true" class="country-item country-item--skeleton">
        <div class="country-flag country-flag--skeleton"></div>
        <div class="country-details">
          <div class="country-skeleton-line country-skeleton-line--name"></div>
          <div class="country-skeleton-line country-skeleton-line--meta"></div>
        </div>
      </li>`
    )
    .join("");
  wrapper.appendChild(list);
  return wrapper;
};

const createCard = (country: Country): HTMLElement => {
  const item = document.createElement("li");
  item.className = "country-item";

  const img = document.createElement("img");
  img.className = "country-flag";
  img.src = country.flag;
  img.alt = `Flag of ${country.name}`;
  img.onerror = () => { img.style.opacity = "0"; };

  const details = document.createElement("div");
  details.className = "country-details";

  const name = document.createElement("span");
  name.className = "country-name";
  name.textContent = country.name;

  const meta = document.createElement("span");
  meta.className = "country-meta";
  meta.textContent = `${country.capital} · ${country.population.toLocaleString("en-US")} · ${country.region}`;

  details.appendChild(name);
  details.appendChild(meta);
  item.appendChild(img);
  item.appendChild(details);

  return item;
};

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const style = document.createElement("style");
  style.textContent = currentCss;
  styles.add(style);
  sdk.shadowRoot.insertBefore(style, sdk.shadowRoot.firstChild);
  const root = sdk.shadowRoot.querySelector("#root")!;

  const section = document.createElement("section");
  section.className = "vanilla-widget-section";

  const header = document.createElement("p");
  header.className = "widget-framework-header";
  header.textContent = (sdk.getProps() as WidgetProps).title ?? "";

  const contentDiv = document.createElement("div");
  section.appendChild(header);
  section.appendChild(contentDiv);
  root.appendChild(section);

  sdk.on("propsChanged", (props: WidgetProps) => {
    header.textContent = props.title ?? "";
  });

  contentDiv.appendChild(createSkeleton());

  let cancelled = false;
  new window.WidgetServiceSDK().connectors
    .execute({ permalink: "rest-countries", method: "GET" })
    .then((raw) => {
      if (cancelled) return;
      const sorted = [...raw]
        .sort((a, b) => b.population - a.population)
        .slice(0, TOP_COUNTRIES);
      contentDiv.innerHTML = "";
      const list = document.createElement("ul");
      list.className = "country-list";
      sorted.forEach((c) =>
        list.appendChild(
          createCard({
            name: c.name.common,
            capital: c.capital?.[0] ?? "N/A",
            population: c.population,
            flag: c.flags.png,
            region: c.region,
          })
        )
      );
      contentDiv.appendChild(list);
    })
    .catch((err: unknown) => {
      if (cancelled) return;
      contentDiv.innerHTML = "";
      const errorDiv = document.createElement("div");
      errorDiv.className = "country-error";
      errorDiv.setAttribute("role", "alert");
      const msg = document.createElement("p");
      msg.textContent = err instanceof Error ? err.message : "Failed to load country data.";
      errorDiv.appendChild(msg);
      contentDiv.appendChild(errorDiv);
    });

  sdk.on("destroy", () => {
    cancelled = true;
    styles.delete(style);
    style.remove();
    root.innerHTML = "";
  });
}
