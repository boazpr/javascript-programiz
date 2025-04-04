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