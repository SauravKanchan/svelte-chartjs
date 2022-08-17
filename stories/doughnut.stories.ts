import { Doughnut } from '../src';
import DefaultExample from '../sandboxes/doughnut/components/Chart.svelte';

export default {
  title: 'Doughnut',
  component: Doughnut,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
