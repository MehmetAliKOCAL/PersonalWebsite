<script setup>
var isHovering = ref(null);
</script>

<template>
  <header
    class="w-full text-slate-300 fixed top-0 z-30 font-bold text-md font-mono bg-[rgb(6,6,6)] <md:hidden bg-sky-400/10"
  >
    <nav class="flex justify-center gap-x-10 gap-y-4 py-5 px-10 flex flex-wrap">
      <a
        @mouseenter="isHovering = 1"
        @mouseleave="isHovering = null"
        class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
        href="#hello"
        >Hello!
        <hr
          class="border-b-1 border-sky-500 transition-all duration-300"
          :class="[isHovering == 1 ? 'w-full' : 'w-0']"
      /></a>
      <a
        @mouseenter="isHovering = 2"
        @mouseleave="isHovering = null"
        class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
        href="#proficiencies"
        >Proficiencies
        <hr
          class="border-b-1 border-sky-500 transition-all duration-300"
          :class="[isHovering == 2 ? 'w-full' : 'w-0']"
      /></a>
      <a
        @mouseenter="isHovering = 3"
        @mouseleave="isHovering = null"
        class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
        href="#currently"
        >Currently Working On
        <hr
          class="border-b-1 border-sky-500 transition-all duration-300"
          :class="[isHovering == 3 ? 'w-full' : 'w-0']"
      /></a>
      <a
        @mouseenter="isHovering = 4"
        @mouseleave="isHovering = null"
        class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
        href="#recentGames"
        >Games
        <hr
          class="border-b-1 border-sky-500 transition-all duration-300"
          :class="[isHovering == 4 ? 'w-full' : 'w-0']"
      /></a>
      <a
        @mouseenter="isHovering = 5"
        @mouseleave="isHovering = null"
        class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
        href="#recentTracks"
        >Tracks
        <hr
          class="border-b-1 border-sky-500 transition-all duration-300"
          :class="[isHovering == 5 ? 'w-full' : 'w-0']"
      /></a>
    </nav>
    <div
      class="w-full bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 h-[1px]"
    />
  </header>
</template>
