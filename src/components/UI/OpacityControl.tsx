import React, { useRef } from 'react';

interface OpacityControlProps {
  value: number;
  onChange: (value: number) => void;
  colorPreviewStyle: React.CSSProperties;
  color?: string;
  onColorChange?: (color: string) => void;
}

export const OpacityControl: React.FC<OpacityControlProps> = ({
  value,
  onChange,
  colorPreviewStyle,
  color = '#7f8c8d',
  onColorChange,
}) => {
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange?.(e.target.value);
  };

  const handleColorClick = () => {
    colorInputRef.current?.click();
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
        min="0.05"
        max="1.00"
        step="0.01"
        value={value}
        onChange={handleChange}
      />
      <div className="flex items-center gap-2 shrink-0">
        <div
          className="w-[70px] h-7 rounded-sm border border-[#ccc] cursor-pointer hover:opacity-80 transition-opacity"
          style={colorPreviewStyle}
          onClick={handleColorClick}
          title="Click to change color"
        />
        <button
          className="w-7 h-7 rounded-sm border border-[#ccc] bg-white hover:bg-[#f5f5f5] flex items-center justify-center text-[#555] transition-colors shrink-0"
          onClick={handleColorClick}
          title="Change color"
          type="button"
        >
          <svg viewBox="0 0 24 24" className="size-4 fill-current">
            <path d="M12 3L5 9v8h14V9l-7-6zm0 2.5l4.5 3.5H15v4h-6v-4H7.5L12 5.5zM5 19v2h14v-2H5z" />
          </svg>
        </button>
        <input
          ref={colorInputRef}
          type="color"
          className="hidden"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};
