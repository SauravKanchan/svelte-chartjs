const path = require('path');
const { mergeConfig } = require('vite');
const preprocess = require('svelte-preprocess');

module.exports = {
  core: {
    builder: '@storybook/builder-vite',
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
  svelteOptions: {
    preprocess: preprocess(),
  },
  stories: ['../stories/*.stories.(js|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/svelte',
};
