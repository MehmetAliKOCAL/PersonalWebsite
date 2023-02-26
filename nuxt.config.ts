// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
      ],
      plugins: [
        { src: '~/plugins/aos.client', mode: 'client' },
      ],
})
