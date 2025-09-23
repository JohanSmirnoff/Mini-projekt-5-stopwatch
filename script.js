let startTime = 0;
let elapsedTime = 0;
let intervalID = null;
let running = false;


const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")
const resetButton = document.getElementById("reset-btn")
let timertime = document.getElementById("timertime")

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
            running = false
            startTime = "00:00:00"
            timertime.innerHTML = startTime
        }
    )
 











    
    // function stopTime() {
    // if (running === true) {
    //     clearInterval()
    // }

    //     for (timertime = 0; timertime < 1; timertime++) {
    //         timertime.textContent = (timertime)
    //         console.log(timertime)

    //     }
    // } else {
    //     clearInterval()
    // }

    
    

