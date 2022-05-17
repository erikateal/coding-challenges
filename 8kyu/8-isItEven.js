//OBJECTIVE
// Is it even?

//LINK
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

// INSTRUCTIONS
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// MY SOLUTION
function testEven(n) {
    if (n === 0 || n % 2 === 0){
      return true
    }
      return false
}

// BEST PRACTICE
// function testEven(n) {
//     return n%2===0;
// }
