const config = useRuntimeConfig();

export default defineEventHandler(async (event) => await getRecentlyPlayedGames());

const getRecentlyPlayedGames = async () =>
  await $fetch(
    `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${config.STEAM_WEB_API_KEY}&steamid=${config.STEAM_ID}&count=6&format=json`
  )
    .then((res) => {
      const { response } = res;
      if (!response.hasOwnProperty('games')) response.games = null;
      return response.games;
    })
    .catch(() => null);
