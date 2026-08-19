// Problem 3 — Social Media Profile Formatter
// Concepts: object types, type/interface, function parameter typing, return types, template literals
// Function name must be: formatUserProfile
// Scenario
// A social media application stores basic information about its users. The application needs a function that converts a user's structured data into a human-readable profile summary. A user contains name, age, and city.
// Task
// First define an appropriate TypeScript type or interface for the user. Then create a function named formatUserProfile. The function should receive a user object and return a formatted sentence.
// Requirements
// Accept a properly typed user object.
// Return a string.
// Use the values from the object rather than hard-coding the result.

// Starter Code
// // TODO: define a type or interface for the user
 
// function formatUserProfile(user: User): <type> {
 
//     // write your code here
 
// }


// Example
// formatUserProfile({
//     name: "Fahim",
//     age: 22,
//     city: "Dhaka"
// });
 
// // Expected output:
// // "Fahim is 22 years old and lives in Dhaka."



// type User = {
//     name: string
//     age: number
//     city: string
// }

interface User {
    name: string
    age: number
    city: string
}
const formatUserProfile = (user: User): string => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}

// console.log(formatUserProfile({
//     name: "Fahim",
//     age: 22,
//     city: "Dhaka"
// }));
