// Problem 48 — Product Category Search
// Concepts: typed arrays, object types, function parameters, filter(), return types
// Function name must be: findProducts
// Scenario
// An e-commerce platform contains thousands of products. A customer selects a category, and the application needs to show only the products belonging to that category. Each product has a name, price, and category.
// Task
// Create a function named findProducts. The function should receive an array of products and a category, and return all products that belong to that category.
// Requirement
// If no product matches the category, return an empty array.
// Starter Code
// // TODO: define a type for a product (including category)
 
// function findProducts(products: Product[], category: <type>): <type> {
 
//     // write your code here
 
// }
// Example
// const products = [
//     { name: "iPhone 15", price: 90000, category: "phone" },
//     { name: "Galaxy S24", price: 85000, category: "phone" },
//     { name: "MacBook Air", price: 120000, category: "laptop" },
//     { name: "Dell XPS", price: 110000, category: "laptop" }
// ];
 
// findProducts(products, "phone");
// // returns the iPhone 15 and Galaxy S24 objects
 
// findProducts(products, "laptop");
// // returns the two laptop products


interface Product {
    name: string
    price: number
    category: string
}
function findProducts(products: Product[], category: string): Product[] {
 
    const filterProducts = products.filter((product: Product) => product.category === category);

    return filterProducts;
}




const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];

// console.log(findProducts(products,'phone'));
