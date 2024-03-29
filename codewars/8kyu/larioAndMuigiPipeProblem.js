//OBJECTIVE
// Lario and Muigi Pipe Problem

//LINK
// https://www.codewars.com/kata/56b29582461215098d00000f

// INSTRUCTIONS
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// MY SOLUTION
function pipeFix(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return [...Array(max + 1 - min)].map((x, i) => min + i);
}

// BEST PRACTICE
// function pipeFix(numbers){
//   var first = numbers[0];
//   var last = numbers[numbers.length-1];

//   var arr = [];
//   for(var i = first; i <= last; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
