const svelte2tsx = require('svelte2tsx');
const path = require('path');

svelte2tsx.emitDts({
  // source dir
  libRoot: path.join(path.resolve(), 'src'),
  // !important, otherwise it doesn't generate types.
  svelteShimsPath: require.resolve('svelte2tsx/svelte-shims.d.ts'),
  // types dir
  declarationDir: path.join(path.resolve(), 'dist'),
});
