// creating symbol
const x = Symbol()
console.log(x.type); // symbol


let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}
console.log(person[id]); // 123

let person11 = {
    name: "Jack"
};

// using string as key
person.id = 12;
console.log(person.id); // 12

// Another program overwrites value
person11.id = 'Another value';
console.log(person.id); // Another value