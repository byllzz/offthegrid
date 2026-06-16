import type { PatternType } from '../types/grid';

export const PATTERN_CLASSES: Record<PatternType, string> = {
  dot: 'p-dots',
  isometric: 'p-iso',
  lined: 'p-lines',
  square: 'p-grid',
  cross: 'p-cross',
  music: 'p-music',
};
