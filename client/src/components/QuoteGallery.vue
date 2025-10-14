<script setup lang="ts">
import { ref, computed } from 'vue'
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
  <main class="max-w-6xl mx-auto px-6 pb-12">
    <template v-if="filteredQuotes.length > 0">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuoteCard
          v-for="quote in visibleQuotes"
          :key="quote.id"
          :quote="quote"
          @click="handleQuoteClick(quote)"
        />
      </div>

      <!-- Infinite Scroll Trigger -->
      <div v-if="hasMore" ref="observerTarget" class="flex justify-center mt-8">
        <div class="text-quote-author">Loading more quotes...</div>
      </div>
    </template>

    <!-- Empty State -->
    <template v-else>
      <div class="text-center py-16">
        <QuoteIcon class="mx-auto text-muted-foreground mb-4" :size="64" />
        <h3 class="text-xl font-semibold text-quote-text mb-2">No quotes found</h3>
        <p class="text-quote-author mb-6">
          Try adjusting your search terms or add a new quote to get started.
        </p>
        <Button class="gradient-accent" @click="setCurrentView('form')">
          <PlusCircle class="mr-2" :size="16" />
          Add Your First Quote
        </Button>
      </div>
    </template>
  </main>
</template>
