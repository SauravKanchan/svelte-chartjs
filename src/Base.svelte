<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte';

  import { Chart } from 'chart.js';

  import type {
    TChartType,
    TChartData,
    TChartOptions,
    TChartPlugin,
    TypedChartJS,
  } from './types';

  export let data: TChartData = {
    labels: [],
    datasets: [{ data: [] }],
  };
  export let type: TChartType = 'line';
  export let options: TChartOptions<TChartType> = {};
  export let plugins: TChartPlugin[] = [];

  function clean(
    $$props: { [x: string]: any },
    extraCase: ConcatArray<string>
  ) {
    let keys = ['children', '$$scope', '$$slots'].concat(extraCase);
    const rest = {};
    for (const key of Object.keys($$props)) {
      if (!keys.includes(key)) {
        rest[key] = $$props[key];
      }
    }
    return rest;
  }

  let chart: TypedChartJS | null = null;
  let chartRef: HTMLCanvasElement;
  let props = clean($$props, ['data', 'type', 'options', 'plugins']);

  onMount(() => {
    chart = new Chart(chartRef, {
      type,
      data,
      options,
      plugins,
    });
  });
  afterUpdate(() => {
    if (!chart) return;

    chart.data = data;
    chart.options = options;
    chart.update();
  });

  onDestroy(() => {
    if (chart) chart.destroy();
    chart = null;
  });
</script>

<canvas bind:this={chartRef} {...props} />
