/**
 * 希伯崙之家 — 網站文字
 * ============================================================
 * 改網站上的字，通常只需要改這一個檔案。
 *
 * 怎麼改：
 * 1. 找到要改的欄位
 * 2. 只更換雙引號 "" 裡面的文字
 * 3. 存檔後重新整理瀏覽器
 *
 * 請保留逗號 , 大括號 { } 和中括號 [ ]。
 * 還不確定的內容，請寫成：「（○○待補）」
 * 某一格文字裡不再出現「待補」二字，頁面上的待補標記就會自動消失。
 *
 * 相簿在 gallery，影片在 videos。照片檔放在 public/gallery/。
 * 更完整的說明在專案根目錄的 README.md。
 * ============================================================
 */

export const site = {
  meta: {
    title: "希伯崙之家｜基隆基督教會",
    description:
      "希伯崙之家是位於基隆市武嶺街的小型基督教會。耶穌說：我就是道路、真理、生命。（約翰福音 14:6）地址：基隆市武嶺街247～247-2號。電話：02-2434-6933。",
  },

  name: "希伯崙之家",

  // 首頁大標題上方的一行小字
  eyebrow: "基隆 · 基督教會",

  // 這兩行會一起出現在首頁。請維持經文原句，不要自行改寫。
  motto: "「耶穌說：我就是道路、真理、生命。」",
  mottoCitation: "約翰福音 14:6",

  address: "基隆市武嶺街247～247-2號",
  // 電話請保留開頭的 0，例如 02-2434-6933。網站會自動做成可撥打的連結。
  phone: "02-2434-6933",
  email: "hebronch@gmail.com",
  facebook: "https://www.facebook.com/hebron.klch/",
  facebookLabel: "臉書",

  heroPrimaryLabel: "查看聚會時間",
  heroSecondaryLabel: "聯絡我們",

  about: {
    heading: "關於我們",
    // 第二段是給會友看的簡介。還沒有定稿時，請保留「（教會簡介待補）」。
    // 可寫歡迎詞、異象或簡短歷史，但只填確實的內容，不要暫寫未核對的人名或年份。
    paragraphs: [
      "希伯崙之家是位於基隆市武嶺街的小型基督教會。",
      "（教會簡介待補）",
    ],
  },

  gatherings: {
    heading: "聚會時間",
    intro: "時間尚未公告。想參加的朋友，請先用電話或電子郵件詢問。",
    empty: "（聚會時間待補）",
    // 每一組大括號是一列。名稱、時間、地點都還沒有公開資料，所以先留待補。
    // 知道實際時間後，把引號裡的「（……待補）」換成實際文字即可。
    // 要再加一列：複製一整組 { ... }，貼到上一組後面，並在上一組結尾加上逗號。
    items: [
      {
        name: "（聚會名稱待補）",
        time: "（聚會時間待補）",
        note: "（地點或備註待補）",
      },
    ],
  },

  events: {
    heading: "最新活動",
    intro: "以下訊息轉自教會的臉書專頁。",
    empty: "目前沒有公告中的活動。",
    // dateKind 只能寫下面兩個其中一個：
    // "posted" 表示 date 是貼文日期，不代表活動就在這一天舉辦。
    // "held"  表示 date 是活動舉辦日期。
    dateKindLabels: {
      posted: "貼文日期",
      held: "活動日期",
    },
    // 要新增活動：複製下面一整組 { ... }，貼到 items 裡，改成實際內容。
    // 沒有活動時，把 items 改成空的：items: []
    items: [
      {
        date: "2026-07-26",
        dateKind: "posted",
        tag: "課程",
        title: "家庭園藝、種子盆栽",
        summary: "歡迎參加，不收學費，自付材料費。",
        note: "（上課時間與地點待補）",
        image: "gallery/2026-gardening-poster.webp",
        imageWidth: 1024,
        imageHeight: 1536,
        imageAlt: "家庭園藝、種子盆栽課程海報，寫著不收學費、自付材料費，以及 8/7 至 8/28、每週五早上 10 點上課。",
        href: "https://www.facebook.com/photo.php?fbid=1514916340673916&set=pb.100064666930702.-2207520000&type=3",
        hrefLabel: "在臉書查看",
      },
    ],
  },

  gallery: {
    heading: "相簿",
    intro: "照片來自教會的臉書專頁，依活動與日期排列。點照片可以放大。",
    empty: "目前沒有照片。",
    closeLabel: "關閉",
    prevLabel: "上一張",
    nextLabel: "下一張",
    facebookLabel: "在 Facebook 查看這張照片",
    countLabel: "第 {current} 張，共 {total} 張",
    // 每一組 groups 是一個活動。photos 裡每一張要有 src（放大圖）、thumb（小圖）、alt、width、height。
    // href 是這張照片在臉書的網址，沒有就寫 ""。
    // 新增照片：把圖檔放到 public/gallery/，小圖放到 public/gallery/thumbs/，再複製一組 { ... }。
    groups: [
      {
        title: "2026年2月27日",
        dateLabel: "2026年2月27日",
        photos: [
          {
            src: "gallery/2026-02-27-outing.webp",
            thumb: "gallery/thumbs/2026-02-27-outing.webp",
            width: 720,
            height: 960,
            alt: "2026年2月27日，會友站在櫻花樹與池塘旁的石板路上合影。",
            href: "https://www.facebook.com/photo.php?fbid=1382836080548610&set=pb.100064666930702.-2207520000&type=3",
          },
        ],
      },
      {
        title: "2025聖誕晚會",
        dateLabel: "2025年12月26日",
        photos: [
          {
            src: "gallery/2025-12-26-party.webp",
            thumb: "gallery/thumbs/2025-12-26-party.webp",
            width: 720,
            height: 482,
            alt: "2025聖誕晚會，大家戴著聖誕帽、穿著戲服，在教會裡合影。",
            href: "https://www.facebook.com/photo.php?fbid=1329122975919921&set=pb.100064666930702.-2207520000&type=3",
          },
        ],
      },
      {
        title: "2025武小聖誕劇演出",
        dateLabel: "2025年12月26日",
        photos: [
          {
            src: "gallery/2025-12-26-play.webp",
            thumb: "gallery/thumbs/2025-12-26-play.webp",
            width: 720,
            height: 540,
            alt: "2025武小聖誕劇演出，演員在舞台上張開雙手謝幕。燈牌寫著希伯崙之家戲劇表演「最好的師傅」。",
            href: "https://www.facebook.com/photo.php?fbid=1329121915920027&set=pb.100064666930702.-2207520000&type=3",
          },
        ],
      },
      {
        title: "音樂劇《成為祝福》",
        dateLabel: "2024年12月26日",
        photos: [
          {
            src: "gallery/2024-12-26-blessing-06.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-06.webp",
            width: 720,
            height: 540,
            alt: "2024年12月26日，音樂劇《成為祝福》演出時，體育館裡坐滿小朋友，舞台燈牌寫著演出名稱。",
            href: "https://www.facebook.com/photo.php?fbid=1028893089276246&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2024-12-26-blessing-05.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-05.webp",
            width: 720,
            height: 540,
            alt: "2024年12月26日，音樂劇《成為祝福》演出時，小朋友坐在體育館裡聽講。",
            href: "https://www.facebook.com/photo.php?fbid=1028893102609578&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2024-12-26-blessing-07.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-07.webp",
            width: 720,
            height: 406,
            alt: "2024年12月26日，音樂劇《成為祝福》的學生演員在舞台上舉起雙手。",
            href: "https://www.facebook.com/photo.php?fbid=1028893072609581&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2024-12-26-blessing-03.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-03.webp",
            width: 720,
            height: 540,
            alt: "2024年12月26日，音樂劇《成為祝福》的學生演員與主持人站在舞台上合影。",
            href: "https://www.facebook.com/photo.php?fbid=1028893159276239&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2024-12-26-blessing-04.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-04.webp",
            width: 720,
            height: 540,
            alt: "2024年12月26日，音樂劇《成為祝福》演出中，學生穿著印有 Become a Blessing 的彩衣在台上表演。",
            href: "https://www.facebook.com/photo.php?fbid=1028893142609574&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2024-12-26-blessing-01.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-01.webp",
            width: 720,
            height: 496,
            alt: "2024年12月26日，音樂劇《成為祝福》演出後，兩人在台上互贈感謝狀，學生穿著彩衣站在旁邊。",
            href: "https://www.facebook.com/photo.php?fbid=1028893232609565&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2024-12-26-blessing-02.webp",
            thumb: "gallery/thumbs/2024-12-26-blessing-02.webp",
            width: 720,
            height: 522,
            alt: "2024年12月26日，音樂劇《成為祝福》演出後，另一位來賓在台上接受禮物，學生們在旁鼓掌。",
            href: "https://www.facebook.com/photo.php?fbid=1028893175942904&set=pb.100064666930702.-2207520000&type=3",
          },
        ],
      },
      {
        title: "2023年12月20日戲劇演出",
        dateLabel: "2023年12月20日",
        photos: [
          {
            src: "gallery/2023-12-20-play-04.webp",
            thumb: "gallery/thumbs/2023-12-20-play-04.webp",
            width: 720,
            height: 540,
            alt: "2023年12月20日，戲劇演出後大家在教會裡合影，場內有氣球和彩帶。",
            href: "https://www.facebook.com/photo.php?fbid=771158978382993&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2023-12-20-play-02.webp",
            thumb: "gallery/thumbs/2023-12-20-play-02.webp",
            width: 720,
            height: 540,
            alt: "2023年12月20日，會友坐在教會裡看戲劇演出，天花板掛著彩色氣球。",
            href: "https://www.facebook.com/photo.php?fbid=771159048382986&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2023-12-20-play-03.webp",
            thumb: "gallery/thumbs/2023-12-20-play-03.webp",
            width: 720,
            height: 540,
            alt: "2023年12月20日，戲劇演出結束，演員在舞台上舉手致意。",
            href: "https://www.facebook.com/photo.php?fbid=771158981716326&set=pb.100064666930702.-2207520000&type=3",
          },
          {
            src: "gallery/2023-12-20-play-01.webp",
            thumb: "gallery/thumbs/2023-12-20-play-01.webp",
            width: 720,
            height: 540,
            alt: "2023年12月20日，參加戲劇演出的會友穿著戲服、戴著面具，在教會裡合影。",
            href: "https://www.facebook.com/photo.php?fbid=771159108382980&set=pb.100064666930702.-2207520000&type=3",
          },
        ],
      },
      {
        title: "聚會場所",
        dateLabel: "2022年10月3日",
        photos: [
          {
            src: "gallery/2022-10-03-cross.webp",
            thumb: "gallery/thumbs/2022-10-03-cross.webp",
            width: 720,
            height: 728,
            alt: "2022年10月3日，聚會場所布幕上掛著一座木十字架。",
            href: "https://www.facebook.com/photo/?fbid=461488456016715&set=a.461488422683385",
          },
        ],
      },
    ],
  },

  videos: {
    heading: "影片",
    intro: "影片來自教會的臉書專頁。若播放器沒有出現，請點「在 Facebook 觀看」。",
    watchLabel: "在 Facebook 觀看",
    moreHeading: "其他影片",
    // embed 寫 true 會內嵌播放器，寫 false 只顯示連結。
    // 新增影片：複製一組 { ... }，改 title 和 href。href 請用臉書影片網址。
    items: [
      {
        title: "2025聖誕報佳音",
        href: "https://www.facebook.com/hebron.klch/videos/2055551268524709/",
        embed: true,
      },
      {
        title: "希伯崙之家短片",
        href: "https://www.facebook.com/hebron.klch/videos/1210406304090535/",
        embed: true,
      },
      {
        title: "2/6星期六桌遊",
        href: "https://www.facebook.com/hebron.klch/videos/399744034657169/",
        embed: true,
      },
      {
        title: "2018/11/24 青少年特別聚會",
        href: "https://www.facebook.com/hebron.klch/videos/338360873413196/",
        embed: true,
      },
      {
        title: "2018武中英文營",
        href: "https://www.facebook.com/hebron.klch/videos/1950794064971133/",
        embed: true,
      },
      {
        title: "20190720盛利祖的重生",
        href: "https://www.facebook.com/hebron.klch/videos/441227889937233/",
        embed: true,
      },
      {
        title: "2016年希伯崙之家英文營",
        href: "https://www.facebook.com/hebron.klch/videos/1186146061435941",
        embed: false,
      },
      {
        title: "2017英文營-美國之夜4",
        href: "https://www.facebook.com/hebron.klch/videos/1569937609723449/",
        embed: false,
      },
      {
        title: "2017英文營-美國之夜3",
        href: "https://www.facebook.com/hebron.klch/videos/1569934953057048/",
        embed: false,
      },
      {
        title: "2017英文營-美國之夜2",
        href: "https://www.facebook.com/hebron.klch/videos/1569933079723902/",
        embed: false,
      },
    ],
  },

  contact: {
    heading: "聯絡我們",
    intro: "地址、電話與電子郵件如下。",
    mapLabel: "交通",
    mapLinkLabel: "在 Google 地圖開啟",
    mapFallback: "若地圖沒有顯示，請用上方連結開啟 Google 地圖。",
    labels: {
      address: "地址",
      phone: "電話",
      email: "電子郵件",
    },
  },

  footer: {
    note: "標示「待補」的內容尚未公告，請先用電話或電子郵件確認。",
    backToTop: "回到上方",
  },
};
