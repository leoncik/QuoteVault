<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'

import QuoteHeader from '@/pages/Quotes/QuoteHeader.vue'
import ResultsHeader from '@/pages/Quotes/ResultsHeader.vue'
import QuoteGallery from '@/pages/Quotes/QuoteGallery.vue'
import QuoteSearchForm from './QuoteSearchForm/QuoteSearchForm.vue'
import { getQuoteTags } from '@/helpers/fetchers'

// Fetch tags for filtering
const { data: tags, isPending: isTagsPending } = useQuery({
  queryKey: ['quoteTags'],
  queryFn: getQuoteTags,
  refetchOnWindowFocus: false,
})

</script>

<template>
  <div class="wrapper">
    <QuoteHeader />

    <template v-if="!isTagsPending">
      <QuoteSearchForm :tags="tags" />
      <ResultsHeader />
      <QuoteGallery />
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