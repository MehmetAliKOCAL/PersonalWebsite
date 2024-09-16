const age = Math.abs(
  new Date(Date.now() - new Date("08/25/2000").getTime()).getUTCFullYear() -
    1970
);

const texts = {
  loading: "Loading🧙🏼‍♂️",
  hello: "Hello👋",
  infoAboutMe: [
    `I'm Mehmet, a ${age} years old student.`,
    "I enjoy programming and 3D modeling.",
    "I'm currently studying Blender, C#, Vue.js, and Nuxt.js.",
    "Also, I love video games.",
    "I try to code games in Unity3D for fun in my spare time.",
  ],
  currentlyWorkingOnTitle: "Currently Working On 👨🏻‍💻🌱",
  previousProjectsTitle: "Previous Projects 👨🏻‍💻🌳",
  proficiencies: "Proficiencies ✨",
  recentlyPlayedGames: "Recently Played Games 🎮",
  gameNotAvailable: "This game is not available on Steam.",
  noGamesPlayed:
    "It seems like I haven't played any video games in the last 2 weeks. 🥸",
  mostPlayedGames: "Most Played Games 🎮🔝",
  currentlyListening: "Currently Listening",
  recentlyListenedTracks: "Recently Listened Tracks 🎧",
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
  listens: "Listens",
  headerHello: "Hello!",
  headerProficiencies: "Proficiencies",
  headerProjects: "Projects",
  headerGamesPlayed: "Games Played",
  headerTracksListened: "Tracks Listened",
  footerGetInTouchTitle: "~ Get In Touch",
  footerSocialsTitle: "Socials",
  footerContactTitle: "Contact",
  footerMailMe: "Mail Me ",
  footerOpenSource: "This website is open-source!",
  buttonHomepage: "Homepage",
  pageUnderConstruction: "Sorry, this page is under construction.🥸",
  languages: [
    {
      inThisLanguage: "English",
      inOwnLanguage: "English",
      setLanguageTo: "en",
    },
    {
      inThisLanguage: "Turkish",
      inOwnLanguage: "Türkçe",
      setLanguageTo: "tr",
    },
  ],
  currentlyWorkingOn: [
    {
      role: "Making",
      name: "YT Music Clone",
      link: "https://music.gwyndev.com",
      emoji: "🎸",
      summary: "a functional YouTube Music clone",
    },
  ],
  previousProjects: [
    {
      role: "Made",
      name: "CFP",
      link: "https://clemtacs.gwyndev.com",
      emoji: "💼",
      summary:
        "a pre-interview front-end app project I made for a job application",
    },
    {
      role: "Made",
      name: "SVFP",
      link: "https://sikayetvarcs.gwyndev.com/students",
      emoji: "💼",
      summary:
        "a pre-interview front-end app project I made for a job application",
    },
    {
      role: "Made",
      name: "Apatite Dark",
      link: "https://marketplace.visualstudio.com/items?itemName=GwynDev.Apatite-Dark",
      emoji: "🎨",
      summary: "a Visual Studio Code dark color theme",
    },
    {
      role: "Made",
      name: "Volcanoids Turkish Localization",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2952920316",
      emoji: "⚙️",
      summary: "a localization mod for a video game",
    },
    {
      role: "Made",
      name: "Corner Posts",
      link: "https://cornerposts.gwyndev.com",
      emoji: "✒️",
      summary: "a website that you can write corner posts",
    },
    {
      role: "Made",
      name: "GwynDev",
      link: "https://gwyndev.com/",
      emoji: "📌",
      summary: "my personal website (you are here!)",
    },
    {
      role: "Front-end of",
      name: "RTEU STS",
      link: "https://stajtakip.vercel.app/",
      emoji: "🧑🏻‍🏫",
      summary: "an internship tracking and management app for a university",
    },
    {
      role: "Front-end of",
      name: "AhniWeb",
      link: "https://ahni-web.vercel.app/",
      emoji: "🎓",
      summary: "the graduates' meeting website of a high school",
    },
  ],
};

export default texts;
