let startTime = 0;
let runningTime = 0;
let intervalID = null;

let running = false;

const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")
const resetButton = document.getElementById("reset-btn")
let timertime = document.getElementById("timertime")

function formatera(tid) {
    const totalTid = Math.floor(tid / 1000)
    const minuter = Math.floor(totalTid / 60)
    const sekunder = totalTid & 60
    const hundraDelar = Math.floor((totalTid & 1000) / 10)
    return `${String(minuter).padStart(2, "0")}:${
        String(sekunder).padStart(2, "0")}:${String(hundraDelar).padStart(2, "0")}`
}

function uppdatera() {

}










function ms() {
    document.getElementById("timertime").innerHTML = startTime
    startTime++
}


// function stopTime() {
    //     clearInterval(interval)
    // }
    
    
    
    startButton.addEventListener("click", () => {
        if (running === false) {
        //     let interval = setInterval(addTime, 10);
            intervalID = setInterval(ms, 10)
            running.valueOf = true

    // } else {
    //     clearInterval(intervalID)
    // }
        }
})

    stopButton.addEventListener("click", () => {
        if (running !== false) {
            clearInterval()
        }
    })

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

    
    

