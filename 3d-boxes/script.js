const container = document.querySelector(".box-container")
const ROW_COUNT = 4, COL_COUNT = 4


Array.from(Array(ROW_COUNT).keys()).forEach((_,i) => {
    let rowEl = document.createElement("div") // const dene?
    rowEl.classList = "flex box-row"

    Array.from(Array(COL_COUNT).keys()).forEach((_,j) => {
        const boxEl = document.createElement("div")
        boxEl.classList.add("box")

        setBg(boxEl, i, j)
        
        rowEl.appendChild(boxEl)
    })

    container.appendChild(rowEl)
})

function setBg(boxEl, i, j) {
    var style = getComputedStyle(document.body)

    const edgeLen = pxToInt(style.getPropertyValue('--box-edge-length'))
    const margin = pxToInt(style.getPropertyValue('--box-margin'))

    boxEl.style.backgroundSize = `${edgeLen * COL_COUNT + margin * (COL_COUNT - 1)}px ${edgeLen * ROW_COUNT + margin * (ROW_COUNT - 1)}px`
    boxEl.style.backgroundPosition = `${edgeLen * -j}px ${edgeLen * -i}px`
}

function pxToInt(px) {
    return parseInt(px.slice(0, -2))
}

//------

const btn = document.querySelector(".btn")
const boxes = document.querySelectorAll(".box")

btn.addEventListener("click", () => {
    boxes.forEach(bx => bx.classList.toggle("collapse"))
})