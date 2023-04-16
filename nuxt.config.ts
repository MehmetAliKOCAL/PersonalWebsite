// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@pinia/nuxt", "@vueuse/nuxt", "@nuxt/image-edge"],

  plugins: [{ src: "~/plugins/aos.client", mode: "client" }],

  build: {
    transpile: ["gsap"],
  },

  runtimeConfig: {
    STEAM_WEB_API_KEY: process.env.STEAM_WEB_API_KEY,
    STEAM_ID: process.env.STEAM_ID,
    LASTFM_USERNAME: process.env.LASTFM_USERNAME,
    LASTFM_WEB_API_KEY: process.env.LASTFM_WEB_API_KEY,
  },

  css: ["@/assets/style/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Mehmet Ali KOÇAL",
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content:
            "Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!",
        },
        {
          name: "keywords",
          content: "mehmet ali koçal, mehmet ali, gwyndev, gwyn",
        },
        { name: "author", content: "Mehmet Ali KOÇAL" },
        { name: "application-name", content: "Personal Website of GwynDev" },
        { property: "og:url", content: "https://gwyndev.com" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Mehmet Ali KOÇAL" },
        {
          property: "og:description",
          content:
            "Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!",
        },
        {
          property: "og:image",
          content: "https://avatars.githubusercontent.com/u/102923401?v=4",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "gwyndev.com" },
        { property: "twitter:url", content: "https://gwyndev.com" },
        { name: "twitter:title", content: "Mehmet Ali KOÇAL" },
        {
          name: "twitter:description",
          content:
            "Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!",
        },
        {
          name: "twitter:image",
          content: "https://avatars.githubusercontent.com/u/102923401?v=4",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  image: {
    domains: ['steamcdn-a.akamaihd.net', 'lastfm.freetls.fastly.net']
  }
});
