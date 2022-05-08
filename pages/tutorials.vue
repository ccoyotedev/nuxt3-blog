<script setup>
  const { data } = await useFetch(() => `https://dev.to/api/articles?username=ccoyotedev`);
  console.log(data);
</script>


<template>
  <NuxtLayout name="animation">
    <AnimatedHeading value="Tutorials" />
    <p>A series of tutorials wrote during my time as Dev Evangelist at Aavegotchi.</p>
    <div class="tutorial-grid">
      <TutorialCard v-for="item in data" :key="item.id" :url="item.url" :coverImage="item.cover_image" :title="item.title" :tags="item.tag_list" :likes="item.positive_reactions_count" :published="item.published_at"  />
    </div>
  </NuxtLayout>
</template>

<style scoped>
  .tutorial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
</style>