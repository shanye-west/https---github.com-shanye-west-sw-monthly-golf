import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  define: {
    'process.env.VITE_API_URL': JSON.stringify('http://localhost:3000')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'lucide-react']
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
  }
})
