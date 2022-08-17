<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PieController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';

  interface $$Props<TData = DefaultDataPoint<'pie'>, TLabel = unknown>
    extends Omit<ChartProps<'pie', TData, TLabel>, 'type'> {
    chart: ChartJS<'pie', TData, TLabel> | null;
  }

  ChartJS.register(PieController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
</script>

<Base bind:chart type="pie" {...props} />
