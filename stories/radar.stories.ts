import Radar from '../sandboxes/radar/components/Chart.svelte';
import { data } from '../sandboxes/radar/components/data';

export default {
  title: 'Radar',
  component: Radar,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Radar,
  props: {
    data,
  },
});
