//OBJECTIVE
// Simple validation of a username with regex

//LINK
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

// INSTRUCTIONS
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore

// Length should be between 4 and 16 characters (both included).

// MY SOLUTION
function validateUsr(username) {
  let validation = /^([a-z]|\d|_){4,16}$/;
  return validation.test(username);
}

// BEST PRACTICE
// function validateUsr(username) {
//   return /^[0-9a-z_]{4,16}$/.test(username)
// }
