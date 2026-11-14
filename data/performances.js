window.PERFORMANCES = [
  {
    id: "2026-11-kabuki",
    label: "2026年11月 歌舞伎座 (Tokyo)",
    subtitle: "吉例顔見世大歌舞伎『通し狂言 仮名手本忠臣蔵』 · Nov 1–25, 2026 · Kabukiza",
    genre: "kabuki",
    dataFile: "data/2026-11-kabuki.js",
    parts: [
      {
        id: "matinee",
        label: "昼の部 Matinee 11:00 (仮名手本忠臣蔵)",
        badge: "MATINEE 11:00",
        scenes: [
          { id: "nov_kabuki_daijo", title: "大序：鶴ヶ岡社頭兜改めの場 (Act I: Tsurugaoka Shrine)" },
          { id: "nov_kabuki_sandanme", title: "三段目：門前進物の場・松の間刃傷の場 (Act III: Pine Corridor)" },
          { id: "nov_kabuki_yondanme", title: "四段目：扇ヶ谷塩冶判官切腹・城明渡しの場 (Act IV: Seppuku)" },
          { id: "nov_kabuki_michiyuki", title: "浄瑠璃：道行旅路の花聟 (Michiyuki: Okaru & Kanpei)" }
        ]
      },
      {
        id: "evening",
        label: "夜の部 Evening 16:30 (仮名手本忠臣蔵)",
        badge: "EVENING 16:30",
        scenes: [
          { id: "nov_kabuki_godanme", title: "五段目：山崎街道鉄砲渡し・二つ玉の場 (Act V: Yamazaki Highway)" },
          { id: "nov_kabuki_rokudanme", title: "六段目：与市兵衛内勘平腹切の場 (Act VI: Kanpei's Seppuku)" },
          { id: "nov_kabuki_shichidanme", title: "七段目：祇園一力茶屋の場 (Act VII: Ichiriki Teahouse)" },
          { id: "nov_kabuki_juichidanme", title: "十一段目：高家表門討入り・炭部屋・引揚げの場 (Act XI: Night Raid)" }
        ]
      }
    ]
  },
  {
    id: "2026-12-bunraku",
    label: "2026年12月 文楽 (Tokyo)",
    subtitle: "令和8年12月文楽公演 · Dec 6–19, 2026 · Tokyo Metropolitan Theatre",
    genre: "bunraku",
    dataFile: "data/2026-12-bunraku.js",
    parts: [
      {
        id: "part1",
        label: "第1部 Morning 11:00 (加賀見山旧錦絵)",
        badge: "PART 1 MORNING",
        scenes: [
          { id: "dec_p1_zouriuchi", title: "草履打の段 (The Sandal-Beating)" },
          { id: "dec_p1_roka", title: "廊下の段 (The Corridor)" },
          { id: "dec_p1_nagatsubone", title: "長局の段 (The Ladies' Quarters)" },
          { id: "dec_p1_okuniwa", title: "奥庭の段 (The Inner Garden)" }
        ]
      },
      {
        id: "part2",
        label: "第2部 Afternoon 14:30 (義経千本桜)",
        badge: "PART 2 AFTERNOON",
        scenes: [
          { id: "dec_p2_shiinoki", title: "椎の木の段 (The Pasania Tree)" },
          { id: "dec_p2_kogingo", title: "小金吾討死の段 (Death of Kogingo)" },
          { id: "dec_p2_sushiya", title: "すしやの段 (The Sushi Shop)" },
          { id: "dec_p2_michiyuki", title: "道行初音旅 (Hatsune's Journey)" }
        ]
      },
      {
        id: "part3",
        label: "第3部 Evening 19:00 (曾根崎心中)",
        badge: "PART 3 EVENING",
        scenes: [
          { id: "dec_p3_ikutama", title: "生玉社前の段 (Before Ikutama Shrine)" },
          { id: "dec_p3_tenmaya", title: "天満屋の段 (The Tenmaya House)" },
          { id: "dec_p3_tenjin", title: "天神森の段 (Tenjin Woods)" }
        ]
      }
    ]
  },
  {
    id: "2026-11-bunraku",
    label: "2026年11月 文楽 (Osaka)",
    subtitle: "令和8年錦秋文楽公演 · Oct 31–Nov 23, 2026 · National Bunraku Theatre",
    genre: "bunraku",
    dataFile: "data/2026-11-bunraku.js",
    parts: [
      {
        id: "part1",
        label: "第1部 Morning (心中宵庚申)",
        badge: "PART 1 MORNING",
        scenes: [
          { id: "morning_uedamura", title: "上田村の段 (Ueda Village)" },
          { id: "morning_yaoya", title: "八百屋の段 (Greengrocer Shop)" },
          { id: "morning_michiyuki", title: "道行思ひの短夜 (Travel Passage)" }
        ]
      },
      {
        id: "part2",
        label: "第2部 Afternoon (妹背山婦女庭訓)",
        badge: "PART 2 AFTERNOON",
        scenes: [
          { id: "afternoon_sugisakaya", title: "杉酒屋の段 (Sugi Sake Shop)" },
          { id: "afternoon_michiyuki", title: "道行恋苧環 (Spool of Love)" },
          { id: "afternoon_fukashichi", title: "鱶七使者の段 (Fukashichi Envoy)" },
          { id: "afternoon_kinden", title: "金殿の段 (The Golden Pavilion)" }
        ]
      }
    ]
  }
];
