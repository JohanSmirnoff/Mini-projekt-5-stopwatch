let startTime = 0;
let elapsedTime = 0;
let intervalID = null;
let running = false;
let laps = [];

const startButton = document.getElementById("start-btn");
// const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");
const lapButton = document.getElementById("lap-btn");
const timertime = document.getElementById("timertime");
const lapList = document.getElementById("lapLista");

// Formaterar tid som mm:ss:ms
function formatera(tid) {
  const totalTid = Math.floor(tid / 1000);
  const minuter = Math.floor(totalTid / 60);
  const sekunder = totalTid % 60;
  const hundraDelar = Math.floor((tid % 1000) / 10);
  return `${String(minuter).padStart(2, "0")}:${String(sekunder).padStart(2, "0")}:${String(hundraDelar).padStart(2, "0")}`;
}

// Uppdaterar display med tiden
function uppdatera() {
  const nuvarandeTime = Date.now();
  const runningTime = nuvarandeTime - startTime;
  timertime.textContent = formatera(runningTime);
}

// Startknappen
startButton.addEventListener("click", () => {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    intervalID = setInterval(uppdatera, 10);
    running = true;
    startButton.textContent = "Pause"
    startButton.classList.remove("start");
    startButton.classList.add("stop");
  }
  else {
    clearInterval(intervalID);
    elapsedTime = Date.now() - startTime;
    running = false;
    startButton.textContent = "Start"
    startButton.classList.remove("stop");
    startButton.classList.add("start");
  }
});

// Gammal knapp
// // Stoppknappen
// stopButton.addEventListener("click", () => {
//   if (running) {
//     clearInterval(intervalID);
//     elapsedTime = Date.now() - startTime;
//     running = false;
//   }
// });

// Resetknappen
resetButton.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = null;
  running = false;
  startTime = 0;
  elapsedTime = 0;
  timertime.textContent = "00:00:00";
  laps = [];
  lapList.textContent = "";
  startButton.textContent = "Start"
  startButton.classList.remove("stop");
  startButton.classList.add("start");
});

// Lapknappen
lapButton.addEventListener("click", () => {
  if (running === true) {
    let lapTime = Date.now() - startTime;
    laps.push(lapTime);
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Lap ${laps.length}:</strong> ${formatera(lapTime)}`;
    lapList.appendChild(listItem);
  }
});

// Vi är bäst
