import type { PatternRenderer } from '../../../types/grid';

export const drawIsometricGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 0.5;

  const step = spacingPx;
  // const angle = Math.PI / 6;

  // We draw three sets of lines: two diagonals and one vertical
  // Diagonal 1 (top-left to bottom-right)
  for (let offset = -height; offset < width + height; offset += step) {
    ctx.beginPath();
    ctx.moveTo(offset, 0);
    ctx.lineTo(offset + height, height);
    ctx.stroke();
  }

  // Diagonal 2 (top-right to bottom-left)
  for (let offset = -height; offset < width + height; offset += step) {
    ctx.beginPath();
    ctx.moveTo(offset, 0);
    ctx.lineTo(offset - height, height);
    ctx.stroke();
  }

  // Vertical lines (optional, but some isometric grids include them)
  for (let x = 0; x <= width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  ctx.restore();
};
