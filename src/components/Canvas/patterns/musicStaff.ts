import { PatternRenderer } from '../../../types/grid';

export const drawMusicStaff: PatternRenderer = (ctx, width, height, spacingPx, opacity) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 0.8;

  // A music staff has 5 lines, spaced equally.
  // spacingPx here represents the distance between lines.
  const lineSpacing = spacingPx;
  const staffHeight = 4 * lineSpacing; // 5 lines => 4 gaps
  const staffCount = Math.ceil(height / (staffHeight + lineSpacing * 2)); // with some padding

  // Draw each staff
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

  // Optionally add a treble clef placeholder (just a simple shape)
  // For simplicity, we skip it.

  ctx.restore();
};
