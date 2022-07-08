import Pie from '../src/Pie.svelte';
import { data } from '../sandboxes/pie/components/data';

export default {
  title: 'Pie',
  component: Pie,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Pie,
  props: {
    data,
  },
});
