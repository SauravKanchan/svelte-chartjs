<script
  lang="ts"
  generics="TData = DefaultDataPoint<'scatter'>, TLabel = unknown"
>
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, ScatterController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(ScatterController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'scatter', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="scatter" {...restProps} />
