import { type PatternType, type UnitType } from '../types/grid';

export const PATTERN_INFO: Record<
  PatternType,
  { name: string; icon: string; defaultSpacing: number }
> = {
  dot: { name: 'Dot Grid', icon: '⚫', defaultSpacing: 5 },
  lined: { name: 'Lined Paper', icon: '📝', defaultSpacing: 10 },
  square: { name: 'Square Grid', icon: '⬛', defaultSpacing: 5 },
  isometric: { name: 'Isometric Grid', icon: '◇', defaultSpacing: 20 },
  hex: { name: 'Hex Grid', icon: '⬡', defaultSpacing: 24 },
  cross: { name: 'Cross Grid', icon: '✛', defaultSpacing: 12 },
  graph: { name: 'Graph Paper', icon: '▦', defaultSpacing: 8 },
  dotLarge: { name: 'Large Dot Grid', icon: '●', defaultSpacing: 16 },
  music: { name: 'Music Staff', icon: '♪', defaultSpacing: 10 },
  isometricDots: { name: 'Isometric Dots', icon: '⠿', defaultSpacing: 18 },
};

export const UNIT_CONFIG: Record<
  UnitType,
  {
    label: string;
    pxPerUnit: number; // pixels per unit (1 inch = 96px, 1mm ≈ 3.779px)
    defaultSpacing: number;
    min: number;
    max: number;
    step: number;
  }
> = {
  mm: {
    label: 'mm',
    pxPerUnit: 3.779, // 1mm = 96/25.4 ≈ 3.779px
    defaultSpacing: 5,
    min: 1,
    max: 20,
    step: 0.5,
  },
  in: {
    label: 'in',
    pxPerUnit: 96, // standard web: 1 inch = 96px
    defaultSpacing: 0.2,
    min: 0.05,
    max: 1,
    step: 0.05,
  },
};
