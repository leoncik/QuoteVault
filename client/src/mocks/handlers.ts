import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get<never, never, string>('/resource', () => {
    return HttpResponse.text('hello world')
  }),
]