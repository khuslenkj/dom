const counter = document.getElementById("counter")
const message = document.getElementById("message")
const loadingBar = document.getElementById("loading-bar")

let startTime = null
const LOADING_DURATION_MS = 5000;
const messages = ["Preparing your space", "Bringing everything together", "Adding the finishing touches", "All set. Welcome in!"];

const renderProcess = (percentage) => {
    const roundedPecentage = Math.floor(percentage)

    const currentMessage = roundedPecentage >= 100 ? 3 : roundedPecentage >= 80 ? 2 : roundedPecentage >= 35 ? 1 : 0

    counter.textContent = roundedPecentage
    loadingBar.style.width = `${roundedPecentage}%`
    message.textContent = messages[currentMessage]
}

const updateProcess = (timestamp) => {
    if (!startTime) startTime = timestamp
    
    const percentage = Math.min(((timestamp - startTime) / LOADING_DURATION_MS) * 100, 100)

    renderProcess(percentage)

    if (percentage < 100) {
        requestAnimationFrame(updateProcess)
    }
}

requestAnimationFrame(updateProcess)