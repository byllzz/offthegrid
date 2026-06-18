import type { PatternRenderer } from '../types/grid';
export const drawGraphGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity, color) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;

  const majorEvery = 5;

  for (let i = 0, x = 0; x <= width; i++, x += spacingPx) {
    ctx.lineWidth = i % majorEvery === 0 ? 1.2 : 0.4;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let j = 0, y = 0; y <= height; j++, y += spacingPx) {
    ctx.lineWidth = j % majorEvery === 0 ? 1.2 : 0.4;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
};
