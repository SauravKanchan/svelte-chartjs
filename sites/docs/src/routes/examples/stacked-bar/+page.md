---
title: Stacked Bar Chart
description: Stacked bar chart example using svelte-chartjs
---

<script>
  import StackedBarDemo from '$lib/demos/StackedBarDemo.svelte';
</script>

# Stacked Bar Chart

Enable stacking by setting `stacked: true` on both the x and y scales. Each dataset's values will stack on top of one another.

<StackedBarDemo />

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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };
</script>

<Bar {data} {options} />
```

You can also mix stacked and unstacked datasets by setting `stack` to different group names on individual datasets. See the [Chart.js stacked bar docs](https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart) for details.
