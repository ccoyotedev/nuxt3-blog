<script setup>
const { data } = await useFetch(
  () => `https://dev.to/api/articles?username=ccoyotedev`
);
</script>

<template>
  <NuxtLayout name="section">
    <div class="section-container">
      <AnimatedHeading value="Tutorials" />
      <p>
        A series of tutorials wrote during my time as Dev Evangelist at
        Aavegotchi.
      </p>
      <div class="tutorial-grid">
        <TutorialCard
          v-for="item in data"
          :key="item.id"
          :url="item.url"
          :coverImage="item.cover_image"
          :title="item.title"
          :tags="item.tag_list"
          :likes="item.positive_reactions_count"
          :published="item.published_at"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.section-container:after {
  content: "Blog";
  position: absolute;
  font-size: 250px;
  font-weight: 600;
  z-index: 0;
  right: 0;
  /* transform: translateX(25%); */
  top: 0;
  color: rgba(255, 255, 255, 0.05);
}
.tutorial-grid {
  display: grid;
  width: 100%;
  gap: 1.2rem;
  margin-top: 1.2rem;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 425px) {
  .tutorial-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .tutorial-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 2560px) {
  .tutorial-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
