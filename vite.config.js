import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: process.cwd(),
  build: {
    outDir: 'assets',          
    emptyOutDir: false,     
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/swiper-init.js'),
      },
      output: {
        entryFileNames: 'section-swiper.js',
        assetFileNames: 'section-swiper.css',
      },
    },
  },
});