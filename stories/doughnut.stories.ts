import Doughnut from '../sandboxes/doughnut/components/Chart.svelte';
import { data } from '../sandboxes/doughnut/components/data';

export default {
  title: 'Doughnut',
  component: Doughnut,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Doughnut,
  props: {
    data,
  },
});
