<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedTags = ref<string[]>([])
const quotes = ref([{ text: 'Be yourself' }, { text: 'Work hard' }])
const filteredQuotes = computed(() =>
  quotes.value.filter((quote) =>
    quote.text.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ),
)

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  selectedTags.value = []
}
</script>

<template>
  <div class="quotes-container">
    <div class="quotes-header">
      <h2 class="quotes-title">
        {{
          searchQuery || selectedCategory !== 'all' || selectedTags.length > 0
            ? `Found ${filteredQuotes.length} quotes`
            : `All Quotes (${quotes.length})`
        }}
      </h2>
      <button
        v-if="searchQuery || selectedCategory !== 'all' || selectedTags.length > 0"
        class="clear-button"
        @click="clearFilters"
      >
        Clear filters
      </button>
    </div>
  </div>
</template>

<style scoped>
.quotes-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
}

.quotes-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quotes-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--quote-text, #222);
}

.clear-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--quote-author, #555);
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
}

.clear-button:hover {
  color: var(--quote-accent, #007bff);
}
</style>
