import { defineConfig } from 'vite';

export default defineConfig({
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
