<script>
  import Polar from 'svelte-chartjs/Polar.svelte';
  import { data } from './data.js';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,
    Plugin,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);
</script>

<Polar {data} options={{ responsive: true }} />
