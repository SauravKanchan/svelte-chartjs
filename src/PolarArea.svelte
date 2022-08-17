<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PolarAreaController } from 'chart.js';
  import type { ChartProps } from './types';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'polarArea'>, TLabel = unknown>
    extends Omit<ChartProps<'polarArea', TData, TLabel>, 'type'> {
    chart: ChartJS<'polarArea', TData, TLabel> | null;
  }

  ChartJS.register(PolarAreaController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);
</script>

<Chart bind:this={baseChartRef} bind:chart type="polarArea" {...props} />
