const boxes = document.querySelectorAll(".box")
const draggable = document.querySelector(".draggable")
const body = document.body

body.addEventListener("dragstart", dragStart)
body.addEventListener("dragend", dragEnd)

boxes.forEach((box,idx) => {
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("dragover", dragOver)
    box.addEventListener("drop", drop)
})

function dragStart(e) {
    if(!e.target.classList.contains("draggable")) {
        e.preventDefault()
        return
    }
    draggable.className += ' hold' 
    setTimeout(() => draggable.className = 'invisible', 0)
}

function dragEnd() {
    draggable.className = "draggable"
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' focus'
}

function dragLeave() {
    this.className = 'box'
}

function dragOver(e) {
    e.preventDefault()
}

function drop() {
    this.className = 'box'

    draggable.remove()
    this.appendChild(draggable)
}
