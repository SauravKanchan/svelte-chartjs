<script lang="ts">
  import { Chart, ScatterController } from 'chart.js';
  import type { ScatterDataPoint } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'scatter', (number | ScatterDataPoint | null)[], unknown>;
    options?: TChartOptions<'scatter'>;
    plugins?: TChartPlugin<'scatter'>[];
  }

  Chart.register(ScatterController);
</script>

<Base {...$$props} type="scatter" />
