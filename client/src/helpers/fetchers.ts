import type { Quote } from '@/types/Quotes'

export async function getRandomQuote(): Promise<Quote> {
  const response = await fetch('/api/quotes/random')

  if (!response.ok) {
    throw new Error(`Error fetching todo: ${response.statusText}`)
  }

  const data = await response.json()
  return data as Quote
}

export async function getQuotes({ page = 1, limit = 6 }) {
  const res = await fetch(`/api/quotes?page=${page}&limit=${limit}`)
  if (!res.ok) throw new Error('Failed to fetch quotes')
  return res.json()
}
