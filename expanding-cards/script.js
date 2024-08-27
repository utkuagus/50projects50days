const panels = document.querySelectorAll(".panel")
let activeIdx = 0

panels.forEach((p,i) => {
    p.addEventListener("click", () => {
        updateActive(i)
    })
})

const updateActive = (idx) => {
    panels[activeIdx].classList.remove("active")
    panels[idx].classList.add("active")
    activeIdx = idx
}