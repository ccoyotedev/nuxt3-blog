<script setup>
  defineProps({
    value: String,
    delay: Number,
    color: String,
  })

  const target = ref(null);
  const targetIsVisible = ref(false)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting
    },
  )

</script>

<template>
  <h1 ref="target">
    <AnimatedLetter v-for="(letter, i) in value" :key="i" :value="letter" :visible="targetIsVisible" :delay="getDelay(i)" :color="color" />
  </h1>
</template>

<script>
export default {
  props: ['delay'],

  methods: {
    getDelay(i){
      return i * 50 + (this.delay || 0);
    }
  }
}
</script>


<style scoped>
  h1 {
    font-size: 5.4rem;
    margin-bottom: 1.2rem;
  }
</style>