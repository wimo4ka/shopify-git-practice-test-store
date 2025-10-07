import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'), // вкажіть ваш main.js
      name: 'main',
      fileName: () => `main.js`, // білдимо у assets
    },
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      // Shopify не потребує CSS-бандлів, Vite автоматично імпортує їх через JS
      external: [],
      output: {
        globals: {}
      }
    }
  }
});