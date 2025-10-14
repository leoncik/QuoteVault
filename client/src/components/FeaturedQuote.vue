<script setup lang="ts">
import { QuoteIcon, Feather } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const randomQuote = ref({
  text: '',
  author: '',
})

const isLoading = ref(true)

function getNewQuote() {
  isLoading.value = true
  setTimeout(() => {
    randomQuote.value = {
      text: 'Be yourself; everyone else is already taken.',
      author: 'Oscar Wilde',
    }
    isLoading.value = false
  }, 1500)
}

onMounted(() => {
  getNewQuote()
})
</script>

<template>
  <div class="featured-quote">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <Feather class="loading-icon" :size="64" />
      <p class="loading-text">Loading inspiration...</p>
    </div>

    <!-- Quote State -->
    <div v-else class="quote-container">
      <div class="quote-icon">
        <QuoteIcon :size="80" />
      </div>

      <div class="quote-content">
        <blockquote class="quote-text">“{{ randomQuote.text }}”</blockquote>
        <cite class="quote-author">— {{ randomQuote.author }}</cite>
        <button class="quote-button" @click="getNewQuote">New Quote</button>
      </div>
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
  min-height: 400px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  animation: fade-in 0.5s ease-out;
}

.loading-icon {
  color: hsl(var(--quote-accent));
  animation: spin 3s ease-in-out infinite;
}

.loading-text {
  color: hsl(var(--quote-author));
  font-size: 1.125rem;
  animation: pulse 1.5s infinite;
}

.quote-icon {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: hsl(var(--quote-accent) / 0.2);
  pointer-events: none;
}

.quote-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.quote-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: fade-in 0.5s ease-out;
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

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
