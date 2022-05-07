<template>
  <div class="layout">
    <div class="sidetray"></div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 14rem 1fr;
}

.sidetray {
  border-right: 1px solid #02dc81;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}

.content {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
</style>
