const nextYear = new Date(new Date().getFullYear() + 1, 0);
const output = document.querySelectorAll('.digit_cur');

function countdown() {
  let currentTime = Date.now();
  let remainingTime = nextYear - currentTime;
  let formattedTime = getTimeStr(remainingTime);
  updateDisplay(formattedTime);
}

function getTimeStr(timeStr) {
  return [timeStr / (1000 * 60 * 60 * 24),        // days
          timeStr / (1000 * 60 * 60) % 24,        // hours
          timeStr / (1000 * 60) % 60,             // minutes
          timeStr / 1000 % 60]                    // seconds
    .map(el => Math.floor(el).toString().padStart(2, '0')).join('');
}

function updateDisplay(formattedTimeStr) {
  output.forEach((el, i) => {
    if (el.textContent !== formattedTimeStr[i]) {
      el.parentElement.classList.remove('translated');
      el.nextElementSibling.textContent = el.textContent;
      el.textContent = formattedTimeStr[i];
      el.parentElement.offsetWidth;
      el.parentElement.classList.add('translated');
    }
  });
}

countdown();
setInterval(countdown, 1000);