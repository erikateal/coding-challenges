//OBJECTIVE
// Beginner Series #2 Clock

//LINK
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// INSTRUCTIONS
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// MY SOLUTION
function past(h, m, s){
    return 3600000 * h + 60000 * m + 1000 * s
  }
  
  // BEST PRACTICE
  // function past(h, m, s){
  //   return ((h*3600)+(m*60)+s)*1000;
  // }
  
  // WHAT I LEARNED
  //