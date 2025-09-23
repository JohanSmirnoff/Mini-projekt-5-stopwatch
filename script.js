let startTime = 0;
let elapsedTime = 0;
let intervalID = null;
let running = false;
let laps = []

const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")
const resetButton = document.getElementById("reset-btn")
const lapButton = document.getElementById("lap-btn")
const timertime = document.getElementById("timertime")
const lapList = document.getElementById("lapLista")

    function formatera(tid) {
        const totalTid = Math.floor(tid / 1000)
        const minuter = Math.floor(totalTid / 60)
        const sekunder = totalTid % 60
        const hundraDelar = Math.floor((tid % 1000) / 10)
        return `${String(minuter).padStart(2, "0")}:${
            String(sekunder).padStart(2, "0")}:${String(hundraDelar).padStart(2, "0")}`
        }
        
        function uppdatera() {
            const nuvarandeTime = Date.now()
            const runningTime = nuvarandeTime - startTime
            timertime.textContent = formatera(runningTime)    
}
    
    startButton.addEventListener("click", () => {
        if (!running) {
            startTime = Date.now() - elapsedTime
            intervalID = setInterval(uppdatera, 10)
            running = true
        }
})

    stopButton.addEventListener("click", () => {
        if (running) {
            clearInterval(intervalID)
            elapsedTime = Date.now() - startTime
            running = false
        }
    })

    resetButton.addEventListener("click", () => {
            clearInterval(intervalID)
            intervalID = null
            running = false
            startTime = 0
            elapsedTime = 0
            timertime.textContent = "00:00:00"
            laps = []
            lapList.textContent = ""
            console.log(laps)
        })
    
    lapButton.addEventListener('click', () => {
        if(running === true){
            let lapTime = Date.now() - startTime
            laps.push(lapTime)
            const listItem = document.createElement("li")
            listItem.textContent = formatera(lapTime)
            lapList.appendChild(listItem)
        }
        console.log(laps)
    })
 // Vi är bäst