import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { Scatter } from '../src/index.js';
import { data } from '../sandboxes/scatter/components/data.js';

const options = {
  title: {
    display: true,
    text: 'Scatter Chart - Logarithmic X-Axis',
  },
};

describe('Scatter Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Scatter);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Scatter, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Scatter, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
