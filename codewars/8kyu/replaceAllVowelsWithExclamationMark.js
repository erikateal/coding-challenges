//OBJECTIVE
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

//LINK
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

// INSTRUCTIONS
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// MY SOLUTION
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }

