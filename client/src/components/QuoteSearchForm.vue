<script setup lang="ts">
import QuoteSearch from './QuoteSearch.vue'
import { ref } from 'vue'
import { PlusCircle } from 'lucide-vue-next'

const categories = ref<string[]>(['Inspiration', 'Humor', 'Life'])
const availableTags = ref<string[]>(['motivation', 'funny', 'wisdom'])

function handleSearch(query: string, category: string, tags: string[]) {
  console.log('Search:', { query, category, tags })
}
</script>

<template>
  <div class="container">
    <div class="grid">
      <div class="main">
        <QuoteSearch
          :onSearch="handleSearch"
          :categories="categories"
          :availableTags="availableTags"
        />
      </div>
      <div class="sidebar">
        <button class="add-quote-btn">
          <PlusCircle class="icon" :size="20" />
          Add Quote
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 96rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: end;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.main {
  grid-column: span 1;
}

@media (min-width: 1024px) {
  .main {
    grid-column: span 3;
  }
}

.sidebar {
  grid-column: span 1;
}

.add-quote-btn {
  width: 100%;
  height: 60px;
  font-size: 1.125rem;
  font-weight: 600;
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
  border: none;
  border-radius: var(--radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
}

.add-quote-btn:hover {
  opacity: 0.9;
}

.add-quote-btn .icon {
  margin-right: 0.5rem;
  display: inline-flex;
}
</style>
