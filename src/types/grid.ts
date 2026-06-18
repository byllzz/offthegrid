export type PatternType =
  | 'dot'
  | 'lined'
  | 'square'
  | 'isometric'
  | 'hex'
  | 'cross'
  | 'graph'
  | 'dotLarge'
  | 'music'
  | 'isometricDots';

export type UnitType = 'in' | 'mm';

export interface GridConfig {
  pattern: PatternType;
  spacing: number;
  opacity: number;
  unit: UnitType;
  showRuler: boolean;
  gridColor: string;
}

export interface RulerMark {
  position: number;
  label: string;
  isMajor: boolean;
}

export interface PatternRenderer {
  (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    spacingPx: number,
    opacity: number,
    gridColor: string,
  ): void;
}
