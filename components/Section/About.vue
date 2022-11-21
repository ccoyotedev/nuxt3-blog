<script setup>
const languages = [
  "React JS",
  "Gatsby",
  "ES6",
  "Next JS",
  "Vue JS",
  "Nuxt JS",
  "HTML5",
  "Typescript",
  "CSS",
  "Web3",
  "Solidity",
  "Node JS",
];
</script>

<template>
  <NuxtLayout name="section">
    <div class="content-container">
      <AnimatedHeading value="About" />
      <p>
        I had always found myself split between two paths, academia or the arts.
        That was until I was introduced to Coding, which combines both worlds
        and has been my passion ever since.
      </p>
      <p>
        As a developer, it is my responsibility to solve problems, therefore I
        need the best tools for the job. That's why I undergo continuous
        learning to ensure I'm always up to date with all the latest tech and
        trends.
      </p>
    </div>
    <div class="carousel-container">
      <Carousel :items="languages" />
    </div>
  </NuxtLayout>
</template>

<style scoped>
p {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  line-height: 1.5;
  opacity: 0.8;
  backdrop-filter: blur(3px);
  position: relative;
  z-index: 10;
}

.carousel-container {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  opacity: 0.5;
}

@media (min-width: 768px) {
  p {
    width: 50%;
  }

  .carousel-container {
    right: 16.666%;
    width: 16.666%;
    opacity: 1;
  }
}
</style>
