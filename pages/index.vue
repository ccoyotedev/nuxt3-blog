<script setup>
const gameMode = useGameMode();
</script>

<template>
  <NuxtLayout
    name="animation"
    class="home-page"
    :class="{ 'game-mode': gameMode }"
  >
    <span class="section-wrapper">
      <SectionHero />
      <div class="scroll-down-right">
        <ScrollDown />
      </div>
    </span>
    <span class="section-wrapper">
      <SectionAbout />
      <div class="scroll-down-right">
        <ScrollDown />
      </div>
    </span>
    <SectionTutorials />
  </NuxtLayout>
</template>

<style scoped>
.home-page.game-mode .scroll-down-right {
  opacity: 0;
}

.section-wrapper {
  position: relative;
}
.section-wrapper:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(2, 220, 129, 0.4);
}

.scroll-down-right {
  position: absolute;
  right: 2.4rem;
  bottom: 2.4rem;
}
</style>
