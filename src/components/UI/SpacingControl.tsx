import React, { useState, useRef, useEffect } from 'react';

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
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(displayValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  const handleValueClick = () => {
    setInputValue(displayValue);
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Live apply: parse and update if valid
    const numValue = parseFloat(newValue);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onChange(numValue);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    // No need to call onChange again...
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-[15px] w-full">
      <input
        type="range"
        className="flex-1 h-1 bg-[#000000] outline-none appearance-none cursor-pointer
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:size-6
        [&::-webkit-slider-thumb]:h-8
        [&::-webkit-slider-thumb]:bg-[#000000]
        [&::-webkit-slider-thumb]:rounded-[2px]
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-moz-range-thumb]:size-6
        [&::-moz-range-thumb]:h-8
        [&::-moz-range-thumb]:bg-[#000000]
        [&::-moz-range-thumb]:rounded-[2px]
        [&::-moz-range-thumb]:border-none
        [&::-moz-range-thumb]:cursor-pointer"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleRangeChange}
      />
      <div className="flex items-center border border-[#ccc] rounded-sm overflow-hidden bg-white min-w-[105px] justify-between shrink-0">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            className="px-2 py-1 text-[15px] text-[#333] font-bold text-right w-[60px] outline-none cursor-auto"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span
            className="px-2 py-1 text-[15px] text-[#333] font-bold text-right w-[60px] cursor-normal"
            onClick={handleValueClick}
          >
            {displayValue}
          </span>
        )}
        <button
          className="bg-[#ffd633] border-none border-l border-[#ccc] px-2.5 py-1.5 text-[15px] font-bold cursor-pointer text-[#555] w-[40px] transition-colors shrink-0"
          type="button"
          onClick={onUnitToggle}
        >
          {unit}
        </button>
      </div>
    </div>
  );
};
