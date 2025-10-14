<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useInfiniteQuery } from '@tanstack/vue-query'
import QuoteCard from './QuoteCard.vue'
import { QuoteIcon, PlusCircle } from 'lucide-vue-next'
import type { Quote } from '@/types/Quotes'
import { getQuotes } from '@/helpers/fetchers'

const observerTarget = ref<HTMLElement | null>(null)

// Query function
const fetchQuotes = async ({ pageParam = 1 }) => {
  // pageParam starts at 1
  const res = await getQuotes({ page: pageParam, limit: 6 })
  return res
}

const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
  queryKey: ['quotes'],
  queryFn: fetchQuotes,
  getNextPageParam: (lastPage, pages) => (lastPage.hasMore ? pages.length + 1 : undefined),
  initialPageParam: 1,
  refetchOnWindowFocus: false,
})

const allQuotes = ref<Quote[]>([])

// Flatten pages
watch(data, (val) => {
  if (val) {
    allQuotes.value = val.pages.flatMap((page) => page.quotes)
  }
})

// IntersectionObserver for infinite scroll
onMounted(() => {
  watch(
    observerTarget,
    (element) => {
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage.value) {
            fetchNextPage()
          }
        },
        {
          root: null, // viewport
          rootMargin: '200px', // trigger a bit before reaching bottom
          threshold: 0.1, // when 10% of target is visible
        },
      )

      observer.observe(element)

      onUnmounted(() => observer.disconnect())
    },
    { immediate: true },
  )
})
</script>

<template>
  <main class="quote-container">
    <!-- Loading initial state -->
    <div v-if="status === 'pending'" class="loading">
      <div class="loading-text">Loading quotes...</div>
    </div>

    <template v-else-if="allQuotes.length > 0">
      <div class="quote-grid">
        <QuoteCard v-for="quote in allQuotes" :key="quote.id" :quote="quote" />
      </div>

      <!-- Infinite Scroll Trigger -->
      <div v-if="hasNextPage || isFetchingNextPage" ref="observerTarget" class="loading">
        <div class="loading-text">
          {{ isFetchingNextPage ? 'Loading more quotes...' : 'Scroll for more' }}
        </div>
      </div>
    </template>

    <!-- Empty State -->
    <template v-else>
      <div class="empty-state">
        <QuoteIcon class="empty-icon" :size="64" />
        <h3 class="empty-title">No quotes found</h3>
        <p class="empty-text">Try adjusting your search terms or add a new quote to get started.</p>
        <button class="add-quote-btn">
          <PlusCircle class="icon" :size="16" />
          Add Your First Quote
        </button>
      </div>
    </template>
  </main>
</template>

<style scoped>
.quote-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quote-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .quote-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .quote-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.loading {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.loading-text {
  color: hsl(var(--quote-author));
  font-size: 1rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-icon {
  color: hsl(var(--muted-foreground));
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--quote-text));
}

.empty-text {
  color: hsl(var(--quote-author));
  max-width: 32rem;
}

.add-quote-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: opacity 0.2s;
}

.add-quote-btn:hover {
  opacity: 0.9;
}

.add-quote-btn .icon {
  display: inline-flex;
}
</style>
