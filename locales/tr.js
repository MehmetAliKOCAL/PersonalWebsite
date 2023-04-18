const age = Math.abs(
  new Date(Date.now() - new Date("08/25/2000").getTime()).getUTCFullYear() -
    1970
);

const texts = {
  loading: "Yükleniyor🧙🏼‍♂️",
  hello: "Merhaba👋",
  infoAboutMe1: `Adım Mehmet, ${age} yaşındayım ve öğrenciyim.`,
  infoAboutMe2: "Yazılım ve 3D modelleme ile ilgileniyorum.",
  infoAboutMe3: "Şu anda Blender, C#, Vue.js, ve Nuxt.js öğreniyorum.",
  infoAboutMe4: "Ayrıca video oyunlarını çok seviyorum.",
  infoAboutMe5:
    "Boş zamanlarımda hobi olarak Unity ile oyun yapmaya çalışıyorum.",
  currentlyWorkingOnTitle: "Şu An Üzerinde Çalıştığım Proje 👨🏻‍💻🌱",
  checkIt: "projeyi incele!",
  previousProjectsTitle: "Tamamladığım Projeler 👨🏻‍💻🌳",
  seeDetails: "detayları gör",
  proficiencies: "Kullandığım Araçlar ✨",
  recentlyPlayedGames: "Son Oynadığım Oyunlar 🎮",
  gameNotAvailable: "Bu oyun artık Steam'de mevcut değil.",
  noGamesPlayed: "Görünüşe göre son iki hafta içinde hiç oyun oynamadım. 🥸",
  mostPlayedGames: "En Çok Oynadığım Oyunlar 🎮🔝",
  currentlyListening: "Şu An Dinliyorum 🎧",
  recentlyListenedTracks: "Son Dinlediğim Parçalar 📻",
  mostListenedTracks: "En Çok Dinlediğim Parçalar 🍒🔝",
  inLastTwoWeeks: "son 2 haftada",
  total: "toplam",
  totalPlaytime: "Toplam Süre",
  lastPlayed: "Son Oynama",
  today: "Bugün",
  yesterday: "Dün",
  yearsAgo: "yıl önce",
  daysAgo: "gün önce",
  minute: "dakika",
  minutes: "dakika",
  oneHour: "1 saat",
  hours: "saat",
  headerHello: "Merhaba!",
  headerProficiencies: "Araçlarım",
  headerProjects: "Projelerim",
  headerGamesPlayed: "Oynadığım Oyunlar",
  headerTracksListened: "Dinlediğim Parçalar",
  footerGetInTouch: "~ Benimle Bağlantı Kur",
  footerSocials: "Sosyal Hesaplarım",
  footerContact: "İletişim",
  footerMailMe: "E-Posta Gönder",
  buttonHomepage: "Ana Sayfa",
  pageUnderConstruction: "Üzgünüm, bu sayfa henüz yapım aşamasında.🥸",
  currentlyWorkingOn:
    "Bir üniversitenin kullanacağı staj süreci takip ve yönetim uygulamasının ön yüzü",
  previousProjects: [
    {
      role: "Mod - ",
      name: "Volcanoids Türkçe Yama",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2952920316",
      emoji: "⚙️",
      summary: "Volcanoids oyunu için bir yerelleştirme modu",
    },
    {
      role: "Site - ",
      name: "GwynDev",
      link: "https://gwyndev.com/",
      emoji: "📌",
      summary: "şahsi internet sitem (şu an buradasın!)",
    },
    {
      role: "Site Ön Yüzü - ",
      name: "AhniWeb",
      link: "https://ahni-web.vercel.app/",
      emoji: "🎓",
      summary:
        "Ahni lisesi mezunlarının buluşma noktası olarak kullandıkları bir internet sitesi",
    },
  ],
};

export default texts;
