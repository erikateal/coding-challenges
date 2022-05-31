//OBJECTIVE
// Bingo (Or Not)

//LINK
// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

// INSTRUCTIONS
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// MY SOLUTION
function bingo(a) {
    if(a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15)) {
      return 'WIN'
    }
      return 'LOSE'
  }

// BEST PRACTICE
// const bingo = a => [2,7,9,14,15].every(e => a.includes(e)) ? 'WIN' : 'LOSE';
