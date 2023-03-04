const config = useRuntimeConfig();

export default  defineEventHandler(async(event) => {
    return {
      api: await getMostListenedTracks()
    }
  })

  async function addTrackImage(artist:any, track:any) {
    try {
      const response:any = await $fetch(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${config.LASTFM_WEB_API_KEY}&artist="+artist+"&track="+track+"&format=json`,
      );
      return response.track.album.image[2]['#text'];
    } catch (error) {
      return '';
    }
  }
  
  var _topTracks;
  async function getMostListenedTracks() {
    try {
      const response:any = await $fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=10&user=${config.LASTFM_USERNAME}&api_key=${config.LASTFM_WEB_API_KEY}&format=json`,
      );
      _topTracks=response.toptracks.track
      await Promise.all(_topTracks.map(async (track:any)=>{
       await addTrackImage(track.artist.name, track.name).then((res)=>{
          track.image[2]['#text']=res
        })
      }))
     return _topTracks;
    } catch (error) {
      console.error(error);
      return error;
    }
  }