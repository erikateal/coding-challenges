//OBJECTIVE
// Short Long Short

//LINK
// https://www.codewars.com/kata/50654ddff44f800200000007

// INSTRUCTIONS
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// MY SOLUTION
function solution(a, b){
    return a.length > b.length ? b.concat(a, b) : a.concat(b,a);
  }

// BEST PRACTICE
// function solution(a, b) {
//   return a.length < b.length ? a + b + a : b + a + b
// }
