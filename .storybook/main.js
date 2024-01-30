import path from 'path';
import preprocess from 'svelte-preprocess';
import { mergeConfig } from 'vite';

export default {
  stories: ['../stories/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {
      preprocess: preprocess(),
    },
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        dedupe: ['@storybook/client-api'],
        alias: {
          'svelte-chartjs': path.resolve(__dirname, '../src'),
        },
      },
    });
  },
};
