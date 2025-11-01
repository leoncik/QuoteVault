import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { worker } from "./mocks/browser";
import { VueQueryPlugin } from '@tanstack/vue-query';

// Setting up the service worker asynchronously.
// TODO: set the worker only for production to showcase the app.
async function setupWorker() {
  worker.start()
  return Promise.resolve()
}

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
 
setupWorker().then(() => {
  app.mount('#app')
})
