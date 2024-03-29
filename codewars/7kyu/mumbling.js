//OBJECTIVE
// Mumbling

//LINK
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// INSTRUCTIONS
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// MY SOLUTION
function accum(s) {
  return s
    .split("")
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join("-");
}

// BEST PRACTICE
// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
