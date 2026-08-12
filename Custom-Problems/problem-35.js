/*
Problem 35: Dynamic Price Calculator with Unlimited Discounts
Difficulty: Medium
Function Name: calculateFinalPrice

Description:
Write a function that calculates the final price of a product after sequentially
applying multiple percentage discounts using Rest Parameters and Array.reduce().

Input:
1. basePrice (number)
2. ...discounts (unlimited percentage numbers)

Output:
A number representing the final discounted price.

Validation Rules:
Return "Invalid" if:
1. basePrice is not a number or basePrice <= 0.
2. Any discount is not a number or is outside the range 0 to 100.
*/

function calculateFinalPrice(basePrice, ...discounts) {
    if (typeof basePrice !== "number" || basePrice <= 0) {
        return "Invalid";
    }

    for (const discount of discounts) {
        if (typeof discount !== "number" || discount < 0 || discount > 100) {
            return "Invalid";
        }
    }

    return discounts.reduce((accumulator, discount) => {
        return accumulator - (accumulator * discount / 100);
    }, basePrice);
}

// console.log(calculateFinalPrice(1000, 10, 20)); 
// console.log(calculateFinalPrice(500)); 
// console.log(calculateFinalPrice(2000, 15));