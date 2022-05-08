<template>
  <div class="ani-content">
    <slot />
  </div>
</template>

<style scoped>
.ani-content {
  opacity: 1;
  transition: opacity 500ms, transform 400ms;
  padding:  calc(8.333% + 5.4rem) 8.333%;
  height: 100%;
}
</style>
