const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  return {
    api: await getRecentlyPlayedGames(),
  };
});

async function getRecentlyPlayedGames() {
  try {
    return await $fetch(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${config.STEAM_WEB_API_KEY}&steamid=${config.STEAM_ID}&count=6&format=json`
    ).then((res) => {
      if (res.response.hasOwnProperty("games")) {
        return res.response.games;
      } else {
        res.response.games = null;
        return res.response.games;
      }
    });
  } catch (error) {
    return error;
  }
}
