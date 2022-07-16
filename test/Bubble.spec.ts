import { Bubble } from '../src/index';
import { data } from '../sandboxes/bubble/components/data';

import { render } from '@testing-library/svelte';

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
