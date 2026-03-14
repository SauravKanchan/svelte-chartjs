---
title: Mixed Chart
description: Multi-type chart example combining line and bar using svelte-chartjs
---

<script>
  import MultitypeDemo from '$lib/demos/MultitypeDemo.svelte';
</script>

# Mixed Chart (Multi-type)

You can combine different chart types in a single chart by using the generic `<Chart>` component and specifying a `type` on each dataset.

<MultitypeDemo />

## Usage

```svelte
<script>
  import { Chart } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Tooltip, Legend, BarElement, PointElement,
    LineElement, CategoryScale, LinearScale,
    LineController, BarController,
  } from 'chart.js';

  ChartJS.register(
    Tooltip, Legend, BarElement, PointElement,
    LineElement, CategoryScale, LinearScale,
    LineController, BarController
  );

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        borderColor: 'rgb(255, 99, 132)',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
</script>

<Chart type="bar" {data} options={{ responsive: true }} />
```

When using mixed types, you must register the controllers for each type (`LineController`, `BarController`, etc.) in addition to the elements. The `type` on the `<Chart>` component sets the default; per-dataset `type` overrides it.
