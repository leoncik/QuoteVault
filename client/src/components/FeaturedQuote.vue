<script setup lang="ts">
import { QuoteIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const randomQuote = ref({
  text: 'Be yourself; everyone else is already taken.',
  author: 'Oscar Wilde',
})

function getNewQuote() {
  // Replace this with your quote logic
  console.log('Fetching new quote...')
}
</script>

<template>
  <div class="featured-quote">
    <div class="quote-icon">
      <QuoteIcon :size="80" />
    </div>

    <div class="quote-content">
      <blockquote class="quote-text">“{{ randomQuote.text }}”</blockquote>

      <cite class="quote-author"> — {{ randomQuote.author }} </cite>

      <button class="quote-button" @click="getNewQuote">New Quote</button>
    </div>
  </div>
</template>

<style scoped>
.featured-quote {
  position: relative;
  overflow: hidden;
  background: var(--gradient-card);
  box-shadow: var(--shadow-quote);
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  padding: 3rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 768px) {
  .featured-quote {
    padding: 4rem;
  }
}

.featured-quote:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-elegant);
}

.quote-icon {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: hsl(var(--quote-accent) / 0.2);
  pointer-events: none;
}

.quote-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quote-text {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.875rem;
  line-height: 1.6;
  color: hsl(var(--quote-text));
  font-style: italic;
}

@media (min-width: 768px) {
  .quote-text {
    font-size: 2.25rem;
  }
}

.quote-author {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--quote-author));
  font-style: normal;
}

@media (min-width: 768px) {
  .quote-author {
    font-size: 1.5rem;
  }
}

.quote-button {
  align-self: flex-start;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  color: hsl(var(--foreground));
  cursor: pointer;
  transition: all 0.2s ease;
}

.quote-button:hover {
  background-color: hsl(var(--accent) / 0.1);
  border-color: hsl(var(--accent));
}
</style>
