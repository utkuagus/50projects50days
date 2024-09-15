const countContainer = document.querySelector(".countdown-container")
const resultContainer = document.querySelector(".result-container")
const cycleContainer = document.querySelector(".cycle-container")
const repeat = document.querySelector(".repeat")

let sec = 3

setCountdown()

repeat.addEventListener("click", () => {
    resultContainer.classList.add("hidden")
    cycleContainer.classList.remove("hidden")

    sec = 3
    setCountdown()
})

function addMid() {
    document.querySelector(".countdown").classList.add("mid")
}

function addEnd() {
    if(sec == -1) {
        cycleContainer.classList.add("hidden")
        resultContainer.classList.remove("hidden")
        return
    }
    document.querySelector(".countdown").classList.add("end")
}

function reset() {
    document.querySelector(".countdown").classList = "countdown"

    countContainer.innerHTML = `<div class="countdown">${sec}</div>`

    sec--
}

function setCountdown() {
    reset()
    setTimeout(addMid, 1)
    setTimeout(addEnd, 1500)
    if(sec == -1) {
        return
    }
    setTimeout(setCountdown, 2500)
}