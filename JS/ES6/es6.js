

{
    // block of code

    // declare variable with var
    var name = "Peter";

    // can be accessed here
    console.log(name);
}

// can be accessed here
console.log(name);

const firstName = "Jack";
const lastName = "Sparrow";

console.log("Hello " + firstName + " " + lastName);

// Output: Hello Jack Sparrow
// function to find sum of two numbers
function sum(numA, numB = 5) {

    // default value of numB is 5
    console.log(numA + numB);
};

// pass 10 to numA but
// don't pass value to numB
// numB takes default value 5
sum(10);  // 15

// pass 5 to numA and 15 to numB 
sum(5, 15);  // 20
// function expression
let product = function(x, y) {
    return x * y;
 };
 
 result = product(5, 10);
 
 console.log(result);  // 50

 // function expression using arrow function
let produt = (x, y) => x * y;

result = produt(5, 10);

console.log(result);  // 50


// declare a class
class Person {

    // constructor function
    constructor(name) {
        this.name = name;
    };
};

// create objects
let p1 = new Person("John");
let p2 = new Person("Rachel");

// print object properties
console.log(p1.name);  // John
console.log(p2.name);  // Rachel


const hospital = {
    doctors: 23,
    patients: 44,
};



// use ES6 destructuring syntax
let { doctors, patients } = hospital;

console.log(doctors);  // 23
console.log(patients);  // 44


