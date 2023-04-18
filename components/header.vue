<script setup>
import { useGlobalVariablesStore } from "~/store/globalVariables.js";
import { storeToRefs } from "pinia";
const globalVariables = useGlobalVariablesStore();
const { lang } = storeToRefs(globalVariables);
let mouseHoverID = ref(null);

const headerTabs = [
  { mouseHoverID: 1, href: "/#hello", text: lang.value.headerHello },
  {
    mouseHoverID: 2,
    href: "/#proficiencies",
    text: lang.value.headerProficiencies,
  },
  { mouseHoverID: 3, href: "/#currently", text: lang.value.headerProjects },
  {
    mouseHoverID: 4,
    href: "/#recentGames",
    text: lang.value.headerGamesPlayed,
  },
  {
    mouseHoverID: 5,
    href: "/#recentTracks",
    text: lang.value.headerTracksListened,
  },
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
        <nuxt-img
          loading="lazy"
          format="webp"
          quality="70"
          src="/favicon.png"
          width="40"
          height="40"
          alt="GwynDev Logo"
      /></NuxtLink>

      <nav class="<md:hidden flex flex-wrap gap-x-5 gap-y-4">
        <NuxtLink
          v-for="tab in headerTabs"
          @mouseenter="mouseHoverID = tab.mouseHoverID"
          @mouseleave="mouseHoverID = null"
          class="hover:text-sky-500 transition-colors duration-300 text-shadow-xl"
          :to="tab.href"
          >{{ tab.text }}
          <hr
            class="border-b-1 border-sky-500 transition-all duration-300"
            :class="[mouseHoverID == tab.mouseHoverID ? 'w-full' : 'w-0']"
        /></NuxtLink>
      </nav>

      <div
        @mouseenter="mouseHoverID = 'lang'"
        @mouseleave="mouseHoverID = null"
      >
        <div class="flex justify-center items-center">
          <IconsLanguages />
          <IconsArrowDown />
        </div>
        <div
          :class="[
            mouseHoverID != 'lang'
              ? 'opacity-0 invisible'
              : 'opacity-100 visible',
          ]"
          class="transition-all duration-300 absolute px-5 rounded-md py-4 bg-[rgb(25,25,25)] transform translate-x-[-35%] space-y-3 mt-5"
        >
          <button
            @click="globalVariables.setLanguage('en')"
            class="transition-colors duration-300 hover:text-sky-500 cursor-pointer font-semibold text-gray-400 block"
          >
            English
          </button>
          <button
            @click="globalVariables.setLanguage('tr')"
            class="transition-colors duration-300 hover:text-sky-500 cursor-pointer font-semibold text-gray-400 block"
          >
            Türkçe
          </button>
        </div>
      </div>

      <div class="md:hidden">
        <IconsMenuIcon
          class="hover:cursor-pointer"
          @click="
            globalVariables.isMobileMenuActive =
              !globalVariables.isMobileMenuActive
          "
        />
        <nav
          :class="[
            globalVariables.isMobileMenuActive
              ? 'visible opacity-100'
              : 'invisible opacity-0',
          ]"
          class="absolute left-0 bg-[rgb(6,6,6)] w-full h-[calc(100vh-40px)] transition-all duration-300 flex flex-col justify-center items-center"
        >
          <NuxtLink
            v-for="tab in headerTabs"
            @click="
              globalVariables.isMobileMenuActive =
                !globalVariables.isMobileMenuActive
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
