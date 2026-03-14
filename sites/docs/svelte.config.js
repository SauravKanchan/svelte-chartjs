import { fileURLToPath } from 'url';
import path from 'path';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: {
        _: path.resolve(__dirname, './src/lib/layouts/DocPage.svelte'),
      },
    }),
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
    }),
  },
};

export default config;
