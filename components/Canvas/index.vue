<template>
  <canvas id="c"> </canvas>
</template>

<script>
import {
  drawLine,
  drawCircle,
  calculateDistance,
  calculateXYDisplacement,
  isOutOfBounds,
} from "./helpers/index.js";
import { drawProjectiles, drawShip } from "./helpers/spaceShooter.js";

export default {
  name: "Canvas",
  data() {
    return {
      active: true,
      mouse: {
        x: 0,
        y: 0,
      },
      ship: {
        firerate: 400,
        reloading: false,
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
    window.addEventListener("click", this.handleClick);
    window.addEventListener("keypress", this.handleKeyPress);
    document
      .getElementsByClassName("content")[0]
      .addEventListener("scroll", this.handleViewportCheck);

    this.init();
    setTimeout(() => {
      if (!this.ctx) {
        this.init();
      }
    }, 1000);
  },
  beforeUnmount() {
    this.active = false;
    window.removeEventListener("mousemove", this.trackMouse);
    window.removeEventListener("click", this.handleClick);
    window.removeEventListener("keypress", this.handleKeyPress);
    document
      .getElementsByClassName("content")[0]
      .removeEventListener("scroll", this.handleViewportCheck);
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
    handleViewportCheck() {
      const scrolled = document.getElementsByClassName("content")[0].scrollTop;
      const height = window.innerHeight;
      this.active = scrolled < height;
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

      if (this.active) {
        this.setCanvasSize();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPointer();
        this.updateShip();
        this.updateProjectiles();
        this.clearInactiveProjectiles();
        drawShip(this.ctx, this.ship);
        drawProjectiles(this.ctx, this.ship.projectiles);
      }
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
    handleClick() {
      console.log(this.ship.reloading);
      if (!this.ship.reloading) {
        this.shoot();
        this.ship.reloading = true;

        setTimeout(() => {
          this.ship.reloading = false;
        }, this.ship.firerate);
      }
    },
    shoot() {
      const x = this.ship.x;
      const y = this.ship.y;
      const { dx, dy } = calculateXYDisplacement(this.ship.theta, 8);
      const vx = dx + this.ship.vx;
      const vy = dy + this.ship.vy * 2;
      const projectile = { x, y, vx, vy, active: true };
      this.ship.projectiles = [...this.ship.projectiles, projectile];
    },
    updateProjectiles() {
      this.ship.projectiles.forEach((_, i) => this.updateProjectile(i));
    },
    updateProjectile(i) {
      const projectile = this.ship.projectiles[i];
      const x = projectile.x - projectile.vx;
      const y = projectile.y - projectile.vy;
      const active = !isOutOfBounds(this.canvas, x, y, 5);

      const updatedProjectile = {
        ...projectile,
        x,
        y,
        active,
      };
      this.ship.projectiles[i] = updatedProjectile;
    },
    clearInactiveProjectiles() {
      this.ship.projectiles = this.ship.projectiles.filter(
        (projectile) => projectile.active
      );
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
    isOutOfBounds(x, y, radius) {
      if (
        x > this.canvas.width + radius ||
        x < -radius ||
        y > this.canvas.height + radius ||
        y < -radius
      )
        return true;
      return false;
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
  },
};
</script>

<style>
#c {
  cursor: none;
}
</style>
