//OBJECTIVE
// Sort by Last Char

//LINK
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

// INSTRUCTIONS
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// MY SOLUTION
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }

// BEST PRACTICE
// same as above

// WHAT I LEARNED
// charCodeAt(index) method returns an integer between 0 and 65535 representing the UFT-16 code at the given index