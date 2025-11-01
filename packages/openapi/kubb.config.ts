import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginMsw } from '@kubb/plugin-msw'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginVueQuery } from '@kubb/plugin-vue-query'

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
        pluginMsw(),
        pluginTs(),
        pluginVueQuery()
    ],
  }
})