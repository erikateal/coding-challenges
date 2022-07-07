//OBJECTIVE
// Maximum Length Difference

//LINK
// https://www.codewars.com/kata/5663f5305102699bad000056

// INSTRUCTIONS
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// MY SOLUTION
function mxdiflg(a1, a2) {
    let a = a1.sort((a,b) => b.length-a.length)
    let b = a2.sort((a,b) => b.length-a.length)
    
    if(a1.length === 0 || a2.length === 0){
      return -1
    } else if(b[0].length - a[a.length -1].length > a[0].length - b[b.length -1].length){
      return b[0].length - a[a.length -1].length
    }
      return a[0].length - b[b.length -1].length
  }

// BEST PRACTICE
// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1
//   let l1 = a1.map(str => str.length)
//   let l2 = a2.map(str => str.length)
//   return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
// }
