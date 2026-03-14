---
title: Polar Area Chart
description: Polar area chart component for svelte-chartjs
---

<script>
  import PolarDemo from '$lib/demos/PolarDemo.svelte';
</script>

# Polar Area Chart

<PolarDemo />

## Usage

```svelte
<script>
  import { PolarArea } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend, ArcElement, RadialLinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

  const data = {
    datasets: [{
      data: [300, 50, 100, 40, 120],
      backgroundColor: [
        'rgba(247, 70, 74, 0.5)',
        'rgba(70, 191, 189, 0.5)',
        'rgba(253, 180, 92, 0.5)',
        'rgba(148, 159, 177, 0.5)',
        'rgba(77, 83, 96, 0.5)',
      ],
      label: 'My dataset',
    }],
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
  };
</script>

<PolarArea {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'polarArea'>` | required | Chart data |
| `options` | `ChartOptions<'polarArea'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'polarArea'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in StackBlitz](https://stackblitz.com/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/polar)
