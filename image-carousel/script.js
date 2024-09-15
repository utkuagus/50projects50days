const container = document.querySelector(".image-container")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const IMG_LEN = container.childElementCount

let curImg = 0

const updateImg = () => {
    container.style.transform = `translateX(${curImg * -100}%)`
}

prev.addEventListener("click", () => {
    --curImg
    if(curImg < 0) {
        curImg = IMG_LEN - 1
    }
    updateImg()
})

next.addEventListener("click", () => {
    ++curImg
    if(curImg >= IMG_LEN) {
        curImg = 0
    }
    updateImg()
})

