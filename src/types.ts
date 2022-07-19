import type {
  Chart as ChartJS,
  ChartType,
  Plugin,
  ChartData,
  ChartOptions,
  DefaultDataPoint,
} from 'chart.js';

export type TChartType = ChartType;

export type TChartData<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> = ChartData<TType, TData, TLabel>;

export type TChartOptions<TType extends ChartType> = ChartOptions<TType>;

export type TChartPlugin<TType extends ChartType = ChartType> = Plugin<TType>;

export type TypedChartJS<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> = ChartJS<TType, TData, TLabel>;
