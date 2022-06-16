//OBJECTIVE
// Square(n) Sum

//LINK
// https://www.codewars.com/kata/515e271a311df0350d00000f

// INSTRUCTIONS
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// MY SOLUTION
function squareSum(numbers){
    return numbers.map(numbers => Math.pow(numbers, 2)).reduce((acc,c) => acc + c, 0);
  }

// BEST PRACTICE
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

// WHAT I LEARNED
// 