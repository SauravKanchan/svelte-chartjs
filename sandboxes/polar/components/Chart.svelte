<script>
  import Polar from 'svelte-chartjs/src/Polar.svelte';
  import { data } from './data.js';
</script>

<Polar {data} options={{ responsive: true }} />
