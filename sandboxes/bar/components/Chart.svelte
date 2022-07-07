<script>
  import Bar from 'svelte-chartjs/src/Bar.svelte';
  import { data } from './data.js';
</script>

<Bar {data} options={{ responsive: true }} />
