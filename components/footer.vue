<script setup>
import { useGlobalVariablesStore } from "@/store/globalVariables.js";
import { storeToRefs } from "pinia";
const globalVariables = useGlobalVariablesStore();
const { lang } = storeToRefs(globalVariables);
let isHovering = ref(null);

const eMail = "root.gwyn@hotmail.com";
const socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/gwyndev/" },
  { name: "GitHub", link: "https://github.com/MehmetAliKOCAL" },
  { name: "Discord", link: "https://discordapp.com/users/554061262229864458" },
  { name: "LastFM", link: "https://www.last.fm/user/GwynDev" },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCqsbqOqrLaKWaJ-1fB1RqyQ",
  },
];
</script>

<template>
  <div
    class="w-full bg-gradient-to-r from-blue-800 via-sky-500 to-blue-800 h-[1px] relative"
  />
  <footer
    class="bg-[rgb(6,6,6)] py-10 font-mono relative z-10 mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5"
  >
    <h1 class="text-lg font-semibold text-center mb-5">
      {{ lang.footerGetInTouchTitle }}
    </h1>
    <div class="flex flex-col justify-center">
      <div class="flex flex-col">
        <h2
          class="mb-3 w-fit mx-auto text-lg font-semibold border-b-2 border-sky-600 px-2"
        >
          {{ lang.footerSocialsTitle }}
        </h2>
        <nav class="flex flex-row flex-wrap w-full gap-x-4 justify-center">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.link"
            target="_blank"
          >
            <div
              @mouseenter="isHovering = social.name"
              @mouseleave="isHovering = null"
              class="flex items-center"
            >
              <IconRenderer
                :iconName="social.name.toLowerCase()"
                class="w-7 mr-1"
              />
              <p
                class="text-sm transition-colors text-gray-400 duration-300"
                :class="{ 'text-slate-100': isHovering === social.name }"
              >
                {{ social.name }}
              </p>
            </div></NuxtLink
          >
        </nav>
      </div>
      <div class="w-fit mx-auto mt-5">
        <h2
          class="mb-3 w-fit mx-auto text-lg font-semibold border-b-2 border-sky-600 px-2"
        >
          {{ lang.footerContactTitle }}
        </h2>
        <a
          :href="`mailto:${eMail}`"
          class="hover:text-slate-100 text-gray-400 transition-colors duration-300 text-sm"
        >
          {{ lang.footerMailMe }} <IconsClick class="w-6" />
        </a>
      </div>
    </div>
  </footer>
  <div
    class="bg-[rgb(6,6,6)] py-3 text-sm border-t-1 border-gray-900 flex items-center justify-center inline-block"
  >
    <NuxtLink
      to="https://github.com/MehmetAliKOCAL/PersonalWebsite"
      target="_blank"
      class="text-gray-400 hover:text-slate-100 transition-all duration-300 text-center mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5"
    >
      {{ lang.footerOpenSource }}
    </NuxtLink>
  </div>
</template>
