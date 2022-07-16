<script lang="ts">
  import { Chart, DoughnutController } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'doughnut', number[], unknown>;
    options?: TChartOptions<'doughnut'>;
    plugins?: TChartPlugin<'doughnut'>[];
  }

  Chart.register(DoughnutController);
</script>

<Base {...$$props} type="doughnut" />
