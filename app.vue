<script setup>
let isHovering = ref(null);
let showDev = ref(true);

onBeforeMount(() => {
  getRecentlyPlayedGames();
  getMostPlayedGames();
});

let animationDelay = 0;
function increaseDelay() {
  if (animationDelay == 300) {
    animationDelay = 0;
  }
  animationDelay += 100;
  return animationDelay;
}

const infoAboutMe = `I'm Mehmet, an associate degree ${(
  new Date().getUTCFullYear() - 2000.8
).toFixed(
  0
)} years old computer programming student from Turkey. I am currently studying Unity3D, Blender, C#, Vue.js, Nuxt.js, and MySQL. I started my programming journey with front-end web development, by learning HTML, CSS, and JavaScript. After a couple of months, I started learning Vue.js along with the Nuxt.js to advance my front-end skills. But I always wanted to make something related to video games because I love everything about video games and I was always a massive fan of them. So after a year of web development, I find myself in a situation where I had to build something as a school project. While I catch the chance, I started learning Unity to make a video game. And now here I am making games with Unity for fun, using Blender for 3D modeling, and Adobe Photoshop for texturing.`;

const currentlyWorkingOn = "A news website to post about video games,";

const proficienciesFirstColumn = [
  // Tailwind.css colors are used
  // Check https://windicss.org/utilities/general/colors for colors

  // Name | First Color | Second Color | Proficiency Level
  ["HTML5", "#c2410c", "#f97316", "w-full"],
  ["CSS3", "#2563eb", "#06b6d4", "w-full"],
  ["Tailwind CSS", "#0e7490", "#06b6d4", "w-full"],
  ["JavaScript", "#f59e0b", "#fbbf24", "w-4/5"],
  ["Vue.JS", "#059669", "#334155", "w-3/5"],
  ["Nuxt.JS", "#10b981", "#2dd4bf", "w-3/5"],
];

