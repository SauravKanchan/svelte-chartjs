<script>
  import { Line } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

  const COLORS = [
    'rgb(255, 99, 132)',
    'rgb(75, 192, 192)',
    'rgb(53, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(153, 102, 255)',
  ];

  let nextLabel = $state(7);

  let data = $state({
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: COLORS[0],
        backgroundColor: COLORS[0],
        tension: 0.3,
      },
    ],
  });

  function randomValue() {
    return Math.floor(Math.random() * 100);
  }

  function addDataPoint() {
    data = {
      ...data,
      labels: [...data.labels, String(nextLabel)],
      datasets: data.datasets.map(ds => ({
        ...ds,
        data: [...ds.data, randomValue()],
      })),
    };
    nextLabel++;
  }

  function removeDataPoint() {
    if (data.labels.length <= 1) return;
    data = {
      ...data,
      labels: data.labels.slice(0, -1),
      datasets: data.datasets.map(ds => ({
        ...ds,
        data: ds.data.slice(0, -1),
      })),
    };
  }

  function randomizeData() {
    data = {
      ...data,
      datasets: data.datasets.map(ds => ({
        ...ds,
        data: ds.data.map(() => randomValue()),
      })),
    };
  }

  function addDataset() {
    const colorIndex = data.datasets.length % COLORS.length;
    data = {
      ...data,
      datasets: [
        ...data.datasets,
        {
          label: `Dataset ${data.datasets.length + 1}`,
          data: data.labels.map(() => randomValue()),
          borderColor: COLORS[colorIndex],
          backgroundColor: COLORS[colorIndex],
          tension: 0.3,
        },
      ],
    };
  }

  function removeDataset() {
    if (data.datasets.length <= 1) return;
    data = {
      ...data,
      datasets: data.datasets.slice(0, -1),
    };
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Reactive Data Demo',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
</script>

<div class="controls">
  <button onclick={addDataPoint}>Add Data</button>
  <button onclick={removeDataPoint}>Remove Data</button>
  <button onclick={randomizeData}>Randomize</button>
  <button onclick={addDataset}>Add Dataset</button>
  <button onclick={removeDataset}>Remove Dataset</button>
</div>

<Line {data} {options} />

<style>
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    background: var(--color-bg-secondary);
    color: var(--color-text);
    cursor: pointer;
    font-size: 0.85rem;
  }

  button:hover {
    background: var(--color-border);
  }
</style>
