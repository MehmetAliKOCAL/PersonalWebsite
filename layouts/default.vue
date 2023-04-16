<script setup>
import { useGlobalVariablesStore } from "~~/store/globalVariables";
const stateCheck = useGlobalVariablesStore();

watchEffect(() => {
  if (process.client) {
    const html = document.getElementsByTagName("html")[0];

    if (stateCheck.isMobileMenuActive) html.style.overflowY = "hidden";
    else html.style.overflowY = "visible";
  }
});
</script>
<template>
  <div
    class="transition-all duration-300 min-h-screen min-w-full h-full relative bg-[rgb(10,10,10)] text-slate-200/95"
  >
    <NuxtLoadingIndicator :color="'#0ea5e9'" />
    <Header />
    <slot />
    <Footer />
  </div>
</template>
