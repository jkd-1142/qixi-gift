const I18N = {
  vi: {
    heroLabel: "Night of the Weaver / 織女之夜",
    heroTitle: "the night the stars come home",
    heroSub: "Em ngước nhìn trời là sẽ thấy anh, ở khu vườn sao nơi mình hẹn gặp nhau mỗi năm.",
    heroCta: "Mở thư",
    heroNote: "Đêm nay, hai người tưởng nhớ nhau đều bước ra cùng một dòng sông sáng.",
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
    galTitle: "Sáu khung hình, giữ cho em",
    cap1: "ngày đầu gặp gỡ", cap2: "buổi hẹn đầu tiên", cap3: "trái tim anh thuộc về em",
    cap4: "chuyến đi của riêng mình", cap5: "từng khoảnh khắc bên nhau", cap6: "và cả tương lai của mình",
    letterLabel: "a letter, sealed in starlight · 一封情書",
    letterTitle: "Lá thư",
    letterSub: "Bấm tim đỏ để mở phong bì. Anh viết nó dưới đúng bầu trời này.",
    letterLine1: "Em yêu dấu,",
    letterLine2: "Năm nào cũng vậy, khi mua heo may thổi qua, anh lại nhìn lên trời. Không phải để ngóng Ngưu Lang và Chức Nữ, mà để tìm thấy em trong từng vì sao sáng nhất.",
    letterLine3: "Anh không xin một năm gặp một lần. Anh xin mỗi sáng thức dậy, người đầu tiên anh nhìn thấy vẫn là em.",
    letterLine4: "Yêu em, hôm nay, và tất cả những mùa sao vẫn còn phía trước.",
    letterSign: "- Anh yêu em · Minh",
    footerLine: "Viết nhân dịp Thất Tịch, mùng 7 tháng 7, dưới dải Ngân Hà.",
    quizTitle: "Mật khẩu tình yêu",
    quizQ: "Chúng ta gặp nhau lần đầu trong dịp nào?",
    quizA1: "Một mùa hè ở biển",
    quizA2: "Trong một đêm mưa sao băng",
    quizA3: "Ngày khai giảng",
    quizA4: "Tại một quán cà phê",
    quizWrong: "Chưa đúng rồi, nhưng anh vẫn yêu em. Thử lại nhé."
  },
  zh: {
    heroLabel: "Night of the Weaver / 織女之夜",
    heroTitle: "the night the stars come home",
    heroSub: "當妳仰望星空，就會看見我，在我們每年重逢的那座星園裡。",
    heroCta: "開啟信",
    heroNote: "今夜，所有思念之人都踏入了同一條光河。",
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
    galTitle: "六幀光影，為妳留存",
    cap1: "初遇那天", cap2: "第一次約會", cap3: "我的心屬於妳",
    cap4: "我們的旅行", cap5: "相處的每一刻", cap6: "還有我們的未來",
    letterLabel: "a letter, sealed in starlight · 一封情書",
    letterTitle: "一封情書",
    letterSub: "按下紅心，打開信封。我在這片天空下寫下它。",
    letterLine1: "親愛的蘭：",
    letterLine2: "每一年都是如此，入秋風起時，我又抬頭望天。不是為了牛郎織女，而是為了在眾星之間，認出妳的目光。",
    letterLine3: "我從不奢求一年一會。我只願每個清晨醒來，第一個映入眼簾的人，依然是妳。",
    letterLine4: "愛妳，在今天，也在所有尚未到來的星河裡。",
    letterSign: "- 永遠愛妳 · 明",
    footerLine: "寫於七夕，七月初七之夜，星河之下。",
    quizTitle: "愛情密碼",
    quizQ: "我們第一次見面是在什麼時候？",
    quizA1: "海邊的那個夏天",
    quizA2: "流星雨的那個夜晚",
    quizA3: "開學典禮上",
    quizA4: "一間咖啡館",
    quizWrong: "不對，但我依然愛妳。再試一次。"
  }
};

let currentLang = localStorage.getItem("qixi-lang") || "vi";

/* áp dụng nội dung người dùng tự sửa trong ../content.js */
if (typeof CONTENT !== "undefined") {
  if (CONTENT.vi) Object.assign(I18N.vi, CONTENT.vi);
  if (CONTENT.zh) Object.assign(I18N.zh, CONTENT.zh);
}
/* ảnh: tự tìm photo-N.jpg/png/webp/svg trong images/ (xem ../photos.js)
   Khung bộ sưu tập = ảnh photo-1..6 · 2 ảnh lớn đầu trang = photo-5 và photo-3 */
