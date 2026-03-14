# svelte-chartjs

<img align="right" width="150" height="150" alt="svelte-chartjs logo" src="https://raw.githubusercontent.com/SauravKanchan/svelte-chartjs/master/assets/svelte-chartjs.png">

Svelte wrapper for [chart.js](https://www.chartjs.org/). Open for PRs and contributions!

[![npm version](https://badge.fury.io/js/svelte-chartjs.svg)](https://badge.fury.io/js/svelte-chartjs)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs?ref=badge_shield)
![npm](https://img.shields.io/npm/dm/svelte-chartjs)
[![CI](https://github.com/SauravKanchan/svelte-chartjs/actions/workflows/ci.yml/badge.svg)](https://github.com/SauravKanchan/svelte-chartjs/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SauravKanchan/svelte-chartjs/branch/master/graph/badge.svg)](https://codecov.io/gh/SauravKanchan/svelte-chartjs)

<br />
<a href="https://saurav.tech/svelte-chartjs/">Docs</a>
<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
<a href="#install">Install</a>
<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
<a href="#usage">Usage</a>
<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
<a href="#available-charts">Available Charts</a>
<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
<a href="#tree-shaking">Tree-Shaking</a>
<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
<a href="#examples">Examples</a>
<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
<a href="https://stackoverflow.com/questions/tagged/svelte-chartjs">Stack Overflow</a>
<br />

---

## Documentation

Full documentation and live demos are available at the [docs site](https://saurav.tech/svelte-chartjs/).

## Install

Install this library with peer dependencies:

```bash
pnpm add svelte-chartjs chart.js
# or
yarn add svelte-chartjs chart.js
# or
npm i svelte-chartjs chart.js
```

## Usage

```svelte
<script>
  import { Line } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
</script>

<Line {data} options={{ responsive: true }} />
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

## Available Charts

| Component | Chart.js Type |
|---|---|
| `Bar` | Bar chart |
| `Bubble` | Bubble chart |
| `Doughnut` | Doughnut chart |
| `Line` | Line chart |
| `Pie` | Pie chart |
| `PolarArea` | Polar area chart |
| `Radar` | Radar chart |
| `Scatter` | Scatter chart |

A generic `Chart` component is also available. Use the `type` prop to specify the chart type:

```svelte
<Chart type="bar" {data} {options} />
```

## Tree-Shaking

### Quick Setup

Import `chart.js/auto` to register everything:

```javascript
import { Line } from 'svelte-chartjs';
import 'chart.js/auto';
```

### Optimized (Selective Imports)

Import and register only the components you need for a smaller bundle:

```javascript
import { Line } from 'svelte-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
```

Typed chart components (e.g. `Pie`, `Bar`) automatically register their controller, so you don't need to register it yourself. For example, when using `Pie`, you don't need to register `PieController` explicitly.

For a full list of available imports, see the [Chart.js integration docs](https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc).

## Accessing the Chart Instance

Use `bind:chart` to get a reference to the underlying Chart.js instance:

```svelte
<script>
  import { Line } from 'svelte-chartjs';

  let chart;
</script>

<Line bind:chart {data} {options} />
```

### Event Utilities

Three helper functions are exported for extracting chart elements from pointer events:

- `getDatasetAtEvent(chart, event)` — returns the dataset at the event point
- `getElementAtEvent(chart, event)` — returns the nearest element at the event point
- `getElementsAtEvent(chart, event)` — returns all elements at the event point

```svelte
<script>
  import {
    Chart,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
  } from 'svelte-chartjs';

  let chart;

  function onClick(event) {
    if (!chart) return;

    const dataset = getDatasetAtEvent(chart, event);
    const element = getElementAtEvent(chart, event);
    const elements = getElementsAtEvent(chart, event);

    console.log({ dataset, element, elements });
  }
</script>

<Chart bind:chart type="bar" onclick={onClick} {data} {options} />
```

## Examples

- [Bar Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/bar)
- [Bubble Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/bubble)
- [Doughnut Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/doughnut)
- [Line Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/line)
- [Pie Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/pie)
- [PolarArea Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/polar)
- [Radar Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/radar)
- [Scatter Chart](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/scatter)
- [Chart Instance](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/ref)
- [Events Handling](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/events)

## Compatibility

| Dependency | Version |
|---|---|
| Svelte | `^5.0.0` |
| Chart.js | `^3.5.0 \|\| ^4.0.0` |

> For Svelte 4 support, use [v3.x](https://github.com/SauravKanchan/svelte-chartjs/tree/v3.1.5).

## License

[MIT](./LICENSE)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs?ref=badge_large)
