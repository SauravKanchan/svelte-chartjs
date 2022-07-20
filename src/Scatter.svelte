<script lang="ts">
  import { Chart, ScatterController } from 'chart.js';
  import type { DefaultDataPoint } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'scatter', DefaultDataPoint<'scatter'>, unknown>;
    options?: TChartOptions<'scatter'>;
    plugins?: TChartPlugin<'scatter'>[];
  }

  Chart.register(ScatterController);
</script>

<Base {...$$props} type="scatter" />
