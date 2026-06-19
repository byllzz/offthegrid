import React from 'react';
import { useGridStore } from '../../store/gridStore';
import { PATTERN_INFO, UNIT_CONFIG } from '../../utils/constants';
import type { PatternType } from '../../types/grid';
import { SpacingControl } from '../UI/SpacingControl';
import { OpacityControl } from '../UI/OpacityControl';
import { PrintButton } from '../UI/PrintButton';

const patternIcons: Record<PatternType, React.ReactNode> = {
  dot: (
    <svg viewBox="0 0 24 24" className="size-6">
      <circle cx="6" cy="6" r="2" fill="#555" />
      <circle cx="18" cy="6" r="2" fill="#555" />
      <circle cx="6" cy="18" r="2" fill="#555" />
      <circle cx="18" cy="18" r="2" fill="#555" />
    </svg>
  ),
  lined: (
    <svg viewBox="0 0 24 24" className="size-6">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#555" strokeWidth="2" fill="none" />
    </svg>
  ),
  square: (
    <svg viewBox="0 0 24 24" className="size-6">
      <rect x="4" y="4" width="16" height="16" rx="1" stroke="#555" strokeWidth="2" fill="none" />
    </svg>
  ),
  isometric: (
    <svg viewBox="0 0 24 24" className="size-6">
      <path d="M2 8L12 3L22 8" stroke="#555" strokeWidth="1.5" fill="none" />
      <path d="M2 14L12 9L22 14" stroke="#555" strokeWidth="1.5" fill="none" />
      <path d="M2 20L12 15L22 20" stroke="#555" strokeWidth="1.5" fill="none" />
      <path d="M2 8L12 13L22 8" stroke="#555" strokeWidth="1.5" fill="none" />
      <path d="M2 14L12 19L22 14" stroke="#555" strokeWidth="1.5" fill="none" />
    </svg>
  ),

  hex: (
    <svg viewBox="0 0 24 24" className="size-6">
      <polygon points="9,3 15,3 18,9 15,15 9,15 6,9" stroke="#555" strokeWidth="1.5" fill="none" />
      <polygon
        points="9,15 15,15 18,21 15,27 9,27 6,21"
        stroke="#555"
        strokeWidth="1.5"
        fill="none"
        transform="translate(0,-6)"
      />
    </svg>
  ),

  cross: (
    <svg viewBox="0 0 24 24" className="size-6">
      <line x1="6" y1="4" x2="6" y2="8" stroke="#555" strokeWidth="1.5" />
      <line x1="4" y1="6" x2="8" y2="6" stroke="#555" strokeWidth="1.5" />
      <line x1="18" y1="4" x2="18" y2="8" stroke="#555" strokeWidth="1.5" />
      <line x1="16" y1="6" x2="20" y2="6" stroke="#555" strokeWidth="1.5" />
      <line x1="6" y1="16" x2="6" y2="20" stroke="#555" strokeWidth="1.5" />
      <line x1="4" y1="18" x2="8" y2="18" stroke="#555" strokeWidth="1.5" />
      <line x1="18" y1="16" x2="18" y2="20" stroke="#555" strokeWidth="1.5" />
      <line x1="16" y1="18" x2="20" y2="18" stroke="#555" strokeWidth="1.5" />
      <line x1="12" y1="10" x2="12" y2="14" stroke="#555" strokeWidth="1.5" />
      <line x1="10" y1="12" x2="14" y2="12" stroke="#555" strokeWidth="1.5" />
    </svg>
  ),

  graph: (
    <svg viewBox="0 0 24 24" className="size-6">
      <rect x="3" y="3" width="18" height="18" stroke="#555" strokeWidth="2" fill="none" />
      <line x1="9" y1="3" x2="9" y2="21" stroke="#555" strokeWidth="0.75" />
      <line x1="15" y1="3" x2="15" y2="21" stroke="#555" strokeWidth="0.75" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="#555" strokeWidth="0.75" />
      <line x1="3" y1="15" x2="21" y2="15" stroke="#555" strokeWidth="0.75" />
    </svg>
  ),

  dotLarge: (
    <svg viewBox="0 0 24 24" className="size-6">
      <circle cx="6" cy="6" r="1.6" fill="#555" />
      <circle cx="12" cy="6" r="1.6" fill="#555" />
      <circle cx="18" cy="6" r="1.6" fill="#555" />
      <circle cx="6" cy="12" r="1.6" fill="#555" />
      <circle cx="12" cy="12" r="1.6" fill="#555" />
      <circle cx="18" cy="12" r="1.6" fill="#555" />
      <circle cx="6" cy="18" r="1.6" fill="#555" />
      <circle cx="12" cy="18" r="1.6" fill="#555" />
      <circle cx="18" cy="18" r="1.6" fill="#555" />
    </svg>
  ),

  music: (
    <svg viewBox="0 0 24 24" className="size-6">
      <line x1="3" y1="6" x2="21" y2="6" stroke="#555" strokeWidth="1" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" stroke="#555" strokeWidth="1" />
      <line x1="3" y1="13" x2="21" y2="13" stroke="#555" strokeWidth="1" />
      <line x1="3" y1="16.5" x2="21" y2="16.5" stroke="#555" strokeWidth="1" />
      <line x1="3" y1="20" x2="21" y2="20" stroke="#555" strokeWidth="1" />
    </svg>
  ),

  isometricDots: (
    <svg viewBox="0 0 24 24" className="size-6">
      <circle cx="3" cy="3" r="1.3" fill="#555" />
      <circle cx="10.5" cy="3" r="1.3" fill="#555" />
      <circle cx="18" cy="3" r="1.3" fill="#555" />
      <circle cx="6.75" cy="9" r="1.3" fill="#555" />
      <circle cx="14.25" cy="9" r="1.3" fill="#555" />
      <circle cx="21.75" cy="9" r="1.3" fill="#555" />
      <circle cx="3" cy="15" r="1.3" fill="#555" />
      <circle cx="10.5" cy="15" r="1.3" fill="#555" />
      <circle cx="18" cy="15" r="1.3" fill="#555" />
      <circle cx="6.75" cy="21" r="1.3" fill="#555" />
      <circle cx="14.25" cy="21" r="1.3" fill="#555" />
      <circle cx="21.75" cy="21" r="1.3" fill="#555" />
    </svg>
  ),
};

