<script setup>
import { useGlobalVariablesStore } from '~/store/globalVariables.js';
import { storeToRefs } from 'pinia';
const globalVariables = useGlobalVariablesStore();
const { lang } = storeToRefs(globalVariables);

let reRender = ref(0);
watch(lang, () => {
  reRender.value++;
});

watchEffect(() => {
  if (process.client) {
    const html = document.getElementsByTagName('html')[0];

    if (globalVariables.isMobileMenuActive) html.style.overflowY = 'hidden';
    else html.style.overflowY = 'visible';
  }
});

if (process.client)
  globalVariables.setLanguage(
    localStorage.getItem('lang') || navigator.language.split('-')[0]
  );
</script>
<template>
  <div
    class="transition-all duration-300 min-h-screen min-w-full h-full relative bg-primary text-slate-200/95"
  >
    <NuxtLoadingIndicator :color="'#0ea5e9'" />
    <Header :key="reRender" />
    <slot />
    <Footer :key="reRender" />
  </div>
</template>
