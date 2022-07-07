<script>
  import Radar from 'svelte-chartjs/src/Radar.svelte';
  import { data } from './data.js';
</script>

<Radar {data} options={{ responsive: true }} />
