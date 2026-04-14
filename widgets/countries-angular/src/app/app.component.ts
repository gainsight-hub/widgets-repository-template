import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  InjectionToken,
  ViewEncapsulation,
  inject,
  signal,
} from "@angular/core";
import type { WidgetProps, WidgetSDK, Country } from "../types";

export const WIDGET_SDK = new InjectionToken<WidgetSDK>("WIDGET_SDK");

@Component({
  selector: "countries-angular-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "../widget.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <section class="angular-widget-section">
      <h3 class="angular-widget-title">{{ props().title ?? "" }}</h3>
      @if (loading()) {
        <p class="country-status">Loading…</p>
      } @else if (error()) {
        <p class="country-status country-error">{{ error() }}</p>
      } @else {
        <ul class="country-list">
          @for (c of countries(); track c.name) {
            <li class="country-item">
              <img [src]="c.flag" alt="" class="country-flag" (error)="onFlagError($event)" />
              <span class="country-name">{{ c.name }}</span>
              <span class="country-capital">{{ c.capital }}</span>
            </li>
          }
        </ul>
      }
    </section>
  `,
})
export class AppComponent {
  private readonly sdk = inject(WIDGET_SDK);
  readonly props = signal<WidgetProps>(this.sdk.getProps());
  readonly countries = signal<Country[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(this.sdk.on("propsChanged", (data) => this.props.set(data)));

    let cancelled = false;
    new window.WidgetServiceSDK().connectors
      .execute({ permalink: "rest-countries", method: "GET" })
      .then((raw) => {
        if (cancelled) return;
        this.countries.set(
          [...raw]
            .sort((a, b) => b.population - a.population)
            .slice(0, 5)
            .map((c) => ({
              name: c.name.common,
              capital: c.capital?.[0] ?? "N/A",
              population: c.population,
              flag: c.flags.png,
            }))
        );
        this.loading.set(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        this.error.set(err instanceof Error ? err.message : "Failed to load");
        this.loading.set(false);
      });
    destroyRef.onDestroy(() => { cancelled = true; });
  }

  onFlagError(event: Event) {
    if (event.target instanceof HTMLImageElement) event.target.style.display = "none";
  }
}
