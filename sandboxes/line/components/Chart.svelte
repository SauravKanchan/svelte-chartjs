<script>
  import Line from 'svelte-chartjs/src/Line.svelte';
  import { data } from './data.js';
</script>

<Line {data} options={{ responsive: true }} />
