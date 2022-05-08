<template>
  <h1>
    <AnimatedLetter v-for="(letter, i) in value" :key="i" :value="letter" />
  </h1>
</template>

<script setup>
  const props = defineProps({
    value: String,
  })
</script>

<style scoped>
  h1 {
    font-size: 5.4rem;
  }
</style>