import { PatternRenderer } from '../../../types/grid';

export const drawCrossGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 0.5;

  const half = spacingPx / 2;
  const crossSize = spacingPx * 0.2;

  for (let x = 0; x <= width; x += spacingPx) {
    for (let y = 0; y <= height; y += spacingPx) {
      const cx = x + half;
      const cy = y + half;
      // Draw cross: horizontal and vertical lines
      ctx.beginPath();
      ctx.moveTo(cx - crossSize, cy);
      ctx.lineTo(cx + crossSize, cy);
      ctx.moveTo(cx, cy - crossSize);
      ctx.lineTo(cx, cy + crossSize);
      ctx.stroke();
    }
  }

  ctx.restore();
};
