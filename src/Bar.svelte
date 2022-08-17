<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, BarController } from 'chart.js';
  import type { ChartProps } from './types';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'bar'>, TLabel = unknown>
    extends Omit<ChartProps<'bar', TData, TLabel>, 'type'> {
    chart: ChartJS<'bar', TData, TLabel> | null;
  }

  ChartJS.register(BarController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);
</script>

<Chart bind:this={baseChartRef} bind:chart type="bar" {...props} />