const proficienciesSecondColumn = [
  // Tailwind.css colors are used
  // Check https://windicss.org/utilities/general/colors for colors

  // Name | First Color | Second Color | Proficiency Level
  ["C#", "#7c3aed", "#d946ef", "w-3/5"],
  ["MySQL", "#2563eb", "#475569", "w-4/5"],
  ["Unity3D", "#000", "#374151", "w-5/10"],
  ["Blender", "#ea580c", "#fb923c", "w-1/5"],
  ["Adobe Photoshop", "#1E293B", "#0ea5e9", "w-5/10"],
  ["Adobe After Effects", "#1e40af", "#6366f1", "w-5/10"],
];
</script>
<template>
  <div
    v-if="showDev"
    class="sticky top-0 bg-slate-800 text-center z-20 text-slate-200 font-bold text-xl py-4 px-2 flex justify-center"
  >
    <div>Still in development</div>
    <div
      @click="showDev = !showDev"
      class="right-5 absolute px-4 cursor-pointer"
    >
      X
    </div>
  </div>
  <div class="min-h-screen min-w-full h-full relative">
    <div class="change-colors absolute h-full min-w-full min-h-full -z-20" />
    <div class="color-wrapper absolute h-full min-w-full min-h-full -z-10" />
    <div class="mx-auto px-40 py-40 text-slate-200/95">
      <section>
        <h1 class="text-5xl font-bold mb-6">Hello</h1>
        <p class="text-3xl font-normal text-slate-400">
          {{ infoAboutMe }}
        </p>
      </section>
      <section>
        <h1 class="text-5xl font-bold mb-6 mt-10">Proficiencies</h1>
        <div class="flex w-full">
          <div class="w-1/2 mr-4">
            <div v-for="item in proficienciesFirstColumn">
              <h2 class="font-semibold text-2xl">{{ item[0] }}</h2>
              <div class="bg-slate-900 rounded-md">
                <div
                  :class="[
                    `w-0 ${item[3]} py-5 rounded-md my-3 transition-all duration-1000`,
                  ]"
                  :style="[
                    `box-shadow: 20px 0 60px ${item[2]}, -20px 0 60px #000;
                    background:linear-gradient(to right,${item[1]},${item[2]})`,
                  ]"
                />
              </div>
            </div>
          </div>
          <div class="w-1/2 ml-4">
            <div v-for="item in proficienciesSecondColumn">
              <h2 class="font-semibold text-2xl">{{ item[0] }}</h2>
              <div class="bg-slate-900 rounded-md">
                <div
                  :class="[
                    `${item[3]} py-5 rounded-md my-3 transition-all duration-1000`,
                  ]"
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
          class="text-5xl font-bold mb-4 mt-10"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          Currently Working On
        </h1>
        <p
          class="text-3xl font-normal text-slate-400"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          {{ currentlyWorkingOn }}
          <a href="" target="_blank" class="text-cyan-500 font-medium">
            check it!
          </a>
        </p>
      </section>
      <section>
        <h1
          class="text-5xl font-bold mb-6 mt-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Recently Played Games
        </h1>
        <div
          class="flex flex-wrap gap-2 justify-between"
          v-if="recentlyPlayedGames != null"
        >
          <div
            class="w-[calc(33.3%-0.5rem)] transition-all duration-300 border-2"
            :class="[
              isHovering == recentlyPlayedGames.indexOf(item)
                ? 'border-slate-400'
                : 'border-transparent',
            ]"
            v-for="item in recentlyPlayedGames"
            :data-aos="[
              recentlyPlayedGames.indexOf(item) < 3
                ? 'fade-right'
                : 'fade-left',
            ]"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div class="relative inline-flex overflow-hidden w-full">
              <img
                class="transform transition-all duration-300 w-full"
                :class="[
                  isHovering == recentlyPlayedGames.indexOf(item)
                    ? 'scale-110 filter blur-[1px]'
                    : 'scale-100 filter blur-[0px]',
                ]"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name + ' Banner'"
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
                    calculatePlayTime(item.playtime_2weeks, false) +
                    " in last 2 weeks"
                  }}
                </p>
                <p class="text-lg font-semibold">
                  {{
                    calculatePlayTime(item.playtime_forever, false) + " total"
                  }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1
          class="text-5xl font-bold mb-6 mt-10"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Most Played Games
        </h1>
        <div
          class="flex flex-wrap gap-2 justify-between"
          v-if="mostPlayedGames != null"
        >
          <div
            class="w-[calc(33.3%-0.5rem)] transition-all duration-300 border-2"
            :class="[
              isHovering == mostPlayedGames.indexOf(item) + 6
                ? 'border-slate-400'
                : 'border-transparent',
            ]"
            v-for="item in mostPlayedGames"
            :data-aos="[
              mostPlayedGames.indexOf(item) < 3 ? 'fade-up' : 'flip-up',
            ]"
            :data-aos-delay="`${increaseDelay()}`"
          >
            <div class="relative inline-flex overflow-hidden w-full">
              <img
                class="transform transition-all duration-300 w-full"
                :class="[
                  isHovering == mostPlayedGames.indexOf(item) + 6
                    ? 'scale-110 filter blur-[1px]'
                    : 'scale-100 filter blur-[0px]',
                ]"
                :src="`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/header.jpg`"
                :alt="item.name + ' Banner'"
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
                    calculatePlayTime(item.playtime_forever, true)
                  }}
                </p>
                <p class="text-lg font-semibold">
                  {{
                    "Last played: " +
                    calculateLastTimePlayed(item.rtime_last_played)
                  }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 class="text-5xl font-bold">Contact Me</h1>
      </section>
    </div>
  </div>
</template>
<style>
::selection {
  background-color: rgba(0, 255, 255, 0.8);
  color: white;
}

.color-wrapper {
  background-image: radial-gradient(
    ellipse at left top,
    transparent -100%,
    rgb(10, 10, 10) 40%
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
  animation: color-change 20s ease infinite;
  background-size: 400% 400%;
}

@keyframes color-change {
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
