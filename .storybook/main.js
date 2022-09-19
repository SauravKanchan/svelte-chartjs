const path = require('path');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin');

module.exports = {
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes('svelte-loader')
    );
    svelteLoader.options.preprocess = require('svelte-preprocess')({});
    config.resolve.alias['svelte-chartjs'] = path.resolve(__dirname, '../src');
    config.resolve.plugins.push(new ResolveTypeScriptPlugin());
    return config;
  },
  stories: ['../stories/*.stories.(js|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/svelte',
};
