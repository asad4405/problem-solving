// Js ES6


// Problem — Student Introduction Generator
//  Function Name Must be: studentIntroduction 
// An online learning platform wants to generate an introduction message after a new student registration.

// Input
// The function will receive an object as input.
// Example:
// {
//   name: "Rafi",
//   age: 18,
//   course: "JavaScript"
// }


// Output
// It must return a message using template literals.

// Example:
// My name is Rafi. I am 18 years old. I am learning JavaScript.


// Challenge
// Return "Invalid" if:
// The input is not an object, or
// The object does not contain the name, age, or course properties.

// Starter Code:
// function studentIntroduction(student) {
//   // Write your code here
// }


// Sample Test Cases
// Input
// Output
// {name:"Rafi",age:18,course:"JavaScript"}
// My name is Rafi. I am 18 years old. I am learning JavaScript.
// {} 
// Invalid
// "student" 
// Invalid



// Problem 21 — Student Introduction Generator
function studentIntroduction(student) {
    if(typeof student !== "object" || student === null || Array.isArray(student) || !student.name || !student.age || !student.course){
        return "Invalid";
    }
  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}


let student ={
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}
// let student = "Student";


console.log(studentIntroduction(student));