import { describe, it, expect, vi } from 'vitest';
import type { Chart } from 'chart.js';

import {
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from '../src/utils/events.js';

function createMockChart() {
  return {
    getElementsAtEventForMode: vi.fn().mockReturnValue([]),
  } as unknown as Chart;
}

describe('Event utilities', () => {
  const event = new MouseEvent('click') as unknown as PointerEvent;

  it.each([
    ['getDatasetAtEvent', getDatasetAtEvent, 'dataset'],
    ['getElementAtEvent', getElementAtEvent, 'nearest'],
    ['getElementsAtEvent', getElementsAtEvent, 'index'],
  ] as const)(
    '%s calls getElementsAtEventForMode with mode "%s"',
    (_name, fn, expectedMode) => {
      const chart = createMockChart();

      fn(chart, event);

      expect(chart.getElementsAtEventForMode).toHaveBeenCalledWith(
        event,
        expectedMode,
        { intersect: true },
        false
      );
    }
  );
});
