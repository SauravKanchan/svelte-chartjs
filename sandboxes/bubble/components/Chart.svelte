<script>
  import Bubble from 'svelte-chartjs/Bubble.svelte';
  import { data } from './data.js';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
    Plugin,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);
</script>

<Bubble {data} options={{ responsive: true }} />
