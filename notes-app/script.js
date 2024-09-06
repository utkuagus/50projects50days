const container = document.querySelector(".note-container")
const add = document.querySelector(".add")

container.innerHTML = ""
const notes = JSON.parse(localStorage.getItem("notes"))
if(!!notes) {
    notes.forEach(addNote)
}

add.addEventListener("click", () => addNote())

function addEvents(note) {
    const edit = note.querySelector(".edit")
    const remove = note.querySelector(".remove")
    const content = note.querySelector(".content")
    const text = note.querySelector(".text")

    remove.addEventListener("click", e => {
        container.removeChild(note)

        updateLS()
    })

    edit.addEventListener("click", e => {
        text.innerText = content.value
        content.classList.toggle("hidden")

        updateLS()
    })
}

function addNote(content = "") {
    const note = document.createElement("div")
    note.classList = "note flex flex-column"
    note.innerHTML = `
                <div class="header flex justify-end">
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="remove"><i class="fas fa-trash-alt"></i></button>
                </div>
                <textarea class="content">${content}</textarea>
                <div class="text">${content}</div>
    `

    container.appendChild(note)
    addEvents(note)

    updateLS()
}

function updateLS() {
    const notes = Array.from(document.querySelectorAll(".content")).map(n => n.value)

    localStorage.setItem("notes", JSON.stringify(notes))
}