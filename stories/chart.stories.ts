import { Chart } from '../src';
import RefExample from '../sandboxes/ref/components/Chart.svelte';
import EventsExample from '../sandboxes/events/components/Chart.svelte';

export default {
  title: 'Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
};

export const Ref = () => ({
  Component: RefExample,
});

export const Events = () => ({
  Component: EventsExample,
});
