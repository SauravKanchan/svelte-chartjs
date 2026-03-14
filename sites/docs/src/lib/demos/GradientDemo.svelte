<script>
  import { onMount } from 'svelte';
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
    Filler,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler
  );

  let chart = $state(null);

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  let data = $state({
    labels,
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  });

  onMount(() => {
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.bottom);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.6)');
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0.0)');

    data = {
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          backgroundColor: gradient,
        },
      ],
    };
  });
</script>

<Line
  bind:chart
  {data}
  options={{
    responsive: true,
    plugins: { title: { display: true, text: 'Gradient Fill' } },
  }}
/>
