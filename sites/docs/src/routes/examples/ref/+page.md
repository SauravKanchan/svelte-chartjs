---
title: Chart Instance
description: Access the Chart.js instance using bind:chart
---

<script>
  import RefDemo from '$lib/demos/RefDemo.svelte';
</script>

# Chart Instance (bind:chart)

You can access the underlying Chart.js instance using Svelte's `bind:chart` directive. This is useful for programmatic interactions like triggering tooltips, updating data, or calling Chart.js methods directly.

<RefDemo />

## Usage

```svelte
<script>
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Tooltip, Legend, BarElement, PointElement,
    LineElement, CategoryScale, LinearScale,
    LineController, BarController,
  } from 'chart.js';

  ChartJS.register(
    LinearScale, CategoryScale, BarElement, PointElement,
    LineElement, Legend, Tooltip, LineController, BarController
  );

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  let chart;

  onMount(() => {
    // Access chart.tooltip, chart.data, etc.
    console.log(chart);
  });
</script>

<Chart bind:chart type="bar" {data} options={{ scales: { y: { beginAtZero: true } } }} />
```

The `chart` variable gives you full access to the [Chart.js API](https://www.chartjs.org/docs/latest/developers/api.html), including methods like `update()`, `destroy()`, `toBase64Image()`, and the tooltip controller.

[Open in CodeSandbox](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/ref)
