//OBJECTIVE
// Remove String Spaces

//LINK
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// INSTRUCTIONS
// Simple, remove the spaces from the string, then return the resultant string.

// MY SOLUTION
function noSpace(x){
    return x.split(' ').join('')
  }
  
  // BEST PRACTICE
  // function noSpace(x){
  //   return x.replace(/\s/g, '');
  // }
  
  // WHAT I LEARNED
  // Regex