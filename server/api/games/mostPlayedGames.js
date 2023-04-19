const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  return {
    api: await findMostPlayedSixGames(),
  };
});

let allGamesArray;
async function getAllGames() {
  try {
    allGamesArray = await $fetch(
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.STEAM_WEB_API_KEY}&steamid=${config.STEAM_ID}&include_appinfo=true&format=json`
    ).then((res) => {
      return res.response.games;
    });
    return allGamesArray;
  } catch (error) {
    return error;
  }
}

async function findMostPlayedSixGames() {
  await getAllGames();
  try {
    const mostPlayedGames = allGamesArray.sort(function (a, b) {
      return b.playtime_forever - a.playtime_forever;
    });
    return mostPlayedGames.slice(0, 6);
  } catch (error) {
    return error;
  }
}
