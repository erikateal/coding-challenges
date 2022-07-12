//OBJECTIVE
// Sum of Minimums!

//LINK
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

// INSTRUCTIONS
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// MY SOLUTION
function sumOfMinimums(arr) {
    return arr.map(x => Math.min(...x)).reduce((acc,c) => acc + c)
  }

// BEST PRACTICE
// function sumOfMinimums(arr) {
//   return arr.reduce((p, c) => p + Math.min(...c), 0);
// }

// WHAT I LEARNED
// Finding the min of a subarray: array.map(x => Math.min(...x))
