//OBJECTIVE
// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

//LINK
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

// INSTRUCTIONS
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// MY SOLUTION
function remove (string) {
    return string.replace(/!/g, '') + '!'
  }

