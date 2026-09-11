// ============================================================
// HOTEL SHINPOIN OSAKA 안내 사이트 데이터
// 대부분의 사이트 내용은 이 파일(data.js)만 수정
// Google Maps는 mapUrl에 직접 링크를 넣으면 그 링크를 우선 사용
// mapUrl을 비워두면 mapQuery로 Google Maps 검색 링크를 자동 생성
// ============================================================

const SITE_DATA = {
  hotelName: "HOTEL SHINPOIN OSAKA",

  externalLinks: {
    baggageHomeForm: "https://docs.google.com/forms/d/e/1FAIpQLSdJzCLOTR8-pSotb1kBYlF9RAm-E60rdbrS780Zrjh7ehUZUA/viewform?usp=header",
    baggageHotelForm: "https://docs.google.com/forms/d/e/1FAIpQLSdT7oUAataSc-2OVEOC0NP2uNErOY1evWsQgmnxL2KoN7DuEw/viewform?usp=header",
    baggageAirportForm: "https://docs.google.com/forms/d/e/1FAIpQLSdDZusQF1l_E0Ga65bI0u-9lxcOltNNqf1Zb2qVlaeMOSEQfQ/viewform?usp=header",
    enbaggageHotelForm: "https://forms.gle/RoMRWBpV8zbCKEXi8",
    enbaggageAirportForm: "https://forms.gle/VfqZH6XhYRiaVjHv7",
    airportBusStop: "https://www.kate.co.jp/busstop/detail/4170",
    airportBusTimetable: "https://www.kate.co.jp/timetable/detail/UH",
    enairportBusStop: "https://www.kate.co.jp/busstop/detail/4170",
    enairportBusTimetable: "https://www.kate.co.jp/en/timetable/detail/UH"
  },

  text: {
    ja: {
      welcomeTitle: "Welcome",
      languagePrompt1: "Please select your language.",
      languagePrompt2: "言語を選択してください。",
      title: "ご利用案内",
      subtitle: "ホテル周辺の情報をご案内します。",
      stations: "最寄り駅",
      convenience: "コンビニ",
      restaurants: "レストラン",
      parking: "コインパーキング",
      baggage: "お荷物の配送",
      airport: "空港行きリムジンバス",
      remote: "リモコンガイド",
      back: "戻る",
      maps: "Googleマップで見る",
      mapNote: "ボタンを押すとGoogleマップが開きます。",
      menuDescriptions: {
        stations: "周辺の主要駅",
        convenience: "スーパー・ドラッグストアを含む",
        restaurants: "ジャンル別に探す",
        parking: "周辺駐車場",
        baggage: "配送フォーム",
        airport: "関西国際空港",
        remote: "客室設備の操作案内"
      },
      categories: {
        okonomiyaki: "お好み焼き / たこ焼き",
        sushi: "寿司",
        japanese: "和食",
        breakfast: "朝食",
        cafe: "カフェ",
        noodle: "うどん / そば / ラーメン",
        yakiniku: "焼肉",
        western: "洋食",
        chinese: "中華料理",
        korean: "韓国料理"
      }
    },

    en: {
      welcomeTitle: "Welcome",
      languagePrompt1: "Please select your language.",
      languagePrompt2: "言語を選択してください。",
      title: "Guest Information",
      subtitle: "Useful information around the hotel.",
      stations: "Access to the station",
      convenience: "Convenience stores",
      restaurants: "Restaurants",
      parking: "Coin Parking",
      baggage: "Baggage Delivery Service",
      airport: "Airport Limousine Bus",
      remote: "Remote Control Guide",
      back: "Back",
      maps: "Open in Google Maps",
      mapNote: "Tap the button to open Google Maps.",
      menuDescriptions: {
        stations: "Nearby railway stations",
        convenience: "Stores near the hotel",
        restaurants: "Browse by category",
        parking: "Nearby parking",
        baggage: "Delivery forms",
        airport: "Kansai International Airport",
        remote: "Room equipment guide"
      },
      categories: {
        okonomiyaki: "Okonomiyaki / Takoyaki",
        sushi: "Sushi",
        japanese: "Japanese Food",
        breakfast: "Breakfast",
        cafe: "Cafe",
        noodle: "Udon / Soba / Ramen",
        yakiniku: "Yakiniku",
        western: "Western Food",
        chinese: "Chinese Food",
        korean: "Korean Food"
      }
    }
  },

  stations: {
    ja: [
      { name: "桃谷駅（徒歩11分）", mapQuery: "JR Momodani Station, Osaka", mapUrl: "https://maps.app.goo.gl/TTYmEDYsEfFjzQJM7" },
      { name: "鶴橋（徒歩21分）", mapQuery: "Tsuruhashi Station, Osaka", mapUrl: "https://maps.app.goo.gl/SCw3j6wKhGWxoQBp9" },
      { name: "上本町駅（徒歩18分）", mapQuery: "Osaka Uehonmachi Station, Osaka", mapUrl: "https://maps.app.goo.gl/zE99NpAgyS6tSxJQ6" },
      { name: "四天王寺夕陽ヶ丘駅（徒歩10分）", mapQuery: "Shitennoji-mae Yuhigaoka Station, Osaka", mapUrl: "https://maps.app.goo.gl/A3kzURXvZYsUTt8L9" }
    ],
    en: [
      { name: "JR Momodani Station（11-minute walk）", mapQuery: "JR Momodani Station, Osaka", mapUrl: "https://maps.app.goo.gl/TTYmEDYsEfFjzQJM7" },
      { name: "Tsuruhashi Station（21-minute walk）", mapQuery: "Tsuruhashi Station, Osaka", mapUrl: "https://maps.app.goo.gl/SCw3j6wKhGWxoQBp9" },
      { name: "Osaka Uehonmachi Station（18-minute walk）", mapQuery: "Osaka Uehonmachi Station, Osaka", mapUrl: "https://maps.app.goo.gl/zE99NpAgyS6tSxJQ6" },
      { name: "Shitennoji-mae Yuhigaoka Station（10-minute walk）", mapQuery: "Shitennoji-mae Yuhigaoka Station, Osaka", mapUrl: "https://maps.app.goo.gl/A3kzURXvZYsUTt8L9" }
    ]
  },

  convenience: {
    ja: [
      { name: "ツルハドラッグ 天王寺真法院店（徒歩3分）", mapQuery: "Tsuruha Drug, 12-14 Shinpoincho, Tennoji Ward, Osaka", mapUrl: "https://maps.app.goo.gl/G3Du9n7oWczjJcgU6" },
      { name: "ライフ四天王寺店（徒歩8分）", mapQuery: "Life Shitennoji, Osaka", mapUrl: "https://maps.app.goo.gl/sWwdd6P319wh4Fwx5" },
      { name: "ローソン 勝山三丁目店（徒歩7分）", mapQuery: "Lawson Katsuyama 3-chome, Osaka", mapUrl: "https://maps.app.goo.gl/83eEZAmHF7c5W8M39" },
      { name: "ファミリーマート 桃谷駅西店（徒歩7分）", mapQuery: "FamilyMart 2 Chome-3-2 Karasugatsuji, Osaka", mapUrl: "https://maps.app.goo.gl/8WQZY1MHBJGaEPZp9" }
    ],
    en: [
      { name: "Tsuruha Drug（3-minute walk）", mapQuery: "Tsuruha Drug, 12-14 Shinpoincho, Tennoji Ward, Osaka", mapUrl: "https://maps.app.goo.gl/G3Du9n7oWczjJcgU6" },
      { name: "Supermarket Life（8-minute walk）", mapQuery: "Life Shitennoji, Osaka", mapUrl: "https://maps.app.goo.gl/sWwdd6P319wh4Fwx5" },
      { name: "Lawson（7-minute walk）", mapQuery: "Lawson Katsuyama 3-chome, Osaka", mapUrl: "https://maps.app.goo.gl/83eEZAmHF7c5W8M39" },
      { name: "FamilyMart（7-minute walk）", mapQuery: "FamilyMart 2 Chome-3-2 Karasugatsuji, Osaka", mapUrl: "https://maps.app.goo.gl/8WQZY1MHBJGaEPZp9" }
    ]
  },

  restaurants: {
    ja: {
      okonomiyaki: [
        { name: "鉄板焼きとお好み焼き 狸狸亭鶴橋店（徒歩19分）", mapQuery: "Ponpoco-tei Tsuruhashi, Osaka", mapUrl: "https://maps.app.goo.gl/of5BACcdcyMLvgwD6" },
        { name: "お好み焼 金のてこ（徒歩32分）", mapQuery: "お好み焼き 金のてこ, Osaka", mapUrl: "https://maps.app.goo.gl/vJuCc9BNcM2jMXgNA" },
        { name: "たぴおか食堂（徒歩9分）", mapQuery: "Tapioca Shokudo, Osaka", mapUrl: "https://maps.app.goo.gl/8gqwu6psCdG1JYsu7" },
        { name: "居酒屋 お好み焼き弐八 天王寺（徒歩11分）", mapQuery: "お好み焼き 弐八, Osaka", mapUrl: "https://maps.app.goo.gl/d7gvQnuSbzCsBi4b6" }
      ],
      sushi: [
        { name: "鮨 我逢人（徒歩5分）", mapQuery: "鮨 我逢人, Osaka", mapUrl: "https://maps.app.goo.gl/2ajqi6yJULBvW6wz7" },
        { name: "さくら鮨（徒歩5分）", mapQuery: "さくら鮨 Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/QMdHhxLksziE25JS8" },
        { name: "丸正（まるまさ）寿司（徒歩7分）", mapQuery: "Marusho Marumasa Sushi Osaka", mapUrl: "https://maps.app.goo.gl/qwqYWDxgV5zyHcXD9" },
        { name: "鮨こいき（徒歩8分）", mapQuery: "Sushi Koiki Osaka", mapUrl: "https://maps.app.goo.gl/PNKJqtY5QagfRztZ8" }
      ],
      japanese: [
        { name: "花（徒歩12分）", mapQuery: "Hana Daido Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/mhLtACKoXSopkPt6A" },
        { name: "うなぎのお食事処 舟屋（徒歩15分）", mapQuery: "Funaya unagi Osaka", mapUrl: "https://maps.app.goo.gl/9tzjmtbBBS8EhUeA9" },
        { name: "とんかつ とん亭（徒歩11分）", mapQuery: "Tontei Daido Osaka", mapUrl: "https://maps.app.goo.gl/ZXV2qWBzQK6Eu4YN7" },
        { name: "YAKITORI Tommy's（徒歩11分）", mapQuery: "YAKITORI Tommy's Momodani Osaka", mapUrl: "https://maps.app.goo.gl/mzwEBi2J56xA4qkZ6" },
        { name: "コのじ（徒歩18分）", mapQuery: "味 コのじ Osaka", mapUrl: "https://maps.app.goo.gl/RiysFiHvRPGzH6tW8" }
      ],
      breakfast: [
        { name: "ロイヤルホスト上本町店（徒歩6分）", mapQuery: "Royal Host Uehonmachi Osaka", mapUrl: "https://maps.app.goo.gl/RQfzsXnmTz7R6FaE7" },
        { name: "マンデリン（徒歩11分）", mapQuery: "Manderin Momodani Osaka", mapUrl: "https://maps.app.goo.gl/GVAmbnHyw1DcuQ6x5" },
        { name: "富良野みるく工房（徒歩3分）", mapQuery: "富良野みるく工房 Karasugatsuji Osaka", mapUrl: "https://maps.app.goo.gl/k3SfjaUM5Pg8Hih38" },
        { name: "アメリカン（徒歩3分）", mapQuery: "American Shinpoincho Osaka", mapUrl: "https://maps.app.goo.gl/ZTVpsdE8f8DTDbuG7" }
      ],
      cafe: [
        { name: "オールドリバー（徒歩5分）（臨時休業）", mapQuery: "Old River Komiyacho Osaka", mapUrl: "https://maps.app.goo.gl/gb66o8Pan8HqRFGg7" },
        { name: "The Coffee Market 145（徒歩9分）", mapQuery: "The Coffee Market 145 Osaka", mapUrl: "https://maps.app.goo.gl/voXTgxECbSbFnNT86" },
        { name: "コメダ珈琲店 桃谷駅前店（徒歩10分）", mapQuery: "Komeda's Coffee Karasugatsuji Osaka", mapUrl: "https://maps.app.goo.gl/az3cgRRPyRByPF9Z6" },
        { name: "ミスタードーナツ JR桃谷駅前ショップ（徒歩11分）", mapQuery: "Mister Donut Karasugatsuji Osaka", mapUrl: "https://maps.app.goo.gl/hsqtf8U6c8sD37VC8" }
      ],
      noodle: [
        { name: "麺処 細屋（徒歩6分）", mapQuery: "麺処 細屋 Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/HuW16QEZ2ULk9jWX7" },
        { name: "やまがそば（徒歩5分）", mapQuery: "Yamaga Soba Uehonmachi Osaka", mapUrl: "https://maps.app.goo.gl/AMQMWA7YF9pMmXmP6" },
        { name: "四天王寺 はやうち（徒歩12分）", mapQuery: "Shitennoji Hayauchi Osaka", mapUrl: "https://maps.app.goo.gl/h9bjeGHbGBhb4huT9" },
        { name: "唯一無二のらぁ麺専門店 イ袋ワシづかみ（徒歩4分）", mapQuery: "唯一無二のらぁ麺専門店 イ袋ワシづかみ Osaka", mapUrl: "https://maps.app.goo.gl/szJxQAdRfSYakenx5" }
      ],
      yakiniku: [
        { name: "焼肉 ソウル 桃谷店（徒歩11分）", mapQuery: "焼肉 ソウル 桃谷店 Osaka", mapUrl: "https://maps.app.goo.gl/yHmHLg7rrVPzwNf48" },
        { name: "道楽（徒歩8分）（臨時休業）", mapQuery: "Doraku Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/Pv5sm1QXyuEmjVBu5" },
        { name: "焼肉アジヨシ 鶴橋総本店（徒歩22分）", mapQuery: "Yakiniku Aji-yoshi Tsuruhashi Osaka", mapUrl: "https://maps.app.goo.gl/ubJpHF1JUrGRrVTV9" },
        { name: "焼肉満憶（徒歩10分）", mapQuery: "桃谷 焼肉満憶 Osaka", mapUrl: "https://maps.app.goo.gl/pf5KAv62NnWbL4n98" }
      ],
      western: [
        { name: "ポモドーロ・フレスカ（徒歩11分）", mapQuery: "ポモドーロ・フレスカ Osaka", mapUrl: "https://maps.app.goo.gl/KeveMQEBYP5mL26g6" },
        { name: "みなとまちバール BamVino（徒歩7分）", mapQuery: "BamVino 桃谷店 Osaka", mapUrl: "https://maps.app.goo.gl/TSsxd1PqgHhhf5ja6" },
        { name: "グリルポッケ（徒歩16分）", mapQuery: "Grill Pokke Osaka", mapUrl: "https://maps.app.goo.gl/Ce8R8ZTdvBEYQo2Z8" },
        { name: "PASTA KITCHEN GYO（徒歩19分）", mapQuery: "PASTA KITCHEN GYO Osaka", mapUrl: "https://maps.app.goo.gl/X7A7cUAJWnvUFuCs6" }
      ],
      chinese: [
        { name: "中華料理 其蘭（徒歩4分）", mapQuery: "中国料理 其蘭 Shinpoincho Osaka", mapUrl: "https://maps.app.goo.gl/vnnhC3NtBv39yanM9" },
        { name: "中華料理 鑫福源（徒歩10分）", mapQuery: "中華料理 鑫福源 Osaka", mapUrl: "https://maps.app.goo.gl/kqSH7VT5YquaoFtF7" },
        { name: "本格中国料理 桃園（徒歩15分）", mapQuery: "桃園 Katsuyamakita Osaka", mapUrl: "https://maps.app.goo.gl/DKKhoA6Ku33h8NeV6" },
        { name: "なかよし（徒歩3分）", mapQuery: "なかよし Katsuyama Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/wCnKgA7xKUNSBDAr5" }
      ],
      korean: [
        { name: "韓国料理TonTon 한국식당 톤톤（徒歩16分）", mapQuery: "TonTon Ishigatsujicho Osaka", mapUrl: "https://maps.app.goo.gl/AU8v8Z43TbhsSUjr7" },
        { name: "momodakni chicken&beer（徒歩13分）", mapQuery: "momodani chicken&beer Osaka", mapUrl: "https://maps.app.goo.gl/ii9KtqA7JUEoNdBN6" },
        { name: "月（徒歩12分）", mapQuery: "月 Dogashiba Osaka Korean restaurant", mapUrl: "https://maps.app.goo.gl/QeSmh2C9e6scYZcw5" },
        { name: "済州島テールスープ専門店（徒歩4分）", mapQuery: "Jeju-do Tail Soup Osaka", mapUrl: "https://maps.app.goo.gl/BSjDXQJpF6mPTs3z5" }
      ]
    },

    en: {
      okonomiyaki: [
        { name: "鉄板焼きとお好み焼き 狸狸亭鶴橋店（19-minute walk）", mapQuery: "Ponpoco-tei Tsuruhashi, Osaka", mapUrl: "https://maps.app.goo.gl/of5BACcdcyMLvgwD6" },
        { name: "お好み焼 金のてこ（32-minute walk）", mapQuery: "お好み焼き 金のてこ, Osaka", mapUrl: "https://maps.app.goo.gl/vJuCc9BNcM2jMXgNA" },
        { name: "たぴおか食堂（9-minute walk）", mapQuery: "Tapioca Shokudo, Osaka", mapUrl: "https://maps.app.goo.gl/8gqwu6psCdG1JYsu7" },
        { name: "居酒屋 お好み焼き弐八 天王寺（11-minute walk）", mapQuery: "お好み焼き 弐八, Osaka", mapUrl: "https://maps.app.goo.gl/d7gvQnuSbzCsBi4b6" }
      ],
      sushi: [
        { name: "鮨 我逢人（5-minute walk）", mapQuery: "鮨 我逢人, Osaka", mapUrl: "https://maps.app.goo.gl/2ajqi6yJULBvW6wz7" },
        { name: "さくら鮨（5-minute walk）", mapQuery: "さくら鮨 Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/QMdHhxLksziE25JS8" },
        { name: "丸正（まるまさ）寿司（7-minute walk）", mapQuery: "Marusho Marumasa Sushi Osaka", mapUrl: "https://maps.app.goo.gl/qwqYWDxgV5zyHcXD9" },
        { name: "鮨こいき（8-minute walk）", mapQuery: "Sushi Koiki Osaka", mapUrl: "https://maps.app.goo.gl/PNKJqtY5QagfRztZ8" }
      ],
      japanese: [
        { name: "花（12-minute walk）", mapQuery: "Hana Daido Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/mhLtACKoXSopkPt6A" },
        { name: "うなぎのお食事処 舟屋（15-minute walk）", mapQuery: "Funaya unagi Osaka", mapUrl: "https://maps.app.goo.gl/9tzjmtbBBS8EhUeA9" },
        { name: "とんかつ とん亭（11-minute walk）", mapQuery: "Tontei Daido Osaka", mapUrl: "https://maps.app.goo.gl/ZXV2qWBzQK6Eu4YN7" },
        { name: "YAKITORI Tommy's（11-minute walk）", mapQuery: "YAKITORI Tommy's Momodani Osaka", mapUrl: "https://maps.app.goo.gl/mzwEBi2J56xA4qkZ6" },
        { name: "コのじ（18-minute walk）", mapQuery: "味 コのじ Osaka", mapUrl: "https://maps.app.goo.gl/RiysFiHvRPGzH6tW8" }
      ],
      breakfast: [
        { name: "ロイヤルホスト上本町店（6-minute walk）", mapQuery: "Royal Host Uehonmachi Osaka", mapUrl: "https://maps.app.goo.gl/RQfzsXnmTz7R6FaE7" },
        { name: "マンデリン（11-minute walk）", mapQuery: "Manderin Momodani Osaka", mapUrl: "https://maps.app.goo.gl/GVAmbnHyw1DcuQ6x5" },
        { name: "富良野みるく工房（3-minute walk）", mapQuery: "富良野みるく工房 Karasugatsuji Osaka", mapUrl: "https://maps.app.goo.gl/k3SfjaUM5Pg8Hih38" },
        { name: "アメリカン（3-minute walk）", mapQuery: "American Shinpoincho Osaka", mapUrl: "https://maps.app.goo.gl/ZTVpsdE8f8DTDbuG7" }
      ],
      cafe: [
        { name: "オールドリバー（5-minute walk）（Temporarily closed）", mapQuery: "Old River Komiyacho Osaka", mapUrl: "https://maps.app.goo.gl/gb66o8Pan8HqRFGg7" },
        { name: "The Coffee Market 145（9-minute walk）", mapQuery: "The Coffee Market 145 Osaka", mapUrl: "https://maps.app.goo.gl/voXTgxECbSbFnNT86" },
        { name: "コメダ珈琲店 桃谷駅前店（10-minute walk）", mapQuery: "Komeda's Coffee Karasugatsuji Osaka", mapUrl: "https://maps.app.goo.gl/az3cgRRPyRByPF9Z6" },
        { name: "ミスタードーナツ JR桃谷駅前ショップ（11-minute walk）", mapQuery: "Mister Donut Karasugatsuji Osaka", mapUrl: "https://maps.app.goo.gl/hsqtf8U6c8sD37VC8" }
      ],
      noodle: [
        { name: "麺処 細屋（6-minute walk）", mapQuery: "麺処 細屋 Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/HuW16QEZ2ULk9jWX7" },
        { name: "やまがそば（5-minute walk）", mapQuery: "Yamaga Soba Uehonmachi Osaka", mapUrl: "https://maps.app.goo.gl/AMQMWA7YF9pMmXmP6" },
        { name: "四天王寺 はやうち（12-minute walk）", mapQuery: "Shitennoji Hayauchi Osaka", mapUrl: "https://maps.app.goo.gl/h9bjeGHbGBhb4huT9" },
        { name: "唯一無二のらぁ麺専門店 イ袋ワシづかみ（4-minute walk）", mapQuery: "唯一無二のらぁ麺専門店 イ袋ワシづかみ Osaka", mapUrl: "https://maps.app.goo.gl/szJxQAdRfSYakenx5" }
      ],
      yakiniku: [
        { name: "焼肉 ソウル 桃谷店（11-minute walk）", mapQuery: "焼肉 ソウル 桃谷店 Osaka", mapUrl: "https://maps.app.goo.gl/yHmHLg7rrVPzwNf48" },
        { name: "道楽（8-minute walk）（Temporarily closed）", mapQuery: "Doraku Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/Pv5sm1QXyuEmjVBu5" },
        { name: "焼肉アジヨシ 鶴橋総本店（22-minute walk）", mapQuery: "Yakiniku Aji-yoshi Tsuruhashi Osaka", mapUrl: "https://maps.app.goo.gl/ubJpHF1JUrGRrVTV9" },
        { name: "焼肉満憶（10-minute walk）", mapQuery: "桃谷 焼肉満憶 Osaka", mapUrl: "https://maps.app.goo.gl/pf5KAv62NnWbL4n98" }
      ],
      western: [
        { name: "ポモドーロ・フレスカ（11-minute walk）", mapQuery: "ポモドーロ・フレスカ Osaka", mapUrl: "https://maps.app.goo.gl/KeveMQEBYP5mL26g6" },
        { name: "みなとまちバール BamVino（7-minute walk）", mapQuery: "BamVino 桃谷店 Osaka", mapUrl: "https://maps.app.goo.gl/TSsxd1PqgHhhf5ja6" },
        { name: "グリルポッケ（16-minute walk）", mapQuery: "Grill Pokke Osaka", mapUrl: "https://maps.app.goo.gl/Ce8R8ZTdvBEYQo2Z8" },
        { name: "PASTA KITCHEN GYO（19-minute walk）", mapQuery: "PASTA KITCHEN GYO Osaka", mapUrl: "https://maps.app.goo.gl/X7A7cUAJWnvUFuCs6" }
      ],
      chinese: [
        { name: "中華料理 其蘭（4-minute walk）", mapQuery: "中国料理 其蘭 Shinpoincho Osaka", mapUrl: "https://maps.app.goo.gl/vnnhC3NtBv39yanM9" },
        { name: "中華料理 鑫福源（10-minute walk）", mapQuery: "中華料理 鑫福源 Osaka", mapUrl: "https://maps.app.goo.gl/kqSH7VT5YquaoFtF7" },
        { name: "本格中国料理 桃園（15-minute walk）", mapQuery: "桃園 Katsuyamakita Osaka", mapUrl: "https://maps.app.goo.gl/DKKhoA6Ku33h8NeV6" },
        { name: "なかよし（3-minute walk）", mapQuery: "なかよし Katsuyama Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/wCnKgA7xKUNSBDAr5" }
      ],
      korean: [
        { name: "韓国料理TonTon 한국식당 톤톤（16-minute walk）", mapQuery: "TonTon Ishigatsujicho Osaka", mapUrl: "https://maps.app.goo.gl/AU8v8Z43TbhsSUjr7" },
        { name: "momodakni chicken&beer（13-minute walk）", mapQuery: "momodani chicken&beer Osaka", mapUrl: "https://maps.app.goo.gl/ii9KtqA7JUEoNdBN6" },
        { name: "月（12-minute walk）", mapQuery: "月 Dogashiba Osaka Korean restaurant", mapUrl: "https://maps.app.goo.gl/QeSmh2C9e6scYZcw5" },
        { name: "済州島テールスープ専門店（4-minute walk）", mapQuery: "Jeju-do Tail Soup Osaka", mapUrl: "https://maps.app.goo.gl/BSjDXQJpF6mPTs3z5" }
      ]
    }
  },

  parking: {
    ja: [
      {
        name: "① タイムスペース真法院町（徒歩3分）",
        mapQuery: "Time Space 8-8 Shinpoincho Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/85SMhNr458EyPrwh6",
        sections: [
          { title: "参考料金", items: ["入庫から24時間まで - 1,500円","夜間最大 (18:00～8:00) - 300円","※最大料金は繰り返しの適用となります。","オールタイム：30分 / 200円"] },
          { title: "決済方法", items: ["現金 ○","クレジット ×"] },
          { title: "制限事項", items: ["3ナンバー ○","RV ○","1BOX ○","外車 ○"] }
        ]
      },
      {
        name: "② エコロパーク真法院町 第1駐車場（徒歩3分）",
        mapQuery: "Ecolo Park Shinpoincho Dai 1 Parking Lot Osaka", mapUrl: "https://maps.app.goo.gl/5AJJjCsi61xr9rpf7",
        sections: [
          { title: "参考料金", items: ["平日：入庫から24時間最大 - 1,600円","土日祝：入庫から24時間最大 - 900円","オールタイム：20分：220円","夜間最大料金：300円"] },
          { title: "決済方法", items: ["現金：可","クレジットカード：不可","電子マネー：不可","QR決済：可"] }
        ]
      },
      {
        name: "③ 三井パーク勝山1丁目 第2駐車場（徒歩2分）",
        mapQuery: "Mitsui Repark Katsuyama 1-chome Dai 2 Osaka", mapUrl: "https://maps.app.goo.gl/AWmYN9UhdV3Vfphi9",
        sections: [
          { title: "参考料金", items: ["入庫後24時間以内最大1,300円（繰り返しあり）","通常料金　0:00～24:00","20分：220円"] },
          { title: "制限事項", items: ["高さ 2m","長さ 5m","幅 1.9m","重量 2t"] }
        ]
      }
    ],
    en: [
      {
        name: "① Times Space Shinpoincho（3-minute walk）",
        mapQuery: "Time Space 8-8 Shinpoincho Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/85SMhNr458EyPrwh6",
        sections: [
          { title: "Reference Rates", items: ["Up to 24 hours from entry: JPY 1,500","Maximum nighttime rate (18:00–8:00): JPY 300","※The maximum rate applies repeatedly.","All hours: JPY 200 / 30 minutes"] },
          { title: "Payment Methods", items: ["Cash: ○","Credit card: ×"] },
          { title: "Restrictions", items: ["Category 3 vehicle: ○","RV: ○","1BOX: ○","Foreign-made cars: ○"] }
        ]
      },
      {
        name: "② Ecolo Park Shinpoincho Dai 1（3-minute walk）",
        mapQuery: "Ecolo Park Shinpoincho Dai 1 Parking Lot Osaka", mapUrl: "https://maps.app.goo.gl/5AJJjCsi61xr9rpf7",
        sections: [
          { title: "Reference Rates", items: ["Weekdays: Maximum JPY 1,600 for up to 24 hours from entry","Weekends & public holidays: Maximum JPY 900 for up to 24 hours from entry","All hours: JPY 220 / 20 minutes","Maximum nighttime rate: JPY 300"] },
          { title: "Payment Methods", items: ["Cash: Available","Credit card: Not available","Electronic money: Not available","QR payment: Available"] }
        ]
      },
      {
        name: "③ Mitsui Repark Katsuyama 1-chome Dai 2（2-minute walk）",
        mapQuery: "Mitsui Repark Katsuyama 1-chome Dai 2 Osaka", mapUrl: "https://maps.app.goo.gl/AWmYN9UhdV3Vfphi9",
        sections: [
          { title: "Reference Rates", items: ["Maximum JPY 1,300 within 24 hours of entry (applies repeatedly)","Standard rate (0:00–24:00): JPY 220 / 20 minutes"] },
          { title: "Restrictions", items: ["Height: 2.0 m","Length: 5.0 m","Width: 1.9 m","Weight: 2 tons"] }
        ]
      }
    ]
  },

  parkingNotice: {
    ja: "※情報が変更されている場合があります。ご利用時は必ず現地の表記をご確認ください。",
    en: "Information may change. Please check the information displayed at the parking lot before use."
  },

  baggage: {
    ja: {
      intro: [
        "当ホテルでは、スーツケースや段ボールなどのお荷物の配送を承っております。",
        "配送状況やお送り先までの距離によっては、ご希望に添えない場合がございます。空港宛ては期日が厳しく管理されているため、必ず期日をご確認ください。"
      ],
      cards: [
        { title: "ご自宅へ配送", note: "期日：発送希望日の前日まで", linkKey: "baggageHomeForm", button: "専用フォームを開く" },
        { title: "別ホテル様へ配送", note: "期日：発送希望日の前日まで", linkKey: "baggageHotelForm", button: "専用フォームを開く" },
        { title: "空港へ配送", note: "期日：発送希望日の2日前まで", linkKey: "baggageAirportForm", button: "専用フォームを開く" }
      ]
    },
    en: {
      intro: [
        "Our hotel provides a shipping service for luggage such as suitcases and cardboard boxes.",
        "Depending on the delivery conditions and the distance to the destination, we may not be able to accommodate your request. Deliveries to airports are subject to strict deadlines, so please make sure to check the required delivery date in advance."
      ],
      cards: [
        { title: "Delivery to Another Hotel", note: "Deadline: By the day before your desired shipping date", linkKey: "enbaggageHotelForm", button: "Open the dedicated form" },
        { title: "Delivery to the Airport", note: "Deadline: At least 2 days before your desired shipping date", linkKey: "enbaggageAirportForm", button: "Open the dedicated form" }
      ]
    }
  },

  airport: {
    ja: {
      title: "近鉄 大阪上本町駅 → 関西国際空港",
      description: "シェラトン都ホテル大阪付近から関西国際空港へ向かうリムジンバスの公式案内です。",
      stopButton: "乗り場を確認",
      timetableButton: "時刻表を確認"
    },
    en: {
      title: "Osaka Uehonmachi → Kansai International Airport",
      description: "Official limousine-bus information for travel from Osaka Uehonmachi to Kansai International Airport.",
      stopButton: "Bus stop information",
      timetableButton: "Timetable / Fares"
    }
  },

  remote: {
    ja: {
      notice: "画像ファイル",
      missing: "（画像を追加してください）",
      items: [
        { title: "エアコン（2～7階）", image: "assets/remote-1.jpg" },
        { title: "エアコン（8・9階）", image: "assets/remote-2.jpg" },
        { title: "テレビ（2～7階）", image: "assets/remote-3.jpg" },
        { title: "テレビ（8・9階）", image: "assets/remote-4.jpg" },
        { title: "浴室", image: "assets/remote-5.jpg" },
        { title: "電子レンジ", image: "assets/remote-6.jpg" },
        { title: "IHクッキングヒーター", image: "assets/remote-7.jpg" }
      ]
    },
    en: {
      notice: "Add the guide images",
      missing: "(add image here)",
      items: [
        { title: "Air Conditioner (2nd–7th Floors)", image: "assets/remote-1.jpg" },
        { title: "Air Conditioner (8th & 9th Floors)", image: "assets/remote-2.jpg" },
        { title: "TV (2nd–7th Floors)", image: "assets/remote-3.jpg" },
        { title: "TV (8th & 9th Floors)", image: "assets/remote-4.jpg" },
        { title: "Bathroom", image: "assets/remote-5.jpg" },
        { title: "Microwave Oven", image: "assets/remote-6.jpg" },
        { title: "Induction Cooktop", image: "assets/remote-7.jpg" }
      ]
    }
  }
};
