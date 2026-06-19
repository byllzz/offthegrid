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

    //  Read the actual layout size assigned to the element by CSS
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // Check if we are currently evaluating print media to boost target DPI
    const isPrintingMedia = window.matchMedia('print').matches;
    const dpr = isPrintingMedia ? 3 : window.devicePixelRatio || 1;

    // Set internal bitmap size scaled by resolution factor
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    //  Calculate exact spacing (Standard 96 CSS pixels match print scales perfectly)
    const pxPerUnit = UNIT_CONFIG[unit].pxPerUnit;
    const spacingPx = spacing * pxPerUnit;

    // Draw the pattern
    const renderer = patternRenderers[pattern];
    if (renderer) {
      renderer(ctx, width, height, spacingPx, opacity, gridColor);
    }
  };

  // Render on changes and track window sizing changes
  useEffect(() => {
    renderCanvas();

    const handleResize = () => renderCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Actively watch for print media queries kicking in
    const mediaQueryList = window.matchMedia('print');
    const handlePrintChange = () => renderCanvas();
    mediaQueryList.addEventListener('change', handlePrintChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      mediaQueryList.removeEventListener('change', handlePrintChange);
    };
  }, [pattern, spacing, opacity, unit, gridColor]);

  // ResizeObserver catches the exact moment print stylesheets apply changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver(() => {
      renderCanvas();
    });
    resizeObserver.observe(canvas);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[1] print:absolute print:w-full print:h-full print:z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};
