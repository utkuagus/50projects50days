const input = document.querySelector(".input");
const tubes = input.querySelectorAll(".tube");
const tubeCount = tubes.length

const output = document.querySelector(".output");
const filled = output.querySelector(".filled")
const liter = output.querySelector(".liter")
const outputHeight = output.offsetHeight

let filledCount = 0;

tubes.forEach((t,idx) => {
    tubes[idx].classList.add("empty")
    t.addEventListener("click", () => {
        if(filledCount == idx + 1) {
            filledCount = idx
        }
        else {
            filledCount = idx + 1;
        }
        update()
    })
})

function update() {
    for(let i=0;i<tubeCount;i++) {
        if(i < filledCount) {
            tubes[i].classList.remove("empty")
            tubes[i].classList.add("filled")
        }
        else {
            tubes[i].classList.remove("filled")
            tubes[i].classList.add("empty")
        }
    }
    filled.style.height = (parseInt(outputHeight, 10) * filledCount / tubeCount) + "px"
    filled.innerText = (100 * filledCount / tubeCount) + "%"
    liter.innerText = (tubeCount - filledCount) / tubeCount * 2 + "L" 
}