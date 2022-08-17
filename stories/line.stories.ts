import { Line } from '../src';
import DefaultExample from '../sandboxes/line/components/Chart.svelte';

export default {
  title: 'Line',
  component: Line,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
