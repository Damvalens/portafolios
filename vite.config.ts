import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 base es obligatorio para GitHub Pages (usa el nombre exacto del repo)
export default defineConfig({
  base: '/portafolios/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
