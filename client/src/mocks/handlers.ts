import { http, HttpResponse } from 'msw'

// Mocked quotes.
const quotes = [
  { text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  {
    text: 'Do not take life too seriously. You will never get out of it alive.',
    author: 'Elbert Hubbard',
  },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
]

export const handlers = [
  http.get('/api/quotes/random', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    return HttpResponse.json(randomQuote)
  }),
]
