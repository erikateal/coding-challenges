//OBJECTIVE
// Convert number to reversed array of digits

//LINK
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// INSTRUCTIONS
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// MY SOLUTION
function digitize(n) {
    if(n >= 0){
      return String(n).split('').reverse().map(Number);
      }
  }

// BEST PRACTICE
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
// WHAT I LEARNED
// 