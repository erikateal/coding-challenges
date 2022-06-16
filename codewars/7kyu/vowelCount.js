//OBJECTIVE
// Vowel Count

//LINK
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// INSTRUCTIONS
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// MY SOLUTION
function getCount(str) {
    return str.split('').filter(n => n === 'a' || n === 'e' || n === 'i' || n === 'o' || n === 'u').length
  }

// BEST PRACTICE
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }