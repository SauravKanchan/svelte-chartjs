import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const name = pkg.name
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase()); // > SvelteFrappeCharts

const extensions = ['.js', '.svelte'];
const external = _ => /node_modules/.test(_);
const plugins = [ nodeResolve({extensions}), svelte()];

export default [
  {
    input: pkg.main,
    plugins,
    external,
    output: {
      format: 'cjs',
      file: pkg.publishConfig.main,
      exports: 'named',
      sourcemap: true
    },
  },
  {
    input: pkg.main,
    plugins,
    external,
    output: {
      format: 'es',
      file: pkg.publishConfig.module,
      sourcemap: true
    },
  },
  {
    input: pkg.main,
    plugins: [...plugins, commonjs()],
    output: {
			format: 'umd',
      file: pkg.publishConfig.unpkg,
			name
		}
  }
];
