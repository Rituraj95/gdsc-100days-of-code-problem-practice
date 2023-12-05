function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

const number = parseInt(prompt("Enter a number:"));
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
