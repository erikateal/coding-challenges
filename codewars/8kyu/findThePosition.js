//OBJECTIVE
// Find the position!

//LINK
// https://www.codewars.com/kata/5808e2006b65bff35500008f

// INSTRUCTIONS
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// MY SOLUTION
function position(letter){
    let position = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return `Position of alphabet: ${position.indexOf(letter) + 1}`
   }

// BEST PRACTICE
// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }

// WHAT I LEARNED
// indexOf() method works on strings as well as arrays