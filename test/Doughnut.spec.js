import { Doughnut } from '../src/index';

import { render } from '@testing-library/svelte';

const data = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774'
      ]
    }
  ]
};

const options = {
  responsive: true
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
