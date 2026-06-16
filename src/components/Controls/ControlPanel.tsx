import React from 'react';
import { useGridStore } from '../../store/gridStore';
import { PATTERN_INFO, UNIT_CONFIG } from '../../utils/constants';
import type { PatternType } from '../../types/grid';

const patternIcons: Record<PatternType, React.ReactNode> = {
  dot: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" fill="#555" />
    </svg>
  ),
  isometric: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
    </svg>
  ),
  lined: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  square: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="1" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24">
      <path d="M9 18V5l10-2v13M9 10l10-2M7 18a2 2 0 11-4 0 2 2 0 014 0zm10-2a2 2 0 11-4 0 2 2 0 014 0z" />
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
    <div className="relative z-100 bg-white w-[440px] mx-auto mt-[100px] rounded-md shadow-lg p-[30px] text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <svg className="w-[50px] h-auto fill-[#333]" viewBox="0 0 24 24">
          <path d="M4.5 7.5C5.32843 7.5 6 6.82843 6 6C6 5.17157 5.32843 4.5 4.5 4.5C3.67157 4.5 3 5.17157 3 6C3 6.82843 3.67157 7.5 4.5 7.5ZM19.5 7.5C20.3284 7.5 21 6.82843 21 6C21 5.17157 20.3284 4.5 19.5 4.5C18.6716 4.5 18 5.17157 18 6C18 6.82843 18.6716 7.5 19.5 7.5ZM2 11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V11Z" />
        </svg>
        <h1 className="text-base text-[#333] font-normal">
          Make your own grid paper with <em className="font-bold italic">Gridzzly</em>
        </h1>
      </div>

      <div className="flex justify-center gap-[15px] flex-wrap mb-[30px]">
        {Object.entries(PATTERN_INFO).map(([key, info]) => {
          const pKey = key as PatternType;
          const isActive = pattern === pKey;
          return (
            <button
              key={key}
              className={`pattern-btn ${isActive ? 'active' : ''}`}
              onClick={() => setPattern(pKey)}
              title={info.name}
            >
              {patternIcons[pKey]}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-[15px] mb-5">
        <input
          type="range"
          className="slider flex-grow"
          min={config.min}
          max={config.max}
          step={config.step}
          value={spacing}
          onChange={handleSpacingChange}
        />
        <div className="unit-container">
          <span className="unit-value">{displayValue}</span>
          <button className="unit-toggle-btn" type="button" onClick={toggleUnit}>
            {unit}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[15px] mb-5">
        <input
          type="range"
          className="slider flex-grow"
          min="0.05"
          max="1.00"
          step="0.01"
          value={opacity}
          onChange={handleOpacityChange}
        />
        <div className="color-preview" style={colorPreviewStyle} />
      </div>

      <button className="print-btn" onClick={() => window.print()}>
        PRINT
      </button>
    </div>
  );
};
