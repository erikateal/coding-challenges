//OBJECTIVE
// Shortest Word

//LINK
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// INSTRUCTIONS
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// MY SOLUTION
function findShort(s){
    let min = s.split(' ').sort((a,b) => a.length - b.length)
    return min[0].length;
  }

// BEST PRACTICE
// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }
