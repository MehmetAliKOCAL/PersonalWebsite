import { defineStore } from "pinia";

export const useGlobalVariablesStore = defineStore("globalVariables", {
  state: () => ({
    isMobileMenuActive: false,
  }),
});
