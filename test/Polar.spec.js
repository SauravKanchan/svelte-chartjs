import { Polar } from '../src/index';

import { render } from '@testing-library/svelte';

const data = {
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: [
        'rgba(247, 70, 74, 0.5)',
        'rgba(70, 191, 189, 0.5)',
        'rgba(253, 180, 92, 0.5)',
        'rgba(148, 159, 177, 0.5)',
        'rgba(77, 83, 96, 0.5)'
      ],
      label: 'My dataset' // for legend
    }
  ],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey']
};

const options = {
  responsive: true
};


describe('Polar Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Polar);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Polar, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Polar, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
