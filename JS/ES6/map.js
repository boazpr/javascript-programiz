let map1 = new Map();
map1.set('info',{name:'John',age:30});
console.log(map1);


let map2= new Map();
let obj={};
map2.set(obj,{name:'john',age:30});
console.log(map2);
console.log(map2.get(obj)); // { name: 'john', age: 30 }
console.log(map1.has(obj)); // false
console.log(map2.has(obj)); // true
map1.delete('info');
console.log(map1); // Map(0) {}
console.log(map2.size); // 1
for (let [key,value] of map2){
    console.log(key,value); // {} { name: 'john', age: 30 }
}

for (let elem of map2.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}




//weak  map
// A WeakMap is a collection of key-value pairs where the keys are objects and the values can be any type.
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let oj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}

// get the element of a WeakMap
console.log(weakMap.get(oj)); // hello

// check if an element is present in WeakMap
console.log(weakMap.has(oj)); // true

// delete the element of WeakMap
console.log(weakMap.delete(oj)); // true

console.log(weakMap); // WeakMap {} 