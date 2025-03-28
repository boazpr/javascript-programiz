// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));
let a;

// convert string to number
a = Number("5");
console.log(a, "-", typeof(a));

// convert boolean to string
a = String(true);
console.log(a, "-", typeof(a));

// convert number to boolean
a = Boolean(0);
console.log(result, "-", typeof(a));
