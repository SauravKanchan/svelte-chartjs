<script lang="ts" generics="TData = DefaultDataPoint<'pie'>, TLabel = unknown">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PieController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(PieController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'pie', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="pie" {...restProps} />
