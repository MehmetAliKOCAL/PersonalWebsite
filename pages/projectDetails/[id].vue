<script setup>
const projects = [
  {
    title: "Volcanoids Mod",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quas, numquam dicta deleniti sit, itaque corrupti, a harum delectus corporis ipsa ea. Iusto consectetur harum quisquam totam quibusdam. Sint, eligendi!",
    tech: ["Volcanoids Mod SDK"],
  },
  {
    title: "GwynDev",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quas, numquam dicta deleniti sit, itaque corrupti, a harum delectus corporis ipsa ea. Iusto consectetur harum quisquam totam quibusdam. Sint, eligendi!",
    tech: ["HTML5", "CSS3", "WindiCSS", "Vue.js", "Nuxt.js"],
  },
  {
    title: "AhniWeb",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quas, numquam dicta deleniti sit, itaque corrupti, a harum delectus corporis ipsa ea. Iusto consectetur harum quisquam totam quibusdam. Sint, eligendi!",
    tech: ["HTML5", "CSS3", "TailwindCSS", "Javascript", "Vue.js", "Nuxt.js"],
  },
];
const project = projects[useRoute().params.id];
</script>
<template>
  <div
    class="mx-auto px-60 <2xl:px-40 <xl:px-20 <lg:px-5 py-90 flex items-center justify-center flex-col"
  >
    <!-- <img
      src="https://images.wallpaperscraft.com/image/single/mountains_mountain_range_peaks_149574_1920x1080.jpg"
      :alt="project.title"
      class="w-full rounded-md"
    />
    <h1 class="text-4xl <md:text-3xl font-bold my-10 text-center">
      {{ project.title }}
    </h1>
    <p>
      Technologies Used:
      <div v-for="tech in project.tech" :key="tech" class="inline">{{ tech }} {{ tech!=project.tech[project.tech.length-1] ? ', ' :''}}</div>
    </p>
    <p class="text-2xl <md:text-xl font-normal text-slate-400">
      {{ project.content }}
    </p> -->
    <p>Sorry, this page is under construction.🥸</p>
    <NuxtLink
      to="/"
      class="bg-black py-3 px-10 mt-10 rounded-md border-sky-400 border-1 transition-all duration-300 hoverShadow"
    >
      Homepage
    </NuxtLink>
  </div>
</template>
