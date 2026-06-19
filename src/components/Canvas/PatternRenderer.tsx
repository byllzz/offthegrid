import React, { useRef, useEffect } from 'react';
import { useGridStore } from '../../store/gridStore';
import { UNIT_CONFIG } from '../../utils/constants';

// Import all renderers
import { drawDotGrid } from '../../patterns/dotGrid';
import { drawLinedPaper } from '../../patterns/linedPaper';
import { drawSquareGrid } from '../../patterns/squareGrid';
import { drawIsometricGrid } from '../../patterns/drawIsometricGrid';
import { drawHexGrid } from '../../patterns/drawHexGrid';
import { drawCrossGrid } from '../../patterns/drawCrossGrid';
import { drawGraphGrid } from '../../patterns/drawGraphGrid';
import { drawDotGridLarge } from '../../patterns/drawDotGridLarge';
import { drawMusicStaff } from '../../patterns/drawMusicStaff';
import { drawIsometricDots } from '../../patterns/drawIsometricDots';

const patternRenderers = {
  dot: drawDotGrid,
  lined: drawLinedPaper,
  square: drawSquareGrid,
  isometric: drawIsometricGrid,
  hex: drawHexGrid,
  cross: drawCrossGrid,
  graph: drawGraphGrid,
  dotLarge: drawDotGridLarge,
  music: drawMusicStaff,
  isometricDots: drawIsometricDots,
};

export const PatternRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pattern, spacing, opacity, unit, gridColor } = useGridStore();

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if we are currently evaluating print media
    const isPrintingMedia = window.matchMedia('print').matches;

    // Clear explicit inline style dimensions on screen mode.
    if (!isPrintingMedia) {
      canvas.style.width = '';
      canvas.style.height = '';
    }

    // Read the actual layout sizes assigned by the CSS layout engine
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // Boost print resolution DPI to 3x for high quality physical paper lines
    const dpr = isPrintingMedia ? 3 : window.devicePixelRatio || 1;

    // Set internal canvas bitmap buffer size
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Only apply fixed pixel inline styles during active print rendering
    if (isPrintingMedia) {
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    ctx.scale(dpr, dpr);

    // Clear canvas frame
    ctx.clearRect(0, 0, width, height);

    // Calculate exact spacing matching real physical units
    const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
    const spacingPx = spacing * pxPerUnit;

    // Draw the active selected pattern
    const renderer = patternRenderers[pattern];
    if (renderer) {
      renderer(ctx, width, height, spacingPx, opacity, gridColor);
    }
  };

  // Manage all event listeners and structural tracking synchronously
  useEffect(() => {
    // Initial draw for current state configuration
    renderCanvas();

    const handleResize = () => renderCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('focus', handleResize);

    // Actively track browser print state shifts
    const mediaQueryList = window.matchMedia('print');
    const handlePrintChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        // Give the browser's layout engine 50ms to finish closing
        // the print preview tree before executing the final screen paint.
        setTimeout(renderCanvas, 50);
      } else {
        renderCanvas();
      }
    };
    mediaQueryList.addEventListener('change', handlePrintChange);

    //  Moved ResizeObserver inside this unified tracking block.
    // This forces it to recreate alongside state updates, destroying the stale closure.
    const canvas = canvasRef.current;
    let resizeObserver: ResizeObserver | null = null;

    if (canvas) {
      resizeObserver = new ResizeObserver(() => {
        renderCanvas();
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('focus', handleResize);
      mediaQueryList.removeEventListener('change', handlePrintChange);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [pattern, spacing, opacity, unit, gridColor]); // All dependencies

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[1] print:absolute print:w-full print:h-full print:z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};
