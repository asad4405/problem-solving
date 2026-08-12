/*
Problem 36: Safe Nested Property Extractor
Difficulty: Medium
Function Name: getCityFromUser

Description:
Write a function that safely extracts the `city` property from a nested user address object
using ES6 Optional Chaining (`?.`).

Input:
A user object that may contain a nested `address` object with a `city` property.

Output:
Returns the `city` string if present, otherwise returns "Unknown City".

Validation Rules:
1. Return "Invalid" if `user` is not an object, is null, or is an array.
2. Return "Unknown City" if `address` or `city` is missing, or if `city` is not a valid non-empty string.
*/

function getCityFromUser(user) {
    if (typeof user !== "object" || user === null || Array.isArray(user)) {
        return "Invalid";
    }

    const city = user?.address?.city;

    if (typeof city === "string" && city.trim() !== "") {
        return city;
    } else {
        return "Unknown City";
    }
}


const user1 = { name: "Asad", address: { city: "Dhaka", zip: 1216 } };
const user2 = { name: "Rahim", address: {} };
const user3 = { name: "Karim" };

console.log(getCityFromUser(user1));
console.log(getCityFromUser(user2));
console.log(getCityFromUser(user3));