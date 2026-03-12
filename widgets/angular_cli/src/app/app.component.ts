import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <section class="angular-widget-section">
      <h3 class="angular-widget-title">{{ title }}</h3>
      @if (description) {
        <p class="angular-widget-description">{{ description }}</p>
      }
    </section>
  `,
  styles: [`
    .angular-widget-section {
      font-family: sans-serif;
      padding: 1rem;
    }
    .angular-widget-title {
      font-size: 1.25rem;
      margin: 0 0 0.5rem;
      color: #dd0031;
    }
    .angular-widget-description {
      margin: 0;
      color: #4a4a4a;
    }
  `],
})
export class AppComponent {
  title = "Angular Widget";
  description = "A widget built with Angular 18 and the Angular CLI.";
}
