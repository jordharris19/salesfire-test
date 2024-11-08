import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://aix.salesfire.co.uk',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
