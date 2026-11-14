# Bunraku Bilingual Theater Companion (文楽 同伴リーダー)

Live bilingual companion reader designed for following along during live Japanese puppet theater (Bunraku) performances.

## Live App
**URL:** [https://nickbrownbrown90-lgtm.github.io/bunraku-companion/](https://nickbrownbrown90-lgtm.github.io/bunraku-companion/)

## Repertoire Included

### 2026年11月 吉例顔見世大歌舞伎 (November 2026 — Kabukiza, Tokyo)
**通し狂言 仮名手本忠臣蔵 (Kanadehon Chūshingura — The Treasury of Loyal Retainers)**
1. **昼の部 Matinee 11:00**
   - 大序：鶴ヶ岡社頭兜改めの場 (Act I: Tsurugaoka Shrine — Helmet Inspection)
   - 三段目：足利館門前進物の場・同 松の間刃傷の場 (Act III: The Bribe at the Gate & Drawing the Sword in the Pine Corridor)
   - 四段目：扇ヶ谷塩冶判官切腹の場・同 表門城明渡しの場 (Act IV: Enya Hangan's Seppuku & Surrender of the Castle)
   - 浄瑠璃：道行旅路の花聟 (Michiyuki Tabiji no Hanamuko — Journey of Okaru & Kanpei)
2. **夜の部 Evening 16:30**
   - 五段目：山崎街道鉄砲渡しの場・同 二つ玉の場 (Act V: Yamazaki Highway & The Two Bullets)
   - 六段目：与市兵衛内勘平腹切の場 (Act VI: Yoichibei's Cottage — Kanpei's Seppuku)
   - 七段目：祇園一力茶屋の場 (Act VII: Ichiriki Teahouse in Gion)
   - 十一段目：高家表門討入りの場・同 奥庭泉水の場・同 炭部屋本懐の場・引揚げの場 (Act XI: Night Raid on Moronao's Mansion, Pond Duel, Charcoal Shed & Triumphal Retreat)

### 2026年12月 文楽公演 (December 2026 — Tokyo Metropolitan Theatre)
1. **Part 1 Morning 11:00 (加賀見山旧錦絵 - Kagamiyama Kokyō no Nishikie)**
   - 草履打の段 (Zōri-uchi no Dan - The Sandal-Beating)
   - 廊下の段 (Rōka no Dan - The Corridor)
   - 長局の段 (Nagatsubone no Dan - The Ladies' Quarters)
   - 奥庭の段 (Okuniwa no Dan - The Inner Garden)
2. **Part 2 Afternoon 14:30 (義経千本桜 - Yoshitsune Senbon Zakura)**
   - 椎の木の段 (Shiinoki no Dan - The Pasania Tree)
   - 小金吾討死の段 (Kogingo Uchiji no Dan - Death of Kogingo)
   - すしやの段 (Sushiya no Dan - The Sushi Shop)
   - 道行初音旅 (Michiyuki Hatsune no Tabi - Hatsune's Journey)
3. **Part 3 Evening 19:00 (曾根崎心中 - Sonezaki Shinjū)**
   - 生玉社前の段 (Ikutama Shazen no Dan - Before Ikutama Shrine)
   - 天満屋の段 (Tenmaya no Dan - The Tenmaya House)
   - 天神森の段 (Tenjin no Mori no Dan - Tenjin Woods)

### 2026年11月 文楽公演 (November 2026 — Osaka National Bunraku Theatre)
1. **Part 1 Morning (心中宵庚申 - Shinjū Yoi Gōshin)**
   - 上田村の段 (Uedamura no Dan - Ueda Village)
   - 八百屋の段 (Yaoya no Dan - The Greengrocer Shop)
   - 道行思ひの短夜 (Michiyuki Omoi no Mijikayo - The Travel Passage)
2. **Part 2 Afternoon (妹背山婦女庭訓 - Imoseyama Onna Teikin)**
   - 杉酒屋の段 (Sugi Sakaya no Dan - The Sugi Sake Shop)
   - 道行恋苧環 (Michiyuki Koi no Odamaki - The Spool of Love)
   - 鱶七使者の段 (Fukashichi Shisha no Dan - Fukashichi the Envoy)
   - 金殿の段 (Kinden no Dan - The Golden Pavilion)

## Features
- **Performance & Date Switcher**: Two-level header selector to switch between saved Bunraku and Kabuki programs and their scenes, with per-performance progress saved in `localStorage`.
- **Bunraku & Kabuki Ready**: Dynamic genre branding (`文楽 BUNRAKU` / `歌舞伎 KABUKI`), data-driven part badges (`PART 1 MORNING`, `PART 2 AFTERNOON`, `PART 3 EVENING`), and stage/music cue styling.
- **AMOLED Theater Dark Mode**: Pure black palette with low glare for theater etiquette.
- **Synchronized Dual-Column View**: Japanese chanting & dialogue on the left; English on the right.
- **English Audio Narration (Voice Companion)**:
  - Hands-free continuous auto-advance with synchronized scrolling and line highlighting.
  - Per-line tap-to-read button for instant English recitation on demand.
  - Adjustable reading tempo (1.0x standard, 1.2x brisk, 0.8x deliberate study speed).
  - Solo narrator styling reflecting the traditional Tayū (太夫) storytelling format.
  - In-browser Web Speech API — lightweight, completely offline, zero asset downloads.
- **Ruby Furigana**: Original kanji readings with instant toggle on/off.
- **Live Follower Controls**: Line highlighting, auto-centering, keyboard shortcuts (`Space` / `↓` next, `Shift+Space` / `↑` prev, `P` or `K` play/pause audio), and floating one-handed touch controls.
- **Progress Persistence**: Remembers active performance, scene, and line position via `localStorage`.

## Adding Future Performances (Bunraku or Kabuki)
1. Create `data/<performance-id>.js` assigning `window.PERFORMANCE_DATA["<performance-id>"]` to an array of line objects (`Scene_ID`, `Scene_Title`, `Line_No`, `Speaker`, `Japanese_Ruby`, `Japanese_Plain`, `English`, `Notes`).
2. Register the performance metadata (`id`, `label`, `subtitle`, `genre: "bunraku" | "kabuki"`, `dataFile`, and `parts`) in `data/performances.js`.

