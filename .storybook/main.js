const path = require('path');

module.exports = {
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes('svelte-loader')
    );
    svelteLoader.options.preprocess = require('svelte-preprocess')({});
    config.resolve.alias['svelte-chartjs/Bar.svelte'] = path.resolve(
      __dirname,
      '../src/Bar.svelte'
    );
    config.resolve.alias['svelte-chartjs/Bubble.svelte'] = path.resolve(
      __dirname,
      '../src/Bubble.svelte'
    );
    config.resolve.alias['svelte-chartjs/Doughnut.svelte'] = path.resolve(
      __dirname,
      '../src/Doughnut.svelte'
    );
    config.resolve.alias['svelte-chartjs/Line.svelte'] = path.resolve(
      __dirname,
      '../src/Line.svelte'
    );
    config.resolve.alias['svelte-chartjs/Pie.svelte'] = path.resolve(
      __dirname,
      '../src/Pie.svelte'
    );
    config.resolve.alias['svelte-chartjs/Polar.svelte'] = path.resolve(
      __dirname,
      '../src/Polar.svelte'
    );
    config.resolve.alias['svelte-chartjs/Radar.svelte'] = path.resolve(
      __dirname,
      '../src/Radar.svelte'
    );
    config.resolve.alias['svelte-chartjs/Scatter.svelte'] = path.resolve(
      __dirname,
      '../src/Scatter.svelte'
    );
    return config;
  },
  stories: ['../stories/*.stories.(js|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/svelte',
};
