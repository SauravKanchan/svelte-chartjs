<script>
  import { Bubble } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);

  const data = {
    labels: 'Bubble',
    datasets: [
      {
        label: 'John',
        data: [{ x: 3, y: 7, r: 10 }],
        backgroundColor: '#ff6384',
        hoverBackgroundColor: '#ff6384',
      },
      {
        label: 'Peter',
        data: [{ x: 3.2, y: 7, r: 10 }],
        backgroundColor: '#44e4ee',
        hoverBackgroundColor: '#44e4ee',
      },
      {
        label: 'Donald',
        data: [{ x: 3.4, y: 7, r: 10 }],
        backgroundColor: '#62088A',
        hoverBackgroundColor: '#62088A',
      },
    ],
  };
</script>

<Bubble {data} options={{ responsive: true }} />
