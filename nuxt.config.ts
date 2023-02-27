// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@pinia/nuxt",],
  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' },
  ],
});
