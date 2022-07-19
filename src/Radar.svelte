<script lang="ts">
  import { Chart, RadarController } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'radar', (number | null)[], unknown>;
    options?: TChartOptions<'radar'>;
    plugins?: TChartPlugin<'radar'>[];
  }

  Chart.register(RadarController);
</script>

<Base {...$$props} type="radar" />
