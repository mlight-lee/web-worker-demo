import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['lodash-es'] // normal vendor split
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lodash-es']
  }
});
