const header = document.querySelector(".header")
const title = document.querySelector(".title")
const info = document.querySelector(".info")
const infoRow = document.querySelectorAll(".info-row")
const nameEl = document.querySelector(".name")
const date = document.querySelector(".date")
const profileImg = document.querySelector(".profile-img")

const renderList = [header, title, nameEl, date, profileImg]

const addRender = el => el.classList.add("render")
const removeRender = el => el.classList.remove("render")

renderList.forEach(addRender)
infoRow.forEach(addRender)

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = "Lorem ipsum dolor sit amet"
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
    nameEl.innerHTML = "John Doe"
    date.innerHTML = "Oct 26, 2020"
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'

    renderList.forEach(removeRender)
    infoRow.forEach(removeRender)
}