export const ControlPanel: React.FC = () => {
  const {
    pattern,
    setPattern,
    spacing,
    setSpacing,
    opacity,
    setOpacity,
    unit,
    setUnit,
    gridColor,
    setGridColor,
  } = useGridStore();

  const config = UNIT_CONFIG[unit];

  const displayValue = unit === 'in' ? spacing.toFixed(4) : spacing.toFixed(2);

  const colorPreviewStyle = {
    backgroundColor: gridColor,
    opacity: opacity,
  };

  return (
    <div className="fixed left-1/2 top-0 -translate-x-1/2 z-[100] bg-white w-full max-w-[480px] mx-auto shadow-2xl px-[50px] py-6 text-center print:hidden">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-2!">
        <h1 className="text-base text-[#333] font-normal">
          Make your own grid paper with <em className="font-bold italic">offthegrid</em>
        </h1>
      </div>

      {/* Pattern buttons */}
      <div className="flex justify-center gap-[10px] flex-wrap mt-[30px] mb-[10px]">
        {Object.entries(PATTERN_INFO).map(([key, info]) => {
          const pKey = key as PatternType;
          const isActive = pattern === pKey;
          return (
            <button
              key={key}
              className={`p-1.5 rounded-sm border-2 transition-all duration-200 flex items-center justify-center
                ${
                  isActive
                    ? 'border-mauve-800 bg-[#f2f2f2]'
                    : 'border-transparent hover:bg-[#f2f2f2]'
                }`}
              onClick={() => setPattern(pKey)}
              title={info.name}
            >
              {patternIcons[pKey]}
            </button>
          );
        })}
      </div>

      {/* UI Elements */}
      <div className="flex flex-col items-start border-2 border-mauve-800 rounded-[5px] w-full px-6 py-4 gap-[25px]">
        <SpacingControl
          value={spacing}
          displayValue={displayValue}
          unit={unit}
          min={config.min}
          max={config.max}
          step={config.step}
          onChange={setSpacing}
          onUnitToggle={() => setUnit(unit === 'in' ? 'mm' : 'in')}
        />

        <OpacityControl
          value={opacity}
          onChange={setOpacity}
          colorPreviewStyle={colorPreviewStyle}
          color={gridColor}
          onColorChange={setGridColor}
        />
      </div>

      {/* Print Btn */}
      <PrintButton onClick={() => window.print()} />
    </div>
  );
};
