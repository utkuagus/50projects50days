const container = document.querySelector(".container")

const getBoxDiv = (pairs) => `
        <div class="box">
            <div class="title">${pairs[0]}</div>
            <div class="text">${pairs[1]}</div>
        </div>
` 

window.addEventListener("keydown", (e) => {
    const boxPairs = [
        ["event.key", e.key === ' ' ? 'Space' : e.key],
        ["event.keyCode", e.keyCode],
        ["event.code", e.code]
    ]
    container.innerHTML = boxPairs.map(getBoxDiv).join("");
})