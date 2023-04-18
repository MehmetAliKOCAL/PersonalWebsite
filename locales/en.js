const age = Math.abs(
  new Date(Date.now() - new Date("08/25/2000").getTime()).getUTCFullYear() -
    1970
);

const texts = {
  loading: "Loading🧙🏼‍♂️",
  hello: "Hello👋",
  infoAboutMe1: `I\'m Mehmet, a ${age} years old student.`,
  infoAboutMe2: "I enjoy programming and 3D modeling.",
  infoAboutMe3: "I'm currently studying Blender, C#, Vue.js, and Nuxt.js.",
  infoAboutMe4: "Also, I love video games.",
  infoAboutMe5: "I try to code games in Unity3D for fun in my spare time.",
  currentlyWorkingOnTitle: "Currently Working On 👨🏻‍💻🌱",
  checkIt: "check it!",
  previousProjectsTitle: "Previous Projects 👨🏻‍💻🌳",
  seeDetails: "see details",
  proficiencies: "Proficiencies ✨",
  recentlyPlayedGames: "Recently Played Games 🎮",
  gameNotAvailable: "This game is not available on Steam.",
  noGamesPlayed:
    "It seems like I haven't played any video games in the last 2 weeks. 🥸",
  mostPlayedGames: "Most Played Games 🎮🔝",
  currentlyListening: "Currently Listening 🎧",
  recentlyListenedTracks: "Recently Listened Tracks 📻",
  mostListenedTracks: "Most Listened Tracks 🍒🔝",
  inLastTwoWeeks: "in last 2 weeks",
  total: "total",
  totalPlaytime: "Total playtime",
  lastPlayed: "Last played",
  today: "Today",
  yesterday: "Yesterday",
  yearsAgo: "years ago",
  daysAgo: "days ago",
  minute: "minute",
  minutes: "minutes",
  oneHour: "1 hour",
  hours: "hours",
  headerHello: "Hello!",
  headerProficiencies: "Proficiencies",
  headerProjects: "Projects",
  headerGamesPlayed: "Games Played",
  headerTracksListened: "Tracks Listened",
  footerGetInTouch: "~ Get In Touch",
  footerSocials: "Socials",
  footerContact: "Contact",
  footerMailMe: "Mail Me ",
  buttonHomepage: "Homepage",
  pageUnderConstruction: "Sorry, this page is under construction.🥸",
  currentlyWorkingOn:
    "Front-end of an internship tracking app that will be used by a university",
  previousProjects: [
    {
      role: "Made",
      name: "Volcanoids Turkish Localization",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2952920316",
      emoji: "⚙️",
      summary: "a localization mod for the Volcanoids game",
    },
    {
      role: "Made",
      name: "GwynDev",
      link: "https://gwyndev.com/",
      emoji: "📌",
      summary: "to show off things about me",
    },
    {
      role: "Developed the front-end of",
      name: "AhniWeb",
      link: "https://ahni-web.vercel.app/",
      emoji: "🎓",
      summary: "the graduates' meeting website of a high school",
    },
  ],
};

export default texts;
