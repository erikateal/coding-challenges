//OBJECTIVE
// Remove duplicates from list

//LINK
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

// INSTRUCTIONS
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// MY SOLUTION
function distinct(a) {
    return [...new Set(a)];
  }

// BEST PRACTICE
// same as above
