<template>
  <div
    class="w-full h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center text-xl"
  >
    <p>Sorry, this page is under construction.🥸</p>
    <NuxtLink
      to="/"
      class="bg-black py-3 px-10 mt-10 rounded-md border-sky-400 border-1 transition-all duration-300 hoverShadow"
    >
      Homepage
    </NuxtLink>
  </div>
</template>
<style>
.hoverShadow:hover {
  box-shadow: 0px 0px 20px 1px #1e40af, 0px 0px 10px 2px #38bdf8;
}
</style>
