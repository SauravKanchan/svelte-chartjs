import Bar from '../sandboxes/bar/components/Chart.svelte';
import { data } from '../sandboxes/bar/components/data';

export default {
  title: 'Bar',
  component: Bar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Bar,
  props: {
    data,
  },
});
