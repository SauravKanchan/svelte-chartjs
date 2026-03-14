<script
  lang="ts"
  generics="TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown"
>
  import { onMount, onDestroy } from 'svelte';
  import type { ChartType, DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';

  let {
    type,
    data,
    options,
    plugins,
    updateMode,
    chart = $bindable(null),
    ...restProps
  }: ChartBaseProps<TType, TData, TLabel> = $props();

  let canvasRef: HTMLCanvasElement;

  /** Removes svelte deep reactivity from an object */
  function freeze<T>(value: T) {
    return $state.snapshot(value) as T;
  }

  onMount(() => {
    chart = new ChartJS(
      canvasRef,
      freeze({
        type,
        data,
        options,
        plugins,
      })
    );
  });

  $effect(() => {
    if (!chart) return;

    chart.data = freeze(data);
    if (chart.options && options) {
      Object.assign(chart.options, freeze(options));
    }
    chart.update(freeze(updateMode));
  });

  onDestroy(() => {
    if (chart) chart.destroy();
    chart = null;
  });
</script>

<canvas bind:this={canvasRef} {...restProps}></canvas>
