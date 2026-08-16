// Problem 1: Typescript
// Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
// Input: let val: unknown = "Hello TypeScript";
// Output: 16 (length), printed twice — once via as string, once via <string>.


let val: unknown = "Hello TypeScript";

const lengthAsSyntax = (val as string).length;
console.log(lengthAsSyntax);

const lengthAngleBracket = (<string>val).length;
console.log(lengthAngleBracket);