import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'

export default defineConfig(() => {
  return {
    root: '.',
    input: {
      path: './openapi.json',
    },
    output: {
      path: './src/gen',
    },
    plugins: [
        pluginOas(),
    ],
  }
})