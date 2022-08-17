<script>
  import { onMount } from 'svelte';
  import { Chart } from 'svelte-chartjs';
  import { data, options } from './data.js';

  import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    LineController,
    BarController,
  } from 'chart.js';

  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  function triggerTooltip(chart) {
    const tooltip = chart && chart.tooltip;

    if (!tooltip) {
      return;
    }

    if (tooltip.getActiveElements().length > 0) {
      tooltip.setActiveElements([], { x: 0, y: 0 });
    } else {
      const { chartArea } = chart;

      tooltip.setActiveElements(
        [
          {
            datasetIndex: 0,
            index: 2,
          },
          {
            datasetIndex: 1,
            index: 2,
          },
        ],
        {
          x: (chartArea.left + chartArea.right) / 2,
          y: (chartArea.top + chartArea.bottom) / 2,
        }
      );
    }

    chart.update();
  }

  let chart;

  onMount(() => {
    triggerTooltip(chart);
  });
</script>

<Chart bind:chart type="bar" {data} {options} />
