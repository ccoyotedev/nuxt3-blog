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
  ]
</script>


<template>
  <NuxtLayout name="section">
    <div>
      <AnimatedHeading value="About" />
      <p>I had always found myself split between two paths, academia or the arts. That was until I was introduced to Coding, which combines both worlds and has been my passion ever since.</p>
      <p>As a developer, it is my responsibility to solve problems, therefore I need the best tools for the job. That's why I undergo continuous learning to ensure I'm always up to date with all the latest tech and trends.</p>
    </div>
    <div class="carousel-container">
      <Carousel :items="languages" />
    </div>
  </NuxtLayout>
</template>

<style scoped>
  p {
    width: 50%;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.5;
    opacity: 0.8;
  }

  .carousel-container {
    position: absolute;
    right: 16.666%;
    top: 0;
    width: 16.666%;
  }
</style>