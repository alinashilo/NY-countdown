let currentYear = new Date().getFullYear();
const nextYear = new Date(currentYear + 1, 0);

const daysOutput = document.querySelector('#days');
const hoursOutput = document.querySelector('#hours');
const minutesOutput = document.querySelector('#minutes');
const secondsOutput = document.querySelector('#seconds');

function countdown() {
  let currentTime = new Date();
  let distance = nextYear - currentTime;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance / (1000 * 60 * 60) % 24);
  let minutes = Math.floor(distance / (1000 * 60) % 60);
  let seconds = Math.floor(distance / 1000 % 60);
  daysOutput.textContent = `${days}`;
  hoursOutput.textContent = `${hours}`;
  minutesOutput.textContent = `${minutes}`;
  secondsOutput.textContent = `${seconds}`;
}

countdown();
setInterval(countdown, 1000);