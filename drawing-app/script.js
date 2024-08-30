const sizeEl = document.querySelector(".size")
const decreaseEl = document.querySelector(".decrease")
const increaseEl = document.querySelector(".increase")

let size;

function updateSize() {
    sizeEl.innerText = size
}

decreaseEl.addEventListener("click", () => {
    size -= 5
    if(size < 5) {
        size = 5
    }
    updateSize()
})

increaseEl.addEventListener("click", () => {
    size += 5
    if(size > 50) {
        size = 50
    }
    updateSize()
})



//-----------------------------------------------------------------------


const paletteEl = document.querySelector(".palette")

let color;

function updateColor() {
    paletteEl.value = color
}

paletteEl.addEventListener("change", (e) => {
    color = e.target.value

    updateColor()
})

//-----------------------------------------------------------------------


const outputEl = document.querySelector(".output")
const ctx = outputEl.getContext("2d");

let x, y, isDrawing = false

outputEl.addEventListener("mousedown", e => {
    isDrawing = true

    x = e.offsetX
    y = e.offsetY
    console.log(y)
})

outputEl.addEventListener("mouseup", e => {
    isDrawing = false

    x = undefined
    y = undefined
})

outputEl.addEventListener("mousemove", e => {
    if(!isDrawing) {
        return
    }
    const x2 = e.offsetX
    const y2 = e.offsetY

    createLine(x, y, x2, y2)
    createCircle(x2, y2)

    x = x2
    y = y2

})

function createLine(x, y, x2, y2) {

    ctx.beginPath()

    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = 2 * size
    ctx.strokeStyle = color

    ctx.stroke()
}

function createCircle(x,y) {

    ctx.beginPath()

    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = color

    ctx.fill()
}

function clearOutput() {
    ctx.clearRect(0, 0, outputEl.width, outputEl.height);
}



//-----------------------------------------------------------------------



const resetEl = document.querySelector(".reset")

resetEl.addEventListener("click", init)



//-----------------------------------------------------------------------



function init() {
    size = 10
    color = "#000000"

    updateSize()
    updateColor()
    clearOutput()
}

init()