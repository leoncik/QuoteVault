<script setup lang="ts">
import { QuoteIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="logo-title-quote">
    <div class="logo-title-header">
      <QuoteIcon class="logo-title-icon" :size="56" />
      <h1 class="logo-title-title">QuoteVault</h1>
    </div>
    <p class="logo-title-subtitle">Discover wisdom from the greatest minds in history</p>
  </div>
</template>

<style scoped>
.logo-title-quote {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  max-width: 100%;
}

.logo-title-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.logo-title-icon {
  color: hsl(var(--quote-accent));
}

.logo-title-title {
  font-size: 3.75rem;
  font-weight: 700;
  background: linear-gradient(to right, hsl(var(--quote-text)), hsl(var(--quote-accent)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Fallbacks */
  background-clip: text;
  text-fill-color: transparent;
}

@media (min-width: 768px) {
  .logo-title-title {
    font-size: 4.5rem;
  }
}

.logo-title-subtitle {
  font-size: 1.25rem;
  color: hsl(var(--quote-author));
  max-width: 42rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .logo-title-subtitle {
    font-size: 1.5rem;
  }
}
</style>
