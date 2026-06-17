import React from 'react';

interface SpacingControlProps {
  value: number;
  displayValue: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  onUnitToggle: () => void;
}

export const SpacingControl: React.FC<SpacingControlProps> = ({
  value,
  displayValue,
  unit,
  min,
  max,
  step,
  onChange,
  onUnitToggle,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  return (
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
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <div className="flex items-center border border-[#ccc] rounded-sm overflow-hidden bg-white min-w-[95px] justify-between shrink-0">
        <span className="px-2 py-1 text-[13px] text-[#333] font-bold text-right w-[60px]">
          {displayValue}
        </span>
        <button
          className="bg-[#eaeaea] border-none border-l border-[#ccc] px-2 py-1.5 text-[11px] font-bold cursor-pointer text-[#555] hover:bg-[#dcdcdc] w-[35px] transition-colors"
          type="button"
          onClick={onUnitToggle}
        >
          {unit}
        </button>
      </div>
    </div>
  );
};
