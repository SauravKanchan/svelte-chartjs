<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';
  import TableOfContents from '$lib/components/TableOfContents.svelte';

  let { title = '', description = '', children } = $props();

  let articleEl = $state(null);

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

<div class="doc-layout">
  <article bind:this={articleEl}>
    {@render children()}

    <footer class="edit-link">
      <a href={editUrl()} target="_blank" rel="noopener noreferrer"
        >Edit this page on GitHub</a
      >
    </footer>
  </article>

  {#if articleEl}
    <TableOfContents article={articleEl} />
  {/if}
</div>

<style>
  .doc-layout {
    display: flex;
    gap: 2rem;
    margin: 0 auto;
    max-width: calc(var(--content-max-width) + var(--toc-width) + 2rem);
  }

  article {
    flex: 1;
    min-width: 0;
    max-width: var(--content-max-width);
  }

  @media (max-width: 1280px) {
    .doc-layout {
      max-width: var(--content-max-width);
    }
  }

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
