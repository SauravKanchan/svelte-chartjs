---
title: Radar Chart
description: Radar chart component for svelte-chartjs
---

<script>
  import RadarDemo from '$lib/demos/RadarDemo.svelte';
</script>

# Radar Chart

<RadarDemo />

## Usage

```svelte
<script>
  import { Radar } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    PointElement, RadialLinearScale, LineElement,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);

  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };
</script>

<Radar {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'radar'>` | required | Chart data |
| `options` | `ChartOptions<'radar'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'radar'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in CodeSandbox](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/radar)
