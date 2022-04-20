//OBJECTIVE
// To square(root) or not to square(root)

//LINK
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

// INSTRUCTIONS
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// MY SOLUTION
function squareOrSquareRoot(array) {
    return array.map(x => Math.sqrt(x) % 1 === 0 ? Math.sqrt(x): Math.pow(x, 2));
  }

// BEST PRACTICE
// function squareOrSquareRoot(array) {
//   return array.map(x => {
//     const r = Math.sqrt(x);
//     return (r % 1 == 0) ? r : (x*x);
//   });  
// }

// WHAT I LEARNED
// Math.sqrt(x) % 1 === 0 is a way to check if a number is a perfect square