import type { PatternRenderer } from '../types/grid';
export const drawCrossGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity, color) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.6;
  const armLength = spacingPx * 0.12;

  const cols = Math.ceil(width / spacingPx) + 1;
  const rows = Math.ceil(height / spacingPx) + 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * spacingPx;
      const y = j * spacingPx;
      ctx.beginPath();
      ctx.moveTo(x - armLength, y);
      ctx.lineTo(x + armLength, y);
      ctx.moveTo(x, y - armLength);
      ctx.lineTo(x, y + armLength);
      ctx.stroke();
    }
  }
  ctx.restore();
};
