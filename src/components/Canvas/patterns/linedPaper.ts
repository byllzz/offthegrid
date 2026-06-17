import type { PatternRenderer } from '../../../types/grid';

export const drawLinedPaper: PatternRenderer = (ctx, width, height, spacingPx, opacity, color) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;

  const lineHeight = spacingPx;
  for (let y = lineHeight; y < height; y += lineHeight) {
    const isMajor = Math.round(y / lineHeight) % 5 === 0;
    ctx.lineWidth = isMajor ? 1.2 : 0.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Margin line (optional, using same color with half opacity)
  ctx.lineWidth = 0.5;
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = color;
  ctx.globalAlpha = opacity * 0.5;
  ctx.beginPath();
  ctx.moveTo(width * 0.2, 0);
  ctx.lineTo(width * 0.2, height);
  ctx.stroke();

  ctx.restore();
};
