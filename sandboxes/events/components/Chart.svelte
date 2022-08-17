<script>
  import {
    Chart,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
  } from 'svelte-chartjs';
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

  function printDatasetAtEvent(dataset) {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  }

  function printElementAtEvent(element) {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  }

  function printElementsAtEvent(elements) {
    if (!elements.length) return;

    console.log(elements.length);
  }

  let chart;

  function onClick(event) {
    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  }
</script>

<Chart bind:chart type="bar" on:click={onClick} {data} {options} />
