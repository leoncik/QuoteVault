<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-wrapper">
    <div class="not-found-card">
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">Oops! This quote seems to have gone missing</p>
      <p class="not-found-subtext">The page you're looking for doesn't exist in our collection.</p>
      <RouterLink to="/" class="not-found-button">Return to Quotes</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--gradient-hero);
  padding: 1rem;
}

.not-found-card {
  text-align: center;
  background: var(--gradient-card);
  box-shadow: var(--shadow-quote);
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  padding: 3rem;
  max-width: 28rem;
  transition: all 0.3s ease;
}

.not-found-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-elegant);
}

.not-found-title {
  margin-bottom: 1rem;
  font-size: 3.75rem;
  font-weight: 700;
  color: hsl(var(--quote-accent));
}

.not-found-message {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: hsl(var(--quote-author));
}

.not-found-subtext {
  margin-bottom: 2rem;
  color: hsl(var(--muted-foreground));
}

.not-found-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: hsl(var(--primary-foreground));
  background: var(--gradient-accent);
  border-radius: var(--radius);
  transition: all 0.2s ease-in-out;
  border: 1px solid hsl(var(--border));
}

.not-found-button:hover {
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}
</style>
