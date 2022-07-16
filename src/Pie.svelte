<script lang="ts">
  import { Chart, PieController } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'pie', number[], unknown>;
    options?: TChartOptions<'pie'>;
    plugins?: TChartPlugin<'pie'>[];
  }

  Chart.register(PieController);
</script>

<Base {...$$props} type="pie" />
