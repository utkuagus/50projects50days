const photo = document.querySelector(".photo")
const times = document.getElementById("times")

let lock = false
let clickCount = 0

photo.addEventListener("dblclick", e => {
    if(lock) {
        return
    }

    lock = true

    const heart = document.createElement("i")
    heart.classList = "fas fa-heart animation"
    heart.style.top = e.offsetY + "px"
    heart.style.left = e.offsetX + "px"

    photo.appendChild(heart)

    times.innerText = `${++clickCount}`

    setTimeout(unlockPhoto, 1000)
})

function unlockPhoto() {
    photo.innerHTML = ""
    lock = false
}