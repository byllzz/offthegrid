import React from 'react';
import { useGridStore } from '../../store/gridStore';

export const Ruler: React.FC = () => {
  const { unit } = useGridStore();

  // Build the labels based on active unit
  const active = unit === 'in' ? 'INCHES' : 'MILIMETRES';
  const inactive = unit === 'in' ? 'MILIMETRES' : 'INCHES';

  return (
    <div
      className="bg-[#f1c40f] w-full h-[60px] fixed top-0 left-0 flex justify-between items-center px-5 text-[11px] z-10 bg-repeat-x bg-bottom print:hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 v15 M10 0 v8 M20 0 v8 M30 0 v8 M40 0 v8 M50 0 v12 M60 0 v8 M70 0 v8 M80 0 v8 M90 0 v8 M100 0 v15' stroke='%237f8c8d' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="flex flex-col leading-[1.3] text-left">
        <span className="text-[#2c3e50] font-bold">{active}</span>
        <span className="text-[#7f8c8d] font-normal">{inactive}</span>
      </div>
      <div className="flex flex-col leading-[1.3] text-right">
        <span className="text-[#2c3e50] font-bold">{active}</span>
        <span className="text-[#7f8c8d] font-normal">{inactive}</span>
      </div>
    </div>
  );
};
