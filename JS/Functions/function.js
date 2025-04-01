function greet() {
    console.log("Hello World!");}
greet();

let x = function() {
    console.log("1618");
}
x();

function greet(name) {
    console.log(`Hello ${name}`);
}

// pass "John" as argument
greet("John");

// pass "David" as argument
greet("David");

// function with two arguments
function addNumbers(num1, num2) {
    let sum = num1 + num2;
   console.log(`Sum: ${sum}`);
}

// call function by passing two arguments
addNumbers(5, 4);

// Output:
// Sum: 9


function a(n){
    return n * n;
}
let b=a(5);
console.log(b);