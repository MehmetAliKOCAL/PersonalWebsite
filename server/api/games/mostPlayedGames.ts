const config = useRuntimeConfig();

export default defineEventHandler(async(event) => {
    return {
      api: await mostPlayedGames()
    }
  })
  
  var allGamesArray:any;
  async function allGames() {
    try {
      const response:any = await $fetch(
        `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.STEAM_WEB_API_KEY}&steamid=${config.STEAM_ID}&include_appinfo=true&format=json`
      );
      console.log(response);
      allGamesArray = response.response.games;
      return allGamesArray;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  
  async function mostPlayedGames() {
    await allGames();
    try {
      var mostPlayed = allGamesArray.sort(function (a:any, b:any) {
        return b.playtime_forever - a.playtime_forever;
      });
      var mostPlayedFirstFive = mostPlayed.slice(0, 6);
      return mostPlayedFirstFive;
    } catch (error) {
      return error;
    }
  }