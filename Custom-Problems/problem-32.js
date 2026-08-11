/*
Problem 07: Employee Bonus Calculator
Difficulty: Medium
Function Name: calculateBonus

Description:
Write a function that accepts an array of employee objects and calculates 
the bonus for each employee based on their performance rating.

Bonus Rules:
- If rating is 4.0 or higher, bonus is 15% of salary.
- If rating is less than 4.0, bonus is 5% of salary.

Input:
An array of objects with `name` (string), `salary` (number), and `rating` (number).

Output:
An array of new objects containing only `name` and `bonus`.

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object is missing valid `name`, `salary`, or `rating`.
3. `salary` is not a number or is <= 0.
4. `rating` is not a number or is outside the range 0 to 5.
*/

function calculateBonus(employees) {
    if (!Array.isArray(employees) || employees.length === 0) {
        return "Invalid";
    }

    for (const employee of employees) {
        if (
            typeof employee !== "object" ||
            employee === null ||
            typeof employee.name !== "string" ||
            typeof employee.salary !== "number" ||
            typeof employee.rating !== "number" ||
            employee.salary <= 0 ||
            employee.rating < 0 ||
            employee.rating > 5
        ) {
            return "Invalid";
        }
    }

    return employees.map((employee) => {
        if (employee.rating >= 4) {
            return {
                name: employee.name,
                bonus: employee.salary * 0.15
            };
        } else {
            return {
                name: employee.name,
                bonus: employee.salary * 0.05
            };
        }
    });
}


// let employees = [
//   { name: "Asad", salary: 50000, rating: 4.5 },
//   { name: "Rahim", salary: 30000, rating: 3.8 },
//   { name: "Karim", salary: 40000, rating: 4.0 },
//   { name: "Nila", salary: 60000, rating: 4.9 },
//   { name: "Fahim", salary: 25000, rating: 2.5 }
// ];
// console.log(calculateBonus(employees))