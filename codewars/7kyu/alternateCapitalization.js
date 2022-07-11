//OBJECTIVE
// Alternate capitalization

//LINK
// https://www.codewars.com/kata/59cfc000aeb2844d16000075

// INSTRUCTIONS
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// MY SOLUTION
function capitalize(s){
    s = s.split('')
    let upper = s.map((x,i)=> i%2===0 ? x.toUpperCase() : x).join('')
    let lower = s.map((x,i)=> i%2===1 ? x.toUpperCase() : x).join('')
    return [upper, lower]
  };
