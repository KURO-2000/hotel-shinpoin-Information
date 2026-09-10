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
    airportBusStop: "https://www.kate.co.jp/busstop/detail/4170",
    airportBusTimetable: "https://www.kate.co.jp/timetable/detail/UH"
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
      { name: "桃谷駅", mapQuery: "JR Momodani Station, Osaka", mapUrl: "https://maps.app.goo.gl/TTYmEDYsEfFjzQJM7" },
      { name: "鶴橋", mapQuery: "Tsuruhashi Station, Osaka", mapUrl: "https://maps.app.goo.gl/SCw3j6wKhGWxoQBp9" },
      { name: "上本町駅", mapQuery: "Osaka Uehonmachi Station, Osaka", mapUrl: "https://maps.app.goo.gl/zE99NpAgyS6tSxJQ6" },
      { name: "四天王寺夕陽ヶ丘駅", mapQuery: "Shitennoji-mae Yuhigaoka Station, Osaka", mapUrl: "https://maps.app.goo.gl/A3kzURXvZYsUTt8L9" }
    ],
    en: [
      { name: "JR Momodani Station", mapQuery: "JR Momodani Station, Osaka", mapUrl: "https://maps.app.goo.gl/TTYmEDYsEfFjzQJM7" },
      { name: "Tsuruhashi Station", mapQuery: "Tsuruhashi Station, Osaka", mapUrl: "https://maps.app.goo.gl/SCw3j6wKhGWxoQBp9" },
      { name: "Osaka Uehonmachi Station", mapQuery: "Osaka Uehonmachi Station, Osaka", mapUrl: "https://maps.app.goo.gl/zE99NpAgyS6tSxJQ6" },
      { name: "Shitennoji-mae Yuhigaoka Station", mapQuery: "Shitennoji-mae Yuhigaoka Station, Osaka", mapUrl: "https://maps.app.goo.gl/A3kzURXvZYsUTt8L9" }
    ]
  },

  convenience: {
    ja: [
      { name: "ツルハドラッグ 天王寺真法院店", mapQuery: "Tsuruha Drug, 12-14 Shinpoincho, Tennoji Ward, Osaka", mapUrl: "https://maps.app.goo.gl/G3Du9n7oWczjJcgU6" },
      { name: "ライフ四天王寺店", mapQuery: "Life Shitennoji, Osaka", mapUrl: "https://maps.app.goo.gl/sWwdd6P319wh4Fwx5" },
      { name: "ローソン 勝山三丁目店", mapQuery: "Lawson Katsuyama 3-chome, Osaka", mapUrl: "https://maps.app.goo.gl/83eEZAmHF7c5W8M39" },
      { name: "ファミリーマート 桃谷駅西店", mapQuery: "FamilyMart 2 Chome-3-2 Karasugatsuji, Osaka", mapUrl: "https://maps.app.goo.gl/8WQZY1MHBJGaEPZp9" }
    ],
    en: [
      { name: "Tsuruha Drug", mapQuery: "Tsuruha Drug, 12-14 Shinpoincho, Tennoji Ward, Osaka", mapUrl: "https://maps.app.goo.gl/G3Du9n7oWczjJcgU6" },
      { name: "Supermarket Life", mapQuery: "Life Shitennoji, Osaka", mapUrl: "https://maps.app.goo.gl/sWwdd6P319wh4Fwx5" },
      { name: "Lawson", mapQuery: "Lawson Katsuyama 3-chome, Osaka", mapUrl: "https://maps.app.goo.gl/83eEZAmHF7c5W8M39" },
      { name: "FamilyMart", mapQuery: "FamilyMart 2 Chome-3-2 Karasugatsuji, Osaka", mapUrl: "https://maps.app.goo.gl/8WQZY1MHBJGaEPZp9" }
    ]
  },

  restaurants: {
    ja: {
      okonomiyaki: [
        { name: "鉄板焼きとお好み焼き 狸狸亭鶴橋店 （徒歩19分）", mapQuery: "Ponpoco-tei Tsuruhashi, Osaka", mapUrl: "https://maps.app.goo.gl/of5BACcdcyMLvgwD6" },
        { name: "お好み焼 金のてこ （徒歩32分）", mapQuery: "お好み焼き 金のてこ, Osaka", mapUrl: "https://maps.app.goo.gl/vJuCc9BNcM2jMXgNA" },
        { name: "たぴおか食堂 （徒歩9分）", mapQuery: "Tapioca Shokudo, Osaka", mapUrl: "https://maps.app.goo.gl/8gqwu6psCdG1JYsu7" },
        { name: "居酒屋 お好み焼き弐八 天王寺 （徒歩11分）", mapQuery: "お好み焼き 弐八, Osaka", mapUrl: "https://maps.app.goo.gl/d7gvQnuSbzCsBi4b6" }
      ],
      sushi: [
        { name: "鮨 我逢人（徒歩5分）", mapQuery: "鮨 我逢人, Osaka", mapUrl: "https://maps.app.goo.gl/2ajqi6yJULBvW6wz7" },
        { name: "さくら鮨（徒歩5分）", mapQuery: "さくら鮨 Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/QMdHhxLksziE25JS8" },
        { name: "丸正（まるまさ）寿司（徒歩7分）", mapQuery: "Marusho Marumasa Sushi Osaka", mapUrl: "https://maps.app.goo.gl/qwqYWDxgV5zyHcXD9" },
        { name: "鮨こいき（徒歩8分）", mapQuery: "Sushi Koiki Osaka", mapUrl: "https://maps.app.goo.gl/PNKJqtY5QagfRztZ8" }
      ],
      japanese: [
        { name: "一品料理 花", mapQuery: "Hana Daido Tennoji Osaka", mapUrl: "" },
        { name: "うなぎのお食事処 舟屋", mapQuery: "Funaya unagi Osaka", mapUrl: "" },
        { name: "とんかつ とん亭", mapQuery: "Tontei Daido Osaka", mapUrl: "" },
        { name: "焼鳥 トミーズ", mapQuery: "YAKITORI Tommy's Momodani Osaka", mapUrl: "" },
        { name: "味 コのじ", mapQuery: "味 コのじ Osaka", mapUrl: "" }
      ],
      breakfast: [
        { name: "ロイヤルホスト", mapQuery: "Royal Host Uehonmachi Osaka", mapUrl: "" },
        { name: "マンデリン", mapQuery: "Manderin Momodani Osaka", mapUrl: "" },
        { name: "富良野みるく工房", mapQuery: "富良野みるく工房 Karasugatsuji Osaka", mapUrl: "" },
        { name: "アメリカン", mapQuery: "American Shinpoincho Osaka", mapUrl: "" }
      ],
      cafe: [
        { name: "オールドリバー", mapQuery: "Old River Komiyacho Osaka", mapUrl: "" },
        { name: "The Coffee Market 145", mapQuery: "The Coffee Market 145 Osaka", mapUrl: "" },
        { name: "コメダ珈琲店", mapQuery: "Komeda's Coffee Karasugatsuji Osaka", mapUrl: "" },
        { name: "ミスタードーナツ", mapQuery: "Mister Donut Karasugatsuji Osaka", mapUrl: "" }
      ],
      noodle: [
        { name: "麺処 細屋", mapQuery: "麺処 細屋 Katsuyama Osaka", mapUrl: "" },
        { name: "やまがそば", mapQuery: "Yamaga Soba Uehonmachi Osaka", mapUrl: "" },
        { name: "四天王寺 はやうち", mapQuery: "Shitennoji Hayauchi Osaka", mapUrl: "" },
        { name: "イ袋ワシづかみ", mapQuery: "唯一無二のらぁ麺専門店 イ袋ワシづかみ Osaka", mapUrl: "" }
      ],
      yakiniku: [
        { name: "焼肉ソウル", mapQuery: "焼肉 ソウル 桃谷店 Osaka", mapUrl: "" },
        { name: "道楽", mapQuery: "Doraku Katsuyama Osaka", mapUrl: "" },
        { name: "アジヨシ", mapQuery: "Yakiniku Aji-yoshi Tsuruhashi Osaka", mapUrl: "" },
        { name: "桃谷 焼肉満憶", mapQuery: "桃谷 焼肉満憶 Osaka", mapUrl: "" }
      ],
      western: [
        { name: "ポモドーロ・フレスカ", mapQuery: "ポモドーロ・フレスカ Osaka", mapUrl: "" },
        { name: "みなとまちバール BamVino", mapQuery: "BamVino 桃谷店 Osaka", mapUrl: "" },
        { name: "グリルポッケ", mapQuery: "Grill Pokke Osaka", mapUrl: "" },
        { name: "PASTA KITCHEN GYO", mapQuery: "PASTA KITCHEN GYO Osaka", mapUrl: "" }
      ],
      chinese: [
        { name: "中華料理 其蘭", mapQuery: "中国料理 其蘭 Shinpoincho Osaka", mapUrl: "" },
        { name: "中華料理 鑫福源", mapQuery: "中華料理 鑫福源 Osaka", mapUrl: "" },
        { name: "桃園", mapQuery: "桃園 Katsuyamakita Osaka", mapUrl: "" },
        { name: "なかよし", mapQuery: "なかよし Katsuyama Tennoji Osaka", mapUrl: "" }
      ],
      korean: [
        { name: "韓国料理 TonTon", mapQuery: "TonTon Ishigatsujicho Osaka", mapUrl: "" },
        { name: "momodani chicken&beer", mapQuery: "momodani chicken&beer Osaka", mapUrl: "" },
        { name: "月", mapQuery: "月 Dogashiba Osaka Korean restaurant", mapUrl: "" },
        { name: "済州島 テールスープ専門店", mapQuery: "Jeju-do Tail Soup Osaka", mapUrl: "" }
      ]
    },

    en: {
      okonomiyaki: [
        { name: "Ponpocotei Tsuruhashi (19 min walk)", mapQuery: "Ponpoco-tei Tsuruhashi, Osaka", mapUrl: "https://maps.app.goo.gl/of5BACcdcyMLvgwD6" },
        { name: "Kin no Teko (32 min walk)", mapQuery: "お好み焼き 金のてこ, Osaka", mapUrl: "https://maps.app.goo.gl/vJuCc9BNcM2jMXgNA" },
        { name: "Tapioca Shokudo (9 min walk)", mapQuery: "Tapioca Shokudo, Osaka", mapUrl: "https://maps.app.goo.gl/8gqwu6psCdG1JYsu7" },
        { name: "Okonomiyaki Nihachi Tennoji (11 min walk)", mapQuery: "お好み焼き 弐八, Osaka", mapUrl: "https://maps.app.goo.gl/d7gvQnuSbzCsBi4b6" }
      ],
      sushi: [
        { name: "Sushi Gaoujin (5 min walk)", mapQuery: "鮨 我逢人, Osaka", mapUrl: "https://maps.app.goo.gl/2ajqi6yJULBvW6wz7" },
        { name: "Sakura Sushi (5 min walk)", mapQuery: "さくら鮨 Katsuyama Osaka", mapUrl: "https://maps.app.goo.gl/QMdHhxLksziE25JS8" },
        { name: "Marumasa Sushi (7 min walk)", mapQuery: "Marusho Marumasa Sushi Osaka", mapUrl: "https://maps.app.goo.gl/qwqYWDxgV5zyHcXD9" },
        { name: "Sushi Koiki (8 min walk)", mapQuery: "Sushi Koiki Osaka", mapUrl: "https://maps.app.goo.gl/PNKJqtY5QagfRztZ8" }
      ],
      japanese: [
        { name: "Hana", mapQuery: "Hana Daido Tennoji Osaka", mapUrl: "" },
        { name: "Funaya", mapQuery: "Funaya unagi Osaka", mapUrl: "" },
        { name: "Tontei", mapQuery: "Tontei Daido Osaka", mapUrl: "" },
        { name: "Yakitori Tommy's", mapQuery: "YAKITORI Tommy's Momodani Osaka", mapUrl: "" },
        { name: "Aji Konoji", mapQuery: "味 コのじ Osaka", mapUrl: "" }
      ],
      breakfast: [
        { name: "Royal Host", mapQuery: "Royal Host Uehonmachi Osaka", mapUrl: "" },
        { name: "Manderin", mapQuery: "Manderin Momodani Osaka", mapUrl: "" },
        { name: "Furano Milk Kobo", mapQuery: "富良野みるく工房 Karasugatsuji Osaka", mapUrl: "" },
        { name: "American", mapQuery: "American Shinpoincho Osaka", mapUrl: "" }
      ],
      cafe: [
        { name: "Old River", mapQuery: "Old River Komiyacho Osaka", mapUrl: "" },
        { name: "The Coffee Market 145", mapQuery: "The Coffee Market 145 Osaka", mapUrl: "" },
        { name: "Komeda's Coffee", mapQuery: "Komeda's Coffee Karasugatsuji Osaka", mapUrl: "" },
        { name: "Mister Donut", mapQuery: "Mister Donut Karasugatsuji Osaka", mapUrl: "" }
      ],
      noodle: [
        { name: "Mendokoro Hosoya", mapQuery: "麺処 細屋 Katsuyama Osaka", mapUrl: "" },
        { name: "Yamaga Soba", mapQuery: "Yamaga Soba Uehonmachi Osaka", mapUrl: "" },
        { name: "Shitennoji Hayauchi", mapQuery: "Shitennoji Hayauchi Osaka", mapUrl: "" },
        { name: "Ibukuro Washizukami", mapQuery: "唯一無二のらぁ麺専門店 イ袋ワシづかみ Osaka", mapUrl: "" }
      ],
      yakiniku: [
        { name: "Yakiniku Seoul", mapQuery: "焼肉 ソウル 桃谷店 Osaka", mapUrl: "" },
        { name: "Doraku", mapQuery: "Doraku Katsuyama Osaka", mapUrl: "" },
        { name: "Aji-yoshi", mapQuery: "Yakiniku Aji-yoshi Tsuruhashi Osaka", mapUrl: "" },
        { name: "Momodani Yakiniku Manoku", mapQuery: "桃谷 焼肉満憶 Osaka", mapUrl: "" }
      ],
      western: [
        { name: "Pomodoro Fresca", mapQuery: "ポモドーロ・フレスカ Osaka", mapUrl: "" },
        { name: "Minatomachi Bar BamVino", mapQuery: "BamVino 桃谷店 Osaka", mapUrl: "" },
        { name: "Grill Pokke", mapQuery: "Grill Pokke Osaka", mapUrl: "" },
        { name: "PASTA KITCHEN GYO", mapQuery: "PASTA KITCHEN GYO Osaka", mapUrl: "" }
      ],
      chinese: [
        { name: "Chinese Restaurant Kiran", mapQuery: "中国料理 其蘭 Shinpoincho Osaka", mapUrl: "" },
        { name: "Chinese Restaurant Shin Fukugen", mapQuery: "中華料理 鑫福源 Osaka", mapUrl: "" },
        { name: "Toen", mapQuery: "桃園 Katsuyamakita Osaka", mapUrl: "" },
        { name: "Nakayoshi", mapQuery: "なかよし Katsuyama Tennoji Osaka", mapUrl: "" }
      ],
      korean: [
        { name: "Korean Restaurant TonTon", mapQuery: "TonTon Ishigatsujicho Osaka", mapUrl: "" },
        { name: "momodani chicken&beer", mapQuery: "momodani chicken&beer Osaka", mapUrl: "" },
        { name: "Tsuki", mapQuery: "月 Dogashiba Osaka Korean restaurant", mapUrl: "" },
        { name: "Jeju-do Tail Soup Specialty Restaurant", mapQuery: "Jeju-do Tail Soup Osaka", mapUrl: "" }
      ]
    }
  },

  parking: {
    ja: [
      {
        name: "① タイムスペース真法院町",
        mapQuery: "Time Space 8-8 Shinpoincho Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/85SMhNr458EyPrwh6",
        sections: [
          { title: "参考料金", items: ["入庫から24時間まで - 1,500円","夜間最大 (18:00～8:00) - 300円","※最大料金は繰り返しの適用となります。","オールタイム：30分 / 200円"] },
          { title: "決済方法", items: ["現金 ○","クレジット ×"] },
          { title: "制限事項", items: ["3ナンバー ○","RV ○","1BOX ○","外車 ○"] }
        ]
      },
      {
        name: "② エコロパーク真法院町 第1駐車場",
        mapQuery: "Ecolo Park Shinpoincho Dai 1 Parking Lot Osaka", mapUrl: "https://maps.app.goo.gl/5AJJjCsi61xr9rpf7",
        sections: [
          { title: "参考料金", items: ["平日：入庫から24時間最大 - 1,600円","土日祝：入庫から24時間最大 - 900円","オールタイム：20分：220円","夜間最大料金：300円"] },
          { title: "決済方法", items: ["現金：可","クレジットカード：不可","電子マネー：不可","QR決済：可"] }
        ]
      },
      {
        name: "③ 三井パーク勝山1丁目 第2駐車場",
        mapQuery: "Mitsui Repark Katsuyama 1-chome Dai 2 Osaka", mapUrl: "https://maps.app.goo.gl/AWmYN9UhdV3Vfphi9",
        sections: [
          { title: "参考料金", items: ["入庫後24時間以内最大1,300円（繰り返しあり）","通常料金　0:00～24:00","20分：220円"] },
          { title: "制限事項", items: ["高さ 2m","長さ 5m","幅 1.9m","重量 2t"] }
        ]
      }
    ],
    en: [
      {
        name: "① Times Space Shinpoincho",
        mapQuery: "Time Space 8-8 Shinpoincho Tennoji Osaka", mapUrl: "https://maps.app.goo.gl/85SMhNr458EyPrwh6",
        sections: [
          { title: "Reference Rates", items: ["Up to 24 hours from entry: JPY 1,500","Maximum nighttime rate (18:00–8:00): JPY 300","※The maximum rate applies repeatedly.","All hours: JPY 200 / 30 minutes"] },
          { title: "Payment Methods", items: ["Cash: ○","Credit card: ×"] },
          { title: "Restrictions", items: ["Category 3 vehicle: ○","RV: ○","1BOX: ○","Foreign-made cars: ○"] }
        ]
      },
      {
        name: "② Ecolo Park Shinpoincho Dai 1",
        mapQuery: "Ecolo Park Shinpoincho Dai 1 Parking Lot Osaka", mapUrl: "https://maps.app.goo.gl/5AJJjCsi61xr9rpf7",
        sections: [
          { title: "Reference Rates", items: ["Weekdays: Maximum JPY 1,600 for up to 24 hours from entry","Weekends & public holidays: Maximum JPY 900 for up to 24 hours from entry","All hours: JPY 220 / 20 minutes","Maximum nighttime rate: JPY 300"] },
          { title: "Payment Methods", items: ["Cash: Available","Credit card: Not available","Electronic money: Not available","QR payment: Available"] }
        ]
      },
      {
        name: "③ Mitsui Repark Katsuyama 1-chome Dai 2",
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
      intro: [],
      cards: [
        { title: "Delivery to Another Hotel", note: "", linkKey: "baggageHotelForm", button: "Open the dedicated form" },
        { title: "Delivery to the Airport", note: "", linkKey: "baggageAirportForm", button: "Open the dedicated form" }
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
