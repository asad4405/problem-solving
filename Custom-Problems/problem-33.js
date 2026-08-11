/*
Problem 08: Shopping Cart Total Price Calculator
Difficulty: Medium
Function Name: calculateCartTotal

Description:
Write a function that calculates the total price of items in a shopping cart. 
Each item object contains `name`, `price`, and `quantity`.

Input:
An array of objects representing items in the cart.

Output:
A number representing the total calculated price.

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object is missing `name`, `price`, or `quantity`.
3. `name` is not a string.
4. `price` is not a number or is < 0.
5. `quantity` is not an integer or is <= 0.
*/

function calculateCartTotal(cart) {
    if (!Array.isArray(cart) || cart.length === 0) {
        return "Invalid";
    }

    for (const item of cart) {
        const { name, price, quantity } = item;

        if (
            typeof item !== "object" ||
            item === null ||
            typeof name !== "string" ||
            typeof price !== "number" ||
            typeof quantity !== "number" ||
            !Number.isInteger(quantity) ||
            price < 0 ||
            quantity <= 0
        ) {
            return "Invalid";
        }
    }

    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}


let cart =[
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
]
console.log(calculateCartTotal(cart));