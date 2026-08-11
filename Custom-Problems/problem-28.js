/*
Problem 03: Discount Calculator & Summary
Difficulty: Medium
Function Name: calculateTotalDiscount

Description:
Write a function that calculates a 10% discount on every item in a shopping cart array 
and returns the sum of all discounted prices as a number.

Input:
An array of objects, where each object contains `item` (string) and `price` (number).

Output:
A number representing the total discounted price.

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object in the array lacks `item` or `price`.
3. `price` is not of type number or is less than 0 (negative).
*/

function calculateTotalDiscount(cart) {
    if (!Array.isArray(cart) || cart.length === 0) {
        return "Invalid";
    }

    for (const sCart of cart) {
        if (
            typeof sCart !== "object" ||
            sCart === null ||
            !sCart.item ||
            typeof sCart.price !== "number" ||
            sCart.price < 0
        ) {
            return "Invalid";
        }
    }

    let discountedPrices = cart.map((cartItem) => cartItem.price * 0.9);
    return discountedPrices.reduce((accumulator, price) => accumulator + price, 0);
}

let cart =[
  { item: "Shirt", price: 1000 },
  { item: "Pants", price: 1500 },
  { item: "Jacket", price: 3000 },
  { item: "Shoes", price: 2500 },
  { item: "Socks", price: 200 },
  { item: "Watch", price: 5000 },
  { item: "Cap", price: 400 },
  { item: "Belt", price: 800 },
  { item: "Wallet", price: 1200 },
  { item: "Sunglasses", price: 1800 }
];
console.log(calculateTotalDiscount(cart));