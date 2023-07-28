const config = useRuntimeConfig();

export default defineEventHandler(async (event) => await findMostPlayedFirstSixGames());

const getAllGames = async () =>
  await $fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.STEAM_WEB_API_KEY}&steamid=${config.STEAM_ID}&include_appinfo=true&format=json`
  )
    .then((res) => res.response.games)
    .catch(() => null);

async function findMostPlayedFirstSixGames() {
  const games = await getAllGames();
  if (games !== null)
    return games.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0, 6);
  else return null;
}
