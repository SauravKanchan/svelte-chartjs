<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import type { ChartType, DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS } from 'chart.js';
  import type { ChartProps } from './types';

  interface $$Props<
    TType extends ChartType = ChartType,
    TData = DefaultDataPoint<TType>,
    TLabel = unknown
  > extends ChartProps<TType, TData, TLabel> {
    chart: ChartJS<TType, TData, TLabel> | null;
  }

  function clean(props: SvelteAllProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { data, type, options, plugins, children, $$scope, $$slots, ...rest } =
      props;

    return rest;
  }

  export let type: $$Props['type'];
  export let data: $$Props['data'] = {
    datasets: [],
  };
  export let options: $$Props['options'] = {};
  export let plugins: $$Props['plugins'] = [];
  export let chart: $$Props['chart'] = null;
  let canvasRef: HTMLCanvasElement;
  let props = clean($$props);

  onMount(() => {
    chart = new ChartJS(canvasRef, {
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

<canvas bind:this={canvasRef} {...props} />
