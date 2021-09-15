let firstNum = "";
let secondNum = "";
let currentOperator = null;
let shouldReset = false;

const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".screen-current");
const clearButton = document.querySelector("#clearBtn");
const pointButton = document.querySelector("#point-button");

numberButtons.forEach(button =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);
operationButtons.forEach(button => button.addEventListener("click", () => setOperator(button.textContent)));
equalButton.addEventListener("click", evaluate)
clearButton.addEventListener("click", clear)
pointButton.addEventListener("click", appendPoint)

function appendNumber(number) {
  if (display.textContent === "0" || shouldReset) {
    resetScreen();
  }
  display.textContent += number;
}

function appendPoint() {
  if (shouldReset) resetScreen()
  if (display.textContent === '')
    display.textContent = '0'
  if (display.textContent.includes('.')) return
  display.textContent += '.'
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstNum = display.textContent;
  currentOperator = operator;
  shouldReset = true;
}

function evaluate() {
  if (currentOperator === null || shouldReset) return;
  secondNum = display.textContent;
  display.textContent = roundResult(operate(currentOperator, firstNum, secondNum));
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 100000) / 100000
}

function resetScreen() {
  display.textContent = "";
  shouldReset = false;
}

function clear() {
  display.textContent = "0";
  firstNum = "";
  lastNum = "";
  currentOperator = null;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      if (b !== 0) {
        return a / b;
      }
      else {
        alert("Trying to divide by 0, are we?");
        break;
      }
    default:
      console.log("No valid operation provided");
  }
}