<script>
  import { onMount } from 'svelte';

  /** @type {{ article: HTMLElement }} */
  let { article } = $props();

  let headings = $state([]);
  let activeId = $state('');

  onMount(() => {
    if (!article) return;

    const nodes = article.querySelectorAll('h2[id], h3[id]');
    headings = Array.from(nodes).map(el => ({
      id: el.id,
      text: el.textContent ?? '',
      level: el.tagName === 'H3' ? 3 : 2,
    }));

    if (headings.length < 2) {
      headings = [];
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  });
</script>

{#if headings.length >= 2}
  <nav class="toc" aria-label="Table of contents">
    <h4 class="toc-title">On this page</h4>
    <ul>
      {#each headings as heading}
        <li class:indent={heading.level === 3}>
          <a href="#{heading.id}" class:active={activeId === heading.id}>
            {heading.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  .toc {
    position: sticky;
    top: calc(var(--header-height) + 2rem);
    align-self: flex-start;
    width: var(--toc-width);
    flex-shrink: 0;
    max-height: calc(100vh - var(--header-height) - 4rem);
    overflow-y: auto;
  }

  .toc-title {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    margin: 0 0 0.75rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-left: 1px solid var(--color-border);
  }

  li {
    margin: 0;
  }

  li.indent {
    padding-left: 0.75rem;
  }

  a {
    display: block;
    padding: 0.25rem 0 0.25rem 0.75rem;
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    border-left: 2px solid transparent;
    margin-left: -1px;
    transition:
      color 0.15s,
      border-color 0.15s;
  }

  a:hover {
    color: var(--color-text);
    text-decoration: none;
  }

  a.active {
    color: var(--color-primary);
    border-left-color: var(--color-primary);
  }

  @media (max-width: 1280px) {
    .toc {
      display: none;
    }
  }
</style>
