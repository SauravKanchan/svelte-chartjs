---
title: Bar Chart
description: Bar chart component for svelte-chartjs
---

<script>
  import BarDemo from '$lib/demos/BarDemo.svelte';
</script>

# Bar Chart

<BarDemo />

## Usage

```svelte
<script>
  import { Bar } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    BarElement, CategoryScale, LinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '% of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 134, 159, 0.4)',
        'rgba(98, 182, 239, 0.4)',
        'rgba(255, 218, 128, 0.4)',
        'rgba(113, 205, 205, 0.4)',
        'rgba(170, 128, 252, 0.4)',
        'rgba(255, 177, 101, 0.4)',
      ],
      borderWidth: 2,
    }],
  };
</script>

<Bar {data} options={{ responsive: true }} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<'bar'>` | required | Chart data |
| `options` | `ChartOptions<'bar'>` | `{}` | Chart.js options |
| `plugins` | `Plugin<'bar'>[]` | `[]` | Chart.js plugins |
| `updateMode` | `UpdateMode` | — | Transition mode |
| `chart` | `Chart` | — | Bindable chart instance |

[Open in CodeSandbox](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/bar)
