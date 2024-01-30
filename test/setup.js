import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/svelte';

import '@testing-library/jest-dom/vitest';
import 'vitest-canvas-mock';

afterEach(cleanup);

window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));
