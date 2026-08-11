/*
Problem 04: Student Grade Evaluator
Difficulty: Hard
Function Name: findTopStudent

Description:
Write a function that accepts an array of student objects and returns the object of the 
highest-scoring student who has passed (marks >= 40). If no student passes, return "No Passed Student".

Input:
An array of objects with `id` (number), `name` (string), and `marks` (number).

Output:
The student object with the highest marks among passed students, or a string message.

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object lacks `id`, `name`, or `marks`.
3. `id` or `marks` is not a number, or `marks` is not within range 0 - 100.
Return "No Passed Student" if:
1. No student in the array scored 40 or higher.
*/

function findTopStudent(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {
        if (
            typeof student !== "object" ||
            student === null ||
            typeof student.id !== "number" ||
            !student.name ||
            typeof student.marks !== "number" ||
            student.marks < 0 ||
            student.marks > 100
        ) {
            return "Invalid";
        }
    }

    const passedStudents = students.filter((student) => student.marks >= 40);

    if (passedStudents.length === 0) {
        return "No Passed Student";
    }

    return passedStudents.reduce((max, student) => {
        return student.marks > max.marks ? student : max;
    });
}

let students = [
  { id: 1, name: "Rafi", marks: 35 },
  { id: 2, name: "Sabrina", marks: 88 },
  { id: 3, name: "Tanvir", marks: 92 },
  { id: 4, name: "Nila", marks: 45 },
  { id: 5, name: "Arian", marks: 78 },
  { id: 6, name: "Kavya", marks: 95 },
  { id: 7, name: "Fahim", marks: 28 },
  { id: 8, name: "Sumi", marks: 84 },
  { id: 9, name: "Rohan", marks: 60 },
  { id: 10, name: "Zara", marks: 91 }
];

console.log(findTopStudent(students));