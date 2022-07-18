const path = require('path');

module.exports = {
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes('svelte-loader')
    );
    svelteLoader.options.preprocess = require('svelte-preprocess')({});
    config.resolve.alias['svelte-chartjs'] = path.resolve(
      __dirname,
      '../src'
    );
    return config;
  },
  stories: ['../stories/*.stories.(js|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/svelte',
};
