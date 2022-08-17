import type { Chart } from 'chart.js';

/**
 * Get dataset from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */
export function getDatasetAtEvent(chart: Chart, event: PointerEvent) {
  return chart.getElementsAtEventForMode(
    event,
    'dataset',
    { intersect: true },
    false
  );
}

/**
 * Get single dataset element from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */
export function getElementAtEvent(chart: Chart, event: PointerEvent) {
  return chart.getElementsAtEventForMode(
    event,
    'nearest',
    { intersect: true },
    false
  );
}

/**
 * Get all dataset elements from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */
export function getElementsAtEvent(chart: Chart, event: PointerEvent) {
  return chart.getElementsAtEventForMode(
    event,
    'index',
    { intersect: true },
    false
  );
}
