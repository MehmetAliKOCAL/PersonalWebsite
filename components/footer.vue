<script setup>
const eMail = "root.gwyn@hotmail.com";
const socials = [
  ["Github", "https://github.com/MehmetAliKOCAL", "github"],
  ["LinkedIn", "https://www.linkedin.com/in/gwyndev/", "linkedin"],
  ["Discord", "https://discordapp.com/users/554061262229864458", "discord"],
  ["Reddit", "https://www.reddit.com/user/Primary_Ad5726", "<IconsReddit/>"],
  [
    "YouTube",
    "https://www.youtube.com/channel/UCqsbqOqrLaKWaJ-1fB1RqyQ",
    "<IconsYoutube/>",
  ],
  ["LastFM", "https://www.last.fm/user/GwynDev", "<IconsLastfm/>"],
];
var isHovering = ref(null);
</script>

<template>
  <div
    class="w-full bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 h-[1px] mt-40 relative"
  />
  <footer class="bg-[rgba(6,6,6,1)] py-10 font-mono relative bg-opacity-5 z-10">
    <h3 class="text-xl text-center mb-10">~ Get In Touch</h3>
    <div class="flex justify-around px-5">
      <div class="flex flex-col">
        <h4 class="border-b-2 border-sky-500 mb-2 font-semibold w-fit text-lg">
          Socials
        </h4>
        <nav class="flex flex-col w-full gap-x-1 justify-center">
          <NuxtLink :to="site[1]" target="_blank" v-for="site in socials">
            <div
              @mouseenter="isHovering = site[0]"
              @mouseleave="isHovering = null"
              class="flex items-center"
            >
              <IconRenderer
                :iconName="site[0].toLowerCase()"
                class="w-8 mr-2"
              />
              <p
                class="transition-colors duration-300"
                :class="{ 'text-sky-600': isHovering == site[0] }"
              >
                {{ site[0] }}
              </p>
            </div></NuxtLink
          >
        </nav>
      </div>
      <div>
        <h4 class="border-b-2 border-sky-500 mb-2 font-semibold w-fit text-lg">
          Contact
        </h4>
        <a
          :href="`mailto:${eMail}`"
          class="hover:text-sky-600 transition-colors duration-300 text-md"
        >
          Mail Me <IconsClick />
        </a>
      </div>
    </div>
  </footer>
</template>
