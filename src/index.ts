import Chart from './Chart.svelte';
import Line from './Line.svelte';
import Radar from './Radar.svelte';
import Doughnut from './Doughnut.svelte';
import Pie from './Pie.svelte';
import Bar from './Bar.svelte';
import PolarArea from './PolarArea.svelte';
import Bubble from './Bubble.svelte';
import Scatter from './Scatter.svelte';

/**
 * @deprecated Please use `Chart` name instead.
 * @todo Remove in v3.0.0
 */
const Base = Chart;
/**
 * @deprecated Please use `PolarArea` name instead.
 * @todo Remove in v3.0.0
 */
const Polar = PolarArea;

export * from './types/index.js';
export * from './utils/index.js';
export {
  Chart,
  Base,
  Line,
  Radar,
  Doughnut,
  Pie,
  Bar,
  Scatter,
  Bubble,
  PolarArea,
  Polar,
};
