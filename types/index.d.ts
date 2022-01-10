import { SvelteComponentTyped } from "svelte";
import { ChartConfiguration, ChartData, ChartOptions } from "chart.js";

interface NoTypeChartConfiguration {
  data: ChartData,
  options?: ChartOptions,
}

export declare class Base extends SvelteComponentTyped<ChartConfiguration>{ }
export declare class Line extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class Radar extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class Doughnut extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class Pie extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class HorizontalBar extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class Scatter extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class Bubble extends SvelteComponentTyped<NoTypeChartConfiguration>{ }
export declare class Polar extends SvelteComponentTyped<NoTypeChartConfiguration>{ }

