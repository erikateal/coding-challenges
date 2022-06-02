//OBJECTIVE
// Count Odd Numbers below n

//LINK
// https://www.codewars.com/kata/59342039eb450e39970000a6

// INSTRUCTIONS
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// MY SOLUTION
function oddCount(n){
    if(n%2===1){
      return (n/2) - 1/2
    }
      return n/2
  }

// BEST PRACTICE
// const oddCount = n => Math.floor(n/2) 