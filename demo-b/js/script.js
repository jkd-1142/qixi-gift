const canvas = document.getElementById("lanterns");
const ctx = canvas.getContext("2d");
let dust = [];
let lanterns = [];
let petals = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initDust() {
  const count = Math.floor((canvas.width * canvas.height) / 9000);
  dust = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.3,
    a: Math.random() * 0.4 + 0.15,
    tw: Math.random() * 0.01 + 0.002,
    dir: Math.random() > 0.5 ? 1 : -1
  }));
}

function spawnLantern() {
  lanterns.push({
    x: Math.random() * canvas.width * 0.7 + canvas.width * 0.15,
    y: canvas.height + 40,
    vy: -(Math.random() * 0.35 + 0.28),
    vx: Math.sin(Math.random() * 6) * 0.18,
    w: Math.random() * 16 + 22,
    h: Math.random() * 14 + 18,
    life: 1
  });
}

function spawnPetal() {
  petals.push({
    x: Math.random() * canvas.width,
    y: -20,
    vx: Math.random() * 0.5 + 0.25,
    vy: Math.random() * 0.6 + 0.35,
    rot: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.05,
    s: Math.random() * 7 + 4,
    a: Math.random() * 0.4 + 0.5
  });
}

function drawDust() {
  for (const d of dust) {
    d.a += d.tw * d.dir;
    if (d.a > 0.55) d.dir = -1;
    if (d.a < 0.08) d.dir = 1;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(185, 138, 47, ${d.a})`;
    ctx.fill();
  }
}

function drawLanterns() {
  for (let i = lanterns.length - 1; i >= 0; i--) {
    const l = lanterns[i];
    l.x += l.vx;
    l.y += l.vy;
    l.life -= 0.0012;
    if (l.life <= 0 || l.y < -70) { lanterns.splice(i, 1); continue; }
    const glow = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.w * 1.6);
    glow.addColorStop(0, `rgba(232, 160, 122, ${0.35 * l.life})`);
    glow.addColorStop(1, "rgba(232, 160, 122, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(l.x, l.y, l.w * 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.fillStyle = `rgba(160, 30, 30, ${0.75 * l.life})`;
    ctx.fillRect(-l.w / 2, -l.h / 2, l.w, l.h);
    ctx.fillStyle = `rgba(255, 214, 130, ${0.9 * l.life})`;
    ctx.fillRect(-l.w / 3.4, -l.h / 3.4, l.w / 1.7, l.h / 1.7);
    ctx.restore();
  }
}

function drawPetals() {
  for (let i = petals.length - 1; i >= 0; i--) {
    const p = petals[i];
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    if (p.y > canvas.height + 20) { petals.splice(i, 1); continue; }
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, p.s, p.s * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(217, 123, 142, ${p.a})`;
    ctx.fill();
    ctx.restore();
  }
}

let petalTimer = null;
let lanternTimer = null;

function armSpawns() {
  clearInterval(petalTimer);
  clearInterval(lanternTimer);
  petalTimer = setInterval(spawnPetal, 900);
  lanternTimer = setInterval(() => { if (Math.random() < 0.8) spawnLantern(); }, 3500);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDust();
  drawPetals();
  drawLanterns();
  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  initDust();
});

resizeCanvas();
initDust();
armSpawns();
draw();

