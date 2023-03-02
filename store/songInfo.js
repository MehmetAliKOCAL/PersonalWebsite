import { defineStore } from "pinia";

export const useRecentTracksStore = defineStore("recentTracks", {
  state: () => ({
    recentlyListenedSongs: null,
  }),

  actions: {
    async getRecentlyListenedSongs() {
      const data = await fetch("https://pwapi.fly.dev/music/recentTracks/");
      this.recentlyListenedSongs = await data.json();

      return this.recentlyListenedSongs;
    },
  },
});

export const useTopTracksStore = defineStore("topTracks", {
  state: () => ({
    mostListenedSongs: null,
  }),

  actions: {
    async getMostListenedSongs() {
      const data = await fetch("https://pwapi.fly.dev/music/topTracks/");
      this.mostListenedSongs = await data.json();

      return this.mostListenedSongs;
    },
  },
});
