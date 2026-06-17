import React from 'react';

interface OpacityControlProps {
  value: number;
  onChange: (value: number) => void;
  colorPreviewStyle: React.CSSProperties;
}

export const OpacityControl: React.FC<OpacityControlProps> = ({
  value,
  onChange,
  colorPreviewStyle,
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
        min="0.05"
        max="1.00"
        step="0.01"
        value={value}
        onChange={handleChange}
      />
      <div
        className="w-[45px] h-7 rounded-sm border border-[#ccc] shrink-0"
        style={colorPreviewStyle}
      />
    </div>
  );
};
