import React from 'react';
import { useGridStore } from '../../store/gridStore';
import { PATTERN_CLASSES } from '../../utils/patternClasses';
import { UNIT_CONFIG } from '../../utils/constants';

export const GridBackground: React.FC = () => {
  const { pattern, spacing, opacity, unit } = useGridStore();

  const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
  const spacingPx = spacing * pxPerUnit;

  React.useEffect(() => {
    // Uses --grid-spacing to prevent colliding with Tailwind v4 layout system
    document.documentElement.style.setProperty('--grid-spacing', `${spacingPx}px`);
    document.documentElement.style.setProperty('--opacity', String(opacity));
  }, [spacingPx, opacity]);

  const patternClass = PATTERN_CLASSES[pattern];

  return (
    <div
      className={`grid-background fixed top-0 left-0 w-full h-full bg-white z-[1] transition-colors duration-200 ${patternClass}`}
      style={{ backgroundColor: 'var(--bg-color)' }}
    />
  );
};
