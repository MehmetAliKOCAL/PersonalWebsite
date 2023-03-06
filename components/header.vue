<script setup>
var isHovering = ref(null);
</script>

<template>
  <div
    class="w-full text-slate-300 fixed top-0 z-30 flex justify-center gap-x-10 gap-y-4 <md:gap-x-4 py-4 px-10 font-bold text-md font-mono backdrop-filter backdrop-blur-sm bg-sky-400/10 flex flex-wrap"
  >
    <a
      @mouseenter="isHovering = 1"
      @mouseleave="isHovering = null"
      class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
      href="#hello"
      >Hello!
      <hr
        class="border-b-2 border-sky-500 transition-all duration-300"
        :class="[isHovering == 1 ? 'w-full' : 'w-0']"
    /></a>
    <a
      @mouseenter="isHovering = 2"
      @mouseleave="isHovering = null"
      class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
      href="#proficiencies"
      >Proficiencies
      <hr
        class="border-b-2 border-sky-500 transition-all duration-300"
        :class="[isHovering == 2 ? 'w-full' : 'w-0']"
    /></a>
    <a
      @mouseenter="isHovering = 3"
      @mouseleave="isHovering = null"
      class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
      href="#currently"
      >Currently Working On
      <hr
        class="border-b-2 border-sky-500 transition-all duration-300"
        :class="[isHovering == 3 ? 'w-full' : 'w-0']"
    /></a>
    <a
      @mouseenter="isHovering = 4"
      @mouseleave="isHovering = null"
      class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
      href="#recentGames"
      >Games
      <hr
        class="border-b-2 border-sky-500 transition-all duration-300"
        :class="[isHovering == 4 ? 'w-full' : 'w-0']"
    /></a>
    <a
      @mouseenter="isHovering = 5"
      @mouseleave="isHovering = null"
      class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
      href="#recentTracks"
      >Tracks
      <hr
        class="border-b-2 border-sky-500 transition-all duration-300"
        :class="[isHovering == 5 ? 'w-full' : 'w-0']"
    /></a>
  </div>
</template>
