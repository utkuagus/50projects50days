const labels = Array.from(document.getElementsByTagName("label"))

labels.forEach((lbl) => {
    lbl.innerHTML = lbl.textContent.split("").map((letter,i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`).join("")
})