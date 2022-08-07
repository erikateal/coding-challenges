//OBJECTIVE
// Debug Sum of Digits of a Number

//LINK
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

// INSTRUCTIONS
// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// MY SOLUTION
function getSumOfDigits(integer) {
  return String(integer).split("").map(Number).reduce((acc,c) => acc+c)
}

// BEST PRACTICE
// function getSumOfDigits(integer) {
//   return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
// }

