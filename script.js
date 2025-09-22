let startTime = 0;
let intervalID = null;
let running = false;


const startButton = document.getElementById("start-btn")
const resetButton = document.getElementById("reset-btn")
let timertime = document.getElementById("timertime")

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
        } else {
            clearInterval(intervalID)
        }
    // } else {
    //     clearInterval(intervalID)
    // }













    
    // function stopTime() {
    // if (running === true) {
    //     clearInterval()
    // }
})

    //     for (timertime = 0; timertime < 1; timertime++) {
    //         timertime.textContent = (timertime)
    //         console.log(timertime)

    //     }
    // } else {
    //     clearInterval()
    // }

    
    

