<script>
  import { Pie } from 'svelte-chartjs';
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

<Pie {data} options={{ responsive: true }} />
