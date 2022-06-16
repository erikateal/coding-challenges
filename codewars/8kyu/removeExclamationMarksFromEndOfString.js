//OBJECTIVE
// Exclamation marks series #1: Remove an exclamation mark from the end of string

//LINK
// https://www.codewars.com/kata/57fae964d80daa229d000126

// INSTRUCTIONS
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// MY SOLUTION
function remove (string) {
    return string.endsWith('!') ? string.split('').slice(0, -1).join('') : string;
  }

// BEST PRACTICE
// const remove = s => s.replace(/!$/, '');
