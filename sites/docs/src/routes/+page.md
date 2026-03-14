---
title: Home
description: Svelte wrapper for Chart.js
---

# svelte-chartjs

Svelte wrapper for [Chart.js](https://www.chartjs.org/). Open for PRs and contributions!

## Install

```bash
pnpm add svelte-chartjs chart.js
# or
yarn add svelte-chartjs chart.js
# or
npm i svelte-chartjs chart.js
```

## Quick Start

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
    Title, Tooltip, Legend,
    LineElement, LinearScale, PointElement, CategoryScale
  );

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(75, 192, 192)',
      fill: false,
    }],
  };
</script>

<Line {data} options={{ responsive: true }} />
```

## Tree-shaking

Chart.js v3+ is tree-shakable. You need to import and register only the controllers, elements, scales, and plugins you use.

**Lazy way** (registers everything):

```js
import 'chart.js/auto';
```

**Tree-shakable way** (recommended):

```js
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  LineElement, LinearScale, PointElement, CategoryScale,
} from 'chart.js';

ChartJS.register(
  Title, Tooltip, Legend,
  LineElement, LinearScale, PointElement, CategoryScale
);
```

Typed chart components (e.g. `Line`, `Bar`) automatically register their own controller, so you don't need to register `LineController`, `BarController`, etc.

## Compatibility

| svelte-chartjs | Svelte | Chart.js |
|---------------|--------|----------|
| 4.x           | 5.x    | 3.5+ / 4.x |

## Custom Size

Set `maintainAspectRatio` to `false` to control chart dimensions:

```svelte
<Line
  data={data}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
```
