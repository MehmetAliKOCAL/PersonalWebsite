const age = Math.abs(
  new Date(Date.now() - new Date("08/25/2000").getTime()).getUTCFullYear() -
    1970
);

const texts = {
  loading: "Yükleniyor🧙🏼‍♂️",
  hello: "Merhaba👋",
  infoAboutMe: [
    `Adım Mehmet, ${age} yaşındayım ve öğrenciyim.`,
    "Yazılım ve 3D modelleme ile ilgileniyorum.",
    "Şu anda Blender, C#, Vue.js, ve Nuxt.js öğreniyorum.",
    "Ayrıca video oyunlarını çok seviyorum.",
    "Boş zamanlarımda hobi olarak Unity ile oyun yapmaya çalışıyorum.",
  ],
  currentlyWorkingOnTitle: "Şu An Üzerinde Çalıştığım Proje 👨🏻‍💻🌱",
  previousProjectsTitle: "Tamamladığım Projeler 👨🏻‍💻🌳",
  proficiencies: "Kullandığım Araçlar ✨",
  recentlyPlayedGames: "Son Oynadığım Oyunlar 🎮",
  gameNotAvailable: "Bu oyun artık Steam'de mevcut değil.",
  noGamesPlayed: "Görünüşe göre son iki hafta içinde hiç oyun oynamadım. 🥸",
  mostPlayedGames: "En Çok Oynadığım Oyunlar 🎮🔝",
  currentlyListening: "Şu An Dinliyorum",
  recentlyListenedTracks: "Son Dinlediğim Parçalar 🎧",
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
  listens: "Dinleme",
  headerHello: "Merhaba!",
  headerProficiencies: "Araçlarım",
  headerProjects: "Projelerim",
  headerGamesPlayed: "Oynadığım Oyunlar",
  headerTracksListened: "Dinlediğim Parçalar",
  footerGetInTouchTitle: "~ Bağlantı Kur",
  footerSocialsTitle: "Sosyal",
  footerContactTitle: "İletişim",
  footerMailMe: "E-Posta Gönder",
  footerOpenSource: "Bu site açık kaynaklı!",
  buttonHomepage: "Ana Sayfa",
  pageUnderConstruction: "Üzgünüm, bu sayfa henüz yapım aşamasında.🥸",
  languages: [
    { name: "English", iso: "en", icon: "/uk_flag.jpg" },
    { name: "Türkçe", iso: "tr", icon: "/tr_flag.jpg" },
  ],
  currentlyWorkingOn: [
    {
      role: "Dashboard - ",
      name: "Clemta",
      link: "https://clemta.com",
      emoji: "📊",
      summary: "bu fintech SaaS şirketi için dashboard'lar geliştiriyorum",
    },
  ],
  previousProjects: [
    {
      role: "Site - ",
      name: "QRGen",
      link: "https://qrgen.gwyndev.com",
      emoji: "📷",
      summary:
        "kişiselleştirilebilir QR kodlar oluşturabileceğiniz bir internet sitesi",
    },
    {
      role: "Site - ",
      name: "YT Music Clone",
      link: "https://music.gwyndev.com",
      emoji: "🎸",
      summary: "fonksiyonel bir YouTube Music klonu denemesi (tamamlanmadı)",
    },
    {
      role: "Site - ",
      name: "CFP",
      link: "https://clemtacs.gwyndev.com",
      emoji: "💼",
      summary:
        "bir iş başvurusu için tamamladığım mülakat öncesi ön uç geliştirme ödevi",
    },
    {
      role: "Site - ",
      name: "SVFP",
      link: "https://sikayetvarcs.gwyndev.com/students",
      emoji: "💼",
      summary:
        "bir iş başvurusu için tamamladığım mülakat öncesi ön uç geliştirme ödevi",
    },
    {
      role: "Renk Teması - ",
      name: "Apatite Dark",
      link: "https://marketplace.visualstudio.com/items?itemName=GwynDev.Apatite-Dark",
      emoji: "🎨",
      summary: "Visual Studio Code için koyu bir renk teması",
    },
    {
      role: "Mod - ",
      name: "Volcanoids Türkçe Yama",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2952920316",
      emoji: "⚙️",
      summary: "Volcanoids oyunu için bir yerelleştirme modu",
    },
    {
      role: "Site - ",
      name: "Corner Posts",
      link: "https://cornerposts.gwyndev.com",
      emoji: "✒️",
      summary: "köşe yazısı paylaşabileceğiniz bir internet sitesi",
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
      name: "RTEU STS",
      link: "https://stajtakip.vercel.app/",
      emoji: "🧑🏻‍🏫",
      summary:
        "bir üniversite tarafından öğrenci stajlarını yönetmek ve takip etmek için kullanılan bir internet sitesi",
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
