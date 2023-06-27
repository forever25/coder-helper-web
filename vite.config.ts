import { defineConfig } from 'vite'
import externalGlobals from 'rollup-plugin-external-globals'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import path from 'path'

let globals = externalGlobals({
  react: 'react',
  'react-dom': 'reactDom',
  'classname': 'classname'
})

export default defineConfig({
  plugins: [react(), ssr({ prerender: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@r': path.resolve(__dirname),
    }
  },
  build: {
    rollupOptions: {
      external: [...Object.keys(globals)]
    }
  }
})
