// Grab the input fields and result box once, so we don't
// have to search the page every time a button is clicked.
const firstDigitInput = document.getElementById("firstDigit");
const secondDigitInput = document.getElementById("secondDigit");
const resultBox = document.getElementById("result");

// Grab each operator button
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");

// Helper function: reads both inputs and turns them into numbers.
// If a box is empty, it just treats it as 0.
function getNumbers() {
  const first = parseFloat(firstDigitInput.value) || 0;
  const second = parseFloat(secondDigitInput.value) || 0;
  return { first, second };
}

// Each button click runs a small function that:
// 1. Gets the two numbers
// 2. Does the math
// 3. Shows the answer in the result box

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