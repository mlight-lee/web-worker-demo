import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,       // disable chunk splitting
        inlineDynamicImports: true      // inline workers/dynamic imports
      }
    }
  },
  optimizeDeps: {
    include: ['lodash-es']
  }
});
