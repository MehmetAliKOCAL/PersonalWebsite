<template>
  <div
    class="w-full bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 h-[1px] mt-40"
  />
  <footer class="bg-[rgb(6,6,6)] py-10 font-mono relative">
    <h3 class="text-lg text-center">Get In Touch</h3>
    <div class="flex justify-between px-150 <2xl:px-40 <xl:px-20 <lg:px-10">
      <div class="flex flex-col">
        <h4>Socials</h4>
        <nav class="flex gap-x-1">
          <NuxtLink
            class="w-8"
            to="https://github.com/MehmetAliKOCAL"
            target="_blank"
          >
            <IconsGithub
          /></NuxtLink>
          <NuxtLink
            class="w-8"
            to="https://www.linkedin.com/in/gwyndev/"
            target="_blank"
          >
            <IconsLinkedin />
          </NuxtLink>
          <NuxtLink
            class="w-8"
            to="https://discordapp.com/users/554061262229864458"
            target="_blank"
          >
            <IconsDiscord />
          </NuxtLink>
          <NuxtLink
            class="w-8"
            to="https://www.reddit.com/user/Primary_Ad5726"
            target="_blank"
          >
            <IconsReddit />
          </NuxtLink>
          <NuxtLink
            class="w-8"
            to="https://www.youtube.com/channel/UCqsbqOqrLaKWaJ-1fB1RqyQ"
            target="_blank"
          >
            <IconsYoutube />
          </NuxtLink>
        </nav>
      </div>
      <div>
        <h4 class="border-b-2 border-sky-500 mb-2 font-semibold w-fit">
          Contact
        </h4>
        <a
          href="mailto:root.gwyn@hotmail.com"
          class="hover:text-sky-600 transition-colors duration-300"
        >
          Mail Me <IconsClick />
        </a>
      </div>
    </div>
  </footer>
</template>
