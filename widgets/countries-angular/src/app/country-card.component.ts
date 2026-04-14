import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import type { Country } from "../types";

@Component({
  selector: "app-country-card",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li class="country-item">
      <img
        class="country-flag"
        [src]="country().flag"
        [alt]="'Flag of ' + country().name"
        (error)="onFlagError($event)"
      />
      <div class="country-details">
        <span class="country-name">{{ country().name }}</span>
        <span class="country-meta">{{ country().capital }} · {{ formattedPopulation() }} · {{ country().region }}</span>
      </div>
    </li>
  `,
})
export class CountryCardComponent {
  readonly country = input.required<Country>();
  readonly formattedPopulation = computed(() => this.country().population.toLocaleString("en-US"));

  onFlagError(e: Event): void {
    if (e.currentTarget instanceof HTMLImageElement) e.currentTarget.style.opacity = "0";
  }
}
