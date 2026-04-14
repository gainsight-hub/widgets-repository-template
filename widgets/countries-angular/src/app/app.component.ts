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
import { CountryCardComponent } from "./country-card.component";

export const WIDGET_SDK = new InjectionToken<WidgetSDK>("WIDGET_SDK");

const TOP_COUNTRIES = 5;

@Component({
  selector: "countries-angular-root",
  standalone: true,
  imports: [CountryCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "../widget.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <section class="angular-widget-section">
      <p class="widget-framework-header">{{ props().title ?? "" }}</p>
      @if (loading()) {
        <div role="status" aria-label="Loading country data">
          <ul class="country-list">
            @for (_ of skeletons; track $index) {
              <li aria-hidden="true" class="country-item country-item--skeleton">
                <div class="country-flag country-flag--skeleton"></div>
                <div class="country-details">
                  <div class="country-skeleton-line country-skeleton-line--name"></div>
                  <div class="country-skeleton-line country-skeleton-line--meta"></div>
                </div>
              </li>
            }
          </ul>
        </div>
      } @else if (error()) {
        <div role="alert" class="country-error">
          <p>{{ error() }}</p>
        </div>
      } @else {
        <ul class="country-list">
          @for (c of countries(); track c.name) {
            <app-country-card [country]="c" />
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
  readonly skeletons = Array.from({ length: TOP_COUNTRIES });

  constructor() {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(this.sdk.on("propsChanged", (data) => this.props.set(data)));

    let cancelled = false;
    destroyRef.onDestroy(() => { cancelled = true; });

    (async () => {
      try {
        const raw = await new window.WidgetServiceSDK().connectors.execute({
          permalink: "rest-countries",
          method: "GET",
        });
        if (cancelled) return;
        this.countries.set(
          [...raw]
            .sort((a, b) => b.population - a.population)
            .slice(0, TOP_COUNTRIES)
            .map((c) => ({
              name: c.name.common,
              capital: c.capital?.[0] ?? "N/A",
              population: c.population,
              flag: c.flags.png,
              region: c.region,
            }))
        );
      } catch (e) {
        if (cancelled) return;
        this.error.set(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) this.loading.set(false);
      }
    })();
  }
}
