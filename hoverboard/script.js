const container = document.querySelector(".pixel-container")

const COLORS = ["red","blue","green","purple","orange"], ROWCOUNT = 30, COLCOUNT = 20

const colorLen = COLORS.length

container.innerHTML = ""

Array(ROWCOUNT).fill(0).forEach(() => {
    const row = document.createElement("div")

    row.classList.add("flex")

    Array(COLCOUNT).fill(0).forEach(() => {
        const px = document.createElement("div")

        px.classList.add("pixel")

        row.appendChild(px)
    })

    container.appendChild(row)
})

const pixels = document.querySelectorAll(".pixel")

pixels.forEach(px => {
    px.addEventListener("mouseenter", () => {
        px.classList.add("active")
        px.classList.add(COLORS[Math.floor(Math.random() * colorLen)])
    })

    px.addEventListener("mouseleave", () => {
        px.classList = "pixel"
    })
})

