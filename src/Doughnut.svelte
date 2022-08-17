<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, DoughnutController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'doughnut'>, TLabel = unknown>
    extends Omit<ChartProps<'doughnut', TData, TLabel>, 'type'> {
    chart: ChartJS<'doughnut', TData, TLabel> | null;
  }

  ChartJS.register(DoughnutController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseRef: Base;

  useForwardEvents(() => baseRef);
</script>

<Base bind:this={baseRef} bind:chart type="doughnut" {...props} />
