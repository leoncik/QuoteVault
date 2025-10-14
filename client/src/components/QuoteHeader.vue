<script setup lang="ts">
import { QuoteIcon, Home } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="header-title">
      <QuoteIcon class="quote-icon" :size="40" />
      <h1 class="site-title">QuoteVault</h1>
    </div>
    <p class="header-description">
      Discover inspiring quotes from great minds throughout history. Search, explore, and add your
      own favorite quotes to build your personal collection.
    </p>
    <RouterLink to="/" class="back-link">
      <Home class="home-icon" :size="16" />
      Back to Home
    </RouterLink>
  </header>
</template>

<style scoped>
.header {
  padding: 1.5rem;
  text-align: center;
  color: hsl(var(--foreground));
}

.header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.quote-icon {
  color: hsl(var(--quote-accent));
}

.site-title {
  font-size: 2.25rem;
  font-weight: 700;
  background: linear-gradient(to right, hsl(var(--quote-text)), hsl(var(--quote-accent)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
  .site-title {
    font-size: 3rem;
  }
}

.header-description {
  font-size: 1.125rem;
  color: hsl(var(--quote-author));
  max-width: 42rem;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: hsl(var(--quote-author));
  transition: color 0.2s;
}

.back-link:hover {
  color: hsl(var(--quote-accent));
}

.home-icon {
  margin-right: 0.5rem;
}
</style>
