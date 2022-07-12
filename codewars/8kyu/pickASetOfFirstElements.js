//OBJECTIVE
// pick a set of first elements

//LINK
// https://www.codewars.com/kata/572b77262bedd351e9000076

// INSTRUCTIONS
// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// MY SOLUTION
function first(arr, n = 1) {
    return n == 0 ? [] : arr.slice(0, n);
  }

// BEST PRACTICE
// function first(arr, n=1) {
//     return arr.slice(0,n);
// }

