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
  <div className="max-w-6xl mx-auto px-6 mb-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-quote-text">
        {{
          searchQuery || selectedCategory !== 'all' || selectedTags.length > 0
            ? `Found ${filteredQuotes.length} quotes`
            : `All Quotes (${quotes.length})`
        }}
      </h2>
      <button
        v-if="searchQuery || selectedCategory !== 'all' || selectedTags.length > 0"
        variant="ghost"
        class="text-quote-author hover:text-quote-accent"
        @click="clearFilters"
      >
        Clear filters
      </button>
    </div>
  </div>
</template>
