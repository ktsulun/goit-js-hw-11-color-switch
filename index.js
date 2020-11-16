const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.body;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener(`click`, startColorSwitch);

function startColorSwitch() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    body.style.background =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

stopBtn.addEventListener(`click`, stopColorSwitch);

function stopColorSwitch() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}
