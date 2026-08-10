/*
Problem 01: High Salary Employee Filter
Difficulty: Easy
Function Name: getTopEarners

Description:
Write a function that takes an array of employee objects and returns an array containing 
only the names of employees who earn a salary of 50,000 or more. The employee names in 
the returned array must be in UPPERCASE.

Input:
An array of objects, where each object contains a `name` (string) and a `salary` (number).

Output:
An array of strings (UPPERCASE names).

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object in the array lacks a `name` or `salary` property.
3. `salary` is not of type number.
*/

function getTopEarners(employees) {
  if (!Array.isArray(employees) || employees.length === 0) {
    return "Invalid";
  }

  for (const employee of employees) {
    if (
      typeof employee !== "object" ||
      employee === null ||
      !employee.name ||
      typeof employee.salary !== "number"
    ) {
      return "Invalid";
    }
  }

  const filteredEmployees = employees.filter((employee) => employee.salary >= 50000);
  const employeeNames = filteredEmployees.map((employee) => employee.name.toUpperCase());

  return employeeNames;
}

let employees = [
  { name: "Rahim", salary: 60000 },
  { name: "Karim", salary: 45000 },
  { name: "Sumi", salary: 50000 },
  { name: "Tanvir", salary: 75000 },
  { name: "Anika", salary: 32000 },
  { name: "Sakib", salary: 90000 },
  { name: "Mitu", salary: 48000 },
  { name: "Hasan", salary: 52000 },
  { name: "Nabila", salary: 28000 },
  { name: "Fahim", salary: 65000 },
];
// let employees = []
console.log(getTopEarners(employees));
