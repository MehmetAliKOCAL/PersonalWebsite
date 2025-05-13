<script setup>
import { useElementVisibility } from "@vueuse/core";
import { useGlobalVariablesStore } from "~/store/globalVariables.js";
import { storeToRefs } from "pinia";
const globalVariables = useGlobalVariablesStore();
const { lang } = storeToRefs(globalVariables);

const { data: recentlyPlayedGames } = useLazyAsyncData(
  "recentlyPlayedGames",
  () => $fetch("/api/games/recentlyPlayedGames")
);
const { data: mostPlayedGames } = useLazyAsyncData("mostPlayedGames", () =>
  $fetch("/api/games/mostPlayedGames")
);
const { data: currentlyListeningTrack } = useLazyAsyncData(
  "currentlyListeningTrack",
  () => $fetch("/api/songs/currentlyListening")
);
const { data: recentlyListenedTracks } = useLazyAsyncData(
  "recentlyListenedTracks",
  () => $fetch("/api/songs/recentTracks/")
);
const { data: mostListenedTracks } = useLazyAsyncData(
  "mostListenedTracks",
  () => $fetch("/api/songs/topTracks")
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
      shouldBeRounded
    )
      return `${Math.round(minutes / 60)} ${lang.value.hours}`;
    else return `${(minutes / 60).toFixed(1)} ${lang.value.hours}`;
  }
}

let isHovering = ref(null);
const target = ref(null);
const targetIsVisible = useElementVisibility(target);

let animationDelay = 0;
function increaseDelay() {
  if (animationDelay === 300) animationDelay = 0;
  animationDelay += 100;
  return animationDelay;
}
function animDirection(itemIndex) {
  if (itemIndex < 3) return "fade-right";
  else return "fade-left";
}

