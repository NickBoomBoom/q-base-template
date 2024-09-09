import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import oxlintPlugin from 'vite-plugin-oxlint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    oxlintPlugin(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dirs: ['./src/stores', './src/utils', './src/api'],
      resolvers: []
    }),
    Components({
      dirs: ['./src/components'],
      resolvers: []
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url))
    }
  },

  server: {
    port: 9049
  }
})
