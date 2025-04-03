function greet() {

    // local variable
    var message = "Hello";
    
    console.log(`Local: ${message}`);
}

greet();

// try to access message variable
// outside the greet() function
console.log(`Global: ${message}`);


// declare global variable
var message = "Hello";

function greet() {
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);