let activeColorIndex = ref(0);
const backgroundColors = [
  "bg-slate-800",
  "bg-zinc-800",
  "bg-stone-800",
  "bg-rose-900",
  "bg-orange-900",
  "bg-yellow-900",
  "bg-green-900",
  "bg-emerald-900",
  "bg-sky-900",
  "bg-indigo-900",
  "bg-violet-900",
];

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
    name: "Windi CSS",
    firstColor: "#52C7F0",
    secondColor: "#348BEE",
    proficiencyLevel: "w-7/10",
  },
  {
    name: "JavaScript",
    firstColor: "#f59e0b",
    secondColor: "#fbbf24",
    proficiencyLevel: "w-7/10",
  },

  {
    name: "TypeScript",
    firstColor: "#5994d1",
    secondColor: "#3079C6",
    proficiencyLevel: "w-4/10",
  },
  {
    name: "Vue.JS",
    firstColor: "#059669",
    secondColor: "#334155",
    proficiencyLevel: "w-7/10",
  },
  {
    name: "Nuxt.JS",
    firstColor: "#10b981",
    secondColor: "#2dd4bf",
    proficiencyLevel: "w-8/10",
  },
  {
    name: "Next.JS",
    firstColor: "#000",
    secondColor: "#4d4d4d",
    proficiencyLevel: "w-3/10",
  },
  {
    name: "Nest.JS",
    firstColor: "#e33f66",
    secondColor: "#E02A55",
    proficiencyLevel: "w-3/10",
  },
  {
    name: "Socket.IO",
    firstColor: "#000",
    secondColor: "#4d4d4d",
    proficiencyLevel: "w-3/10",
  },
  {
    name: "Prisma",
    firstColor: "#567180",
    secondColor: "#0D344A",
    proficiencyLevel: "w-2/10",
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
    proficiencyLevel: "w-3/10",
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

onMounted(() => {
  (function cycleActiveColorIndex() {
    setTimeout(() => {
      if (activeColorIndex.value === backgroundColors?.length - 1) {
        activeColorIndex.value = 0;
      } else activeColorIndex.value++;
      cycleActiveColorIndex();
    }, 3000);
  })();
});
</script>

<template>
  <main class="relative mx-auto max-w-[2000px]">
    <div
      class="<md:hidden absolute w-full h-50vh z-0 transition-all duration-3000"
      :class="backgroundColors[activeColorIndex]"
    />
    <div
      class="<md:hidden absolute w-full h-50vh z-10 landing-section-color-wrapper"
    />

    <div
      class="mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5 relative z-20 gap-y-20 flex flex-col"
    >
      <section id="hello" class="pt-60 <lg:pt-40">
        <div class="flex text-3xl <md:text-2xl font-bold mb-3">
          <NuxtLink
            to="#hello"
            class="text-sky-500 hover:text-sky-300 cursor-pointer transition-colors duration-300 mr-2"
          >
            #
          </NuxtLink>
          <GlitchedText
            :key="lang"
            :id="'helloTitle'"
            :time="4200"
            :messages="[lang.hello]"
            :defaultText="lang.loading"
          />
        </div>
        <GlitchedText
          :key="lang"
          :id="'infoAboutMe'"
          class="text-xl <md:text-lg font-normal text-slate-400 min-h-24"
          :time="2000"
          :messages="lang.infoAboutMe"
        />
      </section>

      <section v-if="lang.currentlyWorkingOn" class="-mt-16">
        <h1
          class="text-3xl <md:text-2xl font-bold mb-3"
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
          v-for="project in lang.currentlyWorkingOn"
          :key="project"
          class="text-xl <md:text-lg font-normal text-slate-400"
          data-aos="fade-right"
          data-aos-duration="550"
        >
          {{ project.emoji + " " + project.role }}
          <NuxtLink
            :to="project.link"
            target="_blank"
            class="inline font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
            :class="{
              'pointer-events-none':
                project.link === '' || !project.hasOwnProperty('link'),
            }"
          >
            {{ " " + project.name }}
          </NuxtLink>
          {{ ", " + project.summary }}
        </p>
      </section>

      <section v-if="lang?.previousProjects">
        <h1
          class="text-3xl <md:text-2xl font-bold mb-3"
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
          :key="project"
          class="text-xl <md:text-lg font-normal text-slate-400"
          data-aos="fade-right"
          data-aos-duration="550"
          :data-aos-delay="increaseDelay()"
        >
          {{ project.emoji + " " + project.role }}
          <NuxtLink
            :to="project.link"
            target="_blank"
            class="inline font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
            :class="{
              'pointer-events-none':
                project.link === '' || !project.hasOwnProperty('link'),
            }"
          >
            {{ " " + project.name }}
          </NuxtLink>
          {{ ", " + project.summary }}
        </p>
      </section>

      <section v-if="proficiencies">
        <h1
          class="text-3xl <md:text-2xl font-bold mb-6"
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
            <h2 class="font-semibold text-xl <md:text-lgtext-2xl <md:text-xl">
              {{ item.name }}
            </h2>
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
          class="text-3xl <md:text-2xl font-bold mb-6"
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
        <div v-if="recentlyPlayedGames" class="flex flex-wrap gap-3">
          <div
            class="w-[calc(33.3%-0.5rem)] <2xl:w-[calc(50%-0.5rem)] <md:w-full border-1 border-transparent hover:(border-sky-400 shadow-skyBloom) rounded-md"
            v-for="item in recentlyPlayedGames"
            :key="item.name"
            :data-aos="`${animDirection(recentlyPlayedGames.indexOf(item))}`"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div
              v-if="item.img_icon_url === ''"
              class="w-full text-xl <md:text-lg flex relative rounded-md"
            >
              <NuxtImg
                format="webp"
                quality="70"
                class="w-full"
                sizes="sm:100vw"
                src="/steamBanner.webp"
                alt="Steam Logo"
              />
              <h2
                class="absolute w-full h-full bg-black/60 flex justify-center items-center text-center transition duration-300 hover:bg-black/90"
              >
                {{ lang.gameNotAvailable }}
              </h2>
            </div>

            <div v-else class="relative flex overflow-hidden w-full rounded-md">
              <NuxtImg
                format="webp"
                quality="70"
                sizes="sm:100vw"
                class="transform transition-all duration-300 w-full"
                :class="{
                  'scale-110 filter blur-[1px]':
                    isHovering === recentlyPlayedGames.indexOf(item),
                }"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name"
              />
              <NuxtLink
                @mouseenter="isHovering = recentlyPlayedGames.indexOf(item)"
                @mouseleave="isHovering = null"
                class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
                :to="`https://store.steampowered.com/app/${item.appid}/`"
                target="_blank"
              >
                <h2 class="text-xl <md:text-lg font-bold text-center">
                  {{ item.name }}
                </h2>
                <p class="font-semibold mt-2 -mb-2">
                  {{
                    calculatePlayTime(item.playtime_2weeks, false) +
                    ` ${lang.inLastTwoWeeks}`
                  }}
                </p>
                <p class="font-semibold">
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

      <section v-if="mostPlayedGames">
        <h1
          class="text-3xl <md:text-2xl font-bold mb-6"
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
        <div class="flex flex-wrap gap-3">
          <div
            class="w-[calc(33.3%-0.5rem)] <2xl:w-[calc(50%-0.5rem)] <md:w-full border-1 border-transparent hover:(border-sky-400 shadow-skyBloom) rounded-md relative flex overflow-hidden"
            v-for="item in mostPlayedGames"
            :key="item.name"
            :data-aos="`${animDirection(mostPlayedGames.indexOf(item))}`"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <NuxtImg
              format="webp"
              quality="70"
              sizes="sm:100vw"
              class="transform transition-all duration-300 filter w-full"
              :class="{
                'scale-110 blur-[1px]':
                  isHovering === mostPlayedGames.indexOf(item) + 6,
              }"
              :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
              :alt="item.name"
            />
            <NuxtLink
              @mouseenter="isHovering = mostPlayedGames.indexOf(item) + 6"
              @mouseleave="isHovering = null"
              class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
              :to="`https://store.steampowered.com/app/${item.appid}/`"
              target="_blank"
            >
              <h2 class="text-xl <md:text-lg font-bold text-center">
                {{ item.name }}
              </h2>
              <p class="font-semibold mt-2 -mb-2">
                {{
                  `${lang.totalPlaytime}: ` +
                  calculatePlayTime(item.playtime_forever, true)
                }}
              </p>
              <p class="font-semibold">
                {{
                  `${lang.lastPlayed}: ` +
                  calculateLastTimePlayed(item.rtime_last_played)
                }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section v-if="currentlyListeningTrack" class="leading-3">
        <h1
          class="text-3xl <md:text-2xl font-bold mb-4 w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <NuxtLink
            id="currentlyListening"
            to="#currentlyListening"
            class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
            >♪</NuxtLink
          >
          <div class="ml-2 inline-flex items-center">
            <p>{{ lang.currentlyListening }}</p>
            <div class="flex ml-3">
              <div
                v-for="soundBar in 5"
                :key="soundBar"
                class="bg-gray-400 animate-sound bottom-1 absolute h-1 w-[3px]"
              />
            </div>
          </div>
        </h1>
        <NuxtLink
          style="transition-property: all; transition-duration: 300ms"
          class="sm:pr-15 flex items-center bg-gradient-to-b from-[rgb(20,20,20)] to-[rgb(15,15,15)] border-1 border-transparent hover:(border-sky-400 shadow-skyBloom) rounded-lg bg-clip-padding w-fit <sm:w-full"
          :to="`${currentlyListeningTrack.url}`"
          target="_blank"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <NuxtImg
            format="webp"
            quality="50"
            width="60"
            height="60"
            class="inline m-4 mr-5 rounded-sm"
            :src="
              currentlyListeningTrack.image[2]['#text'] ||
              '/dummyTrackCover.webp'
            "
            :alt="`${currentlyListeningTrack.name}`"
          />
          <div>
            <p class="text-slate-300/80 font-light">
              {{ currentlyListeningTrack.artist["#text"] }}
            </p>
            <p class="text-slate-200 font-bold text-lg">
              {{ currentlyListeningTrack.name }}
            </p>
            <p>{{ currentlyListeningTrack.album["#text"] }}</p>
          </div>
        </NuxtLink>
      </section>

      <section
        v-if="recentlyListenedTracks"
        class="flex flex-wrap gap-2 leading-3"
      >
        <h1
          class="text-3xl <md:text-2xl font-bold mb-2 w-full"
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
          v-for="song in recentlyListenedTracks"
          :key="song.name"
        >
          <NuxtLink
            class="sm:pr-15 flex items-center bg-gradient-to-b from-[rgb(20,20,20)] to-[rgb(15,15,15)] border-1 border-transparent hover:(border-sky-400 shadow-skyBloom) transition-all duration-300 rounded-lg bg-clip-padding"
            :to="`${song.url}`"
            target="_blank"
          >
            <NuxtImg
              format="webp"
              quality="50"
              width="60"
              height="60"
              class="inline m-4 mr-5 rounded-sm"
              :src="song.image[2]['#text'] || '/dummyTrackCover.webp'"
              :alt="`${song.name}`"
            />
            <div>
              <p class="text-gray-400 font-light">
                {{ song.artist["#text"] }}
              </p>
              <p class="text-gray-200 font-bold text-lg">
                {{ song.name }}
              </p>
              <p class="text-gray-400 font-medium">
                {{ song.album["#text"] }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section
        v-if="mostListenedTracks"
        class="mb-40 flex flex-wrap gap-2 leading-3"
      >
        <h1
          class="text-3xl <md:text-2xl font-bold mb-2 w-full"
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
          v-for="song in mostListenedTracks"
          :key="song.name"
        >
          <NuxtLink
            class="sm:pr-15 flex items-center bg-gradient-to-b from-[rgb(20,20,20)] to-[rgb(15,15,15)] border-1 border-transparent hover:(border-sky-400 shadow-skyBloom) transition-all duration-300 rounded-md bg-clip-padding"
            :to="`${song.url}`"
            target="_blank"
          >
            <NuxtImg
              format="webp"
              quality="50"
              width="60"
              height="60"
              class="inline m-4 mr-5 rounded-sm"
              :src="song.image || '/dummyTrackCover.webp'"
              :alt="`${song.name}`"
            />
            <div>
              <p class="text-gray-400 font-light">
                {{ song.artist.name }}
              </p>
              <p class="text-gray-200 font-bold text-lg">
                {{ song.name }}
              </p>
              <div class="flex items-center flex-shrink-0">
                <div
                  class="pt-[1px] border-b-2 border-slate-600/80 w-6 mr-2 mt-1"
                />
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

<style>
@keyframes sound {
  0% {
    opacity: 0.35;
    height: 3px;
  }
  100% {
    opacity: 1;
    height: 20px;
  }
}

.animate-sound:nth-child(1) {
  margin-left: 1px;
  animation-duration: 624ms;
}
.animate-sound:nth-child(2) {
  margin-left: 7px;
  animation-duration: 682ms;
}
.animate-sound:nth-child(3) {
  margin-left: 13px;
  animation-duration: 619ms;
}
.animate-sound:nth-child(4) {
  margin-left: 19px;
  animation-duration: 674ms;
}
.animate-sound:nth-child(5) {
  margin-left: 25px;
  animation-duration: 626ms;
}
</style>
