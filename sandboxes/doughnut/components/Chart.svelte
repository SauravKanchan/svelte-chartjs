<script>
  import Doughnut from 'svelte-chartjs/src/Doughnut.svelte';
  import { data } from './data.js';
</script>

<Doughnut {data} options={{ responsive: true }} />
