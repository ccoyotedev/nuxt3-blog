<script setup>
const gameMode = useGameMode();
</script>

<template>
  <NuxtLayout
    name="section"
    class="hero-container"
    :class="{ 'game-mode': gameMode }"
  >
    <div class="canvas-container">
      <Canvas @startGame="gameMode = true" @endGame="gameMode = false" />
    </div>
    <div class="content-container">
      <AnimatedHeading value="<h1>" color="rgba(255,255,255,0.1)" :delay="0" />
      <div class="row">
        <AnimatedHeading value="C" color="#02dc81" :delay="200" />
        <AnimatedHeading value="aleb" :delay="250" />
      </div>
      <div class="row">
        <AnimatedHeading value="Coyote" color="#02dc81" :delay="450" />
        <AnimatedHeading value=" Brown," :delay="800" />
      </div>
      <div class="row">
        <AnimatedHeading value="Web " :delay="1250" />
        <AnimatedHeading value="Dev" color="#02dc81" :delay="1450" />
        <AnimatedHeading value="eloper." :delay="1600" />
      </div>
      <AnimatedHeading
        value="</h1>"
        color="rgba(255,255,255,0.1)"
        :delay="200"
      />
    </div>
  </NuxtLayout>
</template>

<style>
.hero-container h1 {
  position: relative;
  font-size: 4.2rem;
  display: flex;
}

.hero-container .canvas-container {
  display: none;
}

@media (min-width: 768px) {
  .hero-container.game-mode .canvas-container {
    z-index: 1;
    opacity: 1;
    border: 1px solid rgba(2, 220, 129, 1);
  }

  .hero-container.game-mode .content-container {
    opacity: 0.1;
  }

  .hero-container .canvas-container {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
    transition: opacity ease 500ms;
  }
  .hero-container h1 {
    font-size: 5.4rem;
    display: flex;
    user-select: none;
  }
  .hero-container .content-container {
    cursor: none;
    transition: opacity ease 500ms;
  }
}
</style>
