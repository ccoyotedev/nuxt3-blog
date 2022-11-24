<template>
  <canvas id="c"> </canvas>
</template>

<script>
import {
  drawLine,
  drawCircle,
  coordinateOfPointAfterRotation,
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
      },
    };
  },
  mounted() {
    this.init();
    setTimeout(() => {
      if (!this.ctx) {
        this.init();
      }
    }, 1000);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.trackMouse);
  },
  methods: {
    init() {
      const c = document.getElementById("c");
      if (c) {
        c.style.width = "100%";
        c.style.height = "100%";
        // ...then set the internal size to match
        c.width = c.offsetWidth;
        c.height = c.offsetHeight;

        const ctx = c.getContext("2d");
        window.addEventListener("mousemove", this.trackMouse);
        this.canvas = c;
        this.ctx = ctx;
        this.animate();
      }
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawPointer();
      this.drawShip();
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
    drawShip() {
      const { x, y, height, width } = this.ship;
      const x0 = 0;
      const y0 = 0;
      const x1 = height;
      const y1 = -width / 2;
      const x2 = (2 * height) / 3;
      const y2 = 0;
      const x3 = height;
      const y3 = width / 2;

      const dx = x - this.mouse.x;
      const dy = y - this.mouse.y;
      const theta = Math.atan2(dy, dx);

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
