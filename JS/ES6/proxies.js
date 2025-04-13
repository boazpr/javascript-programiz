
let student = {
    name: 'Jack',
    age: 24
}
const handler = {
    set: function(obj, prop, value) 
    {if (obj[prop])
    {console.log('read only');}
    }};
    const proxy = new Proxy(student, handler);
    proxy.name = 'John'; // This will not work because name is read-only
    console.log(proxy.name); // Output: Jack
    proxy.age = 25; // This will work because age is not read-only