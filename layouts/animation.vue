<template>
  <div class="ani-content">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ani-content {
  opacity: 1;
  transition: opacity 600ms, transform 400ms;
}
</style>
