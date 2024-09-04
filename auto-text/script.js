const speedEl = document.querySelector(".speed-value")
const textEl = document.querySelector(".text")

const TEXT_CONTENT = "We Love Programming!"

let speed;
let lastLetterIdx = 0
const letterLeng = TEXT_CONTENT.length

setSpeed()
showNextLetter()

function showNextLetter() {
    textEl.innerText = TEXT_CONTENT.slice(0, lastLetterIdx + 1)

    lastLetterIdx = (lastLetterIdx + 1) % letterLeng

    setTimeout(showNextLetter, speed)
}

function setSpeed() {
    speed = 400 / speedEl.value
}

speedEl.addEventListener("input", setSpeed)