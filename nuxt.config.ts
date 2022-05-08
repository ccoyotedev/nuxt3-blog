import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  layoutTransition: {
    name: "my-layouts",
    mode: "out-in",
  },

  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
      },
    ],
  },
});
