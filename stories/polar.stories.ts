import { Polar } from '../src';
import DefaultExample from '../sandboxes/polar/components/Chart.svelte';

export default {
  title: 'Polar',
  component: Polar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
