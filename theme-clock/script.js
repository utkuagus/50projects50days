const body = document.body
const mode = document.querySelector(".mode")
const digital = document.querySelector(".digital")
const day = document.querySelector(".day")
const monthday = document.querySelector(".monthday")

const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")


const date = new Date()
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]


console.log(date.getMinutes())

mode.addEventListener("click", () => {
    body.classList.toggle("inverted")
    mode.innerText = `${body.classList.contains("inverted") ? "Light" : "Dark"} mode` 
})

function formatMinutes(minute) {
    if(minute >= 10) {
        return minute
    }
    return "0" + minute.toString()
}

const scale = (x, in_min, in_max, out_min, out_max) => (out_max - out_min) * (x - in_min) / (in_max - in_min) + out_min

function update() {
    const date = new Date()
    digital.innerText = `${date.getHours() % 12} : ${formatMinutes(date.getMinutes())} ${date.getHours() > 12 ? "PM" : "AM"}`
    day.innerText = `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()].substring(0, 3)}`
    monthday.innerText = date.getDate().toString()

    updateClock(date.getHours(), date.getMinutes(), date.getSeconds());
}

function updateClock(hour, minute, second) {
    secondEl.style.transform =  `translate(-50%,-100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`
    minuteEl.style.transform =  `translate(-50%,-100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`
    hourEl.style.transform =  `translate(-50%,-100%) rotate(${scale(hour % 12, 0, 12, 0, 360)}deg)`
}

setInterval(update, 1000);

update()