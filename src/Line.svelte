<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, LineController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';

  interface $$Props<TData = DefaultDataPoint<'line'>, TLabel = unknown>
    extends Omit<ChartProps<'line', TData, TLabel>, 'type'> {
    chart: ChartJS<'line', TData, TLabel> | null;
  }

  ChartJS.register(LineController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
</script>

<Base bind:chart type="line" {...props} />
