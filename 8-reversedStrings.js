//OBJECTIVE
// Reversed Strings

//LINK
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// INSTRUCTIONS
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// MY SOLUTION
function solution(str){
  return str.split('').reverse().join('');
}

// BEST PRACTICE
// same as above

// WHAT I LEARNED
// .split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
