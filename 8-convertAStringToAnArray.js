//OBJECTIVE
// Convert a string to an array

//LINK
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// INSTRUCTIONS
// Write a function to split a string and convert it into an array of words. * "Robin Singh" ==> ["Robin", "Singh"]

// MY SOLUTION
function stringToArray(string){
  return Array.from(string.split(' '))
}

// BEST PRACTICE
// function stringToArray(string){
//   return string.split(' ');
// }

// WHAT I LEARNED
// Array.from() - static method that creates a new Array from an array-like or iterable object
// .split() - divides a string into an ordered list of substrings and returns them in an array! Array.from() was not needed.
