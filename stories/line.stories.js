import Line from '../src/Line.svelte';
import { data } from '../sandboxes/line/components/data';

export default {
  title: 'Line',
  component: Line,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Line,
  props: {
    data,
  },
});
