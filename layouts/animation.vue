<template>
  <div class="content">
    <slot />
  </div>
</template>

<style>
.content {
  opacity: 1;
  transition: opacity 500ms, transform 500ms;
  padding: 5.4rem 1.2rem;
}
</style>
