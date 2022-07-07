<script>
  import Pie from 'svelte-chartjs/src/Pie.svelte';
  import { data } from './data.js';
</script>

<Pie {data} options={{ responsive: true }} />
