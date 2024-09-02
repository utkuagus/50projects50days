const show = document.getElementById("show")
const container = document.querySelector(".toast-container")

const colorList = ["red","green","purple"]
const contentList = ["Message One", "Message Two", "Message Three", "Message Four"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

show.addEventListener("click", () => {
    const color = colorList[getRandomInt(colorList.length)]
    const content = contentList[getRandomInt(contentList.length)]

    const toast = document.createElement("div")
    toast.classList = `button ${color}`
    toast.innerText = content

    container.appendChild(toast)

    setTimeout(popToast, 3500)
})

function popToast() {
    container.firstElementChild.remove()
}