import type { PatternRenderer } from '../types/grid';
export const drawIsometricDots: PatternRenderer = (
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
  const radius = spacingPx * 0.06;
  const rowHeight = spacingPx * 0.866; // sqrt(3)/2

  let row = 0;
  for (let y = 0; y <= height; y += rowHeight) {
    const xOffset = row % 2 === 0 ? 0 : spacingPx / 2;
    for (let x = xOffset; x <= width; x += spacingPx) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    row++;
  }
  ctx.restore();
};
