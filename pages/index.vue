<script setup>
import { useElementVisibility } from "@vueuse/core";
import { useGlobalVariablesStore } from "~/store/globalVariables.js";
import { storeToRefs } from "pinia";
const globalVariables = useGlobalVariablesStore();
const { lang } = storeToRefs(globalVariables);

let reRender = ref(0);
watch(lang, () => {
  reRender.value++;
});

const { data: mostPlayedGames } = useLazyAsyncData("mostPlayedGames", () =>
  $fetch("/api/games/mostPlayedGames")
);
const { data: recentlyPlayedGames } = useLazyAsyncData(
  "recentlyPlayedGames",
  () => $fetch("/api/games/recentlyPlayedGames")
);
const { data: mostListenedTracks } = useLazyAsyncData(
  "mostListenedTracks",
  () => $fetch("/api/songs/topTracks")
);
const { data: recentlyListenedTracks } = useLazyAsyncData(
  "recentlyListenedTracks",
  () => $fetch("/api/songs/recentTracks/")
);

function calculateLastTimePlayed(seconds) {
  const resultInDays = Math.round((Date.now() / 1000 - seconds) / 60 / 60 / 24);
  if (resultInDays < 1) return lang.value.today;
  else if (resultInDays < 2) return lang.value.yesterday;
  else if (resultInDays > 365)
    return (resultInDays / 365).toFixed(0) + ` ${lang.value.yearsAgo}`;
  else return resultInDays + ` ${lang.value.daysAgo}`;
}

function calculatePlayTime(minutes, shouldBeRounded) {
  if (minutes < 2) return `${minutes} ${lang.value.minute}`;
  else if (minutes < 60) return minutes + ` ${lang.value.minutes}`;
  else if (minutes / 60 < 1.2) return lang.value.oneHour;
  else {
    if (
      (minutes / 60).toFixed(1) % 1 < 0.2 ||
      (minutes / 60).toFixed(1) % 1 >= 0.8 ||
      shouldBeRounded == true
    )
      return `${Math.round(minutes / 60)} ${lang.value.hours}`;
    else return `${(minutes / 60).toFixed(1)} ${lang.value.hours}`;
  }
}

var isHovering = ref(null);
const target = ref(null);
const targetIsVisible = useElementVisibility(target);

var animationDelay = 0;
function increaseDelay() {
  if (animationDelay == 300) {
    animationDelay = 0;
  }
  animationDelay += 100;
  return animationDelay;
}
function animDirection(itemIndex) {
  if (itemIndex < 3) return "fade-right";
  else return "fade-left";
}

const proficiencies = [
  {
    name: "HTML5",
    firstColor: "#c2410c",
    secondColor: "#f97316",
    proficiencyLevel: "w-full",
  },
  {
    name: "CSS3",
    firstColor: "#2563eb",
    secondColor: "#06b6d4",
    proficiencyLevel: "w-8/10",
  },
  {
    name: "Tailwind CSS",
    firstColor: "#0e7490",
    secondColor: "#06b6d4",
    proficiencyLevel: "w-8/10",
  },
  {
    name: "JavaScript",
    firstColor: "#f59e0b",
    secondColor: "#fbbf24",
    proficiencyLevel: "w-7/10",
  },
  {
    name: "Vue.JS",
    firstColor: "#059669",
    secondColor: "#334155",
    proficiencyLevel: "w-6/10",
  },
  {
    name: "Nuxt.JS",
    firstColor: "#10b981",
    secondColor: "#2dd4bf",
    proficiencyLevel: "w-6/10",
  },
  {
    name: "C#",
    firstColor: "#7c3aed",
    secondColor: "#d946ef",
    proficiencyLevel: "w-5/10",
  },
  {
    name: "MySQL",
    firstColor: "#2563eb",
    secondColor: "#475569",
    proficiencyLevel: "w-7/10",
  },
  {
    name: "Unity3D",
    firstColor: "#000",
    secondColor: "#374151",
    proficiencyLevel: "w-4/10",
  },
  {
    name: "Blender",
    firstColor: "#ea580c",
    secondColor: "#fb923c",
    proficiencyLevel: "w-2/10",
  },
  {
    name: "Adobe Photoshop",
    firstColor: "#1E293B",
    secondColor: "#0ea5e9",
    proficiencyLevel: "w-5/10",
  },
  {
    name: "Adobe After Effects",
    firstColor: "#1e40af",
    secondColor: "#6366f1",
    proficiencyLevel: "w-5/10",
  },
];
</script>

