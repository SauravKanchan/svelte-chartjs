import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase()); // > SvelteFrappeCharts


export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.module,
			'format': 'es'
		},
		{
			file: pkg.main,
			'format': 'umd',
			name
		}
	],
	plugins: [
		svelte(),
		resolve(),
		commonjs()
	]
};
