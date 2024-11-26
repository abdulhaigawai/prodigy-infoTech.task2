let isRunning = false;
let timer;
let time = 0; // Time in seconds
let lapTimes = [];

const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapTimesDisplay = document.getElementById('lapTimes');

// Function to update the time display
function updateDisplay() {
  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to start the stopwatch
function startStopwatch() {
  timer = setInterval(() => {
    time++;
    updateDisplay();
  }, 1000);
}

// Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(timer);
}

// Function to toggle the start/stop button
function toggleStartStop() {
  if (isRunning) {
    stopStopwatch();
    startStopBtn.textContent = 'Start';
  } else {
    startStopwatch();
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
}

// Function to reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  time = 0;
  lapTimes = [];
  updateDisplay();
  lapTimesDisplay.innerHTML = '';
  startStopBtn.textContent = 'Start';
  isRunning = false;
}

// Function to record lap times
function recordLap() {
  if (isRunning) {
    lapTimes.push(time);
    const lapTimeDisplay = document.createElement('div');
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    lapTimeDisplay.textContent = `Lap ${lapTimes.length}: ${hours}:${minutes}:${seconds}`;
    lapTimesDisplay.appendChild(lapTimeDisplay);
  }
}

// Event Listeners for the buttons
startStopBtn.addEventListener('click', toggleStartStop);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);