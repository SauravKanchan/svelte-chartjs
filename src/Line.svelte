<script lang="ts" generics="TData = DefaultDataPoint<'line'>, TLabel = unknown">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, LineController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(LineController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'line', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="line" {...restProps} />
