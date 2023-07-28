const config = useRuntimeConfig();

export default defineEventHandler(async (event) => await getCurrentlyListeningTrack());

const getCurrentlyListeningTrack = async () =>
  await $fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=${config.LASTFM_USERNAME}&api_key=${config.LASTFM_WEB_API_KEY}&format=json`
  )
    .then((res) => res.recenttracks.track.filter((song) => song.hasOwnProperty('@attr'))[0] || null)
    .catch(() => null);
