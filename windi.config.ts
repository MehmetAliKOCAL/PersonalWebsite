import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      width: {
        fit: "fit-content",
      },
      backgroundClip: {
        padding: "padding-box",
      },
      boxShadow: {
        skyBloom: "0px 0px 20px 1px rgba(90, 90, 250, 0.8)",
      },
      animation: {
        sound: "sound 1000ms infinite",
      },
    },
  },
});
