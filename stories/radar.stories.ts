import { Radar } from '../src';
import DefaultExample from '../sandboxes/radar/components/Chart.svelte';

export default {
  title: 'Radar',
  component: Radar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
