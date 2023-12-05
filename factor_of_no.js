
function printFactors(num) {
    console.log(`Factors of ${num} are:`);
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}


const number = parseInt(prompt("Enter a number:"));

printFactors(number);
