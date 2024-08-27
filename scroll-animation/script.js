const body = document.body
const container = document.querySelector(".container")
const containerTop = container.offsetTop;
const boxHeight = 205

let boxCount;
let lastActiveBox;
let bufferBoxCount = 5

container.innerText = ""

const addBox = () => {
    const box = document.createElement("div")
    box.classList.add("box")
    box.innerText = "Content"
    container.appendChild(box)
}

function removeBox() {
    container.removeChild(container.lastChild)
}

function updateBoxes() {
    let boxArr = Array.from(container.getElementsByClassName("box"))
    boxArr.filter(box => box.classList.contains("active")).forEach(box => box.classList.remove("active"))
    boxArr.filter(box => (window.innerHeight + window.scrollY) >= (box.offsetTop + box.offsetHeight)).forEach(box => box.classList.add("active"))
}

function updateBoxCount() {
    const containerSpace = window.innerHeight + window.scrollY - containerTop
    console.log(containerSpace)
    const boxCount = Math.floor(containerSpace / boxHeight) + bufferBoxCount
    console.log(boxCount)
    const boxArrHtml = container.getElementsByClassName("box");
    const renderedBoxCount = boxArrHtml.length
    const boxCountDiff = boxCount - renderedBoxCount
    console.log(boxCountDiff)
    if(boxCountDiff > 0) {
        let arr =  Array(boxCountDiff)
        arr.fill(0)
        arr.forEach(addBox)
    }
    if(boxCountDiff < 0) {
        let arr =  Array(-1 * boxCountDiff)
        arr.fill(0)
        arr.forEach(removeBox)
    }
}

function update() {
    updateBoxCount()
    updateBoxes()
}

body.addEventListener("wheel", update)

update()