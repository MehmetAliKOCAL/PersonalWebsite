// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@pinia/nuxt", '@vueuse/nuxt',],
  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' },
  ],
});
