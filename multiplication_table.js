function printMultiplicationTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}


let inputNumber = parseInt(prompt("Enter a number to get its multiplication table:"));


printMultiplicationTable(inputNumber);
