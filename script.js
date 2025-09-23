let startTime = 0;
let intervalID = null;
let running = false;


const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")
const resetButton = document.getElementById("reset-btn")
let timertime = document.getElementById("timertime")

function ms() {
    document.getElementById("timertime").innerHTML = startTime
    startTime++
}
    
    
    startButton.addEventListener("click", () => {
        if (!running) {
            intervalID = setInterval(ms, 10)
            running = true
        }
})

    stopButton.addEventListener("click", () => {
        if (running) {
            clearInterval(intervalID)
            running = false
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

    
    

