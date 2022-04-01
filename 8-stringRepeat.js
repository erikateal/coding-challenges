//OBJECTIVE
// String Repeat

//LINK
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// INSTRUCTIONS
// Write a function called repeatStr which repeats the given string string exactly n times.

// MY SOLUTION
function repeatStr (n, s) {
    for(let i=1; i <= n; i++) {
      return s.repeat(n)
    }
  }

// BEST PRACTICE
// function repeatStr (n, s) {
//     for(let i=1; i <= n; i++) {
//       return s.repeat(n)
//     }
//   }

// WHAT I LEARNED
// The repeat() method constructs and returns a new string that contains the specified number of copies of the string concatenated together
// syntax: repeat(count)