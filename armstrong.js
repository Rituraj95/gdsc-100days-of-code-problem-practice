function isArmstrongNumber(num) {
    const numStr = num.toString();
    const len = numStr.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += Math.pow(parseInt(numStr[i]), len);
    }

    return sum === num;
}

function findArmstrongNumbersInRange(start, end) {
    const armstrongNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }

    return armstrongNumbers;
}

const startRange = 100; 
const endRange = 1000; 

const armstrongNumbersInRange = findArmstrongNumbersInRange(startRange, endRange);
console.log("Armstrong Numbers between", startRange, "and", endRange, "are:", armstrongNumbersInRange);
