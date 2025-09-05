import { defineConfig } from 'vite';

export default defineConfig({
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
