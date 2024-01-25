import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./test/**/*.spec.ts'],
    setupFiles: ['./test/setup.js'],
    alias: [
      {
        find: /^svelte$/,
        replacement: 'svelte/internal',
      },
    ],
  },
});
