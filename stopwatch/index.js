const startButton = document.getElementById("start-button")
const pauseButton = document.getElementById("pause-button")
const resetButton = document.getElementById("reset-button")
const displaySeconds = document.getElementById("seconds")
const displayMinutes = document.getElementById("minutes")
const displayHours = document.getElementById("hours")
const state = document.getElementById("state")

let intervalid;
let startTime = 0

const formatTime = (startTime) => {
    const seconds = Math.floor(startTime % 60).toString().padStart(2, "0")
    const minutes = Math.floor((startTime % 3600) / 60).toString().padStart(2, "0")
    const hours = Math.floor(startTime / 3600).toString().padStart(2, "0")

    displayHours.textContent = hours
    displayMinutes.textContent = minutes
    displaySeconds.textContent = seconds
}

const resetTimer = () => {
    clearInterval(intervalid)

    startTime = 0;
    formatTime(startTime)

    startButton.disabled = false
    pauseButton.disabled = true
    resetButton.disabled = true
    state.textContent = "Ready"
    startButton.textContent = "Start"
}

const pauseTimer = () => {
    clearInterval(intervalid)

    startButton.disabled = false
    pauseButton.disabled = true
    resetButton.disabled = false
    state.textContent = "Paused"
    startButton.textContent = "Resume"
}

const startTimer = () => {
    intervalid = setInterval(() => {
        startTime++
        formatTime(startTime)
    }, 1000)

    startButton.disabled = true
    pauseButton.disabled = false
    resetButton.disabled = false
    state.textContent = "Running"
}

resetButton.addEventListener("click", resetTimer)
pauseButton.addEventListener("click", pauseTimer)
startButton.addEventListener("click", startTimer)