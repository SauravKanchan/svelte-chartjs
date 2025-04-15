<script
  lang="ts"
  generics="TData = DefaultDataPoint<'polarArea'>, TLabel = unknown"
>
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PolarAreaController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(PolarAreaController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'polarArea', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="polarArea" {...restProps} />
