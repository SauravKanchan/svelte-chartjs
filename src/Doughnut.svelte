<script
  lang="ts"
  generics="TData = DefaultDataPoint<'doughnut'>, TLabel = unknown"
>
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, DoughnutController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(DoughnutController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'doughnut', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="doughnut" {...restProps} />
