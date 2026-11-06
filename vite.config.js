import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
    server: {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    plugins: [react()],
  };
});
