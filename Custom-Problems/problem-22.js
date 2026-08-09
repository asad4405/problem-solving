// Problem — Active User Filter
//  Function Name Must be: filterActiveUsers
// A social media platform needs to check the status of its users. 
// The user list is provided as an array of objects. 
// The function must return an array containing only the users whose isActive property is true.

// Input
// An array of objects, where each object contains name and isActive properties.
// Example:
// [
//  {name:"A", isActive:true},
//  {name:"B", isActive:false}
// ]



// Output
// Return an array containing only the users with isActive: true.
// Example:
// [{name:"A", isActive:true}]


// Challenge
// Return "Invalid" if:
// The input is not an array
// The array is empty
// An object does not have the isActive property

// Tips: Try using the filter() method.

// Starter Code:
// function filterActiveUsers(users) {
//     // Write your code here
// }


// Sample Test Cases
//  Input
//  Output
// [{name:"A", isActive:true},{name:"B", isActive:false}]
// [{name:"A", isActive:true}]
// []
// Invalid
// [{name:"A"}]
// Invalid
// "users"
// Invalid


// Problem 22 — Active User Filter
function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }
    for (const user of users) {
        if (typeof user !== "object" || user === null || user.isActive === undefined) {
            return "Invalid";
        }
    }
    return users.filter((user) => user.isActive);
}

let users = [
 {name:"A", isActive:true},
 {name:"B", isActive:false}
];


console.log(filterActiveUsers(users));


