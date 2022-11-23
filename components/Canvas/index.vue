<template>
  <canvas id="c"> </canvas>
</template>

<script>
export default {
  name: "Canvas",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
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
      this.draw();
    },
    trackMouse(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.x - rect.left;
      this.mouseY = e.y - rect.top;
    },
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.mouseX, this.mouseY, 5, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "#02dc81";
      this.ctx.fill();
      this.ctx.stroke();
    },
  },
};
</script>

<style>
#c {
  cursor: none;
}
</style>
