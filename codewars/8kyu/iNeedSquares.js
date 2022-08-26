//OBJECTIVE
// Be Concise II - I Need Squares

//LINK
// https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e

// INSTRUCTIONS
// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

// MY SOLUTION
function squaresOnly(a) {
  let r = [];
  a.map((x) => (Math.sqrt(x) % 1 === 0 ? r.push(x) : null));
  return r;
}

// BEST PRACTICE
// function squaresOnly(array) {
//   return array.filter(n => Number.isInteger(Math.sqrt(n)))
// }
