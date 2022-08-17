<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, ScatterController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'scatter'>, TLabel = unknown>
    extends Omit<ChartProps<'scatter', TData, TLabel>, 'type'> {
    chart: ChartJS<'scatter', TData, TLabel> | null;
  }

  ChartJS.register(ScatterController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseRef: Base;

  useForwardEvents(() => baseRef);
</script>

<Base bind:this={baseRef} bind:chart type="scatter" {...props} />
