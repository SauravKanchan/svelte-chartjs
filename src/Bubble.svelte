<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, BubbleController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';
  import { useForwardEvents } from './utils';

  interface $$Props<TData = DefaultDataPoint<'bubble'>, TLabel = unknown>
    extends Omit<ChartProps<'bubble', TData, TLabel>, 'type'> {
    chart: ChartJS<'bubble', TData, TLabel> | null;
  }

  ChartJS.register(BubbleController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
  let baseRef: Base;

  useForwardEvents(() => baseRef);
</script>

<Base bind:this={baseRef} bind:chart type="bubble" {...props} />
