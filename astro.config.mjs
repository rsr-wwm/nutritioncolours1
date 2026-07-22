import { fileURLToPath } from 'url';
import { defineConfig }  from 'astro/config';
import react             from '@astrojs/react';
import tailwindcss       from '@tailwindcss/vite';
import compressor        from 'astro-compressor';
import mdx               from '@astrojs/mdx';
import pagefind          from 'astro-pagefind';
import partytown         from '@astrojs/partytown';


export default defineConfig({

  site: 'https://nutritioncolours.com',

  integrations: [
    react(),
    mdx(),
    pagefind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    // Generates .gz and .br files alongside every static asset at build time.
    compressor({ gzip: true, brotli: true }),
  ],

  output: 'static',

  // Astro's built-in HTML output compression
  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

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

    ssr: {
      noExternal: ['gsap'],
    },

    optimizeDeps: {
      include: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom/client', 'react-dom'],
      exclude: ['@astrojs/react'],
    },

    build: {
      // Aggressive chunk splitting keeps main bundle lean
      chunkSizeWarningLimit: 1500,
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
          // Split React + heavy libs into their own cacheable chunks
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/gsap')) {
              return 'vendor-gsap';
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
