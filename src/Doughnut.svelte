<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, DoughnutController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils/index.js';

  interface $$Props<TData = DefaultDataPoint<'doughnut'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'doughnut', TData, TLabel>, 'type'> {
    chart?: ChartJS<'doughnut', TData, TLabel> | null;
  }

  ChartJS.register(DoughnutController);

  export let chart: $$Props['chart'] = null;
  let props: $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);

  $: props = $$props as $$Props;
</script>

<Chart bind:this={baseChartRef} bind:chart type="doughnut" {...props} />
