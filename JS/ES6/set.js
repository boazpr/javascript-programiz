

const set = new Set([1, 2, 3]);
console.log(set.values()); // Set Iterator [1, 2, 3]

// removing a particular element
set.delete(2);
console.log(set.values()); // Set Iterator [1, 3]



//////weak set



const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

const obj = {a:1};

// add to a weakSet
weakSet.add(obj);
console.log(weakSet); // WeakSet {{a: 1}}

// check if an element is in Set
console.log(weakSet.has(obj)); // true

// delete elements
weakSet.delete(obj);
console.log(weakSet); // WeakSet {}