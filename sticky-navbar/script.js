const nav = document.querySelector(".nav")
const SCROLL_THRESHOLD = 80

window.addEventListener("scroll", () => {
    if(window.scrollY > SCROLL_THRESHOLD) {
        nav.classList = "nav"
    }
    else {
        nav.classList = "nav inverted"
    }
})
