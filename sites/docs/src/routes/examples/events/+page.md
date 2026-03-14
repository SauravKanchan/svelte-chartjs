---
title: Events
description: Handle chart click events with svelte-chartjs
---

<script>
  import EventsDemo from '$lib/demos/EventsDemo.svelte';
</script>

# Event Handling

svelte-chartjs provides three utility functions to extract meaningful data from Chart.js click events.

<EventsDemo />

## Usage

```svelte
<script>
  import {
    Chart,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
  } from 'svelte-chartjs';
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

  const data = { /* ... */ };
  let chart;

  function onClick(event) {
    if (!chart) return;

    const dataset = getDatasetAtEvent(chart, event);
    const element = getElementAtEvent(chart, event);
    const elements = getElementsAtEvent(chart, event);

    if (element.length > 0) {
      const { datasetIndex, index } = element[0];
      console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
    }
  }
</script>

<Chart bind:chart type="bar" onclick={onClick} {data} />
```

## Event Utilities

| Function | Mode | Description |
|----------|------|-------------|
| `getDatasetAtEvent(chart, event)` | `'dataset'` | Returns all elements in the same dataset |
| `getElementAtEvent(chart, event)` | `'nearest'` | Returns the nearest single element |
| `getElementsAtEvent(chart, event)` | `'index'` | Returns all elements at the same index |

All three functions accept a `Chart` instance and a `PointerEvent`, and return an array of `InteractionItem` objects with `datasetIndex` and `index` properties.

[Open in CodeSandbox](https://codesandbox.io/s/github/SauravKanchan/svelte-chartjs/tree/master/sandboxes/events)
