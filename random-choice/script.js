const container = document.querySelector(".choice-container")
const input = document.querySelector(".input")

const getChoiceDiv = (value) => `
    <div class="choice">${value}</div>
`

input.addEventListener("input", () => {
    container.innerHTML = input.value.split(",").map(getChoiceDiv).join("");
})