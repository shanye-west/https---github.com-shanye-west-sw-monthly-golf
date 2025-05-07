import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    host: true
  },
  define: {
    'process.env.VITE_API_URL': JSON.stringify('http://localhost:3000')
  }
})
