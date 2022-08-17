# svelte-chartjs

<img align="right" width="150" height="150" alt="svelte-chartjs logo" src="https://raw.githubusercontent.com/SauravKanchan/svelte-chartjs/master/assets/svelte-chartjs.png">

Svelte wrapper for [chart.js](https://www.chartjs.org/) Open for PRs and contributions!

[![npm version](https://badge.fury.io/js/svelte-chartjs.svg)](https://badge.fury.io/js/svelte-chartjs)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs?ref=badge_shield)
![npm](https://img.shields.io/npm/dm/svelte-chartjs)

<br />
<a href="#install">Install</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#usage">Usage</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#migration-from-v1-to-v2">Migration guide</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#examples">Examples</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://slack.cube.dev/?ref=eco-svelte-chartjs">Slack</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://stackoverflow.com/questions/tagged/svelte-chartjs">Stack Overflow</a>
<br />
<hr />

## Install

Install this library with peer dependencies:

```bash
pnpm add svelte-chartjs chart.js
# or
yarn add svelte-chartjs chart.js
# or
npm i svelte-chartjs chart.js
```

<hr />

Need an API to fetch data? Consider [Cube](https://cube.dev/?ref=eco-svelte-chartjs), an open-source API for data apps.

<br />

[![supported by Cube](https://user-images.githubusercontent.com/986756/154330861-d79ab8ec-aacb-4af8-9e17-1b28f1eccb01.svg)](https://cube.dev/?ref=eco-svelte-chartjs)

## Usage

```svelte
<script>
  import { Line } from 'svelte-chartjs'
</script>

<Line data={...} />
```

### Custom Size

In order for Chart.js to obey the custom size you need to set `maintainAspectRatio` to false, example:

```svelte
<Line
  data={data}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
```

## Migration from v1 to v2

With v2, this library introduces a number of breaking changes. In order to improve performance, offer new features, and improve maintainability, it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit.

### Change component import path

v1:

```javascript
import Line from 'svelte-chartjs/src/Line.svelte'
```

v2:

```javascript
import { Line } from 'svelte-chartjs'
```

### Tree-shaking

v2 of this library, [just like Chart.js v3](https://www.chartjs.org/docs/latest/getting-started/v3-migration.html#setup-and-installation), is tree-shakable. It means that you need to import and register the controllers, elements, scales, and plugins you want to use.

For a list of all the available items to import, see [Chart.js docs](https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc).

v1:

```javascript
import Line from 'svelte-chartjs/src/Line.svelte'
```

v2 — lazy way:

```javascript
import { Line } from 'svelte-chartjs'
import 'chart.js/auto';
```

v2 — tree-shakable way:

```javascript
import { Line } from 'svelte-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
```

Using the "lazy way" is okay to simplify the migration, but please consider using the tree-shakable way to decrease the bundle size.

Please note that typed chart components register their controllers by default, so you don't need to register them by yourself. For example, when using the Pie component, you don't need to register PieController explicitly.

```javascript
import { Pie } from 'svelte-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
```

## Examples

- [Bar Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/bar)
- [Bubble Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/bubble)
- [Doughnut Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/doughnut)
- [Line Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/line)
- [Pie Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/pie)
- [PolarArea Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/polar)
- [Radar Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/radar)
- [Scatter Chart](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/scatter)
- [ChartJS instance](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/ref)
- [Events handling](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/events)

## Docs for v1

Full Documentation and demo for v1 [here](https://saurav.tech/mdbsvelte/?path=/story/charts--installation)
## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs?ref=badge_large)
