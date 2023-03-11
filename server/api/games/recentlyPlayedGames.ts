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
      if(response.response.hasOwnProperty('games')){
        return response.response.games;
      } else {
        response.response.games=null;
        return response.response.games
      }
    } catch (error) {
      return error;
    }
  }