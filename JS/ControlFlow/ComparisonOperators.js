const a = 3, b = 2;
console.log(a > b);
console.log(6 == 8);
console.log(3 == "3")
console.log("hello" === "Hello")
console.log(2 != 3);
// same value, same type
console.log(2 != 2);  // false

// same value, different type
console.log(2 != "2");  // false

// different value, same type
console.log(2 != 3);  // true

console.log(3>="1.3") || (2==3);
console.log(!(3>="1.3"))