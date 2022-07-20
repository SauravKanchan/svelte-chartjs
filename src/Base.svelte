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

  function clean(props: SvelteAllProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { data, type, options, plugins, children, $$scope, $$slots, ...rest } =
      props;

    return rest;
  }

  let props = clean($$props);

  let chart: TypedChartJS | null = null;
  let chartRef: HTMLCanvasElement;

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
