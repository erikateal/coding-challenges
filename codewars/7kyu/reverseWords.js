//OBJECTIVE
// Reverse words

//LINK
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// INSTRUCTIONS
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// MY SOLUTION
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }

// BEST PRACTICE
// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }
