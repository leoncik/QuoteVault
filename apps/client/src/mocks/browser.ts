import { setupWorker } from 'msw/browser'
import {
  createAuthorHandler,
  createQuoteHandler,
  deleteAuthorHandler,
  deleteQuoteHandler,
  getAuthorByIdHandler,
  getQuoteByIdHandler,
  listAuthorsHandler,
  listQuotesHandler,
  updateAuthorHandler,
  updateQuoteHandler,
  getRandomQuoteHandler
} from '@quotevault/openapi/handlers'

export const worker = setupWorker(
  createAuthorHandler(),
  createQuoteHandler(),
  deleteAuthorHandler(),
  deleteQuoteHandler(),
  getAuthorByIdHandler(),
  getQuoteByIdHandler(),
  getRandomQuoteHandler(),
  listAuthorsHandler(),
  listQuotesHandler(),
  updateAuthorHandler(),
  updateQuoteHandler(),
)
