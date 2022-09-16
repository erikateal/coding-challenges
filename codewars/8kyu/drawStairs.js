//OBJECTIVE
// Draw stairs

//LINK
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

// INSTRUCTIONS
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

// MY SOLUTION
function drawStairs(n) {
  let s = "";

  if (n === 0) return s;
  if (n === 1) return "I";

  for (let i = 1; i < n; i++) {
    s += `I\n${" ".repeat(i)}`;
  }
  return s + "I";
}

// BEST PRACTICE
// const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
