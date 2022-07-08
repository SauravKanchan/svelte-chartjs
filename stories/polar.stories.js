import Polar from '../src/Polar.svelte';
import { data } from '../sandboxes/polar/components/data';

export default {
  title: 'Polar',
  component: Polar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Polar,
  props: {
    data,
  },
});
