---
title: Scatter Chart
description: Scatter chart component for svelte-chartjs
---

<script>
  import ScatterDemo from '$lib/demos/ScatterDemo.svelte';
</script>

# Scatter Chart

<ScatterDemo />

## Usage

```svelte
<script>
  import { Scatter } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    LineElement, CategoryScale, LinearScale, PointElement,
  } from 'chart.js';

  ChartJS.register(
    Title, Tooltip, Legend,
    LineElement, CategoryScale, LinearScale, PointElement
  );

  const data = {
    labels: ['Scatter'],
    datasets: [{
      borderColor: 'rgba(99, 0, 125, .2)',
      backgroundColor: 'rgba(99, 0, 125, .5)',
      label: 'V(node2)',
      data: [
        { x: 1, y: -0.017 },
        { x: 2, y: -0.068 },
        { x: 5, y: -0.411 },
        { x: 10, y: -1.445 },
      ],
    }],
  };
</script>

<Scatter {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'scatter'>` | required | Chart data |
| `options` | `ChartOptions<'scatter'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'scatter'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in StackBlitz](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/scatter)
