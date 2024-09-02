const up = document.querySelector(".up")
const down = document.querySelector(".down")
const left = document.querySelector(".left-slide")
const right = document.querySelector(".right-slide")

let curIdx = 0
const slideLen = 4

up.addEventListener("click", () => {
    curIdx++
    if(curIdx >= slideLen) {
        curIdx = 0
    }
    update()
})

down.addEventListener("click", () => {
    curIdx--
    if(curIdx < 0) {
        curIdx = slideLen - 1
    }
    update()
})

function update() {
    left.style.transform = `translateY(${-300 + 100 * curIdx}vh)`
    right.style.transform = `translateY(${-100 * curIdx}vh)`
}