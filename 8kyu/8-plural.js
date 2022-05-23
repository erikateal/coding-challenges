//OBJECTIVE
// Plural

//LINK
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a

// INSTRUCTIONS
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// MY SOLUTION
function plural(n) {
    if(n===1){
        return false;
    }
        return true;
  }

// BEST PRACTICE
// function plural(n) {
//     return n !== 1;
//   }
