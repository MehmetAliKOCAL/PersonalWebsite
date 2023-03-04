// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@pinia/nuxt", "@vueuse/nuxt"],
  plugins: [{ src: "~/plugins/aos.client", mode: "client" }],
  
  runtimeConfig:{
    STEAM_WEB_API_KEY: process.env.STEAM_WEB_API_KEY,
    STEAM_ID: process.env.STEAM_ID,
    LASTFM_USERNAME: process.env.LASTFM_USERNAME,
    LASTFM_WEB_API_KEY: process.env.LASTFM_WEB_API_KEY,
  }
});