import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    setupFiles: ['test/setup.js'],
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    coverage: {
      reporter: ['lcovonly', 'text'],
    },
  },
});
