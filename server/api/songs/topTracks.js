const config = useRuntimeConfig();

export default defineEventHandler(async (event) => await getMostListenedTracks());

const findAndAttachTrackImage = async (artist, track) =>
  await $fetch(
    `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${config.LASTFM_WEB_API_KEY}&artist=${artist}&track=${track}&format=json`
  )
    .then((res) => res.track.album.image[2]['#text'])
    .catch(() => '');

async function getMostListenedTracks() {
  const topTenTracks = await $fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=10&user=${config.LASTFM_USERNAME}&api_key=${config.LASTFM_WEB_API_KEY}&format=json`
  )
    .then((res) => {
      return res.toptracks.track;
    })
    .catch(() => null);

  if (topTenTracks !== null)
    await Promise.all(
      topTenTracks.map(
        async (track) =>
          await findAndAttachTrackImage(track.artist.name, track.name).then((res) => {
            track.image = res;
          })
      )
    );
  return topTenTracks;
}
