import { Bubble } from '../src';
import DefaultExample from '../sandboxes/bubble/components/Chart.svelte';

export default {
  title: 'Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: DefaultExample,
});
