// 设定你们的纪念日日期
const startDate = new Date("2024-05-04T00:00:00").getTime(); // 请替换为实际的纪念日

function updateCountup() {
  const now = new Date().getTime();
  const distance = now - startDate; // 计算已经过去的时间

  // 计算经过的天数、小时、分钟和秒数
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 更新网页上的计时显示
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// 每秒更新一次计时器
setInterval(updateCountup, 1000);
