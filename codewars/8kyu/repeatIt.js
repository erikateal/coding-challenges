//OBJECTIVE
// repeatIt

//LINK
// https://www.codewars.com/kata/557af9418895e44de7000053

// INSTRUCTIONS
// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

// MY SOLUTION
var repeatIt = function(str, n) {
    if (typeof str !== 'string') {
      return 'Not a string';
    }
    return str.repeat(n);
  }

// BEST PRACTICE
// const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'

