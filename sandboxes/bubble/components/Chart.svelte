<script>
  import { Bubble } from 'svelte-chartjs';
  import { data } from './data.js';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);
</script>

<Bubble {data} options={{ responsive: true }} />
