const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const progress = document.querySelector(".progressed")
const circles = document.querySelectorAll(".circle")

const idxLen = circles.length;
let curIdx = 0;

const updateProgress = () => {
    progress.style.width = curIdx * 130 + "px"
}

const updateCircles = () => {
    circles.forEach((c,i) => {
        if(i > curIdx) {
            c.classList.remove("active")
        } else {
            c.classList.add("active")
        }
    })
}

const updateButtons = () => {
    if(curIdx==0) {
        prev.classList.remove("active")
    } else {
        prev.classList.add("active")
    }
    if(curIdx==idxLen-1) {
        next.classList.remove("active")
    } else {
        next.classList.add("active")
    }
}

const updateStates = () => {
    updateProgress()
    updateCircles()
    updateButtons()
}

prev.addEventListener("click", () => {
    if(!prev.classList.contains("active")){
        return
    }
    curIdx--;
    updateStates()
})

next.addEventListener("click", () => {
    if(!next.classList.contains("active")){
        return
    }
    curIdx++;
    updateStates()
})