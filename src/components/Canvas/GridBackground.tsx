import React from 'react';
import { useGridStore } from '../../store/gridStore';
import { PATTERN_CLASSES } from '../../utils/patternClasses';
import { UNIT_CONFIG } from '../../utils/constants';

export const GridBackground: React.FC = () => {
  const { pattern, spacing, opacity, unit, gridColor } = useGridStore();

  const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
  const spacingPx = spacing * pxPerUnit;

  // Helper: convert hex to rgba string
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const gridColorWithOpacity = hexToRgba(gridColor, opacity);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--grid-spacing', `${spacingPx}px`);
    document.documentElement.style.setProperty('--grid-color', gridColorWithOpacity);
    document.documentElement.style.setProperty('--opacity', String(opacity));
  }, [spacingPx, opacity, gridColor, gridColorWithOpacity]);

  const patternClass = PATTERN_CLASSES[pattern];

  return (
    <div className={`grid-background fixed top-0 left-0 w-full h-full z-[1] ${patternClass}`} />
  );
};
