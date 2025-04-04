let num = 4 - "hello";
console.log(num); // NaN
// check if num1 is integer
let num1 = 12;
console.log(Number.isInteger(num1)); // true

// check if num2 is NaN
let num2 = NaN;
console.log(Number.isNaN(num2)); // true

// display up to two decimal points
let num3 = 5.1234;
console.log(num3.toFixed(2)); // 5.12