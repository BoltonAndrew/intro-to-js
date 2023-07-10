// This is a single line comment

/*
This is a 
multiline comment
*/

// This is going to print Hello World! to the Console
// console.log(35);

// Variable Declaration
// var age = 35; // variable declaration of an integer (Do Not Use var)

// let variableAge = 35; // variable declaration of an integer

// const constantAge = 40; // constant declaration of an integer

// console.log(variableAge);
// console.log(constantAge);

// variableAge = 37;

// console.log(variableAge);

// constantAge = 41;

// Data Types

// Primitives

// String
let str = "This is a string";
let strNum = "123";

// Number (Integer)
let num = 35;
let decimal = 35.4;

// Boolean (true/false)
let boolT = true;
let boolF = false;

// Undefined (No assigned value)
let variable1;

// Null (No actual value)
let nullVal = null;

// Non-primitives

// Objects/Arrays
let obj = {
  name: "Andy",
  age: 35,
  atWork: true,
};

let arr = ["Andy", 35, true];

// Function
function myFunc() {
  // Here I would write logic
}

// Operations

// Arithmetic (+, -, *, /, %)
let x = 2;
let y = 5;
console.log(y * x);

// Assignment (=)
let newVar = 12;
newVar = 35;
console.log(newVar);
newVar *= 5;
console.log(newVar);

// Comparison
let fName = "Andy";
let lName = "Bolton";
let fullName = fName + " " + lName;
console.log(fullName);
// Double Equals is just value
console.log(fName == lName);
let num1 = 12;
let num2 = "12";
//  Triple equals is value and data type
console.log(num1 === num2);

let int1 = 2;
let int2 = 4;

console.log(int1 > int2);
console.log(int1 < int2);
console.log(int1 <= int2);
console.log(int1 >= int2);
// Not equal to value
console.log(int1 != int2);
// Not equal to value and data type
console.log(int1 !== int2);

// Logical

// AND
console.log("Did it work?", true && true);

// OR
console.log("This is OR", false || true);

// NOT (Opposite)
let bool = true;
console.log(!bool);
