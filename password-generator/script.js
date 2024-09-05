const passwordEl = document.querySelector(".password")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numberEl = document.getElementById("number")
const symbolsEl = document.getElementById("symbols")
const generatorEl = document.querySelector(".generator")
const clipboardEl = document.querySelector(".clipboard")

let length = 20, hasUppercase = true, hasLowercase = true, hasNumber = true, hasSymbols = true;

lengthEl.addEventListener("change", e => length = parseInt(e.target.value))
uppercaseEl.addEventListener("change", e => hasUppercase = e.target.checked)
lowercaseEl.addEventListener("change", e => hasLowercase = e.target.checked)
numberEl.addEventListener("change", e => hasNumber = e.target.checked)
symbolsEl.addEventListener("change", e => hasSymbols = e.target.checked)

const pools = [
    [uppercaseEl, getPool(65, 90)],
    [lowercaseEl, getPool(97, 122)],
    [numberEl, getPool(48, 57)],
    [symbolsEl, [getPool(33, 47), getPool(58, 64), getPool(91, 96), getPool(123,126)].join("")]
]

function getPool(start, end) {
    const range = end - start + 1
    const asciiCodes = Array.from(Array(range).keys()).map(i => i + start)
    return String.fromCharCode(...asciiCodes)
}

function getTotalPool() {
    return pools.filter(p => !!p[0].checked).map(p => p[1]).join()
}

generatorEl.addEventListener("click", () => {
    const pool = getTotalPool()

    const password = Array(length).fill().map(_ => getRandLetter(pool)).join("")

    passwordEl.innerText = password
})

function getRandLetter(pool) {
    return pool.charAt(getRandomInt(pool.length))
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

clipboardEl.addEventListener("click", () => {
    if(!passwordEl.innerText) {
        return
    }
    navigator.clipboard.writeText(passwordEl.innerText);
  
    alert("Password copied to clipboard!");
})