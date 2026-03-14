import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
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
