<script>
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Header from '$lib/components/Header.svelte';

  let { children } = $props();
  let sidebarOpen = $state(false);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }
</script>

<Header onToggleSidebar={toggleSidebar} />
<div class="shell">
  <Sidebar bind:open={sidebarOpen} />
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
    margin-top: var(--header-height);
    margin-left: var(--sidebar-width);
  }

  @media (max-width: 768px) {
    main {
      padding: 1.5rem 1rem;
      margin-left: 0;
    }
  }
</style>
