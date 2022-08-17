import { PolarArea } from '../src';
import DefaultExample from '../sandboxes/polar/components/Chart.svelte';

export default {
  title: 'PolarArea',
  component: PolarArea,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
