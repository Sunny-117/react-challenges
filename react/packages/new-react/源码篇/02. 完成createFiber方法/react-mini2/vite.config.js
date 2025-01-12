import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inspect()],
})
