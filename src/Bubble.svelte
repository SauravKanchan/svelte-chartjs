<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, BubbleController } from 'chart.js';
  import type { ChartBaseProps } from './types';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'bubble'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'bubble', TData, TLabel>, 'type'> {
    chart?: ChartJS<'bubble', TData, TLabel> | null;
  }

  ChartJS.register(BubbleController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);
</script>

<Chart bind:this={baseChartRef} bind:chart type="bubble" {...props} />
