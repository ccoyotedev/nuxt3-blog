<script setup>
  defineProps({
    value: String,
  })
</script>

<template>
  <span class="tag">
    {{ value }}
  </span>
</template>

<style scoped>
  .tag {
    display: inline-block;
    background: rgba(0,0,0,0.4);
    margin: 0.4rem 0.4rem 0.4rem 0;
    border: 0.5px solid rgba(2, 220, 129, 0.4);
    padding: 0.4rem;
    text-transform: uppercase;
    border-radius: 0.2rem;
  }
</style>