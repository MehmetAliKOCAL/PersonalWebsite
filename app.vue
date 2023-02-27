<script setup>
import {
  useRecentGamesStore,
  useMostPlayedGamesStore,
} from "~~/store/steamInfo";
const recentGames = useRecentGamesStore();
const topGames = useMostPlayedGamesStore();
var recentlyPlayedGames = reactive(await recentGames.getRecentlyPlayedGames());
var mostPlayedGames = reactive(await topGames.getMostPlayedGames());

var isHovering = ref(null);
var essentialsLoaded = ref(false);
var proficienciesAnim = ref(false);
onMounted(() => {
  essentialsLoaded.value = true;
});

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

const infoAboutMe = `I'm Mehmet, a ${(
  new Date().getUTCFullYear() - 2000.8
).toFixed(
  0
)} years old associate degree computer programming student. I enjoy programming and 3D modeling. I am currently studying Blender, C#, Vue.js, and Nuxt.js. Also, I love video games, I try to code games in Unity3D for fun in my free time.`;

const currentlyWorkingOn = "A news website to post about video games,";

const proficienciesFirstColumn = [
  // Tailwind.css colors are used
  // Check https://windicss.org/utilities/general/colors for colors

  // Name | First Color | Second Color | Proficiency Level
  ["HTML5", "#c2410c", "#f97316", "w-full"],
  ["CSS3", "#2563eb", "#06b6d4", "w-full"],
  ["Tailwind CSS", "#0e7490", "#06b6d4", "w-full"],
  ["JavaScript", "#f59e0b", "#fbbf24", "w-7/10"],
  ["Vue.JS", "#059669", "#334155", "w-6/10"],
  ["Nuxt.JS", "#10b981", "#2dd4bf", "w-6/10"],
];