const I18N = {
  vi: {
    eyebrow: "Ngưu Lang và Chức Nữ · mỗi năm gặp một lần",
    vertLeft: "Ngân Hà xa thẳm",
    vertRight: "Ngày hẹn như mộng",
    subtitle: "Bức thư tình gửi về phía bên kia dải Ngân Hà, cho em, Lan",
    cdLabel: "Còn lại đến đêm Thất Tịch",
    cdDays: "Ngày", cdHours: "Giờ", cdMins: "Phút", cdSecs: "Giây",
    todayLine: "Hôm nay là đêm Thất Tịch, đêm Ngưu Lang và Chức Nữ gặp nhau",
    todaySub: "cũng là đêm anh muốn nói với em một điều…",
    galleryTitle: "Kỷ niệm của chúng mình",
    gallerySub: "Những khoảnh khắc đã làm nên câu chuyện của hai ta",
    cap1: "Ngày đầu tiên gặp em", cap2: "Buổi hẹn đầu tiên",
    cap3: "Trái tim anh thuộc về em", cap4: "Chuyến đi của chúng mình",
    cap5: "Khoảnh khắc bên nhau", cap6: "Và cả tương lai nữa",
    letterTitle: "Lời anh muốn nói",
    letterSub: "Hãy gỡ con dấu để mở lá thư",
    sealHint: "Chạm vào con dấu · mở thư",
    letterHead: "Em yêu dấu,",
    letterP1: "Đêm Thất Tịch, người ta nhìn lên trời để ngóng Ngưu Lang và Chức Nữ. Còn anh nhìn lên trời, chỉ để tìm thấy bóng dáng em mỉm cười nơi nào đó.",
    letterP2: "Cảm ơn em đã đến bên anh, biến những ngày bình thường thành những ngày đáng nhớ. Anh không cần một năm một lần được gặp. Anh chỉ ước mỗi sáng thức dậy, người anh gặp đầu tiên vẫn là em.",
    letterP3: "Nguyện mỗi mùa Thất Tịch đều có em bên cạnh. Yêu em, hôm nay, và cả đời sau.",
    letterSign: "- Anh yêu em · Minh",
    footerLine: "Viết nhân dịp Thất Tịch, mùng 7 tháng 7, dưới dải Ngân Hà",
    bridgeTitle: "Cầu Ô Thước · Nối đôi bờ Ngân Hà",
    bridgeSub: "Giữ nút để gọi đàn chim Ô Thước dệt cầu, đưa Ngưu Lang và Chức Nữ về bên nhau",
    bridgeHint: "Giữ nút phía dưới để gọi chim dệt cầu",
    holdLabel: "Giữ nút tại đây để gọi đàn chim",
    bridgeDone: "Ô Thước dệt cầu, Ngưu Lang và Chức Nữ gặp nhau. Như anh và em, dù bao xa vẫn về bên nhau",
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
    vertLeft: "銀漢迢迢",
    vertRight: "佳期如夢",
    subtitle: "寄往星河彼岸的一封情書，親愛的蘭",
    cdLabel: "距離七夕之夜還有",
    cdDays: "日", cdHours: "時", cdMins: "分", cdSecs: "秒",
    todayLine: "今夜便是七夕，牛郎織女來相會",
    todaySub: "也是我，想對妳說一句話的夜晚…",
    galleryTitle: "我們的回憶",
    gallerySub: "那些讓我們的愛情成形的每一刻",
    cap1: "初次相遇的那天", cap2: "我們的第一次約會",
    cap3: "我的心屬於妳", cap4: "屬於我們的旅行",
    cap5: "相處的每一刻", cap6: "還有我們的未來",
    letterTitle: "想對妳說的話",
    letterSub: "請揭開封印，開啟這封錦書",
    sealHint: "輕觸印章 · 開啟情書",
    letterHead: "親愛的蘭：",
    letterP1: "七夕之夜，別人仰望星河，是為了牛郎與織女。而我仰望星河，只想找到妳微笑的身影。",
    letterP2: "謝謝妳走進我的生命，讓平凡的日子都變成難忘的風景。我不需要一年一度的相會，我只願每個清晨醒來，第一個見到的人仍是妳。",
    letterP3: "願年年七夕，與君同在。愛妳，今天，還有永遠。",
    letterSign: "- 永遠愛妳 · 明",
    footerLine: "寫於七夕，七月初七之夜，星河之下",
    bridgeTitle: "鵲橋 · 橫跨銀河",
    bridgeSub: "按住按鈕，呼喚喜鵲搭成鵲橋，讓牛郎與織女重逢",
    bridgeHint: "按住下方按鈕呼喚喜鵲",
    holdLabel: "按住此處呼喚喜鵲",
    bridgeDone: "喜鵲搭橋，牛郎織女相會。就像我們，無論多遠終會重逢",
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

const sealBtn = document.getElementById("sealBtn");
const letterCard = document.getElementById("letterCard");

function openLetter() {
  if (!letterCard.hidden) return;
  sealBtn.classList.add("burst");
  sealBtn.querySelector(".seal-hint").style.opacity = "0";
  setTimeout(() => {
    sealBtn.hidden = true;
    letterCard.hidden = false;
    letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 550);
}

function onClickSeal() {
  if (!letterCard.hidden) return;
  onQuizOk = openLetter;
  openQuiz();
}

sealBtn.addEventListener("click", onClickSeal);
sealBtn.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClickSeal(); }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const bCvs = document.getElementById("bridgeCanvas");
const bctx = bCvs.getContext("2d");
let holding = false;
let bProg = 0;
let bState = "idle";
let bLast = 0;
let bhearts = [];
let figL = 0;
let figR = 0;

function sizeBridge() {
  const dpr = window.devicePixelRatio || 1;
  const rect = bCvs.parentElement.getBoundingClientRect();
  bCvs.width = rect.width * dpr;
  bCvs.height = Math.max(300, Math.min(430, rect.width * 0.5)) * dpr;
  bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  bCvs.style.height = bCvs.height / dpr + "px";
  figL = bW() * 0.12;
  figR = bW() * 0.88;
}

function bW() { return bCvs.width / (window.devicePixelRatio || 1); }
function bH() { return bCvs.height / (window.devicePixelRatio || 1); }

function heartPath(ctx, x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y + s * 0.3);
  ctx.bezierCurveTo(x - s, y - s * 0.4, x - s * 0.35, y - s, x, y - s * 0.25);
  ctx.bezierCurveTo(x + s * 0.35, y - s, x + s, y - s * 0.4, x, y + s * 0.3);
  ctx.closePath();
}

function drawFigure(ctx, x, groundY, robe, skin, isFemale) {
  const s = Math.min(bW(), bH()) / 9;
  ctx.fillStyle = robe;
  ctx.beginPath();
  ctx.moveTo(x - s * 0.5, groundY);
  ctx.quadraticCurveTo(x - s * 0.42, groundY - s * 1.4, x, groundY - s * 1.5);
  ctx.quadraticCurveTo(x + s * 0.42, groundY - s * 1.4, x + s * 0.5, groundY);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.arc(x, groundY - s * 1.85, s * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2b2117";
  ctx.beginPath();
  ctx.arc(x, groundY - s * 1.95, s * 0.26, Math.PI, Math.PI * 2);
  ctx.fill();
  if (isFemale) {
    ctx.fillStyle = "#7d1616";
    ctx.beginPath();
    ctx.arc(x, groundY - s * 1.78, s * 0.14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(125, 22, 22, 0.75)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + s * 0.45, groundY - s * 0.5);
    ctx.quadraticCurveTo(x + s * 0.85, groundY - s * 1.1, x + s * 0.7, groundY - s * 1.7);
    ctx.stroke();
  }
}

function drawBird(ctx, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#4a3a28";
  ctx.beginPath();
  ctx.ellipse(0, 0, 7, 4.6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#b98a2f";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-2, -1);
  ctx.quadraticCurveTo(-9, -6, -13, -3);
  ctx.moveTo(2, -1);
  ctx.quadraticCurveTo(9, -6, 13, -3);
  ctx.stroke();
  ctx.fillStyle = "#c9a04a";
  ctx.beginPath();
  ctx.arc(-9, -2.5, 1.4, 0, Math.PI * 2);
  ctx.arc(9, -2.5, 1.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

const MAGPIES = 16;

function drawBridgeGame() {
  const W = bW();
  const H = bH();
  const archX = W * 0.3;
  const archW = W * 0.4;
  const archY = H * 0.62;
  const archH = H * 0.3;
  bctx.clearRect(0, 0, W, H);
  const sky = bctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, "#fdf4df");
  sky.addColorStop(1, "#f2e2c0");
  bctx.fillStyle = sky;
  bctx.fillRect(0, 0, W, H);
  bctx.fillStyle = "#e9d3a4";
  bctx.fillRect(0, archY + 4, archX, H - archY);
  bctx.fillRect(archX + archW, archY + 4, W - archX - archW, H - archY);
  bctx.strokeStyle = "rgba(58, 42, 26, 0.35)";
  bctx.lineWidth = 2;
  bctx.beginPath();
  bctx.moveTo(0, archY + 4);
  bctx.lineTo(archX, archY + 4);
  bctx.moveTo(archX + archW, archY + 4);
  bctx.lineTo(W, archY + 4);
  bctx.stroke();
  bctx.strokeStyle = "rgba(163, 32, 32, 0.5)";
  bctx.lineWidth = 3;
  bctx.beginPath();
  bctx.moveTo(archX, archY + 4);
  bctx.quadraticCurveTo(archX + archW / 2, archY + 40, archX + archW, archY + 4);
  bctx.stroke();
  bctx.strokeStyle = "rgba(163, 32, 32, 0.3)";
  bctx.lineWidth = 2.5;
  bctx.beginPath();
  bctx.moveTo(archX + 6, archY + 10);
  bctx.quadraticCurveTo(archX + archW / 2, archY + 46, archX + archW - 6, archY + 10);
  bctx.stroke();

  const pct = Math.min(bProg, 100);
  const n = Math.floor(pct / 100 * MAGPIES);
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / MAGPIES;
    const x = archX + t * archW;
    const y = archY - Math.sin(t * Math.PI) * archH;
    drawBird(bctx, x, y, Math.PI);
  }
  if (pct > 0 && pct < 100) {
    bctx.fillStyle = "rgba(185, 138, 47, 0.6)";
    bctx.beginPath();
    bctx.arc(archX + pct / 100 * archW, archY - Math.sin(pct / 100 * Math.PI) * archH, 4, 0, Math.PI * 2);
    bctx.fill();
  }
  if (pct >= 100) {
    const grad = bctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "rgba(185, 138, 47, 0)");
    grad.addColorStop(0.5, "rgba(224, 200, 135, 0.9)");
    grad.addColorStop(1, "rgba(185, 138, 47, 0)");
    bctx.strokeStyle = grad;
    bctx.lineWidth = 3;
    bctx.beginPath();
    bctx.moveTo(archX, archY + 2);
    bctx.quadraticCurveTo(archX + archW / 2, archY - archH, archX + archW, archY + 2);
    bctx.stroke();
  }

  const groundY = H * 0.82;
  figL += ((W * 0.5 - bW() * 0.06) - figL) * (bState === "reunite" ? 0.06 : 0);
  figR += ((W * 0.5 + bW() * 0.06) - figR) * (bState === "reunite" ? 0.06 : 0);
  drawFigure(bctx, figL, groundY, "#3a4a6e", "#e8b48c", false);
  drawFigure(bctx, figR, groundY, "#c04874", "#f2cdb0", true);

  for (let i = bhearts.length - 1; i >= 0; i--) {
    const h = bhearts[i];
    h.y -= 0.8;
    h.x += Math.sin(h.t * 0.05) * 0.6;
    h.life -= 0.006;
    h.t++;
    if (h.life <= 0) { bhearts.splice(i, 1); continue; }
    bctx.globalAlpha = h.life;
    heartPath(bctx, h.x, h.y, h.s);
    bctx.fillStyle = h.color;
    bctx.fill();
    bctx.globalAlpha = 1;
  }

  requestAnimationFrame(drawBridgeGame);
}

function bridgeTick(ts) {
  if (!bLast) bLast = ts;
  const dt = ts - bLast;
  bLast = ts;
  if (holding && bState === "idle") {
    bProg += dt / 4200 * 100;
    document.getElementById("bridgePct").textContent = Math.min(Math.round(bProg), 100);
    if (bProg >= 100) {
      bProg = 100;
      bState = "reunite";
      holding = false;
      document.getElementById("holdBtn").classList.remove("active");
      document.querySelector(".bridge-hud").style.opacity = "0";
      setTimeout(() => {
        for (let i = 0; i < 16; i++) {
          bhearts.push({
            x: bW() * 0.5,
            y: bH() * 0.5,
            s: Math.random() * 8 + 5,
            life: 1,
            color: Math.random() > 0.5 ? "#d97b8e" : "#c9a04a",
            t: 0
          });
        }
        document.getElementById("bridgeDone").hidden = false;
        setTimeout(() => { bState = "done"; }, 1200);
      }, 1400);
    }
  }
  requestAnimationFrame(bridgeTick);
}

const holdBtn = document.getElementById("holdBtn");
holdBtn.addEventListener("pointerdown", e => {
  e.preventDefault();
  if (bState !== "idle" || !document.getElementById("bridge").classList.contains("visible")) return;
  holding = true;
  holdBtn.classList.add("active");
});
window.addEventListener("pointerup", () => { holding = false; holdBtn.classList.remove("active"); });
window.addEventListener("pointercancel", () => { holding = false; holdBtn.classList.remove("active"); });

document.getElementById("bridgeNext").addEventListener("click", () => {
  document.getElementById("bridgeDone").hidden = true;
  const g = document.querySelector(".gallery");
  if (g) g.scrollIntoView({ behavior: "smooth" });
});

sizeBridge();
window.addEventListener("resize", sizeBridge);
requestAnimationFrame(bridgeTick);
drawBridgeGame();

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

applyLang(currentLang);