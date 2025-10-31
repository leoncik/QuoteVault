import { delay, http, HttpResponse } from 'msw'
import { allQuotes, tags } from './data'

export const handlers = [
  // Returns a random quote.
  http.get('/api/quotes/random', async () => {
    await delay(700)
    const randomIndex = Math.floor(Math.random() * allQuotes.length)
    const randomQuote = allQuotes[randomIndex]

    return HttpResponse.json(randomQuote)
  }),

  // Returns quotes with pagination, filtering, and search.
  http.get('/api/quotes', async ({ request }) => {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page')) || 1
    const limit = Number(url.searchParams.get('limit')) || 6
    const tagParams = url.searchParams.getAll('tag')
    const category = url.searchParams.get('category')
    // Trim to remove extra white spaces.
    const search = url.searchParams.get('search')?.toLowerCase().trim()

    await delay(700)

    // Filter quotes
    let filtered = allQuotes

    // Filter by tags (must include all requested tags)
    if (tagParams.length > 0) {
      filtered = filtered.filter((q) => tagParams.every((tag) => q.tags?.includes(tag)))
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter((q) => q.category === category)
    }

    // Filter by keyword / author / text
    if (search) {
      filtered = filtered.filter((q) => {
        const haystack = `${q.text} ${q.author} ${q.category} ${q.tags?.join(' ')}`.toLowerCase()
        return haystack.includes(search)
      })
    }

    // Pagination
    const start = (page - 1) * limit
    const end = start + limit
    const quotes = filtered.slice(start, end)

    return HttpResponse.json({
      quotes,
      hasMore: end < filtered.length,
      total: filtered.length,
    })
  }),

  // Returns tags
  http.get('/api/tags', async () => {
    await delay(700)
    return HttpResponse.json(tags)
  }),
]
