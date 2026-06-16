export type PatternType = 'dot' | 'isometric' | 'lined' | 'square' | 'cross' | 'music';

export type UnitType = 'in' | 'mm';

export interface GridConfig {
  pattern: PatternType;
  spacing: number;
  opacity: number;
  unit: UnitType;
  showRuler: boolean;
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
  ): void;
}
