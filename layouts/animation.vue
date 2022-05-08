<template>
  <div class="ani-content">
    <slot />
  </div>
</template>

<style scoped>
.ani-content {
  opacity: 1;
  transition: opacity 500ms, transform 500ms;
  padding:  calc(8.3% + 5.4rem) 8.3%;
  height: 100%;
}
</style>
