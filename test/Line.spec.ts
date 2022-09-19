import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import 'chart.js/auto';
import { Line } from '../src/index.js';
import { data } from '../sandboxes/line/components/data.js';

const options = {
  responsive: true,
};

describe('Line Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Line);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Line, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Line, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
