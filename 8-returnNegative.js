//OBJECTIVE
// Return Negative

//LINK
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// INSTRUCTIONS
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// The The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// MY SOLUTION
function makeNegative(num) {
    if (num > 0) {
      return -num
    } else {
      return num
    }
  }
  
  // BEST PRACTICE
  // // function makeNegative(num) {
  //   return -Math.abs(num);
  // }
  
  // WHAT I LEARNED
  // Math.abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
  // Syntax: Math.abs(x)
  