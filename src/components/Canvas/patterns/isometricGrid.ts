import type { PatternRenderer } from '../../../types/grid';

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
  ctx.lineWidth = 1;

  const rowHeight = spacingPx * (Math.sqrt(3) / 2);
  const tan30 = 1 / Math.sqrt(3);

  // ─── 1. Horizontal lines ───
  ctx.beginPath();
  const rows = Math.ceil(height / rowHeight) + 1;
  for (let i = 0; i < rows; i++) {
    const y = i * rowHeight;
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.stroke();

  ctx.beginPath();
  const dx30 = height * tan30; // horizontal shift for a line from top to bottom
  const startX30 = -dx30 - spacingPx * 2; // start left of canvas
  const endX30 = width + dx30 + spacingPx * 2;
  const numLines30 = Math.ceil((endX30 - startX30) / spacingPx);

  for (let i = 0; i <= numLines30; i++) {
    const xIntercept = startX30 + i * spacingPx;
    const x0 = xIntercept;
    const y0 = 0;
    const x1 = xIntercept + dx30;
    const y1 = height;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
  }
  ctx.stroke();
  ctx.beginPath();
  const dx150 = height * tan30; // same magnitude
  const startX150 = -dx150 - spacingPx * 2;
  const endX150 = width + dx150 + spacingPx * 2;
  const numLines150 = Math.ceil((endX150 - startX150) / spacingPx);

  for (let i = 0; i <= numLines150; i++) {
    const xIntercept = startX150 + i * spacingPx;
    const x0 = xIntercept;
    const y0 = 0;
    const x1 = xIntercept - dx150;
    const y1 = height;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
  }
  ctx.stroke();

  ctx.restore();
};
