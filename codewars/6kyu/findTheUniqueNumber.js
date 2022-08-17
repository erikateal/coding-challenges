//OBJECTIVE
// Find the unique number

//LINK
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// INSTRUCTIONS
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// MY SOLUTION
function findUniq(arr) {
  arr = arr.sort();
  let unique = [];

  if (arr[0] === arr[1]) {
    unique = arr[arr.length - 1];
  } else {
    unique = arr[0];
  }
  return +unique;
}

// BEST PRACTICE
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }
