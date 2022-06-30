//OBJECTIVE
// Evens and Odds

//LINK
// https://www.codewars.com/kata/583ade15666df5a64e000058

// INSTRUCTIONS
// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.

// MY SOLUTION
function evensAndOdds(num){
    if(num % 2 === 0) {
    return num.toString(2)
    }
    return num.toString(16)
  }  

// BEST PRACTICE
// const evensAndOdds = n => n.toString(n%2 ? 16 : 2);
