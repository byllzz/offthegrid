import { PatternRenderer } from '../../../types/grid';

export const drawLinedPaper: PatternRenderer = (ctx, width, height, spacingPx, opacity) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 0.5;

  // Horizontal lines only, with a thicker line at every 5th line (like a margin)
  const lineHeight = spacingPx;
  for (let y = lineHeight; y < height; y += lineHeight) {
    const isMajor = Math.round(y / lineHeight) % 5 === 0;
    ctx.lineWidth = isMajor ? 1.2 : 0.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Optional vertical margin line (red or dotted)
  ctx.lineWidth = 0.5;
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = '#ff0000';
  ctx.globalAlpha = opacity * 0.5;
  ctx.beginPath();
  ctx.moveTo(width * 0.2, 0);
  ctx.lineTo(width * 0.2, height);
  ctx.stroke();

  ctx.restore();
};
