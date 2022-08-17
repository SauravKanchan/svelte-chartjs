<script>
  import { Doughnut } from 'svelte-chartjs';
  import { data } from './data.js';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Doughnut {data} options={{ responsive: true }} />
