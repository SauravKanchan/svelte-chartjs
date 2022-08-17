<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, RadarController } from 'chart.js';
  import type { ChartProps } from './types';
  import Base from './Base.svelte';

  interface $$Props<TData = DefaultDataPoint<'radar'>, TLabel = unknown>
    extends Omit<ChartProps<'radar', TData, TLabel>, 'type'> {
    chart: ChartJS<'radar', TData, TLabel> | null;
  }

  ChartJS.register(RadarController);

  export let chart: $$Props['chart'] = null;
  let props = $$props as $$Props;
</script>

<Base bind:chart type="radar" {...props} />
