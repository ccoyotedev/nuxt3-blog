<script setup>
  defineProps({
    value: String,
  })

  const target = ref(null);
  const targetIsVisible = ref(false)

  const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
      },
    )

</script>

<template>
  <h1 ref="target">
    <AnimatedLetter v-for="(letter, i) in value" :key="i" :value="letter" :visible="targetIsVisible" />
  </h1>
</template>

<style scoped>
  h1 {
    font-size: 5.4rem;
    margin-bottom: 1.2rem;
  }
</style>