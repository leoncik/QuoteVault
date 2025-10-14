<script setup lang="ts">
import QuoteHeader from '@/components/QuoteHeader.vue'
import ResultsHeader from '@/components/ResultsHeader.vue'
import QuoteGallery from '@/components/QuoteGallery.vue'
import QuoteSearchForm from '@/components/QuoteSearchForm.vue'
</script>

<template>
  <div className="wrapper">
    <QuoteHeader />
    <QuoteSearchForm />
    <ResultsHeader />
    <QuoteGallery />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  background: var(--gradient-hero);
}
</style>