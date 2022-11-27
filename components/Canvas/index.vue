<template>
  <canvas id="c"> </canvas>
</template>

<script>
import {
  drawLine,
  drawCircle,
  coordinateOfPointAfterRotation,
  calculateDistance,
  calculateXYDisplacement,
} from "./helpers/index.js";

export default {
  name: "Canvas",
  data() {
    return {
      mouse: {
        x: 0,
        y: 0,
      },
      ship: {
        x: 300,
        y: 300,
        height: 40,
        width: 30,
        theta: 0,
        vx: 0,
        vy: 0,
        projectiles: [],
      },
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.trackMouse);
    window.addEventListener("click", this.shoot);
    window.addEventListener("keypress", this.handleKeyPress);

    this.init();
    setTimeout(() => {
      if (!this.ctx) {
        this.init();
      }
    }, 1000);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.trackMouse);
    window.removeEventListener("click", this.shoot);
    window.removeEventListener("keypress", this.handleKeyPress);
  },
  methods: {
    init() {
      const c = document.getElementById("c");
      if (c) {
        const ctx = c.getContext("2d");
        this.canvas = c;
        this.ctx = ctx;

        this.setCanvasSize();
        this.animate();
      }
    },
    handleKeyPress(e) {
      if (e.key === "p") {
        this.startGame();
      } else if (e.key === "q") {
        this.endGame();
      }
    },
    startGame() {
      this.$emit("start-game");
      const bodyElement = document.querySelector("body");
      bodyElement.classList.add("stop-scrolling");
    },
    endGame() {
      this.$emit("end-game");
      const bodyElement = document.querySelector("body");
      bodyElement.classList.remove("stop-scrolling");
    },
    setCanvasSize() {
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.setCanvasSize();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawPointer();
      this.updateShip();
      this.updateProjectiles();
      this.drawShip();
      this.drawProjectiles();
    },
    trackMouse(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.x - rect.left;
      this.mouse.y = e.y - rect.top;
    },
    drawPointer() {
      const { x, y } = this.mouse;
      const radius = 6;
      drawCircle(this.ctx, this.mouse.x, this.mouse.y, radius);
      drawLine(
        this.ctx,
        { x1: x - (5 * radius) / 3, y1: y },
        { x2: x - radius / 3, y2: y }
      );
      drawLine(
        this.ctx,
        { x1: x + (5 * radius) / 3, y1: y },
        { x2: x + radius / 3, y2: y }
      );
      drawLine(
        this.ctx,
        { x1: x, y1: y - (5 * radius) / 3 },
        { x2: x, y2: y - radius / 3 }
      );
      drawLine(
        this.ctx,
        { x1: x, y1: y + (5 * radius) / 3 },
        { x2: x, y2: y + radius / 3 }
      );
    },
    shoot() {
      const x = this.ship.x;
      const y = this.ship.y;
      const vx = this.ship.vx * 2;
      const vy = this.ship.vy * 2;
      const projectile = { x, y, vx, vy };
      this.ship.projectiles = [...this.ship.projectiles, projectile];
    },
    updateProjectiles() {
      this.ship.projectiles.forEach((_, i) => this.updateProjectile(i));
    },
    updateProjectile(i) {
      const projectile = this.ship.projectiles[i];
      const updatedProjectile = {
        ...projectile,
        x: projectile.x - projectile.vx,
        y: projectile.y - projectile.vy,
      };
      this.ship.projectiles[i] = updatedProjectile;
    },
    updateShip() {
      const { x, y } = this.ship;
      const dx = x - this.mouse.x;
      const dy = y - this.mouse.y;
      this.ship.theta = Math.atan2(dy, dx);

      let hyp = calculateDistance(x, y, this.mouse.x, this.mouse.y);
      if (hyp > 350) {
        hyp = 350;
      }

      const displacement = calculateXYDisplacement(this.ship.theta, hyp);
      this.ship.vx = displacement.dx / 20;
      this.ship.vy = displacement.dy / 20;

      this.moveShip();
    },
    moveShip() {
      const x = this.ship.x - this.ship.vx;
      const y = this.ship.y - this.ship.vy;

      if (x < 0) this.ship.x = 0;
      else if (x > this.canvas.width) this.ship.x = this.canvas.width;
      else this.ship.x = x;

      if (y < 0) this.ship.y = 0;
      else if (y > this.canvas.height + this.ship.height)
        this.ship.y = this.canvas.height + this.ship.height;
      else this.ship.y = y;
    },
    drawProjectiles() {
      this.ship.projectiles.forEach((projectile) => {
        console.log(projectile.x);
        drawCircle(this.ctx, projectile.x, projectile.y, 5, {
          fill: "#02dc81",
        });
      });
    },
    drawShip() {
      const { x, y, height, width, theta } = this.ship;
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
        this.ctx,
        { x1: x + v0.x, y1: y + v0.y },
        { x2: x + v1.x, y2: y + v1.y }
      );
      drawLine(
        this.ctx,
        { x1: x + v1.x, y1: y + v1.y },
        { x2: x + v2.x, y2: y + v2.y }
      );
      drawLine(
        this.ctx,
        { x1: x + v2.x, y1: y + v2.y },
        { x2: x + v3.x, y2: y + v3.y }
      );
      drawLine(
        this.ctx,
        { x1: x + v3.x, y1: y + v3.y },
        { x2: x + v0.x, y2: y + v0.y }
      );
    },
  },
};
</script>

<style>
#c {
  cursor: none;
}
</style>
