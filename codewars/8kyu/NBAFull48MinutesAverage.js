//OBJECTIVE
// NBA full 48 minutes average

//LINK
// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

// INSTRUCTIONS
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.

// MY SOLUTION
function pointsPer48(ppg, mpg) {
    return mpg == 0 ? 0 : +((ppg/mpg)*48).toFixed(1);
  }

// BEST PRACTICE
// function pointsPer48(ppg, mpg) {
//   return +(ppg/mpg*48).toFixed(1)||0
// }

// WHAT I LEARNED
// + works similarly to Number()