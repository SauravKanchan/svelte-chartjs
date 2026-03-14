<script>
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Header from '$lib/components/Header.svelte';

  let { children } = $props();
</script>

<Header />
<div class="shell">
  <Sidebar />
  <main>
    {@render children()}
  </main>
</div>

<style>
  .shell {
    display: flex;
    min-height: calc(100vh - var(--header-height));
  }

  main {
    flex: 1;
    padding: 2rem 3rem;
    max-width: 900px;
    margin-top: var(--header-height);
  }

  @media (max-width: 768px) {
    main {
      padding: 1.5rem 1rem;
    }
  }
</style>
