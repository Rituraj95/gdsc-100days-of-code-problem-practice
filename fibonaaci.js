function fibonacciWithLoop(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

const n = 10; // Change this value to the desired number of Fibonacci numbers
const resultWithLoop = fibonacciWithLoop(n);
console.log(resultWithLoop);
