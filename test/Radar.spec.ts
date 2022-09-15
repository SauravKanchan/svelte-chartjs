import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { Radar } from '../src/index.js';
import { data } from '../sandboxes/radar/components/data.js';

const options = {
  responsive: true,
};

describe('Radar Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Radar);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Radar, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Radar, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
