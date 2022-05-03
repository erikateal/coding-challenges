//OBJECTIVE
// Sum Mixed Array

//LINK
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// INSTRUCTIONS
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// MY SOLUTION
function sumMix(x){
    return x.map(str => Number(str)).reduce((acc, c) => acc + c);
  }

// BEST PRACTICE
// function sumMix(x){
//   return x.map(a => +a).reduce((a, b) => a + b);
// }
