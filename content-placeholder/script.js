const header = document.querySelector(".header")
const title = document.querySelector(".title")
const info = document.querySelector(".info")
const nameEl = document.querySelector(".name")
const date = document.querySelector(".date")
const profileImg = document.querySelector(".profile-img")
const infoRow = document.querySelectorAll(".info-row")

const elements = [header, title, nameEl, date, profileImg]

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = "Lorem ipsum dolor sit amet"
    info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"
    nameEl.innerHTML = "John Doe"
    date.innerHTML = "Oct 26, 2020"
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    infoRow.innerHTML = ""
    
    elements.forEach(e => e.classList.remove("render"))
    infoRow.forEach(e => e.classList.remove("render"))
}

elements.forEach(e => e.classList.add("render"))
infoRow.forEach(e => e.classList.add("render"))