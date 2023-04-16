<script setup>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useElementVisibility } from "@vueuse/core";

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
  if (resultInDays < 1) return "Today";
  else if (resultInDays < 2) return "Yesterday";
  else if (resultInDays > 365)
    return (resultInDays / 365).toFixed(0) + " years ago";
  else return resultInDays + " days ago";
}

function calculatePlayTime(minutes, shouldBeRounded) {
  if (minutes < 2) return minutes + " minute";
  else if (minutes < 60) return minutes + " minutes";
  else if (minutes / 60 < 1.2) return "1 hour";
  else {
    if (
      (minutes / 60).toFixed(1) % 1 < 0.2 ||
      (minutes / 60).toFixed(1) % 1 >= 0.8 ||
      shouldBeRounded == true
    )
      return Math.round(minutes / 60) + " hours";
    else return (minutes / 60).toFixed(1) + " hours";
  }
}

if (process.client) gsap.registerPlugin(TextPlugin);

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

const age = Math.abs(
  new Date(Date.now() - new Date("08/25/2000").getTime()).getUTCFullYear() -
    1970
);
const infoAboutMe = `I'm Mehmet, a ${age} years old associate degree computer programming student. I enjoy programming and 3D modeling. I am currently studying Blender, C#, Vue.js, and Nuxt.js. Also, I love video games. I try to code games in Unity3D for fun in my spare time.`;

onMounted(() => {
  if (process.client) {
    gsap.to("#infoAboutMe", {
      delay: 0.7,
      duration: 7,
      text: infoAboutMe,
      ease: "none",
    });
    gsap.to("#helloTitle", {
      duration: 0.7,
      text: "Hello👋",
      ease: "none",
    });
  }
});

const currentlyWorkingOn = "An internship tracking website for a university,";

