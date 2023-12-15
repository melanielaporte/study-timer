let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert("Take a walk!");
    resetTimer();
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  displayTime();
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  displayTime();
}

function displayTime() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
