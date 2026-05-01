import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Dev-only proxy — routes /api calls to local backend
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://ethara-ai-project-production.up.railway.app',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
