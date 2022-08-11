//OBJECTIVE
// Currying functions: multiply all elements in an array

//LINK
// https://www.codewars.com/kata/586909e4c66d18dd1800009b

// INSTRUCTIONS
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// MY SOLUTION
function multiplyAll(arr) {
  return function(n) {
    return arr.map(x => x * n);
  }
}

// BEST PRACTICE
// multiplyAll = a => x => a.map(e => e * x);