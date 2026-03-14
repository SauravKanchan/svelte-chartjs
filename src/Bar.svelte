<script lang="ts" generics="TData = DefaultDataPoint<'bar'>, TLabel = unknown">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, BarController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(BarController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'bar', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="bar" {...restProps} />
