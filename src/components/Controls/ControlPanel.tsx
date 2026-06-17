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
      <circle cx="12" cy="12" r="2" fill="#555" />
    </svg>
  ),
  isometric: (
    <svg viewBox="0 0 24 24" className="size-6">
      <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" stroke="#555" strokeWidth="2" fill="none" />
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
  cross: (
    <svg viewBox="0 0 24 24" className="size-6">
      <path d="M12 5v14M5 12h14" stroke="#555" strokeWidth="2" fill="none" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" className="size-6">
      <path
        d="M9 18V5l10-2v13M9 10l10-2M7 18a2 2 0 11-4 0 2 2 0 014 0zm10-2a2 2 0 11-4 0 2 2 0 014 0z"
        stroke="#555"
        strokeWidth="2"
        fill="none"
      />
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
    <div className="fixed left-1/2 top-0 -translate-x-1/2 z-[100] bg-white w-full max-w-[440px] mx-auto shadow-lg px-[30px] pt-5 pb-[20px] text-center print:hidden">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <h1 className="text-base text-[#333] font-normal">
          Make your own grid paper with <em className="font-bold italic">Gridzzly</em>
        </h1>
      </div>

      {/* Pattern buttons */}
      <div className="flex justify-center gap-[15px] flex-wrap mt-[30px] mb-[20px]">
        {Object.entries(PATTERN_INFO).map(([key, info]) => {
          const pKey = key as PatternType;
          const isActive = pattern === pKey;
          return (
            <button
              key={key}
              className={`p-1.5 rounded-sm border-2 transition-all duration-200 flex items-center justify-center
                ${
                  isActive ? 'border-[#333] bg-[#f2f2f2]' : 'border-transparent hover:bg-[#f2f2f2]'
                }`}
              onClick={() => setPattern(pKey)}
              title={info.name}
            >
              {patternIcons[pKey]}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-start border border-[#666666]/80 rounded-[5px] w-full px-6 py-4 gap-[25px]">
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

      <PrintButton onClick={() => window.print()} />
    </div>
  );
};
