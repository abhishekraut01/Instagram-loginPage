// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows access from other devices
    port: 5173,
    strictPort: true,
    // Optional: enable HTTPS
    // https: true
  }
})