import React from 'react';
import { useGridStore } from '../../store/gridStore';
import { PATTERN_CLASSES } from '../../utils/patternClasses';
import { UNIT_CONFIG } from '../../utils/constants';

export const GridBackground: React.FC = () => {
  const { pattern, spacing, opacity, unit, gridColor } = useGridStore();

  const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
  const spacingPx = spacing * pxPerUnit;

  React.useEffect(() => {
    document.documentElement.style.setProperty('--grid-spacing', `${spacingPx}px`);
    document.documentElement.style.setProperty('--grid-color', gridColor);
    document.documentElement.style.setProperty('--opacity', String(opacity));
  }, [spacingPx, opacity, gridColor]);

  const patternClass = PATTERN_CLASSES[pattern];

  return (
    <div
      className={`grid-background fixed top-0 left-0 w-full h-full bg-white z-[1] ${patternClass}`}
    />
  );
};
