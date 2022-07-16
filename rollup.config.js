import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import swc from 'rollup-plugin-swc';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import sveltePreprocess from 'svelte-preprocess';

const name = pkg.name
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase()); // > SvelteFrappeCharts

const extensions = ['.js', '.svelte', '.ts'];
const external = _ => /node_modules/.test(_);
const plugins = targets => [
  nodeResolve({ extensions }),
  svelte({
    preprocess: sveltePreprocess(),
  }),
  swc({
    env: {
      targets,
    },
    module: {
      type: 'es6',
    },
    sourceMaps: true,
  }),
];

export default [
  {
    input: pkg.main,
    plugins: plugins('defaults, not ie 11, not ie_mob 11'),
    external,
    output: {
      format: 'cjs',
      file: pkg.publishConfig.main,
      exports: 'named',
      sourcemap: true,
    },
  },
  {
    input: pkg.main,
    plugins: plugins('defaults and supports es6-module'),
    external,
    output: {
      format: 'es',
      file: pkg.publishConfig.module,
      sourcemap: true,
    },
  },
  {
    input: pkg.main,
    plugins: [...plugins('defaults, not ie 11, not ie_mob 11'), commonjs()],
    output: {
      format: 'umd',
      file: pkg.publishConfig.unpkg,
      name,
    },
  },
];
