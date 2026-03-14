import { fileURLToPath } from 'url';
import path from 'path';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const highlighter = await createHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: ['svelte', 'javascript', 'typescript', 'bash', 'js', 'ts'],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: {
        _: path.resolve(__dirname, './src/lib/layouts/DocPage.svelte'),
      },
      highlight: {
        highlighter: (code, lang) => {
          let html = highlighter.codeToHtml(code, {
            lang: lang || 'text',
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
          });
          // Escape curly braces so Svelte doesn't parse them as expressions
          html = html.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
          const encoded = Buffer.from(code).toString('base64');
          return `<div class="code-block"><button class="copy-btn" data-code="${encoded}">Copy</button>${html}</div>`;
        },
      },
    }),
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/svelte-chartjs' : '',
    },
  },
};

export default config;
