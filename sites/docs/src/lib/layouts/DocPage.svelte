<script>
  let { title = '', description = '', children } = $props();
</script>

<svelte:head>
  <title>{title ? `${title} | svelte-chartjs` : 'svelte-chartjs'}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<article>
  {@render children()}
</article>
