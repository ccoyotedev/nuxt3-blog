const PRIMARY_COLOR = "#02dc81";
const SECONDARY_COLOR = "#fffff";

export function drawLine(ctx, {
  x1,
  y1
}, {
  x2,
  y2
}) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = PRIMARY_COLOR;
  ctx.stroke();
};

export function drawCircle(ctx, x, y, radius, options) {
  ctx.beginPath();
  ctx.arc(
    x,
    y,
    radius,
    0,
    2 * Math.PI,
    false
  );
  if (options && options.fill) {
    ctx.fillStyle = options.fill
  }
  ctx.strokeStyle = PRIMARY_COLOR;
  ctx.stroke();
}

export function coordinateOfPointAfterRotation(x, y, radians) {
  const x1 = x * Math.cos(radians) - y * Math.sin(radians)
  const y1 = y * Math.cos(radians) + x * Math.sin(radians)
  return {
    x: x1,
    y: y1
  };
}

export function calculateXYDisplacement(theta, hyp) {
  const dx = hyp * Math.cos(theta);
  const dy = hyp * Math.sin(theta);
  return {
    dx,
    dy
  };
}

export function calculateDistance(x1, y1, x2, y2) {
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);
  return Math.sqrt(dx * dx + dy * dy);
}