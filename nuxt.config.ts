// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@pinia/nuxt", "@vueuse/nuxt"],
  plugins: [{ src: "~/plugins/aos.client", mode: "client" }],
  
  runtimeConfig:{
    STEAM_WEB_API_KEY: process.env.STEAM_WEB_API_KEY,
    STEAM_ID: process.env.STEAM_ID,
    LASTFM_USERNAME: process.env.LASTFM_USERNAME,
    LASTFM_WEB_API_KEY: process.env.LASTFM_WEB_API_KEY,
  },

  app:{
    head:{
      htmlAttrs:{
        lang:'en'
      },
      title:'Mehmet Ali KOÇAL',
      charset:'utf-8',
      meta:[
        {name:'description',content:'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!'},
        {property:'og:url',content:'https://gwyndev.com'},
        {property:'og:type',content:'website'},
        {property:'og:title',content:'Mehmet Ali KOÇAL'},
        {property:'og:description',content:'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!'},
        {property:'og:image',content:'https://avatars.githubusercontent.com/u/102923401?v=4'},
        {name:'twitter:card',content:'summary_large_image'},
        {property:'twitter:domain',content:'gwyndev.com'},
        {property:'twitter:url',content:'https://gwyndev.com'},
        {name:'twitter:title',content:'Mehmet Ali KOÇAL'},
        {name:'twitter:description',content:'Mehmet is a front-end web developer, student, and video game lover. He develops websites or tries to make games in his spare time. Click to learn more!'},
        {name:'twitter:image',content:'https://avatars.githubusercontent.com/u/102923401?v=4'},
      ],
      link:[{rel:'icon',type:'image/png',href:'/favicon.png'}]
    }
  }
});