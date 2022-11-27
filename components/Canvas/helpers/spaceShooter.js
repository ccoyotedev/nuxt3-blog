import {
  drawCircle,
  coordinateOfPointAfterRotation,
  drawLine
} from ".";

export function drawProjectiles(ctx, projectiles) {
  projectiles.forEach((projectile) => {
    drawCircle(ctx, projectile.x, projectile.y, 5, {
      fill: "#02dc81",
    });
  });
};

export function drawShip(ctx, ship) {
  const {
    x,
    y,
    height,
    width,
    theta
  } = ship;
  const x0 = 0;
  const y0 = 0;
  const x1 = height;
  const y1 = -width / 2;
  const x2 = (2 * height) / 3;
  const y2 = 0;
  const x3 = height;
  const y3 = width / 2;

  const v0 = coordinateOfPointAfterRotation(x0, y0, theta);
  const v1 = coordinateOfPointAfterRotation(x1, y1, theta);
  const v2 = coordinateOfPointAfterRotation(x2, y2, theta);
  const v3 = coordinateOfPointAfterRotation(x3, y3, theta);

  drawLine(
    ctx, {
      x1: x + v0.x,
      y1: y + v0.y
    }, {
      x2: x + v1.x,
      y2: y + v1.y
    }
  );
  drawLine(
    ctx, {
      x1: x + v1.x,
      y1: y + v1.y
    }, {
      x2: x + v2.x,
      y2: y + v2.y
    }
  );
  drawLine(
    ctx, {
      x1: x + v2.x,
      y1: y + v2.y
    }, {
      x2: x + v3.x,
      y2: y + v3.y
    }
  );
  drawLine(
    ctx, {
      x1: x + v3.x,
      y1: y + v3.y
    }, {
      x2: x + v0.x,
      y2: y + v0.y
    }
  );
}