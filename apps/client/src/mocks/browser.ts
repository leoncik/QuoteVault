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
} from '@quotevault/openapi/handlers'

export const worker = setupWorker(
  createAuthorHandler(),
  createQuoteHandler(),
  deleteAuthorHandler(),
  deleteQuoteHandler(),
  getAuthorByIdHandler(),
  getQuoteByIdHandler(),
  listAuthorsHandler(),
  listQuotesHandler(),
  updateAuthorHandler(),
  updateQuoteHandler(),
)
