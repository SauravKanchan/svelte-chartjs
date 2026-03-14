<script>
  import { Chart } from 'svelte-chartjs';
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
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    LineController,
    BarController
  );

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        fill: false,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        type: 'bar',
        label: 'Bar Dataset 1',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        type: 'bar',
        label: 'Bar Dataset 2',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
        data: [45, 25, 60, 36, 72, 43, 58],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Mixed Chart (Line + Bar)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
</script>

<Chart type="bar" {data} {options} />
