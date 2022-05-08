<script setup>
  defineProps({
    value: String,
    visible: Boolean,
    delay: Number,
    color: String,
  })
</script>

<template>
  <span
    @mouseenter="handleHover"
    class="letter"
    :class="{ bounce: animated, fade: fadeIn }"
    :style="[value === ' ' ? { width: '1.2rem' } : { width: 'auto'}, { color: color }]"
  >
    {{ value }}
  </span>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      animated: false,
      fadeIn: false,
    };
  },

  methods: {
    handleHover(){
      if (!this.animated) {
        setTimeout(function () { this.animated = false }.bind(this), 800);
      }
      this.animated = true;
    }
  },

  watch: {
    visible: {
      handler(isVisible) {
        if (isVisible) {
          setTimeout(function () {
            this.fadeIn = true;
            this.handleHover();
          }.bind(this), this.delay)
        } 
      }
    }
  }
}
</script>

<style scoped>
.letter {
  display: inline-block;
  margin-right: 0.15rem;
  transition: 500ms;
  opacity: 0;
}

@keyframes rubberBand {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

.bounce {
  animation: rubberBand 800ms linear;
}

.fade {
  opacity: 1;
}


</style>
