<template>
  <div
    class="min-h-screen min-w-full h-full relative bg-[rgb(10,10,10)] text-slate-200/95"
  >
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<style>
html,
body {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

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

:target:before {
  content: "";
  display: block;
  height: 80px;
  margin: -80px 0 0;
}
</style>
