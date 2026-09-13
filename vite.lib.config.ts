import { copyFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

function copyDialogCss() {
  return {
    name: 'copy-dialog-css',
    closeBundle() {
      copyFileSync(
        resolve(import.meta.dirname, 'src/dialog.css'),
        resolve(import.meta.dirname, 'dist/dialog.css'),
      );
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copyDialogCss(),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/entry.ts'),
      name: 'ErcoUI',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Ensure we don't bundle React and ReactDOM into the library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'style.css', // Force the CSS file name
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
      },
    },
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
});
