//OBJECTIVE
// Count of positives / sum of negatives

//LINK
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// INSTRUCTIONS
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// MY SOLUTION
function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    let arr = [];
    if(input && input.length === 0 || input === null){
      return []
    }
    input.map((e) => e > 0 ? count+=1 : sum += e)
    arr = [count, sum]
    return arr
  }
  

// BEST PRACTICE
// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }

