const button = document.querySelector(".button")
const ripple = document.querySelector(".ripple")

button.addEventListener("click", (e) => {
    const ripple = document.createElement("div")

    ripple.classList.add("ripple")
    ripple.style.top = e.offsetY.toString() + "px"
    ripple.style.left = e.offsetX.toString() + "px"
    button.appendChild(ripple)

    setTimeout(() => ripple.remove(), 500)
})