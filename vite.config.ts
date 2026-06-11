import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        headers: {
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
        }
      },
      preview: {
        host: '127.0.0.1',
        headers: {
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
        }
      },
      plugins: [
        react(),
        tailwindcss()
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      esbuild: {
        drop: ['console', 'debugger'],
      },
      build: {
        sourcemap: mode !== 'production',
        cssCodeSplit: true,
        chunkSizeWarningLimit: 600,
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
                  return 'vendor-core';
                }
                if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
                  return 'vendor-animation';
                }
                if (id.includes('lucide-react')) {
                  return 'vendor-icons';
                }
                if (id.includes('d3')) {
                  return 'vendor-charts';
                }
                return 'vendor-misc';
              }
            }
          }
        }
      }
    };
});
