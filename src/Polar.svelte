<script lang="ts">
  import { Chart, PolarAreaController } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'polarArea', number[], unknown>;
    options?: TChartOptions<'polarArea'>;
    plugins?: TChartPlugin<'polarArea'>[];
  }

  Chart.register(PolarAreaController);
</script>

<Base {...$$props} type="polarArea" />
