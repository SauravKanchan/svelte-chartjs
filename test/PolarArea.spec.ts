import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { PolarArea } from '../src/index.js';
import { data } from '../sandboxes/polar/components/data.js';

const options = {
  responsive: true,
};

describe('Polar Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(PolarArea);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(PolarArea, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(PolarArea, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
