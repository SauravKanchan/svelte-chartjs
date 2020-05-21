<script>
  import {onMount, afterUpdate, onDestroy} from 'svelte';
  import {clean} from './utils';

  const Chart = require("chart.js");

  //  Expected data
  export let data = {
    labels: [],
    datasets: [
      {values: []}
    ],
    yMarkers: {},
    yRegions: [],
  };
  export let type = 'line';
  export let options = {};
  let chart = null;
  let chartRef;
  let props = clean($$props, ["data", "type", "options"]);
  onMount(() => {
    chart = new Chart(chartRef, {
      type,
      data,
      options
    });
  });
  afterUpdate(() => chart.update(data));

  onDestroy(() => {
    chart = null;
  });
</script>

<canvas bind:this={chartRef} {...props}></canvas>
