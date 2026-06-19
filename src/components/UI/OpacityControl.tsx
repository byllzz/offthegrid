import React, { useRef } from 'react';

interface OpacityControlProps {
  value: number;
  onChange: (value: number) => void;
  colorPreviewStyle: React.CSSProperties;
  color?: string;
  onColorChange?: (color: string) => void;
  defaultColor?: string;
}

export const OpacityControl: React.FC<OpacityControlProps> = ({
  value,
  onChange,
  colorPreviewStyle,
  color = '#7f8c8d',
  onColorChange,
  defaultColor = '#7f8c8d',
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

  const handleReset = () => {
    onColorChange?.(defaultColor);
  };

  const isDefaultColor = color === defaultColor;

  return (
    <div className="flex items-center gap-[15px] w-full">
      <input
        type="range"
        className="flex-1 h-1 bg-mauve-800 outline-none appearance-none cursor-pointer
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:size-6
  [&::-webkit-slider-thumb]:h-8
  [&::-webkit-slider-thumb]:bg-mauve-800
  [&::-webkit-slider-thumb]:rounded-[2px]
  [&::-webkit-slider-thumb]:cursor-pointer
  [&::-webkit-slider-thumb]:border-0
  [&::-webkit-slider-thumb]:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2224%22 viewBox=%220 0 12 24%22%3E%3Crect width=%2212%22 height=%2224%22 fill=%22%23333%22 rx=%222%22/%3E%3Cline x1=%223%22 y1=%225%22 x2=%223%22 y2=%2219%22 stroke=%22white%22 stroke-width=%221.5%22/%3E%3Cline x1=%226%22 y1=%225%22 x2=%226%22 y2=%2219%22 stroke=%22white%22 stroke-width=%221.5%22/%3E%3Cline x1=%229%22 y1=%225%22 x2=%229%22 y2=%2219%22 stroke=%22white%22 stroke-width=%221.5%22/%3E%3C/svg%3E')]
  [&::-webkit-slider-thumb]:bg-no-repeat
  [&::-webkit-slider-thumb]:bg-center
  [&::-webkit-slider-thumb]:bg-[length:12px_24px]
  [&::-moz-range-thumb]:size-6
  [&::-moz-range-thumb]:h-8
  [&::-moz-range-thumb]:bg-mauve-800
  [&::-moz-range-thumb]:rounded-[2px]
  [&::-moz-range-thumb]:border-none
  [&::-moz-range-thumb]:cursor-pointer
  [&::-moz-range-thumb]:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2224%22 viewBox=%220 0 12 24%22%3E%3Crect width=%2212%22 height=%2224%22 fill=%22%23333%22 rx=%222%22/%3E%3Cline x1=%223%22 y1=%225%22 x2=%223%22 y2=%2219%22 stroke=%22white%22 stroke-width=%221.5%22/%3E%3Cline x1=%226%22 y1=%225%22 x2=%226%22 y2=%2219%22 stroke=%22white%22 stroke-width=%221.5%22/%3E%3Cline x1=%229%22 y1=%225%22 x2=%229%22 y2=%2219%22 stroke=%22white%22 stroke-width=%221.5%22/%3E%3C/svg%3E')]
  [&::-moz-range-thumb]:bg-no-repeat
  [&::-moz-range-thumb]:bg-center
  [&::-moz-range-thumb]:bg-[length:12px_24px]"
        min="0.05"
        max="1.00"
        step="0.01"
        value={value}
        onChange={handleChange}
      />
      <div className="flex items-center gap-2 shrink-0">
        {/* Color preview */}
        <div
          className="w-[70px] h-7 rounded-sm border border-[#ccc] cursor-pointer hover:opacity-80 transition-opacity"
          style={colorPreviewStyle}
          onClick={handleColorClick}
          title="Click to change color"
        />

        {/* Color picker button */}
        <button
          className="w-7 h-7 rounded-sm border border-[#ccc] bg-white hover:bg-[#f5f5f5] flex items-center justify-center text-[#555] transition-colors shrink-0 cursor-pointer"
          onClick={handleColorClick}
          title="Change color"
          type="button"
        >
          <svg viewBox="0 0 24 24" className="size-4 fill-current">
            <path d="M12 3L5 9v8h14V9l-7-6zm0 2.5l4.5 3.5H15v4h-6v-4H7.5L12 5.5zM5 19v2h14v-2H5z" />
          </svg>
        </button>

        {/* Reset button */}
        <button
          className={`w-7 h-7 rounded-sm border border-[#ccc] bg-white hover:bg-[#f5f5f5] flex items-center justify-center cursor-pointer text-[#555]  ${
            isDefaultColor ? 'opacity-30 cursor-not-allowed' : ''
          }`}
          onClick={handleReset}
          title={isDefaultColor ? 'Already using default color' : 'Reset to default color'}
          type="button"
          disabled={isDefaultColor}
        >
          <svg viewBox="0 0 24 24" className={`size-4 fill-current`}>
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
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
