const firstNumInput = document.getElementById("firstNum");
const secondNumInput = document.getElementById("secondNum");
const resultBox = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");


function getNumbers() {
  const first = parseFloat(firstNumInput.value) || 0;
  const second = parseFloat(secondNumInput.value) || 0;
  return { first, second };
}

addBtn.addEventListener("click", function () {
  const { first, second } = getNumbers();
  resultBox.textContent = first + second;
});

subBtn.addEventListener("click", function () {
  const { first, second } = getNumbers();
  resultBox.textContent = first - second;
});

mulBtn.addEventListener("click", function () {
  const { first, second } = getNumbers();
  resultBox.textContent = first * second;
});

divBtn.addEventListener("click", function () {
  const { first, second } = getNumbers();

  // Avoid dividing by zero — show a friendly message instead
  if (second === 0) {
    resultBox.textContent = "Cannot divide by 0";
  } else {
    resultBox.textContent = first / second;
  }
});