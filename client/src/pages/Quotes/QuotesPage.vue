<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'

import QuoteHeader from '@/pages/Quotes/QuoteHeader.vue'
import ResultsHeader from '@/pages/Quotes/ResultsHeader.vue'
import QuoteGallery from '@/pages/Quotes/QuoteGallery.vue'
import QuoteSearchForm from './QuoteSearchForm/QuoteSearchForm.vue'
import { getQuoteTags } from '@/helpers/fetchers'

// Fetch available tags
const { data: tags, isPending: isTagsPending } = useQuery({
  queryKey: ['quoteTags'],
  queryFn: getQuoteTags,
  refetchOnWindowFocus: false,
})

// Filters
const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedTags = ref<string[]>([])

// Handle emitted search event from QuoteSearchForm
function handleSearch(query: string, category: string, tags: string[]) {
  searchQuery.value = query
  selectedCategory.value = category
  selectedTags.value = tags
}
</script>

<template>
  <div class="wrapper">
    <QuoteHeader />

    <template v-if="!isTagsPending">
      <!-- Search form emits filters -->
      <QuoteSearchForm :tags="tags" @search="handleSearch" />

      <ResultsHeader />

      <!-- Pass filters to gallery -->
      <QuoteGallery
        :searchQuery="searchQuery"
        :selectedCategory="selectedCategory"
        :selectedTags="selectedTags"
      />
    </template>

    <template v-else>
      <div class="loading-screen">Loading quotes & filters...</div>
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  background: var(--gradient-hero);
}
</style>
