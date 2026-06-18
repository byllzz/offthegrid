import type { PatternRenderer } from '../types/grid';
export const drawIsometricGrid: PatternRenderer = (
  ctx,
  width,
  height,
  spacingPx,
  opacity,
  color,
) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;
  const angle = Math.PI / 6; // 30 degrees
  const dx = spacingPx / Math.cos(angle);

  // Lines going up-right (/)
  for (let x = -height / Math.tan(angle); x < width; x += dx) {
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(x + height / Math.tan(angle), 0);
    ctx.stroke();
  }
  // Lines going up-left (\)
  for (let x = 0; x < width + height / Math.tan(angle); x += dx) {
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(x - height / Math.tan(angle), 0);
    ctx.stroke();
  }
  // Horizontal lines
  for (let y = 0; y <= height; y += spacingPx * Math.sin(angle) * 2) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
};
