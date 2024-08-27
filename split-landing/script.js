const ps5 = document.querySelector(".ps5")
const xbox = document.querySelector(".xbox")
const container = document.querySelector(".container")

ps5.addEventListener("mouseover", () => {
    container.classList.add("hover-ps5")
})

ps5.addEventListener("mouseout", () => {
    container.classList.remove("hover-ps5")
})

xbox.addEventListener("mouseover", () => {
    container.classList.add("hover-xbox")
})

xbox.addEventListener("mouseout", () => {
    container.classList.remove("hover-xbox")
})