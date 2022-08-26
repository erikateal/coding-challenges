//OBJECTIVE
// Fix the Bugs (Syntax) - My First Kata

//LINK
// https://www.codewars.com/kata/56aed32a154d33a1f3000018

// INSTRUCTIONS
// In this Kata you should try to fix all the syntax errors found in the code.

// Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

// MY SOLUTION
function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}
