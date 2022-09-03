//OBJECTIVE
// Take an Arrow to the knee, Functionally

//LINK
// https://www.codewars.com/kata/559f3123e66a7204f000009f

// INSTRUCTIONS
// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// MY SOLUTION
var ArrowFunc = function (arr) {
  return arr.map((x) => String.fromCharCode(x)).join("");
};

// BEST PRACTICE
// same as above
