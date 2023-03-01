import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init({
    // Check for detailed usage of the plugin: https://github.com/michalsnik/aos
    // See how it works https://michalsnik.github.io/aos/

    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease-out-cubic", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "center-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});
