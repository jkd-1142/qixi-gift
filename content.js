/* ============================================================
   FILE NÀY LÀ NƠI DUY NHẤT BẠN CẦN SỬA
   Một file dùng chung cho cả 3 bản (A, B, C).
   Lưu file rồi F5 (tải lại trang) là thay đổi có hiệu lực.
   ============================================================ */

const CONTENT = {

  /* 1. TÊN HAI NGƯỜI
     vi = hiện khi để tiếng Việt, zh = hiện khi bấm nút 繁 (tiếng Trung)
     [tên người tặng, tên người nhận] */
  names: {
    vi: ["Thành", "Trang"],
    zh: ["佳城", "小莊"]
  },

  /* 2. ẢNH KỶ NIỆM (6 ảnh)
     Cách dùng đơn giản nhất: để danh sách này trống và thay 6 file
     photo-1.jpg, photo-2.jpg... photo-6.jpg trong thư mục images/
     của bản bạn chọn tặng. Nếu muốn dùng đường dẫn riêng, sửa dưới đây. */
  photos: [],

  /* 3. NGÀY ĐẾM NGƯỢC — đếm ngược đến đúng giờ này
     Định dạng: "YYYY-MM-DDTHH:MM:SS+07:00" (giờ Việt Nam) */
  targetDate: "2026-08-19T00:00:00+07:00",

  /* 4. MẬT KHẨU TÌNH YÊU — câu trả lời đúng là đáp án thứ mấy?
     (0 = thứ nhất, 1 = thứ hai, 2 = thứ ba, 3 = thứ tư) */
  quizCorrect: 0,

  /* 5. NỘI DUNG CHỮ — vi = tiếng Việt, zh = tiếng Trung phồn thể */
  vi: {
    /* đầu trang */
    heroTitle: "七夕節",
    heroCn: "七夕",
    heroLabel: "Night of the Weaver / 織女之夜",
    heroTitleEn: "the night the stars come home",
    heroCta: "Mở thư",
    heroNote: "Đêm nay, hai người tưởng nhớ nhau đều bước ra cùng một dòng sông sáng.",
    eyebrow: "Ngưu Lang và Chức Nữ · mỗi năm gặp một lần",
    subtitle: "Gửi Trang, người anh yêu nhất trên đời",
    vertLeft: "Ngân Hà xa thẳm",
    vertRight: "Ngày hẹn như mộng",
    cdLabel: "Còn lại đến đêm Thất Tịch",
    cdDays: "Ngày", cdHours: "Giờ", cdMins: "Phút", cdSecs: "Giây",
    todayLine: "Hôm nay là đêm Thất Tịch, đêm Ngưu Lang và Chức Nữ gặp nhau",
    todaySub: "cũng là đêm anh muốn nói với em một điều…",

    /* trò chơi (bản A: sao băng · bản B: cầu Ô Thước) */
    gameTitle: "Trời sao rơi, bảy lời yêu",
    gameSub: "Chạm vào sao băng để gom đủ 7 lời anh muốn nói với em",
    gameHint: "Chạm vào sao băng đang rơi",
    doneMsg: "Bảy vì sao băng đã thắp sáng bầu trời, như tình yêu anh muốn dành cho em sau này.",
    bridgeTitle: "Cầu Ô Thước, nối đôi bờ Ngân Hà",
    bridgeSub: "Giữ nút để gọi đàn chim Ô Thước dệt cầu, đưa Ngưu Lang và Chức Nữ về bên nhau",
    bridgeHint: "Giữ nút phía dưới để gọi chim dệt cầu",
    holdLabel: "Giữ nút tại đây để gọi đàn chim",
    bridgeDone: "Ô Thước dệt cầu, Ngưu Lang và Chức Nữ gặp nhau. Như anh và em, dù bao xa vẫn về bên nhau",
    continueBtn: "Tiếp tục xem kỷ niệm của anh và em",

    /* chương hồi + bộ sưu tập (bản C) */
    ch1Label: "chapter one · 相遇",
    ch1Title: "Gặp em",
    ch1Text: "Một ngày đầu mùa, anh gặp em, và trời bỗng trở thành nơi có thể gieo sao.",
    ch2Label: "chapter two · 星河",
    ch2Title: "Dòng sông trên trời",
    ch2Text: "Người ta bảo Ngân Hà chia đôi bờ. Anh chỉ thấy nó là con đường sáng nhất dẫn về em.",
    ch3Label: "chapter three · 約定",
    ch3Title: "Lời hẹn",
    ch3Text: "Mỗi năm một lần, trên cầu Ô Thước, mình gặp lại. Không cần nhiều hơn, vì mình đã có cả đời.",
    galLabel: "keepsake · 留影",
    galTitle: "Kỳ tích",

    /* ảnh kỷ niệm */
    galleryTitle: "Kỳ tích",
    gallerySub: "Những khoảnh khắc đã làm nên câu chuyện của hai ta",
    cap1: "Người thì vẫn ngơ ngơ",
    cap2: "Người thì vẫn ngây thơ",
    cap3: "Một trời",
    cap4: "Một Vực",
    cap5: "Cả hai đã đi đến nhau bằng dĩa cơm sườn",
    cap6: "Và cả tương lai hai đứa đi tiếp",

    /* lá thư */
    letterTitle: "Lời anh muốn nói",
    letterLabel: "a letter, sealed in starlight · 一封情書",
    letterSub: "Hãy chạm vào trái tim này để mở lá thư",
    heartHint: "Chạm vào trái tim",
    sealHint: "Chạm vào con dấu, mở thư",
    letterHead: "Trang yêu dấu,",
    letterLine1: "Trang yêu dấu,",
    letterLine2: "Cảm ơn em đã đến bên anh. Anh không có gì, mà em vẫn chấp nhận anh, cùng anh bắt đầu từ con số 0. Em thật vĩ đại.",
    letterLine3: "Anh không cần cầu nguyện điều gì nhiều. Anh chỉ ước mỗi sáng thức dậy, người đầu tiên anh nhìn thấy vẫn là em.",
    letterLine4: "Yêu em, hôm nay, và tất cả những mùa sao vẫn còn phía trước.",
    letterP1: "Đêm Thất Tịch, người ta nhìn lên trời để ngóng Ngưu Lang và Chức Nữ. Còn anh nhìn lên trời, chỉ để thấy em đang mỉm cười ở một nơi nào đó.",
    letterP2: "Cảm ơn em đã đến bên anh, anh không có gì , mà em vẫn chấp nhận anh , và cùng anh bắt đầu từ số 0, e rất vĩ đại đấy. Anh không cần cầu nguyện gì nhiều, nhưng anh chỉ ước mỗi sáng thức dậy, người anh gặp đầu tiên vẫn là em.",
    letterP3: "Yêu em, hôm nay, và cả đời sau.",
    letterSign: "- Anh yêu em · Thành",
    footerLine: "Viết nhân dịp Thất Tịch, mùng 7 tháng 7, dưới dải Ngân Hà",
    footerZh: "丙午年七月初七 · 二〇二六",

    /* mật khẩu tình yêu */
    quizTitle: "Mật khẩu tình yêu",
    quizQ: "Chồng thích ăn món gì?",
    quizA1: "Lẩu",
    quizA2: "Bò bít tết",
    quizA3: "Sushi",
    quizA4: "Phở",
    quizWrong: "Chưa đúng rồi, nhưng anh vẫn yêu em. Thử lại nhé."
  },

  zh: {
    /* đầu trang */
    heroTitle: "七夕節",
    heroCn: "七夕",
    heroLabel: "Night of the Weaver / 織女之夜",
    heroTitleEn: "the night the stars come home",
    heroCta: "開啟信",
    heroNote: "今夜，所有思念之人都踏入了同一條光河。",
    eyebrow: "牛郎織女 · 七月初七又相逢",
    subtitle: "給小莊，我最愛的人",
    vertLeft: "銀漢迢迢",
    vertRight: "佳期如夢",
    cdLabel: "距離七夕之夜還有",
    cdDays: "日", cdHours: "時", cdMins: "分", cdSecs: "秒",
    todayLine: "今夜便是七夕，牛郎織女來相會",
    todaySub: "也是我，想對妳說一句話的夜晚…",

    /* trò chơi */
    gameTitle: "流星雨落，七句情話",
    gameSub: "輕觸流星，收集七句我想對妳說的話",
    gameHint: "點擊墜落的流星",
    doneMsg: "七顆流星點亮夜空，如同我未來想給妳的愛。",
    bridgeTitle: "鵲橋 · 橫跨銀河",
    bridgeSub: "按住按鈕，呼喚喜鵲搭成鵲橋，讓牛郎與織女重逢",
    bridgeHint: "按住下方按鈕呼喚喜鵲",
    holdLabel: "按住此處呼喚喜鵲",
    bridgeDone: "喜鵲搭橋，牛郎織女相會。就像我們，無論多遠終會重逢",
    continueBtn: "繼續看我們的回憶",

    /* chương hồi + bộ sưu tập */
    ch1Label: "chapter one · 相遇",
    ch1Title: "遇見妳",
    ch1Text: "那年暮春，我遇見了妳，此後天空對我而言，變成了一座可以種星的園子。",
    ch2Label: "chapter two · 星河",
    ch2Title: "天上的河",
    ch2Text: "人說銀河隔開兩岸。我卻只想說，它是一條最亮的、通往妳的心路。",
    ch3Label: "chapter three · 約定",
    ch3Title: "約定",
    ch3Text: "每年一度，在鵲橋上重逢。不必更多，因為我們早已相許此生。",
    galLabel: "keepsake · 留影",
    galTitle: "奇蹟",

    /* ảnh kỷ niệm */
    galleryTitle: "奇蹟",
    gallerySub: "那些讓我們的愛情成形的每一刻",
    cap1: "一個還是懵懵的",
    cap2: "一片天",
    cap3: "兩人竟靠一盤排骨飯走到了一起",
    cap4: "另一個還是天真的",
    cap5: "一片淵",
    cap6: "還有我們一起走下去的未來",

    /* lá thư */
    letterTitle: "想對妳說的話",
    letterLabel: "a letter, sealed in starlight · 一封情書",
    letterSub: "按下紅心，打開信件",
    heartHint: "觸碰我的心",
    sealHint: "輕觸印章，開啟情書",
    letterHead: "親愛的小莊：",
    letterLine1: "親愛的小莊：",
    letterLine2: "謝謝妳來到我身邊。那時我一無所有，妳卻還是接受了我，陪著我從零開始。妳真的很了不起。",
    letterLine3: "我不需要祈求太多，只願每個清晨醒來，第一個映入眼簾的人，依然是妳。",
    letterLine4: "愛妳，在今天，也在所有尚未到來的星河裡。",
    letterP1: "七夕之夜，別人仰望星河，是為了牛郎與織女。而我仰望星河，只想找到妳微笑的身影。",
    letterP2: "謝謝妳來到我身邊。那時我一無所有，妳卻還是接受了我，陪著我從零開始。妳真的很了不起。我不需要祈求什麼，只願每個清晨醒來，第一個見到的人仍是妳。",
    letterP3: "愛妳，今天，還有永遠。",
    letterSign: "- 愛妳 · 佳城",
    footerLine: "寫於七夕，七月初七之夜，星河之下",
    footerZh: "丙午年七月初七 · 二〇二六",

    /* mật khẩu tình yêu */
    quizTitle: "愛情密碼",
    quizQ: "我老公最愛吃什麼？",
    quizA1: "火鍋",
    quizA2: "牛排",
    quizA3: "壽司",
    quizA4: "河粉",
    quizWrong: "不對，但我依然愛妳。再試一次。"
  }
};
