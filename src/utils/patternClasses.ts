import type { PatternType } from '../types/grid';

export const PATTERN_CLASSES: Record<PatternType, string> = {
  dot: 'p-dots',
  lined: 'p-lines',
  square: 'p-grid',
  isometric: 'p-isometric',
  hex: 'p-hex',
  cross: 'p-cross',
  graph: 'p-graph',
  dotLarge: 'p-dots-large',
  music: 'p-music',
  isometricDots: 'p-isometric-dots',
};
