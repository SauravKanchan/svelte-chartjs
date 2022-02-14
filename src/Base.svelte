<script>
  import {onMount, afterUpdate, onDestroy} from 'svelte';
  import {clean} from './utils';
  import {Chart, registerables} from 'chart.js/dist/chart.esm';
  Chart.register(...registerables);

  //  Expected data
  export let data = {
    labels: [],
    datasets: [
      {data: []}
    ],
    yMarkers: {},
    yRegions: [],
  };
  export let type = 'line';
  export let options = {};
  export let plugins = [];
  let chart = null;
  let chartRef;
  let props = clean($$props, ["data", "type", "options", "plugins"]);
  onMount(() => {
    chart = new Chart(chartRef, {
      type,
      data,
      options,
      plugins
    });
  });
  afterUpdate(() => {
    if (!chart) return;

    chart.data = data;
    chart.type = type;
    chart.options = options;
    chart.plugins = plugins;
    chart.update()
  });

  onDestroy(() => {
    if (chart) chart.destroy();
    chart = null;
  });
</script>

<canvas bind:this={chartRef} {...props}></canvas>
