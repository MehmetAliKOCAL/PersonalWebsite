import { defineStore } from "pinia";

export const useRecentGamesStore = defineStore("recentGames", {
  actions: {
    async getRecentlyPlayedGames() {
      const data = await $fetch("/api/games/recentlyPlayedGames");
      return await data.api;
    },

    calculatePlayTime(minutes, shouldBeRounded) {
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
    },
  },
});

export const useMostPlayedGamesStore = defineStore("mostPlayedGames", {
  actions: {
    async getMostPlayedGames() {
      const data = await $fetch("/api/games/mostPlayedGames");
      return await data.api;
    },

    calculateLastTimePlayed(seconds) {
      const resultInDays = Math.round(
        (Date.now() / 1000 - seconds) / 60 / 60 / 24
      );
      if (resultInDays < 1) return "Today";
      else if (resultInDays < 2) return "Yesterday";
      else if (resultInDays > 365)
        return (resultInDays / 365).toFixed(0) + " years ago";
      else return resultInDays + " days ago";
    },
  },
});
