import { defineStore } from "pinia";

export const useRecentTracksStore = defineStore("recentTracks", {
  actions: {
    async getRecentlyListenedSongs() {
      const data = await $fetch("/api/songs/recentTracks/");
      return await data.api;
    },
  },
});

export const useTopTracksStore = defineStore("topTracks", {
  actions: {
    async getMostListenedSongs() {
      const data = await $fetch("/api/songs/topTracks");
      return await data.api;
    },
  },
});
