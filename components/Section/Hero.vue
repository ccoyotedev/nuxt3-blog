<template>
  <NuxtLayout name="section" class="hero-container">
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
    <AnimatedHeading value="</h1>" color="rgba(255,255,255,0.1)" :delay="200" />
    <div class="row"></div>
  </NuxtLayout>
</template>

<style>
.hero-container h1 {
  font-size: 4.2rem;
  display: flex;
}

@media (min-width: 768px) {
  .hero-container h1 {
    font-size: 5.4rem;
    display: flex;
  }
}
</style>
