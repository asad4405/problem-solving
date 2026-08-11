/*
Problem 09: Profile Merger with Default Settings
Difficulty: Medium
Function Name: mergeUserProfile

Description:
Write a function that merges a given user profile object with default settings.
The properties provided in the user object should override the default properties.

Default Settings:
{
    role: "user",
    status: "active",
    theme: "light"
}

Input:
An object containing user details (must include a valid `name`).

Output:
A new merged object combining default properties and user properties using the Spread Operator.

Validation Rules:
Return "Invalid" if:
1. Input is not an object, or is null, or is an array.
2. `name` property is missing or not a string.
*/

function mergeUserProfile(user) {
    if (
        typeof user !== "object" || 
        user === null || 
        Array.isArray(user) || 
        !user.name || 
        typeof user.name !== "string"
    ) {
        return "Invalid";
    }

    const defaultSettings = {
        role: "user",
        status: "active",
        theme: "light"
    };

    return { ...defaultSettings, ...user };
}

console.log(mergeUserProfile({ name: "Asad", theme: "dark" }));
console.log(mergeUserProfile({ name: "Rahim", role: "admin" }));