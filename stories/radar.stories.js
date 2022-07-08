import Radar from '../src/Radar.svelte';
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
