<script setup lang="ts">
import type { Country } from "./types";

defineProps<{ country: Country }>();

const onFlagError = (e: Event) => {
  if (e.currentTarget instanceof HTMLImageElement) e.currentTarget.style.opacity = "0";
};
</script>

<template>
  <li class="country-item">
    <img
      class="country-flag"
      :src="country.flag"
      :alt="`Flag of ${country.name}`"
      @error="onFlagError"
    />
    <div class="country-details">
      <span class="country-name">{{ country.name }}</span>
      <span class="country-meta">{{ country.capital }} · {{ country.population.toLocaleString("en-US") }} · {{ country.region }}</span>
    </div>
  </li>
</template>
