<script>
  import { base } from '$app/paths';
  import ThemeToggle from './ThemeToggle.svelte';
  let { onToggleSidebar = () => {} } = $props();
</script>

<header>
  <div class="left">
    <button class="menu-btn" onclick={onToggleSidebar} aria-label="Toggle menu">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 5h14M3 10h14M3 15h14"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <a href="{base}/" class="logo">
      <img
        src="{base}/favicon.png"
        alt="svelte-chartjs"
        width="28"
        height="28"
      />
      <span>svelte-chartjs</span>
    </a>
  </div>
  <nav>
    <a
      href="https://github.com/SauravKanchan/svelte-chartjs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
      <span class="link-label">GitHub</span>
    </a>
    <a
      href="https://www.npmjs.com/package/svelte-chartjs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="npm"
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path
          d="M0 0v16h16V0H0zm13.2 13.2H9.6V4.4H6.4v8.8H2.8V2.8h10.4v10.4z"
        />
      </svg>
      <span class="link-label">npm</span>
    </a>
    <ThemeToggle />
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--header-height);
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    z-index: 100;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
  }

  .menu-btn:hover {
    background: var(--color-bg-secondary);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-text);
  }

  .logo:hover {
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }

  nav a:hover {
    color: var(--color-primary);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .menu-btn {
      display: flex;
    }

    .link-label {
      display: none;
    }
  }
</style>
