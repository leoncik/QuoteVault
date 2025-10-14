<script setup lang="ts">
import QuoteSearch from './QuoteSearch.vue';
import { ref } from 'vue';
import { PlusCircle } from 'lucide-vue-next';

const categories = ref<string[]>(['Inspiration', 'Humor', 'Life']);
const availableTags = ref<string[]>(['motivation', 'funny', 'wisdom']);

function handleSearch(query: string, category: string, tags: string[]) {
  console.log('Search:', { query, category, tags });
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 mb-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
      <div class="lg:col-span-3">
        <QuoteSearch
          :onSearch="handleSearch"
          :categories="categories"
          :availableTags="availableTags"
        />
      </div>
      <div class="lg:col-span-1">
        <Button class="w-full gradient-accent h-[60px] text-lg font-semibold">
          <PlusCircle class="mr-2" :size="20" />
          Add Quote
        </Button>
      </div>
    </div>
  </div>
</template>