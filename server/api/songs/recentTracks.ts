const config = useRuntimeConfig();

export default defineEventHandler(async(event) => {
    return {
      api: await getRecentlyListenedTracks()
    }
  })

  async function getRecentlyListenedTracks() {
    try {
      const response:any = await $fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=${config.LASTFM_USERNAME}&api_key=${config.LASTFM_WEB_API_KEY}&format=json`,
      );
      return response.recenttracks.track;
    } catch (error) {
      return error;
    }
  }