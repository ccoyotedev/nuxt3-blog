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
  transition: opacity 500ms, transform 400ms;
  padding:  5.4rem 8.333%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
