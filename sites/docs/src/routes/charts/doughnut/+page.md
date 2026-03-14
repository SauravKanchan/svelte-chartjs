---
title: Doughnut Chart
description: Doughnut chart component for svelte-chartjs
---

<script>
  import DoughnutDemo from '$lib/demos/DoughnutDemo.svelte';
</script>

# Doughnut Chart

<DoughnutDemo />

## Usage

```svelte
<script>
  import { Doughnut } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend, ArcElement, CategoryScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  const data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
    datasets: [{
      data: [300, 50, 100, 40, 120],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
    }],
  };
</script>

<Doughnut {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'doughnut'>` | required | Chart data |
| `options` | `ChartOptions<'doughnut'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'doughnut'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in StackBlitz](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/doughnut)
