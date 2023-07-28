const config = useRuntimeConfig();

export default defineEventHandler(async (event) => await getRecentlyListenedTracks());

const getRecentlyListenedTracks = async () =>
  await $fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=${config.LASTFM_USERNAME}&api_key=${config.LASTFM_WEB_API_KEY}&format=json`
  )
    .then((res) => res.recenttracks.track.filter((song) => !song.hasOwnProperty('@attr')))
    .catch(() => null);
