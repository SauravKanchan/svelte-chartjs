---
title: API Reference
description: Complete API reference for svelte-chartjs
---

# API Reference

## Components

svelte-chartjs exports typed wrapper components for each Chart.js chart type. Each component auto-registers its own controller.

| Component | Chart Type | Controller |
|-----------|-----------|------------|
| `Bar` | `'bar'` | `BarController` |
| `Line` | `'line'` | `LineController` |
| `Pie` | `'pie'` | `PieController` |
| `Doughnut` | `'doughnut'` | `DoughnutController` |
| `Radar` | `'radar'` | `RadarController` |
| `PolarArea` | `'polarArea'` | `PolarAreaController` |
| `Bubble` | `'bubble'` | `BubbleController` |
| `Scatter` | `'scatter'` | `ScatterController` |
| `Chart` | any | none (pass `type` prop) |

## ChartBaseProps

All components accept the following props (extends `HTMLCanvasAttributes`):

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData<TType>` | required | The data object passed to Chart.js |
| `options` | `ChartOptions<TType>` | `{}` | Chart.js configuration options |
| `plugins` | `Plugin<TType>[]` | `[]` | Chart.js plugins array |
| `updateMode` | `UpdateMode` | — | Transition configuration mode |
| `chart` | `Chart \| null` | — | Bindable Chart.js instance |

The generic `Chart` component also accepts:

| Prop | Type | Description |
|------|------|-------------|
| `type` | `ChartType` | The chart type (e.g. `'bar'`, `'line'`) |

## Utility Functions

### `getDatasetAtEvent(chart, event)`

Returns all elements belonging to the same dataset as the clicked element.

```ts
function getDatasetAtEvent(chart: Chart, event: PointerEvent): InteractionItem[]
```

### `getElementAtEvent(chart, event)`

Returns the single nearest element to the click point.

```ts
function getElementAtEvent(chart: Chart, event: PointerEvent): InteractionItem[]
```

### `getElementsAtEvent(chart, event)`

Returns all elements at the same data index as the clicked element.

```ts
function getElementsAtEvent(chart: Chart, event: PointerEvent): InteractionItem[]
```

## Imports

```js
import {
  Chart,
  Line,
  Bar,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Bubble,
  Scatter,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'svelte-chartjs';
```

```js
import type { ChartBaseProps } from 'svelte-chartjs';
```
