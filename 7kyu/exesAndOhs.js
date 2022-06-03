//OBJECTIVE
// Exes and Ohs

//LINK
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// INSTRUCTIONS
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// MY SOLUTION
function XO(str) {
    let x = 0;
    let o = 0;
    str.toLowerCase().split('').map(e => {
      if (e.includes('x')){
        x++
      } else if (e.includes('o')) {
        o++
      }
    })
    return x === o
  }

// BEST PRACTICE
// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// WHAT I LEARNED
// this could have been solved with string.split('o').length === string.split('x').length