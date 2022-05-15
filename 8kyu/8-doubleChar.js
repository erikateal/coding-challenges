//OBJECTIVE
// Double Char

//LINK
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// INSTRUCTIONS
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// MY SOLUTION
function doubleChar(str) {
    return [...str].map(e => e + e).join('');
  }

// BEST PRACTICE
// const doubleChar = (str) => str.split("").map(c => c + c).join("");
