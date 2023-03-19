import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { popper } from '@popperjs/core'

// https://vitejs.dev/config/
const path = require('path')
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['bootstrap']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // root: path.resolve()
  build: {
    rollupOptions: {
      external:['/IKJF2031.JPG', '@popperjs/core']
    }
  }
})
