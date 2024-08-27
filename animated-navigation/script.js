const nav = document.querySelector(".nav")
const barContainer = document.querySelector(".bar-container")

barContainer.addEventListener("click", () => {
    nav.classList.toggle("active")
})