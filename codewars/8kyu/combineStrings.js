//OBJECTIVE
// Grasshopper - Combine strings

//LINK
// https://www.codewars.com/kata/55f73f66d160f1f1db000059

// INSTRUCTIONS
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

// MY SOLUTION
function combineNames(firstName, lastName){
    return `${firstName} ${lastName}`;
  }

// BEST PRACTICE
// const combineNames = (...names) => names.join(' ');
