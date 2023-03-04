const config = useRuntimeConfig();

export default defineEventHandler(async(event) => {
    return {
      api: await recentlyPlayedGames()
    }
  })

  async function recentlyPlayedGames() {
    try {
      const response:any = await $fetch(
        `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${config.STEAM_WEB_API_KEY}&steamid=${config.STEAM_ID}&count=6&format=json`
      );
      return response.response.games;
    } catch (error) {
      return error;
    }
  }