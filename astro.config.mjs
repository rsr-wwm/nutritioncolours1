import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      dedupe: ['react', 'react-dom']
    },
    optimizeDeps: {
      exclude: ['react', 'react-dom']
    },
    ssr: {
      noExternal: ['gsap']
    }
  }
});
