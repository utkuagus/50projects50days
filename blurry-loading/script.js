const loading = document.querySelector(".loading")
const bg = document.querySelector(".bg")

let load = 0

let interval = setInterval(updateStates, 30);

function updateStates() {
    loading.innerText = `${load}%`
    loading.style.opacity = `${scale(load,0,100,1,0)}`
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

    if(load == 100) {
        clearInterval(interval)
    }
    load++
}

function scale(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}