import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { Pie } from '../src/index.js';
import { data } from '../sandboxes/pie/components/data.js';

const options = {
  responsive: true,
};

describe('Pie Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Pie);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Pie, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Pie, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
