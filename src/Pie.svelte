<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PieController } from 'chart.js';
  import type { ChartProps } from './types';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'pie'>, TLabel = unknown>
    extends Omit<ChartProps<'pie', TData, TLabel>, 'type'> {
    chart: ChartJS<'pie', TData, TLabel> | null;
  }

  ChartJS.register(PieController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);
</script>

<Chart bind:this={baseChartRef} bind:chart type="pie" {...props} />
