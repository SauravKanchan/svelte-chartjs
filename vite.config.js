import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    dir: './',
    environment: 'jsdom',
    include: ['./test/*.spec.ts'],
    setupFiles: ['./test/setup.js'],
    coverage: {
      include: ['src'],
      reporters: ['lcovonly', 'text'],
    },
  },
});
