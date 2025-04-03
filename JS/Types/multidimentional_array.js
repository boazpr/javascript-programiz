// multidimensional array
// contains 3 separate arrays as elements
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

// Output : [ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 4, 5, 6 ] ]

// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array
// using student1, student2, and student3
let studentsData = [student1, student2, student3];

// print the multidimensional array
console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]
    
    studentsData[1][2] = "hello";

console.log(studentsData);
studentsData.push(["Peter", 24]);

console.log(studentsData);

// add "hello" as the final element
// of the 2nd inner array
studentsData[1].push("hello");

console.log(studentsData);
studentsData.splice(0,1);

console.log(studentsData);

// Output: [ [ 'Sara', 23 ] ]
// loop over outer array
for(let i = 0; i < studentsData.length; i++) {

    // loop over inner array elements
    for(let j = 0; j < studentsData[i].length; j++) {
        console.log(studentsData[i][j]);
    }
}