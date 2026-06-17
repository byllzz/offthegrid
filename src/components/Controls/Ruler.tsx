import React from 'react';
import { useGridStore } from '../../store/gridStore';

export const Ruler: React.FC = () => {
  const { unit } = useGridStore();

  // --- SVG Definitions ---
  const inchesTopSvg = `data:image/svg+xml,%3Csvg%20width='96'%20height='28'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='geometricPrecision'%3E%3Cpath%20d='M0.5%200%20v28%20M6.5%200%20v5%20M12.5%200%20v13%20M18.5%200%20v5%20M24.5%200%20v20%20M30.5%200%20v7%20M36.5%200%20v16%20M42.5%200%20v10%20M48.5%200%20v24%20M54.5%200%20v10%20M60.5%200%20v16%20M66.5%200%20v10%20M72.5%200%20v18%20M78.5%200%20v10%20M84.5%200%20v13%20M90.5%200%20v10'%20stroke='%23666666'%20stroke-width='1'%20fill='none'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3C/svg%3E`;
  const inchesBottomSvg = `data:image/svg+xml,%3Csvg%20width='96'%20height='28'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='geometricPrecision'%3E%3Cpath%20d='M0.5%2028%20v-28%20M6.5%2028%20v-5%20M12.5%2028%20v-13%20M18.5%2028%20v-5%20M24.5%2028%20v-20%20M30.5%2028%20v-7%20M36.5%2028%20v-16%20M42.5%2028%20v-10%20M48.5%2028%20v-24%20M54.5%2028%20v-10%20M60.5%2028%20v-16%20M66.5%2028%20v-10%20M72.5%2028%20v-18%20M78.5%2028%20v-10%20M84.5%2028%20v-13%20M90.5%2028%20v-10'%20stroke='%23666666'%20stroke-width='1'%20fill='none'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3C/svg%3E`;
  const mmTopSvg = `data:image/svg+xml,%3Csvg%20width='37.8'%20height='28'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='geometricPrecision'%3E%3Cline%20x1='0.5'%20y1='0'%20x2='0.5'%20y2='28'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='3.78'%20y1='0'%20x2='3.78'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='7.56'%20y1='0'%20x2='7.56'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='11.34'%20y1='0'%20x2='11.34'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='15.12'%20y1='0'%20x2='15.12'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='18.9'%20y1='0'%20x2='18.9'%20y2='14'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='22.68'%20y1='0'%20x2='22.68'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='26.46'%20y1='0'%20x2='26.46'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='30.24'%20y1='0'%20x2='30.24'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='34.02'%20y1='0'%20x2='34.02'%20y2='6'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3C/svg%3E`;
  const mmBottomSvg = `data:image/svg+xml,%3Csvg%20width='37.8'%20height='28'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='geometricPrecision'%3E%3Cline%20x1='0.5'%20y1='28'%20x2='0.5'%20y2='0'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='3.78'%20y1='28'%20x2='3.78'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='7.56'%20y1='28'%20x2='7.56'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='11.34'%20y1='28'%20x2='11.34'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='15.12'%20y1='28'%20x2='15.12'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='18.9'%20y1='28'%20x2='18.9'%20y2='14'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='22.68'%20y1='28'%20x2='22.68'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='26.46'%20y1='28'%20x2='26.46'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='30.24'%20y1='28'%20x2='30.24'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3Cline%20x1='34.02'%20y1='28'%20x2='34.02'%20y2='22'%20stroke='%23666666'%20stroke-width='1'%20stroke-linecap='square'%20vector-effect='non-scaling-stroke'/%3E%3C/svg%3E`;

  // Logic: When in inches, Top is Inch, Bottom is MM. When in MM, Top is MM, Bottom is Inch.
  const isInch = unit === 'in';

  const topScale = isInch ? inchesTopSvg : mmTopSvg;
  const bottomScale = isInch ? mmBottomSvg : inchesBottomSvg;

  // Sizes: Inch is 96px, MM is 37.8px
  const topSize = isInch ? '96px 28px' : '37.8px 28px';
  const bottomSize = isInch ? '37.8px 28px' : '96px 28px';

  return (
    <div
      key={unit}
      className="bg-[#ffd633] w-full h-[100px] fixed top-0 left-0 flex justify-between items-center px-[2px] text-[11px] z-10 print:hidden shadow-md"
      style={{
        backgroundImage: `url("${topScale}"), url("${bottomScale}")`,
        backgroundPosition: 'top left, bottom left',
        backgroundRepeat: 'repeat-x, repeat-x',
        backgroundSize: `${topSize}, ${bottomSize}`,
      }}
    >
      {/* Labels logic... */}
      <div className="flex flex-col gap-[11px] leading-none text-left tracking-wide relative left-[10px]">
        <span className="text-[15px] uppercase text-[#666666]/80 font-medium">
          {isInch ? 'INCHES' : 'MILLIMETRES'}
        </span>
        <span className="text-[15px] uppercase text-[#666666]/80 font-medium">
          {isInch ? 'MILLIMETRES' : 'INCHES'}
        </span>
      </div>
      <div className="flex flex-col gap-[11px] leading-none text-right tracking-wide relative right-[10px]">
        <span className="text-[15px] uppercase text-[#666666]/80 font-medium">
          {isInch ? 'INCHES' : 'MILLIMETRES'}
        </span>
        <span className="text-[15px] uppercase text-[#666666]/80 font-medium">
          {isInch ? 'MILLIMETRES' : 'INCHES'}
        </span>
      </div>
    </div>
  );
};
