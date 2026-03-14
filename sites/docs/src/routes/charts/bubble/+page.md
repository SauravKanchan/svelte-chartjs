---
title: Bubble Chart
description: Bubble chart component for svelte-chartjs
---

<script>
  import BubbleDemo from '$lib/demos/BubbleDemo.svelte';
</script>

# Bubble Chart

<BubbleDemo />

## Usage

```svelte
<script>
  import { Bubble } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend, PointElement, LinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);

  const data = {
    labels: 'Bubble',
    datasets: [
      {
        label: 'John',
        data: [{ x: 3, y: 7, r: 10 }],
        backgroundColor: '#ff6384',
      },
      {
        label: 'Peter',
        data: [{ x: 3.2, y: 7, r: 10 }],
        backgroundColor: '#44e4ee',
      },
    ],
  };
</script>

<Bubble {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'bubble'>` | required | Chart data |
| `options` | `ChartOptions<'bubble'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'bubble'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in StackBlitz](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/bubble)
