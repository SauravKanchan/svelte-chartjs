import {
  SvelteComponent,
  bubble,
  listen,
  current_component,
} from 'svelte/internal';
import { onMount, onDestroy } from 'svelte';

const eventPrefix = /^on/;
const events: string[] = [];

Object.keys(globalThis).forEach(key => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ''));
  }
});

export function useForwardEvents<T extends SvelteComponent | Element>(
  getRef: () => T
) {
  const component = current_component;
  const destructors: (() => void)[] = [];

  function forward(e) {
    bubble(component, e);
  }

  onMount(() => {
    const ref = getRef();

    events.forEach(
      ref instanceof Element
        ? event => destructors.push(listen(ref, event, forward))
        : event => destructors.push(ref.$on(event, forward))
    );
  });

  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
