const nextYear = new Date(new Date().getFullYear() + 1, 0);
const output = document.querySelectorAll('.countdown__number');

function countdown() {
  let currentTime = Date.now();
  let remainingTime = nextYear - currentTime;
  let formattedTime = getTimeStr(remainingTime);
  updateDisplay(formattedTime);
}

function getTimeStr(timeStr) {
  return [Math.floor(timeStr / (1000 * 60 * 60 * 24)),  // days
    Math.floor(timeStr / (1000 * 60 * 60) % 24),        // hours
    Math.floor(timeStr / (1000 * 60) % 60),             // minutes
    Math.floor(timeStr / 1000 % 60)];                   // seconds
}

function updateDisplay(timeArr) {
  output.forEach((element, i) => element.textContent = timeArr[i]);
}

countdown();
setInterval(countdown, 1000);