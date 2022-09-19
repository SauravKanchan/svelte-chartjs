import type {
  ChartType,
  ChartData,
  ChartOptions,
  DefaultDataPoint,
  Plugin,
  UpdateMode,
} from 'chart.js';
import type { HTMLAttributes } from './html.js';

export interface ChartBaseProps<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> extends Omit<HTMLAttributes, 'type' | 'data' | 'options' | 'plugins'> {
  /**
   * Chart.js chart type
   */
  type: TType;
  /**
   * The data object that is passed into the Chart.js chart
   * @see https://www.chartjs.org/docs/latest/getting-started/
   */
  data: ChartData<TType, TData, TLabel>;
  /**
   * The options object that is passed into the Chart.js chart
   * @see https://www.chartjs.org/docs/latest/general/options.html
   * @default {}
   */
  options?: ChartOptions<TType>;
  /**
   * The plugins array that is passed into the Chart.js chart
   * @see https://www.chartjs.org/docs/latest/developers/plugins.html
   * @default []
   */
  plugins?: Plugin<TType>[];
  /**
   * A mode string to indicate transition configuration should be used.
   * @see https://www.chartjs.org/docs/latest/developers/api.html#update-mode
   */
  updateMode?: UpdateMode;
}
