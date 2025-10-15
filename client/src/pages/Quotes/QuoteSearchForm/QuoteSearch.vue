<script setup lang="ts">
import { ref, watch } from 'vue'
import { Search, Tag } from 'lucide-vue-next'

interface QuoteSearchProps {
  onSearch?: (query: string, category: string, tags: string[]) => void
  categories: string[]
  availableTags: string[]
}

const props = defineProps<QuoteSearchProps>()

const query = ref<string>('')
const selectedCategory = ref<string>('all')
const selectedTags = ref<string[]>([])

let debounceTimeout: ReturnType<typeof setTimeout> | null = null

function handleSearch(): void {
  props.onSearch?.(query.value, selectedCategory.value, selectedTags.value)
}

function debouncedSearch(): void {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout)
  }

  debounceTimeout = setTimeout(() => {
    handleSearch()
  }, 500)
}

// Watch for changes in search inputs
watch(query, () => {
  debouncedSearch()
})

watch(selectedCategory, () => {
  handleSearch()
})

watch(selectedTags, () => {
  handleSearch()
})

function addTag(tag: string): void {
  if (!selectedTags.value.includes(tag)) {
    selectedTags.value.push(tag)
  }
}

function removeTag(tagToRemove: string): void {
  selectedTags.value = selectedTags.value.filter((t) => t !== tagToRemove)
}

function clearAllTags(): void {
  selectedTags.value = []
}
</script>

<template>
  <div class="quote-search">
    <!-- Search bar and filters -->
    <div class="search-bar">
      <div class="search-input">
        <Search class="icon" :size="20" />
        <input
          type="text"
          v-model="query"
          placeholder="Search quotes, authors, or keywords..."
          @keypress.enter="handleSearch"
        />
      </div>

      <div class="category-select">
        <select v-model="selectedCategory">
          <option value="all">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category.toLowerCase()">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <!-- Tag filter section -->
    <div class="tag-filter">
      <div class="tag-header">
        <Tag :size="16" class="icon" />
        <span class="label">Filter by Tags:</span>
        <button v-if="selectedTags.length" class="btn-clear" @click="clearAllTags">
          Clear all
        </button>
      </div>

      <!-- Selected Tags -->
      <div v-if="selectedTags.length" class="tag-list">
        <span v-for="tag in selectedTags" :key="tag" class="tag active">
          #{{ tag }}
          <button class="remove" @click="removeTag(tag)">×</button>
        </span>
      </div>

      <!-- Available Tags -->
      <div class="tag-list">
        <button
          v-for="tag in availableTags.filter((t) => !selectedTags.includes(t))"
          :key="tag"
          class="tag"
          @click="addTag(tag)"
        >
          #{{ tag }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote-search {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: system-ui, sans-serif;
}

.search-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--gradient-card);
  border-radius: var(--radius);
  align-items: center;
  box-shadow: var(--shadow-quote);
}

.search-input {
  position: relative;
  flex: 1;
}

.search-input .icon {
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  opacity: 0.6;
  color: hsl(var(--muted-foreground));
}

.search-input input {
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  font-size: 0.95rem;
  background-color: hsl(var(--background) / 0.5);
  color: hsl(var(--foreground));
  transition:
    border 0.2s,
    background 0.2s;
}

.search-input input:focus {
  border-color: hsl(var(--accent));
  outline: none;
  background-color: hsl(var(--background) / 0.7);
}

.category-select select {
  padding: 0.5rem;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background) / 0.5);
  color: hsl(var(--foreground));
  min-width: 10rem;
  transition:
    border 0.2s,
    background 0.2s;
}

.category-select select:focus {
  border-color: hsl(var(--accent));
  outline: none;
}

.btn-accent {
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 500;
  transition:
    opacity 0.2s,
    box-shadow 0.2s;
}

.btn-accent:hover {
  opacity: 0.95;
  box-shadow: var(--shadow-glow);
}

.tag-filter {
  background: var(--gradient-card);
  border-radius: var(--radius);
  padding: 1rem;
  box-shadow: var(--shadow-quote);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.tag-header .icon {
  color: hsl(var(--quote-accent));
}

.tag-header .label {
  font-size: 0.9rem;
  font-weight: 500;
  color: hsl(var(--foreground));
}

.btn-clear {
  background: none;
  border: none;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  transition: color 0.2s;
}

.btn-clear:hover {
  color: hsl(var(--quote-accent));
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.tag {
  background-color: hsl(var(--secondary) / 0.5);
  color: hsl(var(--muted-foreground));
  font-size: 0.8rem;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
}

.tag:hover {
  background-color: hsl(var(--quote-accent) / 0.2);
  color: hsl(var(--quote-accent));
}

.tag.active {
  background-color: hsl(var(--quote-accent) / 0.2);
  border: 1px solid hsl(var(--quote-accent) / 0.3);
  color: hsl(var(--quote-accent));
}

.tag .remove {
  border: none;
  background: none;
  margin-left: 0.25rem;
  font-size: 0.8rem;
  cursor: pointer;
  color: hsl(var(--destructive));
  transition: color 0.2s;
}

.tag .remove:hover {
  color: hsl(var(--destructive-foreground));
}
</style>
