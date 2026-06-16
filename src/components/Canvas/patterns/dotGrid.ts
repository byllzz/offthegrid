import type { PatternRenderer } from '../../../types/grid';

export const drawDotGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = '#000000';

  const cols = Math.ceil(width / spacingPx) + 1;
  const rows = Math.ceil(height / spacingPx) + 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * spacingPx;
      const y = j * spacingPx;
      ctx.beginPath();
      ctx.arc(x, y, spacingPx * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
};
