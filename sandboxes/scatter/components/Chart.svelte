<script>
  import Scatter from 'svelte-chartjs/src/Scatter.svelte';
  import { data } from './data.js';
</script>

<Scatter {data} options={{ responsive: true }} />
