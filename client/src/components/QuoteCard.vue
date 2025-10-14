<template>
  <div class="quote-card" @click="handleClick">
    <div class="quote-icon">
      <QuoteIcon :size="32" />
    </div>

    <div class="quote-content">
      <blockquote class="quote-text">“{{ quote.text }}”</blockquote>

      <div class="quote-meta">
        <cite class="quote-author">— {{ quote.author }}</cite>
      </div>

      <div class="quote-footer">
        <span class="quote-category">{{ quote.category }}</span>

        <div class="quote-tags">
          <span v-for="tag in quote.tags.slice(0, 2)" :key="tag" class="quote-tag">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuoteIcon } from 'lucide-vue-next'
import type { Quote } from '@/types/Quotes'

const props = defineProps<{
  quote: Quote
  onClick?: (quote: Quote) => void
}>()

function handleClick() {
  if (props.onClick) props.onClick(props.quote)
}
</script>

<style scoped>
.quote-card {
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  background: var(--gradient-card);
  box-shadow: var(--shadow-quote);
  cursor: pointer;
  animation: fade-in 0.5s ease-out;
  transition: all 0.3s ease;
}

.quote-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-elegant);
}

.quote-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: hsl(var(--quote-accent) / 0.2);
  transition: color 0.3s ease;
  pointer-events: none;
}

.quote-card:hover .quote-icon {
  color: hsl(var(--quote-accent) / 0.4);
}

.quote-text {
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.6;
  color: hsl(var(--quote-text));
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.quote-author {
  display: block;
  font-size: 0.875rem;
  color: hsl(var(--quote-author));
  font-weight: 500;
  not-italic: true;
}

.quote-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quote-category {
  background: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.quote-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.quote-tag {
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
