---
title: Line Chart
description: Line chart component for svelte-chartjs
---

<script>
  import LineDemo from '$lib/demos/LineDemo.svelte';
</script>

# Line Chart

<LineDemo />

## Usage

```svelte
<script>
  import { Line } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    LineElement, LinearScale, PointElement, CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title, Tooltip, Legend,
    LineElement, LinearScale, PointElement, CategoryScale
  );

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      fill: true,
      backgroundColor: 'rgba(225, 204, 230, .3)',
      borderColor: 'rgb(205, 130, 158)',
      data: [65, 59, 80, 81, 56, 55, 40],
    }],
  };
</script>

<Line {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'line'>` | required | Chart data |
| `options` | `ChartOptions<'line'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'line'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in StackBlitz](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/line)
