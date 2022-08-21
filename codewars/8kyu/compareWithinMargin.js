//OBJECTIVE
// Compare within margin

//LINK
// https://www.codewars.com/kata/56453a12fcee9a6c4700009c

// INSTRUCTIONS
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

// Please note the following:

// When a is close to b, return 0.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.

// Assume: margin >= 0

// MY SOLUTION
function closeCompare(a, b, margin) {
  if (margin === undefined) {
    margin = 0;
  }
  if (margin >= Math.abs(a - b) || margin >= Math.abs(b - a)) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

// BEST PRACTICE
// function closeCompare(a, b, m = 0){
//   return Math.abs(a - b) <= m? 0: Math.sign(a - b);
// }
