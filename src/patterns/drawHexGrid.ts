import type { PatternRenderer } from '../types/grid';
export const drawHexGrid: PatternRenderer = (ctx, width, height, spacingPx, opacity, color) => {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;

  const hexHeight = spacingPx;
  const hexWidth = (Math.sqrt(3) / 2) * hexHeight;
  const vertSpacing = hexHeight * 0.75;

  const cols = Math.ceil(width / hexWidth) + 2;
  const rows = Math.ceil(height / vertSpacing) + 2;

  for (let row = -1; row < rows; row++) {
    for (let col = -1; col < cols; col++) {
      const xOffset = row % 2 === 0 ? 0 : hexWidth / 2;
      const cx = col * hexWidth + xOffset;
      const cy = row * vertSpacing;
      drawHexagon(ctx, cx, cy, hexHeight / 2);
    }
  }
  ctx.restore();
};

function drawHexagon(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + size * Math.cos(a);
    const y = cy + size * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
}
