let recentlyPlayedGames = ref(null);
async function getRecentlyPlayedGames() {
  await fetch("https://pwapi.fly.dev/steam/recentlyPlayedGames", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((text) => {
      return (recentlyPlayedGames.value = text);
    })
    .catch((e) =>
      console.error(
        "ERROR! Can't get the recently played games data from Steam. Error Message: " +
          e
      )
    );
}

let mostPlayedGames = ref(null);
async function getMostPlayedGames() {
  await fetch("https://pwapi.fly.dev/steam/mostPlayedGames", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return (mostPlayedGames.value = json);
    })
    .catch((e) =>
      console.error(
        "ERROR! Can't get the recently played games data from Steam. Error Message: " +
          e
      )
    );
}

function calculateLastTimePlayed(seconds) {
  const resultInDays = Math.round((Date.now() / 1000 - seconds) / 60 / 60 / 24);
  if (resultInDays < 1) {
    return "Today";
  } else if (resultInDays < 2) {
    return "Yesterday";
  } else if (resultInDays > 365) {
    return (resultInDays / 365).toFixed(0) + " years ago";
  } else {
    return resultInDays + " days ago";
  }
}

function calculatePlayTime(minutes, shouldBeRounded) {
  if (minutes < 2) {
    return minutes + " minute";
  } else if (minutes < 60) {
    return minutes + " minutes";
  } else if (minutes / 60 < 1.2) {
    return "1 hour";
  } else {
    if (
      (minutes / 60).toFixed(1) % 1 < 0.2 ||
      (minutes / 60).toFixed(1) % 1 >= 0.8 ||
      shouldBeRounded == true
    ) {
      return Math.round(minutes / 60) + " hours";
    } else {
      return (minutes / 60).toFixed(1) + " hours";
    }
  }
}