const proficienciesSecondColumn = [
  // Tailwind.css colors are used
  // Check https://windicss.org/utilities/general/colors for colors

  // Name | First Color | Second Color | Proficiency Level
  ["C#", "#7c3aed", "#d946ef", "w-1/2"],
  ["MySQL", "#2563eb", "#475569", "w-7/10"],
  ["Unity3D", "#000", "#374151", "w-2/5"],
  ["Blender", "#ea580c", "#fb923c", "w-1/10"],
  ["Adobe Photoshop", "#1E293B", "#0ea5e9", "w-1/2"],
  ["Adobe After Effects", "#1e40af", "#6366f1", "w-1/2"],
];
</script>
<template>
  <div
    class="min-h-screen min-w-full h-full relative bg-[rgb(10,10,10)] text-slate-200/95"
  >
    <div class="change-colors absolute min-w-full min-h-screen z-0" />
    <div class="color-wrapper absolute min-w-full min-h-screen z-10" />
    <div class="mx-auto px-60">
      <section
        class="min-h-screen flex items-center flex-col text-center justify-center relative z-20 pt-[12.5%]"
      >
        <h1
          class="text-5xl font-bold mb-6 transform transition-all duration-800"
          :class="[
            essentialsLoaded == true
              ? 'translate-y-0 opacity-100'
              : 'translate-y-40 opacity-0',
          ]"
        >
          Hello
        </h1>
        <p
          class="text-3xl font-normal text-slate-400 transform transition-all duration-800"
          :class="[
            essentialsLoaded == true
              ? 'translate-y-0 opacity-100'
              : 'translate-y-40 opacity-0',
          ]"
        >
          {{ infoAboutMe }}
        </p>
        <hr
          class="absolute top-0 mt-[12.5%] border-1 border-slate-500 relative z-20 transition-all duration-1000"
          :class="{
            'w-0': essentialsLoaded == false,
            'w-1/5': essentialsLoaded == true,
          }"
        />
      </section>
      <section>
        <h1
          class="text-5xl font-bold mb-6"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          Proficiencies
        </h1>
        <div class="flex w-full">
          <div class="w-1/2 mr-4">
            <div
              id="dat"
              v-for="item in proficienciesFirstColumn"
              data-aos="fade-right"
              :data-aos-delay="`${increaseDelay()}`"
            >
              <h2 class="font-semibold text-2xl">{{ item[0] }}</h2>
              <div class="bg-slate-900 rounded-md">
                <div
                  class="py-5 rounded-md my-3 transition-all duration-1000"
                  :class="[essentialsLoaded == true ? `${item[3]}` : 'w-0']"
                  :style="[
                    `box-shadow: 20px 0 60px ${item[2]}, -20px 0 60px #000;
                    background:linear-gradient(to right,${item[1]},${item[2]})`,
                  ]"
                />
              </div>
            </div>
          </div>
          <div class="w-1/2 ml-4">
            <div
              v-for="item in proficienciesSecondColumn"
              data-aos="fade-right"
              :data-aos-delay="`${increaseDelay()}`"
            >
              <h2 class="font-semibold text-2xl">{{ item[0] }}</h2>
              <div class="bg-slate-900 rounded-md">
                <div
                  class="py-5 rounded-md my-3 transition-all duration-1000"
                  :class="[essentialsLoaded == true ? `${item[3]}` : 'w-0']"
                  :style="[
                    `box-shadow: 20px 0 60px ${item[2]}, -20px 0 60px #000;
                    background:linear-gradient(to right,${item[1]},${item[2]})`,
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1
          class="text-5xl font-bold mb-4 mt-25"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          Currently Working On
        </h1>
        <p
          class="text-3xl font-normal text-slate-400"
          data-aos="fade-right"
          data-aos-duration="550"
        >
          {{ currentlyWorkingOn }}
          <a href="" target="_blank" class="text-cyan-500 font-medium">
            check it!
          </a>
        </p>
      </section>
      <section>
        <h1
          class="text-5xl font-bold mb-6 mt-25"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          Recently Played Games
        </h1>
        <div
          class="flex flex-wrap gap-2 justify-between"
          v-if="recentlyPlayedGames != null"
        >
          <div
            class="w-[calc(33.3%-0.5rem)] transition-all duration-300 border-1 border-transparent hover:border-slate-400"
            v-for="item in recentlyPlayedGames"
            :data-aos="`${animDirection(recentlyPlayedGames.indexOf(item))}`"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div class="relative inline-flex overflow-hidden w-full">
              <img
                class="transform transition-all duration-300 w-full"
                :class="{
                  'scale-110 filter blur-[1px]':
                    isHovering == recentlyPlayedGames.indexOf(item),
                }"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name"
              />
              <a
                @mouseenter="isHovering = recentlyPlayedGames.indexOf(item)"
                @mouseleave="isHovering = null"
                class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
                :href="`https://store.steampowered.com/app/${item.appid}/`"
                target="_blank"
              >
                <h2 class="text-2xl font-bold text-center">{{ item.name }}</h2>
                <p class="text-lg font-semibold mt-2 -mb-2">
                  {{
                    recentGames.calculatePlayTime(item.playtime_2weeks, false) +
                    " in last 2 weeks"
                  }}
                </p>
                <p class="text-lg font-semibold">
                  {{
                    recentGames.calculatePlayTime(
                      item.playtime_forever,
                      false
                    ) + " total"
                  }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-[10%]">
        <h1
          class="text-5xl font-bold mb-6 mt-10"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          Most Played Games
        </h1>
        <div
          class="flex flex-wrap gap-2 justify-between"
          v-if="mostPlayedGames != null"
        >
          <div
            class="w-[calc(33.3%-0.5rem)] transition-all duration-300 border-1 border-transparent hover:border-slate-400"
            v-for="item in mostPlayedGames"
            :data-aos="`${animDirection(mostPlayedGames.indexOf(item))}`"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div class="relative inline-flex overflow-hidden w-full">
              <img
                class="transform transition-all duration-300 w-full filter"
                :class="{
                  'scale-110 blur-[1px]':
                    isHovering == mostPlayedGames.indexOf(item) + 6,
                }"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name"
              />
              <a
                @mouseenter="isHovering = mostPlayedGames.indexOf(item) + 6"
                @mouseleave="isHovering = null"
                class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
                :href="`https://store.steampowered.com/app/${item.appid}/`"
                target="_blank"
              >
                <h2 class="text-2xl font-bold text-center">{{ item.name }}</h2>
                <p class="text-lg font-semibold mt-2 -mb-2">
                  {{
                    "Total playtime: " +
                    recentGames.calculatePlayTime(item.playtime_forever, true)
                  }}
                </p>
                <p class="text-lg font-semibold">
                  {{
                    "Last played: " +
                    topGames.calculateLastTimePlayed(item.rtime_last_played)
                  }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer
      class="bg-[rgb(3,3,3)] py-5 text-sm text-center text-slate-400"
    ></footer>
  </div>
</template>
<style>
::selection {
  background-color: rgba(0, 255, 255, 0.8);
  color: white;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(20, 20, 20);
}

::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 45);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(60, 60, 68);
}

.color-wrapper {
  background-image: radial-gradient(
    ellipse at left top,
    transparent -100%,
    rgb(10, 10, 10) 35%
  );
}

.change-colors {
  background: linear-gradient(
    90deg,
    #ff3c00,
    #e92c2c,
    #ff0062,
    #cc00ff,
    #0051ff,
    #00bbff,
    #00ffc3
  );
  animation: change-colors 10s ease infinite;
  background-size: 400% 400%;
}

@keyframes change-colors {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 115% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
