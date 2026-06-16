import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { useGridStore } from '../../store/gridStore';
import { UNIT_CONFIG } from '../../utils/constants';
import { drawDotGrid } from './patterns/dotGrid';
import { drawSquareGrid } from './patterns/squareGrid';
import { drawIsometricGrid } from './patterns/isometricGrid';
import { drawLinedPaper } from './patterns/linedPaper';
import { drawCrossGrid } from './patterns/crossGrid';
import { drawMusicStaff } from './patterns/musicStaff';

const patternMap = {
  dot: drawDotGrid,
  square: drawSquareGrid,
  isometric: drawIsometricGrid,
  lined: drawLinedPaper,
  cross: drawCrossGrid,
  music: drawMusicStaff,
};

export function GridCanvas() {
  const [containerRef, { width, height }] = useMeasure();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pattern, spacing, opacity, unit } = useGridStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;

    // Set canvas size to match container
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Convert spacing from current unit to pixels
    const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
    const spacingPx = spacing * pxPerUnit;

    // Draw selected pattern
    const renderer = patternMap[pattern];
    if (renderer) {
      renderer(ctx, width, height, spacingPx, opacity);
    }
  }, [pattern, spacing, opacity, unit, width, height]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
