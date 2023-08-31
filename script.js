// Functions for basic math operations
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      display.textContent = "Error";
      return;
    }
    return a / b;
  }
  
  // Initialize display element
  const display = document.getElementById("display");
  
  // Initialize variables for calculator operation
  let firstNumber = "";
  let operator = "";
  let secondNumber = "";
  
  // Function to update display
  function updateDisplay() {
    display.textContent = firstNumber + operator + secondNumber;
  }
  
  // Event listeners for number buttons
  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (!operator) {
        firstNumber += button.textContent;
      } else {
        secondNumber += button.textContent;
      }
      updateDisplay();
    });
  });
  
  // Event listener for operator buttons
  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (operator && secondNumber) {
        operate();
      }
      operator = button.textContent;
      updateDisplay();
    });
  });
  
  // Event listener for equals button
  const equalsButton = document.getElementById("equals");
  equalsButton.addEventListener("click", () => {
    operate();
    operator = "";
    secondNumber = "";
    updateDisplay();
  });
  
  // Event listener for clear button
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay();
  });
  
  // Event listener for backspace button
  const backspaceButton = document.getElementById("backspace");
  backspaceButton.addEventListener("click", () => {
    if (!operator) {
      firstNumber = firstNumber.slice(0, -1);
    } else {
      secondNumber = secondNumber.slice(0, -1);
    }
    updateDisplay();
  });
  
  // Event listener for decimal button
  const decimalButton = document.getElementById("decimal");
  decimalButton.addEventListener("click", () => {
    if (!operator) {
      if (!firstNumber.includes(".")) {
        firstNumber += ".";
      }
    } else {
      if (!secondNumber.includes(".")) {
        secondNumber += ".";
      }
    }
    updateDisplay();
  });
  
  // Function to perform the operation
  function operate() {
    if (!firstNumber || !secondNumber || !operator) return;
  
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
  
    switch (operator) {
      case "+":
        firstNumber = add(firstNumber, secondNumber);
        break;
      case "-":
        firstNumber = subtract(firstNumber, secondNumber);
        break;
      case "*":
        firstNumber = multiply(firstNumber, secondNumber);
        break;
      case "/":
        firstNumber = divide(firstNumber, secondNumber);
        break;
      default:
        break;
    }
  }
  