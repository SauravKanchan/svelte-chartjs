<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, DoughnutController } from 'chart.js';
  import type { ChartBaseProps } from './types';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'doughnut'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'doughnut', TData, TLabel>, 'type'> {
    chart?: ChartJS<'doughnut', TData, TLabel> | null;
  }

  ChartJS.register(DoughnutController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);
</script>

<Chart bind:this={baseChartRef} bind:chart type="doughnut" {...props} />
