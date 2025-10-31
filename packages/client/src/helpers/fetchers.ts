import type { Quote } from '@/types/Quotes'

export async function getRandomQuote(): Promise<Quote> {
  const response = await fetch('/api/quotes/random')

  if (!response.ok) {
    throw new Error(`Error fetching todo: ${response.statusText}`)
  }

  const data = await response.json()
  return data as Quote
}

// helpers/fetchers.ts
export async function getQuotes({
  page = 1,
  limit = 6,
  query,
  category,
  tags = [],
}: {
  page?: number
  limit?: number
  query?: string
  category?: string
  tags?: string[]
}) {
  const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() })

  if (query) params.append('search', query.trim())
  if (category && category !== 'all') params.append('category', category.toLowerCase())
  if (tags.length) tags.forEach((tag) => params.append('tag', tag))

  const res = await fetch(`/api/quotes?${params.toString()}`)
  if (!res.ok) throw new Error('Failed to fetch quotes')
  return res.json()
}

export async function getQuoteTags() {
  const res = await fetch('/api/tags')
  if (!res.ok) throw new Error('Failed to fetch tags')
  return res.json()
}
