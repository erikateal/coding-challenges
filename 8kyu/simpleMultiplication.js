//OBJECTIVE
// Simple multiplication

//LINK
// https://www.codewars.com/kata/583710ccaa6717322c000105

// INSTRUCTIONS
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// MY SOLUTION
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
    }
      return number * 9
}

// BEST PRACTICE
// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

// WHAT I LEARNED
// Truthy modulus value can be used in ternary operator.