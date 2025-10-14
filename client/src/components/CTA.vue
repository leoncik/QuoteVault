<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="cta">
    <RouterLink to="/quotes" class="cta-button">
      Explore All Quotes
      <ArrowRight class="cta-icon" :size="20" />
    </RouterLink>
    <p class="cta-description">Browse our collection of inspiring quotes</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  color: hsl(var(--accent-foreground, var(--quote-text)));
  background: var(--gradient-accent);
  box-shadow: var(--shadow-glow, 0 0 30px hsl(43 74% 66% / 0.2));
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-elegant, 0 20px 40px -10px hsl(220 26% 14% / 0.3));
}

.cta-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.cta-description {
  font-size: 0.875rem;
  color: hsl(var(--quote-author));
}
</style>
