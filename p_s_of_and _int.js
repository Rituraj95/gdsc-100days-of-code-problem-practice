function subtractProductAndSum(n) {
    const digits = Array.from(String(n), Number);

    const product = digits.reduce((acc, digit) => acc * digit, 1);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    return product - sum;
}


const number = 123;
const result = subtractProductAndSum(number);

console.log(`For the number ${number}, the result is: ${result}`);
