// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@kevinmarrec/nuxt-pwa',
    '@nuxt/image',
  ],

  css: ['@/assets/style/main.css'],

  image: {
    domains: ['steamcdn-a.akamaihd.net', 'lastfm.freetls.fastly.net'],
  },

  runtimeConfig: {
    STEAM_WEB_API_KEY: process.env.STEAM_WEB_API_KEY,
    STEAM_ID: process.env.STEAM_ID,
    LASTFM_USERNAME: process.env.LASTFM_USERNAME,
    LASTFM_WEB_API_KEY: process.env.LASTFM_WEB_API_KEY,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Mehmet Ali KOÇAL',
      charset: 'utf-8',
      meta: [
        {
          name: 'description',
          content:
            'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!',
        },
        {
          name: 'keywords',
          content: 'mehmet ali koçal, mehmet ali, gwyndev, gwyn',
        },
        { name: 'author', content: 'Mehmet Ali KOÇAL' },
        { name: 'application-name', content: 'Personal Website of GwynDev' },
        { property: 'og:url', content: 'https://gwyndev.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Mehmet Ali KOÇAL' },
        {
          property: 'og:description',
          content:
            'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!',
        },
        {
          property: 'og:image',
          content: 'https://avatars.githubusercontent.com/u/102923401?v=4',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'gwyndev.com' },
        { property: 'twitter:url', content: 'https://gwyndev.com' },
        { name: 'twitter:title', content: 'Mehmet Ali KOÇAL' },
        {
          name: 'twitter:description',
          content:
            'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!',
        },
        {
          name: 'twitter:image',
          content: 'https://avatars.githubusercontent.com/u/102923401?v=4',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  pwa: {
    workbox: {
      enabled: false,
    },
    icon: {
      fileName: 'favicon.png',
    },
    meta: {
      name: 'GwynDev',
      author: 'Mehmet Ali KOÇAL',
      description:
        'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!',
      theme_color: '#0A0A0A',
      lang: 'en',
      ogTitle: 'Mehmet Ali KOÇAL',
      ogDescription:
        'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!',
      ogHost: 'gwyndev.com',
      ogUrl: 'https://gwyndev.com/',
      twitterCard: 'summary_large_image',
    },
    manifest: {
      name: 'GwynDev',
      short_name: 'GwynDev',
      lang: 'en',
      description:
        'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!',
      start_url: '/',
      display: 'fullscreen',
    },
  },
});
