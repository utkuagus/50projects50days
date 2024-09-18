const submitEl = document.getElementById("submit")

submitEl.addEventListener("click", e => e.preventDefault())

// -------

const bgEl = document.querySelector(".background")
const pwdEl = document.getElementById("pwd")

pwdEl.addEventListener("input", updateBlur)

function updateBlur() {
    const pwdLen = pwdEl?.value.length
    
    bgEl.style.filter = `blur(${20 - pwdLen * 2}px)`
}