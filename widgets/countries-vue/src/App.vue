<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import type { WidgetSDK, WidgetProps, Country } from "./types";
import CountryCard from "./CountryCard.vue";

const { sdk } = defineProps<{ sdk: WidgetSDK }>();
const props = ref<WidgetProps>(sdk.getProps());
const unsubscribeProps = sdk.on("propsChanged", (newProps) => { props.value = newProps; });
onUnmounted(unsubscribeProps);

const TOP_COUNTRIES = 5;
const countries = ref<Country[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
let cancelled = false;

new window.WidgetServiceSDK().connectors
  .execute({ permalink: "rest-countries", method: "GET" })
  .then((raw) => {
    if (cancelled) return;
    countries.value = [...raw]
      .sort((a, b) => b.population - a.population)
      .slice(0, TOP_COUNTRIES)
      .map((c) => ({ name: c.name.common, capital: c.capital?.[0] ?? "N/A", population: c.population, flag: c.flags.png, region: c.region }));
    loading.value = false;
  })
  .catch((err: unknown) => {
    if (cancelled) return;
    error.value = err instanceof Error ? err.message : "Failed to load";
    loading.value = false;
  });

onUnmounted(() => { cancelled = true; });
</script>

<template>
  <section class="vue-widget-section">
    <p class="widget-framework-header">{{ props.title ?? "" }}</p>
    <div v-if="loading" role="status" aria-label="Loading country data">
      <ul class="country-list">
        <li v-for="n in TOP_COUNTRIES" :key="n" aria-hidden="true" class="country-item country-item--skeleton">
          <div class="country-flag country-flag--skeleton" />
          <div class="country-details">
            <div class="country-skeleton-line country-skeleton-line--name" />
            <div class="country-skeleton-line country-skeleton-line--meta" />
          </div>
        </li>
      </ul>
    </div>
    <div v-else-if="error" role="alert" class="country-error">
      <p>{{ error }}</p>
    </div>
    <ul v-else class="country-list">
      <CountryCard v-for="c in countries" :key="c.name" :country="c" />
    </ul>
  </section>
</template>
