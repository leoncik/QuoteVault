import type { Quote } from "@/types/Quotes"

export async function getRandomQuote(): Promise<Quote> {
  const response = await fetch('/api/quotes/random')

  if (!response.ok) {
    throw new Error(`Error fetching todo: ${response.statusText}`)
  }

  const data = await response.json()
  return data as Quote
}
