<script lang="ts">
  import { Chart, LineController } from 'chart.js';
  import type { ScatterDataPoint } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'line', (number | ScatterDataPoint | null)[], unknown>;
    options?: TChartOptions<'line'>;
    plugins?: TChartPlugin<'line'>[];
  }

  Chart.register(LineController);
</script>

<Base {...$$props} type="line" />
