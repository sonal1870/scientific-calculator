let currentValue = '0';
let operator = '';
let previousValue = '';

function updateDisplay() {
  document.getElementById('display').value = currentValue;
}

function appendValue(value) {
  if (currentValue === '0') {
    currentValue = value;
  } else {
    currentValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentValue = '0';
  operator = '';
  previousValue = '';
  updateDisplay();
}

function calculate() {
  if (operator && previousValue !== '') {
    switch (operator) {
      case '+':
        currentValue = (parseFloat(previousValue) + parseFloat(currentValue)).toString();
        break;
      case '-':
        currentValue = (parseFloat(previousValue) - parseFloat(currentValue)).toString();
        break;
      case '*':
        currentValue = (parseFloat(previousValue) * parseFloat(currentValue)).toString();
        break;
      case '/':
        currentValue = (parseFloat(previousValue) / parseFloat(currentValue)).toString();
        break;
      case '%':
        currentValue = (parseFloat(previousValue) % parseFloat(currentValue)).toString();
        break;
      default:
        break;
    }
    operator = '';
    previousValue = '';
    updateDisplay();
  }
}

function handleOperator(op) {
  if (currentValue !== '0') {
    operator = op;
    previousValue = currentValue;
    currentValue = '0';
  }
}

updateDisplay();
