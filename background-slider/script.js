const slides = document.querySelectorAll(".slide")
const body = document.body
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let prevIdx = 0;
let curIdx = 0;

prev.addEventListener("click", () => {
    prevIdx = curIdx
    if(curIdx == 0) {
        curIdx = slides.length - 1
    } else {
        curIdx--;
    }
    update()
})

next.addEventListener("click", () => {
    console.log("next")
    prevIdx = curIdx
    if(curIdx == slides.length - 1) {
        curIdx = 0
    } else {
        curIdx++;
    }
    update()
})

function update() {
    slides[prevIdx].classList.remove("active")
    slides[curIdx].classList.add("active")

    body.style.backgroundImage = slides[curIdx].style.backgroundImage
}

update()