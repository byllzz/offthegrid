import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GridConfig, PatternType, UnitType } from '../types/grid';
import { PATTERN_INFO, UNIT_CONFIG } from '../utils/constants';

interface GridStore extends GridConfig {
  setPattern: (pattern: PatternType) => void;
  setSpacing: (spacing: number) => void;
  setOpacity: (opacity: number) => void;
  setUnit: (unit: UnitType) => void;
  toggleRuler: () => void;
  resetToDefault: () => void;
}

const DEFAULT_PATTERN: PatternType = 'dot';
const DEFAULT_UNIT: UnitType = 'mm';

// Build default config from constants
const defaultConfig: GridConfig = {
  pattern: DEFAULT_PATTERN,
  spacing: PATTERN_INFO[DEFAULT_PATTERN].defaultSpacing,
  opacity: 0.4,
  unit: DEFAULT_UNIT,
  showRuler: true,
};

export const useGridStore = create<GridStore>()(
  persist(
    (set, get) => ({
      ...defaultConfig,

      setPattern: pattern => {
        // Reset spacing to default for that pattern, but keep current unit
        const unit = get().unit;
        const defaultSpacing = PATTERN_INFO[pattern].defaultSpacing;
        set({
          pattern,
          spacing: defaultSpacing,
        });
      },

      setSpacing: spacing => set({ spacing }),

      setOpacity: opacity => set({ opacity }),

      setUnit: unit => {
        const currentSpacing = get().spacing;
        const oldUnit = get().unit;
        // Convert spacing to new unit
        const oldPxPerUnit = UNIT_CONFIG[oldUnit].pxPerUnit;
        const newPxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
        const newSpacing = (currentSpacing * oldPxPerUnit) / newPxPerUnit;
        set({
          unit,
          spacing: Math.round(newSpacing / UNIT_CONFIG[unit].step) * UNIT_CONFIG[unit].step, // snap to step
        });
      },

      toggleRuler: () => set(state => ({ showRuler: !state.showRuler })),

      resetToDefault: () => {
        const defaultPattern = DEFAULT_PATTERN;
        const defaultUnit = DEFAULT_UNIT;
        set({
          pattern: defaultPattern,
          spacing: PATTERN_INFO[defaultPattern].defaultSpacing,
          opacity: 0.4,
          unit: defaultUnit,
          showRuler: true,
        });
      },
    }),
    {
      name: 'offthegrid-storage', // localStorage key
    },
  ),
);
