function modifyWebpackConfig(config) {
  config.module.rules.push({
    test: /\.svelte$/,
    use: 'svelte-loader'
  });

  return config;
}

module.exports = [
  {
    path: 'dist/index.js',
    limit: '840 B',
    import: '{ Chart }',
    modifyWebpackConfig
  },
  {
    path: 'dist/index.js',
    limit: '1.25 KB',
    import: '{ Bar }',
    modifyWebpackConfig
  },
  {
    path: 'dist/index.js',
    limit: '1.55 KB',
    import: '{ Bar, Bubble, Chart, Doughnut, Line, Pie, PolarArea, Radar, Scatter }',
    modifyWebpackConfig
  }
];
