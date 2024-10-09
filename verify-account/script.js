const digits = document.querySelectorAll(".digit");

function updateDigit(digit, newValue) {
  digit.value = newValue.toString();
}

function addKeyDownListener(index) {
  const d = digits[index];
  d.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === "Delete" || e.key === "Backspace") {
      digits[index - 1].focus();
    } else if (isFinite(e.key)) {
      digits[index + 1].focus();
    } else {
      return;
    }
    updateDigit(d, e.key);
  });
}

digits.forEach((_, index) => addKeyDownListener(index));
