import React, { useState, useRef, useEffect } from 'react';
import { useNotification } from '../../hooks/useNotification';

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
  const { show } = useNotification();

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

    const numValue = parseFloat(newValue);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onChange(numValue);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleUnitToggle = () => {
    const newUnit = unit === 'in' ? 'mm' : 'in';
    const unitLabel = newUnit === 'in' ? 'inches' : 'millimetres';

    show({
      message: `Unit changed to ${unitLabel}`,
      subMessage: 'Your grid spacing will update',
      duration: 2000,
      variant: 'default',
    });

    onUnitToggle();
  };

  return (
    <div className="flex items-center gap-[15px] w-full relative">
      <input
        type="range"
        className="flex-1 h-1 bg-mauve-800 rounded-full outline-none appearance-none cursor-pointer
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-6
        [&::-webkit-slider-thumb]:h-8
        [&::-webkit-slider-thumb]:bg-mauve-800
        [&::-webkit-slider-thumb]:rounded-[2px]
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-moz-range-thumb]:w-6
        [&::-moz-range-thumb]:h-8
        [&::-moz-range-thumb]:bg-mauve-800
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
          className="bg-[#ffd633] border-none border-l border-[#ccc] px-2.5 py-1.5 text-[15px] font-bold cursor-pointer text-[#555] w-[40px] transition-colors shrink-0 hover:bg-[#f0c800] active:scale-95"
          type="button"
          onClick={handleUnitToggle}
        >
          {unit}
        </button>
      </div>
    </div>
  );
};
