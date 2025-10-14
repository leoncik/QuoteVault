<script setup lang="ts">
import { ref } from 'vue'
import QuoteCard from './QuoteCard.vue'
import { QuoteIcon, PlusCircle } from 'lucide-vue-next'

// Mock state
const quotes = ref([
  { id: 1, text: 'Be yourself', author: 'Oscar Wilde', category: 'Art', tags: ['Art'] },
  {
    id: 2,
    text: 'Stay hungry, stay foolish',
    author: 'Steve Jobs',
    category: 'Life',
    tags: ['Apple', 'Tech'],
  },
])

const filteredQuotes = ref(quotes.value)
const visibleQuotes = ref(quotes.value.slice(0, 6))
const hasMore = ref(true)

// Infinite scroll target
const observerTarget = ref<HTMLElement | null>(null)

// Handlers
function handleQuoteClick(quote: any) {
  console.log('Clicked quote:', quote)
}

function setCurrentView(view: string) {
  console.log('Changing view to:', view)
}
</script>

<template>
  <main class="quote-container">
    <template v-if="filteredQuotes.length > 0">
      <div class="quote-grid">
        <QuoteCard
          v-for="quote in visibleQuotes"
          :key="quote.id"
          :quote="quote"
          @click="handleQuoteClick(quote)"
        />
      </div>

      <!-- Infinite Scroll Trigger -->
      <div v-if="hasMore" ref="observerTarget" class="loading">
        <div class="loading-text">Loading more quotes...</div>
      </div>
    </template>

    <!-- Empty State -->
    <template v-else>
      <div class="empty-state">
        <QuoteIcon class="empty-icon" :size="64" />
        <h3 class="empty-title">No quotes found</h3>
        <p class="empty-text">Try adjusting your search terms or add a new quote to get started.</p>
        <button class="add-quote-btn" @click="setCurrentView('form')">
          <PlusCircle class="icon" :size="16" />
          Add Your First Quote
        </button>
      </div>
    </template>
  </main>
</template>

<style scoped>
.quote-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quote-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .quote-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .quote-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.loading {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.loading-text {
  color: hsl(var(--quote-author));
  font-size: 1rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-icon {
  color: hsl(var(--muted-foreground));
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--quote-text));
}

.empty-text {
  color: hsl(var(--quote-author));
  max-width: 32rem;
}

.add-quote-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: opacity 0.2s;
}

.add-quote-btn:hover {
  opacity: 0.9;
}

.add-quote-btn .icon {
  display: inline-flex;
}
</style>
