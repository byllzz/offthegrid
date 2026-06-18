import type { PatternRenderer } from '../types/grid';
export const drawDotGridLarge: PatternRenderer = (
  ctx,
  width,
  height,
  spacingPx,
  opacity,
  color,
) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  const cols = Math.ceil(width / spacingPx) + 1;
  const rows = Math.ceil(height / spacingPx) + 1;
  const radius = spacingPx * 0.05;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      ctx.beginPath();
      ctx.arc(i * spacingPx, j * spacingPx, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
};
