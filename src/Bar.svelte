<script lang="ts">
  import { Chart, BarController } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'bar', number[], unknown>;
    options?: TChartOptions<'bar'>;
    plugins?: TChartPlugin<'bar'>[];
  }

  Chart.register(BarController);
</script>

<Base {...$$props} type="bar" />
