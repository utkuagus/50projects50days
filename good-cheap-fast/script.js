const switches = document.querySelectorAll(".switch")

switches.forEach(s => s.addEventListener("click", () => {
    s.classList.toggle("active")
}))