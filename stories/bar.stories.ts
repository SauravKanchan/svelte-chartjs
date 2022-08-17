import { Bar } from '../src';
import DefaultExample from '../sandboxes/bar/components/Chart.svelte';

export default {
  title: 'Bar',
  component: Bar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
