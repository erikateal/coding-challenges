//OBJECTIVE
// Stop gninnipS My sdroW!

//LINK
// https://www.codewars.com/kata/5264d2b162488dc400000001

// INSTRUCTIONS
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// MY SOLUTION
function spinWords(str) {
  let word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > 4) word[i] = word[i].split("").reverse().join("");
  }
  return word.join(" ");
}

// BEST PRACTICE
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// OPTIMIZED SOLUTION
// function spinWords(string){
//   return string.split(" ").map(x => x.length >= 5 ? x.split("").reverse().join("") : x).join(" ")
// }
