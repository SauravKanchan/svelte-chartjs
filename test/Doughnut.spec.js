import { Doughnut } from '../src/index';
import { data } from '../sandboxes/doughnut/components/data';

import { render } from '@testing-library/svelte';

const options = {
  responsive: true,
};

describe('Doughnut Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Doughnut);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Doughnut, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Doughnut, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
