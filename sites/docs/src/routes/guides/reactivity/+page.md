---
title: Reactive Data
description: How svelte-chartjs handles reactive data updates
---

<script>
  import ReactiveDemo from '$lib/demos/ReactiveDemo.svelte';
</script>

# Reactive Data

svelte-chartjs automatically updates the chart when `data` or `options` change. No manual `chart.update()` calls needed.

## Interactive Example

Try the buttons below to see live chart updates:

<ReactiveDemo />

## How It Works

Internally, `Chart.svelte` uses a Svelte `$effect` that watches the `data`, `options`, and `updateMode` props:

```js
$effect(() => {
  const frozenData = freeze(data);
  const frozenOptions = freeze(options);
  const frozenUpdateMode = freeze(updateMode);

  const currentChart = untrack(() => chart);
  if (!currentChart) return;

  currentChart.data = frozenData;
  if (currentChart.options && frozenOptions) {
    Object.assign(currentChart.options, frozenOptions);
  }
  currentChart.update(frozenUpdateMode);
});
```

When any reactive dependency changes, Chart.js receives the new data and redraws. The `freeze()` helper (using `$state.snapshot()`) strips Svelte's deep reactivity proxies before passing data to Chart.js.

## Updating Data

Use standard Svelte reactivity with `$state`. Reassign the `data` object to trigger an update:

```svelte
<script>
  import { Line } from 'svelte-chartjs';

  let data = $state({
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Sales', data: [10, 20, 30] }],
  });

  function addPoint() {
    data = {
      ...data,
      labels: [...data.labels, 'Apr'],
      datasets: data.datasets.map((ds) => ({
        ...ds,
        data: [...ds.data, 40],
      })),
    };
  }
</script>

<button onclick={addPoint}>Add</button>
<Line {data} options={{ responsive: true }} />
```

## The `updateMode` Prop

Control the transition animation when data updates by passing an `updateMode` prop:

```svelte
<Line {data} updateMode="none" />
```

Available modes: `'none'`, `'active'`, `'resize'`, `'reset'`, `'normal'`, `'hide'`, `'show'`. See the [Chart.js update modes](https://www.chartjs.org/docs/latest/developers/updates.html) documentation for details.

## Difference from react-chartjs-2

react-chartjs-2 merges datasets by matching a `label` key (configurable via `datasetIdKey`). This is necessary because React's reconciliation doesn't understand Chart.js's internal data structure.

svelte-chartjs takes a simpler approach: it does a **full data replacement** on every update. Svelte's fine-grained reactivity ensures that updates only fire when data actually changes, so there's no need for merge logic. Just reassign your `$state` data and the chart updates automatically.
