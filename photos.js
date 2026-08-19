/* ============================================================
   photos.js — tự tìm ảnh kỷ niệm cho cả 3 bản.
   Thứ tự ưu tiên: .jpg → .jpeg → .png → .webp → .svg
   Mỗi bản tìm trong 2 nơi:
     1) thư mục images/ của chính bản đó (demo/images, demo-b/images...)
     2) nếu không có thì dùng chung ảnh của bản A (demo/images)
   Vì vậy bạn chỉ cần bỏ ảnh thật (.jpg chẳng hạn) vào thư mục
   images/ của bản A với tên photo-1.jpg ... photo-6.jpg là
   cả 3 bản (A, B, C) đều hiển thị những ảnh đó.
   ============================================================ */

(function () {
  var EXTS = ["jpg", "jpeg", "png", "webp", "svg"];
  var LOCAL = "images/";
  var SHARED = "../demo/images/";

  window.photoQueue = function (index, customPath) {
    if (customPath) return [customPath];
    var q = [];
    EXTS.forEach(function (e) {
      q.push(LOCAL + "photo-" + (index + 1) + "." + e);
      q.push(SHARED + "photo-" + (index + 1) + "." + e);
    });
    return q;
  };

  /* Gán ảnh cho thẻ <img>: thử lần lượt từng đường dẫn, nếu tải
     lỗi thì chuyển sang đường dẫn tiếp theo. Không có ảnh nào
     khả dụng thì ẩn khung ảnh đi. */
  window.photoApply = function (img, index, customPath) {
    var q = window.photoQueue(index, customPath);
    var k = 0;
    var next = function () {
      if (k >= q.length) {
        img.classList.add("photo-missing");
        return;
      }
      img.onerror = next;
      img.src = q[k++];
    };
    next();
  };
})();