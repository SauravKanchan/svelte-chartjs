<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PolarAreaController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'polarArea'>, TLabel = unknown>
    extends Omit<ChartProps<'polarArea', TData, TLabel>, 'type'> {
    chart: ChartJS<'polarArea', TData, TLabel> | null;
  }

  ChartJS.register(PolarAreaController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseRef: Base;

  useForwardEvents(() => baseRef);
</script>

<Base bind:this={baseRef} bind:chart type="polarArea" {...props} />
