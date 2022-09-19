import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { Bar } from '../src/index.js';
import { data } from '../sandboxes/bar/components/data.js';

const options = {
  responsive: true,
};

describe('Bar Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Bar);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Bar, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Bar, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
