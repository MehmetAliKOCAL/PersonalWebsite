const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  return {
    api: await getMostListenedTracks(),
  };
});

async function findAndAttachTrackImage(artist, track) {
  try {
    return await $fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${config.LASTFM_WEB_API_KEY}&artist=${artist}&track=${track}&format=json`
    ).then((res) => {
      return res.track.album.image[2]["#text"];
    });
  } catch (error) {
    return "";
  }
}

let topTenTracks;
async function getMostListenedTracks() {
  try {
    topTenTracks = await $fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=10&user=${config.LASTFM_USERNAME}&api_key=${config.LASTFM_WEB_API_KEY}&format=json`
    ).then((res) => {
      return res.toptracks.track;
    });

    await Promise.all(
      topTenTracks.map(async (track) => {
        await findAndAttachTrackImage(track.artist.name, track.name).then(
          (res) => {
            track.image[2]["#text"] = res;
          }
        );
      })
    );

    return topTenTracks;
  } catch (error) {
    return error;
  }
}
