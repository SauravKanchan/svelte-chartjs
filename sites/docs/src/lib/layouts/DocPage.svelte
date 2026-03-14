<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';

  let { title = '', description = '', children } = $props();

  const editUrl = $derived(() => {
    const pathname = page.url.pathname.replace(base, '') || '/';
    return `https://github.com/SauravKanchan/svelte-chartjs/edit/master/sites/docs/src/routes${pathname}/+page.md`;
  });
</script>

<svelte:head>
  <title>{title ? `${title} | svelte-chartjs` : 'svelte-chartjs'}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<article>
  {@render children()}

  <footer class="edit-link">
    <a href={editUrl()} target="_blank" rel="noopener noreferrer"
      >Edit this page on GitHub</a
    >
  </footer>
</article>

<style>
  .edit-link {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }

  .edit-link a {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }

  .edit-link a:hover {
    color: var(--color-primary);
  }
</style>
