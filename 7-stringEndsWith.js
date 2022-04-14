//OBJECTIVE
// String ends with?

//LINK
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// INSTRUCTIONS
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// MY SOLUTION
function solution(str, ending){
    return str.endsWith(ending);
  }
  
  // BEST PRACTICE
  // function solution(str, ending){
  //   return str.endsWith(ending);
  // }
  
  // WHAT I LEARNED
  // The .endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.