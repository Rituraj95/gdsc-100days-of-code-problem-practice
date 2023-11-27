function findHCF(num1, num2) {

  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

function findLCM(num1, num2) {
 
  let lcm = (num1 * num2) / findHCF(num1, num2);
  return lcm;
}

let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));

let hcf = findHCF(number1, number2);
let lcm = findLCM(number1, number2);

console.log(`The HCF of ${number1} and ${number2} is: ${hcf}`);
console.log(`The LCM of ${number1} and ${number2} is: ${lcm}`);
