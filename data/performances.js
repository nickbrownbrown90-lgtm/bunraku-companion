window.PERFORMANCES = [
  {
    id: "2026-11-kabuki",
    label: "2026年11月 歌舞伎座 (Tokyo)",
    subtitle: "吉例顔見世大歌舞伎『通し狂言 仮名手本忠臣蔵』 · Nov 1–25, 2026 · Kabukiza",
    genre: "kabuki",
    dataFile: "data/2026-11-kabuki.js",
    // Full-text acts are merged over the highlights by data/kabuki-full/merge.js (must stay last).
    dataFiles: [
      "data/2026-11-kabuki.js",
      "data/kabuki-full/nov_kabuki_daijo.js",
      "data/kabuki-full/nov_kabuki_michiyuki.js",
      "data/kabuki-full/nov_kabuki_godanme.js",
      "data/kabuki-full/nov_kabuki_rokudanme.js",
      "data/kabuki-full/nov_kabuki_shichidanme.js",
      "data/kabuki-full/nov_kabuki_juichidanme.js",
      "data/kabuki-full/merge.js"
    ],
    venue: {
      name: "Kabukiza Theatre (Ginza, Tokyo)",
      nameJp: "歌舞伎座（東京・東銀座）",
      address: "4-12-15 Ginza, Chūō-ku, Tokyo 104-0061 (〒104-0061 東京都中央区銀座4-12-15)",
      access: "Directly connected to Higashi-Ginza Station (東銀座駅, Tokyo Metro Hibiya Line / Toei Asakusa Line) via Exit 3 (地下直結・3番出口). 5-minute walk from Ginza Station (銀座駅, Exit A7).",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kabukiza+Theatre+Ginza+Tokyo",
      scheduleNote: "Nov 1–25, 2026 (Dark days / 休演日: Nov 9 & Nov 17; Private performances / 貸切: Nov 14 Matinee & Nov 22 Evening). Matinee (昼の部) 11:00 AM (kōjō ningyō cast announcement ~10:50 AM — be seated early) / Evening (夜の部) 4:30 PM. Note: Act IV (四段目) is a 通さん場 (tōsanba): latecomers are held outside the auditorium once the act begins at 13:11."
    },
    castSchedule: {
      "2026-11-01": { matinee: "A", evening: "A" },
      "2026-11-02": { matinee: "B", evening: "B" },
      "2026-11-03": { matinee: "A", evening: "A" },
      "2026-11-04": { matinee: "B", evening: "B" },
      "2026-11-05": { matinee: "A", evening: "A" },
      "2026-11-06": { matinee: "A", evening: "A" },
      "2026-11-07": { matinee: "B", evening: "B" },
      "2026-11-08": { matinee: "B", evening: "B" },
      "2026-11-09": { matinee: null, evening: null, note: "Dark day (休演日)" },
      "2026-11-10": { matinee: "A", evening: "A" },
      "2026-11-11": { matinee: "A", evening: "A" },
      "2026-11-12": { matinee: "B", evening: "B" },
      "2026-11-13": { matinee: "B", evening: "B" },
      "2026-11-14": { matinee: "private", evening: "A" },
      "2026-11-15": { matinee: "A", evening: "A" },
      "2026-11-16": { matinee: "B", evening: "B" },
      "2026-11-17": { matinee: null, evening: null, note: "Dark day (休演日)" },
      "2026-11-18": { matinee: "B", evening: "B" },
      "2026-11-19": { matinee: "A", evening: "A" },
      "2026-11-20": { matinee: "A", evening: "A" },
      "2026-11-21": { matinee: "B", evening: "B" },
      "2026-11-22": { matinee: "B", evening: "private" },
      "2026-11-23": { matinee: "A", evening: "A" },
      "2026-11-24": { matinee: "B", evening: "B" },
      "2026-11-25": { matinee: "B", evening: "B" }
    },
    ticketing: {
      officialLinks: [
        {
          label: "Ticket Web Shochiku (チケットWeb松竹)",
          lang: "Japanese",
          url: "https://www1.ticket-web-shochiku.com/t/",
          badge: "Official Box Office (JP)",
          description: "Direct seat selection and advance reservations for all Kabukiza seating classes (24-hour online booking)."
        },
        {
          label: "Kabukiweb — Official English Ticketing",
          lang: "English",
          url: "https://www.kabukiweb.net/theatres/kabukiza/tickets/",
          badge: "English Portal",
          description: "International visitor portal for advance reserved seats and English guide information via Shochiku."
        },
        {
          label: "Kabuki-bito Performance Schedule & Guide",
          lang: "Japanese",
          url: "https://www.kabuki-bito.jp/theaters/kabukiza/",
          badge: "Cast & Schedule",
          description: "Official Shochiku portal featuring cast lists, curtain times, lobby announcements, and intermission dining reservations."
        },
        {
          label: "Single-Act Tickets (幕見席 / KABUKI WEB Guide)",
          lang: "JP / EN",
          url: "https://www.kabukiweb.net/news/kabukiza/singleact_november_2026/",
          badge: "Hitomakumi-seki",
          description: "Official November 2026 schedule, per-act pricing, and booking guide for 4th-floor Single-Act (Hitomakumi-seki) tickets."
        }
      ],
      pricingTiers: [
        { tier: "Special Seat (特等席)", price: "¥20,000", note: "Premier 1st floor center orchestra seats with prime stage and Hanamichi sightlines." },
        { tier: "1st Class Box Seat (1階桟敷席)", price: "¥20,000", note: "Traditional raised tatami box seating along the sides of the 1st floor (no tea service this month)." },
        { tier: "1st Class Seat (1等席)", price: "¥18,000", note: "Main 1st floor orchestra (including seats near the Hanamichi) and front 2nd floor." },
        { tier: "2nd Class A Seat (2等A席)", price: "¥15,000", note: "Rear 1st floor and prime 2nd floor center/side seats with full stage visibility." },
        { tier: "2nd Class B Seat (2等B席)", price: "¥14,000", note: "Mid-to-rear 2nd floor seating." },
        { tier: "2nd Class C Seat (2等C席)", price: "¥9,000", note: "Side 1st floor / rear 2nd floor seating." },
        { tier: "3rd Floor A Seat (3階A席)", price: "¥6,500", note: "Front section of the 3rd floor balcony; high-angle overview of the entire stage." },
        { tier: "3rd Floor B Seat (3階B席)", price: "¥5,000", note: "Rear section of the 3rd floor balcony; budget-friendly reserved seating." },
        { tier: "4th Floor Single-Act (4階一幕見席)", price: "Varies by act — see KABUKI WEB single-act page", note: "Per-act tickets for individual scenes; see https://www.kabukiweb.net/news/kabukiza/singleact_november_2026/ for exact per-act prices and availability." }
      ],
      sameDayInfo: "Kabukiza offers 4th-floor Single-Act tickets (一幕見席 / Hitomakumi-seki) allowing you to watch an individual act; prices vary by act — see https://www.kabukiweb.net/news/kabukiza/singleact_november_2026/. Captioning device ticket option: +¥1,500 (English / Simplified Chinese). Under-30 (U30) discount: same-day tickets are half price if seats remain.",
      lobbyAmenities: [
        {
          item: "Captioning Device Ticket Option (字幕ガイド / English & Simplified Chinese)",
          price: "+¥1,500",
          description: "Synchronized captioning device available as a +¥1,500 ticket option (English and Simplified Chinese). Audio Earphone Guide counters are also located inside the 1st-floor lobby."
        },
        {
          item: "Official Souvenir Program / Sujigaki (筋書)",
          price: "¥1,500",
          description: "Sold at lobby stalls. Includes full-color stage photography (inserted mid-month), complete cast biographies, plot synopses in Japanese & English, and historical essays."
        },
        {
          item: "Complimentary English Flyer",
          price: "Free",
          description: "Available at the information desk and Earphone Guide counter summarizing the acts of Kanadehon Chūshingura."
        }
      ]
    },
    resources: {
      digitalPortals: [
        {
          title: "Kabukiweb (Shochiku Official English Guide)",
          url: "https://www.kabukiweb.net/",
          badge: "Official EN",
          description: "Comprehensive English encyclopedia of Kabuki conventions, actor lineages, makeup (kumadori), music, and current Kabukiza synopses."
        },
        {
          title: "Kabuki-bito (歌舞伎美人 — 松竹公式歌舞伎ポータル)",
          url: "https://www.kabuki-bito.jp/",
          badge: "Official JP",
          description: "Official Japanese portal with detailed casting, special interviews on Kanadehon Chūshingura, and theater news."
        },
        {
          title: "Japan Arts Council — Cultural Digital Library (文化デジタルライブラリー)",
          url: "https://www2.ntj.jac.go.jp/dglib/",
          badge: "Archive JP/EN",
          description: "Historical production records, ukiyo-e actor prints, and comparative analysis of Chūshingura across Ningyō Jōruri and Kabuki."
        },
        {
          title: "Kabuki21 — Historical Plays & Actors Database",
          url: "http://www.kabuki21.com/chushingura.php",
          badge: "Scholarship EN",
          description: "Detailed act-by-act English breakdown of Kanadehon Chūshingura, kata traditions across major acting guilds, and historical lineages."
        }
      ],
      englishSources: [
        {
          author: "Donald Keene (trans.)",
          title: "Chūshingura: The Treasury of Loyal Retainers",
          publisher: "Columbia University Press (1971)",
          note: "The definitive complete English translation of the eleven-act text by Takeda Izumo II, Miyoshi Shōraku, and Namiki Senryū, with rich historical introduction."
        },
        {
          author: "James R. Brandon (ed.)",
          title: "Chūshingura: Studies in Kabuki and the Puppet Theater",
          publisher: "University of Hawaii Press (1982)",
          note: "Essential scholarly essays on the Genroku Ako vendetta, censorship laws, kata acting traditions, and stage adaptations."
        },
        {
          author: "James R. Brandon & Samuel L. Leiter (eds.)",
          title: "Kabuki Plays on Stage (4 Volumes)",
          publisher: "University of Hawaii Press (2002)",
          note: "Authoritative translations of classic Kabuki stage scripts with detailed stage directions, musical cues (geza), and performance notes."
        }
      ],
      japaneseSources: [
        {
          title: "岩波書店『新日本古典文学大系 93 竹田出雲・並木宗輔 浄瑠璃集』",
          publisher: "岩波書店 (Iwanami Shoten)",
          note: "Full annotated classical text of Kanadehon Chūshingura with detailed linguistic, historical, and theatrical commentary."
        },
        {
          title: "新潮社『新潮日本古典集成 仮名手本忠臣蔵』",
          publisher: "新潮社 (Shinchōsha)",
          note: "Side-by-side modern Japanese translation notes and headnotes explaining Edo-period customs and kata variations."
        },
        {
          title: "歌舞伎座公式『吉例顔見世大歌舞伎 筋書 (Sujigaki Program)』",
          publisher: "松竹株式会社 (Shochiku Co., Ltd.)",
          note: "Official theater program detailing the specific kata family styles (e.g., Otowaya, Narikomaya, Koraiya) performed in this run."
        }
      ],
      driveMaterials: [
        {
          title: "20261110/ Project Study Folder",
          type: "Google Drive Folder",
          url: "https://drive.google.com/drive/folders/11LjsG4fshpalcSX6HktHYX5XrAWtjIcM",
          description: "Master project folder containing exported scripts, playbill scans, and study notes."
        },
        {
          title: "Detailed Play Guide & Commentary (Kinshu Bunraku Kōen)",
          type: "Google Doc",
          url: "https://docs.google.com/document/d/14qb_-5kPPTQf42fvkh_Jao70M8PczuarlntEpn13muw/view",
          description: "Comprehensive act-by-act background, dramatic structure, and bibliography."
        },
        {
          title: "Bunraku & Kabuki Bilingual Companion — Master Script Sheet",
          type: "Google Sheet",
          url: "https://docs.google.com/spreadsheets/d/10d8VxRt_bWfT17KukhtggA4ThTnRFpIJwBoxakaXIqE/view",
          description: "Line-by-line bilingual alignment spreadsheet with Japanese Ruby, Plain text, English, and Cultural Notes."
        },
        {
          title: "Scanned Playbill / Material 1 (Scanned_20261110-1159.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1nm0s7OoXwedB2zavFjAqfNyFnzMCa5F_/view",
          description: "High-resolution scan of original theater reference material and program pages (Set 1)."
        },
        {
          title: "Scanned Playbill / Material 2 (Scanned_20261110-1212.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1y4u_kDAEfs1PFVLIbHSlaUjwGtIeou-b/view",
          description: "High-resolution scan of original theater reference material and program pages (Set 2)."
        },
        {
          title: "Scanned Playbill / Material 3 (Scanned_20261110-1214.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1opW5cCq04Tv7jixbZPjICcG2I7K2suO6/view",
          description: "High-resolution scan of original theater reference material and program pages (Set 3)."
        }
      ]
    },
    studyGuide: [
      {
        heading: "Overview: The November Kaomise Full-Length Production (吉例顔見世大歌舞伎『通し狂言 仮名手本忠臣蔵』)",
        subtitle: "Premiered 1748 · Written by Takeda Izumo II, Miyoshi Shōraku, and Namiki Senryū",
        summary: "Staged during Kabukiza's prestigious November Kaomise ('Face-Showing') gala, this full-day production presents Japan's most celebrated theatrical epic: Kanadehon Chūshingura. Based on the historical Akō Vendetta of 1701–1703—in which forty-seven masterless samurai (rōnin) avenged the forced ritual suicide of their lord Asano Naganori by assassinating the corrupt court official Kira Yoshinaka—the playwrights transposed the story back to the 14th-century Muromachi shogunate (as chronicled in the Taiheiki) to evade strict Tokugawa shogunal censorship. Thus, Lord Asano becomes Enya Hangan Takasada, Kira Yoshinaka becomes the arrogant Kō no Moronō, and the chief retainer Ōishi Kuranosuke becomes Ōboshi Yuranosuke.",
        bullets: [
          {
            title: "The Meaning of 'Kanadehon' (仮名手本)",
            text: "Literally 'The Kana Copybook.' Just as the classic Japanese syllabary (I-Ro-Ha) consists of 47 syllables used to teach calligraphy, Enya Hangan's loyal league consists of 47 retainers who serve as the ultimate 'copybook' model of samurai loyalty (chūgi)."
          },
          {
            title: "Dokugin (独吟) & Ceremonial Opening",
            text: "Act I (Daijo) preserves the solemn ceremonial conventions of early Kabuki: the curtain opens slowly to forty-seven beats of wooden clappers (柝 / ki), revealing characters seated like motionless wooden puppets until the narrator's voice brings them to life one by one."
          }
        ]
      },
      {
        heading: "Matinee (11:00 AM): Acts I, III, IV & Michiyuki (昼の部：大序・三段目・四段目・道行旅路の花聟)",
        subtitle: "From the Shogun's Shrine at Tsurugaoka to the Fall of Enya Hangan's House",
        summary: "The Matinee traces the complete political tragedy of Lord Enya Hangan and the romantic subplot of the young retainer Hayano Kanpei and his lover Okaru.",
        bullets: [
          {
            title: "Act I: Tsurugaoka Shrine Helmet Inspection (大序：鶴ヶ岡社頭兜改めの場)",
            text: "At Tsurugaoka Hachiman Shrine in Kamakura, Ashikaga Tadayoshi presides over the dedication of forty-seven helmets taken after the defeat of Nitta Yoshisada. Lady Kaoyo (Enya Hangan's virtuous wife) is summoned to identify Yoshisada's sacred helmet by its rare 'Ten-Pellet' incense (蘭奢待 / Ranjatai). Afterwards, the lecherous Governor Kō no Moronō attempts to force a love poem onto Kaoyo; Momonoi Wakasanosuke rescues her, sparking Moronō's bitter vendetta against both lords."
          },
          {
            title: "Act III: The Bribe at the Gate & Drawing the Sword in the Pine Corridor (三段目：足利館門前進物の場・松の間刃傷の場)",
            text: "Wakasanosuke's chief retainer Kakogawa Honzō secretly delivers lavish bribes of gold and silk to Moronō at dawn, defusing Moronō's hostility toward Wakasanosuke. When Enya Hangan arrives empty-handed, Moronō redirects all his pent-up malice onto Hangan—mocking him as a 'carp in a well' (井の中の鮒) and humiliating him before the court until Hangan's patience snaps and he draws his short sword inside the palace. Meanwhile, Hangan's retainer Hayano Kanpei, dallying outside with Okaru, misses his master's crisis and is overwhelmed by shame."
          },
          {
            title: "Act IV: Enya Hangan's Seppuku & Surrender of the Castle (四段目：扇ヶ谷塩冶判官切腹・表門城明渡しの場)",
            text: "The emotional core of Chūshingura, governed by rigid theatrical etiquette. Condemned for drawing a blade inside the shogun's palace, Enya Hangan prepares for ritual disembowelment (seppuku) while anxiously awaiting his chief retainer, Ōboshi Yuranosuke. Just as Hangan plunges the dagger into his abdomen, Yuranosuke rushes in; Hangan gasps his dying charge—'Wakarazuya!' (Do you understand my heart?)—and hands him the blood-stained dirk. At the outer castle gate, Yuranosuke restrains the hot-headed retainers from dying in a futile siege, walks slowly down the Hanamichi pausing three times to look back at his lost ancestral home, and vows blood vengeance."
          },
          {
            title: "Kiyomoto Dance-Drama: Michiyuki Tabiji no Hanamuko (道行旅路の花聟 — Journey of the Bridal Pair)",
            text: "A radiant dance interlude accompanied by soaring Kiyomoto chanting. Disgraced by his absence during Hangan's crisis, Kanpei flees Kamakura with Okaru toward her parents' mountain cottage in Yamazaki under blossoming spring cherry trees. They fend off the buffoonish Moronō retainer Sagisaka Bannai in stylized rhythmic combat."
          }
        ]
      },
      {
        heading: "Evening (4:30 PM): Acts V, VI, VII & XI (夜の部：五段目・六段目・七段目・十一段目)",
        subtitle: "Kanpei's Tragic Redemption, Yuranosuke's Disguise in Gion, and the Night Raid in the Snow",
        summary: "The Evening program shifts from the heart-wrenching domestic tragedy (*sewamono* style) of Acts V and VI to the opulent Gion pleasure quarter of Act VII and the triumphant snowbound assault of Act XI.",
        bullets: [
          {
            title: "Act V: Yamazaki Highway & The Two Bullets (五段目：山崎街道鉄砲渡し・二つ玉の場)",
            text: "On a rain-swept night along the Yamazaki Highway, Kanpei—now working as a hunter—meets fellow retainer Senzaki Yagorō and promises to raise fifty ryō toward the league's monument fund. Soon after, the wicked highwayman Sadakurō murders and robs Okaru's old father Yoichibei of the very fifty ryō obtained by selling Okaru to a Gion teahouse. Seconds later, Kanpei shoots at a wild boar in the pitch darkness, inadvertently killing Sadakurō, and takes the purse from the body, believing in horror that he has shot his own father-in-law."
          },
          {
            title: "Act VI: Yoichibei's Cottage — Kanpei's Seppuku (六段目：与市兵衛内勘平腹切の場)",
            text: "At Yoichibei's thatched cottage, the Ichimonjiya proprietress Osai (with procurer Genroku) arrives to claim Okaru for Gion. When Yoichibei's corpse is brought home and the striped purse is recognized, Kanpei's mother-in-law Okaya accuses him of murdering the old man. When envoys Fuwa Kazuemon and Senzaki Yagorō arrive and reject Kanpei's blood-stained money, the despairing Kanpei commits seppuku. Inspecting Yoichibei's corpse, Yagorō discovers the old man died from a sword wound—not a musket ball—proving Kanpei actually slew his father-in-law's killer. Before dying, Kanpei is permitted to seal the vendetta oath-scroll (renpanjō) with his own blood."
          },
          {
            title: "Act VII: Ichiriki Teahouse in Gion (七段目：祇園一力茶屋の場)",
            text: "At the bustling Ichiriki Teahouse in Kyoto, Yuranosuke feigns drunken debauchery—playing blindman's buff and eating octopus on the anniversary of his lord's death—to deceive Moronō's spies (Ono Kudayū) and his young ally Heiemon (Okaru's brother). While reading a secret scroll from Lady Kaoyo on the veranda, Yuranosuke's trailing letter is read by Okaru from the upper balcony using a hand mirror and by Kudayū hiding beneath the floorboards. Discovering both, Yuranosuke offers to redeem Okaru's contract and tests Heiemon's loyalty before having Kudayū dragged into the muddy pond."
          },
          {
            title: "Act XI: The Night Raid, Charcoal Shed & Triumphal Retreat (十一段目：高家表門討入り・奥庭泉水・炭部屋・引揚げの場)",
            text: "Under heavy winter snow, the forty-seven rōnin in black zig-zag coats scale the walls of Moronō's mansion to the beat of the Yamaga drum. Following fierce sword duels across the snow-covered arched bridge over the garden pond, the retainers discover Moronō cowering inside the charcoal shed. When Moronō tries a treacherous slash, they strike him down with Enya Hangan's own blood-stained dirk and march across Ryōgoku Bridge at dawn toward Kōmyōji Temple (光明寺; corresponding to Sengakuji in the historical Akō incident)."
          }
        ]
      }
    ],
    parts: [
      {
        id: "matinee",
        label: "昼の部 Matinee 11:00 (仮名手本忠臣蔵)",
        badge: "MATINEE 11:00",
        scenes: [
          {
            id: "nov_kabuki_daijo",
            title: "大序：鶴ヶ岡社頭兜改めの場 (Act I: Tsurugaoka Shrine)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1) · Takemoto-za / Kabuki adaptation 1748",
            playType: "時代物 (Jidaimono — Historical Chronicle / Ceremonial Opening)",
            time: "11:00–11:48",
            intervalAfter: "5 min",
            textCoverage: "highlights",
            synopsis: "At Tsurugaoka Hachiman Shrine in Kamakura, Shogun's brother Ashikaga Tadayoshi presides over the inspection of forty-seven helmets captured from the fallen general Nitta Yoshisada. Enya Hangan's wife, Lady Kaoyo, identifies the true sacred helmet by its lingering 'Ten-Pellet' Ranjatai incense. Afterwards, the corrupt Governor Kō no Moronō forces an illicit love poem upon Kaoyo; Momonoi Wakasanosuke intervenes to rescue her, igniting Moronō's venomous grudge against both young lords.",
            highlights: "Watch the ceremonial 'Daijo' opening: the curtain parts to 47 slow clapper beats while the actors sit motionless with bowed heads like lifeless puppets, awakening only when the Gidayū chanter calls each character's name. (The kōjō ningyō announces the cast around 10:50 before the curtain.)",
            actors: {
              A: [
                { role: "Kō no Moronō", roleJp: "高師直", actor: "Nakamura Ganjirō", actorJp: "中村鴈治郎" },
                { role: "Enya Hangan", roleJp: "塩冶判官", actor: "Onoe Ukon", actorJp: "尾上右近" },
                { role: "Momonoi Wakasanosuke", roleJp: "桃井若狭之助", actor: "Nakamura Shidō", actorJp: "中村獅童" },
                { role: "Ashikaga Tadayoshi", roleJp: "足利直義", actor: "Nakamura Yonekichi", actorJp: "中村米吉" },
                { role: "Lady Kaoyo", roleJp: "顔世御前", actor: "Nakamura Senjaku", actorJp: "中村扇雀" }
              ],
              B: [
                { role: "Kō no Moronō", roleJp: "高師直", actor: "Bandō Yajūrō", actorJp: "坂東彌十郎" },
                { role: "Enya Hangan", roleJp: "塩冶判官", actor: "Nakamura Shichinosuke", actorJp: "中村七之助" },
                { role: "Momonoi Wakasanosuke", roleJp: "桃井若狭之助", actor: "Nakamura Kashō", actorJp: "中村歌昇" },
                { role: "Ashikaga Tadayoshi", roleJp: "足利直義", actor: "Nakamura Yonekichi", actorJp: "中村米吉" },
                { role: "Lady Kaoyo", roleJp: "顔世御前", actor: "Nakamura Manju", actorJp: "中村萬壽" }
              ]
            },
            cast: [
              { nameJp: "高師直", nameEn: "Kō no Moronō", role: "Corrupt Chief Councilor of Kamakura (historical Kira Yoshinaka)", headOrStyle: "Katakiyaku (敵役 — Grand Villain)" },
              { nameJp: "塩冶判官", nameEn: "Enya Hangan Takasada", role: "Feudal Lord of Hōki Province (historical Asano Naganori)", headOrStyle: "Wagoto-Tachiyaku (和事味立役 — Noble Young Lord)" },
              { nameJp: "顔世御前", nameEn: "Lady Kaoyo", role: "Virtuous wife of Enya Hangan & former Imperial court lady", headOrStyle: "Tate-Oyama (立女方 — Noble Matron)" },
              { nameJp: "桃井若狭之助", nameEn: "Momonoi Wakasanosuke", role: "Hot-blooded young lord who defends Kaoyo from Moronō", headOrStyle: "Aragoto-Tachiyaku (荒事味立役)" },
              { nameJp: "足利直義", nameEn: "Ashikaga Tadayoshi", role: "Younger brother and deputy to the Shogun Ashikaga Takauji", headOrStyle: "Kuge-aku / Noble Arbiter" }
            ]
          },
          {
            id: "nov_kabuki_sandanme",
            title: "三段目：門前進物の場・松の間刃傷の場 (Act III: Pine Corridor)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1)",
            playType: "時代物 (Jidaimono — Palace Intrigue & Tragedy)",
            time: "11:53–12:36",
            intervalAfter: "35 min",
            textCoverage: "highlights",
            synopsis: "At dawn outside Ashikaga Palace, Wakasanosuke's chief retainer Kakogawa Honzō secretly bribes Moronō with gold and silk, neutralizing Moronō's plan to humiliate Wakasanosuke. When Enya Hangan arrives later without bribes and delivers a blunt refusal poem from Lady Kaoyo, Moronō unleashes cruel public insults upon him in the Pine Corridor until Hangan loses control and slashes Moronō across the forehead, only to be held back from a fatal strike by Honzō.",
            highlights: "Notice the psychological pressure cooker in the Pine Corridor: Enya Hangan endures Moronō's relentless taunts ('like a carp in a tiny well') with trembling restraint until the climactic drawing of the short sword (chiisagatana).",
            actors: {
              A: [
                { role: "Kō no Moronō", roleJp: "高師直", actor: "Nakamura Ganjirō", actorJp: "中村鴈治郎" },
                { role: "Enya Hangan", roleJp: "塩冶判官", actor: "Onoe Ukon", actorJp: "尾上右近" },
                { role: "Momonoi Wakasanosuke", roleJp: "桃井若狭之助", actor: "Nakamura Shidō", actorJp: "中村獅童" },
                { role: "Ashikaga Tadayoshi", roleJp: "足利直義", actor: "Nakamura Yonekichi", actorJp: "中村米吉" },
                { role: "Lady Kaoyo", roleJp: "顔世御前", actor: "Nakamura Senjaku", actorJp: "中村扇雀" }
              ],
              B: [
                { role: "Kō no Moronō", roleJp: "高師直", actor: "Bandō Yajūrō", actorJp: "坂東彌十郎" },
                { role: "Enya Hangan", roleJp: "塩冶判官", actor: "Nakamura Shichinosuke", actorJp: "中村七之助" },
                { role: "Momonoi Wakasanosuke", roleJp: "桃井若狭之助", actor: "Nakamura Kashō", actorJp: "中村歌昇" },
                { role: "Ashikaga Tadayoshi", roleJp: "足利直義", actor: "Nakamura Yonekichi", actorJp: "中村米吉" },
                { role: "Lady Kaoyo", roleJp: "顔世御前", actor: "Nakamura Manju", actorJp: "中村萬壽" }
              ]
            },
            cast: [
              { nameJp: "塩冶判官", nameEn: "Enya Hangan", role: "Driven to draw his blade inside the shogun's palace out of wounded honor", headOrStyle: "Tachiyaku (立役 — Tragic Lord)" },
              { nameJp: "高師直", nameEn: "Kō no Moronō", role: "Flatters Wakasanosuke after receiving bribes, then mercilessly bullies Hangan", headOrStyle: "Jitsubō / Katakiyaku (敵役)" },
              { nameJp: "加古川本蔵", nameEn: "Kakogawa Honzō", role: "Chief retainer of Wakasanosuke who bribes Moronō and restrains Hangan", headOrStyle: "Fukeoyama-gata / Senior Retainer (老け役)" },
              { nameJp: "早野勘平", nameEn: "Hayano Kanpei", role: "Hangan's young attendant who leaves his post for a tryst with Okaru", headOrStyle: "Nimaime (二枚目 — Young Lover)" },
              { nameJp: "腰元お軽", nameEn: "Okaru", role: "Lady Kaoyo's lady-in-waiting and Kanpei's devoted sweetheart", headOrStyle: "Waka-Onnagata (若女方)" }
            ]
          },
          {
            id: "nov_kabuki_yondanme",
            title: "四段目：扇ヶ谷塩冶判官切腹・城明渡しの場 (Act IV: Seppuku)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1)",
            playType: "時代物 (Jidaimono — High Ritual Tragedy)",
            time: "13:11–14:43",
            intervalAfter: "20 min",
            textCoverage: "highlights",
            synopsis: "Confined to his Ōgigayatsu mansion, Enya Hangan receives the shogunate's sentence of seppuku and confiscation of his domain from envoys Ishidō and Yakushiji. Wearing pure white death robes beneath his formal kamishimo, Hangan delays the fatal cut as long as possible hoping to see his chief retainer Ōboshi Yuranosuke. Yuranosuke arrives at the final breath; Hangan entrusts him with the blood-stained dagger and his unspoken desire for vengeance before dying. At the outer gate, Yuranosuke surrenders the mansion and pledges the retainers to patience.",
            highlights: "Act IV is a 通さん場 (tōsanba): latecomers are held outside once the act begins at 13:11. Watch Hangan slowly fold back the corners of his ceremonial mat, Yuranosuke's breathless entrance down the Hanamichi, and Yuranosuke's famous 'Three Backward Glances' (三度見返り) as he leaves the castle forever.",
            actors: {
              A: [
                { role: "Ōboshi Yuranosuke", roleJp: "大星由良之助", actor: "Matsumoto Kōshirō", actorJp: "松本幸四郎" },
                { role: "Enya Hangan", roleJp: "塩冶判官", actor: "Onoe Ukon", actorJp: "尾上右近" },
                { role: "Ōboshi Rikiya", roleJp: "大星力弥", actor: "Ichikawa Somegorō", actorJp: "市川染五郎" },
                { role: "Yakushiji Jirōzaemon", roleJp: "薬師寺次郎左衛門", actor: "Ichikawa Omezō", actorJp: "市川男女蔵" },
                { role: "Hara Gōemon", roleJp: "原郷右衛門", actor: "Ichikawa Komazō", actorJp: "市川高麗蔵" },
                { role: "Lady Kaoyo", roleJp: "顔世御前", actor: "Nakamura Senjaku", actorJp: "中村扇雀" },
                { role: "Ishidō Umanojō", roleJp: "石堂右馬丞", actor: "Nakamura Karoku", actorJp: "中村歌六" }
              ],
              B: [
                { role: "Ōboshi Yuranosuke", roleJp: "大星由良之助", actor: "Matsumoto Kōshirō", actorJp: "松本幸四郎" },
                { role: "Enya Hangan", roleJp: "塩冶判官", actor: "Nakamura Shichinosuke", actorJp: "中村七之助" },
                { role: "Ōboshi Rikiya", roleJp: "大星力弥", actor: "Onoe Tatsunosuke", actorJp: "尾上辰之助" },
                { role: "Yakushiji Jirōzaemon", roleJp: "薬師寺次郎左衛門", actor: "Ichikawa Omezō", actorJp: "市川男女蔵" },
                { role: "Hara Gōemon", roleJp: "原郷右衛門", actor: "Ichikawa Komazō", actorJp: "市川高麗蔵" },
                { role: "Lady Kaoyo", roleJp: "顔世御前", actor: "Nakamura Manju", actorJp: "中村萬壽" },
                { role: "Ishidō Umanojō", roleJp: "石堂右馬丞", actor: "Nakamura Shikan", actorJp: "中村芝翫" }
              ]
            },
            cast: [
              { nameJp: "大星由良之助", nameEn: "Ōboshi Yuranosuke", role: "Chief retainer of the Enya house (historical Ōishi Kuranosuke)", headOrStyle: "Tachiyaku / Zagashira (座頭 — Grand Leader)" },
              { nameJp: "塩冶判官", nameEn: "Enya Hangan", role: "Performs ritual disembowelment in white death robes", headOrStyle: "Tachiyaku (立役)" },
              { nameJp: "石堂右馬丞", nameEn: "Ishidō Umanojō", role: "Compassionate shogunal envoy who respects Hangan's samurai dignity", headOrStyle: "Sabaki-yaku (捌き役)" },
              { nameJp: "斧九太夫", nameEn: "Ono Kudayū", role: "Greedy elder retainer who cares only for his stipend", headOrStyle: "Katakiyaku (敵役)" },
              { nameJp: "大星力弥", nameEn: "Ōboshi Rikiya", role: "Yuranosuke's young son and Hangan's loyal page", headOrStyle: "Wakashu-gata (若衆方)" }
            ]
          },
          {
            id: "nov_kabuki_michiyuki",
            title: "浄瑠璃：道行旅路の花聟 (Michiyuki: Okaru & Kanpei)",
            playwright: "三升屋二三治 (Mimasuya Nisōji — Kiyomoto Dance Text)",
            premiere: "1833 (Tenpō 4) · Kiyomoto Dance Adaptation",
            playType: "所作事・道行 (Shosagoto — Lyric Kiyomoto Dance Interlude)",
            time: "15:03–15:42",
            intervalAfter: null,
            textCoverage: "highlights",
            synopsis: "Unable to return to the mansion after missing his lord's fateful hour, Hayano Kanpei contemplates suicide on the road from Kamakura, but Okaru persuades him to flee first to her parents' country home in Yamazaki. Beneath billowing cherry blossoms, the lovers recall their courtship and fend off Moronō's comical henchman Sagisaka Bannai and his foot soldiers.",
            highlights: "A shimmering visual and musical contrast to the austere tragedy of Act IV. Enjoy the high-register, plaintive Kiyomoto shamisen and vocal style (清元節) and the stylized 'tate' (sword-dance choreography) against Bannai's troupe.",
            actors: {
              A: [
                { role: "Hayano Kanpei", roleJp: "早野勘平", actor: "Nakamura Kinnosuke", actorJp: "中村錦之助" },
                { role: "Sagisaka Bannai", roleJp: "鷺坂伴内", actor: "Nakamura Toranosuke", actorJp: "中村虎之介" },
                { role: "Okaru", roleJp: "腰元お軽", actor: "Onoe Kikugorō VIII", actorJp: "八代目尾上菊五郎" }
              ],
              B: [
                { role: "Hayano Kanpei", roleJp: "早野勘平", actor: "Ichikawa Somegorō", actorJp: "市川染五郎" },
                { role: "Sagisaka Bannai", roleJp: "鷺坂伴内", actor: "Nakamura Tanenosuke", actorJp: "中村種之助" },
                { role: "Okaru", roleJp: "腰元お軽", actor: "Nakamura Tokizō", actorJp: "中村時蔵" }
              ]
            },
            cast: [
              { nameJp: "早野勘平", nameEn: "Hayano Kanpei", role: "Disgraced young retainer traveling in a black silk haori with Okaru", headOrStyle: "Wagoto / Shosagoto (和事・所作)" },
              { nameJp: "腰元お軽", nameEn: "Okaru", role: "Court maid whose devotion sustains Kanpei on their flight", headOrStyle: "Onnagata Dance Role (女方舞踊)" },
              { nameJp: "鷺坂伴内", nameEn: "Sagisaka Bannai", role: "Moronō's boastful, comical retainer who tries to abduct Okaru", headOrStyle: "Sanmaime / Dōkegata (三枚目・道化方)" }
            ]
          }
        ]
      },
      {
        id: "evening",
        label: "夜の部 Evening 16:30 (仮名手本忠臣蔵)",
        badge: "EVENING 16:30",
        scenes: [
          {
            id: "nov_kabuki_godanme",
            title: "五段目：山崎街道鉄砲渡し・二つ玉の場 (Act V: Yamazaki Highway)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1)",
            playType: "世話物 (Sewamono — Rainy Night Highway Melodrama)",
            time: "16:30–18:13 (Acts V–VI combined)",
            intervalAfter: "30 min (after Act VI)",
            textCoverage: "highlights",
            synopsis: "Living as a hunter near Yamazaki, Kanpei shelters from a torrential downpour with fellow retainer Senzaki Yagorō and pledges to contribute fifty ryō toward the league's fund. Moments later on the dark highway, the murderous rōnin Ono Sadakurō slays Okaru's old father Yoichibei and steals his striped purse containing fifty ryō—the advance payment from selling Okaru to a Gion teahouse. Firing his musket at a wild boar in the dark, Kanpei accidentally shoots Sadakurō dead and takes the purse from the corpse, believing he has killed a traveler.",
            highlights: "Look for the iconic graphic silhouette of Ono Sadakurō: dressed in a torn black kimono with bare white limbs, squeezing rainwater from his hem, holding a broken oiled-paper umbrella, and clenching the stolen purse in his teeth in a striking mie pose.",
            actors: {
              A: [
                { role: "Hayano Kanpei", roleJp: "早野勘平", actor: "Nakamura Hayato", actorJp: "中村隼人" },
                { role: "Okaru", roleJp: "女房お軽", actor: "Onoe Kikugorō VIII", actorJp: "八代目尾上菊五郎" },
                { role: "Ono Sadakurō", roleJp: "斧定九郎", actor: "Onoe Shōroku", actorJp: "尾上松緑" },
                { role: "Senzaki Yagorō", roleJp: "千崎弥五郎", actor: "Nakamura Hashinosuke", actorJp: "中村橋之助" },
                { role: "Genroku", roleJp: "源六", actor: "Bandō Kamezō", actorJp: "坂東亀蔵" },
                { role: "Mother Okaya", roleJp: "母おかや", actor: "Ichikawa Saiyū", actorJp: "市川齊入" },
                { role: "Osai", roleJp: "お才", actor: "Nakamura Tokizō", actorJp: "中村時蔵" },
                { role: "Fuwa Kazuemon", roleJp: "不破数右衛門", actor: "Nakamura Matagorō", actorJp: "中村又五郎" }
              ],
              B: [
                { role: "Hayano Kanpei", roleJp: "早野勘平", actor: "Nakamura Hayato", actorJp: "中村隼人" },
                { role: "Okaru", roleJp: "女房お軽", actor: "Onoe Ukon", actorJp: "尾上右近" },
                { role: "Ono Sadakurō", roleJp: "斧定九郎", actor: "Nakamura Shidō", actorJp: "中村獅童" },
                { role: "Senzaki Yagorō", roleJp: "千崎弥五郎", actor: "Nakamura Hashinosuke", actorJp: "中村橋之助" },
                { role: "Genroku", roleJp: "源六", actor: "Bandō Kamezō", actorJp: "坂東亀蔵" },
                { role: "Mother Okaya", roleJp: "母おかや", actor: "Ichikawa Saiyū", actorJp: "市川齊入" },
                { role: "Osai", roleJp: "お才", actor: "Nakamura Jakuemon", actorJp: "中村雀右衛門" },
                { role: "Fuwa Kazuemon", roleJp: "不破数右衛門", actor: "Nakamura Matagorō", actorJp: "中村又五郎" }
              ]
            },
            cast: [
              { nameJp: "早野勘平", nameEn: "Hayano Kanpei", role: "Hunter desperately seeking funds to rejoin the loyal retainers' league", headOrStyle: "Tachiyaku / Wagoto (立役)" },
              { nameJp: "斧定九郎", nameEn: "Ono Sadakurō", role: "Wicked son of Ono Kudayū turned highway robber", headOrStyle: "Iroaku (色悪 — Stylish Villain)" },
              { nameJp: "百姓与市兵衛", nameEn: "Yoichibei", role: "Okaru's kindly old father who sells his daughter to help Kanpei", headOrStyle: "Oyaji-gata (親仁方 — Old Peasant)" },
              { nameJp: "千崎弥五郎", nameEn: "Senzaki Yagorō", role: "Loyal Enya retainer who meets Kanpei on the rainy mountain road", headOrStyle: "Tachiyaku (立役)" }
            ]
          },
          {
            id: "nov_kabuki_rokudanme",
            title: "六段目：与市兵衛内勘平腹切の場 (Act VI: Kanpei's Seppuku)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1)",
            playType: "世話物 (Sewamono — Domestic Tragedy)",
            time: "16:30–18:13 (Acts V–VI combined)",
            intervalAfter: "30 min",
            textCoverage: "highlights",
            synopsis: "The next morning at Yoichibei's cottage, Okaru bids a tearful farewell as the Ichimonjiya proprietress Osai (with procurer Genroku) arrives to take her away to Gion. Soon hunters carry in Yoichibei's murdered body, and Kanpei's mother-in-law Okaya discovers the blood-stained striped purse in Kanpei's coat, accusing him of murdering her husband. When Enya retainers Fuwa Kazuemon and Senzaki Yagorō arrive and denounce Kanpei for offering tainted money, the grief-stricken Kanpei plunges his sword into his belly. Examining Yoichibei's wound, Yagorō realizes it was made by a blade, not a musket—proving Kanpei actually avenged his father-in-law by shooting Sadakurō.",
            highlights: "One of the supreme tragic acting showcases in Kabuki. Watch the agonizing irony as Kanpei realizes the striped purse he took in the dark belonged to his father-in-law, and his final redemption as he presses his bloodied handprint onto the vendetta oath-scroll.",
            actors: {
              A: [
                { role: "Hayano Kanpei", roleJp: "早野勘平", actor: "Nakamura Hayato", actorJp: "中村隼人" },
                { role: "Okaru", roleJp: "女房お軽", actor: "Onoe Kikugorō VIII", actorJp: "八代目尾上菊五郎" },
                { role: "Ono Sadakurō", roleJp: "斧定九郎", actor: "Onoe Shōroku", actorJp: "尾上松緑" },
                { role: "Senzaki Yagorō", roleJp: "千崎弥五郎", actor: "Nakamura Hashinosuke", actorJp: "中村橋之助" },
                { role: "Genroku", roleJp: "源六", actor: "Bandō Kamezō", actorJp: "坂東亀蔵" },
                { role: "Mother Okaya", roleJp: "母おかや", actor: "Ichikawa Saiyū", actorJp: "市川齊入" },
                { role: "Osai", roleJp: "お才", actor: "Nakamura Tokizō", actorJp: "中村時蔵" },
                { role: "Fuwa Kazuemon", roleJp: "不破数右衛門", actor: "Nakamura Matagorō", actorJp: "中村又五郎" }
              ],
              B: [
                { role: "Hayano Kanpei", roleJp: "早野勘平", actor: "Nakamura Hayato", actorJp: "中村隼人" },
                { role: "Okaru", roleJp: "女房お軽", actor: "Onoe Ukon", actorJp: "尾上右近" },
                { role: "Ono Sadakurō", roleJp: "斧定九郎", actor: "Nakamura Shidō", actorJp: "中村獅童" },
                { role: "Senzaki Yagorō", roleJp: "千崎弥五郎", actor: "Nakamura Hashinosuke", actorJp: "中村橋之助" },
                { role: "Genroku", roleJp: "源六", actor: "Bandō Kamezō", actorJp: "坂東亀蔵" },
                { role: "Mother Okaya", roleJp: "母おかや", actor: "Ichikawa Saiyū", actorJp: "市川齊入" },
                { role: "Osai", roleJp: "お才", actor: "Nakamura Jakuemon", actorJp: "中村雀右衛門" },
                { role: "Fuwa Kazuemon", roleJp: "不破数右衛門", actor: "Nakamura Matagorō", actorJp: "中村又五郎" }
              ]
            },
            cast: [
              { nameJp: "早野勘平", nameEn: "Hayano Kanpei", role: "Commits seppuku under false suspicion, then is redeemed before death", headOrStyle: "Tachiyaku / Tragic Hero (立役)" },
              { nameJp: "女房お軽", nameEn: "Okaru", role: "Sells herself into the Gion pleasure quarter for her husband's sake", headOrStyle: "Onnagata (女方)" },
              { nameJp: "母おかや", nameEn: "Mother Okaya", role: "Okaru's mother who grief-strickenly accuses Kanpei of murdering Yoichibei", headOrStyle: "Fukeoyama (老女方)" },
              { nameJp: "お才 / 源六", nameEn: "Osai & Genroku", role: "Ichimonjiya teahouse proprietress Osai and procurer Genroku who come to collect Okaru", headOrStyle: "Kasha-gata / Sanmaime" },
              { nameJp: "不破数右衛門", nameEn: "Fuwa Kazuemon", role: "Senior Enya retainer who arrives with Yagorō and brings the vendetta scroll so Kanpei can sign in blood", headOrStyle: "Jitsugoto (実事)" },
              { nameJp: "千崎弥五郎", nameEn: "Senzaki Yagorō", role: "Inspects Yoichibei's corpse and clears Kanpei's name", headOrStyle: "Tachiyaku (立役)" }
            ]
          },
          {
            id: "nov_kabuki_shichidanme",
            title: "七段目：祇園一力茶屋の場 (Act VII: Ichiriki Teahouse)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1)",
            playType: "時代世話 (Jidai-Sewa — Pleasure Quarter Intrigue)",
            time: "18:43–20:29",
            intervalAfter: "15 min",
            textCoverage: "highlights",
            synopsis: "At the glamorous Ichiriki Teahouse in Kyoto's Gion district, Ōboshi Yuranosuke masquerades as a dissipated prodigal to throw Moronō's spies off the scent. Tested by the traitorous Ono Kudayū—who offers him forbidden octopus on the anniversary of Hangan's death—Yuranosuke feigns drunken oblivion. Later, while reading a secret scroll along the veranda, he discovers Okaru reading it from the upstairs balcony with a hand mirror and Kudayū reading the torn paper beneath the floorboards. Yuranosuke learns from Okaru's brother Teraoka Heiemon of Kanpei's tragic death, prevents Heiemon from killing Okaru, and guides Okaru's hand to stab the spying Kudayū through the tatami.",
            highlights: "Notice the dazzling visual interplay across three vertical levels: Okaru high on the red-railed balcony holding her hand mirror, Yuranosuke at center unrolling the yards-long letter scroll, and the villain Kudayū lurking beneath the veranda steps.",
            actors: {
              A: [
                { role: "Ōboshi Yuranosuke", roleJp: "大星由良之助", actor: "Matsumoto Kōshirō", actorJp: "松本幸四郎" },
                { role: "Teraoka Heiemon", roleJp: "寺岡平右衛門", actor: "Nakamura Mantarō", actorJp: "中村萬太郎" },
                { role: "Ōboshi Rikiya", roleJp: "大星力弥", actor: "Ichikawa Somegorō", actorJp: "市川染五郎" },
                { role: "Okaru", roleJp: "遊女お軽", actor: "Onoe Kikugorō VIII", actorJp: "八代目尾上菊五郎" }
              ],
              B: [
                { role: "Ōboshi Yuranosuke", roleJp: "大星由良之助", actor: "Matsumoto Kōshirō", actorJp: "松本幸四郎" },
                { role: "Teraoka Heiemon", roleJp: "寺岡平右衛門", actor: "Onoe Shōroku", actorJp: "尾上松緑" },
                { role: "Ōboshi Rikiya", roleJp: "大星力弥", actor: "Nakamura Toranosuke", actorJp: "中村虎之介" },
                { role: "Okaru", roleJp: "遊女お軽", actor: "Onoe Ukon", actorJp: "尾上右近" }
              ]
            },
            cast: [
              { nameJp: "大星由良之助", nameEn: "Ōboshi Yuranosuke", role: "Masks his iron resolve behind drunken revelry at the Ichiriki Teahouse", headOrStyle: "Shinbō-Tachiyaku / Zagashira (座頭)" },
              { nameJp: "遊女お軽", nameEn: "Okaru", role: "Now a Gion courtesan; unaware that her father and husband Kanpei are dead", headOrStyle: "Keisei / Onnagata (傾城・女方)" },
              { nameJp: "寺岡平右衛門", nameEn: "Teraoka Heiemon", role: "Okaru's loyal brother, a low-ranking foot soldier (ashigaru) begging to join the 47", headOrStyle: "Tachiyaku (立役)" },
              { nameJp: "斧九太夫", nameEn: "Ono Kudayū", role: "Former Enya elder now spying for Moronō; hides under the veranda", headOrStyle: "Katakiyaku (敵役)" },
              { nameJp: "大星力弥", nameEn: "Ōboshi Rikiya", role: "Arrives at the teahouse gate carrying a secret urgent dispatch from Lady Kaoyo", headOrStyle: "Wakashu-gata (若衆方)" }
            ]
          },
          {
            id: "nov_kabuki_juichidanme",
            title: "十一段目：高家表門討入り・炭部屋・引揚げの場 (Act XI: Night Raid)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1748 (Kan'en 1)",
            playType: "時代物 (Jidaimono — Climactic Night Raid & Vendetta)",
            time: "20:44–21:11",
            intervalAfter: null,
            textCoverage: "highlights",
            synopsis: "On a snowy winter night, the forty-seven loyal retainers—dressed in black battle coats with white sawtooth borders—storm Kō no Moronō's fortified mansion to the signal of Yuranosuke's Yamaga war-drum. After intense sword fights across the snow-blanketed garden pond and arched red bridge (tate), the retainers drag the cowering Moronō from the charcoal storage shed. When Moronō feigns contrition to launch a sneak attack, Yuranosuke strikes him down with Enya Hangan's ancestral dagger, fulfilling their vow before marching toward Kōmyōji Temple (光明寺; corresponding to Sengakuji in history) at daybreak.",
            highlights: "Spectacular winter stagecraft (雪の立廻り): acrobatic somersaults into the pond, rhythmic bamboo-and-steel sword clashes on the snowy arched bridge, and the solemn dawn procession past Hattori Itsurō along the Hanamichi toward Kōmyōji.",
            actors: {
              A: [
                { role: "Ōboshi Yuranosuke", roleJp: "大星由良之助", actor: "Matsumoto Kōshirō", actorJp: "松本幸四郎" },
                { role: "Kobayashi Heihachirō", roleJp: "小林平八郎", actor: "Nakamura Kashō", actorJp: "中村歌昇" },
                { role: "Takemori Kitahachi", roleJp: "竹森喜多八", actor: "Nakamura Tanenosuke", actorJp: "中村種之助" },
                { role: "Ōboshi Rikiya", roleJp: "大星力弥", actor: "Ichikawa Somegorō", actorJp: "市川染五郎" },
                { role: "Hara Gōemon", roleJp: "原郷右衛門", actor: "Kawarasaki Gonjūrō", actorJp: "河原崎権十郎" },
                { role: "Teraoka Heiemon", roleJp: "寺岡平右衛門", actor: "Nakamura Mantarō", actorJp: "中村萬太郎" },
                { role: "Hattori Itsurō", roleJp: "服部逸郎", actor: "Nakamura Baigyoku", actorJp: "中村梅玉" }
              ],
              B: [
                { role: "Ōboshi Yuranosuke", roleJp: "大星由良之助", actor: "Matsumoto Kōshirō", actorJp: "松本幸四郎" },
                { role: "Kobayashi Heihachirō", roleJp: "小林平八郎", actor: "Nakamura Takanosuke", actorJp: "中村鷹之資" },
                { role: "Takemori Kitahachi", roleJp: "竹森喜多八", actor: "Onoe Tatsunosuke", actorJp: "尾上辰之助" },
                { role: "Ōboshi Rikiya", roleJp: "大星力弥", actor: "Nakamura Toranosuke", actorJp: "中村虎之介" },
                { role: "Hara Gōemon", roleJp: "原郷右衛門", actor: "Kawarasaki Gonjūrō", actorJp: "河原崎権十郎" },
                { role: "Teraoka Heiemon", roleJp: "寺岡平右衛門", actor: "Onoe Shōroku", actorJp: "尾上松緑" },
                { role: "Hattori Itsurō", roleJp: "服部逸郎", actor: "Nakamura Baigyoku", actorJp: "中村梅玉" }
              ]
            },
            cast: [
              { nameJp: "大星由良之助", nameEn: "Ōboshi Yuranosuke", role: "Commands the night raid with the Yamaga drum rhythms and avenges his lord", headOrStyle: "Tachiyaku (立役)" },
              { nameJp: "高師直", nameEn: "Kō no Moronō", role: "Discovered hiding in the charcoal shed in white silk nightclothes", headOrStyle: "Katakiyaku (敵役)" },
              { nameJp: "小林平八郎", nameEn: "Kobayashi Heihachirō", role: "Moronō's master swordsman who fights the retainers on the snowy bridge", headOrStyle: "Jitsubō / Tate-shi (立役・立廻り)" },
              { nameJp: "服部逸郎", nameEn: "Hattori Itsurō", role: "A lord's retainer who encounters the rōnin during their dawn retreat toward Kōmyōji and lets them pass in admiration", headOrStyle: "Sabaki-yaku / Senior Samurai" },
              { nameJp: "大鷲文吾", nameEn: "Ōwashi Bungo", role: "Fierce Enya retainer among the 47 warriors who breach the gate and corner Moronō", headOrStyle: "Aragoto / Tachiyaku" }
            ]
          }
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
    venue: {
      name: "Tokyo Metropolitan Theatre — Playhouse (Ikebukuro, Tokyo)",
      nameJp: "東京芸術劇場 プレイハウス（東京・池袋）",
      address: "1-8-1 Nishi-Ikebukuro, Toshima-ku, Tokyo 171-0021 (〒171-0021 東京都豊島区西池袋1-8-1)",
      access: "2-minute walk from Ikebukuro Station (池袋駅, JR / Tokyo Metro / Seibu / Tobu Lines) West Exit; directly connected via underground passage Exit 2b (地下通路2b出口直結).",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Tokyo+Metropolitan+Theatre+Ikebukuro",
      scheduleNote: "Dec 6–19, 2026 (While the National Theatre in Hanzōmon undergoes reconstruction, Tokyo Bunraku runs are hosted at Tokyo Metropolitan Theatre Playhouse). Part 1: 11:00 AM / Part 2: 2:30 PM / Part 3: 7:00 PM."
    },
    ticketing: {
      officialLinks: [
        {
          label: "National Theatre Ticket Centre (国立劇場チケットセンター)",
          lang: "Japanese",
          url: "https://ticket.ntj.jac.go.jp/",
          badge: "Official Box Office (JP)",
          description: "Primary Japan Arts Council online booking system for all three parts, student discounts, and seat map selection."
        },
        {
          label: "National Theatre English Ticket Portal",
          lang: "English",
          url: "https://www.ntj.jac.go.jp/en/tickets.html",
          badge: "English Portal",
          description: "Official English reservation portal for international visitors (no Japanese registration required; pick up at box office or print-at-home)."
        },
        {
          label: "Tokyo Metropolitan Theatre Box Office (東京芸術劇場ボックスオフィス)",
          lang: "JP / EN",
          url: "https://www.geigeki.jp/t/",
          badge: "Venue Box Office",
          description: "In-person counter (1F Atrium) and online ticketing operated directly by Tokyo Metropolitan Theatre in Ikebukuro."
        }
      ],
      pricingTiers: [
        { tier: "Part 1 or Part 2 — S Seat (1等席)", price: "¥7,500", note: "Orchestra and front balcony prime viewing of both the puppets and the yuka dais." },
        { tier: "Part 1 or Part 2 — A Seat (2等席)", price: "¥5,500", note: "Rear orchestra and side/balcony seating." },
        { tier: "Part 3 Evening (Sonezaki Shinjū) — S Seat", price: "¥5,000", note: "Special evening single-play pricing for Chikamatsu's complete Sonezaki Shinjū." },
        { tier: "Part 3 Evening — A Seat", price: "¥3,500", note: "Budget evening seating for Part 3." },
        { tier: "Student / Youth Discount (学生割引)", price: "30%–50% OFF", note: "Available via National Theatre Ticket Centre with valid student ID." }
      ],
      sameDayInfo: "Same-day tickets (当日券) and Under-25 / Student discounted seats are sold at the Tokyo Metropolitan Theatre Playhouse entrance box office starting 60 minutes before each part's curtain time, subject to availability.",
      lobbyAmenities: [
        {
          item: "English Audio Guide / Tablet Captioning (英語イヤホンガイド)",
          price: "¥800",
          description: "Available at the Playhouse foyer counter before curtain. Provides live scene context, musical cues, and puppet head explanations."
        },
        {
          item: "Official Performance Program & Yukahon (プログラム・床本)",
          price: "¥1,500",
          description: "Includes the complete Jōruri chanting text (yukahon) for all three parts, cast assignments for Tayū, Shamisen, and Puppeteers, and scholarly essays."
        },
        {
          item: "Complimentary English Synopsis Booklet",
          price: "Free",
          description: "Distributed free to foreign guests at the entrance desk; summarizes Kagamiyama, Yoshitsune Senbon Zakura, and Sonezaki Shinjū."
        }
      ]
    },
    resources: {
      digitalPortals: [
        {
          title: "UNESCO / JAC — An Invitation to Bunraku",
          url: "https://www2.ntj.jac.go.jp/unesco/bunraku/en/",
          badge: "Official EN",
          description: "Interactive English guide to Bunraku history, three-man puppetry mechanics, Tayū/Shamisen interplay, and famous masterpieces."
        },
        {
          title: "Japan Arts Council — Cultural Digital Library (文化デジタルライブラリー)",
          url: "https://www2.ntj.jac.go.jp/dglib/",
          badge: "Official JP/EN",
          description: "Searchable database of Bunraku plays including Kagamiyama Kokyō no Nishikie, Yoshitsune Senbon Zakura, and Sonezaki Shinjū."
        }
      ],
      englishSources: [
        {
          author: "Donald Keene (trans.)",
          title: "Major Plays of Chikamatsu",
          publisher: "Columbia University Press (1961 / 1990)",
          note: "Contains the classic, poetic full English translation of The Love Suicides at Sonezaki (Sonezaki Shinjū), including the famous Michiyuki passage."
        },
        {
          author: "Stanleigh H. Jones Jr. (trans.)",
          title: "Yoshitsune and the Thousand Cherry Trees (義経千本桜)",
          publisher: "Columbia University Press (1993)",
          note: "Complete annotated English translation of the 1747 five-act masterpiece, including Act III (The Pasania Tree, Death of Kogingo, The Sushi Shop) and Act IV (Hatsune's Journey)."
        },
        {
          author: "Julie A. Iezzi & Samuel L. Leiter",
          title: "Kagamiyama Kokyō no Nishikie (Mirror Mountain: A Women's Treasury of Loyal Retainers)",
          publisher: "In Kabuki Plays on Stage, Vol. 2, University of Hawaii Press (2002)",
          note: "English translation and performance commentary on the famous sandal-beating scene and Ohatsu's vengeance for Lady Onoe."
        }
      ],
      japaneseSources: [
        {
          title: "岩波書店『新日本古典文学大系 91 近松門左衛門集』『93 竹田出雲・並木宗輔 浄瑠璃集』",
          publisher: "岩波書店 (Iwanami Shoten)",
          note: "Standard academic editions of Sonezaki Shinjū and Yoshitsune Senbon Zakura with extensive notes on Edo-period Osaka dialect and Jōruri musical notation."
        },
        {
          title: "国立劇場・日本芸術文化振興会『令和8年12月文楽公演 プログラム・床本』",
          publisher: "日本芸術文化振興会 (Japan Arts Council)",
          note: "Official theater booklet containing the verbatim stage yukahon script performed in the December 2026 Tokyo run."
        }
      ],
      driveMaterials: [
        {
          title: "20261110/ Project Study Folder",
          type: "Google Drive Folder",
          url: "https://drive.google.com/drive/folders/11LjsG4fshpalcSX6HktHYX5XrAWtjIcM",
          description: "Master project folder containing exported scripts, playbill scans, and study notes."
        },
        {
          title: "Detailed Play Guide & Commentary (Kinshu Bunraku Kōen)",
          type: "Google Doc",
          url: "https://docs.google.com/document/d/14qb_-5kPPTQf42fvkh_Jao70M8PczuarlntEpn13muw/view",
          description: "Comprehensive act-by-act background, dramatic structure, and bibliography."
        },
        {
          title: "Bunraku & Kabuki Bilingual Companion — Master Script Sheet",
          type: "Google Sheet",
          url: "https://docs.google.com/spreadsheets/d/10d8VxRt_bWfT17KukhtggA4ThTnRFpIJwBoxakaXIqE/view",
          description: "Line-by-line bilingual alignment spreadsheet with Japanese Ruby, Plain text, English, and Cultural Notes."
        },
        {
          title: "Scanned Playbill / Material 1 (Scanned_20261110-1159.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1nm0s7OoXwedB2zavFjAqfNyFnzMCa5F_/view",
          description: "High-resolution scan of original theater reference material and program pages (Set 1)."
        },
        {
          title: "Scanned Playbill / Material 2 (Scanned_20261110-1212.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1y4u_kDAEfs1PFVLIbHSlaUjwGtIeou-b/view",
          description: "High-resolution scan of original theater reference material and program pages (Set 2)."
        },
        {
          title: "Scanned Playbill / Material 3 (Scanned_20261110-1214.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1opW5cCq04Tv7jixbZPjICcG2I7K2suO6/view",
          description: "High-resolution scan of original theater reference material and program pages (Set 3)."
        }
      ]
    },
    studyGuide: [
      {
        heading: "Overview: December 2026 Tokyo Bunraku Performance (令和8年12月文楽公演)",
        subtitle: "December 6–19, 2026 · Tokyo Metropolitan Theatre Playhouse (東京芸術劇場 プレイハウス)",
        summary: "This three-part winter Tokyo engagement showcases the full spectrum of Ningyō Jōruri: Part 1 presents the fierce palace rivalry and female loyalty of Kagamiyama Kokyō no Nishikie ('The Women's Chūshingura'); Part 2 presents the tragic commoner transformation of Igami no Gonta in Act III and the magical fox-drum journey of Act IV from Yoshitsune Senbon Zakura; and Part 3 presents Chikamatsu Monzaemon's foundational 1703 domestic tragedy, Sonezaki Shinjū.",
        bullets: [
          {
            title: "Three Masterpieces Across Three Eras of Jōruri",
            text: "Spanning from Chikamatsu's 1703 breakthrough love-suicide play (Sonezaki Shinjū) to the 1747 golden-age triumvirate epic (Yoshitsune Senbon Zakura) and Yō Yōtai's 1782 Edo-flavored women's vendetta drama (Kagamiyama Kokyō no Nishikie), the December program illustrates how puppet dramaturgy evolved over the 18th century."
          }
        ]
      },
      {
        heading: "Part 1 (11:00 AM): Kagamiyama Kokyō no Nishikie (加賀見山旧錦絵 — Mirror Mountain: Old Brocade Pictures)",
        subtitle: "Premiered 1782 (Tenmei 2) · Written by Yō Yōtai (容楊黛)",
        summary: "Often called 'The Women's Chūshingura' (女忠臣蔵), this drama is set in the inner ladies' quarters (Oku-goten) of a great samurai mansion and dramatizes the conflict between the haughty noblewoman Iwafuji and the gentle, merchant-born Lady Onoe, together with Onoe's fiery maidservant Ohatsu.",
        bullets: [
          {
            title: "Zōri-uchi no Dan (The Sandal-Beating / 草履打の段)",
            text: "Envious of Lady Onoe's favor and disdainful of her townsperson lineage, the malicious court lady Iwafuji switches a sacred heirloom incense box with an old pair of straw sandals (zōri). Falsely accusing Onoe of humiliation, Iwafuji strikes Onoe repeatedly across the brow with the dirty sandal before the assembled court ladies, while Onoe bears the indignity in silent grief."
          },
          {
            title: "Rōka no Dan & Nagatsubone no Dan (The Corridor & The Ladies' Quarters / 廊下の段・長局の段)",
            text: "Returning to her quarters in mortification, Onoe is comforted by her devoted, spirited maidservant Ohatsu. Sensing her mistress's suicidal despair, Ohatsu tends to her with fierce loyalty. Onoe tricks Ohatsu into running an errand carrying a locked keepsake box to Onoe's parents, then quietly prepares to take her own life behind the folding screen to clear her family's honor. Sensing an ominous chill in the corridor, Ohatsu rushes back to find Onoe dying with the soiled sandal and a farewell letter."
          },
          {
            title: "Okuniwa no Dan (The Inner Garden / 奥庭の段)",
            text: "Concealing Onoe's death, Ohatsu confronts Iwafuji in the inner garden and strikes her back with the very same straw sandal before cutting down the villainess in righteous vengeance—earning her promotion to succeed her mistress's name as the Second Onoe."
          }
        ]
      },
      {
        heading: "Part 2 (2:30 PM): Yoshitsune Senbon Zakura (義経千本桜 — Yoshitsune and the Thousand Cherry Trees)",
        subtitle: "Premiered 1747 (Enkyō 4) · Written by Takeda Izumo II, Miyoshi Shōraku, and Namiki Senryū",
        summary: "Part 2 presents the complete Act III ('The Sushi Shop Arc')—centered on the roguish prodigal son Igami no Gonta and the surviving Heike general Taira no Koremori—followed by the enchanting Act IV dance-journey Michiyuki Hatsune no Tabi.",
        bullets: [
          {
            title: "Shiinoki no Dan & Kogingo Uchiji no Dan (The Pasania Tree & Death of Kogingo / 椎の木の段・小金吾討死の段)",
            text: "At a mountain rest house in Shimoichi Village, the ne'er-do-well gambler Igami no Gonta tricks his mother out of twenty ryō by swapping travelers' luggage baskets. Meanwhile, the young warrior Wakaba no Naishi and her infant son Rokudai—wife and heir of the fugitive Heike general Taira no Koremori—are escorted by the loyal retainer主馬小金吾 (Shume no Kogingo). Ambushed by Kamakura pursuers, Kogingo fights heroically to the death so his lady can escape, and his corpse is discovered by the sushi-shop owner Yazaemon."
          },
          {
            title: "Sushiya no Dan (The Sushi Shop / すしやの段)",
            text: "Yazaemon hides Koremori in his shop disguised as the apprentice Yasuke, while Yazaemon's daughter Osato innocently falls in love with him. When Kajiwara Kagetoki demands Koremori's head and captures Wakaba no Naishi and her child, Yazaemon secretly severs dead Kogingo's head to pass off as Koremori's. Gonta appears to betray Koremori for Kajiwara's reward—delivering a severed head and bound mother and child—only to be fatally stabbed by his outraged father Yazaemon. Dying in agony, Gonta reveals the heartbreaking truth (*modori*): the head he handed over was actually Kogingo's, and the bound woman and child he sacrificed were his own loving wife Kozue and little son Zentarō."
          },
          {
            title: "Michiyuki Hatsune no Tabi (Hatsune's Journey / 道行初音旅)",
            text: "Beneath the full bloom of a thousand cherry trees on Mount Yoshino, Lady Shizuka travels toward her beloved Yoshitsune accompanied by the loyal retainer Satō Tadanobu. In reality, this Tadanobu is a magical white fox (Genkurō-gitsune) drawn irresistibly to the Hatsune hand-drum crafted from the hides of his mother and father foxes."
          }
        ]
      },
      {
        heading: "Part 3 (7:00 PM): Sonezaki Shinjū (曾根崎心中 — The Love Suicides at Sonezaki)",
        subtitle: "Premiered 1703 (Genroku 16) · Written by Chikamatsu Monzaemon (近松門左衛門)",
        summary: "Staged just weeks after a real-life double suicide in Osaka's Tenjin Woods in 1703, Chikamatsu's Sonezaki Shinjū revolutionized the Japanese stage by elevating an ordinary soy-sauce clerk (Tokubei) and a low-ranking courtesan (Ohatsu) to the stature of high tragic heroes.",
        bullets: [
          {
            title: "Ikutama Shazen no Dan (Before Ikutama Shrine / 生玉社前の段)",
            text: "At the bustling precincts of Ikutama Shrine, Tokubei—an honest clerk at his uncle's Hirano-ya soy-sauce shop—reunites with Ohatsu of the Tenmaya teahouse. Tokubei explains that his stepmother took a two-kanme silver dowry to marry him to a niece behind his back; although he recovered the silver to return it to his master, his false friend Kuheiji tricked him into lending the money for three days. When Kuheiji arrives with rowdy cronies, he claims the promissory seal was stolen beforehand, brands Tokubei an extortionist, and beats him publicly in the dirt."
          },
          {
            title: "Tenmaya no Dan (The Tenmaya House / 天満屋の段)",
            text: "Robbed of both his silver and his merchant honor, Tokubei creeps back to the Tenmaya brothel at nightfall. Ohatsu hides him beneath the hem of her outer robe under the verandah steps just as the arrogant Kuheiji enters to boast that Tokubei will soon be executed. Speaking aloud to Kuheiji while addressing Tokubei below, Ohatsu asks if Tokubei truly resolves to die; hidden beneath the porch, Tokubei takes her bare ankle and draws it across his throat to pledge death, and Ohatsu boldly affirms their shared resolve."
          },
          {
            title: "Tenjin no Mori no Dan (Tenjin Woods / 天神森の段)",
            text: "Beginning with Chikamatsu's immortal opening lines—'Farewell to this world, and to the night farewell' (この世の名残り、夜も名残り)—the lovers walk through the dark streets of Umeda listening to the seven dawn bells until they reach the intertwined pine and palm tree of Sonezaki Shrine, binding their bodies together with Ohatsu's sash to be reborn on a single lotus calyx in Paradise."
          }
        ]
      }
    ],
    parts: [
      {
        id: "part1",
        label: "第1部 Morning 11:00 (加賀見山旧錦絵)",
        badge: "PART 1 MORNING",
        scenes: [
          {
            id: "dec_p1_zouriuchi",
            title: "草履打の段 (The Sandal-Beating)",
            playwright: "容楊黛 (Yō Yōtai)",
            premiere: "1782 (Tenmei 2) · Toyotake-za / Edo Geki-za",
            playType: "時代物・御殿物 (Jidaimono — Palace Women's Vendetta)",
            textCoverage: "highlights",
            synopsis: "Inside the grand palace quarters, the scheming noblewoman Iwafuji harbors bitter resentment toward the gentle Middle Counselor Lady Onoe, who rose to high rank despite her merchant origins. Having secretly swapped a sacred heirloom incense case with an old straw sandal (zōri), Iwafuji publicly accuses Onoe of treachery and beats her across the forehead with the filthy sandal in front of the assembled court ladies.",
            highlights: "Compare the contrasting puppet heads (kashira): Iwafuji uses the sharp, fierce Yashio head reserved for domineering female villains, while Lady Onoe uses the serene, aristocratic Fukeoyama head, trembling with silent humiliation as she endures the blows.",
            cast: [
              { nameJp: "局岩藤", nameEn: "Lady Iwafuji", role: "Arrogant, high-born senior court lady conspiring to usurp the domain", headOrStyle: "Kashira: Yashio (八汐 — Female Villain Head)" },
              { nameJp: "中老尾上", nameEn: "Lady Onoe", role: "Gentle, merchant-born lady-in-waiting humiliated by Iwafuji", headOrStyle: "Kashira: Fukeoyama (老女方 — Noble Matron Head)" },
              { nameJp: "召使お初", nameEn: "Maidservant Ohatsu", role: "Onoe's loyal, martial-arts-trained personal attendant", headOrStyle: "Kashira: Sasaya / Musume (笹屋・娘)" }
            ]
          },
          {
            id: "dec_p1_roka",
            title: "廊下の段 (The Corridor)",
            playwright: "容楊黛 (Yō Yōtai)",
            premiere: "1782 (Tenmei 2)",
            playType: "時代物 (Jidaimono — Palace Intrigue)",
            textCoverage: "highlights",
            synopsis: "Along the long wooden corridor connecting the palace reception halls to the ladies' residential quarters, the fiercely loyal maidservant Ohatsu learns of her mistress Onoe's public humiliation and intercepts Iwafuji's mocking attendants, barely restraining her blade out of concern for Onoe's position.",
            highlights: "Notice the brisk, tense shamisen rhythms accompanying Ohatsu's stride along the palace corridor and the sharp contrast between her samurai spirit and her servant status.",
            cast: [
              { nameJp: "召使お初", nameEn: "Ohatsu", role: "Seethes with indignation over the insult done to her mistress Onoe", headOrStyle: "Kashira: Sasaya (笹屋 — Spirited Young Woman)" },
              { nameJp: "中老尾上", nameEn: "Lady Onoe", role: "Retreats down the corridor holding back her tears of dishonor", headOrStyle: "Kashira: Fukeoyama (老女方)" }
            ]
          },
          {
            id: "dec_p1_nagatsubone",
            title: "長局の段 (The Ladies' Quarters)",
            playwright: "容楊黛 (Yō Yōtai)",
            premiere: "1782 (Tenmei 2)",
            playType: "時代物 (Jidaimono — High Domestic Pathos)",
            textCoverage: "highlights",
            synopsis: "In her private rooms in the Nagatsubone, Lady Onoe is comforted by Ohatsu, who gently dresses her disheveled hair. Secretly resolved to clear her merchant family's honor through death, Onoe sends Ohatsu away on an errand with a keepsake box containing the soiled sandal. Sensing an eerie chill and the ominous howling of dogs along the darkened corridor, Ohatsu rushes back to discover Onoe dying behind a folding screen.",
            highlights: "Watch the delicate hair-combing sequence (髪梳き) where Ohatsu's puppet fingers tenderly tend to Onoe's hair, followed by Ohatsu's spine-tingling return with a paper lantern as the shamisen plays eerie night tones.",
            cast: [
              { nameJp: "中老尾上", nameEn: "Lady Onoe", role: "Writes her farewell testament and commits suicide with her family dagger", headOrStyle: "Kashira: Fukeoyama (老女方)" },
              { nameJp: "召使お初", nameEn: "Ohatsu", role: "Discovers her mistress's body and vows to avenge her with the very same sandal", headOrStyle: "Kashira: Sasaya (笹屋)" }
            ]
          },
          {
            id: "dec_p1_okuniwa",
            title: "奥庭の段 (The Inner Garden)",
            playwright: "容楊黛 (Yō Yōtai)",
            premiere: "1782 (Tenmei 2)",
            playType: "時代物 (Jidaimono — Climactic Vengeance)",
            textCoverage: "highlights",
            synopsis: "Summoning Iwafuji to the inner garden under the pretense that Onoe wishes to apologize, Ohatsu confronts the arrogant court lady. Drawing forth the blood-stained straw sandal from Onoe's keepsake box, Ohatsu strikes Iwafuji across the face in retribution and cuts her down in a fierce duel, earning the lord's praise and succession to the name of Second Onoe.",
            highlights: "A rare, thrilling female-vs-female sword duel in Bunraku! Watch Ohatsu's dynamic footwork (ashi-zukai) as she turns the tables on Iwafuji with the straw sandal.",
            cast: [
              { nameJp: "召使お初（二代目尾上）", nameEn: "Ohatsu (Second Onoe)", role: "Avenges her mistress's death and exposes Iwafuji's treason", headOrStyle: "Kashira: Sasaya (笹屋)" },
              { nameJp: "局岩藤", nameEn: "Lady Iwafuji", role: "Struck with her own sandal and slain in the inner garden", headOrStyle: "Kashira: Yashio (八汐)" }
            ]
          }
        ]
      },
      {
        id: "part2",
        label: "第2部 Afternoon 14:30 (義経千本桜)",
        badge: "PART 2 AFTERNOON",
        scenes: [
          {
            id: "dec_p2_shiinoki",
            title: "椎の木の段 (The Pasania Tree)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1747 (Enkyō 4) · Takemoto-za, Osaka",
            playType: "時代世話 (Jidai-Sewa — Roadside Comedy & Intrigue)",
            textCoverage: "highlights",
            synopsis: "Beneath a great pasania tree at a roadside teahouse in Shimoichi Village, the charming scoundrel Igami no Gonta arrives with his long-suffering wife Kozue and young son Zentarō. When the noble Heike fugitive Wakaba no Naishi, her son Rokudai, and retainer Kogingo stop to rest, Gonta slyly swaps his own luggage basket with Kogingo's and later uses the mix-up as an excuse to extort twenty ryō from his mother.",
            highlights: "Notice Gonta's swaggering, rakish charm: he is operated with the Danshichi or Genda head and wears his kimono tucked up in the 'amikake' style, balancing streetwise comedy with underlying warmth toward his wife and child.",
            cast: [
              { nameJp: "いがみの権太", nameEn: "Igami no Gonta", role: "Prodigal son of sushi-shop owner Yazaemon; a gambler with a hidden heart of gold", headOrStyle: "Kashira: Genda / Danshichi (源太・団七)" },
              { nameJp: "女房小せん", nameEn: "Wife Kosen (Kozue)", role: "Gonta's devoted wife who runs the roadside teahouse", headOrStyle: "Kashira: Fukeoyama / Musume" },
              { nameJp: "主馬小金吾", nameEn: "Shume no Kogingo", role: "Loyal young Heike warrior escorting Koremori's wife and son", headOrStyle: "Kashira: Wakaotoko (若男)" },
              { nameJp: "若葉の内侍", nameEn: "Wakaba no Naishi", role: "Wife of fugitive Heike general Taira no Koremori", headOrStyle: "Kashira: Fukeoyama (老女方)" }
            ]
          },
          {
            id: "dec_p2_kogingo",
            title: "小金吾討死の段 (Death of Kogingo)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1747 (Enkyō 4)",
            playType: "時代物 (Jidaimono — Heroic Battle Scene)",
            textCoverage: "highlights",
            synopsis: "Pursued through the pine groves by Genji soldiers under猪熊大之進 (Inokuma Dainoshin), young Shume no Kogingo fights off scores of attackers to buy time for Wakaba no Naishi and young Lord Rokudai to escape toward Mount Yoshino. Exhausted and pierced by multiple wounds, Kogingo dies heroically; soon after, sushi-shop owner Yazaemon passes by on his way home, discovers the noble youth's corpse, and severs the head to use as a substitute for Lord Koremori.",
            highlights: "Spectacular Bunraku sword-fighting (tate) as the three puppeteers operating Kogingo leap, spin, and clash blades against waves of Genji foot soldiers before his poignant final breath.",
            cast: [
              { nameJp: "主馬小金吾", nameEn: "Shume no Kogingo", role: "Sacrifices his life in battle to protect Koremori's wife and child", headOrStyle: "Kashira: Wakaotoko (若男)" },
              { nameJp: "鮓屋弥左衛門", nameEn: "Sushiya Yazaemon", role: "Owner of the Tsurube Sushi Shop who owes a debt of gratitude to Lord Koremori", headOrStyle: "Kashira: Shūto (舅 — Upright Old Man)" }
            ]
          },
          {
            id: "dec_p2_sushiya",
            title: "すしやの段 (The Sushi Shop)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1747 (Enkyō 4)",
            playType: "時代世話 (Jidai-Sewa — Masterpiece of Tragic Redemption / Modori)",
            textCoverage: "highlights",
            synopsis: "At Yazaemon's Tsurube Sushi Shop in Shimoichi, Taira no Koremori lives disguised as the shop hand Yasuke, beloved by Yazaemon's daughter Osato. That night, Wakaba no Naishi and her son arrive seeking shelter, revealing Yasuke's noble identity to the heartbroken Osato. When Gonta steals the sushi tub containing Kogingo's severed head and delivers it along with a bound mother and child to the Genji general Kajiwara Kagetoki for a reward, Yazaemon stabs Gonta in fury. Dying, Gonta reveals his heroic deception (*modori*): realizing he had accidentally swapped baskets earlier, he substituted Kogingo's head and handed over his own wife and son as captives to save Koremori's family.",
            highlights: "One of the most famous 'Modori' (character reversal from villain to hero) scenes in Japanese theater. Watch Gonta's agonizing death confession while clutching his bleeding stomach, and the bittersweet farewell as Koremori shaves his head to become a monk.",
            cast: [
              { nameJp: "いがみの権太", nameEn: "Igami no Gonta", role: "Sacrifices his own wife, child, and life to save his father's lord Koremori", headOrStyle: "Kashira: Genda / Danshichi (源太)" },
              { nameJp: "弥助（実は平維盛）", nameEn: "Yasuke (Taira no Koremori)", role: "Heike nobleman hiding as a humble sushi-shop apprentice", headOrStyle: "Kashira: Wakaotoko (若男 — Refined Young Noble)" },
              { nameJp: "娘お里", nameEn: "Osato", role: "Yazaemon's warm-hearted daughter who must give up her love for Yasuke", headOrStyle: "Kashira: Musume (娘 — Maiden Head)" },
              { nameJp: "鮓屋弥左衛門", nameEn: "Sushiya Yazaemon", role: "Stabs his own son Gonta before learning of Gonta's ultimate sacrifice", headOrStyle: "Kashira: Shūto (舅)" },
              { nameJp: "梶原平三景時", nameEn: "Kajiwara Kagetoki", role: "Genji investigator who gifts Gonta a coat containing Yoshitsune's hidden message", headOrStyle: "Kashira: Bunshichi (文七)" }
            ]
          },
          {
            id: "dec_p2_michiyuki",
            title: "道行初音旅 (Hatsune's Journey)",
            playwright: "竹田出雲・三好松洛・並木千柳 (Takeda Izumo II, Miyoshi Shōraku & Namiki Senryū)",
            premiere: "1747 (Enkyō 4)",
            playType: "道行・景事 (Michiyuki — Cherry-Blossom Dance Journey)",
            textCoverage: "highlights",
            synopsis: "Under a canopy of a thousand blooming cherry trees on Mount Yoshino, Yoshitsune's mistress Lady Shizuka travels in search of her lord. When she strikes the sacred Hatsune ('First Song of Spring') hand-drum, her loyal bodyguard Satō Tadanobu magically appears beside her. Together they reenact the great Battle of Yashima using a folding fan and Yoshitsune's suit of armor—unaware that this Tadanobu is actually a white fox spirit yearning for the drum made from his parents' skins.",
            highlights: "Watch the uncanny, nimble fox-like hand gestures (kitsune-de) and sudden leaps of Tadanobu whenever Shizuka strikes the Hatsune tsuzumi drum, accompanied by a colorful ensemble of multiple Tayū chanters and Shamisen players (kakeai).",
            cast: [
              { nameJp: "佐藤忠信（実は源九郎狐）", nameEn: "Satō Tadanobu (Fox Spirit)", role: "Heroic retainer who is secretly the white fox child of the Hatsune drum skins", headOrStyle: "Kashira: Genda (源太 — Dynamic Warrior / Fox)" },
              { nameJp: "静御前", nameEn: "Lady Shizuka", role: "Beloved mistress of Minamoto no Yoshitsune and virtuoso dancer", headOrStyle: "Kashira: Keisei / Musume (傾城・娘)" }
            ]
          }
        ]
      },
      {
        id: "part3",
        label: "第3部 Evening 19:00 (曾根崎心中)",
        badge: "PART 3 EVENING",
        scenes: [
          {
            id: "dec_p3_ikutama",
            title: "生玉社前の段 (Before Ikutama Shrine)",
            playwright: "近松門左衛門 (Chikamatsu Monzaemon)",
            premiere: "1703 (Genroku 16) · Takemoto-za, Osaka",
            playType: "世話物 (Sewamono — Foundational Domestic Tragedy)",
            textCoverage: "highlights",
            synopsis: "At the lively grounds of Ikutama Shrine in Osaka, Ohatsu—a courtesan of the Tenmaya house in the Shijimi River quarter—spots her lover Tokubei, a clerk at the Hirano-ya soy-sauce shop. Tokubei confesses that his uncle forced a marriage arrangement behind his back; although Tokubei retrieved the two-kanme silver dowry to return it, his treacherous friend Kuheiji wheedled him into lending the silver until the seventh of the month. When Kuheiji swaggeringly arrives, he claims his seal was reported lost days earlier, accuses Tokubei of forgery, and has his cronies beat Tokubei in front of Ohatsu.",
            highlights: "Notice the stark contrast between the refined, fragile Wakaotoko head of Tokubei and the sneering, red-complexioned Danshichi head of the swindler Kuheiji as Tokubei's merchant credit and honor are destroyed in public.",
            cast: [
              { nameJp: "平野屋徳兵衛", nameEn: "Hiranoya Tokubei", role: "Honest soy-sauce clerk betrayed and framed by his false friend Kuheiji", headOrStyle: "Kashira: Wakaotoko (若男 — Gentle Young Man)" },
              { nameJp: "天満屋お初", nameEn: "Tenmaya Ohatsu", role: "Devoted Sonezaki courtesan who loves Tokubei above life itself", headOrStyle: "Kashira: Musume / Keisei (娘・傾城)" },
              { nameJp: "油屋九平次", nameEn: "Aburaya Kuheiji", role: "Treacherous oil-merchant who swindles Tokubei out of two kanme of silver", headOrStyle: "Kashira: Danshichi (団七 — Swindler / Ruffian)" }
            ]
          },
          {
            id: "dec_p3_tenmaya",
            title: "天満屋の段 (The Tenmaya House)",
            playwright: "近松門左衛門 (Chikamatsu Monzaemon)",
            premiere: "1703 (Genroku 16)",
            playType: "世話物 (Sewamono — Domestic Tragedy Climax)",
            textCoverage: "highlights",
            synopsis: "That night at the Tenmaya teahouse, Ohatsu anxieties over Tokubei's fate until he slips quietly through the lattice door in a straw hat. Ohatsu hides him beneath her trailing outer robe under the verandah steps just as the boastful Kuheiji enters as a customer and slanders Tokubei. Sitting on the edge of the steps smoking her long pipe, Ohatsu speaks ostensibly to Kuheiji while asking Tokubei below if he is resolved to die; hidden in the dark beneath the porch, Tokubei takes Ohatsu's bare white ankle and draws it across his throat to pledge suicide.",
            highlights: "The most famous gesture in all of Bunraku: female puppets normally have no feet, yet for this scene Ohatsu's puppet is specially fitted with bare human-like feet so Tokubei can grasp her ankle beneath the veranda and draw it across his throat.",
            cast: [
              { nameJp: "天満屋お初", nameEn: "Tenmaya Ohatsu", role: "Communicates her resolve to die with Tokubei via her bare foot beneath the porch", headOrStyle: "Kashira: Musume (with special articulated bare foot)" },
              { nameJp: "平野屋徳兵衛", nameEn: "Hiranoya Tokubei", role: "Hides beneath the Tenmaya porch and pledges double suicide on Ohatsu's ankle", headOrStyle: "Kashira: Wakaotoko (若男)" },
              { nameJp: "油屋九平次", nameEn: "Aburaya Kuheiji", role: "Drinks and boasts at the Tenmaya, oblivious to Tokubei hiding right below him", headOrStyle: "Kashira: Danshichi (団七)" }
            ]
          },
          {
            id: "dec_p3_tenjin",
            title: "天神森の段 (Tenjin Woods)",
            playwright: "近松門左衛門 (Chikamatsu Monzaemon)",
            premiere: "1703 (Genroku 16)",
            playType: "世話物・道行 (Sewamono Michiyuki — Poetic Journey to Death)",
            textCoverage: "highlights",
            synopsis: "Slipping out of the Tenmaya under cover of darkness, Tokubei and Ohatsu walk barefoot along the riverbanks toward the sacred woods of Sonezaki Tenjin Shrine as the dawn bells toll seven times. Reaching the symbolic 'Twin Tree of Love'—where a pine and a palm grow from a single trunk—they bind themselves together with Ohatsu's silk sash. With trembling hands, Tokubei takes Ohatsu's life with a razor before plunging it into his own throat, achieving eternal union as 'models of true love for all generations.'",
            highlights: "Listen to Chikamatsu's sublime poetic opening ('Kono yo no nagori, yo mo nagori...') chanted with heartbreaking lyricism by the Tayū, and watch Ohatsu's pure white silk under-robe glow against the dark stage.",
            cast: [
              { nameJp: "天満屋お初", nameEn: "Tenmaya Ohatsu", role: "Dressed in pure white death-silk beneath her dark outer kimono", headOrStyle: "Kashira: Musume (娘)" },
              { nameJp: "平野屋徳兵衛", nameEn: "Hiranoya Tokubei", role: "Binds himself to Ohatsu beneath the twin pine-and-palm tree of Tenjin Woods", headOrStyle: "Kashira: Wakaotoko (若男)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2026-11-bunraku",
    label: "2026年11月 文楽 (Osaka)",
    subtitle: "令和8年錦秋文楽公演（三世吉田簑助三回忌追善） · Oct 31–Nov 23, 2026 · National Bunraku Theatre",
    genre: "bunraku",
    dataFile: "data/2026-11-bunraku.js",
    venue: {
      name: "National Bunraku Theatre (Nippombashi, Osaka)",
      nameJp: "国立文楽劇場（大阪・日本橋）",
      address: "1-12-10 Nippombashi, Chūō-ku, Osaka 542-0073 (〒542-0073 大阪府大阪市中央区日本橋1-12-10)",
      access: "1-minute walk from Nippombashi Station (日本橋駅, Osaka Metro Sakaisuji Line / Sennichimae Line / Kintetsu Nara Line) via Exit 7 (7号出口より徒歩1分).",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=National+Bunraku+Theatre+Osaka",
      scheduleNote: "Oct 31–Nov 23, 2026 (Dark on Nov 6 & Nov 16). Commemorating the 3rd anniversary memorial (三回忌追善) of Living National Treasure Yoshida Minosuke III. Part 1: 11:00–13:30 / Part 2: 14:15–17:08 / Part 3: 17:45–20:20."
    },
    ticketing: {
      officialLinks: [
        {
          label: "National Theatre Ticket Centre (国立劇場チケットセンター)",
          lang: "Japanese",
          url: "https://ticket.ntj.jac.go.jp/",
          badge: "Official Box Office (JP)",
          description: "Direct online booking for all three parts at the National Bunraku Theatre in Osaka, with interactive seat selection."
        },
        {
          label: "National Bunraku Theatre — Official English Guide",
          lang: "English",
          url: "https://www.ntj.jac.go.jp/en/theatre/bunraku.html",
          badge: "Venue Guide (EN)",
          description: "Official English visitor guide to the National Bunraku Theatre in Osaka, including floor maps, exhibition room info, and access."
        },
        {
          label: "National Theatre English Ticket Booking",
          lang: "English",
          url: "https://www.ntj.jac.go.jp/en/tickets.html",
          badge: "English Portal",
          description: "International English reservation system for 1st Class and 2nd Class seats at the National Bunraku Theatre."
        }
      ],
      pricingTiers: [
        { tier: "1st Class Seat (1等席)", price: "¥6,500", note: "Main auditorium rows with optimal sightlines to both the puppet stage and the Tayū/Shamisen yuka dais." },
        { tier: "2nd Class Seat (2等席)", price: "¥3,000", note: "Rear rows and side seating offering exceptional value for full-part attendance." },
        { tier: "Single-Act Ticket (一幕見席 / Hitomakumi-seki)", price: "¥1,000 – ¥2,200", note: "Same-day single-scene tickets sold at the 1st-floor box office prior to the designated scene." },
        { tier: "Student / Youth Discount (学生割引)", price: "¥4,500 (1st) / ¥1,500 (2nd)", note: "Discounted student rates available with valid student ID." }
      ],
      sameDayInfo: "Same-day Single-Act tickets (幕見席 / Hitomakumi-seki) for individual scenes (such as Yaoya no Dan, Kinden no Dan, or Okuniwa Kitsunebi no Dan) are sold at the National Bunraku Theatre 1F Box Office on the day of performance.",
      lobbyAmenities: [
        {
          item: "English Earphone Audio Guide (英語イヤホンガイド)",
          price: "¥800 (Regular) / ¥500 (Single-Act)",
          description: "Offered in the 2nd-floor lobby (especially featured for Part 3 Honchō Nijūshikō and key highlights). Explains storyline, puppet gestures, and musical cues in real time."
        },
        {
          item: "Official Performance Program & Yukahon (公式プログラム・床本)",
          price: "¥1,500",
          description: "Available at the 2F lobby shop. Includes the complete yukahon (chanting script with vocal notation accents), critical essays on Chikamatsu Monzaemon and Chikamatsu Hanji, and tribute reflections dedicated to the late Yoshida Minosuke III."
        },
        {
          item: "Complimentary English Synopsis Booklet & 1F Exhibition Room",
          price: "Free",
          description: "A free English synopsis booklet covering all three parts is distributed at the entrance. Also visit the free 1st-floor Bunraku Exhibition Room (資料展示室) before curtain!"
        }
      ]
    },
    resources: {
      digitalPortals: [
        {
          title: "UNESCO / JAC — An Invitation to Bunraku",
          url: "https://www2.ntj.jac.go.jp/unesco/bunraku/en/",
          badge: "Official EN",
          description: "Features comprehensive historical breakdowns, character relation diagrams, stage mechanics, and annotated audio/video clips for Imoseyama Onna Teikin, Honchō Nijūshikō, and domestic tragedies."
        },
        {
          title: "Japan Arts Council — Cultural Digital Library (文化デジタルライブラリー)",
          url: "https://www2.ntj.jac.go.jp/dglib/",
          badge: "Official JP",
          description: "Search under 作品解説 (Work Explanations) for 『心中宵庚申』『妹背山婦女庭訓』『本朝廿四孝』 to view scene-by-scene script transcriptions (shōhon), staging histories, and master puppeteer records."
        }
      ],
      englishSources: [
        {
          author: "Donald Keene",
          title: "Major Plays of Chikamatsu",
          publisher: "Columbia University Press (1961 / 1990)",
          note: "Provides essential scholarship on Chikamatsu's late domestic tragedies and the thematic dynamics of giri-ninjō (duty vs. emotion) and social displacement seen in Shinjū Yoigōshin."
        },
        {
          author: "C. Andrew Gerstle (trans. & ed.)",
          title: "Chikamatsu: Five Late Plays",
          publisher: "Columbia University Press (2001)",
          note: "Features authoritative English translations and detailed scene commentaries illustrating Chikamatsu's late dramatic architecture and poetic wordplay."
        },
        {
          author: "C. Andrew Gerstle, Kiyoshi Inobe & William P. Malm",
          title: "Theater as Music: The Bunraku Play 'Mt. Imo and Mt. Se: An Exemplary Tale of Womanly Virtue'",
          publisher: "University of Michigan Center for Japanese Studies (1990)",
          note: "In-depth musical and dramatic analysis of Chikamatsu Hanji's Imoseyama Onna Teikin (including Sugi Sakaya and Kinden no Dan)."
        }
      ],
      japaneseSources: [
        {
          title: "日本芸術文化振興会『文化デジタルライブラリー』作品解説（心中宵庚申・妹背山婦女庭訓・本朝廿四孝）",
          publisher: "日本芸術文化振興会 (Japan Arts Council)",
          note: "Detailed scene-by-scene script transcriptions (正本), staging histories (上演記録), and master puppeteer movement commentary."
        },
        {
          title: "国立文楽劇場『令和8年錦秋文楽公演 公式プログラム・床本』",
          publisher: "国立文楽劇場 (National Bunraku Theatre, ¥1,500)",
          note: "Full yukahon chanting script with vocal notation accents, essays on Chikamatsu Hanji's dramaturgy, and memorial tribute to Yoshida Minosuke III."
        },
        {
          title: "岩波書店『新日本古典文学大系 91 近松門左衛門集』『94 近松半二 浄瑠璃集』 / 新潮社『新潮日本古典集成』",
          publisher: "岩波書店 / 新潮社",
          note: "Authoritative, fully annotated classical texts of Shinjū Yoigōshin and Chikamatsu Hanji's masterpiece acts (Kinden no Dan, Jushukō no Dan)."
        }
      ],
      driveMaterials: [
        {
          title: "20261110/ Project Study Folder",
          type: "Google Drive Folder",
          url: "https://drive.google.com/drive/folders/11LjsG4fshpalcSX6HktHYX5XrAWtjIcM",
          description: "Master project folder containing the exported Google Doc, Bilingual Master Sheet, and 3 Scanned Playbill PDFs."
        },
        {
          title: "Detailed Play Guide & Commentary (Kinshu Bunraku Kōen)",
          type: "Google Doc",
          url: "https://docs.google.com/document/d/14qb_-5kPPTQf42fvkh_Jao70M8PczuarlntEpn13muw/view",
          description: "Full text of the Autumn 2026 Osaka Bunraku program guide covering Part 1 (Shinjū Yoigōshin), Part 2 (Imoseyama Onna Teikin), and Part 3 (Honchō Nijūshikō)."
        },
        {
          title: "Bunraku Bilingual Companion — Master Script Sheet",
          type: "Google Sheet",
          url: "https://docs.google.com/spreadsheets/d/10d8VxRt_bWfT17KukhtggA4ThTnRFpIJwBoxakaXIqE/view",
          description: "Line-by-line bilingual script database for Part 1 (Shinjū Yoigōshin) and Part 2 (Imoseyama Onna Teikin)."
        },
        {
          title: "Scanned Playbill / Material 1 (Scanned_20261110-1159.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1nm0s7OoXwedB2zavFjAqfNyFnzMCa5F_/view",
          description: "Original scanned playbill & libretto pages from the November 2026 Osaka Bunraku attendance (Part 1)."
        },
        {
          title: "Scanned Playbill / Material 2 (Scanned_20261110-1212.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1y4u_kDAEfs1PFVLIbHSlaUjwGtIeou-b/view",
          description: "Original scanned playbill & libretto pages from the November 2026 Osaka Bunraku attendance (Part 2)."
        },
        {
          title: "Scanned Playbill / Material 3 (Scanned_20261110-1214.pdf)",
          type: "PDF Scan",
          url: "https://drive.google.com/file/d/1opW5cCq04Tv7jixbZPjICcG2I7K2suO6/view",
          description: "Original scanned playbill & libretto pages from the November 2026 Osaka Bunraku attendance (Part 3)."
        }
      ]
    },
    studyGuide: [
      {
        heading: "Season Overview: Autumn Bunraku Performance (令和8年錦秋文楽公演 — 三世吉田簑助三回忌追善)",
        subtitle: "October 31 – November 23, 2026 (Dark on Nov 6 & 16) · National Bunraku Theatre, Osaka",
        summary: "The Autumn Bunraku Performance (Kinshu Bunraku Kōen) at the National Bunraku Theatre commemorates the 3rd anniversary memorial (sankaiki tsuizen) of Living National Treasure puppeteer Yoshida Minosuke III. The program is divided into three distinct parts, featuring one classic domestic play (sewamono) and two major historical masterpieces (jidaimono) intimately linked with Minosuke III's legendary career.",
        bullets: [
          {
            title: "In Memoriam: Yoshida Minosuke III (三世吉田簑助三回忌追善)",
            text: "Designated a Living National Treasure in 1994, Yoshida Minosuke III was celebrated as the supreme master of female puppet roles (onnagata), renowned specifically for his unforgettable portrayals of Omiwa in Imoseyama Onna Teikin and Princess Yaegaki in Honchō Nijūshikō."
          }
        ]
      },
      {
        heading: "Part 1 (11:00 – 13:30): Shinjū Yoigōshin (Love Suicides on the Eve of the Kōshin Festival / 心中宵庚申)",
        subtitle: "Premiered 1722 (Kyōhō 7) · Written by Chikamatsu Monzaemon (近松門左衛門)",
        summary: "Written by Chikamatsu Monzaemon and first staged in 1722, this is Chikamatsu's final domestic tragedy. Unlike his earlier suicide dramas driven by infatuation with courtesans or swindled silver, this piece centers on a mature, devoted married couple—Hanbei, an adopted merchant and former samurai's son, and his wife Ochiyo—trapped and crushed by filial duty (kō) and family obligation (giri).",
        bullets: [
          {
            title: "Ueda Mura (The Village of Ueda / 上田村の段)",
            text: "While Hanbei was away on a business journey, his wicked adoptive mother evicted the pregnant Ochiyo and sent a letter of divorce (mikudarihan) to Ochiyo's native home in Ueda Village. Returning from his trip, Hanbei visits his ailing father-in-law, Heiemon, unaware of the expulsion. Heiemon furiously upbraids him for cruelty. Mortified and unable to bear the dishonor, Hanbei prepares to commit suicide on the spot to prove his innocence. Heiemon stops him, realizing his son-in-law was blameless, and resolves that the couple must reunite. Suspecting the trials ahead, Heiemon offers them farewell cups of water (mizusakazuki) and lights a purifying gatefire (kadobi)—rites traditionally reserved for the dying—sending them back to Osaka with ominous foreboding."
          },
          {
            title: "Yaoya (The Greengrocer Shop / 八百屋の段)",
            text: "Back in Osaka at the Kawachiya greengrocer household, Hanbei confronts his vitriolic adoptive mother, who adamantly refuses to take Ochiyo back. She blackmails Hanbei by waving a radish-chopping kitchen knife, threatening to kill herself if Ochiyo steps foot inside and accusing him of horrific unfilial conduct. Bound by Confucian social code and gratitude to the house that raised him, Hanbei feigns compliance: he writes out an explicit deed of divorce and throws Ochiyo out to pacify his mother. Secretly, having pledged an unbroken bond of love, both husband and wife independently determine that their only path to remain together without dishonoring either household is through death."
          },
          {
            title: "Michiyuki Omoi no Mijikayo (Travel Passage: The Shortness of a Night of Love / 道行思ひの短夜)",
            text: "Stepping into the late autumn evening under the vigil of the Kōshin festival, the couple journeys side-by-side toward the Great Buddha hall (Daibutsu Kanjinsho) near Ikutama Shrine. Chikamatsu's poetic prose plays upon the word saru—they do not 'divorce' (saranu), but instead hand-in-hand 'depart' (saru) from this world, from the wheel of transmigration, and from delusion. In a solemn, dignified climax, Hanbei tenderly takes Ochiyo's life before ending his own by ritual disembowelment, dying as true husband and wife."
          }
        ]
      },
      {
        heading: "Part 2 (14:15 – 17:08): Imoseyama Onna Teikin (Husband and Wife Mountains: A Guide for Virtuous Women / 妹背山婦女庭訓)",
        subtitle: "Premiered 1771 (Meiwa 8) · Written by Chikamatsu Hanji (近松半二) and collaborators",
        summary: "First staged in 1771 by Chikamatsu Hanji and collaborators, this epic historical chronicle weaves the 7th-century rebellion of the despotic Soga no Iruka into Edo-period romance and political intrigue. Part 2 presents the celebrated Mikasa Palace arc from Act IV.",
        bullets: [
          {
            title: "Sugi Sakaya (The Sugi Sake Shop / 杉酒屋の段) & Michiyuki Koi no Odamaki (Travel Scene: The Spool of Love / 道行恋苧環)",
            text: "At a cedar-bough sake brewery at the foot of Mount Miwa, Omiwa, the humble and spirited daughter of the brewer, falls deeply in love with a noble customer named烏帽子折求女 (Motome, in reality Prince Fujiwara no Tankai in disguise). Princess Tachibana, who happens to be Soga no Iruka's younger sister and has fled from her brother's clutches, is also enamored with Motome. Tankai must infiltrate Iruka's Mikasa Palace; when Princess Tachibana departs for the palace, Motome follows her. In the famous dance-like travel passage Koi no Odamaki, Omiwa discovers them: Motome attaches a spool of white hemp thread to Tachibana's robe to track her path, while the frantic Omiwa attaches a spool of red thread to Motome's sleeve, following her love in an agony of jealousy."
          },
          {
            title: "Fukashichi Shisha (Fukashichi, the Messenger / 鱶七使者の段) & Hime Modori (The Return of the Princess / 姫戻りの段)",
            text: "At Iruka's formidable Mikasa Palace, Fukashichi (a rough-hewn fisherman who is secretly the loyal Fujiwara retainer Kanawa Gorō Imakuni) arrives as an envoy delivering a letter from Tankai's father, Fujiwara no Kamatari. Even when confronted by Iruka's sneering courtiers who mock his one-eyed appearance and force him to drink poisoned sake, Fukashichi gulps it down unaffected and exits with imposing swagger. Princess Tachibana returns to the palace complex, seeking safety and attempting to aid the anti-Iruka faction."
          },
          {
            title: "Kinden (The Golden Palace / 金殿の段)",
            text: "Omiwa arrives at the palatial gates following her snapped red thread. Iruka's haughty court ladies (tsubone) torment and humiliate her, mocking her commoner background, tying her up, and forcing her to sing a foolish celebratory song while her hair comes undone. When musical instruments echo from the inner palace halls celebrating Motome's apparent wedding to Princess Tachibana, Omiwa's grief erupts into uncontrollable fury and madness (the famous transformation to the 'suspect grass' 疑着の相). This is the exact emotional state required by prophecy: Iruka's supernatural invulnerability can only be broken by flute music washed in the blood of a woman driven wild by jealousy, blended with the blood of a pure deer. Fukashichi suddenly leaps out and runs his sword through Omiwa. As she dies, Fukashichi sheds his disguise as Kanawa Gorō, reveals Tankai's true identity, and explains that her lifeblood will enable her beloved to destroy the tyrant Iruka. Omiwa dies radiant and content, knowing her ultimate sacrifice serves the man she loves."
          }
        ]
      },
      {
        heading: "Part 3 (17:45 – 20:20): Honchō Nijūshikō (The Japanese Twenty-Four Examples of Filial Piety / 本朝廿四孝)",
        subtitle: "Premiered 1766 (Meiwa 3) · Written by Chikamatsu Hanji (近松半二) and collaborators",
        summary: "Composed in 1766 by Chikamatsu Hanji and collaborators, this Warring States drama pits the rival houses of Takeda Shingen and Nagao (Uesugi) Kenshin against each other over the assassination of the Ashikaga Shogun and the divine heirloom helmet of Suwa Daimyōjin. Included here in full so attendees taking in the entire 3-part day at the National Bunraku Theatre have the complete program commentary!",
        bullets: [
          {
            title: "Suwa Myōjin Hyakudoishi (The Hundred-Paces Stone of Suwa Shrine / 諏訪明神百度石の段)",
            text: "Sets the stage for the intrigue surrounding the divine Suwa helmet. Takeda Shingen's son, Katsuyori, is rumored to have committed suicide three years earlier after taking responsibility for the assassination of the Shogun, but the true Katsuyori is actually living incognito under the pseudonym Minosaku (蓑作), working as a humble gardener at Nagao Kenshin's mansion to secretly recover the sacred Takeda relic."
          },
          {
            title: "Kagekatsu Jōshi & Teppō Watashi (Kagekatsu as Emissary & The Presenting of the Gun / 景勝上使の段・鉄砲渡しの段)",
            text: "Diplomatic tensions peak as Kenshin's adopted son Kagekatsu moves between the rival political camps. Firearms and treacherous plots are exchanged as each warlord maneuvers to uncover undercover operatives and enforce shogunal justice within the three-year deadline."
          },
          {
            title: "Jushukō (The Incense Burning / 十種香の段)",
            text: "One of the supreme highlights of the classical puppet repertoire. In Kenshin's residence, Princess Yaegaki (Kenshin's daughter, who was betrothed to Takeda Katsuyori) mourns before a scroll portrait of Katsuyori, burning precious 'Ten-Kind Incense' (Jushukō) in sorrow over his supposed death. She notices the newly hired gardener Minosaku outside and is startled by his spitting resemblance to her lost fiancé. When she approaches him, he initially denies his lineage, but Yaegaki's impassioned, unreserved confessions of love (guided by her attendant Nureginu) break through his reserve. Recognizing her devotion, Katsuyori reveals his true identity. However, Kenshin secretly witnesses the encounter and immediately orders Katsuyori to carry a message to the Shiojiri camp, quietly dispatching assassins to ambush him on the road."
          },
          {
            title: "Okuniwa Kitsunebi (Foxfires in the Inner Garden / 奥庭狐火の段)",
            text: "Overhearing her father's execution order, Princess Yaegaki desperately seeks a way to reach Katsuyori across Lake Suwa before the assassins strike. The winter lake is heavily frozen—impassable by boat and treacherous by foot. She retrieves the sacred Suwa helmet housed in the garden shrine and prays for divine aid. In an uncanny display of supernatural favor, white foxes—sacred messengers of the Suwa deity—appear around her and bow before the helmet. Yaegaki places the sacred helmet over her hands, her red princess robes dramatically transforming in mid-air (hiki-nuki) as she is possessed by the fox spirit. Guided by flickering foxfires (kitsunebi) that dance over the ice, she skims effortlessly across the frozen expanse of Lake Suwa to rescue her lover."
          }
        ]
      }
    ],
    parts: [
      {
        id: "part1",
        label: "第1部 Morning (心中宵庚申)",
        badge: "PART 1 MORNING",
        scenes: [
          {
            id: "morning_uedamura",
            title: "上田村の段 (Ueda Village)",
            playwright: "近松門左衛門 (Chikamatsu Monzaemon)",
            premiere: "1722 (Kyōhō 7) · Takemoto-za, Osaka",
            playType: "世話物 (Sewamono — Chikamatsu's Final Domestic Tragedy)",
            textCoverage: "highlights",
            synopsis: "While the adopted greengrocer Hanbei was away in浜松 (Hamamatsu), his cruel stepmother evicted his pregnant wife Ochiyo and sent her back to her native village of Ueda with a bill of divorce. Returning from his trip unaware of this, Hanbei visits his bedridden father-in-law Yamawaki Heiemon, who furiously berates him for heartlessness. Mortified, Hanbei draws his short sword to commit seppuku on the spot; realizing Hanbei knew nothing of the scheme, Heiemon stops him and sends the couple back to Osaka after sharing ominous farewell cups of water (mizusakazuki) and lighting a funeral gatefire (kadobi).",
            highlights: "Watch the stoic samurai dignity of old Heiemon (operated with the Masamune head) as he strikes a flint to light the purifying gatefire at the threshold—silently signaling to his son-in-law and daughter that death may be their only honorable refuge.",
            cast: [
              { nameJp: "河内屋半兵衛", nameEn: "Kawachiya Hanbei", role: "Former samurai of Hamamatsu adopted into an Osaka greengrocer house; devoted husband to Ochiyo", headOrStyle: "Kashira: Wakaotoko (若男 — Upright Young Man)" },
              { nameJp: "女房お千代", nameEn: "Ochiyo", role: "Hanbei's gentle, four-months-pregnant wife who has been divorced three times through no fault of her own", headOrStyle: "Kashira: Fukeoyama / Musume (老女方・娘)" },
              { nameJp: "山脇平右衛門", nameEn: "Yamawaki Heiemon", role: "Ochiyo's bedridden father; an upright rural farmer who tests and blesses Hanbei", headOrStyle: "Kashira: Masamune / Shūto (正宗・舅)" },
              { nameJp: "姉おかる", nameEn: "Elder Sister Okaru", role: "Ochiyo's married older sister who initially resents Hanbei before learning the truth", headOrStyle: "Kashira: Fukeoyama" }
            ]
          },
          {
            id: "morning_yaoya",
            title: "八百屋の段 (Greengrocer Shop)",
            playwright: "近松門左衛門 (Chikamatsu Monzaemon)",
            premiere: "1722 (Kyōhō 7)",
            playType: "世話物 (Sewamono — Conflict of Filial Duty vs. Marital Love)",
            textCoverage: "highlights",
            synopsis: "Returning to the Kawachiya greengrocer shop in Osaka on the eve of the Kōshin vigil, Hanbei pleads with his adoptive father Jin'emon and tyrannical stepmother Otsuru to let Ochiyo back into the house. When Otsuru brandishes a kitchen radish knife and threatens to slash her own throat if Ochiyo stays—accusing Hanbei of monstrous unfiliality—Hanbei is trapped by Confucian duty to the adoptive parents who raised him. Feigning compliance, he writes a bill of divorce and casts Ochiyo out the door, only to step outside moments later so they can die together as husband and wife.",
            highlights: "Notice the grotesque, domineering energy of the stepmother (Baba head) waving the kitchen knife and stamping her feet, contrasted with Ochiyo's silent weeping outside the shop curtain (noren) and Hanbei's agonizing inner conflict.",
            cast: [
              { nameJp: "河内屋半兵衛", nameEn: "Kawachiya Hanbei", role: "Crushed between filial piety (kō) to his adoptive mother and love (ninjō) for his pregnant wife", headOrStyle: "Kashira: Wakaotoko (若男)" },
              { nameJp: "女房お千代", nameEn: "Ochiyo", role: "Begs her mother-in-law for forgiveness at the threshold before resolving on death", headOrStyle: "Kashira: Fukeoyama / Musume" },
              { nameJp: "養母おつる", nameEn: "Adoptive Mother Otsuru", role: "Tyrannical stepmother who uses Confucian filial piety as a weapon to expel Ochiyo", headOrStyle: "Kashira: Baba (婆 — Crone / Wicked Mother-in-law)" },
              { nameJp: "養父仁右衛門", nameEn: "Adoptive Father Jin'emon", role: "Kind-hearted old greengrocer who pities Ochiyo but is browbeaten by his wife", headOrStyle: "Kashira: Shūto (舅)" }
            ]
          },
          {
            id: "morning_michiyuki",
            title: "道行思ひの短夜 (Travel Passage)",
            playwright: "近松門左衛門 (Chikamatsu Monzaemon)",
            premiere: "1722 (Kyōhō 7)",
            playType: "世話物・道行 (Sewamono Michiyuki — Poetic Journey on Kōshin Eve)",
            textCoverage: "highlights",
            synopsis: "Walking hand in hand through the chilly fourth-month night while townspeople keep the all-night Kōshin vigil (dedicated to the monkey-messenger deity Saruta-hiko), Hanbei and Ochiyo journey toward the Great Buddha Hall near Ikutama Shrine.Weeping for her unborn child and her aged father in Ueda, Ochiyo joins Hanbei in prayer as Chikamatsu's verse plays on the word 'saru' (monkey / to divorce / to depart this world). Because Hanbei was born a samurai, he takes Ochiyo's life mercifully and then commits ritual disembowelment.",
            highlights: "Listen for Chikamatsu's haunting triple pun on 'saru' (去る・猿): refusing to 'divorce' (saranu) as husband and wife, they instead 'depart' (saru) from this floating world on the night of the Monkey (Kōshin).",
            cast: [
              { nameJp: "河内屋半兵衛", nameEn: "Kawachiya Hanbei", role: "Reclaims his birth samurai dignity at the end, dying by seppuku beside his wife", headOrStyle: "Kashira: Wakaotoko (若男)" },
              { nameJp: "女房お千代", nameEn: "Ochiyo", role: "Prays that their unborn child will find salvation on the same lotus leaf in Amida's paradise", headOrStyle: "Kashira: Fukeoyama / Musume" }
            ]
          }
        ]
      },
      {
        id: "part2",
        label: "第2部 Afternoon (妹背山婦女庭訓)",
        badge: "PART 2 AFTERNOON",
        scenes: [
          {
            id: "afternoon_sugisakaya",
            title: "杉酒屋の段 (Sugi Sake Shop)",
            playwright: "近松半二・松田ばく・栄善平・近松東南・三好松洛 (Chikamatsu Hanji & collaborators)",
            premiere: "1771 (Meiwa 8) · Takemoto-za, Osaka",
            playType: "時代物 (Jidaimono — Mythic Romance & Political Intrigue)",
            textCoverage: "highlights",
            synopsis: "At a sake brewery marked by sacred cedar boughs at the foot of Mount Miwa in Yamato Province, the brewer's innocent daughter Omiwa is passionately in love with her neighbor Motome, a handsome court-cap maker (who is secretly the nobleman Fujiwara no Tankai). When the noble fugitive Princess Tachibana arrives pursued by retainers and also confesses her love for Motome, Motome realizes she is the sister of the tyrant Soga no Iruka. As Tachibana departs for Iruka's palace, Motome threads a needle attached to a spool of white hemp onto her trailing hem to track her; discovering them, the jealous Omiwa threads a spool of red hemp onto Motome's sleeve and chases after him.",
            highlights: "Notice the folkloric inversion of the ancient Mount Miwa serpent-bridegroom myth: here two spools of thread (odamaki)—one white, one red—unspool across the stage as three lovers chase each other in a triangle of love and destiny.",
            cast: [
              { nameJp: "杉酒屋娘お三輪", nameEn: "Omiwa", role: "Humble, spirited daughter of the Miwa sake brewer; madly in love with Motome", headOrStyle: "Kashira: Musume (娘 — Innocent Maiden Head)" },
              { nameJp: "烏帽子折求女（実は藤原淡海）", nameEn: "Motome (Fujiwara no Tankai)", role: "Son of Fujiwara no Kamatari living in disguise to overthrow Soga no Iruka", headOrStyle: "Kashira: Wakaotoko (若男 — Noble Youth)" },
              { nameJp: "橘姫", nameEn: "Princess Tachibana", role: "Younger sister of the tyrant Soga no Iruka; torn between family blood and love for Motome", headOrStyle: "Kashira:Hime (姫 — High-Born Princess Head)" }
            ]
          },
          {
            id: "afternoon_michiyuki",
            title: "道行恋苧環 (Spool of Love)",
            playwright: "近松半二 ほか (Chikamatsu Hanji & collaborators)",
            premiere: "1771 (Meiwa 8)",
            playType: "道行・景事 (Michiyuki — Three-Way Thread Dance Journey)",
            textCoverage: "highlights",
            synopsis: "Along the mountain path leading toward Soga no Iruka's Mikasa Palace, Motome follows the white thread attached to Princess Tachibana's kimono, while Omiwa follows the red thread attached to Motome's sleeve. Pulling on the threads like puppet strings, Omiwa and Tachibana vie for Motome's heart in an intricate, athletic dance until the threads snap and Motome vanishes ahead toward the palace.",
            highlights: "A masterpiece of Bunraku ensemble choreography: watch how the puppeteers manipulate the taut red and white hemp threads without tangling as Motome is pulled back and forth between the graceful court princess and the fiery town maiden.",
            cast: [
              { nameJp: "杉酒屋娘お三輪", nameEn: "Omiwa", role: "Clings to the spool of red hemp thread in desperate pursuit of Motome", headOrStyle: "Kashira: Musume (娘)" },
              { nameJp: "烏帽子折求女", nameEn: "Motome (Fujiwara no Tankai)", role: "Pulled between Princess Tachibana's political mission and Omiwa's pure devotion", headOrStyle: "Kashira: Wakaotoko (若男)" },
              { nameJp: "橘姫", nameEn: "Princess Tachibana", role: "Leads the way toward Mikasa Palace trailed by the white thread", headOrStyle: "Kashira: Hime (姫)" }
            ]
          },
          {
            id: "afternoon_fukashichi",
            title: "鱶七使者の段 (Fukashichi Envoy)",
            playwright: "近松半二 ほか (Chikamatsu Hanji & collaborators)",
            premiere: "1771 (Meiwa 8)",
            playType: "時代物 (Jidaimono — Grand Palace Confrontation)",
            textCoverage: "highlights",
            synopsis: "At Soga no Iruka's glittering Mikasa Palace, the rough-mannered, one-eyed fisherman Fukashichi (secretly Fujiwara no Kamatari's stalwart retainer Kanawa Gorō Imakuni) arrives as an envoy bearing a letter and gift from Kamatari. Suspecting him of espionage, Iruka's sneering courtier荒巻弥藤次 (Aramaki Yatōji) and attendants mock Fukashichi's commoner manners and force him to drink a giant bowl of poisoned sake; having taken an antidote beforehand, Fukashichi drains the bowl with gusto and strides into the inner palace.",
            highlights: "Enjoy the bold, humorous swagger of Fukashichi (operated with a rugged one-eyed Bunshichi/Kenbishi head): watch him casually scratch himself, sprawl across the palace tatami, and gulp down the poisoned wine while intimidating Iruka's guards.",
            cast: [
              { nameJp: "漁師鱶七（実は金輪五郎今国）", nameEn: "Fukashichi (Kanawa Gorō)", role: "Loyal Fujiwara warrior disguised as a boisterous, one-eyed fisherman", headOrStyle: "Kashira: Bunshichi / One-Eyed Warrior (文七)" },
              { nameJp: "蘇我入鹿", nameEn: "Soga no Iruka", role: "Supernaturally born tyrant who has usurped imperial power at Mikasa Palace", headOrStyle: "Kashira: Ōdanshichi / Daijin (大団七)" },
              { nameJp: "荒巻弥藤次", nameEn: "Aramaki Yatōji", role: "Iruka's arrogant henchman who tests Fukashichi with poisoned sake", headOrStyle: "Kashira:陀羅助 (Darasuke — Petty Villain)" },
              { nameJp: "橘姫", nameEn: "Princess Tachibana", role: "Returns to her brother Iruka's palace hoping to retrieve the stolen sword", headOrStyle: "Kashira: Hime (姫)" }
            ]
          },
          {
            id: "afternoon_kinden",
            title: "金殿の段 (The Golden Pavilion)",
            playwright: "近松半二 ほか (Chikamatsu Hanji & collaborators)",
            premiere: "1771 (Meiwa 8)",
            playType: "時代物 (Jidaimono — Supreme Tragic Climax of Bunraku)",
            textCoverage: "highlights",
            synopsis: "Following her broken red thread into the Golden Pavilion, the innocent Omiwa begs the haughty palace maids (tsubone) to let her see Motome. The cruel maids mock her country manners, force her to sing a wedding song while her hair falls loose, and taunt her that Motome is inside marrying a noble princess. Hearing celebratory music from the inner hall, Omiwa's heartbreak turns into demon-like jealousy ('the phase of suspicion,' 疑着の相). Suddenly Kanawa Gorō leaps out and plunges his sword into Omiwa's side: because Iruka can only be slain by a flute steeped in the lifeblood of a woman consumed by jealousy, Omiwa's blood is collected into the flute. Learning that her death will save her beloved Prince Tankai, Omiwa dies in radiant joy.",
            highlights: "The pinnacle of female puppet acting (originally perfected by Yoshida Minosuke III). Watch the famous 'Tsubone no Naburi' (torment by the court ladies) and the breathtaking moment when Omiwa's Musume head transforms in posture and spirit from a weeping country girl into a ferocious demon of jealousy, and then back into a gentle, smiling bride in death.",
            cast: [
              { nameJp: "杉酒屋娘お三輪", nameEn: "Omiwa", role: "Tormented into jealous fury and sacrificed so her lifeblood can break Iruka's spell", headOrStyle: "Kashira: Musume (娘 — Transforming via posture & hair)" },
              { nameJp: "金輪五郎今国（鱶七）", nameEn: "Kanawa Gorō Imakuni", role: "Reveals his true samurai attire, slays Omiwa for her lifeblood, and honors her as Tankai's true wife", headOrStyle: "Kashira: Bunshichi (文七)" },
              { nameJp: "官女（局たち）", nameEn: "Palace Court Ladies (Tsubone)", role: "Cruelly bully and humiliate Omiwa on the steps of the Golden Pavilion", headOrStyle: "Kashira: Yashio / Bakemono-gata (八汐 — Ugly/Cruel Maids)" }
            ]
          }
        ]
      }
    ]
  }
];

window.THEATER_GLOSSARY = [
  {
    termJp: "太夫",
    reading: "Tayū (たゆう)",
    termEn: "Gidayū Narrator / Chanter",
    category: "Bunraku Puppetry & Music",
    definition: "The single narrator seated on the raised dais (yuka) at stage left who voices every character—young maidens, warriors, elders, and children—as well as all narrative description and emotional commentary in Ningyō Jōruri."
  },
  {
    termJp: "三味線（太棹）",
    reading: "Futozao Shamisen (ふとざおしゃみせん)",
    termEn: "Thick-Necked Gidayū Shamisen",
    category: "Bunraku Puppetry & Music",
    definition: "The largest, deepest-voiced three-stringed lute in Japan, played with a heavy ivory plectrum (bachi). Beyond accompaniment, the shamisen player regulates dramatic pacing, evokes rain or wind, and expresses the unspoken heartbeat of the puppets."
  },
  {
    termJp: "三人遣い（主遣い・左遣い・足遣い）",
    reading: "Sannin-zukai (さんにんづかい)",
    termEn: "Three-Man Puppet Manipulation",
    category: "Bunraku Puppetry & Music",
    definition: "Introduced in 1734, major Bunraku puppets are operated in full view by three synchronized masters: the Omozukai (主遣い, controlling the head and right hand), the Hidari-zukai (左遣い, controlling the left hand and props), and the Ashi-zukai (足遣い, creating footsteps and posture)."
  },
  {
    termJp: "かしら（頭）",
    reading: "Kashira (かしら)",
    termEn: "Carved Wooden Puppet Head",
    category: "Bunraku Puppetry & Music",
    definition: "Hollowed Paulownia or Hinoki wood heads classified by age, gender, and moral nature—such as Musume (innocent maiden), Wakaotoko (handsome young man), Fukeoyama (virtuous wife/matron), Bunshichi (tragic warrior), Genda (dashing youth), and Danshichi (ruffian/villain)."
  },
  {
    termJp: "床本",
    reading: "Yukahon (ゆかほん)",
    termEn: "Chanter's Annotated Libretto",
    category: "Bunraku Puppetry & Music",
    definition: "The promptbook placed on the ornate lectern (kendai) before the Tayū, written in bold calligraphy with red and black musical notation marks (shuhi) indicating pitch, vocal delivery, and emotional inflection."
  },
  {
    termJp: "人形振り",
    reading: "Ningyō-buri (にんぎょうぶり)",
    termEn: "Puppet-Style Movement",
    category: "Bunraku Puppetry & Music",
    definition: "Expressive physical choreography designed specifically for puppets (or imitated by live Kabuki actors with black-hooded assistants) that conveys grief, jealousy, or supernatural possession through stylized angles of the neck, shoulders, and kimono hem."
  },
  {
    termJp: "見得",
    reading: "Mie (みえ)",
    termEn: "Climactic Dynamic Pose",
    category: "Kabuki Stagecraft",
    definition: "A powerful, picturesque freeze-frame pose struck by a Kabuki actor at a peak of emotion—often accompanied by circular head rotation and crossed eyes (nirami) and punctuated by sharp wooden clapper beats (tsuke)."
  },
  {
    termJp: "花道",
    reading: "Hanamichi (はなみち)",
    termEn: "Flower Path Runway",
    category: "Kabuki Stagecraft",
    definition: "The raised walkway extending from stage right directly through the orchestra audience to the rear of the theater. Crucial for dramatic entrances, exits, and intimate soliloquies at the 'seven-three' point (shichisan)."
  },
  {
    termJp: "廻り舞台",
    reading: "Mawari-butai (まわりぶたい)",
    termEn: "Revolving Stage",
    category: "Kabuki Stagecraft",
    definition: "Invented in 18th-century Japanese theater, a giant circular turntable built into the stage floor that rotates smoothly to transition from a palace interior to an outer gate or snowy garden without dropping the curtain."
  },
  {
    termJp: "黒御簾音楽（下座音楽）",
    reading: "Kuromisu / Geza Ongaku (くろみす・げざ)",
    termEn: "Offstage Atmospheric Music",
    category: "Kabuki Stagecraft",
    definition: "Performed behind a slatted bamboo blind at stage right, using drums, flutes, bells, and shamisen to create soundscapes—such as heavy snow (yukioroshi), temple bells, crashing waves, or eerie ghost entrances."
  },
  {
    termJp: "立役・女方・敵役",
    reading: "Yakugara (やくがら)",
    termEn: "Kabuki Role Archetypes",
    category: "Kabuki Stagecraft",
    definition: "Traditional role classifications in Kabuki: Tachiyaku (立役, virtuous male leads, divided into heroic Aragoto and gentle/romantic Wagoto), Onnagata (女方, male actors specializing in female roles), and Katakiyaku (敵役, villains)."
  },
  {
    termJp: "世話物",
    reading: "Sewamono (せわもの)",
    termEn: "Contemporary Domestic Tragedy",
    category: "Dramatic & Cultural Concepts",
    definition: "Plays set among contemporary Edo-period townspeople—merchants, clerks, greengrocers, and courtesans—pioneered by Chikamatsu Monzaemon in 1703 with Sonezaki Shinjū and culminating in Shinjū Yoigōshin."
  },
  {
    termJp: "時代物",
    reading: "Jidaimono (じだいもの)",
    termEn: "Historical & Imperial Chronicle Play",
    category: "Dramatic & Cultural Concepts",
    definition: "Grand multi-act epics set in pre-Edo samurai or imperial history (such as Kanadehon Chūshingura, Yoshitsune Senbon Zakura, Imoseyama Onna Teikin, and Honchō Nijūshikō), often disguising contemporary scandals behind ancient names."
  },
  {
    termJp: "義理と人情",
    reading: "Giri-Ninjō (ぎりとにんじょう)",
    termEn: "Social Duty vs. Human Emotion",
    category: "Dramatic & Cultural Concepts",
    definition: "The fundamental dramatic engine of both Bunraku and Kabuki: the agonizing collision between Giri (feudal loyalty, family obligation, merchant honor, filial debt) and Ninjō (romantic love, parental affection, natural compassion)."
  },
  {
    termJp: "道行",
    reading: "Michiyuki (みちゆき)",
    termEn: "Poetic Travel Scene",
    category: "Dramatic & Cultural Concepts",
    definition: "A lyrical, dance-like journey scene rich in seasonal imagery and punning wordplay (kakekotoba). In domestic tragedies, it is the lovers' final walk toward double suicide; in historical plays, a colorful romantic interlude."
  },
  {
    termJp: "モドリ（戻り）",
    reading: "Modori (もどり)",
    termEn: "Moral Reversal / True Heart Revealed",
    category: "Dramatic & Cultural Concepts",
    definition: "A pivotal dramatic convention in which a character who appears to be a callous villain or ruffian (such as Igami no Gonta in Sushiya no Dan) reveals while dying that their wicked actions were a deliberate ruse to accomplish a noble self-sacrifice."
  },
  {
    termJp: "一幕見席",
    reading: "Hitomakumi-seki (ひとまくみせき)",
    termEn: "Single-Act Gallery Ticket",
    category: "Dramatic & Cultural Concepts",
    definition: "An affordable, time-honored Japanese theater custom allowing playgoers to purchase a ticket for a single favorite act or scene on the day of performance (or noon the day before at Kabukiza) rather than the entire multi-hour part."
  }
];
