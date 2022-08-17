import { Pie } from '../src';
import DefaultExample from '../sandboxes/pie/components/Chart.svelte';

export default {
  title: 'Pie',
  component: Pie,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
