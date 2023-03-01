import { defineStore } from "pinia";

export const useSongStatsStore = defineStore("songStats", {
  state: () => ({
    recentlyListenedSongs: null,
  }),

  actions: {
    async getRecentlyListenedSongs() {
      const data = await fetch("https://pwapi.fly.dev/recentlyListenedTracks/");
      this.recentlyListenedSongs = await data.json();

      return this.recentlyListenedSongs;
    },
  },
});
