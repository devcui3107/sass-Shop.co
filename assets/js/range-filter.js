const minInput = document.getElementById("min-price");
const maxInput = document.getElementById("max-price");
const minTooltip = document.getElementById("min-tooltip");
const maxTooltip = document.getElementById("max-tooltip");
const container = document.querySelector(".range-slider");

function updateSlider() {
  let min = parseInt(minInput.value);
  let max = parseInt(maxInput.value);

  // Đảm bảo min không vượt max
  if (max < min) {
    [min, max] = [max, min];
  }

  // Cập nhật highlight range
  container.style.setProperty("--min", min);
  container.style.setProperty("--max", max);

  // Cập nhật nội dung tooltip
  minTooltip.textContent = `$${min}`;
  maxTooltip.textContent = `$${max}`;

  const trackPadding = 30;
  const trackWidth = container.offsetWidth - trackPadding * 2; // Chiều rộng của slider track trong vùng cho phép

  // Tính tỷ lệ vị trí của thumb (0 đến 1)
  const minRatio = min / 500;
  const maxRatio = max / 500;

  // Tính vị trí của chấm tròn (min và max)
  const minPos = trackPadding + (min / 500) * trackWidth;
  const maxPos = trackPadding + (max / 500) * trackWidth;

  // Đặt vị trí tooltip (transform: translateX(-50%) sẽ căn giữa)
  minTooltip.style.left = `${minPos}px`;
  maxTooltip.style.left = `${maxPos}px`;
}

function bringToFront(input) {
  minInput.style.zIndex = "3";
  maxInput.style.zIndex = "3";
  input.style.zIndex = "4";
}

// Lắng nghe sự kiện kéo chuột
minInput.addEventListener("input", () => {
  bringToFront(minInput);
  updateSlider();
});

maxInput.addEventListener("input", () => {
  bringToFront(maxInput);
  updateSlider();
});

// Khi thay đổi kích thước container
window.addEventListener("resize", updateSlider);

updateSlider(); // Chạy lần đầu tiên để căn chỉnh tooltip đúng vị trí
