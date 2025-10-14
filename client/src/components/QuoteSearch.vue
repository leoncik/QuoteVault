<template>
  <div class="quote-search">
    <!-- Search bar and filters -->
    <div class="search-bar">
      <div class="search-input">
        <span class="icon">🔍</span>
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

      <button class="btn-accent" @click="handleSearch">Search</button>
    </div>

    <!-- Tag filter section -->
    <div class="tag-filter">
      <div class="tag-header">
        <span class="icon">🏷️</span>
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

<script setup lang="ts">
import { ref } from 'vue'

interface QuoteSearchProps {
  onSearch?: (query: string, category: string, tags: string[]) => void
  categories: string[]
  availableTags: string[]
}

const props = defineProps<QuoteSearchProps>()

const query = ref<string>('')
const selectedCategory = ref<string>('all')
const selectedTags = ref<string[]>([])

function handleSearch(): void {
  props.onSearch?.(query.value, selectedCategory.value, selectedTags.value)
}

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

<style scoped>
.quote-search {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.search-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f8f8;
  border-radius: 8px;
  align-items: center;
}

.search-input {
  position: relative;
  flex: 1;
}

.search-input .icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  opacity: 0.6;
}

.search-input input {
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
}

.category-select select {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.btn-accent {
  background: linear-gradient(90deg, #7a5fff, #5ac8fa);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-accent:hover {
  opacity: 0.9;
}

.btn-clear {
  background: none;
  border: none;
  font-size: 0.8rem;
  color: #888;
  cursor: pointer;
}

.btn-clear:hover {
  color: #007bff;
}

.tag-filter {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 1rem;
}

.tag-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.tag-header .icon {
  opacity: 0.7;
}

.tag-header .label {
  font-size: 0.9rem;
  font-weight: 500;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #e9ecef;
  color: #555;
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.2s;
}

.tag:hover {
  background: #dfe6fd;
  color: #3366ff;
}

.tag.active {
  background: rgba(102, 153, 255, 0.2);
  border: 1px solid rgba(102, 153, 255, 0.3);
  color: #3366ff;
}

.tag .remove {
  border: none;
  background: none;
  margin-left: 0.4rem;
  font-size: 0.9em;
  cursor: pointer;
  color: #ff6b6b;
}
</style>
