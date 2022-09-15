import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { Bubble } from '../src/index.js';
import { data } from '../sandboxes/bubble/components/data.js';

const options = {
  responsive: true,
};

describe('Bubble Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Bubble);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Bubble, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Bubble, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
