<script setup>
  defineProps({
    url: String,
    coverImage: String,
    title: String,
    tags: Array,
    likes: Number,
    published: String,
  })
</script>

<template>
  <a :href="url" target="__blank" >
    <article class="card-container">
      <img :src="coverImage" object-fit="contain" />
      <div class="details-container">
        <p class="title">{{ title }}</p>
        <Tag v-for="(tag, i) in tags" :key="i" :value="tag" />
        <div class="footer">
          <small>♡ {{ likes }}</small>
          <small>{{ formatDate(published) }}</small>
        </div>  
      </div>
    </article>
  </a>
</template>

<style scoped>
    .card-container {
      display: block;
      max-width: 100%;
      border: 1px solid rgba(2, 220, 129, 0.4);
      border-radius: 0.8rem;
      overflow: hidden;
      background-color: rgba(2, 220, 129, 0.1);
      height: 100%;
      transition: 300ms;
    }
    .card-container:hover {
      border: 1px solid rgba(2, 220, 129, 1);
      box-shadow: 0 0 4px 2px rgba(2, 220, 129, 0.4);
    }

    img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
      object-position: center;
      border-bottom: 1px solid rgba(2, 220, 129, 0.4);
    }

    .details-container {
      padding: 0.8rem;
    }
    .title {
      font-size: 2.4rem;
      margin: 0.4rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
              line-clamp: 2; 
      -webkit-box-orient: vertical;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 0.8rem;
    }
</style>

<script>
export default {
  methods: {
    formatDate(date){
      return new Date(date).toLocaleString('en-GB', { day: 'numeric', year: 'numeric', month: 'long'});
    }
  }
}
</script>