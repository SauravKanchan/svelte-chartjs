<script lang="ts">
  import { Chart, BubbleController } from 'chart.js';
  import type { BubbleDataPoint } from 'chart.js';

  import Base from './Base.svelte';
  import type { TChartData, TChartOptions, TChartPlugin } from './types';

  interface $$Props {
    data: TChartData<'bubble', BubbleDataPoint[], unknown>;
    options?: TChartOptions<'bubble'>;
    plugins?: TChartPlugin<'bubble'>[];
  }

  Chart.register(BubbleController);
</script>

<Base {...$$props} type="bubble" />
