<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';

  let { open = $bindable(false) } = $props();

  const charts = [
    { href: '/charts/bar', label: 'Bar' },
    { href: '/charts/line', label: 'Line' },
    { href: '/charts/pie', label: 'Pie' },
    { href: '/charts/doughnut', label: 'Doughnut' },
    { href: '/charts/radar', label: 'Radar' },
    { href: '/charts/polar', label: 'Polar Area' },
    { href: '/charts/bubble', label: 'Bubble' },
    { href: '/charts/scatter', label: 'Scatter' },
  ];

  const examples = [
    { href: '/examples/ref', label: 'Chart Instance' },
    { href: '/examples/events', label: 'Events' },
    { href: '/examples/horizontal-bar', label: 'Horizontal Bar' },
    { href: '/examples/stacked-bar', label: 'Stacked Bar' },
    { href: '/examples/multitype', label: 'Mixed Chart' },
    { href: '/examples/gradient', label: 'Gradient' },
  ];

  const guides = [{ href: '/guides/reactivity', label: 'Reactive Data' }];

  function closeOnMobile() {
    open = false;
  }
</script>

{#if open}
  <div
    class="overlay"
    onclick={closeOnMobile}
    onkeydown={closeOnMobile}
    role="button"
    tabindex="-1"
  ></div>
{/if}

<aside class:open>
  <nav>
    <a
      href={`${base}/`}
      class:active={page.url.pathname === `${base}/`}
      onclick={closeOnMobile}>Home</a
    >

    <h4>Charts</h4>
    {#each charts as { href, label }}
      <a
        href={`${base}${href}`}
        class:active={page.url.pathname === `${base}${href}`}
        onclick={closeOnMobile}>{label}</a
      >
    {/each}

    <h4>Examples</h4>
    {#each examples as { href, label }}
      <a
        href={`${base}${href}`}
        class:active={page.url.pathname === `${base}${href}`}
        onclick={closeOnMobile}>{label}</a
      >
    {/each}

    <h4>Guides</h4>
    {#each guides as { href, label }}
      <a
        href={`${base}${href}`}
        class:active={page.url.pathname === `${base}${href}`}
        onclick={closeOnMobile}>{label}</a
      >
    {/each}

    <h4>Reference</h4>
    <a
      href={`${base}/api`}
      class:active={page.url.pathname === `${base}/api`}
      onclick={closeOnMobile}>API</a
    >
  </nav>
</aside>

<style>
  .overlay {
    display: none;
  }

  aside {
    position: fixed;
    top: var(--header-height);
    left: 0;
    bottom: 0;
    width: var(--sidebar-width);
    border-right: 1px solid var(--color-border);
    background: var(--color-bg-secondary);
    overflow-y: auto;
    padding: 1.25rem 0;
    z-index: 90;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  h4 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    padding: 0.75rem 1.25rem 0.25rem;
    margin: 0;
  }

  a {
    padding: 0.35rem 1.25rem;
    color: var(--color-text);
    font-size: 0.9rem;
    border-left: 3px solid transparent;
  }

  a:hover {
    background: var(--color-border);
    text-decoration: none;
  }

  a.active {
    color: var(--color-primary);
    border-left-color: var(--color-primary);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .overlay {
      display: block;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 89;
    }

    aside {
      transform: translateX(-100%);
      transition: transform 0.2s ease;
    }

    aside.open {
      transform: translateX(0);
    }
  }
</style>
