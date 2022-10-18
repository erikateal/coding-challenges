//OBJECTIVE
// 'x' marks the spot.

//LINK
// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

//INSTRUCTIONS
// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Examples
// Input: []
// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]
// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]
// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]

//MY SOLUTION
const xMarksTheSpot = (input) => {
  let spot = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x") {
        spot += `${[i]} ${[j]}`;
        count++;
      }
    }
  }
  if (spot.length === 0 || count > 1) {
    return [];
  }
  return spot.split(" ").map((x) => Number(x));
};

//BEST PRACTICE
// const xMarksTheSpot = (input) => {
//   let coords = []

//   for (let i = 0; i < input.length; i++) {
//     if (input[i].includes("x")) {
//       coords.push([i, input[i].indexOf("x")])
//     }
//   }
//   if (coords.length === 1) {
//     return coords[0]
//   } else {
//     return []
//   }
// }
