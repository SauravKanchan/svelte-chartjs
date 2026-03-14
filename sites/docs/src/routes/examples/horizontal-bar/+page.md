---
title: Horizontal Bar Chart
description: Horizontal bar chart example using svelte-chartjs
---

<script>
  import HorizontalBarDemo from '$lib/demos/HorizontalBarDemo.svelte';
</script>

# Horizontal Bar Chart

A horizontal bar chart is created by setting `indexAxis: 'y'` in the chart options. This flips the default vertical bars to render horizontally.

<HorizontalBarDemo />

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
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Horizontal Bar Chart' },
    },
  };
</script>

<Bar {data} {options} />
```

The key difference from a standard bar chart is `indexAxis: 'y'` in the options. All other Bar chart props and options work the same way.
