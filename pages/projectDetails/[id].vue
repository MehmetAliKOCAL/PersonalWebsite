<script setup>
  import { useGlobalVariablesStore } from '~/store/globalVariables.js';
  import { storeToRefs } from 'pinia';
  const globalVariables = useGlobalVariablesStore();
  const { lang } = storeToRefs(globalVariables);
</script>
<template>
  <div
    class="mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5 py-90 flex items-center justify-center flex-col"
  >
    <p>{{ lang.pageUnderConstruction }}</p>
    <NuxtLink
      to="/"
      class="bg-black py-3 px-10 mt-10 rounded-md border-sky-400 border-1 transition-all duration-300 hoverShadow"
    >
      {{ lang.buttonHomepage }}
    </NuxtLink>
  </div>
</template>
