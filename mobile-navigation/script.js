const liEls = document.querySelectorAll(".li")
const contents = document.querySelectorAll(".content")

let curIdx = 0

const updateActive = (idx) => {
    liEls[curIdx].classList.remove("active")
    liEls[idx].classList.add("active")

    contents[curIdx].classList.remove("show")
    contents[idx].classList.add("show")

    curIdx = idx
}

liEls.forEach((li,i) => {
    li.addEventListener("click", () => updateActive(i))
})