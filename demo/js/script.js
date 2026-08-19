const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];
let meteors = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  const count = Math.floor((canvas.width * canvas.height) / 4200);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.3,
    a: Math.random() * 0.7 + 0.3,
    tw: Math.random() * 0.02 + 0.004,
    dir: Math.random() > 0.5 ? 1 : -1
  }));
}

function spawnMeteor() {
  meteors.push({
    x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
    y: Math.random() * canvas.height * 0.35,
    vx: -(Math.random() * 3 + 2.2),
    vy: Math.random() * 1.4 + 1.2,
    life: 1,
    len: Math.random() * 90 + 60
  });
}

function drawMeteors() {
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];
    m.x += m.vx;
    m.y += m.vy;
    m.life -= 0.012;
    if (m.life <= 0) { meteors.splice(i, 1); continue; }
    const tailX = m.x - m.vx * (m.len / 12);
    const tailY = m.y - m.vy * (m.len / 12);
    const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
    grad.addColorStop(0, `rgba(246, 227, 180, ${m.life})`);
    grad.addColorStop(1, "rgba(246, 227, 180, 0)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    s.a += s.tw * s.dir;
    if (s.a > 0.9) s.dir = -1;
    if (s.a < 0.15) s.dir = 1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(240, 238, 235, ${s.a})`;
    ctx.fill();
  }
  drawMeteors();
  requestAnimationFrame(draw);
}

let meteorTimer = null;

function armMeteors() {
  clearInterval(meteorTimer);
  meteorTimer = setInterval(() => {
    if (Math.random() < 0.75) spawnMeteor();
  }, 2600);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  initStars();
});

resizeCanvas();
initStars();
armMeteors();
draw();

const I18N = {
  vi: {
    eyebrow: "Ngưu Lang và Chức Nữ · mỗi năm gặp một lần",
    subtitle: "Gửi đến em, người anh yêu nhất trên đời",
    cdLabel: "Còn lại đến đêm Thất Tịch",
    cdDays: "Ngày", cdHours: "Giờ", cdMins: "Phút", cdSecs: "Giây",
    todayLine: "Hôm nay là đêm Thất Tịch, đêm của Ngưu Lang và Chức Nữ",
    todaySub: "và cũng là đêm anh muốn nói với em một điều…",
    galleryTitle: "Kỷ niệm của chúng mình",
    gallerySub: "Những khoảnh khắc đã làm nên câu chuyện của hai ta",
    cap1: "Ngày đầu tiên gặp em", cap2: "Buổi hẹn đầu tiên",
    cap3: "Trái tim anh thuộc về em", cap4: "Chuyến đi của chúng mình",
    cap5: "Khoảnh khắc bên nhau", cap6: "Và cả tương lai nữa",
    letterTitle: "Lời anh muốn nói",
    letterSub: "Hãy chạm vào trái tim này để mở lá thư",
    heartHint: "Chạm vào trái tim",
    letterHead: "Lan yêu dấu,",
    letterP1: "Đêm Thất Tịch, người ta nhìn lên trời để ngóng Ngưu Lang và Chức Nữ. Còn anh nhìn lên trời, chỉ để thấy em đang mỉm cười ở một nơi nào đó.",
    letterP2: "Cảm ơn em đã đến bên anh, biến những ngày bình thường thành những ngày đáng nhớ. Anh không cần cầu nguyện cho một năm một lần được gặp. Anh chỉ ước mỗi sáng thức dậy, người anh gặp đầu tiên vẫn là em.",
    letterP3: "Yêu em, hôm nay, và cả đời sau.",
    letterSign: "- Anh yêu em",
    footerLine: "Viết nhân dịp Thất Tịch, mùng 7 tháng 7, dưới dải Ngân Hà",
    gameTitle: "Trời sao rơi, bảy lời yêu",
    gameSub: "Chạm vào sao băng để gom đủ 7 lời anh muốn nói với em",
    gameHint: "Chạm vào sao băng đang rơi",
    doneMsg: "Bảy vì sao băng đã thắp sáng bầu trời, như bảy năm anh chờ em.",
    continueBtn: "Tiếp tục xem kỷ niệm của anh và em",
    quizTitle: "Mật khẩu tình yêu",
    quizQ: "Chúng ta gặp nhau lần đầu trong dịp nào?",
    quizA1: "Một mùa hè ở biển",
    quizA2: "Trong một đêm mưa sao băng",
    quizA3: "Ngày khai giảng",
    quizA4: "Tại một quán cà phê",
    quizWrong: "Chưa đúng rồi… nhưng anh vẫn yêu em. Thử lại nhé ♥"
  },
  zh: {
    eyebrow: "牛郎織女 · 七月初七又相逢",
    subtitle: "致我最愛的人，親愛的妳",
    cdLabel: "距離七夕之夜還有",
    cdDays: "天", cdHours: "時", cdMins: "分", cdSecs: "秒",
    todayLine: "今夜就是七夕，牛郎與織女相會之夜",
    todaySub: "也是我，想對妳說一句話的夜晚…",
    galleryTitle: "我們的回憶",
    gallerySub: "那些讓我們的愛情成形的每一刻",
    cap1: "初次相遇的那天", cap2: "我們的第一次約會",
    cap3: "我的心屬於妳", cap4: "屬於我們的旅行",
    cap5: "相處的每一刻", cap6: "還有我們的未來",
    letterTitle: "想對妳說的話",
    letterSub: "請觸碰這顆心，打開這封信",
    heartHint: "觸碰我的心",
    letterHead: "親愛的蘭，",
    letterP1: "七夕之夜，別人仰望星河，是為了牛郎與織女。而我仰望星河，只想找到妳微笑的身影。",
    letterP2: "謝謝妳走進我的生命，讓平凡的日子都變成難忘的風景。我不需要一年一度的相會，我只願每個清晨醒來，第一個見到的人仍是妳。",
    letterP3: "愛妳，今天，還有永遠。",
    letterSign: "永遠愛妳",
    footerLine: "寫於七夕，七月初七之夜，星河之下",
    gameTitle: "流星雨落，七句情話",
    gameSub: "輕觸流星，收集七句我想對妳說的話",
    gameHint: "點擊墜落的流星",
    doneMsg: "七顆流星點亮夜空，就像我等待妳的歲月。",
    continueBtn: "繼續看我們的回憶",
    quizTitle: "愛情密碼",
    quizQ: "我們第一次見面是在什麼時候？",
    quizA1: "海邊的那個夏天",
    quizA2: "流星雨的那個夜晚",
    quizA3: "開學典禮上",
    quizA4: "一間咖啡館",
    quizWrong: "不對……但我依然愛妳。再試一次 ♥"
  }
};

let currentLang = localStorage.getItem("qixi-lang") || "vi";

/* áp dụng nội dung người dùng tự sửa trong ../content.js */
if (typeof CONTENT !== "undefined") {
  if (CONTENT.vi) Object.assign(I18N.vi, CONTENT.vi);
  if (CONTENT.zh) Object.assign(I18N.zh, CONTENT.zh);
}
/* ảnh: tự tìm photo-N.jpg/png/webp/svg trong images/ (xem ../photos.js) */
document.querySelectorAll(".card img").forEach((img, i) => {
  window.photoApply(img, i, typeof CONTENT !== "undefined" && CONTENT.photos && CONTENT.photos[i]);
});

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
  if (typeof CONTENT !== "undefined" && CONTENT.names && CONTENT.names[lang] && CONTENT.names[lang].length >= 2) {
    const nameEls = document.querySelectorAll(".name");
    if (nameEls.length >= 2) {
      nameEls[0].textContent = CONTENT.names[lang][0];
      nameEls[1].textContent = CONTENT.names[lang][1];
    }
  }
  localStorage.setItem("qixi-lang", lang);
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(currentLang === "vi" ? "zh" : "vi");
});

const TARGET = new Date((typeof CONTENT !== "undefined" && CONTENT.targetDate) || "2026-08-19T00:00:00+07:00");
const countdownEl = document.getElementById("countdown");
const bannerEl = document.getElementById("todayBanner");

function tick() {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    countdownEl.hidden = true;
    bannerEl.hidden = false;
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const mins = Math.floor(diff / 60000) % 60;
  const secs = Math.floor(diff / 1000) % 60;
  const pad = n => String(n).padStart(2, "0");
  document.getElementById("cdDays").textContent = days;
  document.getElementById("cdHours").textContent = pad(hours);
  document.getElementById("cdMins").textContent = pad(mins);
  document.getElementById("cdSecs").textContent = pad(secs);
}

tick();
setInterval(tick, 1000);

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
const captions = {};

document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.dataset.i18n;
  if (key.startsWith("cap")) captions[key] = el.textContent;
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const key = "cap" + card.dataset.photo;
    lbImg.src = card.querySelector("img").src;
    lbImg.alt = card.querySelector("img").alt;
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

const heartBtn = document.getElementById("heartBtn");
const letterCard = document.getElementById("letterCard");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const gameCvs = document.getElementById("gameCanvas");
const gctx = gameCvs.getContext("2d");
let falls = [];
let bursts = [];
let gCaught = 0;
let gDone = false;
let gStarted = false;
let gOverlay = false;

const STAR_MSGS = {
  vi: [
    "Câu 1 thì sẽ nói yêu vợ nhiều",
    "Dù em quá dữ nhưng vẫn là iem pé của anh",
    "Mỗi ngày khi không có em",
    "Anh không có biết thời gian hiện tại la gì",
    "Nhưng em ở bên cạnh anh thì",
    "Ngày nào cũng là mùa xuân cả",
    "Bảy sao đã tụ · Yêu em cả đời"
  ],
  zh: [
    "想起妳 · 從第一顆星開始",
    "妳讓我的心第一次跳動",
    "有妳的每一天都是春天",
    "妳的笑容比星空更美",
    "我願愛妳很久很久",
    "妳是我今生想珍藏的人",
    "七星已聚 · 我的心屬於妳"
  ]
};

if (typeof CONTENT !== "undefined" && CONTENT.phrases) {
  if (CONTENT.phrases.vi) STAR_MSGS.vi = CONTENT.phrases.vi;
  if (CONTENT.phrases.zh) STAR_MSGS.zh = CONTENT.phrases.zh;
}

function sizeGameCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = gameCvs.parentElement.getBoundingClientRect();
  gameCvs.width = rect.width * dpr;
  gameCvs.height = Math.max(300, Math.min(420, rect.width * 0.52)) * dpr;
  gctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  gameCvs.style.height = gameCvs.height / dpr + "px";
}

function gameW() { return gameCvs.width / (window.devicePixelRatio || 1); }
function gameH() { return gameCvs.height / (window.devicePixelRatio || 1); }

function spawnFall() {
  if (!gStarted || gDone || gOverlay || falls.length >= 7) return;
  falls.push({
    x: Math.random() * gameW() * 0.75 + gameW() * 0.05,
    y: -20,
    vx: (Math.random() - 0.55) * 1.4,
    vy: Math.random() * 1.2 + 2.6,
    rot: Math.random() * 30 - 15,
    len: Math.random() * 60 + 40
  });
}

function burstAt(x, y, n) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = Math.random() * 3 + 1.5;
    bursts.push({
      x, y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: 1,
      decay: 0.03 + Math.random() * 0.02
    });
  }
}

function showToast(msg) {
  const t = document.createElement("div");
  t.className = "game-toast";
  t.textContent = msg;
  document.getElementById("gameToasts").appendChild(t);
  setTimeout(() => t.classList.add("out"), 2400);
  setTimeout(() => t.remove(), 2900);
}

function catchStar(i) {
  const m = falls[i];
  falls.splice(i, 1);
  burstAt(m.x, m.y, 14);
  gCaught++;
  document.getElementById("gameScore").textContent = gCaught;
  showToast(STAR_MSGS[currentLang][gCaught - 1]);
  if (gCaught >= 7) {
    gDone = true;
    setTimeout(() => {
      gOverlay = true;
      document.getElementById("gameDone").hidden = false;
      document.querySelector(".game-hud").style.opacity = "0";
    }, 700);
  }
}

gameCvs.addEventListener("pointerdown", e => {
  if (!gStarted || gDone || gOverlay) return;
  const rect = gameCvs.getBoundingClientRect();
  const px = e.clientX - rect.left;
  const py = e.clientY - rect.top;
  let best = -1;
  let bestD = 40;
  falls.forEach((m, idx) => {
    const d = Math.hypot(m.x - px, m.y - py);
    if (d < bestD) { bestD = d; best = idx; }
  });
  if (best >= 0) catchStar(best);
});

document.getElementById("gameNext").addEventListener("click", () => {
  document.getElementById("gameDone").hidden = true;
  gOverlay = false;
  const g = document.querySelector(".gallery");
  if (g) g.scrollIntoView({ behavior: "smooth" });
});

function drawGame() {
  const W = gameW();
  const H = gameH();
  gctx.clearRect(0, 0, W, H);
  const grad = gctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(10, 16, 32, 0.55)");
  grad.addColorStop(1, "rgba(7, 11, 20, 0.35)");
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, W, H);
  for (let i = falls.length - 1; i >= 0; i--) {
    const m = falls[i];
    m.x += m.vx;
    m.y += m.vy;
    if (m.y > H + 40 || m.x < -60 || m.x > W + 60) { falls.splice(i, 1); continue; }
    const tailX = m.x - m.vx * 7;
    const tailY = m.y - m.vy * 7;
    gctx.save();
    gctx.translate(m.x, m.y);
    gctx.rotate((m.rot * Math.PI) / 180);
    gctx.strokeStyle = "rgba(246, 227, 180, 0.75)";
    gctx.lineWidth = 2;
    gctx.beginPath();
    gctx.moveTo(0, 0);
    gctx.lineTo(-m.len, 0);
    gctx.stroke();
    gctx.fillStyle = "#ffe9b8";
    gctx.shadowColor = "#ffe9b8";
    gctx.shadowBlur = 16;
    gctx.fillRect(-5, -5, 10, 10);
    gctx.shadowBlur = 0;
    gctx.restore();
  }
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i];
    b.x += b.vx;
    b.y += b.vy;
    b.life -= b.decay;
    if (b.life <= 0) { bursts.splice(i, 1); continue; }
    gctx.beginPath();
    gctx.arc(b.x, b.y, 2.2, 0, Math.PI * 2);
    gctx.fillStyle = `rgba(232, 160, 176, ${b.life})`;
    gctx.fill();
  }
  requestAnimationFrame(drawGame);
}

sizeGameCanvas();
window.addEventListener("resize", sizeGameCanvas);
setInterval(() => { if (!gDone && !gOverlay) spawnFall(); }, 620);
drawGame();

const gameObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !gStarted) {
      gStarted = true;
      gameObs.disconnect();
    }
  });
}, { threshold: 0.35 });

gameObs.observe(document.getElementById("gameA"));

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

function revealLetter() {
  heartBtn.classList.add("burst");
  heartBtn.querySelector(".heart-hint").style.opacity = "0";
  setTimeout(() => {
    heartBtn.hidden = true;
    letterCard.hidden = false;
    letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 550);
}

heartBtn.addEventListener("click", () => {
  if (!letterCard.hidden) return;
  onQuizOk = revealLetter;
  openQuiz();
});

applyLang(currentLang);
