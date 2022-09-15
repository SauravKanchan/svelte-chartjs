import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  package: {
    source: 'src',
    dir: 'package',
  },
};
