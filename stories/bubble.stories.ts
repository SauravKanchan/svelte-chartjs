import Bubble from '../sandboxes/bubble/components/Chart.svelte';
import { data } from '../sandboxes/bubble/components/data';

export default {
  title: 'Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => ({
  Component: Bubble,
  props: {
    data,
  },
});
