import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      // Put your Google Analytics Measurement ID below if you want to use Google Analytics.
      // For more info: https://analytics.google.com/

      id: "G-5T2GDLFX5S",
    },
  });
});
