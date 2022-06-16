//OBJECTIVE
// Do you speak "English"?

//LINK
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/

// INSTRUCTIONS
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// MY SOLUTION
function spEng(sentence){
    return sentence.toLowerCase().includes("english");
  }

// BEST PRACTICE
// function spEng(s){
//     return /english/i.test(s)
// }
