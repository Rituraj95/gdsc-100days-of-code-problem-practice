function calculateSimpleInterest(principal, time, rate) {
  
  let interest = (principal * time * rate) / 100;
  return interest;
}


let principal = parseFloat(prompt("Enter the principal amount:"));
let time = parseFloat(prompt("Enter the time period (in years):"));
let rate = parseFloat(prompt("Enter the rate of interest (%):"));

let simpleInterest = calculateSimpleInterest(principal, time, rate);

console.log(`Principal Amount: $${principal}`);
console.log(`Time Period: ${time} years`);
console.log(`Rate of Interest: ${rate}%`);
console.log(`Simple Interest: $${simpleInterest.toFixed(2)}`);
