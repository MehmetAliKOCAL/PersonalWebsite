<script setup>
import { useGlobalVariablesStore } from "~~/store/globalVariables";
let mouseHoverID = ref(null);
let stateCheck = useGlobalVariablesStore();

const headerTabs = [
  { mouseHoverID: 1, href: "/#hello", text: "Hello!" },
  { mouseHoverID: 2, href: "/#proficiencies", text: "Proficiencies" },
  { mouseHoverID: 3, href: "/#currently", text: "Projects" },
  { mouseHoverID: 4, href: "/#recentGames", text: "Games Played" },
  { mouseHoverID: 5, href: "/#recentTracks", text: "Tracks Listened" },
];
</script>

<template>
  <header
    class="w-full text-slate-300 fixed top-0 z-30 text-md font-thin bg-[rgb(6,6,6)]"
  >
    <div
      class="flex py-4 px-60 <2xl:px-40 <xl:px-20 <lg:px-5 items-center justify-between"
    >
      <NuxtLink to="/#hello">
        <img src="/favicon.png" width="40" height="40" alt="GwynDev Logo"
      /></NuxtLink>

      <nav class="<md:hidden flex flex-wrap gap-x-10 gap-y-4">
        <NuxtLink
          v-for="tab in headerTabs"
          @mouseenter="mouseHoverID = tab.mouseHoverID"
          @mouseleave="mouseHoverID = null"
          class="hover:text-sky-400 transition-colors duration-300 text-shadow-xl"
          :to="tab.href"
          >{{ tab.text }}
          <hr
            class="border-b-1 border-sky-500 transition-all duration-300"
            :class="[mouseHoverID == tab.mouseHoverID ? 'w-full' : 'w-0']"
        /></NuxtLink>
      </nav>

      <div class="md:hidden">
        <IconsMenuIcon
          class="hover:cursor-pointer"
          @click="
            stateCheck.isMobileMenuActive = !stateCheck.isMobileMenuActive
          "
        />
        <nav
          :class="[
            stateCheck.isMobileMenuActive
              ? 'visible opacity-100'
              : 'invisible opacity-0',
          ]"
          class="absolute left-0 bg-[rgb(6,6,6)] w-full h-[calc(100vh-40px)] transition-all duration-300 flex flex-col justify-center items-center"
        >
          <NuxtLink
            v-for="tab in headerTabs"
            @click="
              stateCheck.isMobileMenuActive = !stateCheck.isMobileMenuActive
            "
            :to="tab.href"
            class="text-2xl font-semibold mb-4 hover:text-sky-400 transition-colors duration-300"
          >
            {{ tab.text }}
          </NuxtLink>
        </nav>
      </div>
    </div>
    <div
      class="w-full bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 h-[1px]"
    />
  </header>
</template>
