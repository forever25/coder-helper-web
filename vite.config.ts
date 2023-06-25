import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import path from 'path'

export default defineConfig({
  plugins: [react(), ssr({ prerender: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
