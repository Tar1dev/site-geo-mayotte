import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist', // output directory for the build
    sourcemap: false, // optionally, you can disable sourcemaps for production
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // your main HTML entry
      },
    },
  },
});
