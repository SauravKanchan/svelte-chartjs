<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, RadarController } from 'chart.js';
  import type { ChartBaseProps } from './types';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'radar'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'radar', TData, TLabel>, 'type'> {
    chart: ChartJS<'radar', TData, TLabel> | null;
  }

  ChartJS.register(RadarController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseChartRef: Chart;

  useForwardEvents(() => baseChartRef);
</script>

<Chart bind:this={baseChartRef} bind:chart type="radar" {...props} />