(function () {
  document.querySelectorAll(".g-card img").forEach((img, i) => {
    window.photoApply(img, i, typeof CONTENT !== "undefined" && CONTENT.photos && CONTENT.photos[i]);
  });
  const vImgs = document.querySelectorAll(".vphoto img");
  if (vImgs.length >= 2) {
    window.photoApply(vImgs[0], 4, typeof CONTENT !== "undefined" && CONTENT.photos && CONTENT.photos[4]);
    window.photoApply(vImgs[1], 2, typeof CONTENT !== "undefined" && CONTENT.photos && CONTENT.photos[2]);
  }
})();

function applyLang(lang) {
  currentLang = lang;
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "vi" ? "vi" : "zh-Hant";
  document.querySelector(".lang-vi").classList.toggle("active", lang === "vi");
  document.querySelector(".lang-zh").classList.toggle("active", lang === "zh");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  if (sheetOpen) renderLetterText(false);
  localStorage.setItem("qixi-lang", lang);
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(currentLang === "vi" ? "zh" : "vi");
});

/* reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("done");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* lightbox */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");

document.querySelectorAll(".g-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = "cap" + card.dataset.photo;
    lbImg.src = card.querySelector("img").src;
    lbImg.alt = "";
    lbCaption.textContent = I18N[currentLang][key];
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* letter typewriter */
const sealBtn = document.getElementById("sealBtn");
const sheet = document.getElementById("sheet");
const sheetBody = document.getElementById("sheetBody");
const sheetTail = document.getElementById("sheetTail");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let sheetOpen = false;

function letterLines(lang) {
  return [letterLine(lang, "letterLine1"), letterLine(lang, "letterLine2"), letterLine(lang, "letterLine3"), letterLine(lang, "letterLine4")];
}
function letterLine(lang, key) { return I18N[lang][key]; }

function setTail(lang) {
  sheetTail.textContent = I18N[lang].letterSign;
}

function renderLetterText(animate) {
  const lines = letterLines(currentLang);
  if (!animate || prefersReduced) {
    sheetBody.textContent = lines.join("\n\n");
    sheetBody.classList.add("done");
    setTail(currentLang);
    return;
  }
  sheetBody.classList.remove("done");
  sheetBody.textContent = "";
  const ghost = lines.join("\n\n");
  let i = 0;
  const total = ghost.length;
  const step = Math.max(1, Math.ceil(total / 140));
  const t = setInterval(() => {
    i = Math.min(total, i + step);
    sheetBody.textContent = ghost.slice(i > step + 4 ? i - 4 : 0, i);
    if (i >= total) {
      clearInterval(t);
      sheetBody.textContent = ghost;
      sheetBody.classList.add("done");
      setTail(currentLang);
    }
    sheet.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 30);
}

const quiz = document.getElementById("quiz");
const quizCard = document.getElementById("quizCard");
const quizMsg = document.getElementById("quizMsg");
const QUIZ_CORRECT = (typeof CONTENT !== "undefined" && CONTENT.quizCorrect != null) ? CONTENT.quizCorrect : 1;
let onQuizOk = null;

function openQuiz() {
  quizMsg.hidden = true;
  document.querySelectorAll("#quizOptions button").forEach(b => {
    b.classList.remove("wrong", "right");
    b.disabled = false;
  });
  quiz.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeQuiz() {
  quiz.hidden = true;
  document.body.style.overflow = "";
}

function openSheet() {
  if (sheetOpen) return;
  sealBtn.style.opacity = "0";
  sealBtn.style.transform = "scale(0.8)";
  setTimeout(() => {
    sealBtn.hidden = true;
    sheet.hidden = false;
    sheetOpen = true;
    sheet.scrollIntoView({ behavior: "smooth", block: "center" });
    renderLetterText(true);
  }, 450);
}

sealBtn.addEventListener("click", () => {
  if (sheetOpen) return;
  onQuizOk = openSheet;
  openQuiz();
});
sealBtn.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (!sheetOpen) { onQuizOk = openSheet; openQuiz(); } }
});

document.querySelectorAll("#quizOptions button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("wrong")) return;
    if (Number(btn.dataset.i) === QUIZ_CORRECT) {
      btn.classList.add("right");
      setTimeout(() => {
        closeQuiz();
        if (onQuizOk) onQuizOk();
        onQuizOk = null;
      }, 500);
    } else {
      btn.classList.add("wrong");
      btn.disabled = true;
      quizMsg.hidden = false;
      quizCard.classList.remove("shake");
      void quizCard.offsetWidth;
      quizCard.classList.add("shake");
    }
  });
});

applyLang(currentLang);