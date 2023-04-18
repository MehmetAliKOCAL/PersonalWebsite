import { defineStore } from "pinia";
import en from "/locales/en.js";
import tr from "/locales/tr.js";

export const useGlobalVariablesStore = defineStore("globalVariables", {
  state: () => ({
    isMobileMenuActive: false,
    lang: en,
  }),
  actions: {
    setLanguage(language) {
      if (language == "tr") {
        this.lang = tr;
      } else this.lang = en;
    },
  },
});
