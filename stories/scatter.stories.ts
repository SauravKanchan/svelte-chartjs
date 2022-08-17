import { Scatter } from '../src';
import DefaultExample from '../sandboxes/scatter/components/Chart.svelte';

export default {
  title: 'Scatter',
  component: Scatter,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
