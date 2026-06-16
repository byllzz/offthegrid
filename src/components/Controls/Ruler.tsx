import { useEffect, useState } from 'react';
import { useGridStore } from '../../store/gridStore';
import { UNIT_CONFIG } from '../../utils/constants';

export function Ruler() {
  const { unit, showRuler } = useGridStore();
  const [marks, setMarks] = useState<{ pos: number; label: string }[]>([]);

  useEffect(() => {
    if (!showRuler) return;

    const width = window.innerWidth;
    const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
    // Show major marks every 1 unit (inch or 10mm) for readability
    const step = unit === 'in' ? 1 : 10;
    const totalUnits = Math.ceil(width / (pxPerUnit * step));

    const newMarks = [];
    for (let i = 0; i <= totalUnits; i++) {
      const value = i * step;
      const pos = value * pxPerUnit;
      if (pos > width) break;
      newMarks.push({
        pos,
        label: unit === 'in' ? `${value}"` : `${value}mm`,
      });
    }
    setMarks(newMarks);
  }, [unit, showRuler, window.innerWidth]);

  if (!showRuler) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-yellow-300 border-b-2 border-yellow-600 z-10 overflow-hidden">
      {marks.map((mark, i) => (
        <div
          key={i}
          className="absolute h-full border-l border-yellow-600 text-[10px] px-1 flex items-end pb-1"
          style={{ left: mark.pos }}
        >
          {mark.label}
        </div>
      ))}

      {/* Dynamic unit label rotation */}
      <div className="absolute right-4 top-1 text-sm font-bold flex gap-1">
        <span className={unit === 'mm' ? 'font-bold text-black' : 'opacity-40 text-gray-600'}>
          mm
        </span>
        <span className="text-gray-400">/</span>
        <span className={unit === 'in' ? 'font-bold text-black' : 'opacity-40 text-gray-600'}>
          in
        </span>
      </div>
    </div>
  );
}