const previousProjects = [
  {
    role: "Made",
    name: "Volcanoids Turkish Localization",
    link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2952920316",
    emoji: "⚙️",
    summary: "a localization mod for the Volcanoids game",
  },
  {
    role: "Made",
    name: "GwynDev",
    link: "https://gwyndev.com/",
    emoji: "📌",
    summary: "to show off things about me",
  },
  {
    role: "Developed the front-end of",
    name: "AhniWeb",
    link: "https://ahni-web.vercel.app/",
    emoji: "🎓",
    summary: "the graduates' meeting website of a high school",
  },
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
  <div class="<md:hidden absolute w-full h-50vh z-0 landing-section-color" />
  <div
    class="<md:hidden absolute w-full h-50vh z-10 landing-section-color-wrapper"
  />

  <div class="mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5">
    <section
      id="hello"
      class="min-h-screen flex items-center flex-col justify-center relative z-20"
    >
      <h1
        id="helloTitle"
        class="text-4xl <md:text-3xl font-bold mb-6 hello text-center"
      >
        Cute little gnomes are loading the page, please be patient 🧙🏼‍♂️🧸
      </h1>
      <p
        id="infoAboutMe"
        class="text-2xl <md:text-xl font-normal text-slate-400 text-center"
      />
    </section>

    <section>
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6"
        data-aos="fade-left"
        data-aos-duration="900"
      >
        <a
          id="proficiencies"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#proficiencies"
        >
          #
        </a>
        Proficiencies ✨
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

    <section class="mt-25">
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <a
          id="currently"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#currently"
        >
          #
        </a>
        Currently Working On 👨🏻‍💻🌱
      </h1>
      <p
        class="text-2xl <md:text-xl font-normal text-slate-400"
        data-aos="fade-right"
        data-aos-duration="550"
      >
        {{ currentlyWorkingOn }}
        <a
          href="https://stajtakip.vercel.app/"
          target="_blank"
          class="text-cyan-500 font-medium"
        >
          check it!
        </a>
      </p>
    </section>

    <section class="mt-25">
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <a
          id="previousProjects"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#previousProjects"
        >
          #
        </a>
        Previous Projects 👨🏻‍💻🌳
      </h1>
      <p
        v-for="project in previousProjects"
        :key="project.name"
        class="text-2xl <md:text-xl font-normal text-slate-400 mb-2"
        data-aos="fade-right"
        data-aos-duration="550"
        :data-aos-delay="increaseDelay()"
      >
        {{ project.emoji + " " + project.role }}
        <a
          :href="project.link"
          class="inline font-bold text-slate-200"
          target="_blank"
          :class="{
            'pointer-events-none':
              project.link == '' || project.hasOwnProperty('link') == false,
          }"
        >
          {{ " " + project.name }}
        </a>
        {{ ", " + project.summary + " - " }}
        <NuxtLink
          :to="'/projectDetails/' + previousProjects.indexOf(project)"
          class="text-cyan-500 font-medium"
        >
          see details
        </NuxtLink>
      </p>
    </section>

    <section class="mt-25">
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        <a
          id="recentGames"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#recentGames"
        >
          #
        </a>
        Recently Played Games 🎮
      </h1>
      <div
        class="flex flex-wrap gap-x-3 gap-y-2"
        v-if="recentlyPlayedGames?.api != null"
      >
        <div
          class="w-[calc(33.3%-0.5rem)] <2xl:w-[calc(50%-0.5rem)] <md:w-full transition-all duration-300 border-1 border-transparent hover:border-sky-400 rounded-md"
          v-for="item in recentlyPlayedGames?.api"
          :key="item.name"
          :data-aos="`${animDirection(recentlyPlayedGames?.api.indexOf(item))}`"
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
              This game is not available on Steam.
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
            <a
              @mouseenter="isHovering = recentlyPlayedGames?.api.indexOf(item)"
              @mouseleave="isHovering = null"
              class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
              :href="`https://store.steampowered.com/app/${item.appid}/`"
              target="_blank"
            >
              <h2 class="text-2xl <md:text-xl font-bold text-center">
                {{ item.name }}
              </h2>
              <p class="text-lg <md:text-base font-semibold mt-2 -mb-2">
                {{
                  calculatePlayTime(item.playtime_2weeks, false) +
                  " in last 2 weeks"
                }}
              </p>
              <p class="text-lg <md:text-base font-semibold">
                {{ calculatePlayTime(item.playtime_forever, false) + " total" }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div v-else class="text-2xl <md:text-xl font-normal text-slate-400">
        It seems like I haven't played any video games in the last 2 weeks. 🥸
      </div>
    </section>

    <section class="mt-25">
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <a
          id="topGames"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#topGames"
        >
          #
        </a>
        Most Played Games 🎮🔝
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
            <a
              @mouseenter="isHovering = mostPlayedGames?.api.indexOf(item) + 6"
              @mouseleave="isHovering = null"
              class="absolute w-full h-full flex flex-col justify-center items-center bg-black/70 text-white hover:bg-black/80 active:bg-black/85 transition-all duration-300 cursor-pointer"
              :href="`https://store.steampowered.com/app/${item.appid}/`"
              target="_blank"
            >
              <h2 class="text-2xl <md:text-xl font-bold text-center">
                {{ item.name }}
              </h2>
              <p class="text-lg <md:text-base font-semibold mt-2 -mb-2">
                {{
                  "Total playtime: " +
                  calculatePlayTime(item.playtime_forever, true)
                }}
              </p>
              <p class="text-lg <md:text-base font-semibold">
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

    <section
      class="mt-25"
      v-if="recentlyListenedTracks?.api[0].hasOwnProperty('@attr')"
    >
      <h1
        id="currentlyListening"
        class="text-4xl <md:text-3xl font-bold mb-6 w-full"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <a
          href="#currentlyListening"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          >♪</a
        >
        Currently Listening 🎧
      </h1>
      <a
        class="p-4 pr-14 w-fit rounded-md flex items-center bg-gradient-to-b from-gray-800 to-gray-900 hover:(from-gray-800/80 to-gray-900/80)"
        :href="`${recentlyListenedTracks?.api[0].url}`"
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
      </a>
    </section>

    <section class="mt-25 flex flex-wrap gap-4">
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6 w-full"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        <a
          id="recentTracks"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#recentTracks"
        >
          #
        </a>
        Recently Listened Tracks 📻
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
        <a
          class="p-4 md:pr-14 flex items-center bg-gradient-to-b from-gray-800 to-gray-900 hover:opacity-80 transition-all duration-300 rounded-md"
          :href="`${song.url}`"
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
          </div></a
        >
      </div>
    </section>

    <section class="mt-25 mb-40 flex flex-wrap gap-4">
      <h1
        class="text-4xl <md:text-3xl font-bold mb-6 w-full"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        <a
          id="topTracks"
          class="text-sky-500 hover:text-sky-300 pt-36 cursor-pointer transition-colors duration-300"
          href="#topTracks"
        >
          #
        </a>
        Most Listened Tracks 🍒🔝
      </h1>
      <div
        class="w-fit <sm:w-full sm:(flex flex-wrap)"
        data-aos="fade-right"
        :data-aos-delay="`${increaseDelay()}`"
        v-for="song in mostListenedTracks?.api"
        :key="song.name"
      >
        <a
          class="p-4 md:pr-14 flex items-center bg-gradient-to-b from-gray-800 to-gray-900 hover:opacity-80 transition-all duration-300 rounded-md"
          :href="`${song.url}`"
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
                {{ song.playcount + " Listens" }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>