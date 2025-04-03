let numbers = [10, 30, 40, 60, 80]

// access first element
console.log(numbers[0]);  // 10

// access third element
console.log(numbers[2]);  // 40
console.log (numbers);
numbers.unshift(20); // add element at the beginning
console.log(numbers);  // [20, 10, 30, 40, 60, 80]
numbers.splice(2, 2); // remove 2 elements from index 2
console.log(numbers);  // [20, 10, 60, 80]