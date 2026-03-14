<script
  lang="ts"
  generics="TData = DefaultDataPoint<'bubble'>, TLabel = unknown"
>
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, BubbleController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  ChartJS.register(BubbleController);

  let {
    chart = $bindable(null),
    ...restProps
  }: Omit<ChartBaseProps<'bubble', TData, TLabel>, 'type'> = $props();
</script>

<Chart bind:chart type="bubble" {...restProps} />
