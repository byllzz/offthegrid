export type PatternType = 'dot' | 'isometric' | 'lined' | 'square' | 'cross' | 'music';

export type UnitType = 'in' | 'mm';

export interface GridConfig {
  pattern: PatternType;
  spacing: number; // in current unit
  opacity: number; // 0-1
  unit: UnitType;
  showRuler: boolean;
}

export interface RulerMark {
  position: number; // pixels from left
  label: string; // e.g., "1 in" or "25 mm"
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
