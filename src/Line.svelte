<script lang="ts">
  import { Chart, LineController } from 'chart.js';
  import type { DefaultDataPoint } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'line', DefaultDataPoint<'line'>, unknown>;
    options?: TChartOptions<'line'>;
    plugins?: TChartPlugin<'line'>[];
  }

  Chart.register(LineController);
</script>

<Base {...$$props} type="line" />
