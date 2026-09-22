import { fileURLToPath } from 'url';
import { defineConfig }  from 'astro/config';
import react             from '@astrojs/react';
import tailwindcss       from '@tailwindcss/vite';


export default defineConfig({

  site: 'https://nutritioncolours.com',

  integrations: [
    react(),
  ],

  output: 'static',

  // Astro's built-in HTML output compression
  compressHTML: true,

  build: {
    assets: 'assets',
  },

  vite: {
    plugins: [tailwindcss()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      dedupe: ['react', 'react-dom'],
    },

    optimizeDeps: {
      include: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom/client', 'react-dom'],
      exclude: ['@astrojs/react'],
    },

    build: {
      chunkSizeWarningLimit: 500,
      // Minify with esbuild (default, fastest; zero extra deps)
      minify: 'esbuild',
      // NOTE: no custom `target` here. A previous config pinned old browser versions
      // (chrome87/safari14/…), which (a) rolldown rejected when combined with a generic
      // `es2020` ("already specified"), and (b) forced esbuild to down-transpile
      // destructuring in Astro's ClientRouter — an unsupported transform that aborts the
      // build. Astro's default target produces modern, small output and handles browser
      // compatibility itself, so we defer to it.
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
          },
        },
      },
    },

    // CSS minification via Lightning CSS (built into Vite ≥ 5.4)
    css: {
      transformer: 'lightningcss',
    },
  },
});
