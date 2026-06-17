import type { PatternRenderer } from '../../../types/grid';

export const drawMusicStaff: PatternRenderer = (ctx, width, height, spacingPx, opacity, color) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8;

  const lineSpacing = spacingPx;
  const staffHeight = 4 * lineSpacing;
  const staffCount = Math.ceil(height / (staffHeight + lineSpacing * 2));

  for (let s = 0; s < staffCount; s++) {
    const startY = s * (staffHeight + lineSpacing * 2) + lineSpacing * 2;
    for (let i = 0; i < 5; i++) {
      const y = startY + i * lineSpacing;
      if (y > height) break;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  ctx.restore();
};
