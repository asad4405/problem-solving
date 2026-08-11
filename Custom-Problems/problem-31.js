/*
Problem 06: User Role & Permission Mapper
Difficulty: Medium
Function Name: getAdminEmails

Description:
Write a function that takes an array of user objects and returns an array 
of email addresses only for active users (isActive: true) who have the "admin" role.

Input:
An array of objects containing `id`, `name`, `role`, `isActive`, and `email`.

Output:
An array of strings representing the emails of active admins.

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object in the array is missing `role`, `isActive`, or `email`.
3. `isActive` is not a boolean.
4. `role` or `email` is not a string.
*/

function getAdminEmails(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    for (let user of users) {
        if (
            typeof user !== "object" || 
            user === null || 
            !user.role || 
            typeof user.role !== "string" || 
            typeof user.email !== "string" || 
            typeof user.isActive !== "boolean"
        ) { 
            return "Invalid";
        }
    }

    let filteredUsers = users.filter((user) => user.isActive && user.role === "admin");
    return filteredUsers.map((user) => user.email);
}


// let users = [
//   { id: 1, name: "Asad", role: "admin", isActive: true, email: "asad@example.com" },
//   { id: 2, name: "Rahim", role: "user", isActive: true, email: "rahim@example.com" },
//   { id: 3, name: "Karim", role: "admin", isActive: false, email: "karim@example.com" },
//   { id: 4, name: "Sultana", role: "admin", isActive: true, email: "sultana@example.com" },
//   { id: 5, name: "Tanvir", role: "editor", isActive: true, email: "tanvir@example.com" },
//   { id: 6, name: "Nila", role: "admin", isActive: true, email: "nila@example.com" },
//   { id: 7, name: "Fahim", role: "user", isActive: false, email: "fahim@example.com" },
//   { id: 8, name: "Arian", role: "editor", isActive: true, email: "arian@example.com" },
//   { id: 9, name: "Zara", role: "admin", isActive: false, email: "zara@example.com" },
//   { id: 10, name: "Kavya", role: "admin", isActive: true, email: "kavya@example.com" }
// ];

// console.log(getAdminEmails(users));