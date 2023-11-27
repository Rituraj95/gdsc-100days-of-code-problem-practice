function calculate(num1, num2, operator) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    }
    result = num1 / num2;
  } else {
    return "Invalid operator!";
  }

  return result;
}


let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

let output = calculate(number1, number2, operator);

console.log(`Result: ${output}`);
