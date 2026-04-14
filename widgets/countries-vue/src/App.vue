<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import type { WidgetSDK, WidgetProps, Country } from "./types";

const { sdk } = defineProps<{ sdk: WidgetSDK }>();
const props = ref<WidgetProps>(sdk.getProps());
const unsubscribeProps = sdk.on("propsChanged", (newProps) => { props.value = newProps; });
onUnmounted(unsubscribeProps);

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
      .slice(0, 5)
      .map((c) => ({ name: c.name.common, capital: c.capital?.[0] ?? "N/A", population: c.population, flag: c.flags.png }));
    loading.value = false;
  })
  .catch((err: unknown) => {
    if (cancelled) return;
    error.value = err instanceof Error ? err.message : "Failed to load";
    loading.value = false;
  });

onUnmounted(() => { cancelled = true; });

const onFlagError = (e: Event) => {
  if (e.target instanceof HTMLImageElement) e.target.style.display = "none";
};
</script>

<template>
  <section class="vue-widget-section">
    <h3 class="vue-widget-title">{{ props.title }}</h3>
    <p v-if="loading" class="country-status">Loading…</p>
    <p v-else-if="error" class="country-status country-error">{{ error }}</p>
    <ul v-else class="country-list">
      <li v-for="c in countries" :key="c.name" class="country-item">
        <img :src="c.flag" alt="" class="country-flag" @error="onFlagError" />
        <span class="country-name">{{ c.name }}</span>
        <span class="country-capital">{{ c.capital }}</span>
      </li>
    </ul>
  </section>
</template>
