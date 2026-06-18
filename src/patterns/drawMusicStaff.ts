import type { PatternRenderer } from '../types/grid';
export const drawMusicStaff: PatternRenderer = (ctx, width, height, spacingPx, opacity, color) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.6;

  const staffLineGap = spacingPx * 0.3;
  const staffHeight = staffLineGap * 4;
  const staffGap = spacingPx * 1.5;

  for (let staffTop = staffGap; staffTop < height; staffTop += staffHeight + staffGap) {
    for (let line = 0; line < 5; line++) {
      const y = staffTop + line * staffLineGap;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }
  ctx.restore();
};
