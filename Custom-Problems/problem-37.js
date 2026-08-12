/*
Problem 37: Property Omitter using Object Destructuring & Rest
Difficulty: Medium
Function Name: removeSensitiveData

Description:
Write a function that removes a specific sensitive property from a given user object.
The original object must not be mutated.

Input:
1. A `user` object.
2. A `keyToRemove` string representing the property name to be deleted.

Output:
A new object without the specified property.

Validation Rules:
1. Return "Invalid" if `user` is not an object, is null, or is an array.
2. Return "Invalid" if `keyToRemove` is not a valid non-empty string.
*/

function removeSensitiveData(user, keyToRemove) {
    if (typeof user !== "object" || user === null || Array.isArray(user)) {
        return "Invalid";
    }

    if (typeof keyToRemove !== "string" || keyToRemove.trim() === "") {
        return "Invalid";
    }

    const newObj = { ...user };
    delete newObj[keyToRemove];

    return newObj;
}

// // Example 1:
// const user1 = { id: 1, name: "Asad", password: "12345secret", role: "admin" };
// console.log(removeSensitiveData(user1, "password"));

// // Example 2:
// const user2 = { name: "Rahim", pin: 9999, status: "active" };
// console.log(removeSensitiveData(user2, "pin"));