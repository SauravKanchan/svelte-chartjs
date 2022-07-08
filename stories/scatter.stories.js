import Scatter from '../src/Scatter.svelte';
import { data } from '../sandboxes/scatter/components/data';

export default {
  title: 'Scatter',
  component: Scatter,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Scatter,
  props: {
    data,
  },
});
