import { Radar } from '../src/index';

import { render } from '@testing-library/svelte';

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(194, 116, 161, 0.5)',
      borderColor: 'rgb(194, 116, 161)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(71, 225, 167, 0.5)',
      borderColor: 'rgb(71, 225, 167)',
      data: [28, 48, 40, 19, 96, 27,100]
    }
  ]
};

const options = {
  responsive: true
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
