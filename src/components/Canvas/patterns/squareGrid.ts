import type { PatternRenderer } from '../../../types/grid';

export const drawSquareGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 0.5;

  // Vertical lines
  for (let x = 0; x <= width; x += spacingPx) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Horizontal lines
  for (let y = 0; y <= height; y += spacingPx) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.restore();
};