<template>
  <main>
    <div class="<md:hidden absolute w-full h-50vh z-0 landing-section-color" />
    <div
      class="<md:hidden absolute w-full h-50vh z-10 landing-section-color-wrapper"
    />

    <div
      class="mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5 relative z-20 gap-y-20 flex flex-col"
    >
      <section id="hello" class="pt-60 <lg:pt-40">
        <div class="flex text-4xl <md:text-3xl font-bold mb-6">
          <NuxtLink
            to="#hello"
            class="text-sky-500 hover:text-sky-300 cursor-pointer transition-colors duration-300 mr-2"
          >
            #
          </NuxtLink>
          <GlitchText
            :key="reRender"
            :id="'helloTitle'"
            :time="4200"
            :messages="[lang.hello]"
            :defaultText="lang.loading"
          />
        </div>
        <GlitchText
          :key="reRender"
          :id="'infoAboutMe'"
          class="text-2xl <md:text-xl font-normal text-slate-400 min-h-24"
          :time="2000"
          :messages="[
            lang.infoAboutMe1,
            lang.infoAboutMe2,
            lang.infoAboutMe3,
            lang.infoAboutMe4,
            lang.infoAboutMe5,
          ]"
        />
      </section>

      <section class="-mt-16">
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <NuxtLink
            id="currently"
            to="#currently"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >
            #
          </NuxtLink>
          {{ lang.currentlyWorkingOnTitle }}
        </h1>
        <p
          class="text-2xl <md:text-xl font-normal text-slate-400"
          data-aos="fade-right"
          data-aos-duration="550"
        >
          {{
            lang.currentlyWorkingOn.emoji + " " + lang.currentlyWorkingOn.role
          }}
          <NuxtLink
            :to="lang.currentlyWorkingOn.link"
            target="_blank"
            class="inline font-bold text-slate-200"
            :class="{
              'pointer-events-none':
                lang.currentlyWorkingOn.link == '' ||
                lang.currentlyWorkingOn.hasOwnProperty('link') == false,
            }"
          >
            {{ " " + lang.currentlyWorkingOn.name }}
          </NuxtLink>
          {{ ", " + lang.currentlyWorkingOn.summary + " - " }}
          <NuxtLink
            to="/projectDetails/currentWork"
            class="text-cyan-500 font-medium"
          >
            {{ lang.seeDetails }}
          </NuxtLink>
        </p>
      </section>

      <section>
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <NuxtLink
            id="previousProjects"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
            to="#previousProjects"
          >
            #
          </NuxtLink>
          {{ lang.previousProjectsTitle }}
        </h1>
        <p
          v-for="project in lang.previousProjects"
          :key="project.name"
          class="text-2xl <md:text-xl font-normal text-slate-400 mb-2"
          data-aos="fade-right"
          data-aos-duration="550"
          :data-aos-delay="increaseDelay()"
        >
          {{ project.emoji + " " + project.role }}
          <NuxtLink
            :to="project.link"
            target="_blank"
            class="inline font-bold text-slate-200"
            :class="{
              'pointer-events-none':
                project.link == '' || project.hasOwnProperty('link') == false,
            }"
          >
            {{ " " + project.name }}
          </NuxtLink>
          {{ ", " + project.summary + " - " }}
          <NuxtLink
            :to="'/projectDetails/' + lang.previousProjects.indexOf(project)"
            class="text-cyan-500 font-medium"
          >
            {{ lang.seeDetails }}
          </NuxtLink>
        </p>
      </section>

      <section>
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <NuxtLink
            to="#proficiencies"
            id="proficiencies"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >
            #
          </NuxtLink>
          {{ lang.proficiencies }}
        </h1>
        <div ref="target" class="flex w-full flex-wrap justify-between gap-x-4">
          <div
            v-for="item in proficiencies"
            :key="item.name"
            data-aos="fade-right"
            :data-aos-delay="`${increaseDelay()}`"
            class="w-[calc(50%-1rem)] <lg:w-full transition-all duration-300"
          >
            <h2 class="font-semibold text-2xl <md:text-xl">{{ item.name }}</h2>
            <div class="bg-slate-900 rounded-md">
              <div
                class="py-5 rounded-md my-3 transition-all duration-2000"
                :class="[targetIsVisible ? `${item.proficiencyLevel}` : 'w-0']"
                :style="[
                  `box-shadow: 20px 0 60px ${item.secondColor}, -20px 0 60px #000;
                    background:linear-gradient(to right,${item.firstColor},${item.secondColor})`,
                ]"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <NuxtLink
            to="#recentGames"
            id="recentGames"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >
            #
          </NuxtLink>
          {{ lang.recentlyPlayedGames }}
        </h1>
        <div
          class="flex flex-wrap gap-x-3 gap-y-2"
          v-if="recentlyPlayedGames?.api != null"
        >
          <div
            class="w-[calc(33.3%-0.5rem)] <2xl:w-[calc(50%-0.5rem)] <md:w-full transition-all duration-300 border-1 border-transparent hover:border-sky-400 rounded-md"
            v-for="item in recentlyPlayedGames?.api"
            :key="item.name"
            :data-aos="`${animDirection(
              recentlyPlayedGames?.api.indexOf(item)
            )}`"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div
              v-if="item.img_icon_url == ''"
              class="w-full text-2xl <md:text-xl flex relative rounded-md"
            >
              <nuxt-img
                format="webp"
                quality="70"
                class="w-full"
                sizes="sm:100vw"
                src="https://steamcdn-a.akamaihd.net/steam/apps/753/header.jpg"
                alt="Steam Logo"
              />
              <h2
                class="absolute w-full h-full bg-black/60 flex justify-center items-center text-center transition duration-300 hover:bg-black/90"
              >
                {{ lang.gameNotAvailable }}
              </h2>
            </div>

            <div
              v-else
              class="relative inline-flex overflow-hidden w-full rounded-md"
            >
              <nuxt-img
                format="webp"
                quality="70"
                sizes="sm:100vw"
                class="transform transition-all duration-300 w-full"
                :class="{
                  'scale-110 filter blur-[1px]':
                    isHovering == recentlyPlayedGames?.api.indexOf(item),
                }"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name"
              />
              <NuxtLink
                @mouseenter="
                  isHovering = recentlyPlayedGames?.api.indexOf(item)
                "
                @mouseleave="isHovering = null"
                class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
                :to="`https://store.steampowered.com/app/${item.appid}/`"
                target="_blank"
              >
                <h2 class="text-2xl <md:text-xl font-bold text-center">
                  {{ item.name }}
                </h2>
                <p class="text-lg <md:text-base font-semibold mt-2 -mb-2">
                  {{
                    calculatePlayTime(item.playtime_2weeks, false) +
                    ` ${lang.inLastTwoWeeks}`
                  }}
                </p>
                <p class="text-lg <md:text-base font-semibold">
                  {{
                    calculatePlayTime(item.playtime_forever, false) +
                    ` ${lang.total}`
                  }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="text-2xl <md:text-xl font-normal text-slate-400">
          {{ lang.noGamesPlayed }}
        </div>
      </section>

      <section>
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <NuxtLink
            to="#topGames"
            id="topGames"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >
            #
          </NuxtLink>
          {{ lang.mostPlayedGames }}
        </h1>
        <div
          class="flex flex-wrap gap-2 justify-between"
          v-if="mostPlayedGames?.api != null"
        >
          <div
            class="w-[calc(33.3%-0.5rem)] <2xl:w-[calc(50%-0.5rem)] <md:w-full transition-all duration-300 border-1 border-transparent hover:border-sky-400 rounded-md"
            v-for="item in mostPlayedGames?.api"
            :key="item.name"
            :data-aos="`${animDirection(mostPlayedGames?.api.indexOf(item))}`"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div class="relative inline-flex overflow-hidden w-full rounded-md">
              <nuxt-img
                format="webp"
                quality="70"
                sizes="sm:100vw"
                class="transform transition-all duration-300 filter w-full"
                :class="{
                  'scale-110 blur-[1px]':
                    isHovering == mostPlayedGames?.api.indexOf(item) + 6,
                }"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name"
              />
              <NuxtLink
                @mouseenter="
                  isHovering = mostPlayedGames?.api.indexOf(item) + 6
                "
                @mouseleave="isHovering = null"
                class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
                :to="`https://store.steampowered.com/app/${item.appid}/`"
                target="_blank"
              >
                <h2 class="text-2xl <md:text-xl font-bold text-center">
                  {{ item.name }}
                </h2>
                <p class="text-lg <md:text-base font-semibold mt-2 -mb-2">
                  {{
                    `${lang.totalPlaytime}: ` +
                    calculatePlayTime(item.playtime_forever, true)
                  }}
                </p>
                <p class="text-lg <md:text-base font-semibold">
                  {{
                    `${lang.lastPlayed}: ` +
                    calculateLastTimePlayed(item.rtime_last_played)
                  }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section v-if="recentlyListenedTracks?.api[0].hasOwnProperty('@attr')">
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6 w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <NuxtLink
            id="currentlyListening"
            to="#currentlyListening"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
            >♪</NuxtLink
          >
          {{ lang.currentlyListening }}
        </h1>
        <NuxtLink
          class="p-4 pr-14 w-fit rounded-md flex items-center bg-gradient-to-b from-gray-800 to-gray-900 hover:(from-gray-800/80 to-gray-900/80)"
          :to="`${recentlyListenedTracks?.api[0].url}`"
          target="_blank"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <nuxt-img
            format="webp"
            quality="50"
            width="80"
            height="80"
            class="inline mr-5 rounded-sm"
            :src="
              recentlyListenedTracks?.api[0].image[2]['#text'] != ''
                ? `${recentlyListenedTracks?.api[0].image[2]['#text']}`
                : 'https://lastfm.freetls.fastly.net/i/u/174s/4128a6eb29f94943c9d206c08e625904.jpg'
            "
            :alt="`${recentlyListenedTracks?.api[0].name}`"
          />
          <div>
            <p class="text-slate-300/80 font-light text-lg">
              {{ recentlyListenedTracks?.api[0].artist["#text"] }}
            </p>
            <p class="text-slate-200 font-bold text-xl">
              {{ recentlyListenedTracks?.api[0].name }}
            </p>
            <p>{{ recentlyListenedTracks?.api[0].album["#text"] }}</p>
          </div>
        </NuxtLink>
      </section>

      <section class="flex flex-wrap gap-4">
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6 w-full"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <NuxtLink
            to="#recentTracks"
            id="recentTracks"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >
            #
          </NuxtLink>
          {{ lang.recentlyListenedTracks }}
        </h1>
        <div
          class="w-fit <sm:w-full sm:(flex flex-wrap)"
          data-aos="fade-right"
          :data-aos-delay="`${increaseDelay()}`"
          v-for="song in recentlyListenedTracks?.api.filter((song) => {
            return !song.hasOwnProperty('@attr');
          })"
          :key="song.name"
        >
          <NuxtLink
            class="p-4 md:pr-14 flex items-center bg-gradient-to-b from-gray-800 to-gray-900 hover:opacity-80 transition-all duration-300 rounded-md"
            :to="`${song.url}`"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              quality="50"
              width="80"
              height="80"
              class="inline mr-5 rounded-sm"
              :src="
                song.image[2]['#text'] != ''
                  ? `${song.image[2]['#text']}`
                  : 'https://lastfm.freetls.fastly.net/i/u/174s/4128a6eb29f94943c9d206c08e625904.jpg'
              "
              :alt="`${song.name}`"
            />
            <div>
              <p class="text-slate-300/80 font-light text-lg <md:text-base">
                {{ song.artist["#text"] }}
              </p>
              <p class="text-slate-200 font-bold text-xl <md:text-lg">
                {{ song.name }}
              </p>
              <p class="text-gray-400 font-semibold">
                {{ song.album["#text"] }}
              </p>
            </div></NuxtLink
          >
        </div>
      </section>

      <section class="mb-40 flex flex-wrap gap-4">
        <h1
          class="text-4xl <md:text-3xl font-bold mb-6 w-full"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <NuxtLink
            to="#topTracks"
            id="topTracks"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >
            #
          </NuxtLink>
          {{ lang.mostListenedTracks }}
        </h1>
        <div
          class="w-fit <sm:w-full sm:(flex flex-wrap)"
          data-aos="fade-right"
          :data-aos-delay="`${increaseDelay()}`"
          v-for="song in mostListenedTracks?.api"
          :key="song.name"
        >
          <NuxtLink
            class="p-4 md:pr-14 flex items-center bg-gradient-to-b from-gray-800 to-gray-900 hover:opacity-80 transition-all duration-300 rounded-md"
            :to="`${song.url}`"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              quality="50"
              width="80"
              height="80"
              class="inline mr-5 rounded-sm"
              :src="
                song.image[2]['#text'] != ''
                  ? `${song.image[2]['#text']}`
                  : 'https://lastfm.freetls.fastly.net/i/u/174s/4128a6eb29f94943c9d206c08e625904.jpg'
              "
              :alt="`${song.name}`"
            />
            <div>
              <p class="text-slate-300/80 font-light text-lg <md:text-base">
                {{ song.artist.name }}
              </p>
              <p class="text-slate-200 font-bold text-xl <md:text-lg">
                {{ song.name }}
              </p>
              <div class="flex items-center flex-shrink-0">
                <div
                  class="pt-[1px] border-t-2 border-slate-500/80 w-6 mr-4"
                ></div>
                <p class="text-gray-500/80 font-semibold">
                  {{ song.playcount + ` ${lang.listens}` }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>
