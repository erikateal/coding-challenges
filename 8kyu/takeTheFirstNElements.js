//OBJECTIVE
// Enumerable Magic #25 - Take the First N Elements

//LINK
// https://www.codewars.com/kata/545afd0761aa4c3055001386

// INSTRUCTIONS
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// MY SOLUTION
function take(arr, n) {
    return arr.splice(0,n);
  }

// BEST PRACTICE
// function take(arr, n) {
//   return arr.slice(0, n);
// }
