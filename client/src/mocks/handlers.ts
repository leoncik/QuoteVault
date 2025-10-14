import { delay, http, HttpResponse } from 'msw'
import { allQuotes } from './data'

export const handlers = [
  // Returns a random quote.
  http.get('/api/quotes/random', async () => {
    await delay(700)
    const randomIndex = Math.floor(Math.random() * allQuotes.length)
    const randomQuote = allQuotes[randomIndex]

    return HttpResponse.json(randomQuote)
  }),

  // Returns all quotes with pagination.
  http.get('/api/quotes', async ({ request }) => {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page')) || 1
    const limit = Number(url.searchParams.get('limit')) || 6

    await delay(700)

    const start = (page - 1) * limit
    const end = start + limit
    const quotes = allQuotes.slice(start, end)

    return HttpResponse.json({
      quotes,
      hasMore: end < allQuotes.length,
    })
  }),
]
