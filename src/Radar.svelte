<script
  lang="ts"
  generics="TData = DefaultDataPoint<'radar'>, TLabel = unknown"
>
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, RadarController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(RadarController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'radar', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="radar" {...restProps} />
