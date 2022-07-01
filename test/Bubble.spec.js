import { Bubble } from '../src/index';

import { render } from '@testing-library/svelte';

const data = {
  labels: 'Bubble',
  datasets: [
    {
      label: 'John',
      data: [
        {
          x: 3,
          y: 7,
          r: 10
        }
      ],
      backgroundColor: '#ff6384',
      hoverBackgroundColor: '#ff6384'
    },
    {
      label: 'Peter',
      data: [
        {
          x: 3.2,
          y: 7,
          r: 10
        }
      ],
      backgroundColor: '#44e4ee',
      hoverBackgroundColor: '#44e4ee'
    },
    {
      label: 'Donald',
      data: [
        {
          x: 3.4,
          y: 7,
          r: 10
        }
      ],
      backgroundColor: '#62088A',
      hoverBackgroundColor: '#62088A'
    }
  ]
};

const options = {
  responsive: true
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
