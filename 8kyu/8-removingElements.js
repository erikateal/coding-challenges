//OBJECTIVE
// Removing Elements

//LINK
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// INSTRUCTIONS
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// MY SOLUTION
function removeEveryOther(arr){
    return arr.filter((_, index) => index % 2 === 0);
  }

// BEST PRACTICE
// function removeEveryOther(arr){
//   return arr.filter(function(elem, index) {
//     return index % 2 === 0;
//   });
// }
