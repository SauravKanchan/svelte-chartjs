import Bar from '../src/Bar.svelte';
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
