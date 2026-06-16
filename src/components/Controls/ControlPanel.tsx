import React from 'react';
import { useGridStore } from '../../store/gridStore';
import { PATTERN_INFO, UNIT_CONFIG } from '../../utils/constants';
import type { PatternType } from '../../types/grid';

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
  const { pattern, setPattern, spacing, setSpacing, opacity, setOpacity, unit, setUnit } =
    useGridStore();

  const config = UNIT_CONFIG[unit];

  const handleSpacingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(parseFloat(e.target.value));
  };

  const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpacity(parseFloat(e.target.value));
  };

  const toggleUnit = () => {
    setUnit(unit === 'in' ? 'mm' : 'in');
  };

  const displayValue = unit === 'in' ? spacing.toFixed(4) : spacing.toFixed(2);

  const colorPreviewStyle = {
    backgroundColor: `rgba(127, 140, 141, ${opacity})`,
  };

  return (
    <div className="fixed left-1/2 top-0 -translate-x-1/2 z-[100]  bg-white w-full max-w-[440px] mx-auto  shadow-lg px-[30px] pt-5 pb-[20px] text-center  print:hidden">
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
        {/* Spacing control */}
        <div className="flex items-center gap-[15px] w-full">
          <input
            type="range"
            className="flex-1 h-1.5 bg-[#ddd] rounded-[3px] outline-none appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:size-4
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:bg-[#4a4a4a]
            [&::-webkit-slider-thumb]:rounded-[2px]
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:size-4
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:bg-[#4a4a4a]
            [&::-moz-range-thumb]:rounded-[2px]
            [&::-moz-range-thumb]:border-none
            [&::-moz-range-thumb]:cursor-pointer"
            min={config.min}
            max={config.max}
            step={config.step}
            value={spacing}
            onChange={handleSpacingChange}
          />
          <div className="flex items-center border border-[#ccc] rounded-sm overflow-hidden bg-white min-w-[95px] justify-between shrink-0">
            <span className="px-2 py-1 text-[13px] text-[#333] font-bold text-right w-[60px]">
              {displayValue}
            </span>
            <button
              className="bg-[#eaeaea] border-none border-l border-[#ccc] px-2 py-1.5 text-[11px] font-bold cursor-pointer text-[#555] hover:bg-[#dcdcdc] w-[35px] transition-colors"
              type="button"
              onClick={toggleUnit}
            >
              {unit}
            </button>
          </div>
        </div>

        {/* Opacity control */}
        <div className="flex items-center gap-[15px] w-full">
          <input
            type="range"
            className="flex-1 h-1.5 bg-[#ddd] rounded-[3px] outline-none appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:size-4
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:bg-[#4a4a4a]
            [&::-webkit-slider-thumb]:rounded-[2px]
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:size-4
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:bg-[#4a4a4a]
            [&::-moz-range-thumb]:rounded-[2px]
            [&::-moz-range-thumb]:border-none
            [&::-moz-range-thumb]:cursor-pointer"
            min="0.05"
            max="1.00"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
          />
          <div
            className="w-[45px] h-7 rounded-sm border border-[#ccc] shrink-0"
            style={colorPreviewStyle}
          />
        </div>
      </div>
      {/* Print button */}
      <button
        className="w-full py-3.5 w-full max-w-[180px] mt-6 text-lg font-bold rounded-sm cursor-pointer  shadow-sm transition-colors bg-[#f1c40f] hover:bg-[#f39c12] text-[#333] border-none"
        onClick={() => window.print()}
      >
        PRINT
      </button>
    </div>
  );
};
