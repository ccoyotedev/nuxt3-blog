<template>
  <NuxtLayout name="section">
      <AnimatedHeading value="Hi," />
      <div class="row">
        <AnimatedHeading value="I'm " :delay=150 />
        <AnimatedHeading value="C" color="#02dc81" :delay=350 />
        <AnimatedHeading value="aleb." :delay=400 />
      </div>
      <div class="row">
        <AnimatedHeading value="my middle name is " :delay=650 />
        <AnimatedHeading value="Coyote," color="#02dc81" :delay=1600 />
      </div>
      <div class="row">
        <AnimatedHeading value="and I'm a Web " :delay=1950 />
        <AnimatedHeading value="Dev" color="#02dc81" :delay=2650 />
        <AnimatedHeading value="eloper" :delay=2800 />
      </div>
  </NuxtLayout>
</template>