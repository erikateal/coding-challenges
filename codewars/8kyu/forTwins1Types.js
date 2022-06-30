//OBJECTIVE
// For Twins: 1. Types

//LINK
// https://www.codewars.com/kata/59c1302ecb7fb48757000013

// INSTRUCTIONS
// Task:
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// typeValidation(42, "number");   // => true
// typeValidation("42", "number"); // => false

// MY SOLUTION
function typeValidation(variable, type) {
    return typeof variable === type; 
  }
