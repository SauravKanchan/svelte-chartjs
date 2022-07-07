<script>
  import Bubble from 'svelte-chartjs/src/Bubble.svelte';
  import { data } from './data.js';
</script>

<Bubble {data} options={{ responsive: true }} />
