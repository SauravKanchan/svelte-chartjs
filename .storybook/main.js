import path from 'path';
import { mergeConfig } from 'vite';

export default {
  stories: ['../stories/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'svelte-chartjs': path.resolve(__dirname, '../src'),
        },
      },
    });
  },
};
