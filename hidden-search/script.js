const button = document.querySelector(".button")
const searchbar = document.querySelector(".searchbar")

button.addEventListener("click", () => {
    searchbar.classList.toggle("active")
})