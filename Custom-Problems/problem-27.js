/*
Problem 02: Online Store Inventory Checker
Difficulty: Easy
Function Name: getInStockProducts

Description:
Write a function that takes an array of product objects and returns an array of product titles 
for items that are in stock (stock > 0) and have a price less than or equal to 500 (price <= 500).

Input:
An array of objects, where each object contains `title` (string), `price` (number), and `stock` (number).

Output:
An array of strings (product titles).

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is an empty array.
2. Any object in the array lacks `title`, `price`, or `stock`.
3. `price` or `stock` is not of type number.
*/

function getInStockProducts(products) {
  if (!Array.isArray(products) || products.length === 0) {
    return "Invalid";
  }

  for (const product of products) {
    if (
      typeof product !== "object" ||
      product === null ||
      !product.title ||
      typeof product.price !== "number" ||
      typeof product.stock !== "number"
    ) {
      return "Invalid";
    }
  }

  const filteredProducts = products.filter(
    (product) => product.stock > 0 && product.price <= 500
  );

  return filteredProducts.map((product) => product.title);
}



// let products = [
//   { title: "Wireless Mouse", price: 400, stock: 15 },
//   { title: "Mechanical Keyboard", price: 1200, stock: 8 },
//   { title: "USB Flash Drive", price: 350, stock: 0 },
//   { title: "Bluetooth Earbuds", price: 500, stock: 5 },
//   { title: "Gaming Pad", price: 250, stock: 20 },
//   { title: "HDMI Cable", price: 180, stock: 0 },
//   { title: "Webcam", price: 800, stock: 3 },
//   { title: "Mobile Stand", price: 150, stock: 12 },
//   { title: "Type-C Adapter", price: 300, stock: 0 },
//   { title: "Laptop Sleeve", price: 450, stock: 10 }
// ];
// // let products = [];

// console.log(getInStockProducts(products))