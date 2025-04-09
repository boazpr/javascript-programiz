const addnumbers=((a,b)=>a+b);
const x=addnumbers(5,10);
console.log(x);  // 15


const sayHello = () => "Hello, World!";
// call the arrow function and print its return value
console.log(sayHello());  
// Output: Hello, World!


const square =x=>x*x;
console.log(square(5))


// constructor function
function Person() {

    this.name = 'Jack',
    this.age = 25,
    this.sayAge = function () {

        console.log(this.age);

        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const a = new Person();
a.sayAge();